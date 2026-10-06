/* Demo back end – behaves like teacher/backend.gs but runs in the browser with MADE-UP students.
   Used when backendUrl is 'demo' (or the page is opened with ?demo=1). No real student data is ever here.
   Demo logins: DEMO7 / 1234 (Year 7), DEMO8 / 1234 (Year 8), DEMO9 / 1234 (Year 9). Teacher key: your teacher passcode. */
(function () {
  'use strict';
  const CS = window.CS;
  const KEY = 'demo-db';
  const FIRST = ['Ali', 'Omar', 'Yusuf', 'Hamad', 'Khalid', 'Saad', 'Faisal', 'Jassim', 'Abdulla', 'Nasser', 'Tamim', 'Rashid', 'Salem', 'Majed', 'Fahad', 'Ahmed', 'Mohammed', 'Ibrahim', 'Hassan', 'Zayed'];
  const LAST = ['Demo', 'Example', 'Sample', 'Test', 'Placeholder'];

  function seed() {
    const rng = CS.rng('demo-seed');
    const db = { students: {}, results: [] };
    const add = (u, first, last, cls, year, pin) => (db.students[u] = { u, first, last, cls, year, pin, progress: null, mistakes: [], lastLogin: '', lastActive: '' });
    add('DEMO7', 'Demo', 'Student', '7A', 7, '1234');
    add('DEMO8', 'Demo', 'Student', '8B', 8, '1234');
    add('DEMO9', 'Demo', 'Student', '9C', 9, '1234');
    // made-up classmates with varied progress so the teacher dashboard has something to show
    let n = 1;
    [['7A', 7], ['7B', 7], ['8B', 8], ['9C', 9]].forEach(([cls, year]) => {
      for (let i = 0; i < 7; i++) {
        const u = 'DEMO' + year + String(n++).padStart(3, '0');
        const s = add(u, rng.pick(FIRST), rng.pick(LAST), cls, year, '0000');
        const kind = rng.int(0, 4);              // 0 = not started … 4 = flying
        if (kind === 0) continue;
        const units = {};
        const exam = CS.journey.nextExam(year);
        CS.unitsFor(year).forEach(u2 => {
          if (rng() < (exam.units.includes(u2.num) ? 0.95 : 0.35)) {
            const tries = rng.int(3, 8 * kind + 6);
            const acc = [0, 0.38, 0.6, 0.74, 0.88][kind] + (rng() - 0.5) * 0.15;
            units[u2.key] = { n: tries, c: Math.max(0, Math.min(tries, Math.round(tries * acc))) };
          }
        });
        const recent = Array.from({ length: 20 }, () => (rng() < [0, 0.38, 0.6, 0.74, 0.88][kind] ? 1 : 0));
        const xp = Object.values(units).reduce((a, x) => a + x.c * 10 - (x.n - x.c) * 3, 0);
        const days = []; for (let d = 0; d < 28; d++) if (rng() < kind * 0.15) days.push(new Date(Date.now() - d * 864e5).toISOString().slice(0, 10));
        const history = [], best = {};
        for (let m = 0; m < kind - 1; m++) {
          const id = `y${year}-${exam.id}-v${m + 1}`; const sc = Math.round(50 * Math.min(0.98, [0, 0.3, 0.5, 0.68, 0.84][kind] + (rng() - 0.5) * 0.2));
          history.push({ id, score: sc, max: 50, at: Date.now() - rng.int(1, 9) * 864e5 }); best[id] = Math.round(sc * 2);
        }
        s.progress = { xp: Math.max(0, xp), answered: 0, correct: 0, days, best, history, units, recent: { ['y' + year]: recent } };
        s.mistakesCount = rng.int(0, 6 - kind) * 3;
        s.lastLogin = s.lastActive = new Date(Date.now() - rng.int(0, kind > 2 ? 3 : 12) * 864e5).toISOString();
      }
    });
    return db;
  }
  const load = () => CS.load(KEY, null) || seed();
  const store = db => CS.save(KEY, db);
  const userOf = s => ({ u: s.u, first: s.first, last: s.last, cls: s.cls, year: s.year });
  const clean = u => String(u || '').trim().split('@')[0].toUpperCase().replace(/[^A-Z0-9]/g, '');

  CS.demoBackend = async function (req) {
    await new Promise(r => setTimeout(r, 250));      // feel like a network call
    const db = load();
    const auth = () => Object.values(db.students).find(s => s.token && s.token === req.token);
    switch (req.action) {
      case 'login': {
        const s = db.students[clean(req.u)];
        if (!s || String(req.pin || '').trim() !== s.pin) return { ok: false, error: 'Username or PIN not recognised. Check your login slip.' };
        s.token = 'demo-' + Math.random().toString(36).slice(2); s.lastLogin = new Date().toISOString(); store(db);
        return { ok: true, token: s.token, user: userOf(s), progress: s.progress, mistakes: s.mistakes };
      }
      case 'me': { const s = auth(); if (!s) return { ok: false, error: 'Please log in again.' }; return { ok: true, user: userOf(s), progress: s.progress, mistakes: s.mistakes }; }
      case 'sync': {
        const s = auth(); if (!s) return { ok: false, error: 'Please log in again.' };
        s.progress = req.progress; s.mistakes = (req.mistakes || []).slice(0, 40); s.mistakesCount = (req.mistakes || []).length; s.lastActive = new Date().toISOString(); store(db);
        return { ok: true };
      }
      case 'result': { const s = auth(); if (!s) return { ok: false, error: 'Please log in again.' }; db.results.push(Object.assign({ u: s.u, at: new Date().toISOString() }, req.result)); store(db); return { ok: true }; }
      case 'teacher': {
        if (CS.hash(String(req.key || '')) !== CS.config.teacherCodeHash) return { ok: false, error: 'Teacher key not accepted.' };
        return { ok: true, demo: true, students: Object.values(db.students).map(s => ({ user: userOf(s), lastLogin: s.lastLogin, lastActive: s.lastActive, mistakes: s.mistakesCount || (s.mistakes || []).length, progress: s.progress || {} })) };
      }
    }
    return { ok: false, error: 'Unknown action.' };
  };
})();
