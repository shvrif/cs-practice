/* Graphics: logo, "Bit" the robot mascot, hacker ranks, confetti */
(function () {
  'use strict';
  const CS = window.CS; const art = (CS.art = {});
  let uid = 0;

  /* ---------- Logo mark: a robot-terminal head with a >_ prompt ---------- */
  art.logo = function (size) {
    const id = 'lg' + (++uid);
    return `<svg class="logo-mark" width="${size || 40}" height="${size || 40}" viewBox="0 0 64 64" role="img" aria-label="Mr Sharif's CS Practice logo">
      <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2563eb"/><stop offset=".55" stop-color="#7c3aed"/><stop offset="1" stop-color="#ea580c"/></linearGradient></defs>
      <rect x="2" y="2" width="60" height="60" rx="17" fill="url(#${id})"/>
      <line x1="32" y1="9" x2="32" y2="15" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
      <circle cx="32" cy="8" r="3.5" fill="#facc15"/>
      <rect x="11" y="16" width="42" height="34" rx="10" fill="#0b1220"/>
      <path d="M19 27 l7 6 -7 6" fill="none" stroke="#4ade80" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>
      <rect class="logo-cursor" x="30" y="37" width="12" height="3.6" rx="1.6" fill="#4ade80"/>
      <rect x="6" y="27" width="5" height="12" rx="2.5" fill="#fff" opacity=".9"/>
      <rect x="53" y="27" width="5" height="12" rx="2.5" fill="#fff" opacity=".9"/>
    </svg>`;
  };

  /* ---------- Bit the robot. mood: happy | wow | sad | cool | think ---------- */
  art.bit = function (mood, size) {
    const id = 'bt' + (++uid);
    mood = mood || 'happy';
    const G = '#4ade80';
    const eyes = {
      happy: `<path d="M44 55 q5 -7 10 0 M66 55 q5 -7 10 0" stroke="${G}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
      wow: `<rect x="45" y="48" width="9" height="11" rx="3" fill="${G}"/><rect x="66" y="48" width="9" height="11" rx="3" fill="${G}"/>`,
      sad: `<rect x="45" y="51" width="9" height="7" rx="3" fill="${G}"/><rect x="66" y="51" width="9" height="7" rx="3" fill="${G}"/><path d="M43 46 l11 4 M77 46 l-11 4" stroke="${G}" stroke-width="3" stroke-linecap="round"/>`,
      cool: `<rect x="40" y="47" width="40" height="12" rx="5" fill="#111827" stroke="${G}" stroke-width="2.5"/><path d="M44 50 l6 0" stroke="#e5e7eb" stroke-width="2" stroke-linecap="round"/>`,
      think: `<rect x="45" y="50" width="9" height="9" rx="3" fill="${G}"/><rect x="66" y="47" width="9" height="9" rx="3" fill="${G}"/>`
    }[mood];
    const mouth = {
      happy: `<path d="M50 67 q10 9 20 0" stroke="${G}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
      wow: `<ellipse cx="60" cy="70" rx="5" ry="6" fill="${G}"/>`,
      sad: `<path d="M50 72 q10 -8 20 0" stroke="${G}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
      cool: `<path d="M50 68 q10 7 20 -2" stroke="${G}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
      think: `<path d="M52 70 h16" stroke="${G}" stroke-width="4" stroke-linecap="round"/>`
    }[mood];
    return `<svg class="bit bit-${mood}" width="${size || 120}" height="${size || 120}" viewBox="0 0 120 130" role="img" aria-label="Bit the robot looking ${mood}">
      <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#60a5fa"/><stop offset="1" stop-color="#7c3aed"/></linearGradient></defs>
      <ellipse cx="60" cy="124" rx="30" ry="4" fill="#000" opacity=".12"/>
      <line x1="60" y1="16" x2="60" y2="28" stroke="#64748b" stroke-width="4" stroke-linecap="round"/>
      <circle class="bit-light" cx="60" cy="12" r="6" fill="#facc15"/>
      <rect x="10" y="48" width="12" height="26" rx="6" fill="#94a3b8"/>
      <rect x="98" y="48" width="12" height="26" rx="6" fill="#94a3b8"/>
      <rect x="18" y="26" width="84" height="68" rx="22" fill="url(#${id})"/>
      <rect x="29" y="36" width="62" height="48" rx="14" fill="#0b1220"/>
      ${eyes}${mouth}
      <circle cx="33" cy="80" r="0" />
      <rect x="40" y="96" width="40" height="22" rx="9" fill="url(#${id})"/>
      <rect x="49" y="102" width="22" height="9" rx="3" fill="#0b1220"/>
      <circle cx="54" cy="106.5" r="2" fill="#f472b6"/><circle cx="60" cy="106.5" r="2" fill="#facc15"/><circle cx="66" cy="106.5" r="2" fill="#4ade80"/>
    </svg>`;
  };

  /* Bit with a speech bubble */
  art.say = function (mood, html, size) {
    return `<div class="bit-say">${art.bit(mood, size || 84)}<div class="bubble">${html}</div></div>`;
  };

  /* ---------- Hacker ranks (ethical / white-hat themed) ---------- */
  art.RANKS = [
    ['Newbie Coder', '🐣'], ['Script Rookie', '⌨️'], ['Bug Hunter', '🐞'], ['Code Cadet', '🚀'],
    ['Byte Knight', '🛡️'], ['Firewall Guardian', '🔥'], ['Cyber Ninja', '🥷'], ['White-Hat Hacker', '🎩'],
    ['System Admin', '🖥️'], ['Root Master', '👑'], ['CS Legend', '🌟']
  ];
  art.rank = function (level) {
    const r = art.RANKS[Math.min(level - 1, art.RANKS.length - 1)];
    return { name: r[0], icon: r[1] };
  };
  // XP needed for a level (inverse of CS.progress.level)
  art.xpFor = level => 50 * (level - 1) * (level - 1);

  /* ---------- Confetti (respects reduced motion) ---------- */
  art.confetti = function (n) {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const box = document.createElement('div');
    box.className = 'confetti';
    const cols = ['#2563eb', '#7c3aed', '#ea580c', '#4ade80', '#facc15', '#f472b6'];
    const glyphs = ['0', '1', '{', '}', '<', '>', '■', '●'];
    for (let i = 0; i < (n || 40); i++) {
      const s = document.createElement('span');
      s.textContent = glyphs[i % glyphs.length];
      s.style.left = (Math.random() * 100) + 'vw';
      s.style.color = cols[i % cols.length];
      s.style.animationDelay = (Math.random() * 0.4) + 's';
      s.style.animationDuration = (1.4 + Math.random() * 1.2) + 's';
      s.style.fontSize = (14 + Math.random() * 14) + 'px';
      s.style.setProperty('--drift', (Math.random() * 120 - 60) + 'px');
      box.appendChild(s);
    }
    document.body.appendChild(box);
    setTimeout(() => box.remove(), 3200);
  };

  /* ---------- Floating "code chips" for hero sections ---------- */
  art.chips = function () {
    const items = ['01001011', '&lt;/&gt;', '{ }', '🔒', '⚡', '>_', '🛡️', '1 + 1 = 10', 'if:', '🐞'];
    return `<div class="chips" aria-hidden="true">${items.map((t, i) => `<span class="chip-float c${i}">${t}</span>`).join('')}</div>`;
  };
})();
