/* ============================================================
   SITE SETTINGS – the only file you normally need to edit.
   ============================================================ */
window.CS = window.CS || {};
window.CS.config = {
  siteName: "Mr Sharif's CS Practice",
  tagline: "Ta'allum Computer Science · Years 7–9",

  // STUDENT LOGINS – paste the web app URL of teacher/backend.gs here (see teacher/SETUP-LOGINS.md).
  // Leave empty for no logins (everyone uses the site as a guest).
  // Tip: open the site with ?demo=1 to try logins with made-up students (DEMO7 / 1234).
  backendUrl: '',
  requireLogin: true,          // true = students must log in before using the site
  accountSchool: 'Al Maha Boys',
  syncEverySeconds: 20,        // how often progress is saved to the student's account

  // Paste your Google Apps Script "Web app" URL here (see teacher/SETUP.md).
  // Leave empty to turn off results logging.
  sheetEndpoint: '',

  schools: ['Al Maha Boys', 'Al Maha Girls', 'Al Jazeera'],

  // Teacher page (teacher.html) passcode. Default passcode: Taallum2627
  // Change it from the teacher page ("Change the teacher passcode") and paste the new line here.
  teacherCodeHash: 1440433611,

  // How many fixed versions each mock/unit test has (plus unlimited "random" papers)
  versions: 10,

  // Minimum seconds a question must be on screen (first visit) before moving on / checking
  minSeconds: { mcq: 6, tf: 5, cloze: 20, match: 15, short: 10, long: 15, justify: 6 },

  // Practice-mode XP (negative marking discourages random clicking)
  xp: { right: 10, wrong: -5, perMark: 8 },

  // Learner journey: practise -> (fix weak spots if struggling) -> mock exam
  //  readyCorrect   = correct answers on the next exam's units before we suggest a mock
  //  readyAccuracy  = recent accuracy needed for "mock ready"
  //  struggleAccuracy = below this recent accuracy we suggest flashcards and mistakes
  //  nudgeEvery     = check in with a suggestion every N practice questions
  journey: { readyCorrect: 30, readyAccuracy: 0.7, struggleAccuracy: 0.5, nudgeEvery: 10 },

  // Assessment start dates (from the 2026-27 SOW) – used to highlight "coming up next"
  examDates: { ms1: '2026-10-14', eos1: '2026-12-08', ms2: '2027-03-22', eos2: '2027-06-09' },

  // Which units each assessment covers (unit numbers from the 2026-27 SOW)
  assessments: {
    7: [
      { id: 'ms1', name: 'Mid-Semester 1', short: 'MS1', units: [1, 2, 3], when: 'Oct 2026' },
      { id: 'eos1', name: 'End of Semester 1', short: 'EOS1', units: [1, 2, 3, 4, 5], when: 'Dec 2026' },
      { id: 'ms2', name: 'Mid-Semester 2', short: 'MS2', units: [6, 7], when: 'Mar 2027' },
      { id: 'eos2', name: 'End of Semester 2', short: 'EOS2', units: [6, 7, 8], when: 'Jun 2027' }
    ],
    8: [
      { id: 'ms1', name: 'Mid-Semester 1', short: 'MS1', units: [1, 2], when: 'Oct 2026' },
      { id: 'eos1', name: 'End of Semester 1', short: 'EOS1', units: [1, 2, 3, 4], when: 'Dec 2026' },
      { id: 'ms2', name: 'Mid-Semester 2', short: 'MS2', units: [5, 6], when: 'Mar 2027' },
      { id: 'eos2', name: 'End of Semester 2', short: 'EOS2', units: [5, 6, 7], when: 'Jun 2027' }
    ],
    9: [
      { id: 'ms1', name: 'Mid-Semester 1', short: 'MS1', units: [1], when: 'Oct 2026' },
      { id: 'eos1', name: 'End of Semester 1', short: 'EOS1', units: [1, 2], when: 'Dec 2026' },
      { id: 'ms2', name: 'Mid-Semester 2', short: 'MS2', units: [3, 4, 5], when: 'Mar 2027' },
      { id: 'eos2', name: 'End of Semester 2', short: 'EOS2', units: [3, 4, 5, 6], when: 'Jun 2027' }
    ]
  }
};

// Demo mode: ?demo=1 turns on logins with made-up students (remembered until ?demo=0)
(function () {
  try {
    const m = /[?&]demo=([01])/.exec(location.search);
    if (m) localStorage.setItem('mrsharif-cs:demo-mode', m[1]);
    if (!window.CS.config.backendUrl && localStorage.getItem('mrsharif-cs:demo-mode') === '1') window.CS.config.backendUrl = 'demo';
  } catch (e) { /* ignore */ }
})();
