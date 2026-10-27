/* ========================================================================== */
/*                 HYPERSIGIL SYNTHESIS ENGINE (v1.1)                  */
/* ========================================================================== */

let currentHypersigilMeta = {};

function createRNG(seed) {
    let s = seed % 2147483647;
    if (s <= 0) s += 2147483646;
    return function() {
        s = (s * 16807) % 2147483647;
        return (s - 1) / 2147483646;
    };
}

function forgeHypersigil() {
    const canvas = document.getElementById('hypersigil-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const seed = Math.floor(Math.random() * 1000000);
    const rng = createRNG(seed);
    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;

    const accent = "#ff0033";
    const white = "#ffffff";
    const dim = "rgba(255, 0, 51, 0.25)";

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "#020202";
    ctx.fillRect(0, 0, W, H);

    // Composition mode
    const modes = ["FIGURE_ONLY", "STRUCTURE_ONLY", "COMBINED"];
    const chosenMode = modes[Math.floor(rng() * modes.length)];

    // Expanded structure set (internal only)
    const archStyles = [
        "TORII", "PORTAL", "SANCTUM", "ZIGGURAT", "SPIRE",
        "RING_COLUMNS", "BROKEN_ARCH", "HEX_VAULT", "LINTEL_FRAME", "OBELISK"
    ];
    const chosenArch = archStyles[Math.floor(rng() * archStyles.length)];
    const archIndex = archStyles.indexOf(chosenArch);

    // Expanded figure set (internal only)
    const poses = [
        "HOOD", "KATANA", "LEVITATE", "KNEEL", "CLOAK_BACK",
        "STAFF", "MINIMAL", "STRIDE", "ORB_CAST", "PROFILE"
    ];
    const chosenPose = poses[Math.floor(rng() * poses.length)];
    const poseIndex = poses.indexOf(chosenPose);

    // -------------------------------------------------------------
    // LAYER 1: STRUCTURE (conditional)
    // -------------------------------------------------------------
    if (chosenMode !== "FIGURE_ONLY") {
        ctx.lineWidth = 1;
        ctx.strokeStyle = dim;

        // Blueprint grid
        for (let x = 20; x < W; x += 30) {
            ctx.beginPath();
            ctx.moveTo(x, 10); ctx.lineTo(x, H - 10);
            ctx.stroke();
        }
        for (let y = 20; y < H; y += 30) {
            ctx.beginPath();
            ctx.moveTo(10, y); ctx.lineTo(W - 10, y);
            ctx.stroke();
        }

        ctx.strokeStyle = rng() > 0.4 ? accent : white;
        ctx.lineWidth = 1.5;

        // Base steps (most structures get some)
        const baseWidth = 120 + rng() * 80;
        const steps = 2 + Math.floor(rng() * 4);
        for (let i = 0; i < steps; i++) {
            const stepW = baseWidth - (i * 20);
            const stepY = cy + 80 + (i * 10);
            ctx.strokeRect(cx - stepW / 2, stepY, stepW, 7);
        }

        // Style-specific structure
        if (chosenArch === "TORII") {
            const pillarW = 14 + rng() * 6;
            const span = 110 + rng() * 50;
            [cx - span / 2, cx + span / 2 - pillarW].forEach(px => {
                ctx.strokeRect(px, cy - 80, pillarW, 160);
            });
            ctx.strokeRect(cx - span / 2 - 20, cy - 95, span + 40, 12);
            ctx.strokeRect(cx - span / 2 - 10, cy - 78, span + 20, 7);
        } else if (chosenArch === "PORTAL") {
            const archR = 65 + rng() * 30;
            ctx.beginPath();
            ctx.arc(cx, cy - 5, archR, Math.PI, 0);
            ctx.lineTo(cx + archR, cy + 100);
            ctx.lineTo(cx - archR, cy + 100);
            ctx.closePath();
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(cx, cy - 5, archR - 16, Math.PI, 0);
            ctx.stroke();
        } else if (chosenArch === "SANCTUM") {
            const isoH = 90 + rng() * 30;
            const isoW = 70 + rng() * 25;
            ctx.beginPath();
            ctx.moveTo(cx, cy - isoH);
            ctx.lineTo(cx + isoW, cy - 15);
            ctx.lineTo(cx + isoW, cy + 80);
            ctx.lineTo(cx, cy + 115);
            ctx.lineTo(cx - isoW, cy + 80);
            ctx.lineTo(cx - isoW, cy - 15);
            ctx.closePath();
            ctx.stroke();
        } else if (chosenArch === "ZIGGURAT") {
            for (let z = 0; z < 5; z++) {
                const w = 160 - z * 24;
                ctx.strokeRect(cx - w / 2, cy - 40 + z * 22, w, 18);
            }
        } else if (chosenArch === "SPIRE" || chosenArch === "OBELISK") {
            ctx.beginPath();
            ctx.moveTo(cx, cy - 120);
            ctx.lineTo(cx + 18, cy + 90);
            ctx.lineTo(cx - 18, cy + 90);
            ctx.closePath();
            ctx.stroke();
            ctx.strokeRect(cx - 28, cy + 90, 56, 12);
        } else if (chosenArch === "RING_COLUMNS") {
            const r = 70 + rng() * 30;
            for (let c = 0; c < 6; c++) {
                const a = (c / 6) * Math.PI * 2;
                const px = cx + Math.cos(a) * r;
                const py = cy + Math.sin(a) * r * 0.6;
                ctx.strokeRect(px - 6, py - 40, 12, 80);
            }
            ctx.beginPath();
            ctx.arc(cx, cy, r + 20, 0, Math.PI * 2);
            ctx.stroke();
        } else if (chosenArch === "BROKEN_ARCH") {
            ctx.beginPath();
            ctx.arc(cx, cy, 80, Math.PI * 0.2, Math.PI * 0.8);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(cx, cy, 80, Math.PI * 1.2, Math.PI * 1.8);
            ctx.stroke();
            ctx.strokeRect(cx - 90, cy + 20, 20, 70);
            ctx.strokeRect(cx + 70, cy + 20, 20, 70);
        } else if (chosenArch === "HEX_VAULT") {
            ctx.beginPath();
            for (let h = 0; h < 6; h++) {
                const a = (h / 6) * Math.PI * 2 - Math.PI / 2;
                const x = cx + Math.cos(a) * 90;
                const y = cy + Math.sin(a) * 70;
                if (h === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.stroke();
        } else { // LINTEL_FRAME
            ctx.strokeRect(cx - 70, cy - 90, 140, 160);
            ctx.strokeRect(cx - 50, cy - 70, 100, 120);
            ctx.strokeRect(cx - 85, cy - 100, 170, 10);
        }
    }

    // -------------------------------------------------------------
    // LAYER 2: FIGURE (conditional)
    // -------------------------------------------------------------
    if (chosenMode !== "STRUCTURE_ONLY") {
        ctx.save();
        ctx.fillStyle = "#050505";
        ctx.strokeStyle = white;
        ctx.lineWidth = 1.6;

        const charY = cy + (chosenMode === "FIGURE_ONLY" ? 10 : 20);
        const facing = rng() > 0.5 ? 1 : -1;
        const scale = 0.85 + rng() * 0.4;

        // Torso / cloak
        ctx.beginPath();
        ctx.moveTo(cx - 14 * facing * scale, charY - 35 * scale);
        ctx.lineTo(cx + 25 * facing * scale, charY - 25 * scale);
        ctx.lineTo(cx + (32 + rng() * 18) * facing * scale, charY + 48 * scale);
        ctx.lineTo(cx + 6 * facing * scale, charY + 52 * scale);
        ctx.lineTo(cx - (28 + rng() * 12) * facing * scale, charY + 48 * scale);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Simple hatching
        for (let l = 0; l < 4; l++) {
            ctx.beginPath();
            ctx.moveTo(cx - 8 * facing, charY - 8 + l * 9);
            ctx.lineTo(cx - 22 * facing, charY + l * 10);
            ctx.stroke();
        }

        // Head
        const headY = charY - 46 * scale;
        ctx.beginPath();
        ctx.arc(cx, headY, 11 * scale, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Spiky hair (variable density)
        const hairCount = 4 + Math.floor(rng() * 5);
        ctx.fillStyle = white;
        for (let h = 0; h < hairCount; h++) {
            const spikeLen = (12 + rng() * 14) * scale;
            const spikeAngle = -Math.PI / 2 + (h * 0.4 * facing) - 0.3 * facing;
            ctx.beginPath();
            ctx.moveTo(cx, headY - 3);
            ctx.lineTo(cx + Math.cos(spikeAngle) * spikeLen, headY + Math.sin(spikeAngle) * spikeLen);
            ctx.lineTo(cx + Math.cos(spikeAngle + 0.18) * (spikeLen * 0.55), headY + Math.sin(spikeAngle + 0.18) * (spikeLen * 0.55));
            ctx.fill();
        }

        // Eyes
        ctx.fillStyle = accent;
        ctx.fillRect(cx - 4 * facing, headY - 2, 5, 2);

        // Pose-specific additions (light)
        if (chosenPose === "KATANA" || chosenPose === "STRIDE") {
            ctx.strokeStyle = white;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(cx - 30 * facing, charY + 35);
            ctx.lineTo(cx + 45 * facing, charY - 55);
            ctx.stroke();
        } else if (chosenPose === "STAFF" || chosenPose === "ORB_CAST") {
            ctx.beginPath();
            ctx.moveTo(cx + 10 * facing, charY - 15);
            ctx.lineTo(cx + 36 * facing, charY - 28);
            ctx.stroke();
            ctx.strokeStyle = accent;
            ctx.beginPath();
            ctx.arc(cx + 40 * facing, charY - 30, 5, 0, Math.PI * 2);
            ctx.stroke();
        } else if (chosenPose === "LEVITATE") {
            ctx.strokeStyle = accent;
            ctx.beginPath();
            ctx.moveTo(cx, charY + 45);
            ctx.bezierCurveTo(cx - 30, charY + 70, cx + 30, charY + 85, cx, charY + 105);
            ctx.stroke();
        } else if (chosenPose === "KNEEL") {
            ctx.beginPath();
            ctx.moveTo(cx - 12, charY + 30);
            ctx.lineTo(cx - 28, charY + 55);
            ctx.lineTo(cx + 8, charY + 55);
            ctx.stroke();
        }
        // Other poses stay as the base silhouette (intentional variation)

        ctx.restore();
    }

    // -------------------------------------------------------------
    // LAYER 3: SACRED GEOMETRY (always)
    // -------------------------------------------------------------
    ctx.save();
    ctx.strokeStyle = accent;
    ctx.lineWidth = 1.2;

    const sigilR = 140 + rng() * 15;
    ctx.beginPath();
    ctx.arc(cx, cy, sigilR, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, sigilR - 7, 0, Math.PI * 2);
    ctx.setLineDash([2, 4]);
    ctx.stroke();
    ctx.setLineDash([]);

    const numTicks = 18 + Math.floor(rng() * 12);
    for (let t = 0; t < numTicks; t++) {
        const rad = (t / numTicks) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(rad) * (sigilR - 7), cy + Math.sin(rad) * (sigilR - 7));
        ctx.lineTo(cx + Math.cos(rad) * sigilR, cy + Math.sin(rad) * sigilR);
        ctx.stroke();
    }

    const polyPoints = 5 + Math.floor(rng() * 5);
    const polyR = 75 + rng() * 35;
    const pts = [];
    for (let p = 0; p < polyPoints; p++) {
        const rad = (p / polyPoints) * Math.PI * 2 - Math.PI / 2;
        pts.push({ x: cx + Math.cos(rad) * polyR, y: cy + Math.sin(rad) * polyR });
    }

    ctx.beginPath();
    for (let i = 0; i < pts.length; i++) {
        const next = (i * 2) % pts.length;
        if (i === 0) ctx.moveTo(pts[0].x, pts[0].y);
        ctx.lineTo(pts[next].x, pts[next].y);
    }
    ctx.closePath();
    ctx.stroke();

    pts.forEach(pt => {
        ctx.fillStyle = rng() > 0.5 ? accent : white;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 2.5 + rng() * 1.5, 0, Math.PI * 2);
        ctx.fill();
    });

    ctx.restore();

    // Abstract / numbered metadata (no readable style names)
    const modeCode = chosenMode === "FIGURE_ONLY" ? "F" : chosenMode === "STRUCTURE_ONLY" ? "S" : "C";
    currentHypersigilMeta = {
        seed: seed,
        timestamp: new Date().toLocaleString(),
        mode: modeCode,
        arch: archIndex,
        entity: poseIndex,
        poly: polyPoints
    };

    const status = document.getElementById('hypersigil-status');
    if (status) {
        status.innerHTML = `hypersigil forged • [\( {modeCode} \){archIndex.toString().padStart(2,"0")}-\( {poseIndex} \){polyPoints}]`;
    }
}

// -----------------------------------------------------------------
// EXPORT ENGINE (PNG + TXT) — abstract labels
// -----------------------------------------------------------------
function exportHypersigil() {
    const canvas = document.getElementById('hypersigil-canvas');
    if (!canvas) return;
    const sessionId = Math.random().toString(36).substring(2, 15);

    const imageData = canvas.toDataURL('image/png');
    const pngLink = document.createElement('a');
    pngLink.download = `hypersigil_${sessionId}.png`;
    pngLink.href = imageData;
    document.body.appendChild(pngLink);
    pngLink.click();
    document.body.removeChild(pngLink);

    const m = currentHypersigilMeta;
    const content = `╔═══════════════════════════════════════════════════════════════════════╗
║                         HYPERSIGIL FORM v1.1                          ║
║                        PROCEDURAL HSF MANIFEST                        ║
╚═══════════════════════════════════════════════════════════════════════╝
TIMESTAMP        : ${m.timestamp || new Date().toLocaleString()}
SESSION ID       : ${sessionId}
SEED             : ${m.seed || 'N/A'}
MODE             : ${m.mode || '-'}
ARCH_INDEX       : ${m.arch ?? '-'}
ENTITY_INDEX     : ${m.entity ?? '-'}
POLY_POINTS      : ${m.poly || '-'}
CANVAS           : \( {canvas.width}x \){canvas.height}
IMAGE            : hypersigil_${sessionId}.png
`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hypersigil_${sessionId}_metadata.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

window.forgeHypersigil = forgeHypersigil;
window.exportHypersigil = exportHypersigil;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', forgeHypersigil);
} else {
    forgeHypersigil();
}
