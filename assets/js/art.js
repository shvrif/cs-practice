/* Graphics: logo, "Bit" the robot mascot, hacker ranks, confetti */
(function () {
  'use strict';
  const CS = window.CS; const art = (CS.art = {});
  let uid = 0;

  /* ---------- Mr Sharif cartoon avatar. mood: happy | cool | think | sad | wow ---------- */
  function face(id, mood) {
    const D = '#17110e', W = '#fff';
    const eye = (cx, dx, dy, r) => `<ellipse cx="${cx}" cy="100" rx="6.5" ry="${r || 5}" fill="${W}"/><circle cx="${cx + 1 + dx}" cy="${100.5 + dy}" r="3.6" fill="${D}"/><circle cx="${cx + 2.3 + dx}" cy="${99.2 + dy}" r="1.1" fill="${W}"/>`;
    const closed = cx => `<path d="M${cx - 8} 101 Q${cx} 94 ${cx + 8} 101" fill="none" stroke="${D}" stroke-width="3.5" stroke-linecap="round"/>`;
    const brow = d => `<path d="${d}" fill="none" stroke="${D}" stroke-width="5" stroke-linecap="round"/>`;
    const eyes = {
      happy: eye(85, 0, 0) + eye(115, 0, 0) + brow('M74 88 Q84 83 94 86') + brow('M106 86 Q116 83 126 88'),
      cool: eye(85, 0, 0) + closed(115) + brow('M74 87 Q84 80 94 84') + brow('M106 87 Q116 85 126 89'),
      think: eye(85, 2, -2) + eye(115, 2, -2) + brow('M74 89 Q84 86 94 88') + brow('M106 84 Q116 78 126 84'),
      sad: eye(85, 0, 1.5) + eye(115, 0, 1.5) + brow('M74 88 Q84 87 94 82') + brow('M106 82 Q116 87 126 88'),
      wow: eye(85, 0, 0, 6.2) + eye(115, 0, 0, 6.2) + brow('M74 84 Q84 77 94 81') + brow('M106 81 Q116 77 126 84')
    }[mood];
    const L = '#9c4f45';
    const mouth = {
      happy: `<path d="M86 132.5 Q100 135 114 132 Q101 150 86 132.5 Z" fill="${W}" stroke="${L}" stroke-width="2.4" stroke-linejoin="round"/>`,
      cool: `<path d="M88 136 Q102 140 113 130" fill="none" stroke="${L}" stroke-width="3.2" stroke-linecap="round"/>`,
      think: `<path d="M91 137 Q100 135 108 138" fill="none" stroke="${L}" stroke-width="3.2" stroke-linecap="round"/>`,
      sad: `<path d="M89 140 Q100 132 111 140" fill="none" stroke="${L}" stroke-width="3.2" stroke-linecap="round"/>`,
      wow: `<ellipse cx="100" cy="138" rx="5.5" ry="6.5" fill="#5b1d1d" stroke="${L}" stroke-width="2"/>`
    }[mood];
    return `
      <path d="M16 230 Q20 184 72 170 L100 180 L128 170 Q180 184 184 230 Z" fill="url(#${id}n)"/>
      <path d="M74 169 L100 216 L126 169 L113 162 L87 162 Z" fill="#f4f7fb"/>
      <path d="M72 170 L96 208 L88 230 L56 230 Q56 196 72 170Z" fill="#1b2849"/>
      <path d="M128 170 L104 208 L112 230 L144 230 Q144 196 128 170Z" fill="#1b2849"/>
      <path d="M72 170 L88 179 L82 190 Z" fill="#2f4372"/><path d="M128 170 L112 179 L118 190 Z" fill="#2f4372"/>
      <path d="M140 198 l15 -3 l1 5 l-15 3 Z" fill="#f4f7fb"/>
      <path d="M94 180 L106 180 L104 190 L96 190 Z" fill="#3b2418"/>
      <path d="M96 190 L104 190 L109 222 L100 230 L91 222 Z" fill="#4a2e20"/>
      <path d="M86 162 L100 182 L92 192 L79 170 Z" fill="${W}" stroke="#d6dde6"/>
      <path d="M114 162 L100 182 L108 192 L121 170 Z" fill="${W}" stroke="#d6dde6"/>
      <path d="M86 140 L114 140 L114 164 Q100 174 86 164 Z" fill="#9b6848"/>
      <ellipse cx="59" cy="104" rx="7" ry="11" fill="#ab7552"/><ellipse cx="141" cy="104" rx="7" ry="11" fill="#ab7552"/>
      <path d="M61 88 Q61 54 100 51 Q139 54 139 88 L139 114 Q139 152 100 160 Q61 152 61 114 Z" fill="url(#${id}s)"/>
      <path d="M60 100 L60 80 Q62 46 100 44 Q138 46 140 80 L140 100 L135 100 L134 82 Q132 70 124 68 L76 68 Q68 70 66 82 L65 100 Z" fill="url(#${id}f)"/>
      <path d="M84 50 q8 -5 16 -2 M104 48 q8 -3 15 1" stroke="#3a2c24" stroke-width="2" fill="none" stroke-linecap="round" opacity=".7"/>
      <path d="M61 100 L66 100 Q68 124 78 136 Q89 146 100 147 Q111 146 122 136 Q132 124 134 100 L139 100 Q141 128 132 146 Q120 164 100 166 Q80 164 68 146 Q59 128 61 100 Z" fill="#241913"/>
      <path d="M84 129 Q92 123 100 125 Q108 123 116 129 Q108 131 100 129.5 Q92 131 84 129 Z" fill="#241913"/>
      ${mouth}
      <path d="M95 115 Q100 120 105 115" fill="none" stroke="#7d4d33" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M100 96 Q98 108 96 113" fill="none" stroke="#9a6446" stroke-width="2" stroke-linecap="round"/>
      ${eyes}
      <ellipse cx="76" cy="116" rx="6" ry="3.5" fill="#d98b72" opacity=".25"/><ellipse cx="124" cy="116" rx="6" ry="3.5" fill="#d98b72" opacity=".25"/>`;
  }
  function defs(id) {
    return `<defs>
      <linearGradient id="${id}n" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#26365e"/><stop offset="1" stop-color="#16213d"/></linearGradient>
      <linearGradient id="${id}f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#17110e"/><stop offset=".6" stop-color="#17110e"/><stop offset="1" stop-color="#17110e" stop-opacity=".2"/></linearGradient>
      <linearGradient id="${id}s" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c38e69"/><stop offset="1" stop-color="#a8724e"/></linearGradient>
    </defs>`;
  }
  art.teacher = function (mood, size) {
    const id = 'ms' + (++uid); mood = mood || 'happy';
    return `<svg class="bit avatar avatar-${mood}" width="${size || 120}" height="${size || 120}" viewBox="0 28 200 202" role="img" aria-label="Mr Sharif looking ${mood}">${defs(id)}${face(id, mood)}</svg>`;
  };
  // Every existing mascot spot now shows Mr Sharif
  art.bit = art.teacher;

  /* ---------- Logo mark: Mr Sharif in the year-colour tile with a >_ prompt badge ---------- */
  art.logo = function (size) {
    const id = 'lg' + (++uid);
    return `<svg class="logo-mark" width="${size || 40}" height="${size || 40}" viewBox="0 0 64 64" role="img" aria-label="Mr Sharif's CS Practice logo">
      <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2563eb"/><stop offset=".55" stop-color="#7c3aed"/><stop offset="1" stop-color="#ea580c"/></linearGradient>
      <clipPath id="${id}c"><rect x="2" y="2" width="60" height="60" rx="17"/></clipPath></defs>
      <rect x="2" y="2" width="60" height="60" rx="17" fill="url(#${id})"/>
      <g clip-path="url(#${id}c)"><svg x="3" y="5" width="58" height="62" viewBox="34 38 132 150">${defs(id + 'a')}${face(id + 'a', 'happy')}</svg></g>
      <rect x="40" y="43" width="21" height="16" rx="5" fill="#0b1220" stroke="#fff" stroke-width="1.5"/>
      <path d="M44.5 47.5 l3.2 3 -3.2 3" fill="none" stroke="#4ade80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <rect class="logo-cursor" x="49.5" y="52.5" width="6" height="2" rx="1" fill="#4ade80"/>
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
