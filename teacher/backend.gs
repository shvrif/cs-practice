/**
 * Mr Sharif's CS Practice – student accounts back end (Google Apps Script)
 *
 * Lives in a Google Sheet owned by a SCHOOL account. The sheet needs a tab called "Students"
 * (import students.csv – see teacher/SETUP-LOGINS.md). This script:
 *   - checks student logins (B0 username + 4-digit PIN)
 *   - saves and loads each student's progress so it follows them to any device
 *   - records mock exam results in a "Results" tab
 *   - gives the teacher dashboard a summary of every student (needs the TEACHER_KEY script property)
 *
 * Deploy: Deploy → New deployment → Web app → Execute as: Me → Who has access: Anyone.
 */

const STUDENTS = 'Students';
const RESULTS = 'Results';
const COLS = ['Username', 'First name', 'Last name', 'Class', 'Year', 'PIN', 'Token', 'Token expires', 'Last login',
  'Last active', 'XP', 'Level', 'Answered', 'Correct', 'Mocks taken', 'Best mock %', 'Mistakes', 'Progress JSON', 'Mistakes JSON'];
const C = {}; COLS.forEach((h, i) => (C[h] = i + 1));   // 1-based column numbers
const RESULT_COLS = ['Submitted', 'Username', 'Name', 'Class', 'Year', 'Paper', 'Version', 'Score', 'Out of', '%', 'Minutes',
  'Left page', 'Paste attempts', 'Rushed answers', 'Unanswered', 'Nonsense answers', 'Arabic look-ups', 'Check?', 'Sections', 'Paper ID'];
const SESSION_DAYS = 120;
const MAX_FAILS = 5;            // wrong PINs before a 10-minute lock
const CELL_LIMIT = 48000;       // Google Sheets allows 50,000 characters per cell

function doGet() { return out({ ok: true, service: "Mr Sharif's CS Practice" }); }

function doPost(e) {
  let req;
  try { req = JSON.parse(e.postData.contents); } catch (err) { return out({ ok: false, error: 'Bad request.' }); }
  try {
    const fn = API[req.action];
    if (!fn) return out({ ok: false, error: 'Unknown action.' });
    return out(fn(req));
  } catch (err) {
    return out({ ok: false, error: String((err && err.message) || err) });
  }
}

const API = {
  login(req) {
    const u = cleanUser(req.u);
    const pin = String(req.pin || '').trim();
    if (!u || !pin) return { ok: false, error: 'Type your username and PIN.' };
    const cache = CacheService.getScriptCache();
    const fails = +(cache.get('fail_' + u) || 0);
    if (fails >= MAX_FAILS) return { ok: false, error: 'Too many wrong PINs. Wait 10 minutes or ask Mr Sharif.' };
    const s = students();
    const row = s.index[u];
    if (!row || String(s.get(row, 'PIN')).trim() !== pin) {
      cache.put('fail_' + u, String(fails + 1), 600);
      return { ok: false, error: 'Username or PIN not recognised. Check your login slip.' };
    }
    cache.remove('fail_' + u);
    const token = Utilities.getUuid();
    const now = new Date();
    s.sheet.getRange(row, C['Token'], 1, 3).setValues([[token, new Date(now.getTime() + SESSION_DAYS * 864e5), now]]);
    return { ok: true, token, user: userOf(s, row), progress: parse(s.get(row, 'Progress JSON')), mistakes: parse(s.get(row, 'Mistakes JSON')) };
  },

  me(req) {
    const { s, row } = auth(req.token);
    return { ok: true, user: userOf(s, row), progress: parse(s.get(row, 'Progress JSON')), mistakes: parse(s.get(row, 'Mistakes JSON')) };
  },

  sync(req) {
    const { s, row } = auth(req.token);
    const p = req.progress || {};
    let prog = JSON.stringify(p);
    if (prog.length > CELL_LIMIT) { p.history = (p.history || []).slice(0, 10); prog = JSON.stringify(p); }
    let mist = req.mistakes || [];
    let mj = JSON.stringify(mist);
    while (mj.length > CELL_LIMIT && mist.length) { mist = mist.slice(0, Math.floor(mist.length * 0.8)); mj = JSON.stringify(mist); }
    const sm = req.summary || {};
    s.sheet.getRange(row, C['Last active'], 1, 10).setValues([[new Date(), +sm.xp || 0, +sm.level || 1, +sm.answered || 0, +sm.correct || 0,
      +sm.mocks || 0, sm.bestMock == null ? '' : +sm.bestMock, mist.length, prog, mj]]);
    return { ok: true };
  },

  result(req) {
    const { s, row } = auth(req.token);
    const d = req.result || {};
    const u = userOf(s, row);
    const concerns = [];
    if (+d.tabSwitches >= 2) concerns.push('left page ' + d.tabSwitches + 'x');
    if (+d.pasteAttempts > 0) concerns.push('tried to paste');
    if (+d.rushedAnswers >= 4) concerns.push('rushed');
    if (+d.timeMinutes < 10) concerns.push('under 10 min');
    if (+d.nonsenseAnswers > 0) concerns.push('random typing');
    const lock = LockService.getScriptLock();
    lock.waitLock(20000);
    try {
      const sh = sheetFor(RESULTS, RESULT_COLS);
      sh.appendRow([new Date(), u.u, u.first + ' ' + u.last, u.cls, u.year, clean(d.paper), clean(d.version), +d.score || 0, +d.total || 50,
        (+d.percent || 0) / 100, +d.timeMinutes || 0, +d.tabSwitches || 0, +d.pasteAttempts || 0, +d.rushedAnswers || 0,
        +d.unanswered || 0, +d.nonsenseAnswers || 0, +d.arabicLookups || 0, concerns.length ? '⚠️ ' + concerns.join(', ') : '✓',
        clean(d.sections), clean(d.paperId)]);
      sh.getRange(sh.getLastRow(), 10).setNumberFormat('0%');
    } finally { lock.releaseLock(); }
    return { ok: true };
  },

  teacher(req) {
    const key = PropertiesService.getScriptProperties().getProperty('TEACHER_KEY');
    if (!key || String(req.key || '') !== key) return { ok: false, error: 'Teacher key not accepted.' };
    const s = students();
    const list = [];
    const progCol = s.last > 1 ? s.sheet.getRange(2, C['Progress JSON'], s.last - 1, 1).getValues() : [];
    for (let r = 2; r <= s.last; r++) {
      if (!s.get(r, 'Username')) continue;
      const p = parse(progCol[r - 2][0]) || {};
      list.push({
        user: userOf(s, r), lastLogin: iso(s.get(r, 'Last login')), lastActive: iso(s.get(r, 'Last active')),
        mistakes: +s.get(r, 'Mistakes') || 0,
        progress: { xp: p.xp || 0, units: p.units || {}, recent: p.recent || {}, best: p.best || {}, history: (p.history || []).slice(0, 20), days: p.days || [] }
      });
    }
    return { ok: true, students: list };
  }
};

/* ---------- helpers ---------- */
function out(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
function cleanUser(u) { return String(u || '').trim().split('@')[0].toUpperCase().replace(/[^A-Z0-9]/g, ''); }
function clean(v) { const s = String(v == null ? '' : v).slice(0, 200); return /^[=+\-@]/.test(s) ? "'" + s : s; }
function parse(v) { try { return v ? JSON.parse(v) : null; } catch (e) { return null; } }
function iso(v) { return v instanceof Date ? v.toISOString() : (v || ''); }

function students() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(STUDENTS);
  if (!sheet) throw new Error('The "Students" tab is missing.');
  const last = sheet.getLastRow();
  // make sure every column exists
  const head = sheet.getRange(1, 1, 1, COLS.length).getValues()[0];
  if (head.join('|') !== COLS.join('|')) sheet.getRange(1, 1, 1, COLS.length).setValues([COLS]);
  // Read only the small columns up front; the big JSON cells are fetched one at a time when needed
  const meta = C['Mistakes'];
  const values = last > 1 ? sheet.getRange(1, 1, last, meta).getValues() : [COLS.slice(0, meta)];
  const index = {};
  for (let r = 1; r < values.length; r++) { const u = cleanUser(values[r][0]); if (u) index[u] = r + 1; }
  return { sheet, last, index, get: (row, col) => (C[col] > meta ? sheet.getRange(row, C[col]).getValue() : values[row - 1][C[col] - 1]) };
}

function auth(token) {
  if (!token) throw new Error('Please log in again.');
  const s = students();
  for (let r = 2; r <= s.last; r++) {
    if (s.get(r, 'Token') === token) {
      const exp = s.get(r, 'Token expires');
      if (exp && new Date(exp) < new Date()) throw new Error('Your login has expired – please log in again.');
      return { s, row: r };
    }
  }
  throw new Error('Please log in again.');
}

function userOf(s, row) {
  return { u: cleanUser(s.get(row, 'Username')), first: String(s.get(row, 'First name')), last: String(s.get(row, 'Last name')),
    cls: String(s.get(row, 'Class')), year: +String(s.get(row, 'Year')).replace(/\D/g, '') || 0 };
}

function sheetFor(name, headers) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(name);
  if (!sh) sh = ss.insertSheet(name);
  if (sh.getLastRow() === 0) {
    sh.appendRow(headers); sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, headers.length).setFontWeight('bold').setBackground('#e8f0ff');
  }
  return sh;
}
