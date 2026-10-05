/* Mr Sharif's CS Practice – pages and routing */
(function () {
  'use strict';
  const CS = window.CS, ui = CS.ui, C = CS.config;
  const E = CS.esc;
  const $ = (s, r) => (r || document).querySelector(s);
  const main = () => $('#app');
  let cleanup = [];
  const onCleanup = fn => cleanup.push(fn);

  /* ---------- Theme ---------- */
  function applyTheme(t) { document.documentElement.setAttribute('data-theme', t); CS.save('theme', t); const b = $('#themeBtn'); if (b) b.textContent = t === 'dark' ? '☀️' : '🌙'; }
  applyTheme(CS.load('theme', 'light'));

  /* ---------- Header ---------- */
  function header(year) {
    document.body.dataset.year = year || '';
    document.querySelectorAll('.year-tab').forEach(a => a.classList.toggle('active', +a.dataset.y === year));
    const p = CS.progress.get();
    const lv = CS.progress.level(p.xp), rk = CS.art.rank(lv);
    const lo = CS.art.xpFor(lv), hi = CS.art.xpFor(lv + 1);
    $('#xpChip').innerHTML = `<span class="rank-ico">${rk.icon}</span><span class="rank-txt"><b>${E(rk.name)}</b><small>Lv ${lv} · ${p.xp} XP</small><i class="xpbar"><i style="width:${Math.round(((p.xp - lo) / (hi - lo)) * 100)}%"></i></i></span>`;
    $('#xpChip').title = `${hi - p.xp} XP to level ${lv + 1}: ${CS.art.rank(lv + 1).name}`;
    const s = CS.progress.streak();
    $('#streakChip').innerHTML = `🔥 ${s} day${s === 1 ? '' : 's'}`;
    $('#streakChip').title = 'Days in a row you have practised';
  }

  /* ---------- Router ---------- */
  function parse() {
    const h = location.hash.replace(/^#\/?/, '');
    const [path, qs] = h.split('?');
    const parts = path.split('/').filter(Boolean);
    const params = new URLSearchParams(qs || '');
    return { parts, params };
  }
  function route() {
    cleanup.forEach(f => { try { f(); } catch (e) { /* ignore */ } }); cleanup = [];
    ui.onPasteAttempt = null;
    window.onbeforeunload = null;
    document.querySelectorAll('.mcard.ghost, .modal-back').forEach(x => x.remove());
    const { parts, params } = parse();
    const m = /^y([789])$/.exec(parts[0] || '');
    window.scrollTo(0, 0);
    if (!m) return pageHome();
    const year = +m[1];
    header(year);
    const sub = parts[1];
    if (!sub) return pageYear(year);
    if (sub === 'u' && parts[2]) return pageUnit(year, +parts[2]);
    if (sub === 'practice') return pagePractice(year, params);
    if (sub === 'mistakes') return pagePractice(year, params, true);
    if (sub === 'mock' && parts[2] && parts[3]) return pageMock(year, parts[2], parts[3]);
    if (sub === 'flash') return pageFlash(year, parts[2]);
    return pageYear(year);
  }
  window.addEventListener('hashchange', route);

  const unitsOf = year => CS.unitsFor(year);
  const semOf = (year, num) => (C.assessments[year].find(a => a.id === 'eos1').units.includes(num) ? 1 : 2);
  function scopeUnits(year, scope) {
    if (/^u\d+$/.test(scope)) return [CS.getUnit('y' + year + scope)].filter(Boolean);
    const a = C.assessments[year].find(x => x.id === scope);
    return a ? a.units.map(n => CS.getUnit('y' + year + 'u' + n)).filter(Boolean) : [];
  }
  function scopeName(year, scope) {
    if (/^u\d+$/.test(scope)) { const u = CS.getUnit('y' + year + scope); return u ? `Unit ${u.num} Test – ${u.title}` : 'Unit test'; }
    const a = C.assessments[year].find(x => x.id === scope);
    return a ? `${a.name} Mock` : 'Mock';
  }
  function versionChips(year, scope) {
    const best = CS.progress.get().best;
    let h = '';
    for (let v = 1; v <= C.versions; v++) {
      const id = `y${year}-${scope}-v${v}`;
      const b = best[id];
      h += `<a class="ver ${b != null ? 'done' : ''}" href="#/y${year}/mock/${scope}/${v}" title="Version ${v}${b != null ? ' – best ' + b + '%' : ''}">${v}${b != null ? `<span class="pct">${b}%</span>` : ''}</a>`;
    }
    h += `<a class="ver" href="#/y${year}/mock/${scope}/r" title="A brand-new random paper">🎲 New</a>`;
    return h;
  }

  /* ---------- Home ---------- */
  function pageHome() {
    header(null);
    const TEAMS = { 7: ['🚀', 'Rookie Recruits', 'Files, safety, hardware, binary and Python basics'], 8: ['⚡', 'Code Crew', 'Networks, spreadsheets, graphics, internet and Python'], 9: ['🛡️', 'Cyber Squad', 'E-safety, enterprise, practical software and Python'] };
    const yc = y => {
      const us = unitsOf(y), js = CS.journey.status(y);
      return `<div class="card year-card" data-y="${y}">
        <div class="yc-top"><a class="big" href="#/y${y}">Year ${y}</a><span class="pixel-badge">LVL ${y}</span></div>
        <div class="yc-team"><span class="yc-ico" aria-hidden="true">${TEAMS[y][0]}</span><div><b>${TEAMS[y][1]}</b><span>${TEAMS[y][2]}</span></div></div>
        <div class="yc-ready"><div class="small"><b>${E(js.exam.short)} readiness</b><span>${js.pct}%</span></div><div class="progress"><i style="width:${js.pct}%"></i></div></div>
        <a class="btn primary yc-go" href="#/y${y}">Start practising →</a>
        <details class="yc-units"><summary>View all ${us.length} units</summary><ol>${us.map(u => `<li><a href="#/y${y}/u/${u.num}">${E(u.title)}</a></li>`).join('')}</ol></details>
      </div>`;
    };
    const exam = CS.journey.nextExam(7);
    const days = CS.journey.daysTo(exam.id);
    const after = C.assessments[7][C.assessments[7].indexOf(exam) + 1];
    const examDate = d => new Date(C.examDates[d] + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    const upcoming = `<aside class="card upcoming" aria-labelledby="upTitle">
        <div class="up-head"><span class="pixel-label">📅 UPCOMING EXAMS</span>
          <h3 id="upTitle">${E(exam.name)}</h3>
          <div class="small muted">Starts ${examDate(exam.id)}</div></div>
        ${days != null && days >= 0 ? `<div class="countdown"><b>${days}</b><span>${days === 1 ? 'day' : 'days'} to go</span></div>` : ''}
        <ul class="up-list">${[7, 8, 9].map(y => { const a = C.assessments[y].find(x => x.id === exam.id); return `<li class="up-y" data-y="${y}"><a href="#/y${y}/practice?units=${a.units.join(',')}"><span><b>Year ${y}</b><small>${E(listJoin(a.units.map(n => CS.getUnit('y' + y + 'u' + n).title)))}</small></span><i aria-hidden="true">→</i></a></li>`; }).join('')}</ul>
        ${after ? `<div class="small muted up-next">Then: <b>${E(after.name)}</b> – ${examDate(after.id)}</div>` : ''}
      </aside>`;
    main().innerHTML = `
      <section class="hero home-hero hero-split">
        <div class="hero-text">
        <span class="kicker pixel">&gt; SYSTEM ONLINE_</span>
        <h1>Hack your exams. <span>Level up your brain.</span></h1>
        <p class="terminal"><span class="prompt">bit@cs:~$</span> <span class="typed">train --until automatic</span><span class="caret"></span></p>
        <p>Every topic, every question type, every unit. Earn XP, unlock hacker ranks and smash 50-mark mock exams just like the real thing. Pick your year to start!</p>
        <div class="hero-actions">
          <a class="btn primary lg" href="#/y7" style="background:var(--y7);border-color:var(--y7)">Year 7</a>
          <a class="btn primary lg" href="#/y8" style="background:var(--y8);border-color:var(--y8)">Year 8</a>
          <a class="btn primary lg" href="#/y9" style="background:var(--y9);border-color:var(--y9)">Year 9</a>
        </div>
        </div>
        <div class="hero-art">${CS.art.chips()}${CS.art.bit('happy', 200)}</div>
      </section>
      <div class="section home-grid">${[7, 8, 9].map(yc).join('')}${upcoming}</div>
      <div class="section">
        <h2>How to use this site</h2>
        <div class="grid feat-grid" style="margin-top:12px">
          ${feat('🎯', 'Endless practice', 'Questions stack up as you go with instant feedback. Wrong guesses lose XP, so read carefully!')}
          ${feat('📝', 'Mock exams', 'Full 50-mark papers for every unit, mid-semester and end-of-semester – 10 fixed versions each, plus unlimited random papers.')}
          ${feat('🔁', 'Mistakes to revisit', 'Anything you get wrong comes back until you get it right twice.')}
          ${feat('🃏', 'Flashcards', 'Learn the key vocabulary from each unit before you test yourself.')}
        </div>
      </div>
      <div class="section card rules-card">
        <div class="rules-bit">${CS.art.bit('cool', 90)}</div><div>
        <h3>📏 Bit's rules of the game</h3>
        <ul class="rules muted">
          <li>Written answers must be typed in your own words – <b>pasting is turned off</b>.</li>
          <li>Leaving the page during a mock is recorded and shown to your teacher.</li>
          <li>Each question must be on screen for a few seconds before you can move on – read it properly.</li>
          <li>Answers that are random letters or a list of keywords without explanation get no marks.</li>
        </ul></div>
      </div>
      <div class="section card ranks-card"><h3>🏆 Hacker ranks – how far can you climb?</h3>
        <div class="ranks">${CS.art.RANKS.map((r, i) => `<div class="rank ${CS.progress.level(CS.progress.get().xp) > i ? 'got' : ''}"><span>${r[1]}</span><b>${E(r[0])}</b><small>Lv ${i + 1}</small></div>`).join('')}</div></div>`;
  }
  const feat = (i, t, d) => `<div class="card feature"><div class="ico">${i}</div><div><h3>${t}</h3><div class="muted small">${d}</div></div></div>`;

  /* ---------- Year page ---------- */
  const listJoin = arr => arr.length > 1 ? arr.slice(0, -1).join(', ') + ' and ' + arr[arr.length - 1] : (arr[0] || '');
  function bitAdvice(year, js) {
    const ex = E(js.exam.short), w = js.weak ? E(js.weak.title) : '';
    return {
      start: ['happy', `Hi agent! Your first mission: <b>practise the ${ex} units</b>. Get ${js.target} answers right and I'll unlock your mock.`],
      practise: ['happy', `Nice work! <b>${js.correct}/${js.target}</b> correct on the ${ex} units. Keep practising to unlock your mock.`],
      struggling: ['think', `Those were tricky! Let's power up first: try the <b>${w}</b> flashcards, then fix your mistakes.`],
      fix: ['think', `You have <b>${js.mistakes}</b> bugs (mistakes) to squash. Fixing them is the fastest way to level up! 🐞`],
      ready: ['cool', `🚀 <b>Mock unlocked!</b> You're ready for a ${ex} mock exam. Show me what you've got!`]
    }[js.stage];
  }
  function pageYear(year) {
    const us = unitsOf(year);
    const js = CS.journey.status(year), next = js.exam;
    const mistakes = js.mistakes;
    const scope = next.units.join(',');
    const best = CS.progress.get().best;
    const unitBest = u => { let b = null; for (let v = 1; v <= C.versions; v++) { const x = best[`y${year}-u${u.num}-v${v}`]; if (x != null) b = Math.max(b || 0, x); } return b; };
    const unitCard = u => {
      const b = unitBest(u);
      return `<a class="card link unit-card" href="#/y${year}/u/${u.num}">
        <div class="unit-ico">${u.icon || '💻'}</div>
        <div style="flex:1;min-width:0"><div class="unit-num">Unit ${u.num}</div><h3>${E(u.title)}</h3>
        <div class="muted small">${u.topics.slice(0, 3).map(E).join(' · ')}${u.topics.length > 3 ? ' …' : ''}</div>
        <div class="progress" title="Best unit test score"><i style="width:${b || 0}%"></i></div>
        <div class="small muted" style="margin-top:4px">${b != null ? 'Best unit test: ' + b + '%' : 'No unit test yet'}</div></div></a>`;
    };
    const here = st => (js.stage === st || (st === 'practise' && js.stage === 'start') || (st === 'fix' && js.stage === 'struggling')) ? ' here' : '';
    const [mood, advice] = bitAdvice(year, js);
    const days = CS.journey.daysTo(next.id);
    main().innerHTML = `
      <section class="hero hero-split">
        <div class="hero-text">
        <span class="kicker pixel">YEAR ${year} // MISSION HUB</span>
        <h1>Year ${year} practice hub</h1>
        <p>Next exam: <b>${E(next.name)}</b>${days != null && days >= 0 ? ` – <b>${days} day${days === 1 ? '' : 's'}</b> to go` : ''}. It covers ${E(listJoin(next.units.map(n => CS.getUnit('y' + year + 'u' + n).title)))}.</p>
        <div class="hero-actions">
          <a class="btn primary lg" href="#/y${year}/practice?units=${scope}">🎯 Endless practice: ${E(next.short)} units</a>
          <a class="btn soft lg" href="#/y${year}/practice">🔀 Mixed practice (all units)</a>
        </div>
        </div>
        <div class="hero-art small">${CS.art.say(mood, advice, 96)}</div>
      </section>

      <div class="section">
        <div class="section-head"><div><h2>Your learner journey</h2><div class="muted small">Practise first. If it gets tricky, fix your weak spots. When you're ready, take the mock.</div></div></div>
        <div class="journey">
          <div class="card jstep${here('practise')}">
            <div class="jnum">STEP 1</div><h3>🎯 Practise</h3>
            <p class="small muted">Answer questions on the ${E(next.short)} units until you get <b>${js.target}</b> right.</p>
            <div class="small"><b>${js.correct}/${js.target}</b> correct</div>
            <div class="progress"><i style="width:${js.pct}%"></i></div>
            <a class="btn primary sm" href="#/y${year}/practice?units=${scope}">Practise now</a>
          </div>
          <div class="jarrow" aria-hidden="true">➜</div>
          <div class="card jstep${here('fix')}">
            <div class="jnum">STEP 2 · IF IT'S TRICKY</div><h3>🛠️ Fix weak spots</h3>
            <p class="small muted">${js.weak && js.recentN ? `Your weakest unit right now: <b>${E(js.weak.title)}</b>.` : 'Learn the key words, then fix anything you got wrong.'}</p>
            <div class="row">
              <a class="btn sm" href="#/y${year}/mistakes">🔁 Mistakes${mistakes ? ` (${mistakes})` : ''}</a>
              <a class="btn sm" href="#/y${year}/flash${js.weak ? '/' + js.weak.num : ''}">🃏 Flashcards</a>
            </div>
          </div>
          <div class="jarrow" aria-hidden="true">➜</div>
          <div class="card jstep${here('ready')}${js.stage === 'ready' ? '' : ' locked'}">
            <div class="jnum">STEP 3</div><h3>${js.stage === 'ready' ? '🚀' : '🔒'} Mock exam</h3>
            <p class="small muted">${js.stage === 'ready' ? 'Unlocked! Take a full 50-mark mock just like the real exam.' : `Recommended once you have ${js.target} correct answers and ${Math.round(C.journey.readyAccuracy * 100)}% accuracy.`}</p>
            <a class="btn ${js.stage === 'ready' ? 'good' : ''} sm" href="#/y${year}/mock/${next.id}/r">Take a ${E(next.short)} mock</a>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-head"><div><h2>Units</h2><div class="muted small">Each unit has endless practice, flashcards and 10 unit-test versions.</div></div></div>
        <div class="sem-label">Semester 1</div>
        <div class="grid grid-2">${us.filter(u => semOf(year, u.num) === 1).map(unitCard).join('')}</div>
        <div class="sem-label">Semester 2</div>
        <div class="grid grid-2">${us.filter(u => semOf(year, u.num) === 2).map(unitCard).join('')}</div>
      </div>

      <div class="section">
        <div class="section-head"><div><h2>All mock exams</h2><div class="muted small">Every paper is 50 marks: multiple choice, true/false, fill in the blanks, matching, short and extended answers.</div></div></div>
        <div class="grid mock-grid">
          ${C.assessments[year].map(a => `<div class="card mock-card" ${next.id === a.id ? 'style="border-color:var(--accent);border-width:2px"' : ''}>
            <h3>${E(a.name)} ${next.id === a.id ? '<span class="tag">Next</span>' : ''}</h3>
            <div class="muted small">${E(a.when)} · ${E(listJoin(a.units.map(n => CS.getUnit('y' + year + 'u' + n).title)))}</div>
            <div class="versions">${versionChips(year, a.id)}</div>
            <div class="row" style="margin-top:12px"><a class="btn sm soft" href="#/y${year}/practice?units=${a.units.join(',')}">Practise these units</a></div>
          </div>`).join('')}
        </div>
      </div>`;
  }

  /* ---------- Unit page ---------- */
  function pageUnit(year, num) {
    const u = CS.getUnit(`y${year}u${num}`);
    if (!u) return pageYear(year);
    const counts = { mcq: u.mcq.length, tf: u.tf.length, cloze: u.cloze.length, match: u.vocab.length, short: u.short.length, long: u.long.length };
    const gens = u.gen.length;
    main().innerHTML = `
      <div class="crumbs"><a href="#/y${year}">Year ${year}</a> › Unit ${u.num}</div>
      <section class="hero">
        <span class="kicker">Unit ${u.num} · Semester ${semOf(year, num)}</span>
        <h1>${u.icon || ''} ${E(u.title)}</h1>
        <p>${u.topics.map(E).join(' · ')}</p>
        <div class="hero-actions">
          <a class="btn primary lg" href="#/y${year}/practice?units=${num}">🎯 Practise this unit</a>
          <a class="btn soft lg" href="#/y${year}/flash/${num}">🃏 Flashcards (${u.vocab.length})</a>
          <a class="btn lg" href="#/y${year}/mock/u${num}/r">📝 Random unit test</a>
        </div>
      </section>
      <div class="section grid grid-2">
        <div class="card">
          <h3>Practise one question type</h3>
          <div class="muted small">Focus on the format you find hardest.</div>
          <div class="row" style="margin-top:12px">
            ${Object.keys(counts).map(t => `<a class="btn sm" href="#/y${year}/practice?units=${num}&types=${t}">${ui.TYPE_NAME[t]} <span class="muted">${t === 'mcq' || t === 'short' ? (gens ? '∞' : counts[t]) : counts[t]}</span></a>`).join('')}
          </div>
        </div>
        <div class="card">
          <h3>Unit tests (50 marks)</h3>
          <div class="muted small">10 fixed versions – try to beat your best score on each.</div>
          <div class="versions">${versionChips(year, 'u' + num)}</div>
        </div>
      </div>
      <div class="section card">
        <h3>Key vocabulary</h3>
        <div class="grid grid-2" style="margin-top:10px">${u.vocab.map(v => `<div><b>${E(v[0])}</b> <span class="muted">– ${E(v[1])}</span></div>`).join('')}</div>
      </div>`;
  }

  /* ---------- Practice (endless) and mistakes ---------- */
  function pagePractice(year, params, mistakesMode) {
    const all = unitsOf(year);
    let unitNums = (params.get('units') || '').split(',').map(Number).filter(Boolean);
    let units = unitNums.length ? all.filter(u => unitNums.includes(u.num)) : all;
    let types = (params.get('types') || '').split(',').filter(t => ui.TYPE_NAME[t]);
    const rng = CS.rng(CS.freshSeed());
    const st = { score: 0, max: 0, n: 0, streak: 0, xp: 0 };
    let lockTimer, mqueue;

    const title = mistakesMode ? '🔁 Mistakes to revisit' : units.length === all.length ? '🎯 Endless mixed practice' : `🎯 Practice: ${units.map(u => 'Unit ' + u.num).join(', ')}`;
    main().innerHTML = `
      <div class="crumbs"><a href="#/y${year}">Year ${year}</a> › ${mistakesMode ? 'Mistakes' : 'Practice'}</div>
      <h1 style="font-size:1.6rem">${title}</h1>
      ${mistakesMode ? '<p class="muted">Questions you got wrong come back here. Get each one right twice to clear it.</p>' : `
      <div class="card" style="margin-bottom:14px">
        <div class="small muted" style="margin-bottom:6px">Units</div>
        <div class="filter-chips" id="unitChips">${all.map(u => `<button class="fchip ${units.includes(u) ? 'on' : ''}" data-u="${u.num}">${u.icon || ''} ${u.num}. ${E(u.title)}</button>`).join('')}</div>
        <div class="small muted" style="margin:10px 0 6px">Question types</div>
        <div class="filter-chips" id="typeChips">${Object.keys(ui.TYPE_NAME).map(t => `<button class="fchip ${!types.length || types.includes(t) ? 'on' : ''}" data-t="${t}">${ui.TYPE_NAME[t]}</button>`).join('')}</div>
      </div>`}
      <div class="hud">
        <div class="stat">✅ Done <b id="pDone">0</b></div>
        <div class="stat">🎯 Score <b id="pScore">0/0</b></div>
        <div class="stat">🔥 Streak <b id="pStreak">0</b></div>
        <div class="stat">⚡ XP <b id="pXP">0</b></div>
        <div class="trail" id="trail" aria-label="Questions completed this session"></div>
      </div>
      <p class="small muted hud-note">⚠️ Wrong multiple-choice and true/false answers lose ${Math.abs(C.xp.wrong)} XP – don't guess! Your answered questions stack up below.</p>
      <div id="stack" class="stack"></div>`;

    if (!mistakesMode) {
      $('#unitChips').addEventListener('click', e => {
        const b = e.target.closest('.fchip'); if (!b) return;
        b.classList.toggle('on');
        const on = [...document.querySelectorAll('#unitChips .fchip.on')].map(x => +x.dataset.u);
        if (!on.length) { b.classList.add('on'); return ui.toast('Pick at least one unit.'); }
        units = all.filter(u => on.includes(u.num)); next();
      });
      $('#typeChips').addEventListener('click', e => {
        const b = e.target.closest('.fchip'); if (!b) return;
        b.classList.toggle('on');
        const on = [...document.querySelectorAll('#typeChips .fchip.on')].map(x => x.dataset.t);
        if (!on.length) { b.classList.add('on'); return ui.toast('Pick at least one question type.'); }
        types = on.length === 6 ? [] : on; next();
      });
    }

    let cur = null;          // the question currently being answered
    const trail = [];        // results of completed questions this session
    let best = 0;

    function emptyState(html) {
      if (cur && !cur.checked) { cur.el.remove(); cur = null; }
      $('#stack').insertAdjacentHTML('beforeend', `<div class="card empty" data-empty>${html}</div>`);
    }
    function next() {
      clearInterval(lockTimer);
      document.querySelectorAll('#stack [data-empty]').forEach(x => x.remove());
      // a question that was never checked (e.g. filters changed) is replaced, not stacked
      if (cur && !cur.checked) { cur.el.remove(); cur = null; }
      let q;
      if (mistakesMode) {
        mqueue = CS.mistakes.all().filter(m => m.year === year);
        if (!mqueue.length) return emptyState(`${CS.art.say('cool', '<b>No mistakes to fix!</b><br>Anything you get wrong in practice or mocks will appear here.')}<a class="btn primary" href="#/y${year}/practice">Go to practice</a>`);
        const fresh = mqueue.filter(m => !cur || m.id !== cur.q.id);
        q = rng.pick((fresh.length ? fresh : mqueue).slice(0, 8)).q;
      } else {
        q = CS.randomQuestion(units, types, rng);
      }
      if (!q) return emptyState(CS.art.say('think', 'No questions of that type in these units yet – try another filter.'));
      const el = document.createElement('div');
      el.className = 'pq';
      $('#stack').appendChild(el);
      cur = { q, ans: {}, checked: false, shownAt: Date.now(), el, n: trail.length + 1 };
      draw();
      if (trail.length) el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    }
    function draw(review) {
      const { q, ans, el } = cur;
      el.innerHTML = `<div class="pq-num">#${cur.n}</div>` + ui.renderQ(q, { ans, review }) + `
        <div class="q-actions">
          ${review ? `<button class="btn primary lg" id="nextBtn">Next question ↓</button><button class="btn ghost" id="endBtn">🏁 End session</button>` :
          `<button class="btn primary lg" id="checkBtn">Check answer</button><span class="lock-note" id="lockNote"></span>
           <div class="spacer"></div><button class="btn ghost sm" id="skipBtn">Skip</button>`}
        </div>`;
      if (review) {
        $('#nextBtn').onclick = () => { el.querySelector('.q-actions').remove(); el.classList.add('stacked'); next(); };
        $('#endBtn').onclick = endSession;
        $('#nextBtn').focus({ preventScroll: true });
        return;
      }
      ui.bindQ(el, q, ans, (a, meta) => {
        if (meta && meta.burst) ui.toast('Type your own answer – large pasted-in text is not allowed.');
      });
      $('#checkBtn').onclick = check;
      $('#skipBtn').onclick = () => { st.streak = 0; upd(); el.remove(); cur = null; next(); };
      const need = ui.minSeconds(q);
      const tick = () => {
        const left = Math.ceil(need - (Date.now() - cur.shownAt) / 1000);
        const btn = $('#checkBtn'); if (!btn) return clearInterval(lockTimer);
        if (left > 0) { btn.disabled = true; $('#lockNote').textContent = `🔒 Read carefully… ${left}s`; }
        else { btn.disabled = false; $('#lockNote').textContent = ''; clearInterval(lockTimer); }
      };
      tick(); lockTimer = setInterval(tick, 250);
      onCleanup(() => clearInterval(lockTimer));
      const first = el.querySelector('textarea,input[type=text]'); if (first && q.type !== 'mcq' && q.type !== 'tf') first.focus({ preventScroll: true });
    }
    function check() {
      const { q, ans } = cur;
      if (cur.checked) return;
      if (!ui.isAnswered(q, ans)) return ui.toast(q.type === 'cloze' ? 'Fill in every blank first.' : q.type === 'match' ? 'Drag a definition onto every term first.' : 'Answer the question first.');
      if (q.justify && !(ans.why && ans.why.trim())) return ui.toast('Explain your answer too – it is worth a mark.');
      cur.checked = true;
      const r = CS.mark(q, ans);
      st.n++; st.score += r.score; st.max += r.max;
      let xp;
      if (q.type === 'mcq' || q.type === 'tf') xp = r.detail.correct ? C.xp.right + (r.score > 1 ? C.xp.perMark : 0) : C.xp.wrong;
      else xp = r.score * C.xp.perMark;
      if (r.score === r.max) { st.streak++; if (st.streak % 5 === 0) { xp += 10; ui.toast(`🔥 ${st.streak} in a row! +10 bonus XP`); CS.art.confetti(60); } else CS.art.confetti(14); } else st.streak = 0;
      best = Math.max(best, st.streak);
      const before = CS.progress.level(CS.progress.get().xp);
      st.xp += xp; const after = CS.progress.level(CS.progress.addXP(xp).xp); ui.xpPop(xp);
      if (r.score < r.max) CS.mistakes.add(q); else CS.mistakes.right(q.id);
      if (!mistakesMode) CS.journey.record(q, r.score === r.max);
      trail.push(r.score === r.max ? 'good' : r.score ? 'part' : 'bad');
      upd(); header(year);
      draw(r);
      if (after > before) levelUp(after);
      nudge();
    }
    // Learner-journey check-ins: suggest a mock when ready, extra help when struggling
    let wasReady = CS.journey.status(year).stage === 'ready';
    function nudge() {
      const J = C.journey, js = CS.journey.status(year);
      const last = trail.slice(-J.nudgeEvery);
      const sessAcc = last.filter(t => t === 'good').length / Math.max(1, last.length);
      let html = null;
      if (js.stage === 'ready' && !wasReady) {
        html = `${CS.art.say('cool', `<b>🚀 Mock unlocked!</b> You've got ${js.correct} answers right on the ${E(js.exam.short)} units. Time to test yourself properly.`, 70)}
          <div class="row"><a class="btn good" href="#/y${year}/mock/${js.exam.id}/r">Take a ${E(js.exam.short)} mock</a><button class="btn ghost" data-dismiss>Keep practising</button></div>`;
        CS.art.confetti(60);
      } else if (trail.length % J.nudgeEvery === 0) {
        if (sessAcc < J.struggleAccuracy) {
          const w = js.weak;
          html = `${CS.art.say('think', `That set was tricky – that's OK! Power up with the <b>${w ? E(w.title) : ''}</b> flashcards or fix your mistakes, then come back.`, 70)}
            <div class="row"><a class="btn" href="#/y${year}/flash${w ? '/' + w.num : ''}">🃏 Flashcards</a><a class="btn" href="#/y${year}/mistakes">🔁 Fix mistakes (${CS.mistakes.count(year)})</a><button class="btn ghost" data-dismiss>Keep going</button></div>`;
        } else if (js.stage === 'ready') {
          html = `${CS.art.say('cool', `${Math.round(sessAcc * 100)}% on your last ${last.length}! You're ready – have you tried a ${E(js.exam.short)} mock yet?`, 70)}
            <div class="row"><a class="btn good" href="#/y${year}/mock/${js.exam.id}/r">Take a mock</a><button class="btn ghost" data-dismiss>Keep practising</button></div>`;
        } else {
          html = `${CS.art.say('happy', `Checkpoint! <b>${js.correct}/${js.target}</b> correct on the ${E(js.exam.short)} units. ${js.target - js.correct} more to unlock your mock.`, 70)}
            <div class="progress"><i style="width:${js.pct}%"></i></div>`;
        }
      }
      wasReady = js.stage === 'ready';
      if (!html) return;
      cur.el.insertAdjacentHTML('beforeend', `<div class="nudge card">${html}</div>`);
      const n = cur.el.querySelector('.nudge:last-child [data-dismiss]');
      if (n) n.onclick = () => n.closest('.nudge').remove();
    }
    function levelUp(level) {
      const rk = CS.art.rank(level);
      CS.art.confetti(80);
      ui.modal(`<div class="center">${CS.art.bit('wow', 110)}<div class="pixel-label">LEVEL UP!</div><h2>Level ${level}: ${rk.icon} ${E(rk.name)}</h2><p class="muted">New rank unlocked. Keep going to reach ${E(CS.art.rank(level + 1).name)}!</p><button class="btn primary" data-x>Let's go!</button></div>`,
        (m, close) => { m.querySelector('[data-x]').onclick = close; });
    }
    function endSession() {
      const acc = st.max ? Math.round((st.score / st.max) * 100) : 0;
      const p = CS.progress.get(); const lv = CS.progress.level(p.xp); const rk = CS.art.rank(lv);
      if (trail.length) CS.art.confetti(70);
      ui.modal(`<div class="center">${CS.art.bit(acc >= 60 ? 'cool' : 'happy', 100)}<div class="pixel-label">SESSION COMPLETE</div>
        <h2>${trail.length} question${trail.length === 1 ? '' : 's'} hacked!</h2>
        <div class="trail big">${trail.map(t => `<i class="${t}"></i>`).join('')}</div>
        <div class="sum-grid"><div><b>${st.score}/${st.max}</b><span>marks</span></div><div><b>${acc}%</b><span>accuracy</span></div><div><b>${st.xp > 0 ? '+' : ''}${st.xp}</b><span>XP</span></div><div><b>${best}</b><span>best streak</span></div></div>
        <p class="muted">Rank: ${rk.icon} <b>${E(rk.name)}</b> (level ${lv})</p>
        <div class="row" style="justify-content:center"><button class="btn" data-x>Keep practising</button><a class="btn primary" href="#/y${year}">Finish</a></div></div>`,
        (m, close) => { m.querySelector('[data-x]').onclick = close; m.querySelector('a').onclick = close; });
    }
    function upd() {
      $('#pScore').textContent = `${st.score}/${st.max}`;
      $('#pStreak').textContent = st.streak;
      $('#pXP').textContent = (st.xp > 0 ? '+' : '') + st.xp;
      $('#pDone').textContent = trail.length;
      $('#trail').innerHTML = trail.map(t => `<i class="${t}"></i>`).join('');
    }
    const key = e => {
      if (e.target.matches('textarea,input,select')) return;
      if (e.key === 'Enter') { const b = $('#nextBtn') || $('#checkBtn'); if (b && !b.disabled) { e.preventDefault(); b.click(); } }
      if (cur && cur.q.type === 'mcq' && /^[a-d1-4]$/i.test(e.key) && !cur.checked) {
        const i = /\d/.test(e.key) ? +e.key - 1 : e.key.toLowerCase().charCodeAt(0) - 97;
        const b = cur.el.querySelector(`.opt[data-i="${i}"]`); if (b) b.click();
      }
    };
    document.addEventListener('keydown', key); onCleanup(() => document.removeEventListener('keydown', key));
    next();
  }

  /* ---------- Student details ---------- */
  function detailsForm(year, s) {
    s = s || {};
    return `<div class="field"><label for="sName">Full name</label><input type="text" id="sName" value="${E(s.name || '')}" autocomplete="name" placeholder="First and last name"></div>
      <div class="field"><label for="sSchool">School</label><select id="sSchool"><option value="">Choose your school</option>${C.schools.map(x => `<option ${s.school === x ? 'selected' : ''}>${E(x)}</option>`).join('')}</select></div>
      <div class="field"><label for="sClass">Class</label><input type="text" id="sClass" value="${E(s.cls || '')}" placeholder="e.g. ${year}B"></div>`;
  }
  function readDetails(root) {
    const name = $('#sName', root).value.trim().replace(/\s+/g, ' ');
    const school = $('#sSchool', root).value;
    const cls = $('#sClass', root).value.trim().toUpperCase();
    if (name.length < 3 || !/\s/.test(name)) { ui.toast('Please enter your first and last name.'); return null; }
    if (!school) { ui.toast('Please choose your school.'); return null; }
    if (!cls) { ui.toast('Please enter your class.'); return null; }
    return { name, school, cls };
  }

  /* ---------- Mock exams ---------- */
  function pageMock(year, scope, ver) {
    const units = scopeUnits(year, scope);
    if (!units.length) return pageYear(year);
    let seedStr, id, vlabel;
    if (ver === 'r') { location.replace(`#/y${year}/mock/${scope}/r${CS.freshSeed().toString(36)}`); return; }
    if (/^r[0-9a-z]+$/.test(ver)) { id = `y${year}-${scope}-${ver}`; seedStr = id; vlabel = 'Random paper'; }
    else { const v = Math.max(1, Math.min(C.versions, +ver || 1)); id = `y${year}-${scope}-v${v}`; seedStr = id + '-2627'; vlabel = 'Version ' + v; }
    const title = scopeName(year, scope);
    const paper = CS.buildPaper({ id, units, seed: seedStr, title });
    const flat = []; paper.sections.forEach((s, si) => s.questions.forEach(q => flat.push({ q, si })));
    const saved = CS.load('active', null);
    const resume = saved && saved.id === id && !saved.done ? saved : null;

    main().innerHTML = `
      <div class="crumbs"><a href="#/y${year}">Year ${year}</a> › ${E(title)}</div>
      <section class="hero">
        <span class="kicker">${E(vlabel)} · 50 marks · about 50 minutes</span>
        <h1>${E(title)}</h1>
        <p>${units.map(u => `Unit ${u.num}: ${E(u.title)}`).join(' · ')}</p>
      </section>
      <div class="section grid grid-2">
        <div class="card">
          <h3>Paper layout</h3>
          <div class="bars">${paper.sections.map(s => `<div class="bar-row"><span>${E(s.sec.title.replace(/^Section /, ''))}</span><span class="muted small">${s.questions.length} question${s.questions.length > 1 ? 's' : ''}</span><b>${s.questions.reduce((a, q) => a + q.marks, 0)}</b></div>`).join('')}</div>
          <h3 style="margin-top:16px">Rules</h3>
          <ul class="rules muted small">
            <li>Pasting into answer boxes is turned off.</li>
            <li>Leaving this page (switching tabs or apps) is recorded.</li>
            <li>Each question must be on screen for a few seconds before you can move forward.</li>
            <li>Random typing, repeated words or lists of keywords score zero.</li>
            <li>Your result${C.sheetEndpoint ? ' is sent to your teacher when you submit' : ' is shown at the end'}.</li>
          </ul>
        </div>
        <div class="card">
          <h3>Your details</h3>
          <div class="muted small" style="margin-bottom:12px">${C.sheetEndpoint ? 'Your teacher sees these with your score.' : 'Shown on your results.'}</div>
          <div id="detailsBox">${detailsForm(year, CS.student.get())}</div>
          <button class="btn primary lg" id="startBtn" style="width:100%">${resume ? 'Resume paper' : 'Start paper'} →</button>
          ${resume ? `<button class="btn ghost sm" id="restartBtn" style="width:100%;margin-top:8px">Start again from the beginning</button>` : ''}
        </div>
      </div>`;
    const start = fresh => {
      const s = readDetails($('#detailsBox')); if (!s) return;
      CS.student.set(s);
      runExam(year, paper, flat, fresh ? null : resume, s, vlabel);
    };
    $('#startBtn').onclick = () => start(false);
    if (resume) $('#restartBtn').onclick = () => start(true);
  }

  function runExam(year, paper, flat, resume, student, vlabel) {
    const X = resume || { id: paper.id, answers: {}, first: {}, answeredAt: {}, flags: {}, cur: 0, started: Date.now(), tabs: 0, pastes: 0, bursts: 0, rushed: 0 };
    const persist = () => CS.save('active', X);
    persist();
    let lockTimer, clockTimer, lastAway = 0;

    const away = () => {
      if (Date.now() - lastAway < 1500) return;
      lastAway = Date.now(); X.tabs++; persist();
    };
    const vis = () => { if (document.hidden) away(); else if (X.tabs) showWarn(); };
    const blur = () => setTimeout(() => { if (!document.hasFocus()) away(); }, 50);
    const focus = () => { if (X.tabs) showWarn(); };
    document.addEventListener('visibilitychange', vis);
    window.addEventListener('blur', blur); window.addEventListener('focus', focus);
    ui.onPasteAttempt = () => { X.pastes++; persist(); };
    window.onbeforeunload = e => { e.preventDefault(); e.returnValue = ''; return ''; };
    onCleanup(() => {
      document.removeEventListener('visibilitychange', vis); window.removeEventListener('blur', blur); window.removeEventListener('focus', focus);
      clearInterval(lockTimer); clearInterval(clockTimer); window.onbeforeunload = null;
    });

    window.scrollTo(0, 0);
    main().innerHTML = `
      <div class="crumbs">${E(paper.title)} · ${E(vlabel)} · ${E(student.name)}</div>
      <div id="warn"></div>
      <div class="exam-layout">
        <aside class="exam-side card">
          <div class="row"><span class="muted small">Time</span><span class="timer" id="clock">00:00</span></div>
          <div id="nav"></div>
          <div class="small muted" style="margin-top:12px"><span class="kbd">■</span> answered · orange = flagged</div>
          <button class="btn good" id="submitBtn" style="width:100%;margin-top:14px">Finish and submit</button>
        </aside>
        <div id="examQ"></div>
      </div>`;

    function showWarn() {
      $('#warn').innerHTML = `<div class="warn-banner">⚠️ You have left this page <b>${X.tabs} time${X.tabs > 1 ? 's' : ''}</b>. This is recorded on your result.</div>`;
    }
    if (X.tabs) showWarn();

    const clock = () => {
      const s = Math.floor((Date.now() - X.started) / 1000);
      const c = $('#clock'); if (c) c.textContent = `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
    };
    clock(); clockTimer = setInterval(clock, 1000);

    function nav() {
      let h = ''; let lastSi = -1;
      flat.forEach((f, i) => {
        if (f.si !== lastSi) { if (lastSi !== -1) h += '</div>'; h += `<div class="sec-name">${E(paper.sections[f.si].sec.title.split('–')[0].trim())}</div><div class="navgrid">`; lastSi = f.si; }
        const a = X.answers[f.q.id];
        h += `<button class="navbtn ${ui.isStarted(f.q, a) ? 'ans' : ''} ${i === X.cur ? 'cur' : ''} ${X.flags[f.q.id] ? 'flag' : ''}" data-go="${i}" aria-label="Question ${i + 1}">${i + 1}</button>`;
      });
      $('#nav').innerHTML = h + '</div>';
    }
    $('#nav').addEventListener('click', e => { const b = e.target.closest('[data-go]'); if (b) go(+b.dataset.go); });

    function lockedLeft() {
      const f = flat[X.cur]; const first = X.first[f.q.id] || Date.now();
      if (X.first[f.q.id] && X.firstDone && X.firstDone[f.q.id]) return 0;
      return Math.ceil(ui.minSeconds(f.q) - (Date.now() - first) / 1000);
    }
    function go(i) {
      if (i < 0 || i >= flat.length || i === X.cur) return;
      if (i > X.cur && lockedLeft() > 0) return ui.toast(`Read this question properly first (${lockedLeft()}s).`);
      X.firstDone = X.firstDone || {}; if (lockedLeft() <= 0) X.firstDone[flat[X.cur].q.id] = true;
      X.cur = i; persist(); draw();
      const top = $('#examQ').getBoundingClientRect().top;
      if (top < 70 || top > window.innerHeight * 0.6) window.scrollTo({ top: window.scrollY + top - 90, behavior: 'smooth' });
    }

    function draw() {
      clearInterval(lockTimer);
      const f = flat[X.cur], q = f.q, sec = paper.sections[f.si].sec;
      if (!X.first[q.id]) { X.first[q.id] = Date.now(); persist(); }
      const a = (X.answers[q.id] = X.answers[q.id] || {});
      const firstInSec = flat.findIndex(x => x.si === f.si) === X.cur;
      $('#examQ').innerHTML = `
        <div class="sec-banner"><b>${E(sec.title)}</b> (${paper.sections[f.si].questions.reduce((s, x) => s + x.marks, 0)} marks)${firstInSec ? `<br>${E(sec.info)}` : ''}</div>
        ${ui.renderQ(q, { num: X.cur + 1, ans: a })}
        <div class="q-actions">
          <button class="btn" id="prevBtn" ${X.cur === 0 ? 'disabled' : ''}>← Previous</button>
          <button class="btn ghost sm" id="flagBtn">${X.flags[q.id] ? '🚩 Unflag' : '🏳️ Flag for review'}</button>
          <div class="spacer"></div>
          <span class="lock-note" id="lockNote"></span>
          ${X.cur < flat.length - 1 ? `<button class="btn primary" id="nextBtn">Next →</button>` : `<button class="btn good" id="endBtn">Finish and submit</button>`}
        </div>`;
      ui.bindQ($('#examQ'), q, a, (ans, meta) => {
        if (meta.kind === 'choice' && !X.answeredAt[q.id]) {
          X.answeredAt[q.id] = Date.now();
          if (Date.now() - X.first[q.id] < 2500) X.rushed++;
        }
        if (meta.burst) { X.bursts++; ui.toast('Large chunks of text appearing at once are recorded.'); }
        X.answers[q.id] = ans; persist(); nav();
      });
      $('#prevBtn').onclick = () => go(X.cur - 1);
      $('#flagBtn').onclick = () => { X.flags[q.id] = !X.flags[q.id]; persist(); draw(); };
      if ($('#nextBtn')) $('#nextBtn').onclick = () => go(X.cur + 1);
      if ($('#endBtn')) $('#endBtn').onclick = confirmSubmit;
      const tick = () => {
        const left = lockedLeft(); const b = $('#nextBtn') || $('#endBtn'); if (!b) return clearInterval(lockTimer);
        if (left > 0) { b.disabled = true; $('#lockNote').textContent = `Read carefully… ${left}s`; }
        else { b.disabled = false; $('#lockNote').textContent = ''; X.firstDone = X.firstDone || {}; X.firstDone[q.id] = true; clearInterval(lockTimer); }
      };
      tick(); lockTimer = setInterval(tick, 250);
      nav();
    }
    $('#submitBtn').onclick = confirmSubmit;

    function confirmSubmit() {
      const un = flat.filter(f => !ui.isAnswered(f.q, X.answers[f.q.id])).length;
      const fl = flat.filter(f => X.flags[f.q.id]).length;
      const mins = Math.round((Date.now() - X.started) / 60000);
      ui.modal(`<h2>Submit your paper?</h2>
        <p>${un ? `⚠️ <b>${un}</b> question${un > 1 ? 's are' : ' is'} not fully answered.` : '✅ All questions answered.'}${fl ? `<br>🚩 ${fl} flagged for review.` : ''}</p>
        ${mins < 10 ? `<p class="note">You have only spent ${mins} minute${mins === 1 ? '' : 's'}. Real exams take much longer – check your answers.</p>` : ''}
        <div class="row" style="justify-content:flex-end"><button class="btn" data-x>Keep working</button><button class="btn good" data-ok>Submit</button></div>`,
        (m, close) => { m.querySelector('[data-x]').onclick = close; m.querySelector('[data-ok]').onclick = () => { close(); finish(); }; });
    }

    function finish() {
      const results = flat.map(f => ({ f, r: CS.mark(f.q, X.answers[f.q.id] || {}) }));
      const score = results.reduce((s, x) => s + x.r.score, 0);
      const total = results.reduce((s, x) => s + x.r.max, 0);
      const secs = paper.sections.map((s, si) => {
        const rs = results.filter(x => x.f.si === si);
        return { key: s.sec.key, title: s.sec.title, score: rs.reduce((a, x) => a + x.r.score, 0), max: rs.reduce((a, x) => a + x.r.max, 0) };
      });
      const timeMin = Math.round((Date.now() - X.started) / 6000) / 10;
      const unanswered = flat.filter(f => !ui.isStarted(f.q, X.answers[f.q.id])).length;
      const nonsense = results.filter(x => x.r.detail && x.r.detail.flag && x.r.detail.flag !== 'blank').length;
      X.done = true; CS.save('active', null);
      CS.progress.record(paper.id, score, total);
      const xp = Math.round(score * 2); CS.progress.addXP(xp);
      results.forEach(x => { if (x.r.score < x.r.max && ui.isStarted(x.f.q, X.answers[x.f.q.id])) CS.mistakes.add(x.f.q); });
      const payload = {
        name: student.name, school: student.school, cls: student.cls, year,
        paper: paper.title, version: vlabel, paperId: paper.id,
        score, total, percent: Math.round((score / total) * 100),
        timeMinutes: timeMin, tabSwitches: X.tabs, pasteAttempts: X.pastes + X.bursts, rushedAnswers: X.rushed,
        unanswered, nonsenseAnswers: nonsense,
        sections: secs.map(s => `${s.key}:${s.score}/${s.max}`).join(' ')
      };
      cleanup.forEach(f => { try { f(); } catch (e) { /* ignore */ } }); cleanup = [];
      ui.onPasteAttempt = null;
      header(year);
      showResults(year, paper, results, payload, secs, X);
      if (payload.percent >= 50) CS.art.confetti(80);
      sendResult(payload);
    }
    draw();
  }

  function band(p) { return p >= 85 ? 'Outstanding 🌟' : p >= 70 ? 'Secure 👍' : p >= 50 ? 'Developing 📈' : 'Needs more practice 💪'; }

  function showResults(year, paper, results, P, secs, X) {
    const scope = paper.id.split('-')[1];
    main().innerHTML = `
      <div class="crumbs"><a href="#/y${year}">Year ${year}</a> › Results</div>
      <div class="card score-hero">
        <div class="res-art">${CS.art.bit(P.percent >= 70 ? 'cool' : P.percent >= 50 ? 'happy' : 'think', 90)}</div>
        <div class="ring" style="--p:${P.percent}"><div><div><b>${P.score}</b><div class="muted small">out of ${P.total}</div></div></div></div>
        <div>
          <div class="muted small">${E(P.paper)} · ${E(P.version)} · ${E(P.name)} (${E(P.cls)}, ${E(P.school)})</div>
          <div class="pixel-label">${P.percent >= 50 ? 'MISSION COMPLETE' : 'MISSION LOGGED'}</div>
          <h1 style="margin:6px 0">${P.percent}%</h1>
          <span class="band">${band(P.percent)}</span>
          <div id="sendStatus" class="small muted" style="margin-top:10px"></div>
          <div class="row" style="margin-top:14px">
            <a class="btn primary" href="#/y${year}/mock/${scope}/r">Try a new paper</a>
            <a class="btn" href="#/y${year}/mistakes">Revisit mistakes</a>
            <a class="btn ghost" href="#/y${year}">Back to Year ${year}</a>
          </div>
        </div>
      </div>
      <div class="section grid grid-2">
        <div class="card"><h3>Marks by section</h3><div class="bars">${secs.map(s => `<div class="bar-row"><span class="small">${E(s.title.split('–')[1] || s.title)}</span><div class="bar"><i style="width:${s.max ? (s.score / s.max) * 100 : 0}%"></i></div><b class="small">${s.score}/${s.max}</b></div>`).join('')}</div></div>
        <div class="card"><h3>How you took the test</h3>
          <div class="integrity" style="margin-top:10px">
            <div class="stat">⏱️ ${P.timeMinutes} min</div>
            <div class="stat ${P.tabSwitches ? 'warn' : ''}">↗️ Left page: ${P.tabSwitches}</div>
            <div class="stat ${P.pasteAttempts ? 'warn' : ''}">📋 Paste attempts: ${P.pasteAttempts}</div>
            <div class="stat ${P.rushedAnswers > 2 ? 'warn' : ''}">⚡ Rushed answers: ${P.rushedAnswers}</div>
            <div class="stat ${P.unanswered ? 'warn' : ''}">⬜ Unanswered: ${P.unanswered}</div>
          </div>
          <p class="small muted" style="margin-bottom:0">Rushed = answered in under 2.5 seconds, before the question could be read.</p>
        </div>
      </div>
      <div class="section">
        <div class="section-head"><h2>Review your answers</h2><div class="row"><button class="btn sm" id="onlyWrong">Show only lost marks</button></div></div>
        <div id="review" class="grid" style="gap:14px">${results.map((x, i) => `<div data-full="${x.r.score === x.r.max}">${ui.renderQ(x.f.q, { num: i + 1, ans: X.answers[x.f.q.id] || {}, review: x.r })}</div>`).join('')}</div>
      </div>`;
    let only = false;
    $('#onlyWrong').onclick = () => {
      only = !only;
      document.querySelectorAll('#review [data-full="true"]').forEach(d => d.classList.toggle('hidden', only));
      $('#onlyWrong').textContent = only ? 'Show all questions' : 'Show only lost marks';
    };
  }

  function sendResult(P) {
    const el = () => $('#sendStatus');
    if (!C.sheetEndpoint) return;
    el() && (el().textContent = 'Sending your result to your teacher…');
    fetch(C.sheetEndpoint, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(P) })
      .then(() => { el() && (el().innerHTML = '✅ Result sent to your teacher.'); })
      .catch(() => {
        const q = CS.load('unsent', []); q.push(P); CS.save('unsent', q);
        el() && (el().innerHTML = '⚠️ Could not send (no internet?). It will be sent automatically next time you open the site.');
      });
  }
  function retryUnsent() {
    const q = CS.load('unsent', []); if (!q.length || !C.sheetEndpoint) return;
    CS.save('unsent', []);
    q.forEach(P => fetch(C.sheetEndpoint, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(P) })
      .catch(() => { const r = CS.load('unsent', []); r.push(P); CS.save('unsent', r); }));
  }

  /* ---------- Flashcards ---------- */
  function pageFlash(year, num) {
    const units = num ? [CS.getUnit(`y${year}u${num}`)].filter(Boolean) : unitsOf(year);
    const rng = CS.rng(CS.freshSeed());
    let deck = rng.shuffle(units.flatMap(u => u.vocab.map(v => ({ t: v[0], d: v[1], u: u.title }))));
    let i = 0, reverse = false, known = 0; const learning = [];
    main().innerHTML = `
      <div class="crumbs"><a href="#/y${year}">Year ${year}</a> › Flashcards</div>
      <div class="flash-wrap">
        <h1 style="font-size:1.6rem">🃏 ${num && units[0] ? E(units[0].title) : 'All Year ' + year} flashcards</h1>
        <div class="row"><span class="stat">Card <b id="fN"></b></span><span class="stat">Known <b id="fK">0</b></span><div class="spacer"></div>
          <button class="btn sm" id="fRev">⇄ Show definition first</button></div>
        <div class="flash" id="card" tabindex="0" aria-live="polite"><div class="flash-inner">
          <div class="flash-face flash-front"><div><div id="fFront"></div></div><div class="flash-hint">Tap or press space to flip</div></div>
          <div class="flash-face flash-back"><div><div id="fBack"></div><div class="small muted" id="fUnit" style="margin-top:12px"></div></div></div>
        </div></div>
        <div class="row" style="justify-content:center">
          <button class="btn lg" id="fLearn">😕 Still learning</button>
          <button class="btn good lg" id="fKnow">😎 Knew it</button>
        </div>
        <p class="small muted" style="text-align:center;margin-top:16px">Keyboard: <span class="kbd">space</span> flip · <span class="kbd">←</span> still learning · <span class="kbd">→</span> knew it</p>
      </div>`;
    const card = $('#card');
    function show() {
      if (i >= deck.length) {
        if (learning.length) { deck = rng.shuffle(learning.splice(0)); i = 0; ui.toast('Round done – now the ones you are still learning.'); }
        else {
          $('.flash-wrap').innerHTML = `<div class="card empty"><div style="font-size:2.5rem">🏆</div><h2>Deck complete!</h2><p>You know all ${known} terms. Now test yourself.</p>
            <div class="row" style="justify-content:center"><a class="btn primary" href="#/y${year}/practice${num ? '?units=' + num + '&types=match,cloze,mcq' : ''}">Practise now</a><button class="btn" onclick="location.reload()">Go again</button></div></div>`;
          return;
        }
      }
      const c = deck[i];
      card.classList.remove('flipped');
      $('#fFront').textContent = reverse ? c.d : c.t;
      $('#fFront').style.fontSize = reverse ? '1.2rem' : '';
      $('#fBack').textContent = reverse ? c.t : c.d;
      $('#fUnit').textContent = c.u;
      $('#fN').textContent = `${i + 1}/${deck.length}`;
      $('#fK').textContent = known;
    }
    card.onclick = () => card.classList.toggle('flipped');
    $('#fKnow').onclick = () => { known++; CS.progress.addXP(1); i++; show(); };
    $('#fLearn').onclick = () => { learning.push(deck[i]); i++; show(); };
    $('#fRev').onclick = () => { reverse = !reverse; $('#fRev').textContent = reverse ? '⇄ Show term first' : '⇄ Show definition first'; show(); };
    const key = e => {
      if (e.key === ' ') { e.preventDefault(); card.classList.toggle('flipped'); }
      if (e.key === 'ArrowRight') $('#fKnow') && $('#fKnow').click();
      if (e.key === 'ArrowLeft') $('#fLearn') && $('#fLearn').click();
    };
    document.addEventListener('keydown', key); onCleanup(() => document.removeEventListener('keydown', key));
    show();
  }

  /* ---------- Boot ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    const bm = $('.brand-mark'); if (bm) bm.outerHTML = CS.art.logo(40);
    $('#themeBtn').onclick = () => applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    applyTheme(CS.load('theme', 'light'));
    retryUnsent();
    route();
  });
})();
