// ==========================================
// WORDSTAR NEXUS: MASTER UI & LOGIC
// ==========================================

/* --- UI TOGGLES --- */
function toggleCinema() {
    const d = document.getElementById('cinema-drawer');
    if (d) d.style.left = d.style.left === '0px' ? '-100%' : '0px';
}

function toggleHermes() {
    const h = document.getElementById('hermes-window');
    if (h) h.style.display = h.style.display === 'block' ? 'none' : 'block';
}

function toggleTheme() {
    document.body.classList.toggle('classic-mode');
    const val = document.getElementById('sigilInput');
    if (val) drawSigil(val.value);
}

function toggleMenu() {
    const m = document.getElementById('menuOverlay');
    if (m) m.style.display = (m.style.display === 'flex') ? 'none' : 'flex';
}

// ==========================================
// THE FLIPBOOK (jQuery + Turn.js + PDF.js)
// ==========================================
$(document).ready(function() {
    if (typeof $.fn.turn === 'undefined') {
        $('#flipbook').html('<div style="color:red;padding:20px;">ERROR: Turn.js not loaded</div>');
        return;
    }
    
    console.log('Turn.js loaded');
    
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';

    const rawGithubUrl = 'https://raw.githubusercontent.com/ghostm68/99/main/iranthescreenplayv3.pdf';
    const proxyUrl = 'https://lively-limitless.inkrealm.workers.dev/?url=' + encodeURIComponent(rawGithubUrl);

    let pdfDoc = null;
    let totalPages = 0;

    fetch(proxyUrl)
        .then(response => response.arrayBuffer())
        .then(buffer => pdfjsLib.getDocument({ data: buffer }).promise)
        .then(pdf => {
            pdfDoc = pdf;
            totalPages = pdf.numPages;
            console.log(`PDF loaded: ${totalPages} pages`);
            
            const $flipbook = $('#flipbook');
            const isMobile = window.innerWidth < 800;
            const width = isMobile ? window.innerWidth - 40 : 800;
            const height = isMobile ? (window.innerWidth - 40) * 1.3 : 600;
            
            $flipbook.css({ width: width, height: height });

            $flipbook.turn({
                width: width,
                height: height,
                display: isMobile ? 'single' : 'double',
                autoCenter: true,
                pages: totalPages,
                when: {
                    turning: function(e, page, view) {
                        console.log('Turning to page:', page, 'view:', view);
                        const range = $flipbook.turn('range', page);
                        for (let p = range[0]; p <= range[1]; p++) {
                            if (p > 0 && p <= totalPages && !$flipbook.turn('hasPage', p)) {
                                addPage(p);
                            }
                        }
                    },
                    turned: function(e, page, view) {
                        const ind = document.getElementById('page-indicator');
                        if (ind) ind.textContent = `PAGE: ${page}/${totalPages}`;
                    }
                }
            });

            setTimeout(() => {
                addPage(1);
                if (!isMobile) addPage(2);
                
                $flipbook.turn('update');
                setTimeout(() => {
                    $flipbook.turn('page', 1);
                }, 100);
            }, 50);

        }).catch(err => {
            console.error("PDF Error:", err);
            $('#flipbook').html(`<div style="color: red; padding: 20px;">PDF ERROR: ${err.message}</div>`);
        });

    function addPage(pageNum) {
        const $flipbook = $('#flipbook');
        if ($flipbook.turn('hasPage', pageNum)) return;

        const element = $('<div class="page" style="background:#fff;width:100%;height:100%;display:flex;align-items:center;justify-content:center;">Loading...</div>');
        
        try {
            $flipbook.turn('addPage', element, pageNum);
            renderPDFToElement(pageNum, element);
        } catch (err) {
            console.error(`Error adding page ${pageNum}:`, err);
        }
    }

    function renderPDFToElement(pageNum, element) {
        pdfDoc.getPage(pageNum).then(page => {
            const viewport = page.getViewport({ scale: 1.5 });
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            
            page.render({
                canvasContext: context,
                viewport: viewport
            }).promise.then(() => {
                element.empty().append(canvas);
            });
        });
    }
});

function nextPage() { 
    try { $('#flipbook').turn('next'); } catch(e) { console.error(e); }
}
function prevPage() { 
    try { $('#flipbook').turn('previous'); } catch(e) { console.error(e); }
}

// ==========================================
// SIGIL HASH ENGINE (djb2 Algorithm)
// ==========================================
function stringToSeed(str) {
    let hash = 0;
    if (!str || str.length === 0) return 12345;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash = hash & hash;
    }
    return Math.abs(hash);
}

function drawSigil(text) {
    const canvas = document.getElementById('sigilCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const seed = stringToSeed(text);
    const isClassic = document.body.classList.contains('classic-mode');
    const primaryColor = isClassic ? '#FFFF00' : '#FF0000';
    const secondaryColor = isClassic ? '#00FFFF' : '#550000';

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const points = 3 + (seed % 12);
    const radius = 60 + (seed % 60);

    ctx.lineWidth = 2;
    ctx.strokeStyle = primaryColor;
    ctx.shadowBlur = 10;
    ctx.shadowColor = primaryColor;

    ctx.beginPath();
    for (let i = 0; i <= points; i++) {
        const angle = (i * 2 * Math.PI) / points;
        const r = (i % 2 === 0) ? radius : radius * 0.5;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, 30, 0, Math.PI * 2);
    ctx.strokeStyle = secondaryColor;
    ctx.stroke();
}

// ==========================================
// CHAOS MAGICK FORGE ENGINE
// ==========================================
function forgeSigil() {
    const forgeCanvas = document.getElementById('sigil-canvas');
    if (!forgeCanvas) return;
    const forgeCtx = forgeCanvas.getContext('2d');
    if (!forgeCtx) return;
    
    forgeCtx.clearRect(0, 0, forgeCanvas.width, forgeCanvas.height);
    const centerX = forgeCanvas.width / 2;
    const centerY = forgeCanvas.height / 2;
    
    const numPoints = 7 + Math.floor(Math.random() * 5);
    const radius = 120;
    const points = [];
    
    for (let i = 0; i < numPoints; i++) {
        const angle = (i / numPoints) * Math.PI * 2;
        points.push({
            x: centerX + radius * Math.cos(angle),
            y: centerY + radius * Math.sin(angle)
        });
    }
    
    forgeCtx.strokeStyle = Math.random() > 0.3 ? "#ff0000" : "#ffffff";
    forgeCtx.lineCap = 'round';
    forgeCtx.lineJoin = 'round';
    
    const connections = 3 + Math.floor(Math.random() * 4);
    const usedPoints = new Set();
    const pathIntersections = [];
    
    let currentPoint = Math.floor(Math.random() * numPoints);
    usedPoints.add(currentPoint);
    
    for (let i = 0; i < connections; i++) {
        forgeCtx.lineWidth = 1 + Math.floor(Math.random() * 3);
        forgeCtx.beginPath();
        forgeCtx.moveTo(points[currentPoint].x, points[currentPoint].y);
        
        let nextPoint;
        do {
            nextPoint = Math.floor(Math.random() * numPoints);
        } while (usedPoints.has(nextPoint) && usedPoints.size < numPoints);
        
        usedPoints.add(nextPoint);
        
        const current = points[currentPoint];
        const next = points[nextPoint];
        
        const cpX = (current.x + next.x) / 2 + (Math.random() - 0.5) * 40;
        const cpY = (current.y + next.y) / 2 + (Math.random() - 0.5) * 40;
        
        forgeCtx.quadraticCurveTo(cpX, cpY, next.x, next.y);
        forgeCtx.stroke();
        
        pathIntersections.push({x: next.x, y: next.y});
        currentPoint = nextPoint;
    }
    
    const status = document.getElementById('witch-status');
    if (status) {
        status.innerHTML = 'sigil forged • ' + new Date().toLocaleTimeString();
    }
}

// ==========================================
// EXPORT FUNCTIONS (SIGIL DATA)
// ==========================================
function exportSigilHash() {
    const canvas = document.getElementById('sigilCanvas');
    if (!canvas) return;
    const input = document.getElementById('sigilInput');
    const sessionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    
    const imageData = canvas.toDataURL('image/png');
    const pngLink = document.createElement('a');
    pngLink.download = `sigil_hash_${sessionId}.png`;
    pngLink.href = imageData;
    document.body.appendChild(pngLink);
    pngLink.click();
    document.body.removeChild(pngLink);
    
    let content = `
╔═══════════════════════════════════════════════════════════════════════╗
║                         SIGIL HASH GENERATOR                          ║
║                    VISUAL CRYPTOGRAPHY ENGINE v4.2                    ║
╚═══════════════════════════════════════════════════════════════════════╝
TIMESTAMP     : ${new Date().toLocaleString()}
SESSION ID    : ${sessionId}
THEME MODE    : ${document.body.classList.contains('classic-mode') ? 'CLASSIC (CYAN/YELLOW)' : 'DEFAULT (RED)'}
INPUT TEXT    : ${input?.value || 'WORDSTAR'}
SEED VALUE    : ${stringToSeed(input?.value || 'WORDSTAR')}
`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sigil_hash_${sessionId}_metadata.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    return content;
}

function exportSigilForge() {
    const forgeCanvas = document.getElementById('sigil-canvas');
    if (!forgeCanvas) return;
    const sessionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    
    const imageData = forgeCanvas.toDataURL('image/png');
    const pngLink = document.createElement('a');
    pngLink.download = `sigil_forge_${sessionId}.png`;
    pngLink.href = imageData;
    document.body.appendChild(pngLink);
    pngLink.click();
    document.body.removeChild(pngLink);
    
    let content = `
╔═══════════════════════════════════════════════════════════════════════╗
║                         SIGIL FORGE v4.2                              ║
║                    RITUAL SIGIL GENERATION ENGINE                     ║
╚═══════════════════════════════════════════════════════════════════════╝
TIMESTAMP     : ${new Date().toLocaleString()}
SESSION ID    : ${sessionId}
FORGE STATUS  : ACTIVE
`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sigil_forge_${sessionId}_metadata.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    return content;
}

function addExportButtons() {
    const firstSection = document.querySelector('.sigil-container');
    if (firstSection && !document.getElementById('hashExportBtn')) {
        const exportBtn = document.createElement('button');
        exportBtn.id = 'hashExportBtn';
        exportBtn.textContent = 'EXPORT HASH DATA (PNG + TXT)';
        exportBtn.style.cssText = 'margin-top: 10px; padding: 5px 10px; background: #333; color: #ff0000; border: 1px solid #ff0000; cursor: pointer; font-family: monospace;';
        exportBtn.onclick = exportSigilHash; 
        firstSection.appendChild(exportBtn);
    }

    const secondSection = document.querySelector('.sigil-forge');
    if (secondSection && !document.getElementById('forgeExportBtn')) {
        const exportBtn = document.createElement('button');
        exportBtn.id = 'forgeExportBtn';
        exportBtn.textContent = 'EXPORT FORGE DATA (PNG + TXT)';
        exportBtn.style.cssText = 'margin-top: 10px; padding: 5px 10px; background: #333; color: #ff0000; border: 1px solid #ff0000; cursor: pointer; font-family: monospace;';
        exportBtn.onclick = function(event) {
            event.stopPropagation(); 
            exportSigilForge();
        };
        secondSection.appendChild(exportBtn);
    }
}

// ==========================================
// AUDIO CORE (55Hz)
// ==========================================
let audioCtx, humOsc, isPowered = false;

function togglePower() {
    const powerBtn = document.getElementById('power-toggle');
    if(!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        humOsc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        humOsc.type = 'sawtooth'; 
        humOsc.frequency.value = 55;
        gain.gain.value = 0.02;
        humOsc.connect(gain); 
        gain.connect(audioCtx.destination);
        humOsc.start();
        isPowered = true;
    } else {
        if(isPowered) {
            audioCtx.suspend();
            isPowered = false;
        } else {
            audioCtx.resume();
            isPowered = true;
        }
    }
    
    if (powerBtn) {
        if(isPowered) {
            powerBtn.innerText = "POWER: ON";
            powerBtn.classList.add('power-on');
        } else {
            powerBtn.innerText = "POWER: OFF";
            powerBtn.classList.remove('power-on');
        }
    }
}

// ==========================================
// THE ASTRAL MATRIX (Cyber-Astrology)
// ==========================================

const zodiacSigns = [
    { sign: "ARIES", glyph: "♈︎", trait: "Kinetic violence. The spark of the machine." },
    { sign: "TAURUS", glyph: "♉︎", trait: "Heavy matter. The unmovable mainframe." },
    { sign: "GEMINI", glyph: "♊︎", trait: "Fragmented frequencies. Dual-core processing." },
    { sign: "CANCER", glyph: "♋︎", trait: "Lunar memory. Nostalgia bleeding through the screen." },
    { sign: "LEO", glyph: "♌︎", trait: "Solar ego. The spotlight on the empty stage." },
    { sign: "VIRGO", glyph: "♍︎", trait: "Micro-calculations. Flawless syntax, sterile heart." },
    { sign: "LIBRA", glyph: "♎︎", trait: "Symmetrical aesthetics. The beauty of a balanced equation." },
    { sign: "SCORPIO", glyph: "♏︎", trait: "Complete systemic death and rebirth. Encrypted secrets." },
    { sign: "SAGITTARIUS", glyph: "♐︎", trait: "Infinite bandwidth. The desire to broadcast into the void." },
    { sign: "CAPRICORN", glyph: "♑︎", trait: "Cold architecture. Building prisons of glass and steel." },
    { sign: "AQUARIUS", glyph: "♒︎", trait: "Alien logic. The ghost rebelling against the machine." },
    { sign: "PISCES", glyph: "♓︎", trait: "Dissolving boundaries. The static of a collective dream." }
];

const planets = [
    { name: "SUN (CORE)", glyph: "☉", domain: "Your central operating system." },
    { name: "MOON (SUBCONSCIOUS)", glyph: "☽", domain: "Your background cache and hidden fears." },
    { name: "ASCENDANT (INTERFACE)", glyph: "ASC", domain: "The mask you present to the network." }
];

let astralAudioCtx = null;

function initZodiacGrid() {
    const grid = document.getElementById('zodiac-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    zodiacSigns.forEach((z, i) => {
        const cell = document.createElement('div');
        cell.id = `zodiac-cell-${i}`;
        cell.style.cssText = `
            border: 1px solid #333; 
            padding: 10px; 
            text-align: center; 
            color: #555;
            font-family: var(--font-mono);
            transition: all 0.5s ease;
        `;
        cell.innerHTML = `<div style="font-size: 1.5rem; margin-bottom: 5px;">${z.glyph}</div><div style="font-size: 8px;">${z.sign}</div>`;
        grid.appendChild(cell);
    });
}

// Play a celestial, glass-like drone chord
function playAstralChime() {
    if (!astralAudioCtx) {
        astralAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    // Ensure context is running (fixes browser autoplay policies)
    if (astralAudioCtx.state === 'suspended') astralAudioCtx.resume();

    // Randomize a mystical chord (Minor 9th vibe)
    const baseFreq = 220 + (Math.random() * 100); 
    const frequencies = [baseFreq, baseFreq * 1.2, baseFreq * 1.5, baseFreq * 2.0];

    frequencies.forEach((freq, index) => {
        const osc = astralAudioCtx.createOscillator();
        const gain = astralAudioCtx.createGain();
        
        osc.type = index % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.value = freq;
        
        // Slow, swelling attack and long release (like a singing bowl)
        gain.gain.setValueAtTime(0, astralAudioCtx.currentTime);
        gain.gain.linearRampToValueAtTime(0.1, astralAudioCtx.currentTime + 2);
        gain.gain.exponentialRampToValueAtTime(0.001, astralAudioCtx.currentTime + 6);
        
        osc.connect(gain);
        gain.connect(astralAudioCtx.destination);
        
        osc.start();
        osc.stop(astralAudioCtx.currentTime + 6);
    });
}

function castAlignment() {
    const readout = document.getElementById('astral-readout');
    const status = document.getElementById('astral-status');
    
    // Play Audio
    playAstralChime();

    // Reset Grid visuals
    document.querySelectorAll('[id^="zodiac-cell-"]').forEach(cell => {
        cell.style.borderColor = '#333';
        cell.style.color = '#555';
        cell.style.background = 'transparent';
    });

    status.innerHTML = "CALCULATING ORBITAL TRAJECTORIES...";
    status.style.color = "var(--red)";
    readout.innerHTML = "";

    // Generate Reading
    let readingHTML = "";
    
    planets.forEach((planet, index) => {
        // Pick a random sign
        const signIndex = Math.floor(Math.random() * zodiacSigns.length);
        const sign = zodiacSigns[signIndex];
        
        // Highlight grid cell
        setTimeout(() => {
            const cell = document.getElementById(`zodiac-cell-${signIndex}`);
            if (cell) {
                cell.style.borderColor = "var(--red)";
                cell.style.color = "var(--red)";
                cell.style.background = "rgba(255,0,0,0.1)";
            }
        }, index * 800); // Stagger the visual highlights

        // Build the text output
        readingHTML += `
            <div style="margin-bottom: 15px; opacity: 0; animation: fadeIn 1s forwards; animation-delay: ${index * 0.8}s;">
                <span style="color: var(--red); font-size: 1.2rem;">${planet.glyph} ${planet.name} in ${sign.sign} ${sign.glyph}</span><br>
                <span style="color: #888; font-size: 10px;">${planet.domain}</span><br>
                <span style="color: #ccc;">${sign.trait}</span>
            </div>
        `;
    });

    // Output to screen
    setTimeout(() => {
        readout.innerHTML = readingHTML;
        status.innerHTML = "ALIGNMENT LOCKED";
        setTimeout(() => { status.style.color = "#666"; }, 1000);
    }, 100);
}

// Add the fade-in animation to the document dynamically
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(5px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// Expose to window for the button click
window.castAlignment = castAlignment;

// ==========================================
// MASTER INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    drawSigil("WORDSTAR");
    addExportButtons();
    initZodiacGrid(); // <-- Merged the Zodiac grid builder here!
});
