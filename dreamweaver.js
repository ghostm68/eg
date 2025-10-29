import React, { useState, useCallback, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// --- START: Icon Components ---
const SparklesIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-7.182o-.001-.001a6.72 6.72 0 01-2.22 3.182.75.75 0 01-1.07-.478A5.25 5.25 0 016 13.5v-3.75a.75.75 0 01.75-.75h3.355a2.25 2.25 0 01.188 0l.001.001h.001L9.315 7.584zM12 15.375a3.75 3.75 0 013.75-3.75H18a3.75 3.75 0 013.75 3.75v3.75a3.75 3.75 0 01-3.75 3.75H15.75a3.75 3.75 0 01-3.75-3.75v-3.75z" clipRule="evenodd" />
  </svg>
);

const DocumentTextIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a.375.375 0 01-.375-.375V6.75A3.75 3.75 0 0010.5 3h-4.875C5.663 3 5.641 3 5.625 3zM12 9V4.875c0-.621.504-1.125 1.125-1.125H13.5v3.75c0 .621.504 1.125 1.125 1.125h3.75v9.375a.375.375 0 01-.375.375H5.625a.375.375 0 01-.375-.375V3.375c0-.207.168-.375.375-.375h4.875c.621 0 1.125.504 1.125 1.125V9z" clipRule="evenodd" />
    <path d="M10.5 13.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm0 3a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z" />
  </svg>
);

const PaperAirplaneIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
  </svg>
);

const ExclamationTriangleIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.598 4.5H4.644c-2.308 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
  </svg>
);

const InformationCircleIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.042.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
  </svg>
);

// --- Helper Components ---
const LoadingIndicator = ({ text }) => (
  <div className="flex flex-col items-center justify-center space-y-2 p-4 bg-gray-800/50 rounded-lg">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-light"></div>
    <p className="text-gray-400 text-sm">{text}</p>
  </div>
);

const ErrorDisplay = ({ message }) => (
  <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg relative flex items-start space-x-2" role="alert">
    <ExclamationTriangleIcon className="h-5 w-5 mt-0.5 flex-shrink-0" />
    <div>
      <strong className="font-bold">An error occurred:</strong>
      <span className="block sm:inline ml-1">{message}</span>
    </div>
  </div>
);

const AnswerDisplay = ({ answer, isLoading }) => {
  if (isLoading && !answer) {
    return <LoadingIndicator text="AI is preparing the answer..." />;
  }
  if (!answer && !isLoading) {
    return (
      <div className="flex items-start space-x-3 p-4 bg-gray-800/50 rounded-lg h-full">
        <InformationCircleIcon className="h-6 w-6 text-brand-light flex-shrink-0" />
        <p className="text-gray-400">The answer from AI will appear here once you ask a question.</p>
      </div>
    );
  }
  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <div className="text-gray-300 whitespace-pre-wrap">{answer}</div>
      {isLoading && <span className="inline-block w-2 h-4 bg-brand-light animate-pulse ml-1"></span>}
    </div>
  );
};

// --- Main App Component ---
function App() {
  const [documentContent, setDocumentContent] = useState('');
  const [tempDocumentContent, setTempDocumentContent] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isAsking, setIsAsking] = useState(false);
  const [error, setError] = useState(null);
  const [selectedModel, setSelectedModel] = useState('deepseek-chat');
  const [dreamweaverDocs, setDreamweaverDocs] = useState('');
  
  const questionTextareaRef = useRef(null);

  const availableModels = [
    { id: 'deepseek-chat', name: 'DeepSeek Chat', description: 'Best for general conversations' },
    { id: 'deepseek-reasoner', name: 'DeepSeek Reasoner', description: 'Best for complex reasoning' }
  ];

  useEffect(() => {
    const loadDreamweaverDocs = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/ghostm68/eg/refs/heads/main/dreamweaver.txt');
        const docs = await response.text();
        setDreamweaverDocs(docs);
      } catch (err) {
        console.error('Failed to load Dreamweaver docs:', err);
      }
    };
    loadDreamweaverDocs();
  }, []);

  const handleAskQuestion = useCallback(async () => {
    if (!question.trim() || !documentContent || isAsking) return;
    setError(null);
    setIsAsking(true);
    setAnswer('');

    const prompt = `DREAMWEAVER DOCS: ${dreamweaverDocs}\nUSER DOC: ${documentContent}\nQUESTION: ${question}`;
    
    try {
      const response = await window.puter.ai.chat(prompt, {
        model: selectedModel,
        stream: true
      });
      for await (const chunk of response) {
        if (chunk?.text) setAnswer(prev => prev + chunk.text);
      }
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setIsAsking(false);
    }
  }, [question, documentContent, isAsking, selectedModel, dreamweaverDocs]);
  
  const handleLoadDocument = () => {
    if (!tempDocumentContent.trim()) {
      setError("Document content cannot be empty.");
      return;
    }
    setError(null);
    setDocumentContent(tempDocumentContent);
  };

  const handleResetDocument = () => {
    setDocumentContent('');
    setTempDocumentContent('');
    setQuestion('');
    setAnswer('');
    setError(null);
  };

  if (!documentContent) {
    return (
      <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col">
        <header className="bg-gray-900/80 border-b border-gray-700 sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4 flex items-center justify-center">
            <SparklesIcon className="h-8 w-8 text-brand-primary" />
            <h1 className="ml-3 text-2xl font-bold text-white">Dreamweaver AI</h1>
          </div>
        </header>
        <main className="flex-grow container mx-auto p-8 flex flex-col items-center justify-center">
          <div className="w-full max-w-3xl flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <DocumentTextIcon className="h-6 w-6 text-brand-primary" />
              <h2 className="text-xl font-semibold text-white">Provide Document Content</h2>
            </div>
            <p className="text-gray-400">Paste the content of the document you want to analyze below.</p>
            {error && <ErrorDisplay message={error} />}
            <textarea
              value={tempDocumentContent}
              onChange={(e) => setTempDocumentContent(e.target.value)}
              rows={15}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg text-gray-200 p-3 focus:ring-2 focus:ring-brand-primary resize-y"
              placeholder="Paste your document here..."
            />
            <button
              onClick={handleLoadDocument}
              disabled={!tempDocumentContent.trim()}
              className="bg-brand-primary hover:bg-brand-secondary disabled:bg-gray-600 text-white font-bold py-3 px-5 rounded-lg self-end"
            >
              Analyze Document
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col">
      <header className="bg-gray-900/80 border-b border-gray-700 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center">
          <SparklesIcon className="h-8 w-8 text-brand-primary" />
          <h1 className="ml-3 text-2xl font-bold text-white">Dreamweaver AI</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-8 flex flex-col items-center">
        <div className="w-full max-w-3xl flex flex-col space-y-4">
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <label className="block text-sm font-medium text-gray-300 mb-2">Select AI Model</label>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              disabled={isAsking}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg text-gray-200 p-2"
            >
              {availableModels.map((model) => (
                <option key={model.id} value={model.id}>{model.name}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-800/50 border border-gray-700 rounded-lg">
            <div className="flex items-start space-x-3">
              <DocumentTextIcon className="h-5 w-5 mt-0.5 text-brand-light"/>
              <p className="text-sm text-gray-400">Document loaded and ready.</p>
            </div>
            <button onClick={handleResetDocument} className="text-sm text-brand-light hover:text-white underline">
              Use Another
            </button>
          </div>
          <div className="bg-gray-800/70 p-4 rounded-lg min-h-[20rem]">
            <AnswerDisplay answer={answer} isLoading={isAsking} />
          </div>
          {error && <ErrorDisplay message={error} />}
          <div className="flex items-end space-x-2 bg-gray-800 p-2 rounded-lg">
            <textarea
              ref={questionTextareaRef}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              rows={1}
              className="flex-grow bg-transparent border-none text-gray-200 placeholder-gray-500 resize-none"
              placeholder="Ask a question about the document..."
              disabled={isAsking}
            />
            <button
              onClick={handleAskQuestion}
              disabled={isAsking || !question.trim()}
              className="bg-brand-primary hover:bg-brand-secondary disabled:bg-gray-600 text-white font-bold p-3 rounded-full"
            >
              <PaperAirplaneIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

// --- Embedding Logic ---
const CONTAINER_ID = 'dreamweaver-ai-app';
const container = document.getElementById(CONTAINER_ID);

if (container) {
  console.log('Container found, initializing Dreamweaver AI...');
  const shadowRoot = container.attachShadow({ mode: 'open' });
  const appRoot = document.createElement('div');
  appRoot.id = 'root';
  shadowRoot.appendChild(appRoot);

  const puterScript = document.createElement('script');
  puterScript.src = 'https://js.puter.com/v2/';
  puterScript.onload = () => {
    const tailwindScript = document.createElement('script');
    tailwindScript.src = 'https://cdn.tailwindcss.com';
    tailwindScript.onload = () => {
      window.tailwind.config = {
        theme: {
          extend: {
            colors: {
              'brand-primary': '#4f46e5',
              'brand-secondary': '#7c3aed',
              'brand-light': '#a5b4fc',
            }
          }
        }
      };
      const root = ReactDOM.createRoot(appRoot);
      root.render(React.createElement(React.StrictMode, null, React.createElement(App)));
    };
    shadowRoot.appendChild(tailwindScript);
  };
  shadowRoot.appendChild(puterScript);
  
  const style = document.createElement('style');
  style.textContent = '#root { height: 100%; width: 100%; }';
  shadowRoot.appendChild(style);
} else {
  console.warn('Dreamweaver AI container not found');
}
