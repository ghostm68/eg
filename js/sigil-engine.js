/* ========================================================================== */
/*                      MINRAUD & WORDSTAR SIGIL ENGINE                       */
/* ========================================================================== */

// --- UTILITIES & DJB2 HASH ENGINE ---
function stringToSeed(str) {
    if (!str) return 12345;
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) + hash) + str.charCodeAt(i);
        hash = hash & hash;
    }
    return Math.abs(hash);
}

// --- 1. DETERMINISTIC SIGIL HASH GENERATOR (#sigilCanvas) ---
function drawSigil(text) {
    const canvas = document.getElementById('sigilCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const val = text || (document.getElementById('sigilInput')?.value) || "WORDSTAR";
    const seed = stringToSeed(val);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const numPoints = 3 + (seed % 12);
    const radius = 60 + (seed % 60);

    const isClassic = document.body.classList.contains('classic-mode');
    const primaryColor = isClassic ? "#FFFF00" : "#ff0033";
    const secondaryColor = isClassic ? "#00FFFF" : "#550000";

    // Outer Ring
    ctx.strokeStyle = secondaryColor;
    ctx.lineWidth = 2;
    ctx.shadowBlur = 10;
    ctx.shadowColor = primaryColor;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius + 15, 0, Math.PI * 2);
    ctx.stroke();

    // Inner Ring
    ctx.beginPath();
    ctx.arc(centerX, centerY, 30, 0, Math.PI * 2);
    ctx.stroke();

    // Geometric Nodes & Vertex Polygon
    const points = [];
    for (let i = 0; i < numPoints; i++) {
        const angle = (i / numPoints) * Math.PI * 2;
        points.push({
            x: centerX + radius * Math.cos(angle),
            y: centerY + radius * Math.sin(angle)
        });
    }

    ctx.strokeStyle = primaryColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i < points.length; i++) {
        const targetIndex = (i * 3) % points.length;
        if (i === 0) ctx.moveTo(points[0].x, points[0].y);
        ctx.lineTo(points[targetIndex].x, points[targetIndex].y);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.shadowBlur = 0;
}

// --- 2. CHAOS MAGICK SIGIL FORGE (#sigil-canvas) ---
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

    forgeCtx.strokeStyle = Math.random() > 0.3 ? "#ff0033" : "#ffffff";
    forgeCtx.lineCap = 'round';
    forgeCtx.lineJoin = 'round';

    const connections = 3 + Math.floor(Math.random() * 4);
    const usedPoints = new Set();
    let currentPoint = Math.floor(Math.random() * numPoints);
    usedPoints.add(currentPoint);

    for (let i = 0; i < connections; i++) {
        forgeCtx.lineWidth = 1 + Math.floor(Math.random() * 3);
        forgeCtx.beginPath();
        forgeCtx.moveTo(points[currentPoint].x, points[currentPoint].y);

        let nextPoint;
        let tries = 0;
        do {
            nextPoint = Math.floor(Math.random() * numPoints);
            tries++;
        } while (usedPoints.has(nextPoint) && usedPoints.size < numPoints && tries < 15);

        usedPoints.add(nextPoint);

        const current = points[currentPoint];
        const next = points[nextPoint];

        const cpX = (current.x + next.x) / 2 + (Math.random() - 0.5) * 40;
        const cpY = (current.y + next.y) / 2 + (Math.random() - 0.5) * 40;

        forgeCtx.quadraticCurveTo(cpX, cpY, next.x, next.y);
        forgeCtx.stroke();

        currentPoint = nextPoint;
    }

    const status = document.getElementById('witch-status');
    if (status) {
        status.innerHTML = 'sigil forged • ' + new Date().toLocaleTimeString();
    }
}

// --- 3. EXPORT PROTOCOLS (PNG + TXT) ---
function exportSigilHash() {
    const canvas = document.getElementById('sigilCanvas');
    if (!canvas) return;
    const input = document.getElementById('sigilInput');
    const sessionId = Math.random().toString(36).substring(2, 15);

    const imageData = canvas.toDataURL('image/png');
    const pngLink = document.createElement('a');
    pngLink.download = `sigil_hash_${sessionId}.png`;
    pngLink.href = imageData;
    document.body.appendChild(pngLink);
    pngLink.click();
    document.body.removeChild(pngLink);

    const content = `╔═══════════════════════════════════════════════════════════════════════╗
║                         SIGIL HASH GENERATOR                          ║
║                    VISUAL CRYPTOGRAPHY ENGINE v4.2                    ║
╚═══════════════════════════════════════════════════════════════════════╝

TIMESTAMP     : ${new Date().toLocaleString()}
SESSION ID    : ${sessionId}
INPUT TEXT    : ${input?.value || 'WORDSTAR'}
SEED VALUE    : ${stringToSeed(input?.value || 'WORDSTAR')}
CANVAS SIZE   : ${canvas.width}x${canvas.height}
IMAGE FILENAME: sigil_hash_${sessionId}.png
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
}

function exportSigilForge() {
    const forgeCanvas = document.getElementById('sigil-canvas');
    if (!forgeCanvas) return;
    const sessionId = Math.random().toString(36).substring(2, 15);

    const imageData = forgeCanvas.toDataURL('image/png');
    const pngLink = document.createElement('a');
    pngLink.download = `sigil_forge_${sessionId}.png`;
    pngLink.href = imageData;
    document.body.appendChild(pngLink);
    pngLink.click();
    document.body.removeChild(pngLink);

    const content = `╔═══════════════════════════════════════════════════════════════════════╗
║                         SIGIL FORGE v4.2                              ║
║                    RITUAL SIGIL GENERATION ENGINE                     ║
╚═══════════════════════════════════════════════════════════════════════╝

TIMESTAMP     : ${new Date().toLocaleString()}
SESSION ID    : ${sessionId}
WITCH STATUS  : ${document.getElementById('witch-status')?.textContent || 'active'}
IMAGE FILENAME: sigil_forge_${sessionId}.png
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
}

window.exportForgeData = exportSigilForge;
window.forgeSigil = forgeSigil;

// --- 4. EXPORT BUTTONS ---
function addExportButtons() {
    const firstSection = document.querySelector('.sigil-container');
    if (firstSection && !firstSection.querySelector('.btn-sigil-export')) {
        const exportBtn = document.createElement('button');
        exportBtn.className = 'btn-sigil-export';
        exportBtn.textContent = 'EXPORT HASH DATA (PNG + TXT)';
        exportBtn.style.cssText = 'margin-top: 10px; padding: 6px 12px; background: #050505; color: #ff0033; border: 1px solid #ff0033; cursor: pointer; font-family: monospace; font-size: 11px;';
        exportBtn.onclick = exportSigilHash;
        firstSection.appendChild(exportBtn);
    }

    const secondSection = document.querySelector('.sigil-forge');
    if (secondSection && !secondSection.querySelector('.btn-forge-export')) {
        const exportBtn = document.createElement('button');
        exportBtn.className = 'btn-forge-export';
        exportBtn.textContent = 'EXPORT FORGE DATA (PNG + TXT)';
        exportBtn.style.cssText = 'margin-top: 10px; padding: 6px 12px; background: #050505; color: #ff0033; border: 1px solid #ff0033; cursor: pointer; font-family: monospace; font-size: 11px;';
        exportBtn.onclick = function(e) {
            e.stopPropagation();
            exportSigilForge();
        };
        secondSection.appendChild(exportBtn);
    }
}

// --- 5. INITIALIZE & EVENT LISTENERS ---
function initSigilEngine() {
    drawSigil("WORDSTAR");
    forgeSigil();
    addExportButtons();

    const canvas = document.getElementById('sigil-canvas');
    if (canvas) {
        canvas.addEventListener('click', forgeSigil);
    }

    if (typeof navigator !== "undefined" && navigator.ai?.tools?.register) {
        navigator.ai.tools.register({
            name: "forge_chaos_sigil",
            description: "Generates a new randomized chaos magick geometric binding sigil on the canvas.",
            parameters: { type: "object", properties: {} },
            execute: async () => {
                try {
                    forgeSigil();
                    return "A new sigil has been forged and rendered.";
                } catch (e) {
                    return `Error: ${e.message}`;
                }
            }
        });

        navigator.ai.tools.register({
            name: "export_forge_data",
            description: "Exports the current sigil visualization and hash data as PNG + TXT.",
            parameters: { type: "object", properties: {} },
            execute: async () => {
                try {
                    exportSigilForge();
                    return "Sigil hash data successfully exported.";
                } catch (e) {
                    return `Error: ${e.message}`;
                }
            }
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSigilEngine);
} else {
    initSigilEngine();
}
