/* Student accounts: login, progress sync and sign-out.
   Talks to the Google Apps Script back end (teacher/backend.gs) at CS.config.backendUrl.
   backendUrl 'demo' uses the in-browser demo back end (assets/js/demo-backend.js) with made-up students. */
(function () {
  'use strict';
  const CS = window.CS, C = CS.config;
  const acc = (CS.account = {});
  const LS = 'mrsharif-cs:';
  const remove = k => { try { localStorage.removeItem(LS + k); } catch (e) { /* ignore */ } };

  acc.enabled = () => !!C.backendUrl;
  acc.required = () => acc.enabled() && C.requireLogin !== false;
  acc.session = () => CS.load('session', null);
  acc.user = () => (acc.enabled() && (acc.session() || {}).user) || null;
  acc.displayName = u => (u ? u.first + (u.last ? ' ' + u.last : '') : '');

  acc.api = async function (action, data, opts) {
    const req = Object.assign({ action }, data || {});
    if (C.backendUrl === 'demo') return CS.demoBackend(JSON.parse(JSON.stringify(req)));
    const r = await fetch(C.backendUrl, Object.assign({ method: 'POST', body: JSON.stringify(req), redirect: 'follow' }, opts || {}));
    return r.json();
  };

  // Replace this device's progress with the student's saved progress
  function loadInto(progress, mistakes) {
    quiet = true;
    if (progress) CS.save('progress', progress); else remove('progress');
    CS.save('mistakes', mistakes || []);
    remove('active');
    quiet = false;
    CS.save('dirty', false);
  }

  acc.login = async function (u, pin) {
    const r = await acc.api('login', { u, pin });
    if (!r.ok) throw new Error(r.error || 'Login failed.');
    CS.save('session', { token: r.token, user: r.user, at: Date.now() });
    loadInto(r.progress, r.mistakes);
    return r.user;
  };

  acc.logout = async function () {
    try { await acc.flush(); } catch (e) { /* still log out */ }
    remove('session'); remove('progress'); remove('mistakes'); remove('active'); remove('student'); remove('dirty');
  };

  // On page load: push unsynced work, otherwise pull the latest copy (e.g. from another device)
  acc.refresh = async function () {
    if (!acc.session()) return;
    try {
      if (CS.load('dirty', false)) return void (await acc.flush());
      const r = await acc.api('me', { token: acc.session().token });
      if (!r.ok) return expired(r.error);
      const s = acc.session(); s.user = r.user; CS.save('session', s);
      loadInto(r.progress, r.mistakes);
      if (acc.onChange) acc.onChange();
    } catch (e) { /* offline – keep local copy */ }
  };

  /* ---------- Sync (batched so a class of 30 doesn't overload the back end) ---------- */
  let quiet = false, timer = null;
  const origSave = CS.save;
  CS.save = function (k, v) {
    origSave(k, v);
    if (!quiet && (k === 'progress' || k === 'mistakes') && acc.session()) { origSave('dirty', true); acc.scheduleSync(); }
  };
  acc.scheduleSync = function (ms) {
    if (timer) return;
    timer = setTimeout(() => { timer = null; acc.flush(); }, ms || C.syncEverySeconds * 1000 || 20000);
  };
  function summary() {
    const p = CS.progress.get();
    const units = Object.values(p.units || {});
    const best = Object.values(p.best || {});
    return {
      xp: p.xp || 0, level: CS.progress.level(p.xp), answered: units.reduce((s, u) => s + u.n, 0), correct: units.reduce((s, u) => s + u.c, 0),
      mocks: (p.history || []).length, bestMock: best.length ? Math.max(...best) : null
    };
  }
  acc.flush = async function (opts) {
    if (timer) { clearTimeout(timer); timer = null; }
    const s = acc.session();
    if (!s || !CS.load('dirty', false)) return;
    const body = { token: s.token, progress: CS.progress.get(), mistakes: CS.mistakes.all(), summary: summary() };
    try {
      const r = await acc.api('sync', body, opts);
      if (r && r.ok) CS.save('dirty', false);
      else if (r) expired(r.error);
    } catch (e) { /* offline – try again later */ acc.scheduleSync(60000); }
  };
  document.addEventListener('visibilitychange', () => { if (document.hidden) acc.flush({ keepalive: true }); });

  function expired(msg) {
    if (!/log in/i.test(msg || '')) return;
    remove('session');
    if (acc.onExpired) acc.onExpired(msg);
  }

  acc.sendResult = async function (payload) {
    const s = acc.session(); if (!s) return false;
    const r = await acc.api('result', { token: s.token, result: payload });
    if (!r.ok) { expired(r.error); throw new Error(r.error); }
    return true;
  };
})();
