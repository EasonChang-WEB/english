// script.js — v9 settings版（穩定）
(() => {
'use strict';
const $=q=>document.querySelector(q); const $$=q=>Array.from(document.querySelectorAll(q));

function escapeHtml(s){return (s??'').toString().replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;');}
function clamp(n,a,b){return Math.max(a,Math.min(b,n));}
function shuffle(arr){const a=arr.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function normEn(s){return (s||'').trim().toLowerCase().replace(/[\u2019]/g,"'").replace(/\s+/g,' ');}
function formatMarked(t){if(!t) return t; return t.replace(/\*\*(.+?)\*\*/g,'【$1】').replace(/\*(.+?)\*/g,'【$1】');}
function spellingHint(ans){const w=(ans||'').trim(); if(w.length<3) return w; return w[0]+'_'.repeat(Math.max(1,w.length-2))+w[w.length-1];}
function clozeNormalizePassage(p){if(!p) return p; return p.replace(/(?<!_)\((\d+)\)(?!_)/g,'___($1)___');}


function getScopeSet(){
  try{
    const s = (settings && settings.scope) ? settings.scope : {};
    const set = new Set();
    for(const k in s){ if(s[k]!==false) set.add(k); }
    return set;
  }catch(e){
    return new Set();
  }
}
function pickWordListForAI(maxN){
  const vocab = (window.appData?.vocabulary || []);
  const set = getScopeSet();
  const words = [];
  for(const v of vocab){
    const key = `${v.book||''} ${v.unit||''}`.trim();
    if(set.size && !set.has(key)) continue;
    const w = String(v.word||'').trim();
    if(w) words.push(w);
  }
  const uniq = Array.from(new Set(words.map(w=>w.toLowerCase()))).map(lw=>{
    const hit = words.find(w=>w.toLowerCase()===lw);
    return hit || lw;
  });
  return shuffle(uniq).slice(0, maxN);
}
function pickGrammarListForAI(maxN){
  const rules = (window.appData?.grammar_rules || []);
  const set = getScopeSet();
  const items = [];
  for(const g of rules){
    const key = `${g.book||''} ${g.unit||''}`.trim();
    if(set.size && !set.has(key)) continue;
    const title = String(g.title||'').trim();
    if(!title) continue;
    const ex = Array.isArray(g.examples)? g.examples.slice(0,2).join(" / ") : "";
    items.push(`${key}｜${title}${ex?`｜例：${ex}`:""}`);
  }
  return items.slice(0, maxN);
}
// localStorage
function loadJson(k,f){try{return JSON.parse(localStorage.getItem(k)||JSON.stringify(f));}catch(e){return f;}}
function saveJson(k,v){localStorage.setItem(k,JSON.stringify(v));}

function normalizeOptions4(options, answer){
  let opts = Array.isArray(options) ? options.map(s=>String(s).trim()).filter(Boolean) : [];
  // map letter answer
  if(typeof answer==="string" && /^[A-D]$/i.test(answer.trim())){
    const idx = answer.trim().toUpperCase().charCodeAt(0) - 65;
    if(opts[idx]) answer = opts[idx];
  }
  // remove solitary letter options
  opts = opts.filter(o=>!(/^[A-D]$/i.test(o)));
  // de-dup
  opts = Array.from(new Set(opts));
  if(answer && !opts.includes(answer)) opts.push(answer);

  const fillers = ["(A) None of these","(B) All of these","(C) Not sure","(D) No idea"];
  let i=0;
  while(opts.length < 4 && i < fillers.length){
    if(!opts.includes(fillers[i])) opts.push(fillers[i]);
    i++;
  }
  // shuffle and take 4
  opts = shuffle(opts).slice(0,4);
  if(answer && !opts.includes(answer)) opts[0] = answer;
  return { options: opts, answer };
}

const LS_SETTINGS='eason_settings_v1';
const defaultSettings=()=>({
  difficulty:'標準',
  scope:{},
  vocabN:10, grammarN:10, spellingN:10, mistakeN:10,
  readingWords:200, readingQn:5,
  clozeWords:150, clozeQn:5,
});
let settings=loadJson(LS_SETTINGS, defaultSettings());

const STATS_KEY='eason_stats_v3';
let stats=loadJson(STATS_KEY,{sessions:[]});
let currentWrong=0;


// Badge

async function pingProxy(){
  try{
    const r = await fetch("https://english-test.replit.app/ping", {method:"GET"});
    if(r.ok) badge(true,"AI：已連線");
    else badge(false,"AI：尚未連線");
  }catch(e){
    badge(false,"AI：尚未連線");
  }
}

function badge(ok,text){const b=$('#apiBadge'); if(!b) return; const dot=b.querySelector('.dot'); const label=b.querySelector('span:last-child'); if(label) label.textContent=text|| (ok?'AI：已連線':'AI：尚未連線'); if(dot) dot.style.background=ok?'var(--good)':'var(--accent)';}

// Views
const VIEW_IDS=['viewVocab','viewGrammar','viewAiQuiz','viewStats','viewSettings','viewQuiz','viewResult','viewError'];
function showOnly(id){for(const vid of VIEW_IDS){const el=document.getElementById(vid); if(!el) continue; el.classList.toggle('hidden', vid!==id);}}
function setTitle(t){const el=$('#mainTitle'); if(el) el.textContent=t||'';}
function setView(view){$$('.navBtn').forEach(b=>b.classList.toggle('active', b.dataset.view===view)); const map={vocab:'單字庫',grammar:'文法庫',aiquiz:'AI測驗庫',stats:'測驗統計',settings:'功能設定'}; setTitle(map[view]||''); if(view==='vocab'){showOnly('viewVocab'); renderVocab(); return;} if(view==='grammar'){showOnly('viewGrammar'); renderGrammar(); return;} if(view==='aiquiz'){showOnly('viewAiQuiz'); return;} if(view==='stats'){showOnly('viewStats'); renderStats(); return;} if(view==='settings'){showOnly('viewSettings'); return;} }

// Loading / explain
function showLoading(t){const m=$('#loadingMask'); if(!m) return; const tt=$('#loadingText'); if(tt) tt.textContent=t||'正在生成題目請稍後'; m.classList.remove('hidden');}
function hideLoading(){const m=$('#loadingMask'); if(m) m.classList.add('hidden');}
function openExplain(points){const m=$('#explainMask'); if(!m) return; const box=$('#explainText'); const arr=Array.isArray(points)?points:[String(points||'—')]; if(box){box.innerHTML='<ul style="margin:0;padding-left:20px">'+arr.slice(0,5).map(p=>'<li style="margin:6px 0">'+escapeHtml(p)+'</li>').join('')+'</ul>';}
 m.classList.remove('hidden');}
function closeExplain(){const m=$('#explainMask'); if(m) m.classList.add('hidden');}

function showError(msg){const box=$('#errText'); if(box) box.textContent=msg||'Unknown error'; showOnly('viewError');}

// Data
const data={vocab:[], grammar:[]};
function loadData(){data.vocab=(window.appData?.vocabulary||[]).slice(); data.grammar=(window.appData?.grammar_rules||[]).slice();}

// Scope options
function buildScopeKeys(){
  const set = new Set();
  const add = (book, unit) => {
    const b = (book||"").trim();
    const u = (unit||"").trim();
    if(!b || !u) return;
    set.add(`${b} ${u}`.trim());
  };

  const vocab = (window.appData?.vocabulary || []);
  const grammar = (window.appData?.grammar_rules || []);
  for(const v of vocab) add(v.book, v.unit);
  for(const g of grammar) add(g.book, g.unit);

  const bookRank = (b) => {
    if(b.includes("國七上")) return 10;
    if(b.includes("國七下")) return 20;
    if(b.includes("國八上")) return 30;
    if(b.includes("國八下")) return 40;
    if(b.includes("國九上")) return 50;
    if(b.includes("國九下")) return 60;
    return 999;
  };
  const unitRank = (u) => {
    if(/starter/i.test(u)) return 0;
    const n = parseInt(String(u).replace(/\D+/g,"")||"999",10);
    return isNaN(n)?999:n;
  };

  const arr = Array.from(set).map(k=>{
    const parts=k.split(/\s+/);
    const unit=parts.pop();
    const book=parts.join(" ");
    return {key:k,label:k,book,unit};
  });

  arr.sort((a,b)=>{
    const db = bookRank(a.book)-bookRank(b.book);
    if(db!==0) return db;
    const du = unitRank(a.unit)-unitRank(b.unit);
    if(du!==0) return du;
    return a.key.localeCompare(b.key,"zh-Hant");
  });
  return arr;
}
let scopeKeys = [];
function ensureScopeDefaults(){
  if(Object.keys(settings.scope||{}).length) return;
  settings.scope={};
  for(const k of scopeKeys) settings.scope[k.key]=true;
  saveJson(LS_SETTINGS, settings);
}

function renderScopeUI(){
  const list=$('#scopeList'); if(!list) return;
  list.innerHTML='';
  for(const it of scopeKeys){
    const id='sc_'+it.key.replace(/\s+/g,'_');
    const wrap=document.createElement('label');
    wrap.className='small';
    wrap.style.display='inline-flex';
    wrap.style.alignItems='center';
    wrap.style.gap='6px';
    wrap.innerHTML=`<input type="checkbox" id="${id}"> ${it.label}`;
    list.appendChild(wrap);
    const cb=wrap.querySelector('input');
    cb.checked = settings.scope[it.key]!==false;
    cb.onchange=()=>{ settings.scope[it.key]=cb.checked; };
  }
  const all=$('#scopeAll');
  if(all){
    all.checked = scopeKeys.every(it=>settings.scope[it.key]!==false);
    all.onchange=()=>{ const v=all.checked; for(const it of scopeKeys){ settings.scope[it.key]=v; } renderScopeUI(); };
  }
}

function saveSettingsFromUI(){
  settings.vocabN=parseInt($('#setVocabN').value,10);
  settings.grammarN=parseInt($('#setGrammarN').value,10);
  settings.spellingN=parseInt($('#setSpellingN').value,10);
  settings.mistakeN=parseInt($('#setMistakeN').value,10);
  settings.readingWords=parseInt($('#setReadingWords').value,10);
  settings.readingQn=parseInt($('#setReadingQn').value,10);
  settings.clozeWords=parseInt($('#setClozeWords').value,10);
  settings.clozeQn=parseInt($('#setClozeQn').value,10);
  if(document.getElementById('setDifficulty')) settings.difficulty = document.getElementById('setDifficulty').value || '標準';
  saveJson(LS_SETTINGS, settings);
}

// Unit dropdown in vocab/grammar (by data)
function fillUnitSelect(selId, items){
  const sel=document.getElementById(selId); if(!sel) return;
  const current=sel.value;
  sel.innerHTML='<option value="">全部單元</option>';
  const units=Array.from(new Set(items)).filter(Boolean).sort();
  for(const u of units){ const op=document.createElement('option'); op.value=u; op.textContent=u; sel.appendChild(op); }
  sel.value=current;
}
function renderVocab(){
  fillUnitSelect('vocabFilterUnit', data.vocab.map(v=>`${v.book||''} ${v.unit||''}`.trim()));
  const uf=$('#vocabFilterUnit').value;
  const q=($('#vocabSearch').value||'').trim().toLowerCase();
  const box=$('#vocabList'); if(!box) return; box.innerHTML='';
  const filtered=data.vocab.filter(v=>{
    if(uf){ const u=`${v.book||''} ${v.unit||''}`.trim(); if(u!==uf) return false; }
    if(!q) return true; return (v.word||'').toLowerCase().includes(q) || (v.def||'').toLowerCase().includes(q);
  }).slice(0,200);
  for(const v of filtered){
    const div=document.createElement('div'); div.className='item';
    div.innerHTML=`<div class="t"><b>${escapeHtml(v.word)} <span style="font-weight:400;color:var(--muted);margin-left:10px">${escapeHtml(v.def||'')}</span></b><span>${escapeHtml((v.book||'')+(v.unit||''))}</span></div>`;
    box.appendChild(div);
  }
}
function renderGrammar(){
  fillUnitSelect('grammarFilterUnit', data.grammar.map(g=>`${g.book||''} ${g.unit||''}`.trim()));
  const uf=$('#grammarFilterUnit').value;
  const q=($('#grammarSearch').value||'').trim().toLowerCase();
  const box=$('#grammarList'); if(!box) return; box.innerHTML='';
  const items=data.grammar.filter(g=>{
    if(uf){ const u=`${g.book||''} ${g.unit||''}`.trim(); if(u!==uf) return false; }
    if(!q) return true; return (g.title||'').toLowerCase().includes(q);
  }).sort((a,b)=>{
    const bk=x=>(x.book||'').includes('下')?2:((x.book||'').includes('上')?1:9);
    const un=x=>parseInt((x.unit||'').replace(/\D+/g,'')||'0',10);
    const d=bk(a)-bk(b); if(d) return d;
    const du=un(a)-un(b); if(du) return du;
    return (a.title||'').localeCompare(b.title||'','zh-Hant');
  }).slice(0,200);
  for(const g of items){
    const div=document.createElement('div'); div.className='item';
    div.innerHTML=`<div class="t"><b>${escapeHtml(g.title||'')}</b><span>${escapeHtml((g.book||'')+' '+(g.unit||''))}</span></div>`;
    box.appendChild(div);
  }
}

function renderStats(){
  const sessions = stats.sessions || [];
  const totalCount = sessions.length;
  const avg = totalCount ? Math.round(sessions.reduce((a,b)=>a+(b.score||0),0)/totalCount) : 0;
  const wrong = totalCount ? sessions.reduce((a,b)=>a+(b.wrong||0),0) : 0;
  const elS=document.getElementById('statSessions'); if(elS) elS.textContent=String(totalCount);
  const elA=document.getElementById('statAvg'); if(elA) elA.textContent=String(avg);
  const elW=document.getElementById('statWrong'); if(elW) elW.textContent=String(wrong);

  const box=document.getElementById('statsByType');
  if(!box) return;
  box.innerHTML='';
  const types=[
    {k:'vocab',name:'單字測驗'},
    {k:'grammar',name:'文法測驗'},
    {k:'reading',name:'閱讀測驗'},
    {k:'spelling',name:'拼字填空'},
    {k:'mistake',name:'選出錯誤'},
    {k:'cloze',name:'克漏字'},
  ];
  for(const t of types){
    const ss=sessions.filter(x=>x.type===t.k);
    const c=ss.length;
    const a=c?Math.round(ss.reduce((p,q)=>p+(q.score||0),0)/c):0;
    const w=c?ss.reduce((p,q)=>p+(q.wrong||0),0):0;
    const div=document.createElement('div');
    div.className='item';
    div.style.marginBottom='10px';
    div.innerHTML=`<div class="t"><b>${t.name}</b><span></span></div>
      <div class="small" style="margin-top:8px"><b>練習次數：</b>${c}　<b>平均分數：</b>${a}　<b>錯題數：</b>${w}</div>`;
    box.appendChild(div);
  }
}

// Gemini
function isModelBad(msg){msg=(msg||'').toLowerCase();return msg.includes('no longer available')||msg.includes('not found')||msg.includes('not supported')||msg.includes('deprecated')||msg.includes('permission denied')||msg.includes('model');}
function modelCandidates(){const pref=Array.isArray(globalThis.GEMINI_MODEL_PREFERENCE)?globalThis.GEMINI_MODEL_PREFERENCE:[];const out=[];const seen=new Set();for(const m of pref){if(m&&!seen.has(m)){seen.add(m);out.push(m);}}return out;}
async function callGemini(model,system,user){

    // Prevent concurrent requests (avoids bursts -> 429)
    if(window.__AI_IN_FLIGHT__){
      throw new Error('AI 忙碌中，請稍後再試');
    }
    window.__AI_IN_FLIGHT__ = true;

    const url = "https://english-test.replit.app/ai";
    const body = { model, system, user };

    try{
      for(let attempt=0; attempt<=2; attempt++){
        const r = await fetch(url,{
          method:'POST',
          headers:{ 'Content-Type':'application/json' },
          body:JSON.stringify(body)
        });

        if(r.status===429){
          const wait = 1500 * (attempt+1);
          await new Promise(res=>setTimeout(res, wait));
          continue;
        }

        const ct = (r.headers.get('content-type')||'').toLowerCase();
        if(ct.includes('application/json')){
          const jr = await r.json();
          if(!r.ok){
            throw new Error(jr?.error || JSON.stringify(jr));
          }
          badge(true,'AI：已連線');
          const text = (jr?.candidates?.[0]?.content?.parts||[]).map(p=>p.text||'').join('');
          try{
            return JSON.parse(text);
          }catch(e){
            const c=text.replace(/^```json\s*/i,'').replace(/```\s*$/i,'').trim();
            return JSON.parse(c);
          }
        }else{
          const t = await r.text();
          throw new Error(`Proxy HTTP ${r.status}: ${t.slice(0,200)}`);
        }
      }
      throw new Error('AI 請求過於頻繁（429），請稍後再試');
    }finally{
      window.__AI_IN_FLIGHT__ = false;
    }
  }
    window.__AI_IN_FLIGHT__ = true;

    const url = "https://english-test.replit.app/ai";
    const body = { model, system, user };

    try{
      for(let attempt=0; attempt<=2; attempt++){
        const r = await fetch(url,{
          method:'POST',
          headers:{ 'Content-Type':'application/json' },
          body:JSON.stringify(body)
        });

        if(r.status===429){
          const wait = 1200 * (attempt+1);
          await new Promise(res=>setTimeout(res, wait));
          continue;
        }

        const ct = (r.headers.get('content-type')||'').toLowerCase();
        if(ct.includes('application/json')){
          const jr = await r.json();
          if(!r.ok){
            throw new Error(jr && jr.error ? jr.error : JSON.stringify(jr));
          }
          // Mark connected once we get a valid response
          badge(true,'AI：已連線');

          const parts = (((jr||{}).candidates||[])[0]||{}).content;
          const texts = (parts && parts.parts) ? parts.parts : [];
          let text = '';
          for(const p of texts){ text += (p && p.text) ? p.text : ''; }

          try{
            return JSON.parse(text);
          }catch(e){
            const c=text.replace(/^```json\s*/i,'').replace(/```\s*$/i,'').trim();
            return JSON.parse(c);
          }
        }else{
          const t = await r.text();
          throw new Error(`Proxy HTTP ${r.status}: ${t.slice(0,200)}`);
        }
      }
      throw new Error('AI 請求過於頻繁（429），請稍後再試');
    }finally{
      window.__AI_IN_FLIGHT__ = false;
    }
  }
async function gjson(system,user){
    const pref = Array.isArray(globalThis.GEMINI_MODEL_PREFERENCE) ? globalThis.GEMINI_MODEL_PREFERENCE : ["models/gemini-2.0-flash"];
    const model = pref[0] || "models/gemini-2.0-flash";
    return await callGemini(model, system, user);
  }

// Quiz
const AUTO_NEXT_OK_MS=2000;
let quiz=null; // current
function resetQuiz(){
  const fb=$('#feedback'); if(fb){fb.classList.add('hidden'); fb.textContent=''; fb.classList.remove('good','bad');}
  const ack=$('#ackRow'); if(ack) ack.classList.add('hidden');
  const opt=$('#options'); if(opt) opt.innerHTML='';
  const inb=$('#inputBox'); if(inb) inb.classList.add('hidden');
  const rb=$('#readingBox'); if(rb) rb.classList.add('hidden');
  const rp=$('#readingPassage'); if(rp) rp.textContent='';
  const ta=$('#textAnswer'); if(ta) ta.value='';
}
function updateProg(){
  const total=quiz.questions.length||1;
  const pct=clamp((quiz.idx/total)*100,0,100);
  $('#progBar').style.width=pct+'%';
  $('#scoreLive').textContent=String(Math.round((quiz.score/total)*100));
  $('#quizMeta').textContent=quiz.meta;
}
function showFb(ok,msg){
  const fb=$('#feedback'); fb.classList.remove('hidden'); fb.classList.remove('good','bad'); fb.classList.add(ok?'good':'bad'); fb.textContent=msg;
}
function endQuiz(){
  showOnly('viewResult');
  const total=quiz.questions.length||1;
  const score=Math.round((quiz.score/total)*100);
  $('#finalScore').textContent=String(score);
  $('#resultMeta').textContent=quiz.meta;
  $('#finalNote').textContent=score>=90?'很穩，今天可以提早下課。':score>=70?'不錯，再補兩個弱點就更漂亮。':'先別氣餒，明天再來一次。';
  // save stats
  stats.sessions = stats.sessions || [];
  stats.sessions.push({time:Date.now(), type: quiz.type, score: score, wrong: currentWrong});
  if(stats.sessions.length>300) stats.sessions.splice(0, stats.sessions.length-300);
  saveJson(STATS_KEY, stats);
  currentWrong = 0;
}
function nextQ(){
  $('#ackRow').classList.add('hidden');
  quiz.idx += 1;
  if(quiz.idx>=quiz.questions.length){ endQuiz(); return; }
  renderQ();
}
function renderQ(){
  resetQuiz(); updateProg();
  const cur=quiz.questions[quiz.idx];
  if(quiz.passage){ $('#readingBox').classList.remove('hidden'); $('#readingPassage').textContent=quiz.passage; }
  $('#qTitle').textContent=`(${quiz.idx+1}/${quiz.questions.length}) ${formatMarked(cur.prompt)}`;

  if(cur.kind==='text'){
    $('#inputBox').classList.remove('hidden');
    const submit=()=>{
      const ok = normEn($('#textAnswer').value)===normEn(cur.answer);
      if(ok){ quiz.score++; showFb(true,'✅ 正確'); setTimeout(nextQ, AUTO_NEXT_OK_MS); }
      else { currentWrong += 1; showFb(false,'❌ 正確答案：'+cur.answer); $('#ackRow').classList.remove('hidden'); }
    };
    $('#btnSubmitText').onclick=submit;
    $('#textAnswer').onkeydown=(ev)=>{ if(ev.key==='Enter'){ ev.preventDefault(); submit(); } };
    $('#textAnswer').focus();
    return;
  }

  if(cur.kind==='mistake'){
    const box=$('#options');
    const choices=cur.choices; // plain
    for(const ch of choices){
      const b=document.createElement('button'); b.className='opt'; b.textContent=ch;
      b.onclick=()=>{
        $$('.opt').forEach(x=>x.disabled=true);
        const ok = ch===cur.wrong;
        if(ok){ quiz.score++; showFb(true,'○ 選擇正確　正確答案：'+cur.correction); setTimeout(nextQ, AUTO_NEXT_OK_MS); }
        else { currentWrong += 1; showFb(false,'╳ 選擇錯誤　正確選擇【'+cur.wrong+'】　正確答案：'+cur.correction); $('#ackRow').classList.remove('hidden'); }
      };
      box.appendChild(b);
    }
    return;
  }

  // mc
  const box=$('#options');
  for(const opt of cur.options){
    const b=document.createElement('button'); b.className='opt'; b.textContent=opt;
    b.onclick=()=>{
      $$('.opt').forEach(x=>x.disabled=true);
      const ok = opt===cur.answer;
      if(ok){ quiz.score++; showFb(true,'✅ 正確'); setTimeout(nextQ, AUTO_NEXT_OK_MS); }
      else { currentWrong += 1; showFb(false,'❌ 正確答案：'+cur.answer); $('#ackRow').classList.remove('hidden'); }
    };
    box.appendChild(b);
  }
}

async function explainCurrent(){
  const cur=quiz.questions[quiz.idx];
  const answer = cur.kind==='mistake'?cur.correction:(cur.answer||'');
  const opts = cur.kind==='mistake' ? (cur.choices||[]).join(' / ') : (cur.options||[]).join(' / ');
  try{
    showLoading('正在生成解釋請稍後');
    const out=await gjson('你是國中英文老師。請用繁體中文、條列式（3~5點），50~100字解釋此題。只回 JSON：{ "points":["...",...] }',
      `題目：${cur.prompt}\n選項：${opts}\n正確答案：${answer}`);
    hideLoading();
    const pts=Array.isArray(out.points)?out.points:['看句型與主詞一致','把答案代回去是否通順','注意介系詞/時態用法'];
    openExplain(pts);
  }catch(e){
    hideLoading();
    openExplain(['先找句型（be/do/does/時態）。','看主詞單複數是否一致。','把答案代回去確認通順。']);
  }
}

// Builders with settings scope
function selectedScopeSet(){
  const s=new Set();
  for(const it of scopeKeys){ if(settings.scope[it.key]!==false) s.add(it.key); }
  return s;
}
function filterVocabByScope(){
  const set=selectedScopeSet();
  return data.vocab.filter(v=>set.has(`${v.book||''} ${v.unit||''}`.trim()));
}
function filterGrammarByScope(){
  const set=selectedScopeSet();
  return data.grammar.filter(g=>set.has(`${g.book||''} ${g.unit||''}`.trim()));
}

function buildVocabQuiz(){
  const pool=filterVocabByScope();
  const n=settings.vocabN;
  if(pool.length<Math.min(10,n)) throw new Error('單字庫太少或範圍過窄');
  const pick=shuffle(pool).slice(0,n);
  const qs=[];
  const inputN=Math.max(0, Math.min(3, Math.floor(n*0.3)));
  for(let i=0;i<n;i++){
    const v=pick[i];
    if(i<inputN){ qs.push({kind:'text', prompt:`中翻英：${v.def}`, answer:v.word}); }
    else if(i<inputN+Math.max(1,Math.floor(n*0.2))){
      const cand=[v.word,...shuffle(pool).filter(x=>x.word!==v.word).slice(0,6).map(x=>x.word)];
      const fixed=normalizeOptions4(cand, v.word);
      qs.push({kind:'mc', prompt:`中翻英：${v.def}`, options:fixed.options, answer:fixed.answer});
    }else{
      const cand=[v.def,...shuffle(pool).filter(x=>x.def!==v.def).slice(0,6).map(x=>x.def)];
      const fixed=normalizeOptions4(cand, v.def);
      qs.push({kind:'mc', prompt:`英翻中：${v.word}`, options:fixed.options, answer:fixed.answer});
    }
  }
  quiz={type:'vocab', meta:'單字測驗', idx:0, score:0, questions:qs};
}

async function startVocabQuiz(){
  try{ buildVocabQuiz(); showOnly('viewQuiz'); renderQ(); }
  catch(e){ showError(String(e.message||e)); }
}

async function startGrammarQuiz(){
  const n=settings.grammarN;
  try{
    showLoading('正在生成題目請稍後');
    const out=await gjson(`你是國中英文出題老師。${difficultyGuide()}
請「只依照下列文法點」出 ${n} 題四選一（options 剛好 4 個）。
只回 JSON：{ "questions":[ { "prompt":"...", "options":[...], "answer":"..." } ] }
規則：
- 題目文法必須落在下列清單
- prompt 不要以 Choose the 開頭
- answer 必須等於 options 其中之一（不可用 A/B/C/D）
- 句子自然通順，不要童書句
- 至少 40% 題目結合兩個概念（例如時態+連接詞 / 助動詞+頻率副詞）
文法清單：
${grammarList}`,
      '題目範圍：國七文法（be/do/does/介系詞/時態/there is/are/祈使句）。');
    const raw=(out.questions||[]).slice(0,n);
    const qs=raw.map((x,i)=>{const fixed=normalizeOptions4(x.options,x.answer); return {kind:'mc', prompt:x.prompt||`題目 ${i+1}`, options:fixed.options, answer:fixed.answer};});
    hideLoading();
    quiz={type:'grammar', meta:'文法測驗', idx:0, score:0, questions:qs};
    showOnly('viewQuiz'); renderQ();
  }catch(e){ hideLoading(); showError('文法出題失敗：'+(e.message||String(e))); }
}

async function startReadingQuiz(){
  const words=settings.readingWords; const qn=settings.readingQn;
  try{
    showLoading('正在生成題目請稍後');
    const out=await gjson(`你是國中英文閱讀出題老師。${difficultyGuide()}
請產出一篇約 ${words} 字短文，並產出 ${qn} 題四選一（options 剛好 4 個）。
只回 JSON：{ "passage":"...", "questions":[ { "prompt":"...", "options":[...], "answer":"..." } ] }

文章要求：
- 以「通順、有意義、像真正文章」為最高優先
- 內容詞彙至少 50% 來自單字清單（允許基本功能字不在清單內）
- 文法盡量使用文法清單中的至少 3 個文法點（不要硬塞到不通順）
- 每句平均 12–18 字，避免過短句連發

題目要求：
- 題型包含：主旨、細節、推論、字義（題數>4可再加）
- answer 必須等於 options 其中之一（不可用 A/B/C/D）

單字清單：
${pickWordListForAI(60).join(", ")}

文法清單：
${grammarList}`, '國七程度。');
    const passage=out.passage||'';
    const raw=(out.questions||[]).slice(0,qn);
    const qs=raw.map((x,i)=>{const fixed=normalizeOptions4(x.options,x.answer); return {kind:'mc', prompt:x.prompt||`題目 ${i+1}`, options:fixed.options, answer:fixed.answer};});
    hideLoading();
    quiz={type:'reading', meta:'閱讀測驗', idx:0, score:0, questions:qs, passage};
    showOnly('viewQuiz'); renderQ();
  }catch(e){ hideLoading(); showError('閱讀出題失敗：'+(e.message||String(e))); }
}

async function startSpellingQuiz(){
  const n=settings.spellingN;
  try{
    showLoading('正在生成題目請稍後');
    const out=await gjson(`你是國中英文老師。請產出 ${n} 題拼字填空。只回 JSON：{ "questions":[ { "prompt":"...", "answer":"..." } ] }。規則：prompt 句子挖空用 ______；answer 為正確拼字。`, '國七程度。');
    const raw=(out.questions||[]).slice(0,n);
    const qs=raw.map((x,i)=>{const ans=(x.answer||'').trim(); let prompt=x.prompt||`拼字題 ${i+1}`; if(prompt.includes('______')&&ans){const first=ans[0], last=ans[ans.length-1]; const hint=spellingHint(ans); const seg=new RegExp(first+'\\s*______\\s*'+last); if(seg.test(prompt)) prompt=prompt.replace(seg,hint); else prompt=prompt.replace('______',hint);} return {kind:'text', prompt, answer:ans};});
    hideLoading();
    quiz={type:'spelling', meta:'拼字填空', idx:0, score:0, questions:qs};
    showOnly('viewQuiz'); renderQ();
  }catch(e){ hideLoading(); showError('拼字填空出題失敗：'+(e.message||String(e))); }
}

async function startFindMistakeQuiz(){
  const n=settings.mistakeN;
  try{
    showLoading('正在生成題目請稍後');
    const out=await gjson(`你是國中英文老師。${difficultyGuide()}
請「只依照下列文法點」出 ${n} 題「選出錯誤」。
只回 JSON：
{ "questions":[ { "prompt":"...", "choices":["on","time","...","..."], "wrong":"on", "correction":"in" } ] }
規則：
- choices 必須剛好 4 個，且為純文字（不要含【】）
- prompt 必須包含 choices 的四個字，並在句子中用【】標示四個字（都要標）
- wrong 必須等於 choices 其中之一（錯誤那個）
- correction 是正確用法（單字或片語），語意需通順
- prompt 不要包含奇怪符號
文法清單：
${grammarList}`, '國七程度，介系詞/時態/主詞動詞一致/冠詞。');
    const raw=(out.questions||[]).slice(0,n);
    const qs=raw.map((x,i)=>{
      const choices=Array.isArray(x.choices)?x.choices.map(s=>String(s).trim()).filter(Boolean).slice(0,4):[];
      const wrong=String(x.wrong||'').trim();
      // strip brackets in prompt then re-wrap all candidates
      let prompt=(x.prompt||`題目 ${i+1}`).replace(/【/g,'').replace(/】/g,'');
      for(const t of choices){
        const reTok=new RegExp('\\b'+t.replace(/[.*+?^${}()|[\\]\\\\]/g,'\\\\$&')+'\\b','g');
        prompt=prompt.replace(reTok,'【'+t+'】');
      }
      return {kind:'mistake', prompt, choices, wrong, correction:(x.correction||'').trim()};
    });
    hideLoading();
    quiz={type:'mistake', meta:'選出錯誤', idx:0, score:0, questions:qs};
    showOnly('viewQuiz'); renderQ();
  }catch(e){ hideLoading(); showError('選出錯誤出題失敗：'+(e.message||String(e))); }
}

async function startClozeQuiz(){
  const words=settings.clozeWords; const qn=settings.clozeQn;
  try{
    showLoading('正在生成題目請稍後');
    const out=await gjson(`你是國中英文老師。${difficultyGuide()}
請產出約 ${words} 字克漏字短文 + ${qn} 題四選一（options 剛好 4 個）。
只回 JSON：{ "passage":"...", "questions":[ { "prompt":"(1) ...", "options":[...], "answer":"..." } ] }

短文要求：
- 文章務必通順、有意義
- 內容詞彙至少 50% 來自單字清單（允許基本功能字）
- 文法盡量使用文法清單中的至少 3 個文法點
- 空格格式必須是 ___(1)___ 到 ___(${qn})___（要有底線）

題目要求：
- options 必須剛好 4 個
- answer 必須等於 options 其中之一（不可用 A/B/C/D）
- 空格考點分散：介系詞/時態/連接詞/代名詞/可數不可數等

單字清單：
${pickWordListForAI(60).join(", ")}

文法清單：
${grammarList}`, '國七程度。');
    let passage=clozeNormalizePassage(out.passage||'');
    const raw=(out.questions||[]).slice(0,qn);
    const qs=raw.map((x,i)=>{const fixed=normalizeOptions4(x.options,x.answer); return {kind:'mc', prompt:x.prompt||`第${i+1}題`, options:fixed.options, answer:fixed.answer};});
    hideLoading();
    quiz={type:'cloze', meta:'克漏字', idx:0, score:0, questions:qs, passage};
    showOnly('viewQuiz'); renderQ();
  }catch(e){ hideLoading(); showError('克漏字出題失敗：'+(e.message||String(e))); }
}

// Init settings UI

function ensureDifficultyUI(){
  // Create difficulty select inside settings view if missing.
  const host = document.getElementById('viewSettings') || document.getElementById('viewParent') || document.getElementById('viewSettings') || document.body;
  if(!host) return;
  if(document.getElementById('setDifficulty')) return;

  // Find the settings card that contains btnSaveSettings
  const saveBtn = document.getElementById('btnSaveSettings');
  const container = saveBtn ? (saveBtn.closest('.item') || saveBtn.parentElement) : host;

  const row = document.createElement('div');
  row.className = 'row';
  row.style.marginTop = '10px';

  const label = document.createElement('label');
  label.className = 'small';
  label.textContent = '難度 ';
  const sel = document.createElement('select');
  sel.id = 'setDifficulty';
  sel.style.width = '120px';
  ['基礎','標準','挑戰','會考'].forEach(v=>{
    const op=document.createElement('option');
    op.value=v; op.textContent=v;
    sel.appendChild(op);
  });
  label.appendChild(sel);
  row.appendChild(label);

  // Insert near top of the item (before save button if possible)
  if(saveBtn && container){
    const div = document.createElement('div');
    div.className='divider';
    // Try to insert before the centerRow containing save button
    const center = saveBtn.parentElement;
    if(center && center.parentElement){
      center.parentElement.insertBefore(row, center);
    }else{
      container.appendChild(row);
    }
  }else{
    container.appendChild(row);
  }
}

function getDifficulty(){
  return settings.difficulty || '標準';
}
function difficultyGuide(){
  const d=getDifficulty();
  if(d==='基礎') return '難度：基礎（國七程度；句子較短；選項差異較大）';
  if(d==='標準') return '難度：標準（國八程度；句子自然；至少部分選項具混淆性）';
  if(d==='挑戰') return '難度：挑戰（國八後段~國九；句子較長；干擾選項更像）';
  if(d==='會考') return '難度：會考（偏會考/段考；情境更完整；混淆選項比例更高）';
  return '難度：標準（國八程度）';
}

function syncSettingsToUI(){
  ensureDifficultyUI();

  ensureScopeDefaults();
  renderScopeUI();
  $('#setVocabN').value=String(settings.vocabN);
  $('#setGrammarN').value=String(settings.grammarN);
  $('#setSpellingN').value=String(settings.spellingN);
  $('#setMistakeN').value=String(settings.mistakeN);
  $('#setReadingWords').value=String(settings.readingWords);
  $('#setReadingQn').value=String(settings.readingQn);
  $('#setClozeWords').value=String(settings.clozeWords);
  $('#setClozeQn').value=String(settings.clozeQn);
  if(document.getElementById('setDifficulty')) document.getElementById('setDifficulty').value = String(settings.difficulty||'標準');
}

function wire(){
  $$('.navBtn').forEach(b=>b.addEventListener('click',()=>setView(b.dataset.view)));
  $('#vocabSearch').addEventListener('input', renderVocab);
  $('#vocabFilterUnit').addEventListener('change', renderVocab);
  $('#grammarSearch').addEventListener('input', renderGrammar);
  $('#grammarFilterUnit').addEventListener('change', renderGrammar);

  $('#startVocabQuiz').onclick=startVocabQuiz;
  $('#startGrammarQuiz').onclick=startGrammarQuiz;
  $('#startReadingQuiz').onclick=startReadingQuiz;
  $('#startSpellingQuiz').onclick=startSpellingQuiz;
  $('#startFindMistakeQuiz').onclick=startFindMistakeQuiz;
  $('#startClozeQuiz').onclick=startClozeQuiz;

  $('#btnAcknowledge').onclick=nextQ;
  $('#btnExplain').onclick=explainCurrent;
  $('#btnExplainOk').onclick=closeExplain;
  $('#btnResultRetry').onclick=()=>setView('aiquiz');
  $('#btnErrClose').onclick=()=>setView('aiquiz');

  $('#btnSaveSettings').onclick=()=>{ saveSettingsFromUI(); alert('已儲存'); };
}


async function testAIConnection(){
  try{
    // very small request to confirm proxy works
    await gjson('Return JSON: {"ok": true}', 'Return JSON: {"ok": true}');
    badge(true,'AI：已連線');
  }catch(e){
    badge(false,'AI：尚未連線');
  pingProxy();
  pingProxy();
  }
}

async function boot(){
  loadData();
  scopeKeys = buildScopeKeys();
  ensureScopeDefaults();
  syncSettingsToUI();
  wire();
  // prime unit selects
  renderVocab();
  renderGrammar();
  badge(false,'AI：尚未連線');
setView('aiquiz');
}

window.addEventListener('error',(ev)=>{ console.error('Front-end error:', ev?.error||ev?.message); });

document.addEventListener('DOMContentLoaded', boot);
})();
