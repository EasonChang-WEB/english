// script.js — Final Stable (Replit Proxy, no top-level await, works on Edge/mobile)
(() => {
  "use strict";

  // Polyfill: replaceAll for older browsers
  if (!String.prototype.replaceAll) {
    // eslint-disable-next-line no-extend-native
    String.prototype.replaceAll = function (search, replacement) {
      const target = String(this);
      if (search instanceof RegExp) return target.replace(search, replacement);
      return target.split(search).join(replacement);
    };
  }

  const $ = (q) => document.querySelector(q);
  const $$ = (q) => Array.from(document.querySelectorAll(q));

  // ====== Config ======
  const PROXY_BASE = "https://english-test.replit.app";
  const PROXY_AI = PROXY_BASE + "/ai";
  const PROXY_PING = PROXY_BASE + "/ping";

  const AUTO_NEXT_OK_MS = 2000;

  // ====== LocalStorage ======
  const LS_SETTINGS = "eason_settings_v2";
  const LS_STATS = "eason_stats_v4"; // keep last 30d

  function loadJson(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
    } catch (e) {
      return fallback;
    }
  }
  function saveJson(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  }

  // ====== UI helpers ======
  function badge(ok, text) {
    const b = $("#apiBadge");
    if (!b) return;
    const dot = b.querySelector(".dot");
    const label = b.querySelector("span:last-child");
    if (label) label.textContent = text || (ok ? "AI：已連線" : "AI：尚未連線");
    if (dot) dot.style.background = ok ? "var(--good)" : "var(--accent)";
  }

  function showOnly(id) {
    const views = ["viewVocab", "viewGrammar", "viewAiQuiz", "viewStats", "viewSettings", "viewQuiz", "viewResult", "viewError"];
    for (const vid of views) {
      const el = document.getElementById(vid);
      if (!el) continue;
      el.classList.toggle("hidden", vid !== id);
    }
  }

  function setTitle(t) {
    const el = $("#mainTitle");
    if (el) el.textContent = t || "";
  }

  function showError(msg) {
    const box = $("#errText");
    if (box) box.textContent = msg || "Unknown error";
    if ($("#viewError")) showOnly("viewError");
    else alert(msg || "Unknown error");
  }

  function showLoading(text) {
    const m = $("#loadingMask");
    if (!m) return;
    const hd = m.querySelector(".modalHd");
    if (hd) hd.style.display = "none";
    const tt = $("#loadingText");
    if (tt) tt.textContent = text || "正在生成題目請稍後";
    m.classList.remove("hidden");
    m.setAttribute("aria-hidden", "false");
  }
  function hideLoading() {
    const m = $("#loadingMask");
    if (!m) return;
    m.classList.add("hidden");
    m.setAttribute("aria-hidden", "true");
  }

  function openExplain(points) {
    const m = $("#explainMask");
    if (!m) return;
    const hd = m.querySelector(".modalHd");
    if (hd) hd.style.display = "none";
    const arr = Array.isArray(points) ? points : [String(points || "—")];
    const box = $("#explainText");
    if (box) {
      box.style.fontSize = "18px";
      box.style.lineHeight = "1.7";
      box.style.textAlign = "left";
      box.innerHTML =
        '<ul style="margin:0;padding-left:20px">' +
        arr.slice(0, 5).map(p => '<li style="margin:6px 0">' + escapeHtml(p) + '</li>').join("") +
        "</ul>";
    }
    const ok = $("#btnExplainOk");
    if (ok) {
      ok.textContent = "我理解了";
      ok.onclick = () => closeExplain();
      const parent = ok.parentElement;
      if (parent) {
        parent.style.display = "flex";
        parent.style.justifyContent = "center";
      }
    }
    m.classList.remove("hidden");
    m.setAttribute("aria-hidden", "false");
  }
  function closeExplain() {
    const m = $("#explainMask");
    if (!m) return;
    m.classList.add("hidden");
    m.setAttribute("aria-hidden", "true");
  }

  function escapeHtml(s) {
    return (s ?? "").toString()
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function clamp(n, a, b) { return Math.max(a, Math.min(b, n)); }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function normEn(s) {
    return (s || "").trim().toLowerCase().replace(/[\u2019]/g, "'").replace(/\s+/g, " ");
  }
  function formatMarked(text) {
    if (!text) return text;
    return text.replace(/\*\*(.+?)\*\*/g, "【$1】").replace(/\*(.+?)\*/g, "【$1】");
  }
  function spellingHint(ans) {
    const w = (ans || "").trim();
    if (w.length < 3) return w;
    return w[0] + "_".repeat(Math.max(1, w.length - 2)) + w[w.length - 1];
  }
  function clozeNormalizePassage(p) {
    if (!p) return p;
    return p.replace(/(?<!_)\((\d+)\)(?!_)/g, "___($1)___");
  }

  // ====== Settings ======
  function defaultSettings() {
    return {
      difficulty: "標準",
      scope: {}, // key => true/false
      vocabN: 10,
      grammarN: 10,
      spellingN: 10,
      mistakeN: 10,
      readingWords: 200,
      readingQn: 5,
      clozeWords: 150,
      clozeQn: 5,
    };
  }

  const settings = loadJson(LS_SETTINGS, defaultSettings());
  if (!settings.difficulty) settings.difficulty = "標準";
  if (!settings.scope) settings.scope = {};

  function getDifficulty() {
    return settings.difficulty || "標準";
  }
  function difficultyGuide() {
    const d = getDifficulty();
    if (d === "基礎") return "難度：基礎（國七程度；句子較短；選項差異較大）";
    if (d === "標準") return "難度：標準（國八程度；句子自然；至少部分選項具混淆性）";
    if (d === "挑戰") return "難度：挑戰（國八後段~國九；句子較長；干擾選項更像；常見易錯點）";
    if (d === "會考") return "難度：會考（偏會考/段考；情境更完整；混淆選項比例更高；推論/字義更像考題）";
    return "難度：標準（國八程度）";
  }

  // ====== Data ======
  const data = { vocab: [], grammar: [] };

  function loadData() {
    data.vocab = (window.appData?.vocabulary || []).slice();
    data.grammar = (window.appData?.grammar_rules || []).slice();
  }

  function scopeKeyOf(book, unit) {
    return `${book || ""} ${unit || ""}`.trim();
  }

  function buildScopeKeysDynamic() {
    const set = new Set();
    for (const v of data.vocab) set.add(scopeKeyOf(v.book, v.unit));
    for (const g of data.grammar) set.add(scopeKeyOf(g.book, g.unit));
    const keys = Array.from(set).filter(Boolean);

    const bookRank = (b) => {
      if (b.includes("國七上")) return 10;
      if (b.includes("國七下")) return 20;
      if (b.includes("國八上")) return 30;
      if (b.includes("國八下")) return 40;
      if (b.includes("國九上")) return 50;
      if (b.includes("國九下")) return 60;
      return 999;
    };
    const unitRank = (u) => {
      if (/starter/i.test(u)) return 0;
      const n = parseInt(String(u).replace(/\D+/g, "") || "999", 10);
      return isNaN(n) ? 999 : n;
    };

    const arr = keys.map(k => {
      const parts = k.split(/\s+/);
      const unit = parts.pop();
      const book = parts.join(" ");
      return { key: k, book, unit, label: k };
    });

    arr.sort((a, b) => {
      const db = bookRank(a.book) - bookRank(b.book);
      if (db) return db;
      const du = unitRank(a.unit) - unitRank(b.unit);
      if (du) return du;
      return a.key.localeCompare(b.key, "zh-Hant");
    });

    return arr;
  }

  function ensureScopeDefaults(scopeKeys) {
    const hasAny = Object.keys(settings.scope || {}).length > 0;
    if (hasAny) return;
    settings.scope = {};
    for (const it of scopeKeys) settings.scope[it.key] = true;
    saveJson(LS_SETTINGS, settings);
  }

  function selectedScopeSet() {
    const set = new Set();
    for (const k in settings.scope) if (settings.scope[k] !== false) set.add(k);
    return set;
  }

  function filterVocabByScope() {
    const set = selectedScopeSet();
    if (!set.size) return data.vocab.slice();
    return data.vocab.filter(v => set.has(scopeKeyOf(v.book, v.unit)));
  }

  function filterGrammarByScope() {
    const set = selectedScopeSet();
    if (!set.size) return data.grammar.slice();
    return data.grammar.filter(g => set.has(scopeKeyOf(g.book, g.unit)));
  }

  // ====== pick lists for AI guidance ======
  function pickWordListForAI(maxN) {
    const pool = filterVocabByScope();
    const words = pool.map(v => String(v.word || "").trim()).filter(Boolean);
    const uniqLower = Array.from(new Set(words.map(w => w.toLowerCase())));
    const uniq = uniqLower.map(lw => words.find(w => w.toLowerCase() === lw) || lw);
    return shuffle(uniq).slice(0, maxN);
  }

  function pickGrammarListForAI(maxN) {
    const pool = filterGrammarByScope();
    const items = pool.map(g => {
      const title = String(g.title || "").trim();
      if (!title) return "";
      const ex = Array.isArray(g.examples) ? g.examples.slice(0, 2).join(" / ") : "";
      const head = scopeKeyOf(g.book, g.unit);
      return `${head}｜${title}${ex ? `｜例：${ex}` : ""}`.trim();
    }).filter(Boolean);
    const uniq = Array.from(new Set(items));
    return uniq.slice(0, maxN);
  }

  // ====== Normalize options ======
  function normalizeOptions4(options, answer) {
    let opts = Array.isArray(options) ? options.map(s => String(s).trim()).filter(Boolean) : [];

    if (typeof answer === "string" && /^[A-D]$/i.test(answer.trim())) {
      const idx = answer.trim().toUpperCase().charCodeAt(0) - 65;
      if (opts[idx]) answer = opts[idx];
    }

    opts = opts.filter(o => !/^[A-D]$/i.test(o));
    opts = Array.from(new Set(opts));

    if (answer && !opts.includes(answer)) opts.push(answer);

    const fillers = ["(A) None of these", "(B) All of these", "(C) Not sure", "(D) No idea"];
    let i = 0;
    while (opts.length < 4 && i < fillers.length) {
      if (!opts.includes(fillers[i])) opts.push(fillers[i]);
      i++;
    }

    opts = shuffle(opts).slice(0, 4);
    if (answer && !opts.includes(answer)) opts[0] = answer;

    return { options: opts, answer };
  }

  // ====== Stats (today/7/30) ======
  const stats = loadJson(LS_STATS, { sessions: [] });

  function pruneStats30d() {
    const now = Date.now();
    const DAY = 86400 * 1000;
    stats.sessions = (stats.sessions || []).filter(x => (x.time || 0) >= now - 30 * DAY);
    saveJson(LS_STATS, stats);
  }

  function renderStats() {
    pruneStats30d();
    const now = Date.now();
    const DAY = 86400 * 1000;

    let rangeDays = 7;
    const sel = $("#statRange");
    if (sel) {
      const v = (sel.value || "7").toString();
      if (v.includes("今日")) rangeDays = 1;
      else {
        const n = parseInt(v, 10);
        if (!isNaN(n)) rangeDays = n;
      }
    }
    const since = now - rangeDays * DAY;
    const sessions = (stats.sessions || []).filter(x => (x.time || 0) >= since);

    const total = sessions.length;
    const avg = total ? Math.round(sessions.reduce((a, b) => a + (b.score || 0), 0) / total) : 0;
    const wrong = total ? sessions.reduce((a, b) => a + (b.wrong || 0), 0) : 0;

    const elS = $("#statSessions"); if (elS) elS.textContent = String(total);
    const elA = $("#statAvg"); if (elA) elA.textContent = String(avg);
    const elW = $("#statWrong"); if (elW) elW.textContent = String(wrong);

    const box = $("#statsByType");
    if (!box) return;
    box.innerHTML = "";

    const types = [
      { k: "vocab", name: "單字測驗" },
      { k: "grammar", name: "文法測驗" },
      { k: "reading", name: "閱讀測驗" },
      { k: "spelling", name: "拼字填空" },
      { k: "mistake", name: "選出錯誤" },
      { k: "cloze", name: "克漏字" },
    ];

    for (const t of types) {
      const ss = sessions.filter(x => x.type === t.k);
      const c = ss.length;
      const a = c ? Math.round(ss.reduce((p, q) => p + (q.score || 0), 0) / c) : 0;
      const w = c ? ss.reduce((p, q) => p + (q.wrong || 0), 0) : 0;

      const div = document.createElement("div");
      div.className = "item";
      div.style.marginBottom = "10px";
      div.innerHTML =
        `<div class="t"><b>${t.name}</b><span></span></div>` +
        `<div class="small" style="margin-top:8px"><b>練習次數：</b>${c}　<b>平均分數：</b>${a}　<b>錯題數：</b>${w}</div>`;
      box.appendChild(div);
    }
  }

  // ====== Proxy connection ping ======
  function pingProxy() {
    fetch(PROXY_PING, { method: "GET" })
      .then(r => { if (r.ok) badge(true, "AI：已連線"); else badge(false, "AI：尚未連線"); })
      .catch(() => badge(false, "AI：尚未連線"));
  }

  // ====== Proxy AI call (lock + 429 backoff) ======
  function getPreferredModel() {
    const pref = Array.isArray(globalThis.GEMINI_MODEL_PREFERENCE) ? globalThis.GEMINI_MODEL_PREFERENCE : [];
    if (pref.length) return pref[0];
    return "models/gemini-2.5-flash";
  }

  async function callGemini(model, system, user) {
    if (window.__AI_IN_FLIGHT__) throw new Error("AI 忙碌中，請稍後再試");
    window.__AI_IN_FLIGHT__ = true;

    const payload = { model, system, user };

    try {
      for (let attempt = 0; attempt <= 2; attempt++) {
        const r = await fetch(PROXY_AI, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (r.status === 429) {
          const wait = 1500 * (attempt + 1);
          await new Promise(res => setTimeout(res, wait));
          continue;
        }

        const ct = (r.headers.get("content-type") || "").toLowerCase();
        if (!ct.includes("application/json")) {
          const t = await r.text();
          throw new Error(`Proxy HTTP ${r.status}: ${t.slice(0, 200)}`);
        }

        const jr = await r.json();
        if (!r.ok) {
          throw new Error(jr?.error || JSON.stringify(jr));
        }

        badge(true, "AI：已連線");

        const text = (jr?.candidates?.[0]?.content?.parts || []).map(p => p.text || "").join("");
        try {
          return JSON.parse(text);
        } catch (e) {
          const c = text.replace(/^```json\s*/i, "").replace(/```\s*$/i, "").trim();
          return JSON.parse(c);
        }
      }
      throw new Error("AI 請求過於頻繁（429），請稍後再試");
    } finally {
      window.__AI_IN_FLIGHT__ = false;
    }
  }

  async function gjson(system, user) {
    const model = getPreferredModel();
    return await callGemini(model, system, user);
  }

  // ====== Quiz engine ======
  let quiz = null;        // {type, meta, idx, score, questions, passage?}
  let wrongCount = 0;     // per session

  function resetQuizUI() {
    const fb = $("#feedback");
    if (fb) { fb.classList.add("hidden"); fb.textContent = ""; fb.classList.remove("good", "bad"); }
    const ack = $("#ackRow"); if (ack) ack.classList.add("hidden");
    const opt = $("#options"); if (opt) opt.innerHTML = "";
    const inb = $("#inputBox"); if (inb) inb.classList.add("hidden");
    const rb = $("#readingBox"); if (rb) rb.classList.add("hidden");
    const rp = $("#readingPassage"); if (rp) rp.textContent = "";
    const ta = $("#textAnswer"); if (ta) ta.value = "";
  }

  function updateProg() {
    const total = quiz.questions.length || 1;
    const pct = clamp((quiz.idx / total) * 100, 0, 100);
    const bar = $("#progBar"); if (bar) bar.style.width = pct + "%";
    const s = $("#scoreLive"); if (s) s.textContent = String(Math.round((quiz.score / total) * 100));
    const meta = $("#quizMeta"); if (meta) meta.textContent = quiz.meta;
  }

  function showFb(ok, msg) {
    const fb = $("#feedback");
    if (!fb) return;
    fb.classList.remove("hidden", "good", "bad");
    fb.classList.add(ok ? "good" : "bad");
    fb.textContent = msg;
  }

  function endQuiz() {
    showOnly("viewResult");
    const total = quiz.questions.length || 1;
    const score = Math.round((quiz.score / total) * 100);
    const fs = $("#finalScore"); if (fs) fs.textContent = String(score);
    const rm = $("#resultMeta"); if (rm) rm.textContent = quiz.meta;
    const fn = $("#finalNote");
    if (fn) fn.textContent = score >= 90 ? "很穩，今天可以提早下課。" : score >= 70 ? "不錯，再補兩個弱點就更漂亮。" : "先別氣餒，明天再來一次。";

    pruneStats30d();
    stats.sessions.push({ time: Date.now(), type: quiz.type, score, wrong: wrongCount });
    saveJson(LS_STATS, stats);
  }

  function nextQ() {
    const ack = $("#ackRow"); if (ack) ack.classList.add("hidden");
    quiz.idx += 1;
    if (quiz.idx >= quiz.questions.length) { endQuiz(); return; }
    renderQ();
  }

  function renderQ() {
    resetQuizUI();
    updateProg();
    const cur = quiz.questions[quiz.idx];

    if (quiz.passage && $("#readingBox")) {
      $("#readingBox").classList.remove("hidden");
      const rp = $("#readingPassage"); if (rp) rp.textContent = quiz.passage;
    }

    const title = $("#qTitle");
    if (title) title.textContent = `(${quiz.idx + 1}/${quiz.questions.length}) ${formatMarked(cur.prompt || "")}`;

    // mistake type
    if (cur.kind === "mistake") {
      const box = $("#options");
      if (!box) return;
      box.innerHTML = "";
      for (const ch of cur.choices) {
        const b = document.createElement("button");
        b.className = "opt";
        b.textContent = ch;
        b.onclick = () => {
          $$(".opt").forEach(x => x.disabled = true);
          const ok = (ch === cur.wrong);
          if (ok) {
            quiz.score += 1;
            showFb(true, `○ 選擇正確　正確答案：${cur.correction}`);
            setTimeout(nextQ, AUTO_NEXT_OK_MS);
          } else {
            wrongCount += 1;
            showFb(false, `╳ 選擇錯誤　正確選擇【${cur.wrong}】　正確答案：${cur.correction}`);
            const ack = $("#ackRow"); if (ack) ack.classList.remove("hidden");
          }
        };
        box.appendChild(b);
      }
      return;
    }

    // text
    if (cur.kind === "text") {
      const inb = $("#inputBox");
      if (inb) inb.classList.remove("hidden");
      const submit = () => {
        const ok = normEn($("#textAnswer")?.value || "") === normEn(cur.answer || "");
        if (ok) {
          quiz.score += 1;
          showFb(true, "✅ 正確");
          setTimeout(nextQ, AUTO_NEXT_OK_MS);
        } else {
          wrongCount += 1;
          showFb(false, "❌ 正確答案：" + cur.answer);
          const ack = $("#ackRow"); if (ack) ack.classList.remove("hidden");
        }
      };
      const btn = $("#btnSubmitText"); if (btn) btn.onclick = submit;
      const ta = $("#textAnswer");
      if (ta) {
        ta.onkeydown = (ev) => { if (ev.key === "Enter") { ev.preventDefault(); submit(); } };
        ta.focus();
      }
      return;
    }

    // mc
    const box = $("#options");
    if (!box) return;
    box.innerHTML = "";
    for (const opt of (cur.options || [])) {
      const b = document.createElement("button");
      b.className = "opt";
      b.textContent = opt;
      b.onclick = () => {
        $$(".opt").forEach(x => x.disabled = true);
        const ok = (opt === cur.answer);
        if (ok) {
          quiz.score += 1;
          showFb(true, "✅ 正確");
          setTimeout(nextQ, AUTO_NEXT_OK_MS);
        } else {
          wrongCount += 1;
          showFb(false, "❌ 正確答案：" + cur.answer);
          const ack = $("#ackRow"); if (ack) ack.classList.remove("hidden");
        }
      };
      box.appendChild(b);
    }
  }

  // ====== Explain ======
  async function explainCurrent() {
    if (!quiz) return;
    const cur = quiz.questions[quiz.idx];
    const answer = cur.kind === "mistake" ? (cur.correction || "") : (cur.answer || "");
    const opts = cur.kind === "mistake" ? (cur.choices || []).join(" / ") : (cur.options || []).join(" / ");

    try {
      showLoading("正在生成解釋請稍後");
      const out = await gjson(
        `你是國中英文老師。請用繁體中文、條列式（3~5點），50~100字解釋此題。只回 JSON：{ "points":[ "...", ... ] }`,
        `題目：${cur.prompt}\n選項：${opts}\n正確答案：${answer}\n請解釋。`
      );
      hideLoading();
      const pts = Array.isArray(out.points) ? out.points : ["看句型與主詞一致", "把答案代回去是否通順", "注意介系詞/時態用法"];
      openExplain(pts);
    } catch (e) {
      hideLoading();
      openExplain(["先找句型（be/do/does/時態）。", "看主詞單複數是否一致。", "把答案代回去確認通順。"]);
    }
  }

  // ====== Quiz builders ======
  function easyWordFilterOn() {
    return (settings.difficulty || "標準") !== "基礎";
  }

  function buildVocabQuiz() {
    const poolAll = filterVocabByScope();
    let pool = poolAll;
    if (easyWordFilterOn()) {
      const easyStop = new Set(["a","an","the","i","you","he","she","it","we","they","am","is","are","be","do","does","did","and","but","in","on","at","to","for"]);
      pool = poolAll.filter(v => {
        const w = (v.word || "").toLowerCase().trim();
        if (!w) return false;
        if (easyStop.has(w)) return false;
        if ((v.unit || "").toLowerCase() === "starter") return false;
        if (w.length <= 3) return false;
        return true;
      });
    }
    const n = settings.vocabN || 10;
    if (pool.length < Math.min(10, n)) throw new Error("單字庫太少或範圍過窄");

    const pick = shuffle(pool).slice(0, n);
    const qs = [];

    const inputN = Math.max(0, Math.min(3, Math.floor(n * 0.3)));
    const zh2enMcN = Math.max(1, Math.floor(n * 0.2));

    for (let i = 0; i < n; i++) {
      const v = pick[i];
      if (i < inputN) {
        qs.push({ kind: "text", prompt: `中翻英：${v.def}`, answer: v.word });
      } else if (i < inputN + zh2enMcN) {
        const cand = [v.word, ...shuffle(pool).filter(x => x.word !== v.word).slice(0, 6).map(x => x.word)];
        const fixed = normalizeOptions4(cand, v.word);
        qs.push({ kind: "mc", prompt: `中翻英：${v.def}`, options: fixed.options, answer: fixed.answer });
      } else {
        const cand = [v.def, ...shuffle(pool).filter(x => x.def !== v.def).slice(0, 6).map(x => x.def)];
        const fixed = normalizeOptions4(cand, v.def);
        qs.push({ kind: "mc", prompt: `英翻中：${v.word}`, options: fixed.options, answer: fixed.answer });
      }
    }

    quiz = { type: "vocab", meta: "單字測驗", idx: 0, score: 0, questions: qs };
  }

  async function startVocabQuiz() {
    try {
      wrongCount = 0;
      buildVocabQuiz();
      showOnly("viewQuiz");
      renderQ();
    } catch (e) {
      showError(String(e.message || e));
    }
  }

  async function startGrammarQuiz() {
    const n = settings.grammarN || 10;
    const grammarList = pickGrammarListForAI(25).join("\n");
    if (!grammarList) { showError("文法庫太少或範圍過窄"); return; }

    const confusable = `
混淆選項要求（很重要）：
- 選項要彼此相似且容易搞錯，但只有一個是語法正確
- 常見混淆組合：
  * 時態：go / goes / went / going；have / has / had / having
  * 助動詞：do / does / did / doing
  * 介系詞：in / on / at / for；to / for / with / about
  * 連接詞：because / so / but / although；before / after / when / while
  * 可數不可數：much / many / a lot / a lot of
- 至少 50% 題目需兩個以上選項看起來合理但只有一個正確
`;

    try {
      wrongCount = 0;
      showLoading("正在生成題目請稍後");
      const out = await gjson(
`你是國中英文出題老師。${difficultyGuide()}
請「只依照下列文法點」出 ${n} 題四選一（options 剛好 4 個）。
只回 JSON：{ "questions":[ { "prompt":"...", "options":[...], "answer":"..." } ] }
規則：
- 題目文法必須落在下列清單
- prompt 不要以 Choose the 開頭
- 句子自然通順，不要童書句
- options 必須剛好 4 個
- answer 必須等於 options 其中之一（不可用 A/B/C/D）
${confusable}
文法清單：
${grammarList}`, "請開始出題。"
      );

      const raw = (out.questions || []).slice(0, n);
      const qs = raw.map((x, i) => {
        const fixed = normalizeOptions4(x.options, x.answer);
        return { kind: "mc", prompt: x.prompt || `題目 ${i + 1}`, options: fixed.options, answer: fixed.answer };
      });

      hideLoading();
      quiz = { type: "grammar", meta: "文法測驗", idx: 0, score: 0, questions: qs };
      showOnly("viewQuiz");
      renderQ();
    } catch (e) {
      hideLoading();
      showError("文法出題失敗：" + (e.message || String(e)));
    }
  }

  async function startSpellingQuiz() {
    const n = settings.spellingN || 10;
    const wordList = pickWordListForAI(80);
    if (wordList.length < 10) { showError("單字庫太少或範圍過窄"); return; }

    try {
      wrongCount = 0;
      showLoading("正在生成題目請稍後");
      const out = await gjson(
`你是國中英文老師。${difficultyGuide()}
請「只使用下列單字作為答案」出 ${n} 題拼字填空。
只回 JSON：{ "questions":[ { "prompt":"... ______ ...", "answer":"..." } ] }
規則：
- answer 必須完全等於單字清單其中之一
- prompt 句子要自然通順，挖空用 ______，且句子中不要出現答案本身
單字清單：
${wordList.join(", ")}`, "請開始出題。"
      );

      const raw = (out.questions || []).slice(0, n);
      const qs = raw.map((x, i) => {
        const ans = (x.answer || "").trim();
        let prompt = x.prompt || `拼字題 ${i + 1}`;
        if (prompt.includes("______") && ans) {
          const first = ans[0], last = ans[ans.length - 1];
          const hint = spellingHint(ans);
          const seg = new RegExp(first + "\\s*______\\s*" + last);
          if (seg.test(prompt)) prompt = prompt.replace(seg, hint);
          else prompt = prompt.replace("______", hint);
        }
        return { kind: "text", prompt, answer: ans };
      });

      hideLoading();
      quiz = { type: "spelling", meta: "拼字填空", idx: 0, score: 0, questions: qs };
      showOnly("viewQuiz");
      renderQ();
    } catch (e) {
      hideLoading();
      showError("拼字填空出題失敗：" + (e.message || String(e)));
    }
  }

  async function startFindMistakeQuiz() {
    const n = settings.mistakeN || 10;
    const grammarList = pickGrammarListForAI(20).join("\n");
    if (!grammarList) { showError("文法庫太少或範圍過窄"); return; }

    const confusable = `
混淆選項要求（很重要）：
- 選項要彼此相似且容易搞錯，但只有一個是語法正確
- 常見混淆組合：
  * 時態：go / goes / went / going
  * 介系詞：in / on / at / for
  * 連接詞：because / so / but / although
`;

    try {
      wrongCount = 0;
      showLoading("正在生成題目請稍後");
      const out = await gjson(
`你是國中英文老師。${difficultyGuide()}
請「只依照下列文法點」出 ${n} 題「選出錯誤」。
只回 JSON：{ "questions":[ { "prompt":"...", "choices":["on","time","...","..."], "wrong":"on", "correction":"in" } ] }
規則：
- choices 必須剛好 4 個，且為純文字（不要含【】）
- prompt 必須包含 choices 的四個字，並在句子中用【】標示四個字（都要標）
- wrong 必須等於 choices 其中之一（錯誤那個）
- correction 是正確用法（單字或片語），語意需通順
- prompt 不要包含奇怪符號
${confusable}
文法清單：
${grammarList}`, "請開始出題。"
      );

      const raw = (out.questions || []).slice(0, n);
      const qs = raw.map((x, i) => {
        const choices = Array.isArray(x.choices) ? x.choices.map(s => String(s).trim()).filter(Boolean).slice(0, 4) : [];
        const wrong = String(x.wrong || "").trim();
        let prompt = String(x.prompt || `題目 ${i + 1}`).replace(/`/g, "").replace(/【/g, "").replace(/】/g, "");
        for (const t of choices) {
          const reTok = new RegExp("\\b" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "g");
          prompt = prompt.replace(reTok, "【" + t + "】");
        }
        return { kind: "mistake", prompt, choices, wrong, correction: String(x.correction || "").trim() };
      });

      hideLoading();
      quiz = { type: "mistake", meta: "選出錯誤", idx: 0, score: 0, questions: qs };
      showOnly("viewQuiz");
      renderQ();
    } catch (e) {
      hideLoading();
      showError("選出錯誤出題失敗：" + (e.message || String(e)));
    }
  }

  async function startReadingQuiz() {
    const wordsCount = settings.readingWords || 200;
    const qCount = settings.readingQn || 5;

    const wordsList = pickWordListForAI(80).join(", ");
    const grammarList = pickGrammarListForAI(14).join("\n");

    try {
      wrongCount = 0;
      showLoading("正在生成題目請稍後");
      const out = await gjson(
`你是國中英文閱讀出題老師。${difficultyGuide()}
請產出一篇約 ${wordsCount} 字英文短文，並產出 ${qCount} 題四選一。
只回 JSON：{ "passage":"...", "questions":[ { "prompt":"...", "options":[...], "answer":"..." } ] }

文章要求：
- 文章必須通順、有意義、像真正國中閱讀文章
- 優先參考「單字清單」與「文法清單」，但以自然通順為主（不必硬塞）
- 允許常見功能字不在清單內
- 每句平均 12–18 字，避免過短句連發

題目要求：
- 題型涵蓋主旨、細節、推論、字義（題數>4可加）
- options 必須剛好 4 個
- answer 必須等於 options 其中之一（不可用 A/B/C/D）

單字清單：
${wordsList}

文法清單：
${grammarList}`, "請開始出題。"
      );

      const passage = out.passage || "";
      const raw = (out.questions || []).slice(0, qCount);
      const qs = raw.map((x, i) => {
        const fixed = normalizeOptions4(x.options, x.answer);
        return { kind: "mc", prompt: x.prompt || `題目 ${i + 1}`, options: fixed.options, answer: fixed.answer };
      });

      hideLoading();
      quiz = { type: "reading", meta: "閱讀測驗", idx: 0, score: 0, questions: qs, passage };
      showOnly("viewQuiz");
      renderQ();
    } catch (e) {
      hideLoading();
      showError("閱讀出題失敗：" + (e.message || String(e)));
    }
  }

  async function startClozeQuiz() {
    const wordsCount = settings.clozeWords || 150;
    const qCount = settings.clozeQn || 5;

    const wordsList = pickWordListForAI(80).join(", ");
    const grammarList = pickGrammarListForAI(14).join("\n");

    try {
      wrongCount = 0;
      showLoading("正在生成題目請稍後");
      const out = await gjson(
`你是國中英文老師。${difficultyGuide()}
請產出約 ${wordsCount} 字克漏字短文 + ${qCount} 題四選一。
只回 JSON：{ "passage":"...", "questions":[ { "prompt":"(1) ...", "options":[...], "answer":"..." } ] }

短文要求：
- 文章務必通順、有意義（像段考短文）
- 優先參考「單字清單」與「文法清單」，但以語意通順為主
- 允許常見功能字不在清單內
- 空格格式必須是 ___(1)___ 到 ___(${qCount})___（要有底線）

題目要求：
- options 必須剛好 4 個
- answer 必須等於 options 其中之一（不可用 A/B/C/D）
- 空格考點分散：介系詞/時態/連接詞/代名詞/可數不可數等

單字清單：
${wordsList}

文法清單：
${grammarList}`, "請開始出題。"
      );

      let passage = clozeNormalizePassage(out.passage || "");
      const raw = (out.questions || []).slice(0, qCount);
      const qs = raw.map((x, i) => {
        const fixed = normalizeOptions4(x.options, x.answer);
        return { kind: "mc", prompt: x.prompt || `第${i + 1}題`, options: fixed.options, answer: fixed.answer };
      });

      hideLoading();
      quiz = { type: "cloze", meta: "克漏字", idx: 0, score: 0, questions: qs, passage };
      showOnly("viewQuiz");
      renderQ();
    } catch (e) {
      hideLoading();
      showError("克漏字出題失敗：" + (e.message || String(e)));
    }
  }

  // ====== Settings UI (dynamic scan) ======
  function ensureDifficultyUI() {
    if ($("#setDifficulty")) return;
    const saveBtn = $("#btnSaveSettings");
    if (!saveBtn) return;

    const row = document.createElement("div");
    row.className = "row";
    row.style.marginTop = "10px";

    const label = document.createElement("label");
    label.className = "small";
    label.textContent = "難度 ";
    const sel = document.createElement("select");
    sel.id = "setDifficulty";
    sel.style.width = "140px";
    ["基礎", "標準", "挑戰", "會考"].forEach(v => {
      const op = document.createElement("option");
      op.value = v;
      op.textContent = v;
      sel.appendChild(op);
    });
    label.appendChild(sel);
    row.appendChild(label);

    const container = saveBtn.closest(".item") || saveBtn.parentElement;
    const center = saveBtn.parentElement;
    if (center && center.parentElement) center.parentElement.insertBefore(row, center);
    else container.appendChild(row);
  }

  function renderScopeUI(scopeKeys) {
    const list = $("#scopeList");
    if (!list) return;
    list.innerHTML = "";

    for (const it of scopeKeys) {
      const id = "sc_" + it.key.replace(/\s+/g, "_");
      const wrap = document.createElement("label");
      wrap.className = "small";
      wrap.style.display = "inline-flex";
      wrap.style.alignItems = "center";
      wrap.style.gap = "6px";
      wrap.innerHTML = `<input type="checkbox" id="${id}"> ${escapeHtml(it.label)}`;
      list.appendChild(wrap);

      const cb = wrap.querySelector("input");
      cb.checked = settings.scope[it.key] !== false;
      cb.onchange = () => { settings.scope[it.key] = cb.checked; };
    }

    const all = $("#scopeAll");
    if (all) {
      all.checked = scopeKeys.every(it => settings.scope[it.key] !== false);
      all.onchange = () => {
        const v = all.checked;
        for (const it of scopeKeys) settings.scope[it.key] = v;
        renderScopeUI(scopeKeys);
      };
    }
  }

  function syncSettingsToUI(scopeKeys) {
    ensureDifficultyUI();

    if ($("#setVocabN")) $("#setVocabN").value = String(settings.vocabN);
    if ($("#setGrammarN")) $("#setGrammarN").value = String(settings.grammarN);
    if ($("#setSpellingN")) $("#setSpellingN").value = String(settings.spellingN);
    if ($("#setMistakeN")) $("#setMistakeN").value = String(settings.mistakeN);
    if ($("#setReadingWords")) $("#setReadingWords").value = String(settings.readingWords);
    if ($("#setReadingQn")) $("#setReadingQn").value = String(settings.readingQn);
    if ($("#setClozeWords")) $("#setClozeWords").value = String(settings.clozeWords);
    if ($("#setClozeQn")) $("#setClozeQn").value = String(settings.clozeQn);
    if ($("#setDifficulty")) $("#setDifficulty").value = String(settings.difficulty);

    renderScopeUI(scopeKeys);
  }

  function saveSettingsFromUI() {
    if ($("#setVocabN")) settings.vocabN = parseInt($("#setVocabN").value, 10);
    if ($("#setGrammarN")) settings.grammarN = parseInt($("#setGrammarN").value, 10);
    if ($("#setSpellingN")) settings.spellingN = parseInt($("#setSpellingN").value, 10);
    if ($("#setMistakeN")) settings.mistakeN = parseInt($("#setMistakeN").value, 10);
    if ($("#setReadingWords")) settings.readingWords = parseInt($("#setReadingWords").value, 10);
    if ($("#setReadingQn")) settings.readingQn = parseInt($("#setReadingQn").value, 10);
    if ($("#setClozeWords")) settings.clozeWords = parseInt($("#setClozeWords").value, 10);
    if ($("#setClozeQn")) settings.clozeQn = parseInt($("#setClozeQn").value, 10);
    if ($("#setDifficulty")) settings.difficulty = $("#setDifficulty").value;

    saveJson(LS_SETTINGS, settings);
  }

  // ====== Vocab/Grammar list filters ======
  function fillUnitSelect(selId, items) {
    const sel = document.getElementById(selId);
    if (!sel) return;
    const current = sel.value;
    sel.innerHTML = '<option value="">全部單元</option>';
    const units = Array.from(new Set(items)).filter(Boolean).sort();
    for (const u of units) {
      const op = document.createElement("option");
      op.value = u;
      op.textContent = u;
      sel.appendChild(op);
    }
    sel.value = current;
  }

  function renderVocab() {
    fillUnitSelect("vocabFilterUnit", data.vocab.map(v => scopeKeyOf(v.book, v.unit)));
    const uf = $("#vocabFilterUnit") ? $("#vocabFilterUnit").value : "";
    const q = ($("#vocabSearch") ? $("#vocabSearch").value : "").trim().toLowerCase();
    const box = $("#vocabList"); if (!box) return;
    box.innerHTML = "";

    const items = data.vocab.filter(v => {
      const u = scopeKeyOf(v.book, v.unit);
      if (uf && u !== uf) return false;
      if (!q) return true;
      return (v.word || "").toLowerCase().includes(q) || (v.def || "").toLowerCase().includes(q);
    }).slice(0, 250);

    for (const v of items) {
      const div = document.createElement("div");
      div.className = "item";
      div.innerHTML =
        `<div class="t"><b>${escapeHtml(v.word)} <span style="font-weight:400;color:var(--muted);margin-left:10px">${escapeHtml(v.def || "")}</span></b>` +
        `<span>${escapeHtml(scopeKeyOf(v.book, v.unit))}</span></div>`;
      box.appendChild(div);
    }
  }

  function compareBookUnitTitle(a, b) {
    const bk = (x) => (String(x.book || "").includes("下") ? 2 : (String(x.book || "").includes("上") ? 1 : 9));
    const unitNum = (x) => parseInt(String(x.unit || "").replace(/\D+/g, "") || "0", 10);
    const da = bk(a) - bk(b); if (da) return da;
    const du = unitNum(a) - unitNum(b); if (du) return du;
    return String(a.title || "").localeCompare(String(b.title || ""), "zh-Hant");
  }

  function renderGrammar() {
    fillUnitSelect("grammarFilterUnit", data.grammar.map(g => scopeKeyOf(g.book, g.unit)));
    const uf = $("#grammarFilterUnit") ? $("#grammarFilterUnit").value : "";
    const q = ($("#grammarSearch") ? $("#grammarSearch").value : "").trim().toLowerCase();
    const box = $("#grammarList"); if (!box) return;
    box.innerHTML = "";

    const items = data.grammar.filter(g => {
      const u = scopeKeyOf(g.book, g.unit);
      if (uf && u !== uf) return false;
      if (!q) return true;
      return String(g.title || "").toLowerCase().includes(q);
    }).sort(compareBookUnitTitle).slice(0, 250);

    for (const g of items) {
      const div = document.createElement("div");
      div.className = "item";
      div.innerHTML =
        `<div class="t"><b>${escapeHtml(g.title || "")}</b><span>${escapeHtml(scopeKeyOf(g.book, g.unit))}</span></div>`;
      box.appendChild(div);
    }
  }

  // ====== Navigation ======
  function setView(view, scopeKeys) {
    $$(".navBtn").forEach(b => b.classList.toggle("active", b.dataset.view === view));
    const map = { vocab: "單字庫", grammar: "文法庫", aiquiz: "AI測驗庫", stats: "測驗統計", settings: "功能設定" };
    setTitle(map[view] || "");

    if (view === "vocab") { showOnly("viewVocab"); renderVocab(); return; }
    if (view === "grammar") { showOnly("viewGrammar"); renderGrammar(); return; }
    if (view === "aiquiz") { showOnly("viewAiQuiz"); return; }
    if (view === "stats") { showOnly("viewStats"); renderStats(); return; }
    if (view === "settings") { showOnly("viewSettings"); syncSettingsToUI(scopeKeys); return; }
  }

  // ====== Wire ======
  function wire(scopeKeys) {
    // left nav
    $$(".navBtn").forEach(b => b.addEventListener("click", () => setView(b.dataset.view, scopeKeys)));

    // list search/filter
    $("#vocabSearch") && $("#vocabSearch").addEventListener("input", renderVocab);
    $("#vocabFilterUnit") && $("#vocabFilterUnit").addEventListener("change", renderVocab);
    $("#grammarSearch") && $("#grammarSearch").addEventListener("input", renderGrammar);
    $("#grammarFilterUnit") && $("#grammarFilterUnit").addEventListener("change", renderGrammar);

    // stats range
    $("#statRange") && $("#statRange").addEventListener("change", renderStats);

    // settings save
    $("#btnSaveSettings") && ($("#btnSaveSettings").onclick = () => { saveSettingsFromUI(); alert("已儲存"); });

    // quiz buttons
    $("#startVocabQuiz") && ($("#startVocabQuiz").onclick = startVocabQuiz);
    $("#startGrammarQuiz") && ($("#startGrammarQuiz").onclick = startGrammarQuiz);
    $("#startReadingQuiz") && ($("#startReadingQuiz").onclick = startReadingQuiz);
    $("#startSpellingQuiz") && ($("#startSpellingQuiz").onclick = startSpellingQuiz);
    $("#startFindMistakeQuiz") && ($("#startFindMistakeQuiz").onclick = startFindMistakeQuiz);
    $("#startClozeQuiz") && ($("#startClozeQuiz").onclick = startClozeQuiz);

    // quiz controls
    $("#btnAcknowledge") && ($("#btnAcknowledge").onclick = nextQ);
    $("#btnExplain") && ($("#btnExplain").onclick = explainCurrent);
    $("#btnExplainOk") && ($("#btnExplainOk").onclick = closeExplain);

    $("#btnResultRetry") && ($("#btnResultRetry").onclick = () => setView("aiquiz", scopeKeys));
    $("#btnErrClose") && ($("#btnErrClose").onclick = () => setView("aiquiz", scopeKeys));
  }

  // ====== Boot (no top-level await!) ======
  function boot() {
    loadData();
    const scopeKeys = buildScopeKeysDynamic();
    ensureScopeDefaults(scopeKeys);

    badge(false, "AI：尚未連線");
    pingProxy(); // does NOT call Gemini

    // initial UI
    wire(scopeKeys);
    renderVocab();
    renderGrammar();

    // default view
    setView("aiquiz", scopeKeys);
  }

  window.addEventListener("error", (ev) => {
    console.error("Front-end error:", ev?.error || ev?.message);
  });

  document.addEventListener("DOMContentLoaded", boot);
})();
