/**
 * Mr Sharif's CS Practice – results logger
 * Paste this whole file into Extensions → Apps Script in your Google Sheet,
 * then Deploy → New deployment → Web app (Execute as: Me, Who has access: Anyone).
 * See teacher/SETUP.md for step-by-step instructions.
 */
const SHEET_NAME = 'Results';
const HEADERS = [
  'Submitted', 'School', 'Year', 'Class', 'Name', 'Paper', 'Version', 'Score', 'Out of', '%',
  'Minutes', 'Left page', 'Paste attempts', 'Rushed answers', 'Unanswered', 'Nonsense answers',
  'Check?', 'Sections', 'Paper ID'
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    const d = JSON.parse(e.postData.contents);
    const sheet = getSheet_();
    const concerns = [];
    if (+d.tabSwitches >= 2) concerns.push('left page ' + d.tabSwitches + 'x');
    if (+d.pasteAttempts > 0) concerns.push('tried to paste');
    if (+d.rushedAnswers >= 4) concerns.push('rushed');
    if (+d.timeMinutes < 10) concerns.push('under 10 min');
    if (+d.nonsenseAnswers > 0) concerns.push('random typing');
    sheet.appendRow([
      new Date(), clean_(d.school), +d.year || '', clean_(d.cls), clean_(d.name), clean_(d.paper), clean_(d.version),
      +d.score || 0, +d.total || 50, (+d.percent || 0) / 100,
      +d.timeMinutes || 0, +d.tabSwitches || 0, +d.pasteAttempts || 0, +d.rushedAnswers || 0,
      +d.unanswered || 0, +d.nonsenseAnswers || 0,
      concerns.length ? '⚠️ ' + concerns.join(', ') : '✓',
      clean_(d.sections), clean_(d.paperId)
    ]);
    sheet.getRange(sheet.getLastRow(), 10).setNumberFormat('0%');
    return ContentService.createTextOutput('ok');
  } catch (err) {
    return ContentService.createTextOutput('error: ' + err);
  } finally {
    lock.releaseLock();
  }
}

// Lets you check the web app is live by opening its URL in a browser
function doGet() {
  return ContentService.createTextOutput('Mr Sharif\'s CS Practice results logger is running.');
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#e8f0ff');
    sheet.getRange('A:A').setNumberFormat('dd/mm/yyyy hh:mm');
  }
  return sheet;
}

// Stops text starting with = + - @ being treated as a spreadsheet formula
function clean_(v) {
  const s = String(v == null ? '' : v).slice(0, 200);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}
