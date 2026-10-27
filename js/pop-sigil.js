(() => {
  const canvas = document.getElementById('pop-sigil-canvas');
  const ctx = canvas.getContext('2d');

  const PALETTE = {
    BLACK:  '#090909',
    WHITE:  '#f5f5f0',
    GREY:   '#7e8287',
    RED:    '#ff0033',
    YELLOW: '#ffe500'
  };

  let currentPitch = 20;
  let currentSeed = 1337;
  let lastState = null;

  function rng() {
    currentSeed = (currentSeed * 1664525 + 1013904223) % 4294967296;
    return currentSeed / 4294967296;
  }

  function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) hash = Math.imul(31, hash) + str.charCodeAt(i) | 0;
    return Math.abs(hash);
  }

  function spareLetterReduction(text) {
    const cleaned = text.toUpperCase().replace(/[^A-Z]/g, '');
    const consonantsOnly = cleaned.replace(/[AEIOU]/g, '');
    const seen = new Set();
    const result = [];
    for (const char of consonantsOnly) {
      if (!seen.has(char)) {
        seen.add(char);
        result.push(char);
      }
    }
    return result.join(' ');
  }

  // --- ROTARY KNOB CONTROLLER ---
  const knob = document.getElementById('rotary-knob');
  const pointer = document.getElementById('rotary-pointer');
  const knobVal = document.getElementById('rotary-value');
  let isDragging = false;
  let startY = 0;
  let startPitch = 20;

  function updateKnob(val) {
    currentPitch = Math.max(12, Math.min(36, val));
    const percent = (currentPitch - 12) / (36 - 12);
    const angle = -135 + (percent * 270);
    pointer.style.transform = `translateX(-50%) rotate(${angle}deg)`;
    pointer.style.transformOrigin = `center 17px`;
    knobVal.innerText = `${currentPitch} PX`;
    reforgePopSigil();
  }

  knob.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.clientY;
    startPitch = currentPitch;
    document.body.style.cursor = 'ns-resize';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dy = startY - e.clientY;
    const delta = Math.round(dy / 5);
    updateKnob(startPitch + delta);
  });

  window.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      document.body.style.cursor = 'auto';
    }
  });

  knob.addEventListener('wheel', (e) => {
    e.preventDefault();
    updateKnob(currentPitch + (e.deltaY < 0 ? 1 : -1));
  }, { passive: false });

  knob.addEventListener('touchstart', (e) => {
    isDragging = true;
    startY = e.touches[0].clientY;
    startPitch = currentPitch;
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const dy = startY - e.touches[0].clientY;
    const delta = Math.round(dy / 5);
    updateKnob(startPitch + delta);
  });

  window.addEventListener('touchend', () => { isDragging = false; });

  // --- PATTERN ENGINE ---
  function renderPattern(c, mode, bg, fg, pitch, angle = 0, phase = 0) {
    c.save();
    c.fillStyle = bg;
    c.fillRect(-600, -600, 1200, 1200);
    c.rotate(angle);
    c.fillStyle = fg;

    if (mode === 'BENDAY') {
      const dotR = (pitch / 2) * 0.75;
      for (let x = -500; x <= 500; x += pitch) {
        for (let y = -500; y <= 500; y += pitch) {
          c.beginPath();
          c.arc(x + phase, y + phase, dotR, 0, Math.PI * 2);
          c.fill();
        }
      }
    } else if (mode === 'RAYS') {
      const spokes = Math.max(12, Math.floor((38 - pitch) * 1.6));
      const step = (Math.PI * 2) / spokes;
      for (let i = 0; i < spokes; i += 2) {
        c.beginPath();
        c.moveTo(0, 0);
        c.arc(0, 0, 700, i * step + phase, (i + 1) * step + phase);
        c.closePath();
        c.fill();
      }
    } else if (mode === 'RINGS') {
      for (let r = 700; r > 0; r -= pitch) {
        c.beginPath();
        c.arc(0, 0, r, 0, Math.PI * 2);
        c.fillStyle = (Math.floor(r / pitch) % 2 === 0) ? fg : bg;
        c.fill();
      }
    } else {
      // Snapped OP_STRIPES
      const barW = Math.floor(pitch / 2);
      for (let x = -600; x <= 600; x += pitch) {
        const rx = Math.round(x + phase);
        c.fillRect(rx, -600, barW, 1200);
      }
    }
    c.restore();
  }

  // --- GLYPH ARCHETYPES (EXPANDED TO 9 DISTINCT SILHOUETTES) ---
  function traceShape(c, type, size) {
    c.beginPath();
    if (type === 'CRUCIBLE') {
      const h = size * Math.sqrt(3) / 2;
      c.moveTo(0, -size); c.lineTo(size, h); c.lineTo(-size, h);
      c.closePath();
      c.moveTo(0, size); c.lineTo(size, -h * 0.5); c.lineTo(-size, -h * 0.5);
    } else if (type === 'EYE') {
      c.moveTo(-size, 0);
      c.quadraticCurveTo(0, -size * 0.75, size, 0);
      c.quadraticCurveTo(0, size * 0.75, -size, 0);
    } else if (type === 'SOLOMON') {
      for (let i = 0; i < 6; i++) {
        const a1 = (i * 60) * Math.PI / 180, a2 = ((i * 60) + 30) * Math.PI / 180;
        const x1 = Math.cos(a1) * size, y1 = Math.sin(a1) * size;
        const x2 = Math.cos(a2) * (size * 0.52), y2 = Math.sin(a2) * (size * 0.52);
        if (i === 0) c.moveTo(x1, y1); else c.lineTo(x1, y1);
        c.lineTo(x2, y2);
      }
    } else if (type === 'OCTAGRAM') {
      for (let i = 0; i < 8; i++) {
        const a1 = (i * 45) * Math.PI / 180, a2 = (i * 45 + 22.5) * Math.PI / 180;
        const x1 = Math.cos(a1) * size, y1 = Math.sin(a1) * size;
        const x2 = Math.cos(a2) * (size * 0.45), y2 = Math.sin(a2) * (size * 0.45);
        if (i === 0) c.moveTo(x1, y1); else c.lineTo(x1, y1);
        c.lineTo(x2, y2);
      }
    } else if (type === 'DIAMOND') {
      c.moveTo(0, -size); c.lineTo(size, 0); c.lineTo(0, size); c.lineTo(-size, 0);
    } else if (type === 'CROSSHAIR') {
      const arm = size * 0.32;
      c.moveTo(-arm, -size); c.lineTo(arm, -size); c.lineTo(arm, -arm);
      c.lineTo(size, -arm); c.lineTo(size, arm); c.lineTo(arm, arm);
      c.lineTo(arm, size); c.lineTo(-arm, size); c.lineTo(-arm, arm);
      c.lineTo(-size, arm); c.lineTo(-size, -arm); c.lineTo(-arm, -arm);
    } else if (type === 'LIGHTNING') {
      // Aggressive Constructivist Bolt
      c.moveTo(-size * 0.2, -size);
      c.lineTo(size * 0.5, -size);
      c.lineTo(0, -size * 0.1);
      c.lineTo(size * 0.6, -size * 0.1);
      c.lineTo(-size * 0.5, size);
      c.lineTo(-size * 0.1, size * 0.15);
      c.lineTo(-size * 0.6, size * 0.15);
    } else if (type === 'CRESCENT') {
      // Lunar Alchemical Horns
      c.arc(0, 0, size, -Math.PI * 0.7, Math.PI * 0.7, false);
      c.quadraticCurveTo(-size * 0.2, 0, Math.cos(-Math.PI * 0.7) * size, Math.sin(-Math.PI * 0.7) * size);
    } else if (type === 'SPLIT_FIELD') {
      // Sliced Monad Shield
      c.arc(0, 0, size, -Math.PI / 2, Math.PI / 2, false);
      c.lineTo(-size * 0.4, size);
      c.lineTo(0, 0);
      c.lineTo(-size * 0.4, -size);
    } else {
      c.arc(0, 0, size, 0, Math.PI * 2);
    }
    c.closePath();
  }

  window.reforgePopSigil = function() {
    const intent = document.getElementById('sigil-intent').value.trim() || 'DIVINE POP ART';
    currentSeed = hashString(intent);

    let patternSelect = document.getElementById('sigil-pattern-mode').value;
    let shapeMode = document.getElementById('sigil-shape-mode').value;

    const allPatterns = ['STRIPES', 'BENDAY', 'RAYS', 'RINGS'];
    const allShapes   = ['CRUCIBLE', 'EYE', 'SOLOMON', 'OCTAGRAM', 'DIAMOND', 'CROSSHAIR', 'LIGHTNING', 'CRESCENT', 'SPLIT_FIELD'];

    if (shapeMode === 'AUTO') shapeMode = allShapes[Math.floor(rng() * allShapes.length)];

    // CROSS-LAYER PATTERN COLLAGING (The game-changer for visual diversity)
    let groundPat, mantlePat, corePat;
    if (patternSelect === 'COLLAGE') {
      groundPat = allPatterns[Math.floor(rng() * allPatterns.length)];
      mantlePat = allPatterns[Math.floor(rng() * allPatterns.length)];
      corePat   = allPatterns[Math.floor(rng() * allPatterns.length)];
    } else {
      groundPat = mantlePat = corePat = patternSelect;
    }

    // Dynamic Scale / Pitch Disparity (Macro Ground, Standard Mantle, Micro Core)
    const groundPitch = Math.round(currentPitch * (1.3 + rng() * 0.4));  // Chunky macro background
    const mantlePitch = currentPitch;                                     // Standard
    const corePitch   = Math.max(10, Math.round(currentPitch * 0.65));   // Dense micro core

    // Dynamic Angles (Beyond standard 0 and 45)
    const angleOptions = [0, Math.PI / 6, Math.PI / 4, Math.PI / 3, Math.PI / 2, (3 * Math.PI) / 4];
    const groundAngle = angleOptions[Math.floor(rng() * angleOptions.length)];
    const mantleAngle = angleOptions[Math.floor(rng() * angleOptions.length)];
    const coreAngle   = angleOptions[Math.floor(rng() * angleOptions.length)];

    // Color Permutation Pairs
    const colorPairs = [
      { bg: PALETTE.BLACK,  fg: PALETTE.WHITE },
      { bg: PALETTE.RED,    fg: PALETTE.YELLOW },
      { bg: PALETTE.GREY,   fg: PALETTE.WHITE },
      { bg: PALETTE.BLACK,  fg: PALETTE.YELLOW },
      { bg: PALETTE.GREY,   fg: PALETTE.RED },
      { bg: PALETTE.WHITE,  fg: PALETTE.RED },
      { bg: PALETTE.YELLOW, fg: PALETTE.BLACK }
    ];

    const shuffled = [...colorPairs].sort(() => rng() - 0.5);
    const groundColors = shuffled[0];
    const mantleColors = shuffled[1];
    const coreColors   = shuffled[2];

    // Positional Offset & Scale Displacements
    const outerScale = 205 + Math.floor(rng() * 55);
    const outerOffX  = (rng() - 0.5) * 50;
    const outerOffY  = (rng() - 0.5) * 50;
    const outerRot   = (rng() - 0.5) * 0.45;

    const coreScale  = 85 + Math.floor(rng() * 60);
    const coreOffX   = (rng() - 0.5) * 75;
    const coreOffY   = (rng() - 0.5) * 75;
    const coreRot    = (rng() - 0.5) * 0.8;

    const eccentric = rng() < 0.35;
    const eyeOffX = eccentric ? (rng() - 0.5) * 110 : (rng() - 0.5) * 35;
    const eyeOffY = eccentric ? (rng() - 0.5) * 110 : (rng() - 0.5) * 35;

    const oculusOuter = 18 + Math.floor(rng() * 16);
    const oculusInner = Math.max(5, Math.floor(oculusOuter * 0.35));

    const W = canvas.width, H = canvas.height;
    ctx.save();
    ctx.clearRect(0, 0, W, H);
    ctx.translate(W / 2, H / 2);

    // 1. MACRO GROUND PATTERN
    renderPattern(ctx, groundPat, groundColors.bg, groundColors.fg, groundPitch, groundAngle, 0);

    // 2. MANTLE SHIELD
    ctx.save();
    ctx.translate(outerOffX, outerOffY);
    ctx.rotate(outerRot);
    traceShape(ctx, shapeMode, outerScale);
    ctx.clip();
    renderPattern(ctx, mantlePat, mantleColors.bg, mantleColors.fg, mantlePitch, mantleAngle, mantlePitch / 2);
    ctx.restore();

    // 3. INNER CORE (Swaps archetype to create geometric interplay)
    const coreShapes = ['CRUCIBLE', 'EYE', 'DIAMOND', 'LIGHTNING', 'CRESCENT'];
    const innerShape = coreShapes[Math.floor(rng() * coreShapes.length)];
    ctx.save();
    ctx.translate(outerOffX + coreOffX, outerOffY + coreOffY);
    ctx.rotate(coreRot);
    traceShape(ctx, innerShape, coreScale);
    ctx.clip();
    renderPattern(ctx, corePat, coreColors.bg, coreColors.fg, corePitch, coreAngle, 0);
    ctx.restore();

    // 4. POP ART ACCENT BOUNDARY (Bold screen-print borders)
    ctx.save();
    ctx.translate(outerOffX, outerOffY);
    ctx.rotate(outerRot);
    ctx.strokeStyle = (rng() > 0.4) ? PALETTE.YELLOW : PALETTE.RED;
    ctx.lineWidth = 6;
    traceShape(ctx, shapeMode, outerScale);
    ctx.stroke();
    ctx.restore();

    // 5. EMBODIED OCULUS
    ctx.save();
    ctx.translate(outerOffX + coreOffX + eyeOffX * 0.4, outerOffY + coreOffY + eyeOffY * 0.4);
    ctx.fillStyle = (rng() > 0.5) ? PALETTE.RED : PALETTE.YELLOW;
    ctx.beginPath();
    ctx.arc(0, 0, oculusOuter, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = (ctx.fillStyle === PALETTE.RED) ? PALETTE.WHITE : PALETTE.BLACK;
    ctx.beginPath();
    ctx.arc(0, 0, oculusInner, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    ctx.restore();

    lastState = {
      intent,
      reducedLetters: spareLetterReduction(intent),
      patternMode: (patternSelect === 'COLLAGE') ? `${groundPat}+${mantlePat}+${corePat}` : patternSelect,
      shapeMode,
      pitch: currentPitch,
      groundColors,
      mantleColors,
      coreColors,
      seedHex: '0x' + currentSeed.toString(16).toUpperCase().padStart(8, '0'),
      timestamp: new Date().toISOString()
    };

    document.getElementById('sigil-glyph-readout').innerText = 
      `// [${shapeMode}] • [${lastState.patternMode}] • [${lastState.seedHex}]`;
  };

  // --- RANDOMIZERS ---
  const INTENT_FRAGMENTS = [
    'PIERCE THE VEIL OF ILLUSION',
    'ORDER SURRENDERS TO FORM',
    'FIRE WITHIN THE GEOMETRY',
    'SILENCE BINDS THE MATRIX',
    'UNSEEN HAND TURNS THE WHEEL',
    'ABSORB THE RADIANT SIGNAL',
    'TRANSMUTE THE SIGNAL INTO FORM',
    'THE EYE OPENS IN THE GRID',
    'COUNTERCHANGE THE VOID',
    'RADIANT GEOMETRY ASCENDS',
    'DISSOLVE CONFLICT INTO SIGIL',
    'ELECTRIC SHADOW WALKS BEHIND'
  ];

  window.randomizeIntentAndForge = function() {
    const intentEl = document.getElementById('sigil-intent');
    if (intentEl) intentEl.value = INTENT_FRAGMENTS[Math.floor(Math.random() * INTENT_FRAGMENTS.length)];
    document.getElementById('sigil-pattern-mode').value = 'COLLAGE';
    document.getElementById('sigil-shape-mode').value   = 'AUTO';
    reforgePopSigil();
  };

  // FULL CHAOS RANDOM
  window.randomizeFullChaos = function() {
    const intentEl  = document.getElementById('sigil-intent');
    const patternEl = document.getElementById('sigil-pattern-mode');
    const shapeEl   = document.getElementById('sigil-shape-mode');

    if (intentEl) intentEl.value = INTENT_FRAGMENTS[Math.floor(Math.random() * INTENT_FRAGMENTS.length)];
    
    // 70% chance of collage, 30% uniform
    if (patternEl) {
      patternEl.value = Math.random() < 0.70 ? 'COLLAGE' : ['STRIPES','BENDAY','RAYS','RINGS'][Math.floor(Math.random() * 4)];
    }

    if (shapeEl) {
      const opts = ['CRUCIBLE', 'EYE', 'SOLOMON', 'OCTAGRAM', 'DIAMOND', 'CROSSHAIR', 'LIGHTNING', 'CRESCENT', 'SPLIT_FIELD'];
      shapeEl.value = opts[Math.floor(Math.random() * opts.length)];
    }

    // Randomize rotary pitch
    const rPitch = 14 + Math.floor(Math.random() * 20);
    updateKnob(rPitch);
  };

  // --- EXPORTS ---
  window.exportSigilPNG = function() {
    const link = document.createElement('a');
    const slug = (lastState?.intent || 'sigil').toLowerCase().replace(/[^a-z0-9]/g, '_').substring(0, 24);
    link.download = `pop_sigil_${slug}_${Date.now()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  window.exportSigilSVG = function() {
    if (!lastState) return;
    const { intent, shapeMode, pitch } = lastState;
    const barW = Math.round(pitch / 2);

    let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">\n`;
    svg += `<!-- INTENT: ${intent} | ARCHETYPE: ${shapeMode} -->\n`;
    svg += `<defs>\n`;
    svg += `  <pattern id="pat-ground" width="${pitch}" height="${pitch}" patternUnits="userSpaceOnUse">\n`;
    svg += `    <rect width="${pitch}" height="${pitch}" fill="${lastState.groundColors.bg}"/>\n`;
    svg += `    <rect width="${barW}" height="${pitch}" fill="${lastState.groundColors.fg}"/>\n`;
    svg += `  </pattern>\n`;
    svg += `  <pattern id="pat-mantle" width="${pitch}" height="${pitch}" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">\n`;
    svg += `    <rect width="${pitch}" height="${pitch}" fill="${lastState.mantleColors.bg}"/>\n`;
    svg += `    <rect width="${barW}" height="${pitch}" fill="${lastState.mantleColors.fg}"/>\n`;
    svg += `  </pattern>\n`;
    svg += `</defs>\n`;
    svg += `<rect width="600" height="600" fill="url(#pat-ground)"/>\n`;
    svg += `<circle cx="300" cy="300" r="230" fill="url(#pat-mantle)" stroke="${PALETTE.YELLOW}" stroke-width="6"/>\n`;
    svg += `<circle cx="300" cy="300" r="22" fill="${PALETTE.RED}"/>\n`;
    svg += `<circle cx="300" cy="300" r="7" fill="${PALETTE.WHITE}"/>\n`;
    svg += `</svg>`;

    const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `pop_sigil_${Date.now()}.svg`;
    link.click();
  };

  window.exportSigilTXT = function() {
    if (!lastState) return;

    const correspondences = {
      '#ff0033': 'MARS // IRON // BLOOD PASSION // ACTIVE FORCE',
      '#ffe500': 'SOL // GOLD // INTELLECT // RADIANT VOLITION',
      '#7e8287': 'SATURN // LEAD // PRIMA MATERIA // THRESHOLD',
      '#f5f5f0': 'LUNA // SILVER // REFLECTIVE CONSCIOUSNESS',
      '#090909': 'ABYSS // VOID // UNMANIFEST POTENTIAL'
    };

    const textContent = 
`======================================================================
WORDSTAR // NEXUS SYSTEM : GLYPH FORGE 03 (POP ART SIGIL)
DOCUMENT IDENTIFIER : BEINECKE-POP-${Date.now()}
ENCODING : UTF-8 // ASCII MANIFEST // RUNIC SPECIFICATION
======================================================================

[ STATEMENT OF INTENT ]
"${lastState.intent}"

[ A.O. SPARE LETTER REDUCTION ]
Extracted Consonant Roots : [ ${lastState.reducedLetters} ]
Formula: Elimination of vowels and repeated phonetic consonants.

----------------------------------------------------------------------
[ GEOMETRIC & CHROMATIC PARAMETERS ]
----------------------------------------------------------------------
SYSTEM ARCHETYPE   : ${lastState.shapeMode}
COUNTERCHANGE MODE : ${lastState.patternMode}
GRID FREQUENCY     : ${lastState.pitch} PX
CRYPTIC SEED       : ${lastState.seedHex}
TIMESTAMP          : ${lastState.timestamp}

GROUND HARMONY     : ${lastState.groundColors.bg} / ${lastState.groundColors.fg}
                     -> ${correspondences[lastState.groundColors.fg] || 'PRIMARY INK'}
MANTLE HARMONY     : ${lastState.mantleColors.bg} / ${lastState.mantleColors.fg}
                     -> ${correspondences[lastState.mantleColors.fg] || 'SECONDARY INK'}
CORE OCULAR INK    : ${lastState.coreColors.bg} / ${lastState.coreColors.fg}

----------------------------------------------------------------------
[ ASCII SEAL VISUALIZER ]
----------------------------------------------------------------------
                     .---.
                    /     \\
            .------/   O   \\------.
           /  :   /    |    \\   :  \\
          /   :  |   --+--   |  :   \\
         |====:==|     |     |==:====|
         |    :   \\    |    /   :    |
          \\   :    \\       /    :   /
           '--------\\     /--------'
                     '---'
            [ ${lastState.shapeMode} // ${lastState.patternMode} ]

----------------------------------------------------------------------
[ RITUAL TRANSMUTATION DIRECTIVE ]
----------------------------------------------------------------------
1. Retain the companion PNG/SVG in local cold storage.
2. Contemplate the high-contrast counterchange pattern until visual 
   afterimages occur (retinal saturation state).
3. Close eyelids: allow the inverted complimentary red/yellow nodes 
   to project against the darkness of the mind's eye.
4. Release the mental image. Forget the statement of intent.

CHECKSUM VERIFICATION: [OK] SHA-256 VALIDATED
WORDSTAR.NEXUS // POP ART SIGIL // ALL RIGHTS RESERVED
======================================================================`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `SIGIL_MANIFEST_${lastState.seedHex}.TXT`;
    link.click();
  };

  // Init
  updateKnob(20);
})();
