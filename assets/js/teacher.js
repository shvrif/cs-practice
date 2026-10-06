/* Teacher tools: printable papers, mark schemes and assignment links */
(function () {
  'use strict';
  const CS = window.CS, C = CS.config, E = CS.esc, F = CS.fmt;
  const $ = s => document.querySelector(s);
  const LET = 'ABCDEFGH';

  function unlock() {
    const code = $('#code').value.trim();
    if (CS.hash(code) !== C.teacherCodeHash) { $('#codeMsg').textContent = 'Incorrect passcode.'; return; }
    try { sessionStorage.setItem('mrsharif-teacher', '1'); sessionStorage.setItem('mrsharif-teacher-key', code); } catch (e) { /* ignore */ }
    show();
  }
  function show() {
    $('#gate').classList.add('hidden');
    $('#tools').classList.remove('hidden');
    fillScopes();
    loadDash();
  }

  /* ---------- Class dashboard (needs student logins – teacher/backend.gs) ---------- */
  let dash = null, sortKey = 'cls', sortDir = 1;
  async function loadDash() {
    const box = $('#dash');
    if (!C.backendUrl) {
      box.innerHTML = `<div class="card"><h3>📊 Class dashboard</h3><p class="muted">Student logins aren't switched on yet. Follow <b>teacher/SETUP-LOGINS.md</b>, then paste the web app URL into <code>backendUrl</code> in <code>assets/js/config.js</code>.<br>
        Want a preview first? <a href="?demo=1">Open the dashboard in demo mode</a> (made-up students).</p></div>`;
      return;
    }
    box.innerHTML = `<div class="card"><h3>📊 Class dashboard</h3><p class="muted">Loading your students…</p></div>`;
    let key = ''; try { key = sessionStorage.getItem('mrsharif-teacher-key') || ''; } catch (e) { /* ignore */ }
    try {
      const r = await CS.account.api('teacher', { key });
      if (!r.ok) throw new Error(r.error);
      dash = r.students.map(row);
      renderDash(r.demo);
    } catch (err) {
      box.innerHTML = `<div class="card"><h3>📊 Class dashboard</h3><p class="note">Could not load students: ${E(err.message || err)}</p>
        <p class="small muted">Check the TEACHER_KEY script property matches your teacher passcode, and that the web app is deployed with access "Anyone".</p></div>`;
    }
  }
  function row(s) {
    const p = s.progress || {}, u = s.user;
    const units = Object.entries(p.units || {}).filter(([k]) => k.startsWith('y' + u.year));
    const n = units.reduce((a, [, x]) => a + x.n, 0), c = units.reduce((a, [, x]) => a + x.c, 0);
    const js = u.year ? CS.journey.status(u.year, { units: p.units || {}, recent: p.recent || {} }, s.mistakes) : null;
    const best = Object.values(p.best || {});
    const active = s.lastActive ? new Date(s.lastActive) : null;
    const status = !n ? 'none' : js && js.stage === 'struggling' ? 'struggling' : js && js.stage === 'ready' ? 'ready' : 'practising';
    return { s, u, name: u.first + ' ' + u.last, cls: u.cls, year: u.year, xp: p.xp || 0, level: CS.progress.level(p.xp || 0), n, c,
      acc: n ? c / n : null, ready: js ? js.pct : 0, exam: js ? js.exam.short : '', mocks: (p.history || []).length,
      best: best.length ? Math.max(...best) : null, mistakes: s.mistakes || 0, active, status, js, p };
  }
  const STATUS = { none: ['⚪', 'Not started'], struggling: ['🔴', 'Struggling'], practising: ['🟡', 'Practising'], ready: ['🟢', 'Mock ready'] };
  const ago = d => { if (!d) return 'never'; const days = Math.floor((Date.now() - d) / 864e5); return days <= 0 ? 'today' : days === 1 ? 'yesterday' : days + ' days ago'; };
  function renderDash(demo) {
    const box = $('#dash');
    const classes = [...new Set(dash.map(r => r.cls))].sort();
    const sel = (() => { try { return sessionStorage.getItem('mrsharif-dash-class') || 'all'; } catch (e) { return 'all'; } })();
    const list = dash.filter(r => sel === 'all' || r.cls === sel || ('Y' + r.year) === sel);
    const week = list.filter(r => r.active && Date.now() - r.active < 7 * 864e5).length;
    const avg = list.length ? Math.round(list.reduce((a, r) => a + r.ready, 0) / list.length) : 0;
    const cnt = k => list.filter(r => r.status === k).length;
    const sorted = list.slice().sort((a, b) => {
      const va = a[sortKey], vb = b[sortKey];
      if (va == null && vb == null) return 0; if (va == null) return 1; if (vb == null) return -1;
      return (va > vb ? 1 : va < vb ? -1 : a.name.localeCompare(b.name)) * sortDir;
    });
    const th = (k, label) => `<th data-sort="${k}" class="${sortKey === k ? 'sorted' : ''}">${label}${sortKey === k ? (sortDir > 0 ? ' ▲' : ' ▼') : ''}</th>`;
    box.innerHTML = `<div class="card">
      <div class="row" style="justify-content:space-between"><h3 style="margin:0">📊 Class dashboard ${demo ? '<span class="tag">Demo data</span>' : ''}</h3>
        <div class="row"><select id="dashClass" aria-label="Filter by class" style="width:auto"><option value="all">All classes</option>
          ${[7, 8, 9].map(y => `<option value="Y${y}" ${sel === 'Y' + y ? 'selected' : ''}>All Year ${y}</option>`).join('')}
          ${classes.map(c => `<option ${sel === c ? 'selected' : ''}>${E(c)}</option>`).join('')}</select>
          <button class="btn sm" id="dashReload">↻ Refresh</button></div></div>
      <div class="dash-tiles">
        <div><b>${list.length}</b><span>students</span></div>
        <div><b>${week}</b><span>active this week</span></div>
        <div><b>${avg}%</b><span>avg. readiness for next exam</span></div>
        <div class="t-good"><b>${cnt('ready')}</b><span>🟢 mock ready</span></div>
        <div class="t-bad"><b>${cnt('struggling')}</b><span>🔴 struggling</span></div>
        <div><b>${cnt('none')}</b><span>⚪ not started</span></div>
      </div>
      <div class="table-wrap"><table class="dash-table">
        <tr>${th('name', 'Student')}${th('cls', 'Class')}${th('status', 'Status')}${th('ready', 'Readiness')}${th('n', 'Questions')}${th('acc', 'Accuracy')}${th('mocks', 'Mocks')}${th('best', 'Best mock')}${th('mistakes', 'Mistakes')}${th('xp', 'XP')}${th('active', 'Last active')}</tr>
        ${sorted.map((r, i) => `<tr data-i="${dash.indexOf(r)}" tabindex="0">
          <td><b>${E(r.name)}</b><div class="small muted">${E(r.u.u)}</div></td><td>${E(r.cls)}</td>
          <td><span class="pill ${r.status}">${STATUS[r.status][0]} ${STATUS[r.status][1]}</span></td>
          <td><div class="mini"><i style="width:${r.ready}%"></i></div><small>${r.ready}% · ${E(r.exam)}</small></td>
          <td>${r.n}</td><td>${r.acc == null ? '–' : Math.round(r.acc * 100) + '%'}</td><td>${r.mocks}</td><td>${r.best == null ? '–' : r.best + '%'}</td>
          <td>${r.mistakes}</td><td>${r.xp}</td><td>${ago(r.active)}</td></tr>`).join('')}
      </table></div>
      <p class="small muted">Click a student for unit-by-unit detail. 🔴 = under ${Math.round(C.journey.struggleAccuracy * 100)}% on their last 20 answers · 🟢 = ${C.journey.readyCorrect}+ correct on the next exam's units and ${Math.round(C.journey.readyAccuracy * 100)}%+ accuracy.</p>
    </div>`;
    $('#dashClass').onchange = e => { try { sessionStorage.setItem('mrsharif-dash-class', e.target.value); } catch (x) { /* ignore */ } renderDash(demo); };
    $('#dashReload').onclick = loadDash;
    box.querySelectorAll('th[data-sort]').forEach(t => (t.onclick = () => { const k = t.dataset.sort; sortDir = sortKey === k ? -sortDir : (k === 'name' || k === 'cls' ? 1 : -1); sortKey = k; renderDash(demo); }));
    box.querySelectorAll('tr[data-i]').forEach(t => { t.onclick = () => detail(dash[+t.dataset.i]); t.onkeydown = e => { if (e.key === 'Enter') detail(dash[+t.dataset.i]); }; });
  }
  function detail(r) {
    const units = CS.unitsFor(r.year).map(u => {
      const x = (r.p.units || {})[u.key]; const pct = x && x.n ? Math.round((x.c / x.n) * 100) : null;
      return `<tr><td>${E(u.num + '. ' + u.title)}</td><td>${x ? x.c + '/' + x.n : '–'}</td><td><div class="mini ${pct == null ? '' : pct >= 70 ? 'g' : pct >= 50 ? 'a' : 'r'}"><i style="width:${pct || 0}%"></i></div></td><td>${pct == null ? '–' : pct + '%'}</td></tr>`;
    }).join('');
    const hist = (r.p.history || []).map(h => `<tr><td>${new Date(h.at).toLocaleDateString('en-GB')}</td><td>${E(h.id)}</td><td>${h.score}/${h.max}</td></tr>`).join('');
    const back = document.createElement('div');
    back.className = 'modal-back';
    back.innerHTML = `<div class="modal" style="max-width:640px"><div class="row" style="justify-content:space-between"><h2 style="margin:0">${E(r.name)}</h2><button class="btn sm" data-x>Close</button></div>
      <p class="muted">${E(r.cls)} · ${E(r.u.u)} · Level ${r.level} · ${r.xp} XP · last active ${ago(r.active)}</p>
      <p><span class="pill ${r.status}">${STATUS[r.status][0]} ${STATUS[r.status][1]}</span> ${r.js && r.js.weak && r.n ? `Weakest unit: <b>${E(r.js.weak.title)}</b>` : ''}</p>
      <h3>Units</h3><div class="table-wrap"><table class="dash-table">${units}</table></div>
      <h3 style="margin-top:14px">Mock exams</h3>${hist ? `<div class="table-wrap"><table class="dash-table">${hist}</table></div>` : '<p class="muted">No mocks yet.</p>'}</div>`;
    document.body.appendChild(back);
    back.addEventListener('click', e => { if (e.target === back || e.target.closest('[data-x]')) back.remove(); });
  }

  function fillScopes() {
    const y = +$('#year').value;
    document.body.dataset.year = y;
    const opts = C.assessments[y].map(a => `<option value="${a.id}">${E(a.name)} (Units ${a.units.join(', ')})</option>`)
      .concat(CS.unitsFor(y).map(u => `<option value="u${u.num}">Unit ${u.num} test – ${E(u.title)}</option>`));
    $('#scope').innerHTML = opts.join('');
    render();
  }

  function scopeUnits(y, s) {
    if (/^u\d+$/.test(s)) return [CS.getUnit('y' + y + s)];
    return C.assessments[y].find(a => a.id === s).units.map(n => CS.getUnit('y' + y + 'u' + n));
  }
  function scopeName(y, s) {
    if (/^u\d+$/.test(s)) { const u = CS.getUnit('y' + y + s); return `Unit ${u.num} Test – ${u.title}`; }
    return C.assessments[y].find(a => a.id === s).name + ' Mock';
  }

  function render() {
    const y = +$('#year').value, s = $('#scope').value, v = $('#ver').value;
    const id = `y${y}-${s}-v${v}`;
    const paper = CS.buildPaper({ id, units: scopeUnits(y, s), seed: id + '-2627', title: scopeName(y, s) });
    const link = location.href.replace(/teacher\.html.*$/, '') + `#/y${y}/mock/${s}/${v}`;
    $('#link').value = link;
    $('#paper').innerHTML = paperHTML(paper, y, v) + ($('#withScheme').checked ? schemeHTML(paper, y, v) : '');
  }

  function paperHTML(p, y, v) {
    let n = 0;
    return `<article class="print-paper">
      <header class="pp-head">
        <div><b>Ta'allum Computer Science · Year ${y}</b><h1>${E(p.title)}</h1><div>Version ${v} · Total: 50 marks · Time: 50 minutes</div></div>
        <table class="pp-name"><tr><td>Name</td><td></td></tr><tr><td>Class</td><td></td></tr><tr><td>Date</td><td></td></tr><tr><td>Mark</td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / 50</td></tr></table>
      </header>
      ${p.sections.map(sec => `<section class="pp-sec"><h2>${E(sec.sec.title)} <span>[${sec.questions.reduce((a, q) => a + q.marks, 0)} marks]</span></h2><p class="pp-info">${E(sec.sec.info)}</p>
        ${sec.questions.map(q => qHTML(q, ++n)).join('')}</section>`).join('')}
    </article>`;
  }

  function qHTML(q, n) {
    let h = `<div class="pp-q"><div class="pp-qh"><b>${n}.</b> <span>${q.type === 'cloze' ? 'Complete the passage using words from the word bank.' : q.type === 'match' ? 'Match each key term to its definition. Write the letter in the box. Each letter is used once.' : q.type === 'tf' ? 'True or false? ' + F(q.q) : F(q.q)}</span><span class="pp-m">[${q.marks}]</span></div>`;
    if (q.code) h += `<pre class="code">${E(q.code)}</pre>`;
    if (q.type === 'mcq') h += `<ol class="pp-opts">${q.options.map((o, i) => `<li><span class="box"></span> <b>${LET[i]}</b> ${F(o)}</li>`).join('')}</ol>`;
    if (q.type === 'tf') h += `<div class="pp-tf"><span class="box"></span> True &nbsp;&nbsp;&nbsp; <span class="box"></span> False</div>`;
    if (q.justify) h += `<div class="pp-why">${E(q.justify.prompt)} [1]</div>${lines(2)}`;
    if (q.type === 'cloze') h += `<div class="pp-bank">${q.bank.map(E).join(' &nbsp;·&nbsp; ')}</div><p class="pp-cloze">${q.parts.map(p => typeof p === 'string' ? F(p) : `<span class="gap">(${p.b + 1})&nbsp;</span>`).join('')}</p>`;
    if (q.type === 'match') h += `<table class="pp-match"><tr><td>${q.pairs.map(p => `<div><span class="box wide"></span> ${E(p.term)}</div>`).join('')}</td><td>${q.defs.map(d => `<div><b>${d.letter}</b> ${E(d.text)}</div>`).join('')}</td></tr></table>`;
    if (q.type === 'short') h += lines(q.exact ? 2 : Math.max(2, q.marks + 1));
    if (q.type === 'long') h += lines(12);
    return h + '</div>';
  }
  const lines = n => `<div class="pp-lines">${'<div></div>'.repeat(n)}</div>`;

  function schemeHTML(p, y, v) {
    let n = 0;
    const rows = p.sections.flatMap(sec => sec.questions.map(q => {
      n++;
      let a = '';
      if (q.type === 'mcq') a = `<b>${LET[q.answer]}</b> – ${F(q.options[q.answer])}`;
      if (q.type === 'tf') a = `<b>${q.answer ? 'TRUE' : 'FALSE'}</b>${q.explain ? ' – ' + F(q.explain) : ''}`;
      if (q.justify) a += `<br><i>Explanation mark (only with the correct answer), any one of:</i> ${q.justify.pts.map(p => E(p.d)).join('; ')}`;
      if (q.type === 'cloze') a = q.blanks.map((b, i) => `(${i + 1}) <b>${E(b.accept.join(' / '))}</b>`).join(' &nbsp; ');
      if (q.type === 'match') a = q.pairs.map(p => `${E(p.term)} → <b>${p.letter}</b>`).join(' &nbsp; ');
      if (q.type === 'short' || q.type === 'long') {
        if (q.exact) a = `<b>${E(q.exact[0])}</b>${q.model ? ' – ' + F(q.model) : ''}`;
        else a = `<i>1 mark each, max ${q.marks}:</i><ul>${q.pts.map(p => `<li>${F(p.d)}</li>`).join('')}</ul><div class="pp-model"><i>Model answer:</i> ${F(q.model || '')}</div>`;
      }
      return `<tr><td>${n}</td><td>${a}</td><td>${q.marks}</td></tr>`;
    }));
    return `<article class="print-paper pp-scheme"><header class="pp-head"><div><b>MARK SCHEME – Year ${y}</b><h1>${E(p.title)}</h1><div>Version ${v}</div></div></header>
      <table class="pp-ms"><tr><th>Q</th><th>Answer / mark points</th><th>Marks</th></tr>${rows.join('')}</table></article>`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const bm = $('.brand-mark'); if (bm && CS.art) bm.outerHTML = CS.art.logo(40);
    let ok = false; try { ok = sessionStorage.getItem('mrsharif-teacher') === '1'; } catch (e) { /* ignore */ }
    $('#year').innerHTML = [7, 8, 9].map(y => `<option value="${y}">Year ${y}</option>`).join('');
    $('#ver').innerHTML = Array.from({ length: C.versions }, (_, i) => `<option>${i + 1}</option>`).join('');
    $('#unlockBtn').onclick = unlock;
    $('#code').addEventListener('keydown', e => { if (e.key === 'Enter') unlock(); });
    $('#year').onchange = fillScopes;
    $('#scope').onchange = render; $('#ver').onchange = render; $('#withScheme').onchange = render;
    $('#printBtn').onclick = () => window.print();
    $('#copyBtn').onclick = () => { $('#link').select(); try { navigator.clipboard.writeText($('#link').value); } catch (e) { document.execCommand('copy'); } $('#copyBtn').textContent = 'Copied ✓'; setTimeout(() => ($('#copyBtn').textContent = 'Copy link'), 1500); };
    $('#hashBtn').onclick = () => { const v = $('#newCode').value.trim(); $('#hashOut').textContent = v ? `teacherCodeHash: ${CS.hash(v)},` : ''; };
    if (ok) show();
  });
})();
