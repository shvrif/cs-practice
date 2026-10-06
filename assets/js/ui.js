/* Question rendering, answer binding, feedback, anti-paste and small UI helpers */
(function () {
  'use strict';
  const CS = window.CS; const ui = (CS.ui = {});
  const E = CS.esc, F = CS.fmt;
  const TYPE_NAME = { mcq: 'Multiple choice', tf: 'True / False', cloze: 'Fill in the blanks', match: 'Matching', short: 'Short answer', long: 'Extended answer' };
  ui.TYPE_NAME = TYPE_NAME;
  const LET = 'ABCDEFGH';

  /* ---------- Toast / modal ---------- */
  let toastT;
  ui.toast = function (msg, ms) {
    let t = document.querySelector('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
    t.textContent = msg; t.classList.remove('hidden');
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.add('hidden'), ms || 2600);
  };
  ui.modal = function (html, onMount) {
    const back = document.createElement('div');
    back.className = 'modal-back';
    back.innerHTML = `<div class="modal" role="dialog" aria-modal="true">${html}</div>`;
    document.body.appendChild(back);
    const close = () => back.remove();
    back.addEventListener('click', e => { if (e.target === back) close(); });
    if (onMount) onMount(back.querySelector('.modal'), close);
    const f = back.querySelector('input,select,textarea,button'); if (f) f.focus();
    return close;
  };
  ui.xpPop = function (n) {
    if (!n) return;
    const d = document.createElement('div');
    d.className = 'xp-pop ' + (n > 0 ? 'plus' : 'minus');
    d.textContent = (n > 0 ? '+' : '') + n + ' XP';
    document.body.appendChild(d); setTimeout(() => d.remove(), 1300);
  };

  /* ---------- Anti-paste (typed answers must be the student's own) ---------- */
  ui.pasteAttempts = 0;
  ui.onPasteAttempt = null;
  function blocked(e) {
    const el = e.target;
    if (!el || !el.closest || !el.closest('[data-nopaste]')) return false;
    return true;
  }
  function stop(e, why) {
    e.preventDefault(); e.stopPropagation();
    ui.pasteAttempts++;
    if (ui.onPasteAttempt) ui.onPasteAttempt(why);
    ui.toast('Pasting is turned off – type your answer in your own words.');
  }
  document.addEventListener('paste', e => { if (blocked(e)) stop(e, 'paste'); }, true);
  document.addEventListener('drop', e => { if (blocked(e)) stop(e, 'drop'); }, true);
  document.addEventListener('beforeinput', e => {
    if (blocked(e) && /insertFromPaste|insertFromDrop|insertFromYank/.test(e.inputType || '')) stop(e, e.inputType);
  }, true);
  // Stop copying question text (reduces copy → Google)
  document.addEventListener('copy', e => {
    const sel = window.getSelection && window.getSelection();
    const node = sel && sel.anchorNode && (sel.anchorNode.nodeType === 1 ? sel.anchorNode : sel.anchorNode.parentElement);
    if (node && node.closest && node.closest('.noselect')) { e.preventDefault(); ui.toast('Copying questions is turned off.'); }
  }, true);
  document.addEventListener('contextmenu', e => { if (e.target.closest && (e.target.closest('.noselect') || e.target.closest('[data-nopaste]'))) e.preventDefault(); }, true);

  /* ---------- Render a question ---------- */
  // opts: {num, review:{score,max,detail}, ans, hideMarks, printMode}
  ui.renderQ = function (q, opts) {
    opts = opts || {};
    const ans = opts.ans || {};
    const rev = opts.review;
    const dis = rev ? 'disabled' : '';
    let h = `<div class="q-card" data-qid="${E(q.id)}">
      <div class="q-meta">
        ${opts.num != null ? `<span class="q-num">Q${opts.num}</span>` : ''}
        <span class="q-type">${TYPE_NAME[q.type]}</span>
        ${q.unitTitle ? `<span class="q-type">${E(q.unitTitle)}</span>` : ''}
        <span class="q-marks">${rev ? `<span style="color:${rev.score === rev.max ? 'var(--good)' : rev.score ? 'var(--warn)' : 'var(--bad)'}">${rev.score}</span> / ` : ''}${q.marks} mark${q.marks > 1 ? 's' : ''}</span>
      </div>`;
    const stem = q.type === 'tf' ? `<div class="q-stem noselect"><span class="muted small">True or false?</span><br>${ui.stem(q.q, q.year)}</div>`
      : q.type === 'cloze' ? `<div class="q-stem noselect"><span class="hl-cmd">Complete</span> the passage using words from the word bank.</div>`
      : q.type === 'match' ? `<div class="q-stem noselect"><span class="hl-cmd">Drag</span> each definition onto the <span class="kw">key term</span> it matches.</div>`
      : `<div class="q-stem noselect">${ui.stem(q.q, q.year)}</div>`;
    h += stem;
    if (q.code) h += `<pre class="code noselect">${E(q.code)}</pre>`;

    if (q.type === 'mcq') {
      h += `<div class="opts" role="radiogroup">` + q.options.map((o, i) => {
        let cls = ans.choice === i ? 'sel' : '';
        if (rev) cls = i === q.answer ? 'right' : ans.choice === i ? 'wrong' : '';
        return `<button type="button" class="opt ${cls}" data-i="${i}" role="radio" aria-checked="${ans.choice === i}" ${dis}><span class="letter">${LET[i]}</span><span class="noselect">${F(o)}</span></button>`;
      }).join('') + `</div>`;
      if (q.justify) h += whyBox(q, ans, rev);
    }
    if (q.type === 'tf') {
      h += `<div class="tf-row" role="radiogroup">` + [true, false].map(v => {
        let cls = ans.choice === v ? 'sel' : '';
        if (rev) cls = v === q.answer ? 'right' : ans.choice === v ? 'wrong' : '';
        return `<button type="button" class="opt ${cls}" data-tf="${v}" role="radio" aria-checked="${ans.choice === v}" ${dis}>${v ? '✔ True' : '✘ False'}</button>`;
      }).join('') + `</div>`;
      if (q.justify) h += whyBox(q, ans, rev);
    }
    if (q.type === 'cloze') {
      h += `<div class="wordbank noselect" aria-label="Word bank">${q.bank.map(w => { const k = ui.arKey(w); return `<span${k ? ` class="wb-ar" data-ar="${k}"` : ''}>${E(w)}</span>`; }).join('')}</div>`;
      h += `<div class="cloze noselect">` + q.parts.map(p => {
        if (typeof p === 'string') return ui.terms(p, q.year);
        const v = (ans.fills || [])[p.b] || '';
        let cls = '';
        if (rev) cls = rev.detail.got[p.b] ? 'right' : 'wrong';
        const fix = rev && !rev.detail.got[p.b] ? `<span class="fix">${E(q.blanks[p.b].word)}</span>` : '';
        return `<input type="text" data-b="${p.b}" data-nopaste value="${E(v)}" class="${cls}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Blank ${p.b + 1}" ${dis}>${fix}`;
      }).join('') + `</div>`;
    }
    if (q.type === 'match') h += `<div data-matchwrap>${matchHTML(q, ans, rev, null)}</div>`;
    if (q.type === 'short' || q.type === 'long') {
      const v = ans.text || '';
      const oneLine = q.exact && !/\n/.test(q.exact[0]);
      h += oneLine
        ? `<input type="text" data-text data-nopaste value="${E(v)}" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type your answer" aria-label="Your answer" ${dis}>`
        : `<textarea data-text data-nopaste class="${q.type === 'long' ? 'long' : ''}" spellcheck="false" autocomplete="off" placeholder="${q.type === 'long' ? 'Write a detailed answer in full sentences. Explain your points and give examples.' : 'Answer in full sentences.'}" aria-label="Your answer" ${dis}>${E(v)}</textarea>`;
      if (!rev) h += `<div class="row" style="justify-content:space-between"><span class="nopaste-hint">⌨️ Pasting is turned off – type your own answer.</span>${!q.exact ? `<span class="wc" data-wc>${wordCount(v)} words${q.min ? ' · aim for ' + q.min + '+' : ''}</span>` : ''}</div>`;
    }
    if (rev) h += ui.feedback(q, ans, rev);
    return h + `</div>`;
  };

  function whyBox(q, ans, rev) {
    return `<div class="why"><label>✍️ ${E(q.justify.prompt)} <span class="muted small">(+1 mark)</span></label>
      <textarea data-why data-nopaste spellcheck="false" placeholder="Explain in your own words…" ${rev ? 'disabled' : ''}>${E(ans.why || '')}</textarea></div>`;
  }
  const wordCount = s => (String(s || '').match(/[A-Za-z0-9']+/g) || []).length;

  /* ---------- Keyword highlighting in question stems ---------- */
  // Command words (Explain, Describe…) → accent; emphasis CAPITALS (NOT, BEST…) → pink; key vocabulary → highlighter
  const COMMAND = /\b(Explain|Describe|Compare|State|Name|Give|List|Identify|Calculate|Convert|Write|Define|Suggest|Discuss|Evaluate|Recommend|Complete|Find|Put|Design|Draw|Outline|Justify|Choose|Decide|Add)\b/;
  const ACRONYMS = new Set('CPU RAM ROM SSD HDD USB GHZ BIOS GUI CLI WIMP POST HTML HTTP HTTPS FTP TCP VOIP IOT ISP NIC LAN WAN GPS ASCII SMART BCC IDE PDF IDLE FDE ALU QAR SUM MIN MAX AVERAGE WWW DNS URL MS1 MS2 EOS'.split(' '));
  const termCache = {};
  function termRegex(year) {
    if (termCache[year]) return termCache[year];
    const terms = new Set();
    CS.units.filter(u => !year || u.year === year).forEach(u => u.vocab.forEach(v => {
      const t = v[0].replace(/\s*\([^)]+\)\s*/g, ' ').trim();
      if (t.length >= 3 || /^[A-Z]{2}$/.test(t)) terms.add(t);
    }));
    Object.keys(CS.AR || {}).forEach(k => { if (k.length >= 3 && !/[()]/.test(k)) terms.add(k); });
    const list = [...terms].sort((a, b) => b.length - a.length).map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    return (termCache[year] = list.length ? new RegExp('(^|[^A-Za-z0-9])(' + list.join('|') + ')(?=$|[^A-Za-z0-9])', 'gi') : null);
  }
  // Apply fn to plain-text pieces only (skips tags, <code> and existing highlights)
  function mapText(html, fn) {
    let skip = 0;
    return html.split(/(<[^>]+>)/).map(part => {
      if (part[0] === '<') {
        if (/^<(code|strong|span)\b/i.test(part)) skip++;
        else if (/^<\/(code|strong|span)>/i.test(part)) skip = Math.max(0, skip - 1);
        return part;
      }
      return skip ? part : fn(part);
    }).join('');
  }
  ui.stem = function (text, year) {
    let html = CS.fmt(text);
    let cmdDone = false;
    html = mapText(html, t => t
      .replace(new RegExp(COMMAND.source, 'g'), m => (cmdDone ? m : ((cmdDone = true), `<span class="hl-cmd">${m}</span>`)))
      .replace(/\b([A-Z][A-Z-]{2,})\b/g, m => (ACRONYMS.has(m) ? m : `<span class="hl-caps">${m}</span>`)));
    const re = termRegex(year);
    if (re) {
      const seen = new Set(); let n = 0;
      html = mapText(html, t => t.replace(re, (m, pre, term) => {
        const k = term.toLowerCase();
        const ar = ui.arKey(k) ? ` data-ar="${ui.arKey(k)}"` : '';
        if (seen.has(k) || n >= 3) return ar ? `${pre}<span class="kwl"${ar}>${term}</span>` : m;
        seen.add(k); n++;
        return `${pre}<span class="kw"${ar}>${term}</span>`;
      }));
    }
    return html;
  };

  // Mark glossary words in plain text so EAL students can tap them for Arabic
  ui.terms = function (text, year) {
    let html = CS.fmt(text);
    const re = termRegex(year);
    if (!re || !CS.AR) return html;
    return mapText(html, t => t.replace(re, (m, pre, term) => {
      const k = ui.arKey(term); return k ? `${pre}<span class="kwl" data-ar="${k}">${term}</span>` : m;
    }));
  };

  /* ---------- Arabic glossary (EAL support) ---------- */
  const defIndex = {};
  ui.arKey = function (term) {
    if (!CS.AR) return null;
    const k = String(term).toLowerCase().replace(/\s*\([^)]+\)\s*/g, ' ').trim();
    if (CS.AR[k]) return k;
    if (k.endsWith('s') && CS.AR[k.slice(0, -1)]) return k.slice(0, -1);
    return null;
  };
  ui.englishDef = function (k) {
    if (!Object.keys(defIndex).length) CS.units.forEach(u => u.vocab.forEach(v => { defIndex[v[0].toLowerCase().replace(/\s*\([^)]+\)\s*/g, ' ').trim()] = v[1]; }));
    return defIndex[k] || '';
  };
  ui.arOn = () => CS.load('arabic', true) !== false;
  ui.onArabicLookup = null;
  function speak(text, lang) {
    try {
      if (!window.speechSynthesis) return ui.toast('Listening is not available on this device.');
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text); u.lang = lang; u.rate = 0.85;
      const v = speechSynthesis.getVoices().find(x => x.lang && x.lang.toLowerCase().startsWith(lang.slice(0, 2)));
      if (v) u.voice = v;
      speechSynthesis.speak(u);
    } catch (e) { /* ignore */ }
  }
  function closeAr() { document.querySelectorAll('.ar-pop').forEach(x => x.remove()); }
  function openAr(el) {
    closeAr();
    const k = el.dataset.ar, entry = CS.AR[k]; if (!entry) return;
    const word = el.textContent.trim();
    const def = ui.englishDef(k);
    const pop = document.createElement('div');
    pop.className = 'ar-pop'; pop.setAttribute('role', 'dialog'); pop.setAttribute('aria-label', 'Arabic translation of ' + word);
    pop.innerHTML = `<button class="ar-x" aria-label="Close">✕</button>
      <div class="ar-en">${E(word)}</div>
      <div class="ar-term" dir="rtl" lang="ar">${E(entry[0])}</div>
      <div class="ar-def" dir="rtl" lang="ar">${E(entry[1])}</div>
      ${def ? `<div class="ar-endef">${E(def)}</div>` : ''}
      <div class="ar-actions"><button class="btn sm" data-say="en">🔊 English</button><button class="btn sm" data-say="ar">🔊 عربي</button></div>`;
    document.body.appendChild(pop);
    const r = el.getBoundingClientRect(), w = Math.min(320, window.innerWidth - 24);
    pop.style.width = w + 'px';
    let left = Math.max(12, Math.min(r.left + r.width / 2 - w / 2, window.innerWidth - w - 12));
    let top = r.bottom + 8;
    if (top + pop.offsetHeight > window.innerHeight - 8) top = Math.max(8, r.top - pop.offsetHeight - 8);
    pop.style.left = left + 'px'; pop.style.top = top + 'px';
    pop.querySelector('.ar-x').onclick = closeAr;
    pop.querySelector('[data-say="en"]').onclick = () => speak(word, 'en-GB');
    pop.querySelector('[data-say="ar"]').onclick = () => speak(entry[0], 'ar-SA');
    pop.querySelector('.ar-x').focus({ preventScroll: true });
    openAr.y = window.scrollY;
    if (ui.onArabicLookup) ui.onArabicLookup(k);
  }
  // Tap a keyword → Arabic. Capture phase so it doesn't also trigger the question behind it.
  document.addEventListener('click', e => {
    const t = e.target.closest && e.target.closest('[data-ar]');
    if (t && ui.arOn() && !e.target.closest('.ar-pop')) { e.preventDefault(); e.stopPropagation(); openAr(t); return; }
    if (!e.target.closest || !e.target.closest('.ar-pop')) closeAr();
  }, true);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeAr();
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches && e.target.matches('[data-ar]') && ui.arOn()) { e.preventDefault(); openAr(e.target); }
  });
  window.addEventListener('scroll', () => { if (Math.abs(window.scrollY - (openAr.y || 0)) > 80) closeAr(); }, { passive: true });

  /* ---------- Drag-and-drop matching ---------- */
  function matchHTML(q, ans, rev, picked) {
    const map = ans.map || [];
    const placed = new Set(map.filter(Boolean));
    const text = l => (q.defs.find(d => d.letter === l) || {}).text || '';
    const card = l => `<div class="mcard noselect${picked === l ? ' picked' : ''}" data-letter="${l}"${rev ? '' : ' tabindex="0" role="button" aria-label="Definition: ' + E(text(l)) + '"'}><span class="grip" aria-hidden="true">⠿</span><span>${E(text(l))}</span></div>`;
    let h = `<div class="dnd${rev ? ' done' : ''}">`;
    if (!rev) {
      const left = q.defs.filter(d => !placed.has(d.letter));
      h += `<div class="dnd-pool" data-pool><div class="dnd-label">📦 Definitions – drag each one to a term${left.length ? ` <span class="muted">(${left.length} left)</span>` : ''}</div>${left.map(d => card(d.letter)).join('') || '<div class="dnd-ph">All placed! ✔ Drag a card back here to change it.</div>'}</div>`;
    }
    h += `<div class="dnd-rows">` + q.pairs.map((p, i) => {
      const l = map[i];
      const cls = rev ? (rev.detail.got[i] ? 'right' : 'wrong') : '';
      return `<div class="dnd-row ${cls}">
        <div class="dnd-term noselect">${ui.arKey(p.term) ? `<span class="kwl" data-ar="${ui.arKey(p.term)}">${E(p.term)}</span>` : E(p.term)}</div>
        <div class="dnd-slot${l ? ' filled' : ''}" data-slot="${i}"${rev ? '' : ' tabindex="0" role="button" aria-label="Drop zone for ' + E(p.term) + '"'}>${l ? card(l) : '<span class="dnd-ph">Drop here</span>'}</div>
        ${rev && !rev.detail.got[i] ? `<div class="dnd-fix">✓ ${E(text(p.letter))}</div>` : ''}
      </div>`;
    }).join('') + `</div></div>`;
    return h;
  }

  function bindMatch(card, q, ans, onChange) {
    const wrap = card.querySelector('[data-matchwrap]');
    if (!wrap) return;
    let picked = null, drag = null;
    const redraw = () => { document.querySelectorAll('.mcard.ghost').forEach(g => g.remove()); wrap.innerHTML = matchHTML(q, ans, null, picked); };
    const place = (letter, slot) => {
      ans.map = ans.map || [];
      const from = ans.map.indexOf(letter);
      if (slot == null) { if (from > -1) ans.map[from] = ''; }
      else {
        const existing = ans.map[slot] || '';
        ans.map[slot] = letter;
        if (from > -1 && from !== slot) ans.map[from] = existing;   // swap
      }
      picked = null; redraw();
      onChange && onChange(ans, { kind: 'match' });
    };
    const targetAt = (x, y) => {
      const el = document.elementFromPoint(x, y);
      const t = el && el.closest('[data-slot],[data-pool]');
      return t && wrap.contains(t) ? t : null;
    };
    const move = e => {
      if (!drag) return;
      if (e.pointerType === 'mouse' && e.buttons === 0 && e.isTrusted) return up(e);   // release was missed
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (!drag.ghost && Math.hypot(dx, dy) > 6) {
        drag.ghost = drag.el.cloneNode(true);
        drag.ghost.className = 'mcard ghost';
        drag.ghost.style.width = drag.el.offsetWidth + 'px';
        document.body.appendChild(drag.ghost);
        drag.el.classList.add('dragging');
      }
      if (drag.ghost) {
        e.preventDefault();
        drag.ghost.style.left = (e.clientX - drag.el.offsetWidth / 2) + 'px';
        drag.ghost.style.top = (e.clientY - 22) + 'px';
        wrap.querySelectorAll('.over').forEach(o => o.classList.remove('over'));
        const t = targetAt(e.clientX, e.clientY); if (t) t.classList.add('over');
      }
    };
    const up = e => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointercancel', up);
      window.removeEventListener('mouseup', up);
      if (!drag) return;
      const d = drag; drag = null;
      if (d.ghost) {
        d.ghost.remove();
        const t = e.type !== 'pointercancel' ? targetAt(e.clientX, e.clientY) : null;
        if (t) place(d.letter, t.dataset.slot != null ? +t.dataset.slot : null);
        else redraw();
      } else {
        picked = picked === d.letter ? null : d.letter;   // tap to pick, tap a slot to drop
        redraw();
      }
    };
    wrap.addEventListener('pointerdown', e => {
      const c = e.target.closest('.mcard'); if (!c || e.button > 0) return;
      e.preventDefault();   // stop native text/image dragging stealing the gesture
      drag = { el: c, letter: c.dataset.letter, x: e.clientX, y: e.clientY, ghost: null };
      window.addEventListener('pointermove', move, { passive: false });
      window.addEventListener('pointerup', up);
      window.addEventListener('pointercancel', up);
      window.addEventListener('mouseup', up);
    });
    wrap.addEventListener('click', e => {
      if (e.target.closest('.mcard')) return;
      const t = e.target.closest('[data-slot],[data-pool]');
      if (picked && t) place(picked, t.dataset.slot != null ? +t.dataset.slot : null);
    });
    wrap.addEventListener('keydown', e => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const c = e.target.closest('.mcard'), s = e.target.closest('[data-slot]');
      if (c && !(s && picked && picked !== c.dataset.letter)) { e.preventDefault(); picked = picked === c.dataset.letter ? null : c.dataset.letter; redraw(); wrap.querySelector(`.mcard[data-letter="${picked || c.dataset.letter}"]`)?.focus(); }
      else if (s && picked) { e.preventDefault(); const i = +s.dataset.slot; place(picked, i); wrap.querySelector(`[data-slot="${i}"]`)?.focus(); }
    });
  }

  /* ---------- Feedback after marking ---------- */
  ui.feedback = function (q, ans, r) {
    const cls = r.score === r.max ? 'good' : r.score > 0 ? 'part' : 'bad';
    const stamp = { good: 'ACCESS GRANTED', part: 'PARTIAL ACCESS', bad: 'ACCESS DENIED' }[cls];
    const msg = r.score === r.max ? 'Full marks!' : r.score > 0 ? `${r.score} out of ${r.max} – nearly there` : 'Not this time – check the answer below';
    const head = `<span class="stamp ${cls}">${stamp}</span> <span>${msg}</span>`;
    let body = '';
    if (q.type === 'mcq') {
      if (!r.detail.correct) body += `<div>Correct answer: <b>${LET[q.answer]}. ${F(q.options[q.answer])}</b></div>`;
      if (q.explain) body += `<div class="model">${F(q.explain)}</div>`;
    }
    if (q.type === 'tf') {
      body += `<div>This statement is <b>${q.answer ? 'TRUE' : 'FALSE'}</b>.</div>`;
      if (q.explain) body += `<div class="model">${F(q.explain)}</div>`;
    }
    if ((q.type === 'mcq' || q.type === 'tf') && q.justify) {
      const j = r.detail.why;
      body += `<div style="margin-top:8px"><b>Explanation mark:</b> ${r.detail.correct ? (j.score ? '✓ awarded' : 'not awarded') : 'only available with the correct answer'}</div>`;
      body += ptsList(q.justify.pts, j.detail.hits);
      (j.detail.notes || []).forEach(n => (body += `<div class="note">${E(n)}</div>`));
    }
    if (q.type === 'cloze') body += `<div>Correct words are shown in green next to any mistakes.</div>`;
    if (q.type === 'match') body += `<div>The correct definition is shown in green under any mistakes.</div>`;
    if (q.type === 'short' || q.type === 'long') {
      if (q.exact) {
        body += r.detail.correct ? '' : `<div>Correct answer: <b>${E(q.exact[0])}</b></div>`;
        if (q.model) body += `<div class="model"><b>Working:</b> ${F(q.model)}</div>`;
      } else {
        body += `<div class="small muted">Mark scheme – you get a mark for each point you made (up to ${q.marks}):</div>`;
        body += ptsList(q.pts, r.detail.hits);
        (r.detail.notes || []).forEach(n => (body += `<div class="note">⚠️ ${E(n)}</div>`));
        if (q.model) body += `<div class="model"><b>Model answer:</b> ${F(q.model)}</div>`;
      }
    }
    return `<div class="feedback ${cls}"><div class="fb-bit">${CS.art ? CS.art.bit(cls === 'good' ? 'cool' : cls === 'part' ? 'think' : 'sad', 54) : ''}</div><div class="fb-body"><h4>${head}</h4>${body}</div></div>`;
  };
  function ptsList(pts, hits) {
    return `<ul class="pts">${pts.map((p, i) => `<li class="${hits && hits[i] ? 'hit' : ''}">${F(p.d)}</li>`).join('')}</ul>`;
  }

  /* ---------- Bind answer inputs ---------- */
  // onChange(ans, meta) called whenever the answer changes
  ui.bindQ = function (root, q, ans, onChange) {
    const card = root.querySelector(`[data-qid="${CSS.escape(q.id)}"]`) || root;
    card.addEventListener('click', e => {
      const b = e.target.closest('.opt'); if (!b || b.disabled) return;
      if (q.type === 'mcq') ans.choice = +b.dataset.i;
      if (q.type === 'tf') ans.choice = b.dataset.tf === 'true';
      card.querySelectorAll('.opt').forEach(o => { const on = o === b; o.classList.toggle('sel', on); o.setAttribute('aria-checked', on); });
      onChange && onChange(ans, { kind: 'choice' });
    });
    card.addEventListener('input', e => {
      const t = e.target; let prevLen;
      if (t.matches('[data-why]')) { prevLen = (ans.why || '').length; ans.why = t.value; }
      else if (t.matches('[data-b]')) { ans.fills = ans.fills || []; prevLen = (ans.fills[+t.dataset.b] || '').length; ans.fills[+t.dataset.b] = t.value; }
      else if (t.matches('[data-text]')) {
        prevLen = (ans.text || '').length; ans.text = t.value;
        const wc = card.querySelector('[data-wc]');
        if (wc) wc.textContent = wordCount(t.value) + ' words' + (q.min ? ' · aim for ' + q.min + '+' : '');
      } else return;
      // Large jumps without typing (autofill, extensions, dictation tools) are recorded
      const jump = t.value.length - prevLen;
      onChange && onChange(ans, { kind: 'text', burst: jump > 40 });
    });
    if (q.type === 'match') bindMatch(card, q, ans, onChange);
  };

  ui.isAnswered = function (q, a) {
    if (!a) return false;
    switch (q.type) {
      case 'mcq': case 'tf': return a.choice !== undefined && a.choice !== null;
      case 'cloze': return (a.fills || []).filter(x => x && x.trim()).length === q.blanks.length;
      case 'match': return (a.map || []).filter(Boolean).length === q.pairs.length;
      default: return !!(a.text && a.text.trim());
    }
  };
  ui.isStarted = function (q, a) {
    if (!a) return false;
    switch (q.type) {
      case 'mcq': case 'tf': return a.choice !== undefined && a.choice !== null;
      case 'cloze': return (a.fills || []).some(x => x && x.trim());
      case 'match': return (a.map || []).some(Boolean);
      default: return !!(a.text && a.text.trim());
    }
  };
  ui.minSeconds = function (q) {
    const m = CS.config.minSeconds;
    let s = m[q.type] ?? 5;
    if (q.justify) s += m.justify;
    return Math.round(s);
  };
})();
