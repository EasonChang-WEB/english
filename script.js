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
    // Support both old (.dot) and new (.status-dot) HTML structures
    const dot = b.querySelector(".status-dot") || b.querySelector(".dot");
    const label = document.getElementById("statusText") || b.querySelector("span:last-child");
    if (label) label.textContent = text || (ok ? "AI：已連線" : "AI：尚未連線");
    if (dot) {
      if (ok === "bg") { dot.style.background = "#f59e0b"; dot.style.boxShadow = "0 0 6px #f59e0b"; }
      else if (ok)     { dot.style.background = "var(--good)"; dot.style.boxShadow = "0 0 6px var(--good)"; }
      else             { dot.style.background = "var(--fire,#f4622a)"; dot.style.boxShadow = "0 0 6px var(--fire,#f4622a)"; }
    }
  }

  function showOnly(id) {
    const views = ["viewVocab", "viewGrammar", "viewAiQuiz", "viewStats", "viewSettings", "viewQuiz", "viewResult", "viewError",
                   "viewReading", "viewReadingQuiz", "viewReadingResult"];
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
  // 移除已廢棄難度，強制對齊到有效值
  if (!settings.difficulty || !["標準","挑戰"].includes(settings.difficulty)) settings.difficulty = "標準";
  if (!settings.scope) settings.scope = {};

  function getDifficulty() {
    return settings.difficulty || "標準";
  }
  function difficultyGuide() {
    const d = getDifficulty();
    if (d === "挑戰") return "難度：挑戰（國八後段～國九；句子較長；干擾選項更像；常見易錯點；多個文法點交叉）";
    return "難度：標準（國八程度；句子自然；至少部分選項具混淆性；涵蓋兩個文法點交叉）";
  }

  function difficultyPromptRules(kind) {
    const d = getDifficulty();
    if (kind === "grammar") {
      if (d === "挑戰") return "每題必須交叉考至少 2 個不同文法點；至少 5 題交叉考 3 個文法點；禁止重複 year-old / how old / be + adjective / weather 基本問答模板；句型必須明顯多樣。";
      return "每題必須交叉考至少 2 個不同文法點；句子自然通順；干擾選項具混淆性；禁止只考單一 be動詞。";
    }
    if (kind === "mistake") {
      if (d === "挑戰") return "每題使用兩種以上文法知識交錯，但仍只設 1 個錯誤；句子長度適中，避免重複模板；不可重複出現 When school will be over 這個句子。";
      return "句子自然，錯誤點不可過於明顯；涵蓋多種文法錯誤類型；不可重複出現 When school will be over 這個句子。";
    }
    return "";
  }

  // ====== Data ======
  const data = { vocab: [], grammar: [] };

  function loadData() {
    data.vocab = (window.vocabularyData || window.appData?.vocabulary || []).slice();

    const gp = Array.isArray(window.grammarPoints) ? window.grammarPoints : [];
    if (gp.length) {
      data.grammar = gp.map(g => ({
        id: g.id,
        book: g.book,
        unit: g.unit,
        title: g.title,
        group: g.group || "",
        pattern: g.pattern || "",
        explanation: g.explanation || "",
        examples: Array.isArray(g.examples) ? g.examples : [],
        commonErrors: Array.isArray(g.commonErrors) ? g.commonErrors : [],
        difficulty: g.difficulty || 2,
        questionTypes: Array.isArray(g.questionTypes) ? g.questionTypes : []
      }));
    } else {
      data.grammar = (window.appData?.grammar_rules || []).slice();
    }
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
    if (!settings.scope) settings.scope = {};
    let changed = false;
    for (const it of scopeKeys) {
      // Only add keys that are genuinely missing (undefined), never overwrite explicit false
      if (settings.scope[it.key] === undefined) {
        settings.scope[it.key] = true;
        changed = true;
      }
    }
    if (changed) saveJson(LS_SETTINGS, settings);
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

  // 從文法池按冊分散抽取，回傳 title-only 精簡字串（不含例句）
  // usedTitles：本次批次已用過的文法 title，確保兩輪不重複
  function pickGrammarListForAI(maxN, usedTitles = new Set()) {
    const pool = filterGrammarByScope().filter(g => !usedTitles.has(g.title));

    // 按 book+unit 分組，每組隨機取一條，確保跨冊分散
    const byUnit = new Map();
    for (const g of pool) {
      const key = scopeKeyOf(g.book, g.unit);
      if (!byUnit.has(key)) byUnit.set(key, []);
      byUnit.get(key).push(g);
    }

    const units = shuffle(Array.from(byUnit.keys()));
    const picked = [];

    for (const unit of units) {
      if (picked.length >= maxN) break;
      const gs = byUnit.get(unit);
      picked.push(gs[Math.floor(Math.random() * gs.length)]);
    }

    // 不足時補充（同 unit 第二條）
    if (picked.length < maxN) {
      for (const unit of units) {
        if (picked.length >= maxN) break;
        const gs = byUnit.get(unit);
        if (gs.length > 1) picked.push(gs[Math.floor(Math.random() * gs.length)]);
      }
    }

    return picked.map(g => `${scopeKeyOf(g.book, g.unit)}｜${g.title}`).filter(Boolean);
  }

  // ====== Normalize options ======
  function normalizeOptions4(options, answer) {
    function canonOption(s) {
      return normEn(String(s || "")
        .replace(/aren't/gi, "are not")
        .replace(/isn't/gi, "is not")
        .replace(/wasn't/gi, "was not")
        .replace(/weren't/gi, "were not")
        .replace(/don't/gi, "do not")
        .replace(/doesn't/gi, "does not")
        .replace(/didn't/gi, "did not")
        .replace(/won't/gi, "will not")
        .replace(/can't/gi, "can not")
        .replace(/I'm/gi, "I am")
        .replace(/you're/gi, "you are")
        .replace(/we're/gi, "we are")
        .replace(/they're/gi, "they are")
        .replace(/he's/gi, "he is")
        .replace(/she's/gi, "she is")
        .replace(/it's/gi, "it is"));
    }

    let opts = Array.isArray(options) ? options.map(s => String(s).trim()).filter(Boolean) : [];
    if (typeof answer === "string" && /^[A-D]$/i.test(answer.trim())) {
      const idx = answer.trim().toUpperCase().charCodeAt(0) - 65;
      if (opts[idx]) answer = opts[idx];
    }

    opts = opts.filter(o => !/^[A-D]$/i.test(o));
    const seen = new Set();
    opts = opts.filter(o => {
      const c = canonOption(o);
      if (seen.has(c)) return false;
      seen.add(c);
      return true;
    });

    if (answer) {
      const cAns = canonOption(answer);
      const existing = opts.find(o => canonOption(o) === cAns);
      if (!existing) opts.push(answer);
      else answer = existing;
    }

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

  const grammarSessionRecent = [];
  const grammarTemplateRecent = [];

function getDifficultyBand() {
    const d = settings.difficulty || "標準";
    if (d === "基礎") return { min: 1, max: 1, comboPattern: [1], blankPattern: [1], examLike: false };
    if (d === "標準") return { min: 1, max: 2, comboPattern: [1, 1, 1, 2], blankPattern: [1], examLike: false };
    if (d === "挑戰") return { min: 1, max: 3, comboPattern: [1, 2, 1, 2], blankPattern: [1, 1, 2], examLike: true };
    return { min: 2, max: 4, comboPattern: [1, 2, 2, 3], blankPattern: [1, 2, 2, 3], examLike: true };
  }

  function randomPick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function titleKeyOf(g) {
    return normEn((g.title || "") + " | " + (g.pattern || ""));
  }

function templateTagOf(g) {
  const t = normEn(
    (g.title || "") + " " +
    (g.pattern || "") + " " +
    (g.group || "")
  );

  if (
    t.includes("year-old") ||
    t.includes("how old") ||
    t.includes("years old")
  ) return "age";

  if (t.includes("weather") || t.includes("天氣")) return "weather";

  if (
    t.includes("be動詞") ||
    t.includes(" am ") ||
    t.includes(" is ") ||
    t.includes(" are ")
  ) return "be";

  if (t.includes("possessive") || t.includes("所有格")) return "possessive";

  if (
    t.includes("there is") ||
    t.includes("there are") ||
    t.includes("there be")
  ) return "therebe";

  return "other";
}

  function pointSummary(g) {
    const ex = Array.isArray(g.examples) ? g.examples.slice(0, 2).join(" / ") : "";
    return [scopeKeyOf(g.book, g.unit), g.title || "", g.pattern || "", ex].filter(Boolean).join("｜");
  }

  function pickGrammarSpecs(n, preferMistakes) {
    const band = getDifficultyBand();
    let pool = filterGrammarByScope().filter(
      g => (g.difficulty || 2) >= band.min && (g.difficulty || 2) <= band.max
    );
    if (!pool.length) pool = filterGrammarByScope().slice();

    const byGroupCount = new Map();
    const byTitleCount = new Map();
    const specs = [];

    for (let i = 0; i < n; i++) {
      let comboSize = randomPick(band.comboPattern);
      if (comboSize > pool.length) comboSize = Math.min(1, pool.length);

      const chosen = [];
      const usedScopes = new Set();
      const usedGroups = new Set();

      for (let k = 0; k < comboSize; k++) {
        let candidates = pool.filter(g => !chosen.some(x => x.id === g.id));

        if (preferMistakes) {
          const errPool = candidates.filter(g => Array.isArray(g.commonErrors) && g.commonErrors.length);
          if (errPool.length) candidates = errPool;
        }

        let cool = candidates.filter(g => !grammarSessionRecent.includes(g.id));
        if (cool.length >= Math.max(4, Math.floor(candidates.length * 0.35))) {
          candidates = cool;
        }

        cool = candidates.filter(g => !grammarTemplateRecent.includes(templateTagOf(g)));
        if (cool.length >= Math.max(3, Math.floor(candidates.length * 0.25))) {
          candidates = cool;
        }

        candidates.sort((a, b) => {
          const ag = byGroupCount.get(a.group || "") || 0;
          const bg = byGroupCount.get(b.group || "") || 0;
          if (ag !== bg) return ag - bg;

          const at = byTitleCount.get(titleKeyOf(a)) || 0;
          const bt = byTitleCount.get(titleKeyOf(b)) || 0;
          if (at !== bt) return at - bt;

          const as = usedGroups.has(a.group || "") ? 1 : 0;
          const bs = usedGroups.has(b.group || "") ? 1 : 0;
          if (as !== bs) return as - bs;

          return Math.random() - 0.5;
        });

        const pick = candidates[0];
        if (!pick) break;

        chosen.push(pick);
        usedScopes.add(scopeKeyOf(pick.book, pick.unit));
        usedGroups.add(pick.group || "");

        byGroupCount.set(pick.group || "", (byGroupCount.get(pick.group || "") || 0) + 1);
        byTitleCount.set(titleKeyOf(pick), (byTitleCount.get(titleKeyOf(pick)) || 0) + 1);

        grammarSessionRecent.push(pick.id);
        while (grammarSessionRecent.length > 18) grammarSessionRecent.shift();

        grammarTemplateRecent.push(templateTagOf(pick));
        while (grammarTemplateRecent.length > 10) grammarTemplateRecent.shift();
      }

      specs.push({
        points: chosen,
        scope: Array.from(usedScopes),
        blankCount: randomPick(band.blankPattern),
        examLike: !!band.examLike
      });
    }

    return specs;
  }

  function buildGrammarPromptFromSpecs(specs) {
    return specs.map((s, idx) => {
      const header = `Q${idx + 1}｜空格數:${s.blankCount}｜範圍:${s.scope.join(", ")}`;
      const lines = s.points.map((p, i) => `文法${i + 1}: ${pointSummary(p)}`);
      return [header].concat(lines).join("\n");
    }).join("\n\n");
  }


  const LOCAL_BANK = {
    names: ["Amy", "Ben", "Cindy", "David", "Eric", "Jenny", "Kevin", "Linda", "Mia", "Tony"],
    family: ["my brother", "my sister", "my father", "my mother", "my cousin", "our teacher"],
    places: ["the park", "the library", "the zoo", "the night market", "the station", "the supermarket", "school"],
    rooms: ["the kitchen", "the living room", "the classroom", "the bathroom", "my bedroom"],
    countables: ["books", "chairs", "students", "cookies", "apples", "pencils", "eggs", "tickets"],
    singulars: ["book", "chair", "student", "cookie", "apple", "pencil", "ticket", "box"],
    uncountables: ["milk", "water", "juice", "rice", "bread", "soup", "tea", "homework"],
    verbsBase: ["go", "play", "watch", "visit", "clean", "study", "help", "wash"],
    pastVerbs: [
      { base: "go", past: "went", ing: "going" },
      { base: "play", past: "played", ing: "playing" },
      { base: "watch", past: "watched", ing: "watching" },
      { base: "do", past: "did", ing: "doing" },
      { base: "study", past: "studied", ing: "studying" },
      { base: "read", past: "read", ing: "reading" }
    ],
    transport: ["by bus", "by bike", "by MRT", "on foot"],
    weathers: ["sunny", "rainy", "cloudy", "windy", "hot", "cold"],
    times: ["tomorrow", "next Sunday", "after dinner", "this weekend", "next week"],
    prepPlaces: ["on the table", "under the chair", "in the box", "next to the door", "behind the sofa"],
    adjectives: ["happy", "busy", "hungry", "tired", "careful", "excited"],
    objects: ["it", "them", "him", "her"],
    possessives: ["my", "your", "his", "her", "our", "their"],
    whTime: ["When", "What time"],
    modals: ["can", "should", "must"]
  };

  function rpick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function shuffleCopy(arr) {
    return shuffle((arr || []).slice());
  }

  function grammarCatsOf(points) {
    const joined = normEn((points || []).map(p => [p.title || "", p.pattern || "", p.group || "", p.subGroup || "", p.mapBranch || ""].join(" ")).join(" || "));
    const set = new Set();

    if (joined.includes("past progressive") || joined.includes("過去進行")) set.add("past_progressive");
    if (joined.includes("past simple") || joined.includes("過去簡單") || joined.includes("過去式")) set.add("past_simple");
    if (joined.includes("future") || joined.includes("will") || joined.includes("be going to") || joined.includes("未來")) set.add("future");
    if (joined.includes("time clause") || joined.includes("when") || joined.includes("before") || joined.includes("after") || joined.includes("時間子句")) set.add("time_clause");
    if (joined.includes("there be") || joined.includes("there is") || joined.includes("there are")) set.add("therebe");
    if (joined.includes("some / any") || joined.includes("some/any") || joined.includes("some") || joined.includes(" any ")) set.add("some_any");
    if (joined.includes("quantifier") || joined.includes("數量") || joined.includes("how many") || joined.includes("how much")) set.add("quantity");
    if (joined.includes("countable") || joined.includes("uncountable") || joined.includes("可數") || joined.includes("不可數")) set.add("countability");
    if (joined.includes("weather") || joined.includes("天氣")) set.add("weather");
    if (joined.includes("transportation") || joined.includes("transport") || joined.includes("交通")) set.add("transportation");
    if (joined.includes("possessive") || joined.includes("所有格")) set.add("possessive");
    if (joined.includes("pronoun") || joined.includes("代名詞")) set.add("pronoun");
    if (joined.includes("this") || joined.includes("that") || joined.includes("these") || joined.includes("those") || joined.includes("指示")) set.add("demonstrative");
    if (joined.includes("plural") || joined.includes("複數")) set.add("plural");
    if (joined.includes("preposition") || joined.includes("介系詞") || joined.includes("location") || joined.includes("direction")) set.add("preposition");
    if (joined.includes("be動詞") || joined.includes("be ") || joined.includes("am ") || joined.includes(" is ") || joined.includes(" are ")) set.add("be");
    if (joined.includes("present simple") || joined.includes("一般現在")) set.add("present_simple");
    if (joined.includes("modal") || joined.includes("can") || joined.includes("should") || joined.includes("must")) set.add("modal");
    if (joined.includes("what time") || joined.includes("time") || joined.includes("日期") || joined.includes("reverse-time") || joined.includes("quarter to")) set.add("time_expression");

    if (!set.size) set.add("general");
    return Array.from(set);
  }

  function blankify(sentence, answer) {
    if (!answer) return sentence;
    return sentence.replace(answer, "______");
  }

  function buildMc(sentence, answer, options, scope, grammarLabel) {
    const fixed = normalizeOptions4(options, answer);
    return { kind: "mc", prompt: sentence, options: fixed.options, answer: fixed.answer, scope, grammarLabel };
  }

  function makeMistakeQuestion(sentence, parts, wrongIndex, correction, scope, grammarLabel) {
    return {
      kind: "mistake",
      prompt: sentence,
      choices: parts,
      wrong: parts[wrongIndex],
      correction,
      scope,
      grammarLabel
    };
  }

  function thirdPersonForm(base) {
    if (/[^aeiou]y$/i.test(base)) return base.replace(/y$/i, "ies");
    if (/(s|x|ch|sh|o)$/i.test(base)) return base + "es";
    return base + "s";
  }

  function genericGrammarQuestion(spec) {
    const subject = Math.random() < 0.5 ? rpick(LOCAL_BANK.names) : rpick(LOCAL_BANK.family);
    const verb = rpick(LOCAL_BANK.verbsBase);
    const place = rpick(LOCAL_BANK.places);
    const answer = thirdPersonForm(verb);
    return buildMc(`${subject} ______ to ${place} every day.`, answer, [verb, answer, verb + "ing", verb + "ed"], spec.scope, "present_simple");
  }

  function localGrammarQuestionFromSpec(spec, idx) {
    const cats = grammarCatsOf(spec.points);
    const label = cats.join(",");

    if (cats.includes("past_simple") && cats.includes("past_progressive")) {
      const who = rpick(LOCAL_BANK.names);
      const act = rpick(LOCAL_BANK.pastVerbs);
      const other = rpick(["my mom called me", "the lights went out", "the bus arrived", "it started to rain"]);
      const prompt = `Last night, ${who} ______ in the living room when ${other}.`;
      return buildMc(prompt, act.ing, [act.base, act.past, act.ing, thirdPersonForm(act.base)], spec.scope, label);
    }

    if (cats.includes("therebe") && (cats.includes("some_any") || cats.includes("quantity") || cats.includes("countability"))) {
      const noun = rpick(LOCAL_BANK.countables);
      const place = rpick(LOCAL_BANK.prepPlaces);
      const isQuestion = idx % 2 === 0;
      if (isQuestion) {
        const prompt = `______ ${noun} ${place}?`;
        return buildMc(prompt, "Are there any", ["Are there any", "Is there any", "There are", "There is"], spec.scope, label);
      }
      const prompt = `There ______ ${noun} ${place}.`;
      return buildMc(prompt, "are some", ["is some", "are some", "is any", "are any"], spec.scope, label);
    }

    if (cats.includes("weather") && cats.includes("transportation")) {
      const weather = rpick(LOCAL_BANK.weathers);
      const transport = rpick(LOCAL_BANK.transport);
      const prompt = `A: It was ${weather} this morning. How did you come to school? B: I came ______.`;
      return buildMc(prompt, transport, shuffleCopy([transport, "in the bus", "with bike", "take MRT"]), spec.scope, label);
    }

    if (cats.includes("future") && cats.includes("time_clause")) {
      const modal = Math.random() < 0.5 ? "will" : "is going to";
      const verb = rpick(LOCAL_BANK.verbsBase);
      const place = rpick(LOCAL_BANK.places);
      const prompt = `When my homework is done, I ______ ${place}.`;
      const answer = modal === "will" ? `will ${verb}` : `${modal} ${verb}`;
      const opts = modal === "will"
        ? [`will ${verb}`, `${verb}`, `am ${verb}ing`, `will be ${verb}ing`]
        : [`${modal} ${verb}`, `will ${verb}`, `${verb}s`, `${verb}ed`];
      return buildMc(prompt, answer, opts, spec.scope, label);
    }

    if ((cats.includes("quantity") || cats.includes("countability")) && idx % 2 === 0) {
      const countable = rpick(LOCAL_BANK.countables);
      const uncountable = rpick(LOCAL_BANK.uncountables);
      if (Math.random() < 0.5) {
        return buildMc(`______ ${countable} do you need for the party?`, "How many", ["How much", "How many", "How often", "How long"], spec.scope, label);
      }
      return buildMc(`______ ${uncountable} is there in the bottle?`, "How much", ["How many", "How much", "How old", "How far"], spec.scope, label);
    }

    if (cats.includes("possessive") || cats.includes("pronoun")) {
      const name = rpick(LOCAL_BANK.names);
      const obj = rpick(["bike", "jacket", "bag", "notebook"]);
      return buildMc(`This ${obj} is ${name}'s. It is ______.`, "his", ["he", "him", "his", "himself"], spec.scope, label);
    }

    if (cats.includes("demonstrative") || cats.includes("plural")) {
      const noun = rpick(LOCAL_BANK.countables);
      return buildMc(`______ ${noun} on the desk are new.`, "These", ["This", "That", "These", "Those is"], spec.scope, label);
    }

    if (cats.includes("preposition")) {
      const thing = rpick(["The bag", "My notebook", "The cat", "The keys"]);
      const place = rpick(LOCAL_BANK.prepPlaces);
      const prep = place.split(" ")[0];
      const opts = Array.from(new Set([prep, "in", "on", "under"])).slice(0,4);
      return buildMc(`${thing} is ______ ${place.replace(/^\w+\s+/, "")}.`, prep, opts, spec.scope, label);
    }

    if (cats.includes("be")) {
      const subject = rpick(["My parents", "The dog", "Jenny", "We"]);
      const answer = /parents|We/.test(subject) ? "are" : /dog/.test(subject) ? "is" : "is";
      const opts = answer === "are" ? ["am", "is", "are", "be"] : ["am", "is", "are", "be"];
      return buildMc(`${subject} ______ busy after school.`, answer, opts, spec.scope, label);
    }

    if (cats.includes("time_expression")) {
      return buildMc(`It is a quarter ______ eight now.`, "to", ["to", "for", "at", "of"], spec.scope, label);
    }

    if (cats.includes("modal")) {
      const modal = rpick(LOCAL_BANK.modals);
      const verb = rpick(LOCAL_BANK.verbsBase);
      return buildMc(`You ${modal} ______ your room before dinner.`, verb, [verb, thirdPersonForm(verb), verb + "ing", "to " + verb], spec.scope, label);
    }

    if (cats.includes("past_simple")) {
      const who = rpick(LOCAL_BANK.family);
      const act = rpick(LOCAL_BANK.pastVerbs);
      const place = rpick(LOCAL_BANK.places);
      return buildMc(`${who} ______ to ${place} yesterday.`, act.past, [act.base, act.past, act.ing, thirdPersonForm(act.base)], spec.scope, label);
    }

    if (cats.includes("present_simple")) {
      const who = rpick(LOCAL_BANK.family);
      const verb = rpick(LOCAL_BANK.verbsBase);
      return buildMc(`${who} usually ______ after dinner.`, thirdPersonForm(verb), [verb, thirdPersonForm(verb), verb + "ing", verb + "ed"], spec.scope, label);
    }

    return genericGrammarQuestion(spec);
  }

  function localGrammarQuizFromSpecs(specs) {
    return specs.map((spec, idx) => localGrammarQuestionFromSpec(spec, idx));
  }

  function splitSentenceIntoParts(sentence, wrongChunk) {
    const words = sentence.split(" ");
    if (words.length < 8) return [sentence, "", "", ""];
    const parts = [
      words.slice(0, 2).join(" "),
      words.slice(2, 4).join(" "),
      words.slice(4, 6).join(" "),
      words.slice(6).join(" ")
    ];
    let idx = parts.findIndex(p => p.includes(wrongChunk));
    if (idx < 0) idx = Math.min(1, parts.length - 1);
    return { parts, idx };
  }

  function localMistakeQuestionFromSpec(spec, idx) {
    const cats = grammarCatsOf(spec.points);
    const label = cats.join(",");

    if (cats.includes("future") && cats.includes("time_clause")) {
      const sentence = "When school is over, I will visit my grandma.";
      const wrongSentence = "When school will be over, I will visit my grandma.";
      const chunk = "will be over,";
      const shaped = splitSentenceIntoParts(wrongSentence, chunk);
      return makeMistakeQuestion(wrongSentence, shaped.parts, shaped.idx, "when 子句用現在式：is over", spec.scope, label);
    }

    if (cats.includes("possessive") || cats.includes("pronoun")) {
      const wrongSentence = "My best friend and me are cleaning the classroom now.";
      const shaped = splitSentenceIntoParts(wrongSentence, "me are");
      return makeMistakeQuestion(wrongSentence, shaped.parts, shaped.idx, "主詞要用 I：My best friend and I are ...", spec.scope, label);
    }

    if (cats.includes("demonstrative") || cats.includes("plural")) {
      const wrongSentence = "This books on the table are mine.";
      const shaped = splitSentenceIntoParts(wrongSentence, "This books");
      return makeMistakeQuestion(wrongSentence, shaped.parts, shaped.idx, "複數名詞前要用 These：These books", spec.scope, label);
    }

    if (cats.includes("therebe") && (cats.includes("some_any") || cats.includes("quantity") || cats.includes("countability"))) {
      const wrongSentence = "There is many apples in the box.";
      const shaped = splitSentenceIntoParts(wrongSentence, "is many");
      return makeMistakeQuestion(wrongSentence, shaped.parts, shaped.idx, "複數名詞用 are：There are many apples", spec.scope, label);
    }

    if (cats.includes("preposition")) {
      const wrongSentence = "My bag is in the table near the window.";
      const shaped = splitSentenceIntoParts(wrongSentence, "in the");
      return makeMistakeQuestion(wrongSentence, shaped.parts, shaped.idx, "桌面上用 on：My bag is on the table", spec.scope, label);
    }

    if (cats.includes("modal")) {
      const wrongSentence = "My little brother can to swim very well.";
      const shaped = splitSentenceIntoParts(wrongSentence, "can to");
      return makeMistakeQuestion(wrongSentence, shaped.parts, shaped.idx, "情態動詞後接原形：can swim", spec.scope, label);
    }

    if (cats.includes("past_simple")) {
      const wrongSentence = "Last Sunday, my family go to the zoo together.";
      const shaped = splitSentenceIntoParts(wrongSentence, "family go");
      return makeMistakeQuestion(wrongSentence, shaped.parts, shaped.idx, "過去時間用過去式：went", spec.scope, label);
    }

    if (cats.includes("be")) {
      const wrongSentence = "My parents is very busy tonight.";
      const shaped = splitSentenceIntoParts(wrongSentence, "parents is");
      return makeMistakeQuestion(wrongSentence, shaped.parts, shaped.idx, "複數主詞用 are：My parents are", spec.scope, label);
    }

    const wrongSentence = "He go to school by bus every day.";
    const shaped = splitSentenceIntoParts(wrongSentence, "He go");
    return makeMistakeQuestion(wrongSentence, shaped.parts, shaped.idx, "第三人稱單數要加 s：He goes", spec.scope, label);
  }

  function localMistakeQuizFromSpecs(specs) {
    return specs.map((spec, idx) => localMistakeQuestionFromSpec(spec, idx));
  }

  // ====== Stats (today/7/30) ======
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
  function getPreferredModels() {
    const pref = Array.isArray(globalThis.GEMINI_MODEL_PREFERENCE)
      ? globalThis.GEMINI_MODEL_PREFERENCE.slice()
      : [];
    const fallbacks = ["models/gemini-2.5-flash", "models/gemini-2.0-flash"];
    for (const m of fallbacks) if (!pref.includes(m)) pref.push(m);
    return pref.filter(Boolean);
  }

  async function callGemini(model, system, user) {
    if (window.__AI_IN_FLIGHT__) throw new Error("AI 忙碌中，請稍後再試");
    window.__AI_IN_FLIGHT__ = true;

    const models = model
      ? [model, ...getPreferredModels().filter(m => m !== model)]
      : getPreferredModels();

    let lastErr = "AI 請求失敗";

    try {
      for (const m of models) {
        const payload = { model: m, system, user };

        for (let attempt = 0; attempt <= 1; attempt++) { // 最多 retry 1 次
          const r = await fetch(PROXY_AI, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          const ct = (r.headers.get("content-type") || "").toLowerCase();
          if (!ct.includes("application/json")) {
            const t = await r.text();
            lastErr = `Proxy HTTP ${r.status}: ${t.slice(0, 200)}`;
            if (r.status === 429 && attempt === 0) {
              badge(false, "AI：限流中，等待重試…");
              await new Promise(res => setTimeout(res, 20000));
              badge(false, "AI：重試中…");
              continue;
            }
            break;
          }

          const jr = await r.json();

          if (!r.ok) {
            if (typeof jr?.error === "string") lastErr = jr.error;
            else {
              try { lastErr = JSON.stringify(jr).slice(0, 300); }
              catch (e) { lastErr = `Proxy HTTP ${r.status}`; }
            }
            if (r.status === 429 && attempt === 0) {
              badge(false, "AI：限流中，等待重試…");
              await new Promise(res => setTimeout(res, 20000));
              badge(false, "AI：重試中…");
              continue;
            }
            break;
          }

          badge(true, `AI：已連線（${m.replace("models/","")}）`);

          const rawText = (jr?.candidates?.[0]?.content?.parts || [])
            .map(p => p.text || "")
            .join("");

          try {
            return JSON.parse(rawText);
          } catch (e) {
            const cleaned = rawText
              .replace(/^```json\s*/i, "")
              .replace(/```\s*$/i, "")
              .trim();
            return JSON.parse(cleaned);
          }
        }
      }

      throw new Error(lastErr || "AI 請求過於頻繁（429），請稍後 1 分鐘再試");
    } finally {
      window.__AI_IN_FLIGHT__ = false;
    }
  }

  async function gjson(system, user) {
    return await callGemini("", system, user);
  }

  // ====== 智慧 Cache 系統 ======
  const LS_GRAMMAR_CACHE  = "eason_grammar_cache_v1";
  const LS_MISTAKE_CACHE   = "eason_mistake_cache_v1";
  const LS_SPELLING_CACHE  = "eason_spelling_cache_v1";
  const CACHE_BATCH_SIZE   = 20; // 每次批次產題數量（降低首次等待）
  const CACHE_REFILL_AT    = 8;  // 剩餘題數低於此值時背景補貨
  let   lastRefillTime     = 0;  // 冷卻保護：避免短時間重複觸發
  const REFILL_COOLDOWN_MS = 30000; // 30 秒內不重複補貨

  // 計算資料指紋：文法點數量 + 最後一個 id + 難度
  function computeGrammarFingerprint() {
    const pool = filterGrammarByScope();
    if (!pool.length) return "empty";
    const last = pool[pool.length - 1]?.id || "";
    return `${pool.length}_${last}_${getDifficulty()}`;
  }

  function loadCache(lsKey) {
    try {
      return JSON.parse(localStorage.getItem(lsKey) || "null") || { fingerprint: "", questions: [] };
    } catch (e) {
      return { fingerprint: "", questions: [] };
    }
  }

  function saveCache(lsKey, fingerprint, questions) {
    try {
      localStorage.setItem(lsKey, JSON.stringify({ fingerprint, questions }));
    } catch (e) {
      console.warn("Cache save failed:", e);
    }
  }

  function isCacheValid(lsKey) {
    const cache = loadCache(lsKey);
    const fp = computeGrammarFingerprint();
    return cache.fingerprint === fp && cache.questions.length > 0;
  }

  function drawFromCache(lsKey, n) {
    const cache = loadCache(lsKey);
    const drawn = cache.questions.splice(0, n);
    saveCache(lsKey, cache.fingerprint, cache.questions);
    return drawn;
  }

  function appendToCache(lsKey, newQuestions) {
    const cache = loadCache(lsKey);
    const fp = computeGrammarFingerprint();
    // 若指紋已變，捨棄舊題
    const existing = cache.fingerprint === fp ? cache.questions : [];
    const merged = existing.concat(newQuestions);
    saveCache(lsKey, fp, merged);
  }

  function cacheCount(lsKey) {
    return loadCache(lsKey).questions.length;
  }

  // ====== AI 批次產題：文法測驗 ======
  async function batchGenerateGrammarQuestions(silent = false) {
    if (!silent) showLoading("正在出題請稍等…");
    if (silent) badge("bg", "AI：背景備題中…");

    const batchN = 10;
    const grammarPerRound = 5;
    let lastRoundError = null;
    let allQs = [];

    // 只跑1輪，失敗後用本地備用題
    const grammarList = pickGrammarListForAI(grammarPerRound, new Set());

    try {
      const d = getDifficulty() === "挑戰" ? "挑戰難度" : "標準難度";
      const out = await gjson(
`國中英文文法，${d}，出${batchN}題四選一。
JSON：{"questions":[{"prompt":"句子______","options":["A","B","C","D"],"answer":"A","grammarLabel":"考點"}]}
文法點：${grammarList.join("、")}`,
        "出題。"
      );
      const raw = (out.questions || []).slice(0, batchN);
      allQs = raw.map(x => {
        const fixed = normalizeOptions4(x.options, x.answer);
        return { kind: "mc", prompt: x.prompt || "—", options: fixed.options, answer: fixed.answer, grammarLabel: x.grammarLabel || "" };
      }).filter(q => q.options.length === 4 && q.answer);
    } catch (e) {
      console.warn("文法出題失敗：", e.message);
      lastRoundError = e.message || String(e);
    }

    if (allQs.length) appendToCache(LS_GRAMMAR_CACHE, allQs);

    if (!silent) hideLoading();
    else badge(true, "AI：已連線");

    if (allQs.length === 0 && lastRoundError) throw new Error(lastRoundError);
    return allQs;
  }

  // ====== AI 批次產題：選出錯誤 ======
  async function batchGenerateMistakeQuestions(silent = false) {
    if (!silent) showLoading("正在出題請稍等…");
    if (silent) badge("bg", "AI：背景備題中…");

    const batchN = 10;
    const grammarPerRound = 5;
    let lastRoundError = null;
    let allQs = [];

    const grammarList = pickGrammarListForAI(grammarPerRound, new Set());

    try {
      const d = getDifficulty() === "挑戰" ? "挑戰難度" : "標準難度";
      const out = await gjson(
`國中英文改錯，${d}，出${batchN}題。每題一個含文法錯誤的句子切成4個詞組。
JSON：{"questions":[{"wrongSentence":"句子","parts":["A","B","C","D"],"wrongIndex":0,"correction":"說明","grammarLabel":"考點"}]}
文法點：${grammarList.join("、")}`,
        "出題。"
      );
      const raw = (out.questions || []).slice(0, batchN);
      allQs = raw.map(x => {
        const parts = Array.isArray(x.parts) && x.parts.length === 4 ? x.parts : null;
        if (!parts) return null;
        const wi = typeof x.wrongIndex === "number" ? x.wrongIndex : 0;
        return { kind: "mistake", prompt: x.wrongSentence || parts.join(" "), choices: parts, wrong: parts[wi], correction: x.correction || "—", grammarLabel: x.grammarLabel || "", scope: [] };
      }).filter(Boolean);
    } catch (e) {
      console.warn("改錯出題失敗：", e.message);
      lastRoundError = e.message || String(e);
    }

    if (allQs.length) appendToCache(LS_MISTAKE_CACHE, allQs);

    if (!silent) hideLoading();
    else badge(true, "AI：已連線");

    if (allQs.length === 0 && lastRoundError) throw new Error(lastRoundError);
    return allQs;
  }

  // ====== AI 批次產題：拼字填空 ======
  function computeSpellingFingerprint() {
    const pool = filterVocabByScope();
    if (!pool.length) return "empty";
    const last = pool[pool.length - 1]?.word || "";
    return `spelling_${pool.length}_${last}_${getDifficulty()}`;
  }

  async function batchGenerateSpellingQuestions(silent = false) {
    const pool = filterVocabByScope();
    if (pool.length < 10) return [];
    if (!silent) showLoading("正在預備拼字題庫，首次需要稍等…");
    if (silent) badge("bg", "AI：背景備題中…");

    const batchN = 10;
    const rounds = 2;
    const fp = computeSpellingFingerprint();
    const allQs = [];
    const usedWords = new Set();

    for (let round = 0; round < rounds; round++) {
      // 每輪抽 15 個不重複單字
      const wordList = pickWordListForAI(30).filter(w => !usedWords.has(w)).slice(0, 15);
      wordList.forEach(w => usedWords.add(w));

      try {
        const out = await gjson(
`國中英文拼字填空，出 ${batchN} 題，只用以下單字當答案。
JSON格式：{"questions":[{"prompt":"句子______","answer":"單字","zh":"中文翻譯"}]}
單字：${wordList.join(", ")}`,
          "出題。"
        );

        const raw = (out.questions || []).slice(0, batchN);
        const qs = raw.map((x, i) => {
          const ans = (x.answer || "").trim();
          let prompt = x.prompt || `拼字題 ${i + 1}`;
          if (prompt.includes("______") && ans) {
            const hint = spellingHint(ans);
            const first = ans[0], last = ans[ans.length - 1];
            const seg = new RegExp(first + "\\s*______\\s*" + last);
            if (seg.test(prompt)) prompt = prompt.replace(seg, hint);
            else prompt = prompt.replace("______", hint);
          }
          return { kind: "text", prompt, answer: ans, zh: (x.zh || "").trim() };
        }).filter(q => q.answer);

        allQs.push(...qs);
      } catch (e) {
        console.warn(`拼字第 ${round + 1} 輪失敗：`, e.message);
      }

      if (round < rounds - 1) {
        await new Promise(res => setTimeout(res, 4000));
      }
    }

    if (allQs.length) {
      const cache = loadCache(LS_SPELLING_CACHE);
      const existing = cache.fingerprint === fp ? cache.questions : [];
      saveCache(LS_SPELLING_CACHE, fp, existing.concat(allQs));
    }

    if (!silent) hideLoading();
    else badge(true, "AI：已連線");
    return allQs;
  }

  // 背景靜默補貨（不打斷使用者，含冷卻保護）
  function silentRefillIfNeeded(lsKey, generator) {
    if (window.__AI_IN_FLIGHT__) return;
    const now = Date.now();
    if (now - lastRefillTime < REFILL_COOLDOWN_MS) return; // 冷卻中
    const count = cacheCount(lsKey);
    if (count <= CACHE_REFILL_AT) {
      lastRefillTime = now;
      generator(true).catch(e => console.warn("背景補貨失敗：", e));
    }
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
    if (title) {
      const scopeHtml = Array.isArray(cur.scope) && cur.scope.length
        ? '<div style="margin-top:8px;display:flex;flex-wrap:wrap;gap:8px">' + cur.scope.map(s => `<span style="font-size:12px;color:#9ca3af">${escapeHtml(s)}</span>`).join("") + '</div>'
        : "";
      // 拼字題：顯示中文翻譯提示
      const zhHtml = cur.zh
        ? `<div style="margin-top:8px;font-size:14px;color:var(--muted);line-height:1.5">📖 ${escapeHtml(cur.zh)}</div>`
        : "";
      // 文法/改錯題：顯示考點標籤
      const labelHtml = cur.grammarLabel
        ? `<div style="margin-top:8px;font-size:12px;color:var(--accent)">📌 ${escapeHtml(cur.grammarLabel)}</div>`
        : "";
      title.innerHTML = `<div>(${quiz.idx + 1}/${quiz.questions.length}) ${escapeHtml(formatMarked(cur.prompt || ""))}</div>${scopeHtml}${zhHtml}${labelHtml}`;
    }

    if (cur.kind === "mistake") {
      const box = $("#options");
      if (!box) return;
      box.innerHTML = "";
      const letters = ["A", "B", "C", "D"];
      for (const [i, ch] of cur.choices.entries()) {
        const b = document.createElement("button");
        b.className = "opt";
        b.innerHTML = `<span class="opt-letter">${letters[i]}.</span><span>${escapeHtml(ch)}</span>`;
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

    const box = $("#options");
    if (!box) return;
    box.innerHTML = "";
    const letters = ["A", "B", "C", "D"];
    for (const [i, opt] of (cur.options || []).entries()) {
      const b = document.createElement("button");
      b.className = "opt";
      b.innerHTML = `<span class="opt-letter">${letters[i] || (i+1)}.</span><span>${escapeHtml(opt)}</span>`;
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
  // ====== Explain ======
  async function explainCurrent() {
    if (!quiz) return;
    const cur = quiz.questions[quiz.idx];
    const answer = cur.kind === "mistake" ? (cur.correction || "") : (cur.answer || "");
    const opts = cur.kind === "mistake" ? (cur.choices || []).join(" / ") : (cur.options || []).join(" / ");

    try {
      showLoading("正在生成解釋請稍後");
      const out = await gjson(
        `國中英文老師，用繁體中文條列3~5點解釋此題（50~100字）。JSON：{"points":["..."]}`,
        `題目：${cur.prompt}\n選項：${opts}\n答案：${answer}`
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

    if (!filterGrammarByScope().length) {
      showError("文法庫太少或範圍過窄");
      return;
    }

    try {
      wrongCount = 0;

      const fp = computeGrammarFingerprint();
      const cache = loadCache(LS_GRAMMAR_CACHE);
      const cacheOk = cache.fingerprint === fp && cache.questions.length >= n;

      if (!cacheOk) {
        // 若背景補貨正在跑，等它跑完
        if (window.__AI_IN_FLIGHT__) {
          showLoading("背景備題中，請稍候…");
          await new Promise(res => {
            const check = setInterval(() => {
              if (!window.__AI_IN_FLIGHT__) { clearInterval(check); res(); }
            }, 500);
          });
          hideLoading();
        } else {
          await batchGenerateGrammarQuestions(false);
        }
      } else {
        hideLoading();
      }

      const qs = drawFromCache(LS_GRAMMAR_CACHE, n);
      if (!qs.length) throw new Error("題目尚未備妥，請再按一次");

      // 若不足 n 題（部分批次失敗），用有的題目先開始
      quiz = { type: "grammar", meta: "文法測驗", idx: 0, score: 0, questions: qs };
      showOnly("viewQuiz");
      renderQ();

      setTimeout(() => silentRefillIfNeeded(LS_GRAMMAR_CACHE, batchGenerateGrammarQuestions), 2000);

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

      const fp = computeSpellingFingerprint();
      const cache = loadCache(LS_SPELLING_CACHE);
      const cacheOk = cache.fingerprint === fp && cache.questions.length >= n;

      if (!cacheOk) {
        if (window.__AI_IN_FLIGHT__) {
          showLoading("背景備題中，請稍候…");
          await new Promise(res => {
            const check = setInterval(() => {
              if (!window.__AI_IN_FLIGHT__) { clearInterval(check); res(); }
            }, 500);
          });
          hideLoading();
        } else {
          await batchGenerateSpellingQuestions(false);
        }
      }

      // 從 spelling cache 抽題
      const sc = loadCache(LS_SPELLING_CACHE);
      const qs = sc.questions.splice(0, n);
      saveCache(LS_SPELLING_CACHE, sc.fingerprint, sc.questions);

      if (!qs.length) throw new Error("題目尚未備妥，請再按一次");

      hideLoading();
      quiz = { type: "spelling", meta: "拼字填空", idx: 0, score: 0, questions: qs };
      showOnly("viewQuiz");
      renderQ();

      // 背景補貨（拼字用獨立冷卻）
      setTimeout(() => {
        if (window.__AI_IN_FLIGHT__) return;
        if (loadCache(LS_SPELLING_CACHE).questions.length <= CACHE_REFILL_AT) {
          batchGenerateSpellingQuestions(true).catch(e => console.warn("拼字背景補貨失敗：", e));
        }
      }, 2000);

    } catch (e) {
      hideLoading();
      showError("拼字填空出題失敗：" + (e.message || String(e)));
    }
  }

  async function startFindMistakeQuiz() {
    const n = settings.mistakeN || 10;

    if (!filterGrammarByScope().length) {
      showError("文法庫太少或範圍過窄");
      return;
    }

    try {
      wrongCount = 0;

      const fp = computeGrammarFingerprint();
      const cache = loadCache(LS_MISTAKE_CACHE);
      const cacheOk = cache.fingerprint === fp && cache.questions.length >= n;

      if (!cacheOk) {
        if (window.__AI_IN_FLIGHT__) {
          showLoading("背景備題中，請稍候…");
          await new Promise(res => {
            const check = setInterval(() => {
              if (!window.__AI_IN_FLIGHT__) { clearInterval(check); res(); }
            }, 500);
          });
          hideLoading();
        } else {
          await batchGenerateMistakeQuestions(false);
        }
      } else {
        hideLoading();
      }

      const qs = drawFromCache(LS_MISTAKE_CACHE, n);
      if (!qs.length) throw new Error("題目尚未備妥，請再按一次");

      quiz = { type: "mistake", meta: "選出錯誤", idx: 0, score: 0, questions: qs };
      showOnly("viewQuiz");
      renderQ();

      setTimeout(() => silentRefillIfNeeded(LS_MISTAKE_CACHE, batchGenerateMistakeQuestions), 1500);

    } catch (e) {
      hideLoading();
      showError("選出錯誤出題失敗：" + (e.message || String(e)));
    }
  }

async function startReadingQuiz() {
    const wordsCount = settings.readingWords || 200;
    const qCount = settings.readingQn || 5;

    const wordsList = pickWordListForAI(20).join(", ");
    const grammarList = pickGrammarListForAI(8).join(", ");
    const d = getDifficulty() === "挑戰" ? "國八後段難度" : "國八標準難度";

    try {
      wrongCount = 0;
      showLoading("正在生成題目請稍後");
      const out = await gjson(
`國中英文閱讀測驗，${d}。
產出約 ${wordsCount} 字自然通順的英文短文，加 ${qCount} 題四選一（涵蓋主旨/細節/推論/字義）。
JSON：{"passage":"...","questions":[{"prompt":"...","options":["","","",""],"answer":""}]}
answer 等於 options 其中之一。可參考以下單字和文法點，但以通順為主：
單字：${wordsList}
文法：${grammarList}`,
        "出題。"
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

    const wordsList = pickWordListForAI(20).join(", ");
    const grammarList = pickGrammarListForAI(8).join(", ");
    const d = getDifficulty() === "挑戰" ? "國八後段難度" : "國八標準難度";

    try {
      wrongCount = 0;
      showLoading("正在生成題目請稍後");
      const out = await gjson(
`國中英文克漏字，${d}。
產出約 ${wordsCount} 字短文，空格用 ___(1)___ 到 ___(${qCount})___，加 ${qCount} 題四選一。
JSON：{"passage":"...","questions":[{"prompt":"(1)...","options":["","","",""],"answer":""}]}
answer 等於 options 其中之一，空格考點分散（介系詞/時態/連接詞/代名詞等）。
可參考以下單字和文法點，但以通順為主：
單字：${wordsList}
文法：${grammarList}`,
        "出題。"
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
    // If the HTML already has a #setDifficulty element (new design), do nothing
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
    ["標準", "挑戰"].forEach(v => {
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

    // ── 快速選冊按鈕（依資料動態產生有哪些冊）──
    const books = Array.from(new Set(scopeKeys.map(it => it.book))).filter(Boolean);
    if (books.length) {
      const quickRow = document.createElement("div");
      quickRow.className = "row";
      quickRow.style.cssText = "margin-bottom:10px;flex-wrap:wrap;gap:8px;";

      const quickLabel = document.createElement("span");
      quickLabel.className = "small";
      quickLabel.textContent = "快速選：";
      quickRow.appendChild(quickLabel);

      for (const book of books) {
        const btn = document.createElement("button");
        btn.className = "btn";
        btn.style.cssText = "padding:6px 12px;font-size:13px;border-radius:999px;";
        btn.textContent = book;
        btn.onclick = () => {
          // 先全部取消，再勾選該冊
          for (const it of scopeKeys) settings.scope[it.key] = false;
          for (const it of scopeKeys) {
            if (it.book === book) settings.scope[it.key] = true;
          }
          renderScopeUI(scopeKeys);
        };
        quickRow.appendChild(btn);
      }
      list.appendChild(quickRow);

      const divider = document.createElement("div");
      divider.className = "divider";
      divider.style.margin = "0 0 10px";
      list.appendChild(divider);
    }

    // ── 個別單元 checkbox ──
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
    const oldDifficulty = settings.difficulty;
    if ($("#setVocabN")) settings.vocabN = parseInt($("#setVocabN").value, 10);
    if ($("#setGrammarN")) settings.grammarN = parseInt($("#setGrammarN").value, 10);
    if ($("#setSpellingN")) settings.spellingN = parseInt($("#setSpellingN").value, 10);
    if ($("#setMistakeN")) settings.mistakeN = parseInt($("#setMistakeN").value, 10);
    if ($("#setReadingWords")) settings.readingWords = parseInt($("#setReadingWords").value, 10);
    if ($("#setReadingQn")) settings.readingQn = parseInt($("#setReadingQn").value, 10);
    if ($("#setClozeWords")) settings.clozeWords = parseInt($("#setClozeWords").value, 10);
    if ($("#setClozeQn")) settings.clozeQn = parseInt($("#setClozeQn").value, 10);
    if ($("#setDifficulty")) settings.difficulty = $("#setDifficulty").value;

    // 難度改變 → 清掉文法、改錯、拼字 cache
    if (settings.difficulty !== oldDifficulty) {
      try { localStorage.removeItem(LS_GRAMMAR_CACHE); } catch(e) {}
      try { localStorage.removeItem(LS_MISTAKE_CACHE); } catch(e) {}
      try { localStorage.removeItem(LS_SPELLING_CACHE); } catch(e) {}
    }

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

  // ── Vocab / Grammar filter state ──
  const vocabFilter = { book: "", unit: "", page: 0 };
  const grammarFilter = { book: "", unit: "" };
  const VOCAB_PAGE_SIZE = 60;

  function getBooks(arr) {
    const order = ["國七上","國七下","國八上","國八下","國九上","國九下"];
    const set = new Set(arr.map(v => v.book).filter(Boolean));
    return order.filter(b => set.has(b));
  }
  function getUnits(arr, book) {
    const pool = book ? arr.filter(v => v.book === book) : arr;
    const units = Array.from(new Set(pool.map(v => v.unit).filter(Boolean)));
    const unitNum = u => /starter/i.test(u) ? 0 : parseInt(u.replace(/\D+/g,"") || "999", 10);
    return units.sort((a,b) => unitNum(a) - unitNum(b));
  }

  function renderFilterTabs(containerId, items, filter, onChange) {
    const c = document.getElementById(containerId);
    if (!c) return;
    c.innerHTML = "";

    const books = getBooks(items);
    const units = getUnits(items, filter.book);

    // Book tabs
    const bookRow = document.createElement("div");
    bookRow.className = "filter-tab-row";
    [{ val:"", label:"全部" }, ...books.map(b=>({val:b,label:b}))].forEach(({val,label}) => {
      const btn = document.createElement("button");
      btn.className = "filter-tab" + (filter.book === val ? " active" : "");
      btn.textContent = label;
      btn.onclick = () => { filter.book = val; filter.unit = ""; filter.page = 0; onChange(); };
      bookRow.appendChild(btn);
    });
    c.appendChild(bookRow);

    // Unit tabs
    const unitRow = document.createElement("div");
    unitRow.className = "filter-tab-row";
    [{ val:"", label:"全章節" }, ...units.map(u=>({val:u,label:u}))].forEach(({val,label}) => {
      const btn = document.createElement("button");
      btn.className = "filter-tab small-tab" + (filter.unit === val ? " active" : "");
      btn.textContent = label;
      btn.onclick = () => { filter.unit = val; filter.page = 0; onChange(); };
      unitRow.appendChild(btn);
    });
    c.appendChild(unitRow);
  }

  function renderVocab() {
    const tabsEl = document.getElementById("vocabTabs");
    const box = document.getElementById("vocabList");
    if (!box) return;

    renderFilterTabs("vocabTabs", data.vocab, vocabFilter, renderVocab);

    const filtered = data.vocab.filter(v => {
      if (vocabFilter.book && v.book !== vocabFilter.book) return false;
      if (vocabFilter.unit && v.unit !== vocabFilter.unit) return false;
      return true;
    });

    const total = filtered.length;
    const totalPages = Math.ceil(total / VOCAB_PAGE_SIZE);
    const page = Math.min(vocabFilter.page || 0, Math.max(0, totalPages - 1));
    const items = filtered.slice(page * VOCAB_PAGE_SIZE, (page + 1) * VOCAB_PAGE_SIZE);

    box.innerHTML = "";

    // Grid container
    const grid = document.createElement("div");
    grid.className = "vocab-grid";
    for (const v of items) {
      const card = document.createElement("div");
      card.className = "vocab-card";
      card.innerHTML =
        `<span class="vc-word">${escapeHtml(v.word)}</span>` +
        `<span class="vc-type">${escapeHtml(v.type||"")}</span>` +
        `<span class="vc-def">${escapeHtml(v.def||"")}</span>` +
        `<span class="vc-unit">${escapeHtml((v.book||"")+" "+(v.unit||""))}</span>`;
      grid.appendChild(card);
    }
    box.appendChild(grid);

    // Pagination
    if (totalPages > 1) {
      const pg = document.createElement("div");
      pg.className = "pagination";
      pg.innerHTML = `<span class="pg-info">第 ${page+1} / ${totalPages} 頁（共 ${total} 個單字）</span>`;
      if (page > 0) {
        const prev = document.createElement("button");
        prev.className = "btn"; prev.textContent = "← 上一頁";
        prev.onclick = () => { vocabFilter.page = page - 1; renderVocab(); };
        pg.prepend(prev);
      }
      if (page < totalPages - 1) {
        const next = document.createElement("button");
        next.className = "btn"; next.textContent = "下一頁 →";
        next.onclick = () => { vocabFilter.page = page + 1; renderVocab(); };
        pg.appendChild(next);
      }
      box.appendChild(pg);
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
    const box = document.getElementById("grammarList");
    if (!box) return;

    renderFilterTabs("grammarTabs", data.grammar, grammarFilter, renderGrammar);

    const items = data.grammar.filter(g => {
      if (grammarFilter.book && g.book !== grammarFilter.book) return false;
      if (grammarFilter.unit && g.unit !== grammarFilter.unit) return false;
      return true;
    }).sort(compareBookUnitTitle);

    box.innerHTML = "";

    if (!items.length) {
      box.innerHTML = '<div class="list-small" style="color:var(--muted);padding:12px 0">此範圍無文法資料</div>';
      return;
    }

    // Group by unit
    const byUnit = new Map();
    for (const g of items) {
      const key = (g.book||"") + " " + (g.unit||"");
      if (!byUnit.has(key)) byUnit.set(key, []);
      byUnit.get(key).push(g);
    }

    for (const [unitKey, gs] of byUnit) {
      const section = document.createElement("div");
      section.className = "grammar-section";
      section.innerHTML = `<div class="grammar-section-title">${escapeHtml(unitKey)}</div>`;

      for (const g of gs) {
        const div = document.createElement("div");
        div.className = "grammar-item";
        const groupHtml = g.group ? `<span class="chip">${escapeHtml(g.group)}</span>` : "";
        const patternHtml = g.pattern ? `<div class="gi-pattern">句型：${escapeHtml(g.pattern)}</div>` : "";
        const exampleText = Array.isArray(g.examples) && g.examples.length ? g.examples.slice(0,2).join(" / ") : "";
        const exampleHtml = exampleText ? `<div class="gi-example">例：${escapeHtml(exampleText)}</div>` : "";
        const explHtml = g.explanation ? `<div class="gi-exp">${escapeHtml(g.explanation)}</div>` : "";
        div.innerHTML =
          `<div class="gi-header"><span class="gi-title">${escapeHtml(g.title||"")}</span>${groupHtml}</div>` +
          `${patternHtml}${exampleHtml}${explHtml}`;
        section.appendChild(div);
      }
      box.appendChild(section);
    }
  }

  // ====== Navigation ======
  // ====== Navigation ======
  function setView(view, scopeKeys) {
    $$(".navBtn").forEach(b => b.classList.toggle("active", b.dataset.view === view));
    const map = { vocab: "單字庫", grammar: "文法庫", aiquiz: "AI 測驗", reading: "課文練習", stats: "測驗統計", settings: "設定" };
    setTitle(map[view] || "");

    if (view === "vocab")    { showOnly("viewVocab");    renderVocab();                  return; }
    if (view === "grammar")  { showOnly("viewGrammar");  renderGrammar();                return; }
    if (view === "aiquiz")   { showOnly("viewAiQuiz");                                   return; }
    if (view === "stats")    { showOnly("viewStats");    renderStats();                  return; }
    if (view === "settings") { showOnly("viewSettings"); syncSettingsToUI(scopeKeys);    return; }
    if (view === "reading")  { showOnly("viewReading");  renderPassageListFromScript();  return; }
  }

  function renderPassageListFromScript() {
    const list = document.getElementById("passageList");
    if (!list) return;
    list.innerHTML = "";
    const passages = window.readingPassages || [];
    if (!passages.length) {
      list.innerHTML = '<div style="color:var(--muted);font-size:14px">尚無課文資料</div>';
      return;
    }
    passages.forEach((p, i) => {
      const item = document.createElement("div");
      item.className = "passage-item";
      const typeChip = p.type === "dialogue"
        ? '<span class="chip fire">對話</span>'
        : '<span class="chip ice">閱讀</span>';
      item.innerHTML =
        '<div class="pi-left">' +
          `<div class="pi-title">${escapeHtml(p.title)}</div>` +
          `<div class="pi-meta">${escapeHtml(p.book + ' · ' + p.unit)} &nbsp;${typeChip}</div>` +
        '</div>' +
        '<span class="pi-arrow">›</span>';
      item.addEventListener("click", () => startStaticReadingQuiz(i));
      list.appendChild(item);
    });
  }

  // ====== Wire ======
  function wire(scopeKeys) {
    // left nav
    $$(".navBtn").forEach(b => b.addEventListener("click", () => setView(b.dataset.view, scopeKeys)));

    // list search/filter - tabs are rendered directly in renderVocab/renderGrammar

    // stats range
    $("#statRange") && $("#statRange").addEventListener("change", renderStats);

    // settings save
    $("#btnSaveSettings") && ($("#btnSaveSettings").onclick = () => { saveSettingsFromUI(); alert("設定已儲存"); });

    // quiz buttons — support both <button> and <div> (new card design)
    const bindQuiz = (id, fn) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener("click", fn);
    };
    bindQuiz("startVocabQuiz",       startVocabQuiz);
    bindQuiz("startGrammarQuiz",     startGrammarQuiz);
    bindQuiz("startReadingQuiz",     startReadingQuiz);
    bindQuiz("startSpellingQuiz",    startSpellingQuiz);
    bindQuiz("startFindMistakeQuiz", startFindMistakeQuiz);
    bindQuiz("startClozeQuiz",       startClozeQuiz);

    // quiz controls
    $("#btnAcknowledge") && ($("#btnAcknowledge").onclick = nextQ);
    $("#btnExplain") && ($("#btnExplain").onclick = explainCurrent);
    $("#btnExplainOk") && ($("#btnExplainOk").onclick = closeExplain);

    $("#btnResultRetry") && ($("#btnResultRetry").onclick = () => setView("aiquiz", scopeKeys));
    $("#btnErrClose")    && ($("#btnErrClose").onclick    = () => setView("aiquiz", scopeKeys));

    // static reading quiz controls
    $("#btnBackToReading") && ($("#btnBackToReading").onclick = () => setView("reading", scopeKeys));
    $("#rqBtnNext")        && ($("#rqBtnNext").onclick        = nextStaticQ);
    $("#rqBtnExplain")     && ($("#rqBtnExplain").onclick     = explainStaticQ);
    $("#rqRetry")          && ($("#rqRetry").onclick          = retryStaticQuiz);
    $("#rqBackList")       && ($("#rqBackList").onclick       = () => setView("reading", scopeKeys));
  }

  // ====== Static Reading Quiz (課文練習) ======
  const staticRQ = { passage: null, idx: 0, score: 0, correct: 0 };

  function startStaticReadingQuiz(pi) {
    const p = (window.readingPassages || [])[pi];
    if (!p) return;
    staticRQ.passage = p;
    staticRQ.idx = 0;
    staticRQ.score = 0;
    staticRQ.correct = 0;
    showOnly("viewReadingQuiz");
    const rp = document.getElementById("rqPassage");
    if (rp) rp.textContent = p.text;
    renderStaticQ();
  }

  function renderStaticQ() {
    const p = staticRQ.passage;
    const qi = staticRQ.idx;
    const q = p.questions[qi];
    const total = p.questions.length;

    const meta = document.getElementById("rqMeta");
    if (meta) meta.textContent = `${qi + 1} / ${total}`;
    const bar = document.getElementById("rqBar");
    if (bar) bar.style.width = Math.round(qi / total * 100) + "%";
    const scoreEl = document.getElementById("rqScore");
    if (scoreEl) scoreEl.textContent = staticRQ.score;

    const title = document.getElementById("rqTitle");
    if (title) title.textContent = `Q${qi + 1}. ${q.q}`;

    const fb = document.getElementById("rqFeedback");
    if (fb) { fb.className = "feedback hidden"; fb.textContent = ""; }
    const ack = document.getElementById("rqAckRow");
    if (ack) ack.classList.add("hidden");

    const optBox = document.getElementById("rqOptions");
    if (!optBox) return;
    optBox.innerHTML = "";
    const letters = ["A", "B", "C", "D"];
    q.opts.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.className = "opt";
      btn.innerHTML = `<span class="opt-letter">${letters[i]}.</span><span>${escapeHtml(opt)}</span>`;
      btn.addEventListener("click", () => answerStaticQ(i, btn, q));
      optBox.appendChild(btn);
    });
  }

  function answerStaticQ(chosen, btn, q) {
    document.querySelectorAll("#rqOptions .opt").forEach(b => { b.style.pointerEvents = "none"; });
    const correct = (chosen === q.ans);
    if (correct) {
      btn.classList.add("correct");
      staticRQ.score += 10;
      staticRQ.correct++;
    } else {
      btn.classList.add("wrong");
      const all = document.querySelectorAll("#rqOptions .opt");
      if (all[q.ans]) all[q.ans].classList.add("correct");
    }
    const scoreEl = document.getElementById("rqScore");
    if (scoreEl) scoreEl.textContent = staticRQ.score;
    const fb = document.getElementById("rqFeedback");
    if (fb) {
      fb.className = "feedback " + (correct ? "good" : "bad");
      fb.textContent = (correct ? "✓ 答對！" : "✗ 答錯。") + (q.exp ? "  " + q.exp : "");
    }
    const ack = document.getElementById("rqAckRow");
    if (ack) ack.classList.remove("hidden");
  }

  function nextStaticQ() {
    const p = staticRQ.passage;
    staticRQ.idx++;
    if (staticRQ.idx >= p.questions.length) {
      showOnly("viewReadingResult");
      const score = staticRQ.score;
      const total = p.questions.length * 10;
      const pct = Math.round(score / total * 100);
      const scoreEl = document.getElementById("rqFinalScore");
      if (scoreEl) { scoreEl.textContent = score; scoreEl.classList.toggle("good-score", pct >= 70); }
      const note = document.getElementById("rqFinalNote");
      if (note) note.textContent = `答對 ${staticRQ.correct} / ${p.questions.length} 題（${pct}%）`;
    } else {
      renderStaticQ();
    }
  }

  function explainStaticQ() {
    const p = staticRQ.passage;
    const q = p.questions[staticRQ.idx];
    openExplain([q.exp || "本題無額外解釋。"]);
  }

  function retryStaticQuiz() {
    const p = staticRQ.passage;
    const pi = (window.readingPassages || []).indexOf(p);
    if (pi >= 0) startStaticReadingQuiz(pi);
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
