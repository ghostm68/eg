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
// THE MEMEX
// ==========================================
function initMemex() {
    const memexEntries = {
        mathematics: { title: "ON THE BINARY SYSTEM", content: "Leibniz (1703): 'The binary system, using only 0 and 1, reflects the creation ex nihilo. God is 1, the void is 0.' This became the foundation of all computing machinery.", reel: "REEL 7", year: "1703" },
        music: { title: "THE HARMONIC SERIES", content: "Pythagoras discovered that musical intervals correspond to simple ratios: octave (2:1), fifth (3:2), fourth (4:3). The universe itself is a monochord.", reel: "REEL 12", year: "550 BCE" },
        cryptography: { title: "THE ZODIAC CIPHERS", content: "Unsolved since 1969. The 340-character cipher was recently partially cracked, but the 408 remains a mystery. Some believe it contains coordinates.", reel: "REEL 4", year: "1969" },
        alchemy: { title: "MUTUS LIBER (1677)", content: "The 'Mute Book' - a wordless alchemical text showing only illustrations of the Great Work. The transformation of matter mirrors the transformation of the soul.", reel: "REEL 3", year: "1677" },
        automata: { title: "THE TURK (1770)", content: "A chess-playing automaton that defeated Napoleon and Benjamin Franklin. It was a hoax - a human chess master hid inside. But it sparked dreams of thinking machines.", reel: "REEL 9", year: "1770" },
        consciousness: { title: "THE CHINESE ROOM", content: "Searle's 1980 thought experiment: If a person follows rules to manipulate symbols without understanding them, is the system conscious? The Memex asks the same question.", reel: "REEL 16", year: "1980" },
        ciphers: { title: "THE COPPERPLATE CIPHER", content: "Used by Mary Queen of Scots in 1586. Her encoded letters led to her execution. The cipher was broken, but 57 years later, her decoder ring was found in a wall.", reel: "REEL 2", year: "1586" },
        invisibleInk: { title: "SYMPATHETIC INK", content: "Ovid mentioned milk-as-ink in 1 BCE. During WWI, POWs used semen as invisible ink (it glows under UV). The message appears only when heated or treated.", reel: "REEL 8", year: "1 BCE" },
        deadDrops: { title: "THE HOLLOW NICKEL", content: "In 2010, a dead drop was found in a NYC park bench - a hollow nickel containing a microfilm with 27 agent identities. The spy was never caught.", reel: "REEL 11", year: "2010" }
    };

    const trails = { 1: ['mathematics', 'music', 'cryptography'], 2: ['alchemy', 'automata', 'consciousness'], 3: ['ciphers', 'invisibleInk', 'deadDrops'] };

    const leftScreen = document.querySelectorAll('.microfilm-display')[0];
    const rightScreen = document.querySelectorAll('.microfilm-display')[1];
    const trailDisplay = document.getElementById('trail-display');
    if (!leftScreen || !rightScreen) return; // Exit if Memex not on page

    const levers = document.querySelectorAll('.memex-lever');
    const trailItems = document.querySelectorAll('.trail-item');
    const userTrail = document.getElementById('user-trail');
    const saveTrailBtn = document.getElementById('save-trail');
    const exportBtn = document.getElementById('export-artifact');
    const artifactContainer = document.getElementById('artifact-container');
    const reelIndicators = document.querySelectorAll('.reel-indicator');
    
    let currentTrail = 1, currentIndex = 0, userTrailItems = [], savedTrails = JSON.parse(localStorage.getItem('memexTrails')) || [], currentArtifact = null;

    function formatEntryForScreen(entry, isPrimary = true) {
        return `<div style="padding: 15px; font-family: var(--font-mono); height: 100%; display: flex; flex-direction: column;">
            <div style="font-size: 7px; color: #666; margin-bottom: 8px; display: flex; justify-content: space-between;"><span>${entry.reel}</span><span style="color: ${isPrimary ? 'var(--red)' : '#444'};">${entry.year}</span></div>
            <div style="font-size: 11px; color: ${isPrimary ? 'var(--red)' : '#666'}; margin-bottom: 10px; font-weight: bold;">${entry.title}</div>
            <div style="font-size: 9px; color: #888; line-height: 1.5; flex: 1; overflow-y: auto;">${entry.content}</div>
            <div style="font-size: 7px; color: #333; margin-top: 8px; border-top: 1px dashed #333; padding-top: 5px;">[MICROFILM // ${isPrimary ? 'PRIMARY' : 'ASSOCIATION'}]</div></div>`;
    }

    function updateScreens(entryKey) {
        const entry = memexEntries[entryKey];
        if (!entry) return;
        leftScreen.innerHTML = formatEntryForScreen(entry, true);
        const trail = trails[currentTrail];
        const nextKey = trail[trail.indexOf(entryKey) + 1] || trail[0];
        if (nextKey && memexEntries[nextKey]) {
            const next = memexEntries[nextKey];
            rightScreen.innerHTML = `<div style="padding: 15px; font-family: var(--font-mono); height: 100%; display: flex; flex-direction: column; opacity: 0.8;"><div style="font-size: 7px; color: #666; margin-bottom: 8px;">NEXT IN TRAIL ↓</div><div style="font-size: 10px; color: #666; margin-bottom: 5px;">${next.title}</div><div style="font-size: 8px; color: #444; line-height: 1.4;">${next.content.substring(0, 80)}...</div></div>`;
        }
        if (trailDisplay) trailDisplay.innerHTML = `<span style="color: #666;">CURRENT TRAIL:</span> [ ${trail.map(k => memexEntries[k].title.split(' ').slice(0, 2).join(' ')).join(' → ')} ]<br><span style="color: var(--red); font-size: 9px;">VIEWING: ${entry.title}</span>`;
        if (reelIndicators[0]) reelIndicators[0].textContent = entry.reel;
    }

    function navigateTrail(direction) {
        const trail = trails[currentTrail];
        currentIndex = (currentIndex + direction + trail.length) % trail.length;
        updateScreens(trail[currentIndex]);
    }

    leftScreen.addEventListener('click', () => navigateTrail(1));
    rightScreen.addEventListener('click', () => navigateTrail(-1));

    levers.forEach(lever => {
        lever.addEventListener('click', function() {
            currentTrail = parseInt(this.dataset.trail);
            currentIndex = 0;
            levers.forEach(l => { l.style.borderColor = '#333'; l.style.color = '#666'; });
            this.style.borderColor = 'var(--red)'; this.style.color = 'var(--red)';
            updateScreens(trails[currentTrail][0]);
        });
    });

    trailItems.forEach(item => {
        item.addEventListener('click', function() {
            const term = this.dataset.term;
            if (this.style.background === 'var(--red)') {
                this.style.background = 'transparent'; this.style.color = 'var(--text-main)'; this.style.borderColor = '#333';
                userTrailItems = userTrailItems.filter(t => t !== term);
            } else {
                if (userTrailItems.length < 5) {
                    this.style.background = 'var(--red)'; this.style.color = '#000'; this.style.borderColor = 'var(--red)';
                    userTrailItems.push(term);
                } else { alert('MAXIMUM TRAIL LENGTH: 5 ITEMS'); return; }
            }
            if (userTrail) userTrail.innerHTML = userTrailItems.length > 0 ? userTrailItems.map((t, i) => `<span style="border: 1px solid var(--red); padding: 8px 12px; font-size: 9px; background: rgba(255,0,0,0.1);">${i+1}. ${memexEntries[t].title} (${memexEntries[t].year})</span>`).join('<span style="color: var(--red); font-size: 12px;"> → </span>') : '<span style="color: #444; font-style: italic;">← select items to build your associative trail</span>';
            if (exportBtn) {
                exportBtn.disabled = userTrailItems.length < 2;
                exportBtn.style.borderColor = userTrailItems.length >= 2 ? 'var(--red)' : '#333';
                exportBtn.style.color = userTrailItems.length >= 2 ? 'var(--red)' : '#666';
            }
        });
    });

    updateScreens('mathematics');
    if (levers[0]) { levers[0].style.borderColor = 'var(--red)'; levers[0].style.color = 'var(--red)'; }

    // Expose Memex API to Window for WebMCP Tool Control
    window.updateScreens = updateScreens;
    window.nextAssociation = () => navigateTrail(1);
    window.prevAssociation = () => navigateTrail(-1);
    window.bindTrail = () => { if (saveTrailBtn) saveTrailBtn.click(); };
    window.saveArtifact = () => { if (exportBtn) exportBtn.click(); };
}

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    drawSigil("WORDSTAR");
    addExportButtons();
    initMemex();
});
