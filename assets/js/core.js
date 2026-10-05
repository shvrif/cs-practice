/* Mr Sharif's CS Practice — core engine
   Seeded randomness, question bank registry, marking and local storage. */
(function () {
  'use strict';

  const CS = (window.CS = window.CS || {});
  CS.units = CS.units || [];
  CS.gens = CS.gens || {};

  /* ---------- Unit registry ---------- */
  CS.unit = function (u) {
    u.key = 'y' + u.year + 'u' + u.num;
    ['mcq', 'tf', 'cloze', 'short', 'long', 'vocab', 'gen'].forEach(k => (u[k] = u[k] || []));
    CS.units.push(u);
  };
  CS.unitsFor = year => CS.units.filter(u => u.year === year).sort((a, b) => a.num - b.num);
  CS.getUnit = key => CS.units.find(u => u.key === key);

  /* ---------- Seeded RNG (mulberry32) ---------- */
  CS.hash = function (str) {
    let h = 1779033703 ^ str.length;
    for (let i = 0; i < str.length; i++) {
      h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
      h = (h << 13) | (h >>> 19);
    }
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return (h ^= h >>> 16) >>> 0;
  };
  CS.rng = function (seed) {
    let a = typeof seed === 'number' ? seed >>> 0 : CS.hash(String(seed));
    const r = function () {
      a |= 0; a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    r.int = (lo, hi) => lo + Math.floor(r() * (hi - lo + 1));
    r.pick = arr => arr[Math.floor(r() * arr.length)];
    r.shuffle = arr => {
      const a = arr.slice();
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(r() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };
    r.sample = (arr, n) => r.shuffle(arr).slice(0, n);
    return r;
  };
  CS.freshSeed = () => (Date.now() ^ Math.floor(Math.random() * 1e9)) >>> 0;

  /* ---------- Text helpers ---------- */
  CS.esc = s => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  // Tiny markup: `code` inline, **bold**
  CS.fmt = s => CS.esc(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');

  CS.norm = s => ' ' + String(s || '').toLowerCase()
    .replace(/[‘’]/g, "'").replace(/[“”]/g, '"')
    .replace(/[^a-z0-9.+#=<>!%$*/()'"_:\\×÷≥≤-]+/g, ' ')
    .replace(/\s+/g, ' ').trim() + ' ';

  const reCache = {};
  function termRe(term) {
    if (reCache[term]) return reCache[term];
    let t = term.trim().toLowerCase();
    const stem = t.endsWith('*') && !t.endsWith('\\*');   // trailing * = word stem; \* = literal star
    if (stem) t = t.slice(0, -1);
    t = t.replace(/(^|[^\\])\*/g, '$1\u0001');         // internal * = any letters, e.g. "share* file*"
    t = t.replace(/\\(.)/g, '$1');                         // "int\(" -> "int(
    // Letters/digits match literally; symbols allow optional spaces around them ("128+64" = "128 + 64")
    let body = '';
    const chars = t.replace(/\s+/g, ' ').split('');
    chars.forEach((ch, i) => {
      if (ch === ' ') {
        const a = chars[i - 1] || '', b = chars[i + 1] || '';
        body += /[a-z0-9]/.test(a) && /[a-z0-9]/.test(b) ? '\\s+' : '\\s*';
      } else if (ch === '\u0001') body += '[a-z0-9]*';
      else if (/[a-z0-9']/.test(ch)) body += ch;
      else body += '\\s*' + ch.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*';
    });
    body = body.replace(/(\\s\*)+/g, '\\s*');
    const startsWord = /^[a-z0-9]/.test(t), endsWord = /[a-z0-9]$/.test(t);
    let pre = startsWord ? '(?:^|[^a-z0-9])' : '';
    let post = stem ? '' : endsWord ? (/[a-z]$/.test(t) ? "(?:s|es|'s)?(?![a-z0-9])" : '(?![a-z0-9])') : '';
    return (reCache[term] = new RegExp(pre + body + post));
  }
  // An alternative may be "a & b" (all parts required); a part may be a group "{x|y}" (any one).
  // `need` = how many different alternatives must match (default 1).
  function partMatch(text, part) {
    part = part.trim();
    if (part[0] === '{' && part.endsWith('}')) return part.slice(1, -1).split('|').some(p => termRe(p).test(text));
    return termRe(part).test(text);
  }
  CS.matchAny = function (text, alts, need) {
    need = need || 1; let c = 0;
    for (const alt of alts) {
      if (alt.split('&').every(part => partMatch(text, part)) && ++c >= need) return true;
    }
    return false;
  };
  // Split "a|b|{c|d}" on top-level pipes only
  CS.splitAlts = function (s) {
    const out = []; let depth = 0, cur = '';
    for (const ch of s) {
      if (ch === '{') depth++;
      if (ch === '}') depth--;
      if (ch === '|' && depth === 0) { out.push(cur); cur = ''; } else cur += ch;
    }
    out.push(cur);
    return out.map(x => x.trim()).filter(Boolean);
  };

  /* ---------- Answer-quality checks (anti "click click click") ---------- */
  CS.quality = function (raw) {
    const words = String(raw || '').toLowerCase().match(/[a-z0-9']+/g) || [];
    const n = words.length;
    if (!n) return { words: 0, junk: 0, flag: 'blank' };
    let junk = 0;
    words.forEach(w => {
      if (/(.)\1\1/.test(w) || (w.length > 3 && !/[aeiouy0-9]/.test(w)) || w.length > 22) junk++;
    });
    const uniq = new Set(words).size;
    let flag = null;
    if (n >= 4 && junk / n > 0.35) flag = 'nonsense';
    else if (n > 10 && uniq / n < 0.4) flag = 'repeated';
    return { words: n, junk, flag };
  };

  /* ---------- Marking ---------- */
  // Returns {score, max, detail}
  CS.mark = function (q, ans) {
    const max = q.marks;
    switch (q.type) {
      case 'mcq': {
        let s = ans && ans.choice === q.answer ? 1 : 0;
        const d = { correct: !!s };
        if (q.justify) {
          const j = CS.markText({ pts: q.justify.pts, m: 1 }, ans && ans.why, 1, 3);
          d.why = j; if (s) s += j.score; // justification only counts with the right answer
        }
        return { score: s, max, detail: d };
      }
      case 'tf': {
        let s = ans && ans.choice === q.answer ? 1 : 0;
        const d = { correct: !!s };
        if (q.justify) {
          const j = CS.markText({ pts: q.justify.pts, m: 1 }, ans && ans.why, 1, 3);
          d.why = j; if (s) s += j.score;
        }
        return { score: s, max, detail: d };
      }
      case 'cloze': {
        const got = q.blanks.map((b, i) => {
          const v = CS.norm(ans && ans.fills ? ans.fills[i] : '');
          return b.accept.some(a => v.trim() === CS.norm(a).trim());
        });
        return { score: got.filter(Boolean).length, max, detail: { got } };
      }
      case 'match': {
        const got = q.pairs.map((p, i) => ans && ans.map && ans.map[i] === p.letter);
        return { score: got.filter(Boolean).length, max, detail: { got } };
      }
      case 'short':
      case 'long': {
        if (q.exact) {
          const v = (ans && ans.text || '').toLowerCase().replace(/\s+/g, ' ').trim().replace(/^["']+|["']+$/g, '');
          const ok = q.exact.some(e => {
            const ee = String(e).toLowerCase().replace(/\s+/g, ' ').trim();
            if (v === ee) return true;
            if (q.numeric) return parseFloat(v.replace(/[^0-9.\-]/g, '')) === parseFloat(ee);
            if (q.binary) return v.replace(/\s/g, '').replace(/^0+/, '') === ee.replace(/^0+/, '') && /^[01\s]+$/.test(v);
            return false;
          });
          return { score: ok ? max : 0, max, detail: { exact: true, correct: ok } };
        }
        return CS.markText(q, ans && ans.text, max, q.type === 'long' ? 4 : 2.5);
      }
    }
    return { score: 0, max, detail: {} };
  };

  // Keyword mark-scheme marker with quality guards.
  CS.markText = function (q, raw, max, wordsPerMark) {
    const text = CS.norm(raw);
    const qual = CS.quality(raw);
    const hits = q.pts.map(p => CS.matchAny(text, p.k || p, p.n));
    let score = Math.min(max, hits.filter(Boolean).length);
    const notes = [];
    if (qual.flag === 'blank') { score = 0; }
    else if (qual.flag) { score = 0; notes.push(qual.flag === 'nonsense' ? 'Answer looks like random typing – no marks.' : 'Too many repeated words – no marks.'); }
    else {
      // "Name / List / State…" questions legitimately accept short lists
      const listQ = /^\s*(name|list|state|give|identify|put|suggest)\b|stand for\b/i.test(q.q || '');
      const wpm = listQ ? 1 : wordsPerMark;
      const cap = Math.floor(qual.words / wpm);
      if (score > cap && score > 1) { score = Math.max(1, cap); notes.push('Keywords listed without explanation – write full sentences to earn every mark.'); }
      if (q.min && qual.words < q.min * 0.6 && score > Math.ceil(max / 2)) { score = Math.ceil(max / 2); notes.push('Answer is too short for a ' + max + '-mark question (aim for ' + q.min + '+ words).'); }
    }
    return { score, max, detail: { hits, notes, words: qual.words, flag: qual.flag } };
  };

  /* ---------- Local storage (safe) ---------- */
  const LS = 'mrsharif-cs:';
  CS.load = (k, d) => { try { const v = localStorage.getItem(LS + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } };
  CS.save = (k, v) => { try { localStorage.setItem(LS + k, JSON.stringify(v)); } catch (e) { /* ignore */ } };

  /* ---------- Progress: XP, streaks, mistakes ---------- */
  CS.progress = {
    get() { return CS.load('progress', { xp: 0, answered: 0, correct: 0, days: [], best: {}, history: [] }); },
    set(p) { CS.save('progress', p); },
    addXP(n) {
      const p = this.get();
      p.xp = Math.max(0, p.xp + n);
      const today = new Date().toISOString().slice(0, 10);
      if (!p.days.includes(today)) { p.days.push(today); p.days = p.days.slice(-60); }
      this.set(p); return p;
    },
    streak() {
      const days = new Set(this.get().days); let n = 0; const d = new Date();
      if (!days.has(d.toISOString().slice(0, 10))) d.setDate(d.getDate() - 1);
      while (days.has(d.toISOString().slice(0, 10))) { n++; d.setDate(d.getDate() - 1); }
      return n;
    },
    level(xp) { return Math.floor(Math.sqrt((xp || 0) / 50)) + 1; },
    record(paperId, score, max) {
      const p = this.get();
      const pct = Math.round((score / max) * 100);
      if (!p.best[paperId] || p.best[paperId] < pct) p.best[paperId] = pct;
      p.history.unshift({ id: paperId, score, max, at: Date.now() });
      p.history = p.history.slice(0, 50);
      this.set(p);
    }
  };

  // Mistakes bank: stores enough to regenerate the question (bank ref or full generated item)
  CS.mistakes = {
    all() { return CS.load('mistakes', []); },
    add(q) {
      const list = this.all();
      const id = q.id;
      const found = list.find(m => m.id === id);
      if (found) { found.need = 2; found.at = Date.now(); }
      else list.unshift({ id, q: JSON.parse(JSON.stringify(q)), need: 2, at: Date.now(), year: q.year });
      CS.save('mistakes', list.slice(0, 300));
    },
    right(id) {
      const list = this.all(); const m = list.find(x => x.id === id);
      if (!m) return;
      m.need--; CS.save('mistakes', m.need <= 0 ? list.filter(x => x !== m) : list);
    },
    count(year) { return this.all().filter(m => !year || m.year === year).length; }
  };

  /* ---------- Learner journey (practise -> fix weak spots -> mock) ---------- */
  CS.journey = {
    // Record one practice answer (ok = full marks)
    record(q, ok) {
      if (!q || !q.unit) return;
      const p = CS.progress.get();
      p.units = p.units || {}; p.recent = p.recent || {};
      const u = (p.units[q.unit] = p.units[q.unit] || { n: 0, c: 0 });
      u.n++; if (ok) u.c++;
      const y = 'y' + q.year;
      p.recent[y] = (p.recent[y] || []).concat(ok ? 1 : 0).slice(-20);
      CS.progress.set(p);
    },
    nextExam(year) {
      const C = CS.config, today = new Date().toISOString().slice(0, 10);
      return C.assessments[year].find(a => (C.examDates[a.id] || '9999') >= today) || C.assessments[year][C.assessments[year].length - 1];
    },
    daysTo(id) {
      const d = CS.config.examDates[id]; if (!d) return null;
      const t = new Date(); t.setHours(0, 0, 0, 0);
      return Math.round((new Date(d + 'T00:00:00') - t) / 86400000);
    },
    // Where is this student on their journey for the next exam?
    status(year) {
      const J = CS.config.journey;
      const p = CS.progress.get(); const units = p.units || {};
      const exam = CS.journey.nextExam(year);
      const keys = exam.units.map(n => 'y' + year + 'u' + n);
      const correct = keys.reduce((s, k) => s + ((units[k] || {}).c || 0), 0);
      const recent = (p.recent || {})['y' + year] || [];
      const acc = recent.length ? recent.reduce((a, b) => a + b, 0) / recent.length : 0;
      const mistakes = CS.mistakes.count(year);
      // weakest unit: lowest accuracy with 3+ attempts, otherwise the least practised
      const scored = keys.map(k => ({ k, n: (units[k] || {}).n || 0, r: units[k] && units[k].n ? units[k].c / units[k].n : 0 }));
      const tried = scored.filter(x => x.n >= 3).sort((a, b) => a.r - b.r);
      const weak = (tried[0] && tried[0].r < 0.7 ? tried[0] : scored.slice().sort((a, b) => a.n - b.n)[0]).k;
      let stage = 'practise';
      if (!recent.length) stage = 'start';
      else if (recent.length >= 8 && acc < J.struggleAccuracy) stage = 'struggling';
      else if (correct >= J.readyCorrect && acc >= J.readyAccuracy) stage = 'ready';
      else if (mistakes >= 10) stage = 'fix';
      return { exam, keys, correct, target: J.readyCorrect, pct: Math.min(100, Math.round((correct / J.readyCorrect) * 100)), acc, recentN: recent.length, mistakes, weak: CS.getUnit(weak), stage };
    }
  };

  CS.student = {
    get() { return CS.load('student', null); },
    set(s) { CS.save('student', s); }
  };
})();
