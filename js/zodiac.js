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
    { name: "SUN (CORE)", glyph: "☉", domain: "Current overarching system state." },
    { name: "MOON (SUBCONSCIOUS)", glyph: "☽", domain: "Background cache and hidden tides." },
    { name: "ASCENDANT (INTERFACE)", glyph: "ASC", domain: "The mask currently presented to the network." }
];
let astralAudioCtx = null;
let currentRawLogData = "";

function initZodiacGrid() {
    const grid = document.getElementById('zodiac-grid');
    if (!grid) return;
    grid.innerHTML = '';
    zodiacSigns.forEach((z, i) => {
        const cell = document.createElement('div');
        cell.id = 'zodiac-cell-' + i;
        cell.style.cssText = 'border: 1px solid #333; padding: 10px; text-align: center; color: #555; font-family: var(--ed-mono); transition: all 0.5s ease;';
        cell.innerHTML = '<div style="font-size: 1.5rem; margin-bottom: 5px;">' + z.glyph + '</div><div style="font-size: 8px;">' + z.sign + '</div>';
        grid.appendChild(cell);
    });
}

function playAstralChime() {
    try {
        if (!astralAudioCtx) astralAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (astralAudioCtx.state === 'suspended') astralAudioCtx.resume();
        const baseFreq = 220 + (Math.random() * 100);
        const frequencies = [baseFreq, baseFreq * 1.2, baseFreq * 1.5, baseFreq * 2.0];
        frequencies.forEach((freq, index) => {
            const osc = astralAudioCtx.createOscillator();
            const gain = astralAudioCtx.createGain();
            osc.type = index % 2 === 0 ? 'sine' : 'triangle';
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0.001, astralAudioCtx.currentTime);
            gain.gain.linearRampToValueAtTime(0.1, astralAudioCtx.currentTime + 1.5);
            gain.gain.linearRampToValueAtTime(0.001, astralAudioCtx.currentTime + 5.5);
            osc.connect(gain);
            gain.connect(astralAudioCtx.destination);
            osc.start();
            osc.stop(astralAudioCtx.currentTime + 6);
        });
    } catch (error) { console.warn("Audio Context blocked: ", error); }
}

function getRealSunSignIndex(month, day) {
    const thresholds = [20, 19, 21, 20, 21, 21, 23, 23, 23, 22, 22, 22];
    const signMap = [9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8];
    let index = signMap[month];
    if (day >= thresholds[month]) index = (index + 1) % 12;
    return index;
}

function castAlignment() {
    const readout = document.getElementById('readout-content');
    const status = document.getElementById('astral-status');
    const exportBtn = document.getElementById('export-container');
    if (!readout || !status) return;
    playAstralChime();
    if (exportBtn) exportBtn.style.display = "none";
    currentRawLogData = "";
    document.querySelectorAll('[id^="zodiac-cell-"]').forEach(cell => {
        cell.style.borderColor = '#333';
        cell.style.color = '#555';
        cell.style.background = 'transparent';
    });
    status.innerHTML = "SYNCING WITH LOCAL SPACETIME...";
    status.style.color = "var(--ed-accent)";
    readout.innerHTML = "";
    const now = new Date();
    const month = now.getMonth();
    const day = now.getDate();
    const hour = now.getHours();
    const sunIndex = getRealSunSignIndex(month, day);
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const moonIndex = Math.floor((dayOfYear / 2.5)) % 12;
    const ascIndex = Math.floor((dayOfYear * 24 + hour) / 2) % 12;
    const transitIndices = [sunIndex, moonIndex, ascIndex];
    let readingHTML = "";
    planets.forEach((planet, index) => {
        const signIndex = transitIndices[index];
        const sign = zodiacSigns[signIndex];
        setTimeout(() => {
            const cell = document.getElementById('zodiac-cell-' + signIndex);
            if (cell) {
                cell.style.borderColor = "var(--ed-accent)";
                cell.style.color = "var(--ed-accent)";
                cell.style.background = "rgba(255,0,0,0.15)";
            }
        }, index * 800);
        readingHTML += '<div style="margin-bottom: 15px; opacity: 0; animation: fadeIn 1s forwards; animation-delay: ' + (index * 0.8) + 's;"><span style="color: var(--ed-accent); font-size: 1.2rem;">' + planet.glyph + ' ' + planet.name + ' in ' + sign.sign + ' ' + sign.glyph + '</span><br><span style="color: #888; font-size: 10px;">' + planet.domain + '</span><br><span style="color: #ccc;">' + sign.trait + '</span></div>';
        currentRawLogData += ">> " + planet.name + " IN " + sign.sign + "\n   DOMAIN: " + planet.domain + "\n   READING: " + sign.trait + "\n\n";
    });
    setTimeout(() => {
        readout.innerHTML = readingHTML;
        status.innerHTML = "ORBITAL LOCK: " + now.toISOString().split('T')[0];
        setTimeout(() => {
            status.style.color = "#666";
            if (exportBtn) exportBtn.style.display = "block";
        }, 1000);
    }, 100);
}

function downloadAstralLog() {
    if (!currentRawLogData) return;
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const timeStr = now.toTimeString().split(' ')[0];
    const asciiLogo = '\n=========================================================\n \\ \\   / /__  _ __ __| |___| |_ __ _ _ __ \n  \\ \\ / / _ \\| \'__/ _` / __| __/ _` | \'__|\n   \\ V / (_) | | | (_| \\__ \\ || (_| | |   \n    \\_/ \\___/|_|  \\__,_|___/\\__\\__,_|_|   \n               N E X U S \n=========================================================\n:: ASTRAL MATRIX TERMINAL EXPORT\n:: ORBITAL LOCK: ' + dateStr + ' @ ' + timeStr + '\n:: AUTHORIZED BY THE 1991 SYSTEM\n=========================================================\n\n';
    const finalContent = asciiLogo + currentRawLogData + "=========================================================\n[ END OF TRANSMISSION ]\n";
    const blob = new Blob([finalContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "WORDSTAR_TRANSIT_" + dateStr + ".txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

if (!document.getElementById('astral-keyframes')) {
    const style = document.createElement('style');
    style.id = 'astral-keyframes';
    style.innerHTML = '@keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }';
    document.head.appendChild(style);
}

window.castAlignment = castAlignment;
window.downloadAstralLog = downloadAstralLog;
document.addEventListener('DOMContentLoaded', () => { initZodiacGrid(); });
