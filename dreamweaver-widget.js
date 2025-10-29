// dreamweaver-widget.js — Dreamweaver AI Q&A (Gemma 2 & 3 only)

(async () => {
  if (document.readyState === "loading")
    await new Promise(res => document.addEventListener("DOMContentLoaded", res));

  // Load Puter SDK if not already loaded
  if (!window.puter) {
    await new Promise((res, rej) => {
      const s = document.createElement("script");
      s.src = "https://js.puter.com/v2/";
      s.onload = res;
      s.onerror = rej;
      document.head.appendChild(s);
    });
  }

  // Inject font
  const f = document.createElement("link");
  f.rel = "stylesheet";
  f.href = "https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap";
  document.head.appendChild(f);

  // Widget container
  const box = document.createElement("div");
  box.style = `
    font-family:'Share Tech Mono', monospace;
    max-width:600px;
    margin:20px auto;
    color:#eaeaff;
    background:transparent;
    text-align:left;
  `;
  box.innerHTML = `
    <h3 style="margin:0 0 8px;color:#b48fff;">Dreamweaver AI</h3>
    <select id="dw-model" style="width:100%;margin-bottom:6px;background:#1a001a;color:#eaeaff;border:1px solid #b48fff;border-radius:4px;padding:4px;">
      <option value="gemma-2">Gemma 2</option>
      <option value="gemma-3">Gemma 3</option>
    </select>
    <textarea id="dw-q" rows="3" placeholder="Ask about the text..."
      style="width:100%;background:#0b0010;color:#fff;border:1px solid #b48fff;border-radius:4px;padding:6px;margin-bottom:6px;resize:vertical;"></textarea>
    <button id="dw-send" style="width:100%;background:#b48fff;color:#0b0010;border:none;padding:6px;border-radius:4px;cursor:pointer;">Ask</button>
    <pre id="dw-out" style="white-space:pre-wrap;margin-top:8px;padding:6px;background:#0b0010;border-radius:4px;min-height:80px;color:#eaeaff;overflow:auto;"></pre>
  `;
  document.body.appendChild(box);

  const modelSel = box.querySelector("#dw-model");
  const askBtn = box.querySelector("#dw-send");
  const qBox = box.querySelector("#dw-q");
  const outBox = box.querySelector("#dw-out");

  // Load context text
  let context = "";
  try {
    const res = await fetch("./dreamweaver.txt");
    context = await res.text();
  } catch {
    try {
      const res = await fetch("https://wordstar.nexus/dreamweaver.txt");
      context = await res.text();
    } catch {
      outBox.textContent = "⚠️ Could not load dreamweaver.txt";
    }
  }

  askBtn.onclick = async () => {
    const q = qBox.value.trim();
    if (!q) return;

    askBtn.disabled = true;
    outBox.textContent = "Thinking…";

    const prompt = `You are Dreamweaver AI. Use this document as context:\n\n${context}\n\nQuestion: ${q}`;

    try {
      const stream = await window.puter.ai.chat(prompt, { model: modelSel.value, stream: true });
      outBox.textContent = "";
      for await (const chunk of stream) {
        if (chunk?.text) {
          outBox.textContent += chunk.text;
          outBox.scrollTop = outBox.scrollHeight;
        }
      }
    } catch (err) {
      console.error(err);
      outBox.textContent = "⚠️ Error retrieving response.";
    } finally {
      askBtn.disabled = false;
    }
  };
})();
