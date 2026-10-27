// ============================================
// LENIS + GSAP SMOOTH SCROLL
// ============================================
const lenis = new Lenis({
    lerp: 0.05,
    duration: 1.8,
    smoothWheel: true,
    wheelMultiplier: 0.85,
});

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) lenis.scrollTo(target, { offset: -80 });
    });
});

// ============================================
// CURSOR
// ============================================
const cursor = document.querySelector('.cursor');
let mx = 0, my = 0, cx = 0, cy = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
function cursorLoop() {
    cx += (mx - cx) * 0.12;
    cy += (my - cy) * 0.12;
    cursor.style.left = cx + 'px';
    cursor.style.top = cy + 'px';
    requestAnimationFrame(cursorLoop);
}
cursorLoop();
document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

// ============================================
// FLUID TEXT ENGINE
// ============================================
// ============================================
// RESPONSIVE FLUID TEXT ENGINE
// ============================================
function initFluidText() {
    const containers = document.querySelectorAll('[data-fluid]');
    containers.forEach(container => {
        const input = container.querySelector('[data-fluid-input]');
        const output = container.querySelector('[data-fluid-output]');
        if (!input || !output) return;
        
        const rawText = input.textContent.trim();
        
        // Dynamically split sentences to keep mobile readability high
        const sentences = rawText.match(/[^.!?]+[.!?]+(\s|$)/g) || [rawText];
        const groupSize = window.innerWidth < 768 ? 2 : 4; // Shorter paragraphs on mobile
        const paragraphs = [];
        
        for (let i = 0; i < sentences.length; i += groupSize) {
            paragraphs.push(sentences.slice(i, i + groupSize).join('').trim());
        }
        
        output.innerHTML = '';
        
        paragraphs.forEach(paraText => {
            if (!paraText) return;
            const p = document.createElement('p');
            p.style.marginBottom = '28px';
            p.style.textAlign = 'justify';
            p.style.lineHeight = '1.75';
            
            const words = paraText.split(/\s+/);
            words.forEach((word, i) => {
                const span = document.createElement('span');
                span.className = 'fluid-word';
                span.textContent = word + ' ';
                span.style.transitionDelay = (i * 0.003) + 's';
                p.appendChild(span);
            });
            
            output.appendChild(p);
            
            // Attach a local ScrollTrigger to each individual paragraph
            ScrollTrigger.create({
                trigger: p,
                start: 'top 85%',
                end: 'bottom 40%',
                scrub: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const spans = p.querySelectorAll('.fluid-word');
                    const revealCount = Math.floor(progress * spans.length);
                    spans.forEach((span, i) => {
                        if (i < revealCount) {
                            span.classList.add('visible');
                        } else {
                            span.classList.remove('visible');
                        }
                    });
                }
            });
        });
        
        // Force ScrollTrigger to recalculate metrics after DOM generation
        ScrollTrigger.refresh();
    });
}

// ============================================
// GSAP REVEALS + PARALLAX
// ============================================
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.reveal').forEach((el) => {
    gsap.fromTo(el,
        { y: 60, opacity: 0 },
        {
            y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
        }
    );
});

gsap.to('[data-parallax]', {
    y: 100, ease: 'none',
    scrollTrigger: { trigger: '.ed-hero', start: 'top top', end: 'bottom top', scrub: 1.5 }
});

gsap.from('#flipbook-wrapper', {
    y: 80, opacity: 0, duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: '#flipbook-wrapper', start: 'top 80%' }
});

initFluidText();

// ============================================
// TOGGLE FUNCTIONS
// ============================================
function toggleCinema() {
    const d = document.getElementById('cinema-drawer');
    d.style.left = d.style.left === '0px' ? '-100%' : '0px';
}
function toggleHermes() {
    const h = document.getElementById('hermes-window');
    h.style.display = h.style.display === 'block' ? 'none' : 'block';
}
function toggleTheme() {
    document.body.classList.toggle('classic-mode');
}
function toggleMenu() {
    const m = document.getElementById('menuOverlay');
    m.style.display = (m.style.display === 'flex') ? 'none' : 'flex';
}

// ============================================
// FOOTER ROTATOR
// ============================================
(function() {
    const systemMessages = [
        "◈ LIVE_SYSTEM ◈ LOAD: 43% ◈ UPTIME: 316H ◈",
        "◈ SYSTEM ◈ MEMORY: 78% ◈ THREADS: 24 ◈",
        "◈ CORE ◈ TEMP: 42°C ◈ POWER: STABLE ◈",
        "◈ NETWORK ◈ LATENCY: 18ms ◈ THROUGHPUT: 94% ◈",
        "◈ VOID_STAR_V5 ◈ ARCHITECTURE: LOCKED ◈",
        "◈ NEURAL_LINK ◈ INFERENCE: LOCAL ◈ WEBLLM: ACTIVE ◈",
        "◈ SECHENOV_LOG ◈ INDEX: 1698957816 ◈ SYNC: 100% ◈"
    ];
    const statusMessages = [
        "▲ ENCRYPTION: ACTIVE ▲",
        "▲ THREAT_LEVEL: LOW ▲",
        "▲ BACKUP: SYNCHRONIZED ▲",
        "▲ HERMES_AI: COGNITION ONLINE ▲",
        "▲ REALITY: STABLE ▲",
        "▲ CUBE_RIOT: STANDBY ▲",
        "▲ SIGNAL_FORGE: BROADCASTING ▲"
    ];
    let messageIndex = 0;
    function rotateMessages() {
        const systemEl = document.getElementById('system-message');
        const statusEl = document.getElementById('status-message');
        if (!systemEl || !statusEl) return;
        systemEl.textContent = systemMessages[messageIndex % systemMessages.length];
        statusEl.textContent = statusMessages[messageIndex % statusMessages.length];
        messageIndex++;
    }
    function startRotation() {
        rotateMessages();
        setInterval(rotateMessages, 5000);
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startRotation);
    } else {
        startRotation();
    }
})();

// ============================================
// ASCII FOOTER CANVAS
// ============================================
(function() {
    const container = document.getElementById('ascii-footer');
    const canvas = document.getElementById('ascii-canvas');
    if (!container || !canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    let time = 0;
    let primaryColor = '#ff0000';
    let bgColor = '#121212';
    setInterval(() => {
        const rootStyles = getComputedStyle(document.documentElement);
        primaryColor = rootStyles.getPropertyValue('--red').trim() || '#ff0000';
        bgColor = rootStyles.getPropertyValue('--dark-grey').trim() || '#121212';
        if (container) container.style.borderColor = primaryColor;
    }, 500);
    function resize() {
        width = container.clientWidth;
        height = container.clientHeight;
        canvas.width = width;
        canvas.height = height;
    }
    window.addEventListener('resize', resize);
    resize();
    const density = " .:-=+*#%@";
    function animate() {
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = primaryColor;
        ctx.font = '14px "Courier New", Courier, monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const spacing = 18;
        const cols = Math.floor(width / spacing) + 1;
        const rows = Math.floor(height / spacing) + 1;
        for(let i = 0; i < cols; i++) {
            for(let j = 0; j < rows; j++) {
                const x = i * spacing;
                const y = j * spacing;
                const waveX = Math.sin((i * 0.15) + time);
                const waveY = Math.cos((j * 0.15) + time * 0.8);
                const value = waveX + waveY;
                let charIndex = Math.floor(((value + 2) / 4) * density.length);
                charIndex = Math.max(0, Math.min(density.length - 1, charIndex));
                const yDrift = Math.sin(time + i * 0.1) * 4;
                if (charIndex > 0) {
                    ctx.globalAlpha = charIndex / density.length;
                    ctx.fillText(density[charIndex], x, y + yDrift);
                }
            }
        }
        ctx.globalAlpha = 1.0;
        time += 0.03;
        requestAnimationFrame(animate);
    }
    animate();
})();
