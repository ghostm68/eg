  // Menu Toggle
  function toggleMenu() {
    const overlay = document.getElementById('menu-overlay');
    const menu = document.getElementById('slide-menu');
    overlay.classList.toggle('active');
    menu.classList.toggle('active');
  }

  // --- SIGIL FORGE ENGINE (SIMPLIFIED) ---
  const canvas = document.getElementById('sigil-canvas');
  const ctx = canvas.getContext('2d');

function forgeSigil() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  
  // Create points around a circle (Kamea-style)
  const numPoints = 7 + Math.floor(Math.random() * 5); // 7-11 points
  const radius = 120;
  const points = [];
  
  for (let i = 0; i < numPoints; i++) {
    const angle = (i / numPoints) * Math.PI * 2;
    points.push({
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    });
  }
  
  // Draw flowing curves between random points with VARIED LINE WEIGHTS
  ctx.strokeStyle = Math.random() > 0.3 ? "#ff0000" : "#ffffff";
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  
  const connections = 3 + Math.floor(Math.random() * 4); // 3-6 flowing lines
  const usedPoints = new Set();
  const pathIntersections = []; // Track where paths meet for inner shapes
  
  let currentPoint = Math.floor(Math.random() * numPoints);
  usedPoints.add(currentPoint);
  
  for (let i = 0; i < connections; i++) {
    // VARY LINE WEIGHT for each connection
    ctx.lineWidth = 1 + Math.floor(Math.random() * 3); // 1-3px varied thickness
    
    ctx.beginPath();
    ctx.moveTo(points[currentPoint].x, points[currentPoint].y);
    
    // Pick a new random point
    let nextPoint;
    do {
      nextPoint = Math.floor(Math.random() * numPoints);
    } while (usedPoints.has(nextPoint) && usedPoints.size < numPoints);
    
    usedPoints.add(nextPoint);
    
    // Create curved path using quadratic curve
    const current = points[currentPoint];
    const next = points[nextPoint];
    
    // Control point for curve (slightly offset toward center)
    const cpX = (current.x + next.x) / 2 + (Math.random() - 0.5) * 40;
    const cpY = (current.y + next.y) / 2 + (Math.random() - 0.5) * 40;
    
    ctx.quadraticCurveTo(cpX, cpY, next.x, next.y);
    ctx.stroke();
    
    // Store intersection point (the connection point between paths)
    pathIntersections.push({x: next.x, y: next.y});
    
    currentPoint = nextPoint;
  }
  
  // Add INNER SHAPES at intersections
  pathIntersections.forEach((point, idx) => {
    if (Math.random() > 0.6) { // 40% chance for inner shape
      const shapeType = Math.floor(Math.random() * 3); // 0=triangle, 1=square, 2=crescent
      const size = 8 + Math.floor(Math.random() * 8); // 8-15px
      
      ctx.lineWidth = 1;
      ctx.beginPath();
      
      switch(shapeType) {
        case 0: // Triangle
          ctx.moveTo(point.x, point.y - size);
          ctx.lineTo(point.x - size * 0.866, point.y + size * 0.5);
          ctx.lineTo(point.x + size * 0.866, point.y + size * 0.5);
          ctx.closePath();
          break;
          
        case 1: // Square
          ctx.rect(point.x - size/2, point.y - size/2, size, size);
          break;
          
        case 2: // Crescent (two overlapping circles)
          ctx.arc(point.x - size/4, point.y, size/2, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(point.x + size/4, point.y, size/2, 0, Math.PI * 2);
          break;
      }
      
      // Sometimes fill, sometimes just outline
      if (Math.random() > 0.5) {
        ctx.fillStyle = ctx.strokeStyle;
        ctx.fill();
      } else {
        ctx.stroke();
      }
    }
  });
  
  // Add varied decorative circles
  // Circles at connection points - varied sizes
  usedPoints.forEach(idx => {
    if (Math.random() > 0.3) { // 70% chance for each point
      const circleSize = 2 + Math.floor(Math.random() * 6); // 2-7px radius
      const isFilled = Math.random() > 0.5;
      
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(points[idx].x, points[idx].y, circleSize, 0, Math.PI * 2);
      
      if (isFilled) {
        ctx.fillStyle = ctx.strokeStyle;
        ctx.fill();
      } else {
        ctx.stroke();
      }
    }
  });
  
  // Random circles along the paths
  if (Math.random() > 0.4) {
    const numRandomCircles = 1 + Math.floor(Math.random() * 3); // 1-3 circles
    for (let i = 0; i < numRandomCircles; i++) {
      const randX = centerX + (Math.random() - 0.5) * radius * 1.5;
      const randY = centerY + (Math.random() - 0.5) * radius * 1.5;
      const randSize = 3 + Math.floor(Math.random() * 8); // 3-10px
      
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(randX, randY, randSize, 0, Math.PI * 2);
      
      if (Math.random() > 0.6) {
        ctx.fillStyle = ctx.strokeStyle;
        ctx.fill();
      } else {
        ctx.stroke();
      }
    }
  }
  
  // Center mark - varied
  if (Math.random() > 0.5) {
    const centerSize = 3 + Math.floor(Math.random() * 5); // 3-7px
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(centerX, centerY, centerSize, 0, Math.PI * 2);
    
    if (Math.random() > 0.5) {
      ctx.fillStyle = ctx.strokeStyle;
      ctx.fill();
    } else {
      ctx.stroke();
    }
  }
}
  // --- AUDIO CORE ---
  let audioCtx, humOsc, isPowered = false;
  function togglePower() {
    if(!audioCtx) {
        audioCtx = new AudioContext();
        humOsc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        humOsc.type = 'sawtooth'; humOsc.frequency.value = 55;
        gain.gain.value = 0.02;
        humOsc.connect(gain); gain.connect(audioCtx.destination);
        humOsc.start();
    }
    isPowered = !isPowered;
    document.getElementById('power-toggle').innerText = isPowered ? "POWER: ON" : "POWER: OFF";
    document.getElementById('power-toggle').classList.toggle('power-on');
    audioCtx.resume();
    if(!isPowered) audioCtx.suspend();
  }

  // --- LOGS ---
const logFragments = [
  "SIGILLUM authenticated",
  "Cube navigation loaded",
  "SIGNUM protocol active",
  "Link geometry stable",
  "2026 impression verified",
  "Current reader healed of stress",
  "Typography matrices aligned",
  "DIMINUTIVE suffix applied",
  "Wordstar nexus online",
  "Download paths verified",
  "Intent compression: 87%",
  "Your mind is clear and focused",
  "Navigation runes encoded",
  "Featured apps indexed",
  "Medieval markers found",
  "Cube faces rendered",
  "Etymology trace complete",
  "Anxiety dissolves into code",
  "Small sign detected",
  "APK verification complete",
  "PDF bindings secure",
  "Creative flow restored",
  "AUTHENTICARE timestamp",
  "Wax seal emulator online",
  "You are exactly where you need to be",
  "Chaos magic subroutine",
  "Typecast link active",
  "Symbol charge: nominal",
  "Grimoire index updated",
  "Rest is productive work",
  "Old French parser engaged",
  "Displaywriter mounted",
  "Token verification loop",
  "Breath deepens, tension releases",
  "Ceremonial binding active",
  "Citadelle routes mapped",
  "Latin parse buffer full",
  "Your path forward is illuminated"
];
  
  function updateLogs() {
    const content = document.getElementById('log-content');
    const p = document.createElement('p');
    p.textContent = "> " + logFragments[Math.floor(Math.random() * logFragments.length)];
    p.style.marginBottom = '5px';
    content.appendChild(p);
    document.getElementById('log-stream').scrollTop = document.getElementById('log-stream').scrollHeight;
    if (content.children.length > 20) content.removeChild(content.children[0]);
  }
  
  setInterval(updateLogs, 3000);

  // --- CHAT ---
  async function sendMessage() {
    const input = document.getElementById('chat-input');
    const container = document.getElementById('chat-container');
    const msg = input.value.trim();
    
    if (!msg) return;
    
    container.innerHTML += `<div class="chat-bubble user-message">${msg}</div>`;
    input.value = '';
    
    const b = document.createElement('div');
    b.className = 'chat-bubble bot-message';
    b.textContent = '...';
    container.appendChild(b);
    container.scrollTop = container.scrollHeight;
    
    try {
      const resp = await fetch(`https://text.pollinations.ai/In a short technological/witch style, answer: ${encodeURIComponent(msg)}`);
      const data = await resp.text();
      b.textContent = data.trim();
      forgeSigil(); // Every response forges a new sigil
    } catch (e) {
      b.textContent = "Signal interference.";
    }
  }

  // --- EXPORT FUNCTIONS ---
  function clearChat() {
    document.getElementById('chat-container').innerHTML = '<div class="chat-bubble bot-message">Link established. Awaiting query.</div>';
  }

  function exportChat() {
    // Export chat transcript
    const messages = Array.from(document.querySelectorAll('.chat-bubble')).map(el => el.textContent).join('\n\n');
    const textBlob = new Blob([messages], { type: 'text/plain' });
    const textUrl = URL.createObjectURL(textBlob);
    const textLink = document.createElement('a');
    textLink.href = textUrl;
    textLink.download = 'sigil-forge-chat.txt';
    textLink.click();
    
    // Export current sigil as PNG
    setTimeout(() => {
      canvas.toBlob(blob => {
        const imgUrl = URL.createObjectURL(blob);
        const imgLink = document.createElement('a');
        imgLink.href = imgUrl;
        imgLink.download = 'sigil-forge-sigil.png';
        imgLink.click();
      });
    }, 100);
  }

  function exportDraft() {
    const content = document.getElementById('editor').innerText;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'inkrealm-dossier.txt';
    a.click();
  }

  // --- INIT ---
  window.onload = () => {
    forgeSigil();
  };
</script>
<script>
let currentSpeech = null;
let isSpeaking = false;
let availableVoices = [];
let selectedVoiceId = null;

// Load saved voice preference from localStorage
function loadVoicePreference() {
  return localStorage.getItem('tts_preferred_voice');
}

// Save voice preference to localStorage
function saveVoicePreference(voiceId) {
  localStorage.setItem('tts_preferred_voice', voiceId);
}

// Get all female voices with proper categorization
function getFemaleVoices() {
  const voices = window.speechSynthesis.getVoices();
  
  const categorizedVoices = {
    confirmed: [],    // Definitely female (by name/pattern)
    likely: [],       // Likely female (feminine names)
    unknown: [],      // Can't determine gender
    male: []          // Definitely male
  };
  
  voices.forEach(voice => {
    const name = voice.name.toLowerCase();
    const lang = voice.lang;
    
    // Definitely female
    if (name.includes('female') || 
        name.includes('woman') || 
        name.includes('zira') ||
        name.includes('samantha') ||
        name.includes('hazel') ||
        name.includes('karen') ||
        name.includes('tessa') ||
        name.includes('google uk english female') ||
        name.includes('google us english female')) {
      categorizedVoices.confirmed.push(voice);
    }
    // Definitely male
    else if (name.includes('male') || 
             name.includes('man') ||
             name.includes('david') ||
             name.includes('mark') ||
             name.includes('paul') ||
             name.includes('microsoft david') ||
             name.includes('alex') ||
             name.includes('daniel')) {
      categorizedVoices.male.push(voice);
    }
    // Likely female (feminine names)
    else if (name.includes('susan') || 
             name.includes('lisa') || 
             name.includes('mary') ||
             name.includes('jane') || 
             name.includes('anna') || 
             name.includes('emma') ||
             name.includes('sarah') || 
             name.includes('laura') || 
             name.includes('amy') ||
             name.includes('jessica') || 
             name.includes('michelle') ||
             name.includes('allison') || 
             name.includes('ava') || 
             name.includes('natalia')) {
      categorizedVoices.likely.push(voice);
    }
    // Unknown gender
    else {
      categorizedVoices.unknown.push(voice);
    }
  });
  
  return categorizedVoices;
}

// Create voice selector UI
function createVoiceSelector() {
  if (document.getElementById('tts-voice-selector')) return;
  
  const selector = document.createElement('div');
  selector.id = 'tts-voice-selector';
  selector.className = 'tts-voice-selector';
  selector.innerHTML = `
    <div class="tts-voice-header">
      <span>🎙️ TTS Voice Settings</span>
      <button class="tts-close-btn" onclick="toggleVoiceSelector()">×</button>
    </div>
    <div class="tts-voice-content">
      <p>Select a female voice for text-to-speech:</p>
      <div class="tts-voices-list" id="tts-voices-list">
        <div class="tts-loading">Loading voices...</div>
      </div>
      <div class="tts-voice-controls">
        <button class="tts-test-btn" onclick="testSelectedVoice()">Test Voice</button>
        <button class="tts-save-btn" onclick="saveVoiceSelection()">Save & Close</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(selector);
  
  // Load voices into selector
  setTimeout(populateVoiceSelector, 100);
}

// Toggle voice selector visibility
function toggleVoiceSelector() {
  const selector = document.getElementById('tts-voice-selector');
  if (!selector) {
    createVoiceSelector();
    return;
  }
  
  selector.classList.toggle('visible');
  
  if (selector.classList.contains('visible')) {
    populateVoiceSelector();
  }
}

// Populate voice selector with available voices
function populateVoiceSelector() {
  const voicesList = document.getElementById('tts-voices-list');
  if (!voicesList) return;
  
  const voices = getFemaleVoices();
  const savedVoiceId = loadVoicePreference();
  
  let html = '';
  
  // Confirmed female voices
  if (voices.confirmed.length > 0) {
    html += `<div class="tts-voice-category">✅ Confirmed Female Voices</div>`;
    voices.confirmed.forEach(voice => {
      const isSelected = selectedVoiceId === voice.voiceURI || 
                        (savedVoiceId === voice.voiceURI && !selectedVoiceId);
      html += `
        <div class="tts-voice-option ${isSelected ? 'selected' : ''}" 
             data-voice-id="${voice.voiceURI}"
             onclick="selectVoice('${voice.voiceURI}')">
          <span class="tts-voice-name">${voice.name}</span>
          <span class="tts-voice-lang">${voice.lang}</span>
          <button class="tts-preview-btn" onclick="previewVoice('${voice.voiceURI}')">▶</button>
        </div>
      `;
    });
  }
  
  // Likely female voices
  if (voices.likely.length > 0) {
    html += `<div class="tts-voice-category">🔍 Likely Female Voices</div>`;
    voices.likely.forEach(voice => {
      const isSelected = selectedVoiceId === voice.voiceURI || 
                        (savedVoiceId === voice.voiceURI && !selectedVoiceId);
      html += `
        <div class="tts-voice-option ${isSelected ? 'selected' : ''}" 
             data-voice-id="${voice.voiceURI}"
             onclick="selectVoice('${voice.voiceURI}')">
          <span class="tts-voice-name">${voice.name}</span>
          <span class="tts-voice-lang">${voice.lang}</span>
          <button class="tts-preview-btn" onclick="previewVoice('${voice.voiceURI}')">▶</button>
        </div>
      `;
    });
  }
  
  // Unknown voices (for fallback)
  if (voices.unknown.length > 0) {
    html += `<div class="tts-voice-category">❓ Unknown Gender</div>`;
    voices.unknown.forEach(voice => {
      const isSelected = selectedVoiceId === voice.voiceURI || 
                        (savedVoiceId === voice.voiceURI && !selectedVoiceId);
      html += `
        <div class="tts-voice-option ${isSelected ? 'selected' : ''}" 
             data-voice-id="${voice.voiceURI}"
             onclick="selectVoice('${voice.voiceURI}')">
          <span class="tts-voice-name">${voice.name}</span>
          <span class="tts-voice-lang">${voice.lang}</span>
          <button class="tts-preview-btn" onclick="previewVoice('${voice.voiceURI}')">▶</button>
        </div>
      `;
    });
  }
  
  // Note about male voices
  if (voices.male.length > 0) {
    html += `<div class="tts-voice-category muted">🚫 Male Voices (Hidden)</div>
             <div class="tts-voice-note">${voices.male.length} male voice(s) excluded</div>`;
  }
  
  if (voices.confirmed.length === 0 && voices.likely.length === 0) {
    html = `<div class="tts-no-voices">
              <p>No female voices detected.</p>
              <p>Your system may need additional voice packages.</p>
              <button onclick="showSystemVoiceHelp()">How to add voices</button>
            </div>`;
  }
  
  voicesList.innerHTML = html;
  
  // Restore saved selection
  if (savedVoiceId && !selectedVoiceId) {
    selectVoice(savedVoiceId, true);
  }
}

// Select a voice
function selectVoice(voiceId, silent = false) {
  selectedVoiceId = voiceId;
  
  // Update UI
  document.querySelectorAll('.tts-voice-option').forEach(option => {
    option.classList.remove('selected');
    if (option.dataset.voiceId === voiceId) {
      option.classList.add('selected');
    }
  });
  
  // Preview if not silent
  if (!silent) {
    previewVoice(voiceId);
  }
}

// Preview a voice
function previewVoice(voiceId) {
  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find(v => v.voiceURI === voiceId);
  
  if (voice) {
    const utterance = new SpeechSynthesisUtterance(
      "This is what I sound like. You can use me for text-to-speech."
    );
    utterance.voice = voice;
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }
}

// Test the selected voice with longer text
function testSelectedVoice() {
  const voices = window.speechSynthesis.getVoices();
  const voiceId = selectedVoiceId || loadVoicePreference();
  const voice = voices.find(v => v.voiceURI === voiceId);
  
  if (voice) {
    const utterance = new SpeechSynthesisUtterance(
      "Hello! I'm your selected voice for reading text aloud. " +
      "I will read your content with a feminine tone. " +
      "You can adjust my speaking rate in the settings if needed."
    );
    utterance.voice = voice;
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  }
}

// Save voice selection
function saveVoiceSelection() {
  if (selectedVoiceId) {
    saveVoicePreference(selectedVoiceId);
    console.log('Voice preference saved:', selectedVoiceId);
  }
  toggleVoiceSelector();
}

// Get the user's preferred voice
function getPreferredVoice() {
  const voices = window.speechSynthesis.getVoices();
  const voiceId = selectedVoiceId || loadVoicePreference();
  
  if (voiceId) {
    const voice = voices.find(v => v.voiceURI === voiceId);
    if (voice) return voice;
  }
  
  // Fallback to first confirmed female voice
  const femaleVoices = getFemaleVoices();
  if (femaleVoices.confirmed.length > 0) {
    return femaleVoices.confirmed[0];
  }
  if (femaleVoices.likely.length > 0) {
    return femaleVoices.likely[0];
  }
  
  // Ultimate fallback (avoid male voices)
  const allVoices = voices.filter(v => {
    const name = v.name.toLowerCase();
    return !name.includes('male') && !name.includes('man');
  });
  
  return allVoices[0] || voices[0];
}

// Updated toggleTTS function using preferred voice
function toggleTTS(textElement) {
  const text = textElement.innerText || textElement.textContent;
  const trigger = textElement.querySelector('.tts-trigger') || 
                  textElement.parentElement.querySelector('.tts-trigger');
  
  // Stop if already speaking
  if (isSpeaking && currentSpeech) {
    window.speechSynthesis.cancel();
    isSpeaking = false;
    trigger.classList.remove('speaking');
    trigger.textContent = '▶';
    trigger.title = 'Read aloud';
    return;
  }
  
  // Ensure voices are loaded
  if (window.speechSynthesis.getVoices().length === 0) {
    console.warn('Voices not loaded yet');
    trigger.textContent = '⌛';
    setTimeout(() => toggleTTS(textElement), 200);
    return;
  }
  
  // Get preferred voice
  const voice = getPreferredVoice();
  
  // Create utterance
  const utterance = new SpeechSynthesisUtterance(text);
  
  if (voice) {
    utterance.voice = voice;
    utterance.lang = voice.lang;
    utterance.pitch = 1.2;
    utterance.rate = 0.95;
  } else {
    utterance.lang = 'en-US';
    utterance.pitch = 1.4;
    utterance.rate = 1.0;
  }
  
  // Event handlers
  utterance.onstart = function() {
    isSpeaking = true;
    trigger.classList.add('speaking');
    trigger.textContent = '⏸';
    trigger.title = 'Stop reading';
    currentSpeech = utterance;
  };
  
  utterance.onend = utterance.onerror = function() {
    isSpeaking = false;
    trigger.classList.remove('speaking');
    trigger.textContent = '▶';
    trigger.title = 'Read aloud';
    currentSpeech = null;
  };
  
  // Start speaking
  window.speechSynthesis.speak(utterance);
}

// Add settings button to TTS triggers
function addVoiceSettingsButton() {
  const style = document.createElement('style');
  style.textContent = `
    .tts-settings-btn {
      color: #666;
      cursor: pointer;
      font-size: 12px;
      margin-left: 5px;
      opacity: 0.6;
      transition: opacity 0.2s;
      user-select: none;
    }
    
    .tts-settings-btn:hover {
      opacity: 1;
      color: #ff4444;
    }
    
    .tts-trigger-container {
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }
  `;
  document.head.appendChild(style);
  
  // Add settings button to existing TTS triggers
  document.querySelectorAll('.tts-trigger').forEach(trigger => {
    const container = document.createElement('span');
    container.className = 'tts-trigger-container';
    
    trigger.parentNode.insertBefore(container, trigger);
    container.appendChild(trigger);
    
    const settingsBtn = document.createElement('span');
    settingsBtn.className = 'tts-settings-btn';
    settingsBtn.textContent = '⚙';
    settingsBtn.title = 'Voice settings';
    settingsBtn.onclick = toggleVoiceSelector;
    container.appendChild(settingsBtn);
  });
}

// Show system voice help
function showSystemVoiceHelp() {
  const help = `
    <div class="tts-help-modal">
      <div class="tts-help-content">
        <h3>How to Add Female Voices</h3>
        <p><strong>Windows:</strong> Settings > Time & Language > Speech > Add voices</p>
        <p><strong>macOS:</strong> System Settings > Accessibility > Spoken Content > System Voice > Manage Voices</p>
        <p><strong>Chrome/Edge:</strong> Voices are system-dependent</p>
        <p><strong>Android:</strong> Settings > Accessibility > Text-to-speech output</p>
        <button onclick="closeHelp()">Close</button>
      </div>
    </div>
  `;
  
  const modal = document.createElement('div');
  modal.innerHTML = help;
  document.body.appendChild(modal);
}

// Initialize TTS system
function initTTS() {
  // Wait for voices to load
  if (window.speechSynthesis.getVoices().length > 0) {
    availableVoices = window.speechSynthesis.getVoices();
    addVoiceSettingsButton();
  } else {
    window.speechSynthesis.onvoiceschanged = function() {
      availableVoices = window.speechSynthesis.getVoices();
      console.log(`${availableVoices.length} voices loaded`);
      addVoiceSettingsButton();
    };
  }
  
  // Add CSS for voice selector
  const css = document.createElement('style');
  css.textContent = `
    .tts-voice-selector {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.9);
      background: rgba(20, 20, 30, 0.95);
      border: 2px solid #ff4444;
      border-radius: 10px;
      padding: 0;
      width: 400px;
      max-width: 90vw;
      max-height: 80vh;
      overflow: hidden;
      z-index: 1000000;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
      box-shadow: 0 10px 40px rgba(255, 68, 68, 0.3);
    }
    
    .tts-voice-selector.visible {
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, -50%) scale(1);
    }
    
    .tts-voice-header {
      background: #ff4444;
      color: white;
      padding: 15px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: bold;
    }
    
    .tts-close-btn {
      background: none;
      border: none;
      color: white;
      font-size: 24px;
      cursor: pointer;
      line-height: 1;
      padding: 0;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .tts-close-btn:hover {
      background: rgba(255, 255, 255, 0.2);
    }
    
    .tts-voice-content {
      padding: 20px;
      overflow-y: auto;
      max-height: 60vh;
    }
    
    .tts-voice-category {
      color: #ff8888;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin: 20px 0 10px 0;
      padding-bottom: 5px;
      border-bottom: 1px solid #333;
    }
    
    .tts-voice-category.muted {
      color: #666;
    }
    
    .tts-voice-option {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid #333;
      border-radius: 5px;
      padding: 10px 15px;
      margin: 8px 0;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.2s;
    }
    
    .tts-voice-option:hover {
      background: rgba(255, 68, 68, 0.1);
      border-color: #ff4444;
    }
    
    .tts-voice-option.selected {
      background: rgba(255, 68, 68, 0.2);
      border-color: #ff4444;
      box-shadow: 0 0 10px rgba(255, 68, 68, 0.3);
    }
    
    .tts-voice-name {
      font-weight: bold;
      color: #fff;
    }
    
    .tts-voice-lang {
      color: #888;
      font-size: 12px;
      margin-left: 10px;
    }
    
    .tts-preview-btn {
      background: #444;
      border: none;
      color: white;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .tts-preview-btn:hover {
      background: #ff4444;
    }
    
    .tts-voice-controls {
      display: flex;
      gap: 10px;
      margin-top: 20px;
    }
    
    .tts-test-btn, .tts-save-btn {
      flex: 1;
      padding: 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.2s;
    }
    
    .tts-test-btn {
      background: #333;
      color: white;
    }
    
    .tts-test-btn:hover {
      background: #444;
    }
    
    .tts-save-btn {
      background: #ff4444;
      color: white;
    }
    
    .tts-save-btn:hover {
      background: #ff6666;
      transform: translateY(-2px);
    }
    
    .tts-loading, .tts-no-voices {
      text-align: center;
      padding: 40px 20px;
      color: #888;
    }
    
    .tts-voice-note {
      font-size: 11px;
      color: #666;
      margin-top: 5px;
      text-align: center;
    }
    
    .tts-help-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000001;
    }
    
    .tts-help-content {
      background: #222;
      padding: 30px;
      border-radius: 10px;
      max-width: 500px;
      border: 2px solid #ff4444;
    }
  `;
  document.head.appendChild(css);
}

// Initialize on page load
window.addEventListener('load', initTTS);
