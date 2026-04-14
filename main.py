from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
import requests
import os
import traceback
import time
import threading
import hashlib
import json

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# ===== Interactive-mode tunables =====
UPSTREAM_TIMEOUT = int(os.getenv("UPSTREAM_TIMEOUT", "25"))
CACHE_TTL_SEC = int(os.getenv("CACHE_TTL_SEC", "120"))
CACHE_MAX_ITEMS = int(os.getenv("CACHE_MAX_ITEMS", "80"))

# 429 不在 proxy retry（讓前端決定何時重試），其他錯誤只 retry 一次
RETRY_DELAYS = [3]

# fallback models
FALLBACK_MODELS = [
    m.strip() for m in os.getenv(
        "GEMINI_MODEL_FALLBACKS",
        "models/gemini-2.5-flash,models/gemini-2.0-flash"
    ).split(",")
    if m.strip()
]

UPSTREAM_LOCK = threading.Lock()

CACHE = {}
CACHE_LOCK = threading.Lock()


def now_ts():
    return time.time()


def cleanup_cache():
    with CACHE_LOCK:
        keys = list(CACHE.keys())
        for k in keys:
            if now_ts() - CACHE[k]["time"] > CACHE_TTL_SEC:
                CACHE.pop(k, None)

        if len(CACHE) > CACHE_MAX_ITEMS:
            items = sorted(CACHE.items(), key=lambda kv: kv[1]["time"])
            for k, _ in items[: max(0, len(CACHE) - CACHE_MAX_ITEMS)]:
                CACHE.pop(k, None)


def make_cache_key(model, system, user):
    raw = json.dumps(
        {"model": model, "system": system, "user": user},
        ensure_ascii=False,
        sort_keys=True
    ).encode("utf-8")

    return hashlib.sha256(raw).hexdigest()


def build_payload(system, user):

    payload = {
        "contents": [{"role": "user", "parts": [{"text": user}]}],
        "generationConfig": {
            "temperature": 0.6,
            "response_mime_type": "application/json"
        },
    }

    if system:
        payload["systemInstruction"] = {"parts": [{"text": system}]}

    return payload


def upstream_call(model, system, user):

    url = f"https://generativelanguage.googleapis.com/v1beta/{model}:generateContent?key={GEMINI_API_KEY}"

    payload = build_payload(system, user)

    return requests.post(url, json=payload, timeout=UPSTREAM_TIMEOUT)


def try_models_with_backoff(models, system, user):

    last_error = None

    for model in models:

        for attempt in range(len(RETRY_DELAYS) + 1):

            try:

                r = upstream_call(model, system, user)

                if r.status_code == 200:

                    try:

                        return {
                            "ok": True,
                            "status": 200,
                            "model_used": model,
                            "body": r.json(),
                        }

                    except Exception:

                        return {
                            "ok": False,
                            "status": 502,
                            "model_used": model,
                            "body": {
                                "error": "Upstream returned non-JSON",
                                "raw": r.text[:1000]
                            },
                        }

                if r.status_code in (404, 403, 429, 500, 502, 503, 504):

                    last_error = {
                        "status": r.status_code,
                        "model_used": model,
                        "raw": r.text[:1000],
                    }

                    # 429 直接 break，不在 proxy 端 retry，由前端決定重試時機
                    if r.status_code == 429:
                        break

                    # 404/403 = model 不可用，直接換下一個 model，不重試
                    if r.status_code in (404, 403):
                        break

                    if attempt < len(RETRY_DELAYS):
                        time.sleep(RETRY_DELAYS[attempt])
                        continue

                    break

                try:
                    body = r.json()

                except Exception:

                    body = {
                        "error": "Upstream returned non-JSON",
                        "raw": r.text[:1000]
                    }

                return {
                    "ok": False,
                    "status": r.status_code,
                    "model_used": model,
                    "body": body,
                }

            except requests.Timeout:

                last_error = {
                    "status": 504,
                    "model_used": model,
                    "raw": f"Timeout after {UPSTREAM_TIMEOUT}s",
                }

                if attempt < len(RETRY_DELAYS):
                    time.sleep(RETRY_DELAYS[attempt])
                    continue

                break

            except requests.RequestException as e:

                last_error = {
                    "status": 502,
                    "model_used": model,
                    "raw": str(e),
                }

                if attempt < len(RETRY_DELAYS):
                    time.sleep(RETRY_DELAYS[attempt])
                    continue

                break

    return {
        "ok": False,
        "status": last_error["status"] if last_error else 502,
        "model_used": last_error["model_used"] if last_error else None,
        "body": {
            "error": "Upstream call failed after retries and model fallbacks",
            "detail": last_error or {},
        },
    }


@app.get("/")
def home():
    return "AI Proxy is running"


@app.get("/ping")
def ping():

    return jsonify({
        "ok": True,
        "cache_items": len(CACHE),
        "upstream_timeout": UPSTREAM_TIMEOUT,
        "retry_delays": RETRY_DELAYS,
        "fallback_models": FALLBACK_MODELS,
    })


@app.route("/ai", methods=["POST", "OPTIONS"])
def ai():

    if request.method == "OPTIONS":
        return make_response("", 204)

    try:

        data = request.get_json(force=True, silent=True) or {}

        requested_model = (data.get("model") or "").strip()

        system = data.get("system") or ""
        user = data.get("user") or ""

        if not GEMINI_API_KEY:
            return jsonify({"error": "Missing GEMINI_API_KEY in Replit Secrets"}), 500

        if not user:
            return jsonify({"error": "Missing user prompt"}), 400

        cleanup_cache()

        models = []

        if requested_model:
            models.append(requested_model)

        for m in FALLBACK_MODELS:
            if m not in models:
                models.append(m)

        cache_key = make_cache_key(models[0] if models else "", system, user)

        with CACHE_LOCK:

            hit = CACHE.get(cache_key)

            if hit and now_ts() - hit["time"] <= CACHE_TTL_SEC:

                body = dict(hit["body"])

                body["_proxy"] = {
                    "cache": "hit",
                    "model_used": hit["model_used"],
                    "cached_at": hit["time"],
                }

                return jsonify(body), 200

        with UPSTREAM_LOCK:
            result = try_models_with_backoff(models, system, user)

        status = result["status"]
        body = result["body"]
        model_used = result.get("model_used")

        if result["ok"] and status == 200:

            with CACHE_LOCK:
                CACHE[cache_key] = {
                    "time": now_ts(),
                    "body": body,
                    "model_used": model_used,
                }

            body = dict(body)

            body["_proxy"] = {
                "cache": "miss",
                "model_used": model_used,
                "fallback_models": models,
            }

            return jsonify(body), 200

        friendly = {
            "error": body.get("error", "Upstream error"),
            "status": status,
            "model_used": model_used,
            "detail": body.get("detail") if isinstance(body, dict) else body,
        }

        return jsonify(friendly), status

    except Exception as e:

        traceback.print_exc()

        return jsonify({
            "error": str(e),
            "trace": traceback.format_exc()
        }), 500


if __name__ == "__main__":

    port = int(os.getenv("PORT", "3000"))

    app.run(host="0.0.0.0", port=port)