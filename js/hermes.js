import * as webllm from "https://esm.run/@mlc-ai/web-llm";

const primaryModelId = "Hermes-3-Llama-3.2-3B-q4f16_1-MLC"; 
const fallbackModelId = "Qwen2.5-0.5B-Instruct-q4f16_1-MLC";
let engine = null;

const btn = document.getElementById('loadCoreBtn');
const output = document.getElementById('hermes-output');
const genBtn = document.getElementById('transmitBtn'); 
const promptInput = document.getElementById('hermes-input'); 

async function loadModel(modelId, isFallback = false) {
    const displayName = isFallback ? "QWEN 0.5B (FALLBACK)" : "HERMES 3B";
    output.innerHTML = `INITIALIZING...<br>CONNECTING TO ${displayName}...`;

    engine = await webllm.CreateMLCEngine(modelId, {
        initProgressCallback: (report) => {
            const p = Math.round(report.progress * 100);
            output.innerHTML = `LOADING ${displayName}: ${p}%<br><span style="font-size:8px; color:#666; display:block; margin-top:4px; line-height:1.2;">${report.text}</span>`; 

            if (p === 100) {
                output.textContent = `${displayName} ONLINE. READY.`;
                if (btn) btn.style.display = 'none';

                const status = document.getElementById('nous-status');
                if (status) {
                    status.textContent = isFallback ? "FALLBACK" : "ONLINE"; 
                    status.style.color = isFallback ? "#f7f705" : "var(--primary)"; 
                }
            }
        }
    });
}

if (btn) {
    btn.onclick = async () => {
        try {
            if (!navigator.gpu) throw new Error("WebGPU unsupported or blocked on this browser.");
            btn.disabled = true; 
            btn.textContent = "SYNCING...";

            try {
                await loadModel(primaryModelId, false);
            } catch (primaryErr) {
                console.warn("Primary model initialization failed. Triggering 0.5B fallback cascade.", primaryErr);
                output.innerHTML = `<span style="color:#ff0033; font-weight:bold;">VRAM EXCEEDED / LOAD FAILED</span><br>Auto-cascading to light Qwen fallback...`;
                await new Promise(resolve => setTimeout(resolve, 2000));
                await loadModel(fallbackModelId, true);
            }
        } catch (err) { 
            output.innerHTML = `<span style="color:#ff0033; font-weight:bold;">FATAL ERR:</span> ${err.message}`; 
            btn.disabled = false;
            btn.textContent = "RETRY";
        }
    };
}

if (genBtn) {
    genBtn.onclick = async () => {
        if (!engine) return;
        const val = promptInput.value.trim();
        if (!val) return;

        genBtn.disabled = true;
        output.textContent = "THINKING..."; 
        let fullText = "";

        try {
            const chunks = await engine.chat.completions.create({ 
                messages: [
                    { role: "system", content: "You are a professional assistant." }, 
                    { role: "user", content: val }
                ],
                stream: true, 
                temperature: 0.7, 
                max_tokens: 512
            });
            for await (const chunk of chunks) {
                fullText += chunk.choices[0]?.delta?.content || "";
                output.textContent = fullText; 
                output.scrollTop = output.scrollHeight;
            }
        } catch (e) { 
            output.textContent = "ERR: " + e.message; 
        } finally { 
            genBtn.disabled = false; 
        }
    };
}
