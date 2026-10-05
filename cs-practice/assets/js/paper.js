/* Paper builder: turns authored bank items into concrete, seeded question instances
   and assembles 50-mark mock papers using the department blueprint. */
(function () {
  'use strict';
  const CS = window.CS;

  /* Blueprint (always 50 marks) */
  CS.BLUEPRINT = [
    { key: 'A', type: 'mcq', title: 'Section A – Multiple choice', info: 'Choose the one correct answer. One question also asks you to explain your choice.', marks: 8 },
    { key: 'B', type: 'tf', title: 'Section B – True or false', info: 'Decide whether each statement is true or false. One statement also asks you to explain.', marks: 5 },
    { key: 'C', type: 'cloze', title: 'Section C – Fill in the blanks', info: 'Type the missing words. Use the word bank – some words are not needed.', marks: 6 },
    { key: 'D', type: 'match', title: 'Section D – Matching', info: 'Drag each definition onto the key term it matches. Every definition is used once.', marks: 5 },
    { key: 'E', type: 'short', title: 'Section E – Short answer', info: 'Answer in full sentences. The number of marks shows how many points to make.', marks: 14, split: [2, 2, 3, 3, 4] },
    { key: 'F', type: 'long', title: 'Section F – Extended answer', info: 'Write a detailed answer with explanations and examples. Plan before you write.', marks: 12, split: [6, 6] }
  ];

  /* ---------- Parse authored mark points: "alt1|alt2::description" ---------- */
  function parsePts(list) {
    return (list || []).map(p => {
      if (typeof p !== 'string') return p;
      let [alts, desc] = p.split('::');
      let n = 1;
      const m = /^@(\d+)\s+/.exec(alts);
      if (m) { n = +m[1]; alts = alts.slice(m[0].length); }
      const k = CS.splitAlts(alts);
      return { k, d: (desc || k[0]).trim(), n };
    });
  }
  CS.parsePts = parsePts;

  /* ---------- Instantiate a bank item into a concrete question ---------- */
  CS.instantiate = function (unit, type, item, rng, id, opts) {
    opts = opts || {};
    const base = { id, year: unit.year, unit: unit.key, unitTitle: unit.title };
    if (type === 'mcq') {
      const order = rng.shuffle(item.o.map((t, i) => i));
      const q = Object.assign(base, {
        type: 'mcq', q: item.q, code: item.c, options: order.map(i => item.o[i]),
        answer: order.indexOf(0), marks: 1, explain: item.x
      });
      if (opts.justify && item.j) {
        q.justify = { prompt: item.j.p || 'Explain why your answer is correct.', pts: parsePts(item.j.k) };
        q.marks = 2;
      }
      return q;
    }
    if (type === 'tf') {
      const q = Object.assign(base, { type: 'tf', q: item.q, code: item.c, answer: !!item.a, marks: 1, explain: item.x });
      if (opts.justify && item.j) {
        q.justify = { prompt: item.a ? 'Explain why this statement is true.' : 'Explain why this statement is false (what is actually correct?).', pts: parsePts(item.j) };
        q.marks = 2;
      }
      return q;
    }
    if (type === 'cloze') {
      const parts = []; const blanks = [];
      const re = /\[([^\]]+)\]/g; let last = 0, m;
      while ((m = re.exec(item.t))) {
        parts.push(item.t.slice(last, m.index));
        const accept = m[1].split('|').map(s => s.trim());
        parts.push({ b: blanks.length }); blanks.push({ accept, word: accept[0] });
        last = re.lastIndex;
      }
      parts.push(item.t.slice(last));
      // keep at most `limit` blanks, reveal the rest
      const limit = opts.blanks || blanks.length;
      const keep = new Set(rng.sample(blanks.map((b, i) => i), Math.min(limit, blanks.length)));
      const outParts = []; const outBlanks = [];
      parts.forEach(p => {
        if (typeof p === 'string') outParts.push(p);
        else if (keep.has(p.b)) { outParts.push({ b: outBlanks.length }); outBlanks.push(blanks[p.b]); }
        else outParts.push(blanks[p.b].word);
      });
      // merge adjacent strings
      const merged = [];
      outParts.forEach(p => {
        if (typeof p === 'string' && typeof merged[merged.length - 1] === 'string') merged[merged.length - 1] += p;
        else merged.push(p);
      });
      const bank = rng.shuffle(outBlanks.map(b => b.word).concat(rng.sample(item.d || [], 2)));
      return Object.assign(base, { type: 'cloze', parts: merged, blanks: outBlanks, bank, marks: outBlanks.length });
    }
    if (type === 'short' || type === 'long') {
      const q = Object.assign(base, {
        type, q: item.q, code: item.c, marks: item.m, model: item.a, min: item.min || (type === 'long' ? 50 : 0),
        pts: parsePts(item.k), exact: item.exact, numeric: item.numeric, binary: item.binary
      });
      if (opts.marks && opts.marks < q.marks) q.marks = opts.marks;
      return q;
    }
    throw new Error('Unknown type ' + type);
  };

  // Matching question from a vocab pool [[term, def, unitKey], ...]
  CS.makeMatch = function (pool, rng, id, n, meta) {
    n = n || 5;
    const seen = new Set(); const chosen = [];
    const seenDef = new Set();
    rng.shuffle(pool).forEach(v => { if (chosen.length < n && !seen.has(v[0].toLowerCase()) && !seenDef.has(v[1])) { seen.add(v[0].toLowerCase()); seenDef.add(v[1]); chosen.push(v); } });
    const pairs = chosen;
    const letters = 'ABCDEF'.split('');
    const defs = rng.shuffle(pairs.map(p => p[1])).map((t, i) => ({ letter: letters[i], text: t }));
    return Object.assign({ id, type: 'match', marks: pairs.length }, meta || {}, {
      pairs: pairs.map(p => ({ term: p[0], letter: defs.find(d => d.text === p[1]).letter })),
      defs
    });
  };

  /* ---------- Candidate pools ---------- */
  // Each candidate: {unit, type, item|gen, idx}
  function candidates(units, type, rng, filter) {
    const byUnit = units.map(u => {
      let list = (u[type] || []).map((item, idx) => ({ unit: u, type, item, idx }));
      if (type === 'mcq' || type === 'short') {
        (u.gen || []).forEach(g => {
          if (g.t.includes(type)) for (let w = 0; w < (g.w || 3); w++) list.push({ unit: u, type, gen: g, idx: 'g' + g.g + w });
        });
      }
      if (filter) list = list.filter(filter);
      return rng.shuffle(list);
    });
    return byUnit;
  }
  // Round-robin across units so multi-unit papers are balanced
  function drawBalanced(byUnit, n, rng) {
    const out = []; const order = rng.shuffle(byUnit.map((_, i) => i));
    const used = new Set(); let guard = 0;
    while (out.length < n && guard++ < 500) {
      let progressed = false;
      for (const ui of order) {
        if (out.length >= n) break;
        const list = byUnit[ui];
        while (list.length) {
          const c = list.shift();
          const key = c.unit.key + c.type + c.idx;
          if (used.has(key)) continue;
          if (c.gen && out.filter(o => o.gen === c.gen).length >= 2) continue;
          used.add(key); out.push(c); progressed = true; break;
        }
      }
      if (!progressed) break;
    }
    return out;
  }

  function realise(c, rng, id, opts) {
    if (c.gen) {
      const fn = CS.gens[c.gen.g];
      const item = fn(rng, c.type);
      return CS.instantiate(c.unit, c.type, item, rng, id, opts);
    }
    return CS.instantiate(c.unit, c.type, c.item, rng, c.unit.key + '-' + c.type + '-' + c.idx, opts);
  }

  /* ---------- Build a 50-mark paper ---------- */
  CS.buildPaper = function (cfg) {
    const units = cfg.units.map(k => (typeof k === 'string' ? CS.getUnit(k) : k)).filter(Boolean);
    const rng = CS.rng(cfg.seed);
    const sections = [];
    let qn = 0; const gid = () => cfg.id + '-q' + (++qn);

    // A – MCQ: 6 plain + 1 justified (2 marks); falls back to 8 plain
    {
      const withJ = drawBalanced(candidates(units, 'mcq', rng, c => c.item && c.item.j), 1, rng);
      const plainPool = candidates(units, 'mcq', rng, c => !(withJ[0] && c.item === withJ[0].item));
      const plain = drawBalanced(plainPool, withJ.length ? 6 : 8, rng);
      const qs = plain.map(c => realise(c, rng, gid()));
      if (withJ.length) qs.splice(rng.int(2, qs.length), 0, realise(withJ[0], rng, gid(), { justify: true }));
      sections.push({ sec: CS.BLUEPRINT[0], questions: qs });
    }
    // B – TF: 3 plain + 1 justified; fallback 5 plain
    {
      const withJ = drawBalanced(candidates(units, 'tf', rng, c => c.item.j), 1, rng);
      const plain = drawBalanced(candidates(units, 'tf', rng, c => !(withJ[0] && c.item === withJ[0].item)), withJ.length ? 3 : 5, rng);
      const qs = plain.map(c => realise(c, rng, gid()));
      if (withJ.length) qs.push(realise(withJ[0], rng, gid(), { justify: true }));
      sections.push({ sec: CS.BLUEPRINT[1], questions: qs });
    }
    // C – Cloze: one passage, 6 blanks
    {
      const pool = candidates(units, 'cloze', rng, c => (c.item.t.match(/\[/g) || []).length >= 6);
      const c = drawBalanced(pool, 1, rng)[0];
      sections.push({ sec: CS.BLUEPRINT[2], questions: c ? [realise(c, rng, gid(), { blanks: 6 })] : [] });
    }
    // D – Matching: 5 pairs from the scope's vocabulary
    {
      const pool = [];
      units.forEach(u => u.vocab.forEach(v => pool.push([v[0], v[1], u.key])));
      sections.push({ sec: CS.BLUEPRINT[3], questions: [CS.makeMatch(pool, rng, cfg.id + '-match', 5, { year: units[0].year, unitTitle: 'Key terms' })] });
    }
    // E – Short answers [2,2,3,3,4]
    {
      const split = CS.BLUEPRINT[4].split;
      const byUnit = candidates(units, 'short', rng);
      const drawn = drawBalanced(byUnit, 30, rng);
      const qs = []; const used = new Set();
      split.forEach(target => {
        let best = drawn.find(c => !used.has(c) && markOf(c) === target) ||
                   drawn.find(c => !used.has(c) && markOf(c) > target && !c.item?.exact) ||
                   drawn.find(c => !used.has(c));
        if (!best) return;
        used.add(best);
        const q = realise(best, rng, gid(), { marks: target });
        if (q.exact) q.marks = target;
        else if (q.marks < target) q.marks = Math.min(target, q.pts.length);
        qs.push(q);
      });
      sections.push({ sec: CS.BLUEPRINT[4], questions: qs });
    }
    // F – Long answers 2 × 6, from different units where possible
    {
      const drawn = drawBalanced(candidates(units, 'long', rng), 2, rng);
      sections.push({ sec: CS.BLUEPRINT[5], questions: drawn.map(c => realise(c, rng, gid(), { marks: 6 })) });
    }

    const total = sections.reduce((s, x) => s + x.questions.reduce((a, q) => a + q.marks, 0), 0);
    return { id: cfg.id, title: cfg.title, subtitle: cfg.subtitle, year: units[0].year, units: units.map(u => u.key), sections, total, seed: cfg.seed };
  };
  function markOf(c) { return c.gen ? (c.gen.m || 2) : c.item.m; }

  /* ---------- Single random question for practice mode ---------- */
  CS.PRACTICE_WEIGHTS = { mcq: 30, tf: 18, cloze: 10, match: 10, short: 22, long: 10 };
  CS.randomQuestion = function (units, types, rng) {
    types = types && types.length ? types : Object.keys(CS.PRACTICE_WEIGHTS);
    for (let tries = 0; tries < 30; tries++) {
      const t = weighted(types, rng);
      const u = rng.pick(units);
      if (t === 'match') {
        if (u.vocab.length < 6) continue;
        return CS.makeMatch(u.vocab.map(v => [v[0], v[1], u.key]), rng, u.key + '-match-' + rng.int(1, 1e9), 5, { year: u.year, unit: u.key, unitTitle: u.title });
      }
      const list = (u[t] || []).map((item, idx) => ({ item, idx }));
      const gens = (t === 'mcq' || t === 'short') ? (u.gen || []).filter(g => g.t.includes(t)) : [];
      if (!list.length && !gens.length) continue;
      if (gens.length && rng() < gens.length * 3 / (list.length + gens.length * 3)) {
        const g = rng.pick(gens);
        const seed = rng.int(1, 1e9);
        return CS.instantiate(u, t, CS.gens[g.g](CS.rng(seed), t), rng, u.key + '-g-' + g.g + '-' + seed, {});
      }
      const c = rng.pick(list);
      return CS.instantiate(u, t, c.item, rng, u.key + '-' + t + '-' + c.idx, { justify: rng() < 0.35 });
    }
    return null;
  };
  function weighted(types, rng) {
    const tot = types.reduce((s, t) => s + (CS.PRACTICE_WEIGHTS[t] || 1), 0);
    let r = rng() * tot;
    for (const t of types) { r -= CS.PRACTICE_WEIGHTS[t] || 1; if (r <= 0) return t; }
    return types[0];
  }
})();
