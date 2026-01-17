// AI MODULE FOR QUANTUM WORDSTAR - NO AUDIO
// Save this as ai-module.js

// Modal functions - NO AUDIO CALLS
function openNvidiaModal() {
    document.getElementById('ai-overlay').style.display = 'block';
    document.getElementById('ai-modal').style.display = 'block';
    
    const k = localStorage.getItem('quantum_nvidia_key');
    if(k) {
        document.getElementById('nvidiaKey').value = k;
        document.getElementById('aiStatus').textContent = 'Status: API key loaded from memory';
    }
}

function closeAIModal() {
    document.getElementById('ai-overlay').style.display = 'none';
    document.getElementById('ai-modal').style.display = 'none';
}

// Main AI generation function
async function generateInsight() {
    const keyField = document.getElementById('nvidiaKey');
    const promptField = document.getElementById('aiPrompt');
    const out = document.getElementById('aiOutput');
    const btn = document.getElementById('genBtn');
    const status = document.getElementById('aiStatus');

    const apiKey = keyField.value.trim();
    const prompt = promptField.value.trim();
    const model = "nvidia/nvidia-nemotron-nano-9b-v2";
    
    // Validate
    if (!apiKey) {
        out.textContent = "ERROR: No API key provided.\n\nGet a free key from: https://build.nvidia.com";
        status.textContent = 'Status: Missing API key';
        return;
    }
    
    if (!prompt) {
        out.textContent = "ERROR: Please enter a creative prompt.";
        status.textContent = 'Status: Missing prompt';
        return;
    }
    
    // Save API key
    localStorage.setItem('quantum_nvidia_key', apiKey);
    
    // UI updates
    btn.disabled = true;
    btn.textContent = "Generating...";
    out.textContent = "⏳ AI is crafting your paragraph...";
    status.textContent = 'Status: Contacting NVIDIA API...';
    
    try {
        // Using CORS proxy
        
                const proxyUrl = 'https://corsproxy.io/?' + encodeURIComponent('https://integrate.api.nvidia.com/v1/chat/completions');
        
        const requestBody = {
            model: model,
            messages: [
                {
                    "role": "system", 
                    "content": "You are a creative writing assistant specializing in cyberpunk, sci-fi, and poetic prose. Write with rich descriptions, compelling imagery, and atmospheric mood. Focus on showing rather than telling."
                },
                {
                    "role": "user", 
                    "content": prompt
                }
            ],
            temperature: 0.8,
            max_tokens: 500,
            stream: false
        };

        const response = await fetch(proxyUrl, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        // Check response
        const responseText = await response.text();

        if (!response.ok) {
            throw new Error(`API error: ${response.status} - ${responseText.substring(0, 100)}`);
        }

        let data;
        try {
            data = JSON.parse(responseText);
        } catch (parseError) {
            throw new Error(`Invalid JSON response from AI`);
        }
        
        if (data.choices && data.choices[0] && data.choices[0].message) {
            const generatedText = data.choices[0].message.content;
            
            // Display in modal
            out.textContent = generatedText;
            
            // Insert into main editor
            const viewport = document.getElementById('viewport');
            if (viewport) {
                viewport.focus();
                document.execCommand('insertHTML', false, 
                    `<br><br><span style="color:#ff0000;text-shadow:0 0 5px #ff0000">[AI-GENERATED]</span><br>${generatedText}<br>`
                );
            }
            
            status.textContent = `Status: Generated ${generatedText.split(' ').length} words | Model: ${model}`;
            
        } else if (data.error) {
            throw new Error(data.error.message || 'API returned an error');
        } else {
            throw new Error('Unexpected response format from AI');
        }

    } catch (error) {
        console.error('AI Generation Error:', error);
        out.textContent = '❌ Error: ' + error.message;
        status.textContent = 'Status: Generation failed';
    } finally {
        btn.disabled = false;
        btn.textContent = "Generate Paragraph";
    }
}

// Initialize when page loads
window.addEventListener('load', function() {
    // Click handler for mode indicator
    const modeIndicator = document.getElementById('mode-indicator');
    if (modeIndicator) {
        modeIndicator.addEventListener('click', openNvidiaModal);
        modeIndicator.style.cursor = 'pointer';
    }
    
    console.log('AI Module initialized (no audio)');
});

// Export functions to global scope
window.openNvidiaModal = openNvidiaModal;
window.closeAIModal = closeAIModal;
window.generateInsight = generateInsight;
