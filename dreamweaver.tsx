import React, { useState, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleGenAI } from '@google/genai';

// --- START: Icon Components ---
// All icons are consolidated here for simplicity.

type IconProps = React.HTMLAttributes<SVGElement>;

const SparklesIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props} >
    <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-7.182o-.001-.001a6.72 6.72 0 01-2.22 3.182.75.75 0 01-1.07-.478A5.25 5.25 0 016 13.5v-3.75a.75.75 0 01.75-.75h3.355a2.25 2.25 0 01.188 0l.001.001h.001L9.315 7.584zM12 15.375a3.75 3.75 0 013.75-3.75H18a3.75 3.75 0 013.75 3.75v3.75a3.75 3.75 0 01-3.75 3.75H15.75a3.75 3.75 0 01-3.75-3.75v-3.75z" clipRule="evenodd" />
  </svg>
);

const DocumentTextIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a.375.375 0 01-.375-.375V6.75A3.75 3.75 0 0010.5 3h-4.875C5.663 3 5.641 3 5.625 3zM12 9V4.875c0-.621.504-1.125 1.125-1.125H13.5v3.75c0 .621.504 1.125 1.125 1.125h3.75v9.375a.375.375 0 01-.375.375H5.625a.375.375 0 01-.375-.375V3.375c0-.207.168-.375.375-.375h4.875c.621 0 1.125.504 1.125 1.125V9z" clipRule="evenodd" />
    <path d="M10.5 13.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75zm0 3a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z" />
  </svg>
);

const PaperAirplaneIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
  </svg>
);

const ExclamationTriangleIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.598 4.5H4.644c-2.308 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
  </svg>
);

const InformationCircleIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.042.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
    </svg>
);

// --- END: Icon Components ---


// --- START: React Components ---

// This component is rendered if the API key is missing.
const ApiKeyError: React.FC = () => (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center justify-center font-sans p-4">
      <div className="w-full max-w-2xl bg-red-900/50 border border-red-700 text-red-300 px-6 py-5 rounded-lg flex items-start space-x-4" role="alert">
        <ExclamationTriangleIcon className="h-8 w-8 mt-1 flex-shrink-0" />
        <div>
          <h2 className="font-bold text-lg mb-1">Configuration Error</h2>
          <p>The Gemini API key is missing. This application cannot function without it.</p>
          <p className="text-sm text-red-400 mt-2">
            Please ensure the <code>API_KEY</code> environment variable is correctly set up in your deployment environment.
          </p>
        </div>
      </div>
    </div>
);


// Helper component for loading states
const LoadingIndicator: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex flex-col items-center justify-center space-y-2 p-4 bg-gray-800/50 rounded-lg">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-light"></div>
    <p className="text-gray-400 text-sm">{text}</p>
  </div>
);

// Helper component for displaying errors
const ErrorDisplay: React.FC<{ message: string }> = ({ message }) => (
  <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg relative flex items-start space-x-2" role="alert">
    <ExclamationTriangleIcon className="h-5 w-5 mt-0.5 flex-shrink-0" />
    <div>
      <strong className="font-bold">An error occurred:</strong>
      <span className="block sm:inline ml-1">{message}</span>
    </div>
  </div>
);

// New component for rendering Markdown-like text
const FormattedAnswer: React.FC<{ text: string }> = ({ text }) => {
    const lines = text.split('\n');
    const renderedElements: React.ReactNode[] = [];
    let listItems: { key: number; content: string }[] = [];

    const closeList = (key: string) => {
        if (listItems.length > 0) {
            renderedElements.push(
                <ul key={key} className="list-disc pl-5 space-y-2 my-2">
                    {listItems.map(item => <li key={item.key} dangerouslySetInnerHTML={{ __html: item.content }} />)}
                </ul>
            );
            listItems = [];
        }
    };

    lines.forEach((line, i) => {
        let processedLine = line.trim()
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>');

        if (processedLine.startsWith('* ') || processedLine.startsWith('- ')) {
            listItems.push({ key: i, content: processedLine.substring(2) });
        } else {
            closeList(`ul-${i}`);
            if (processedLine.startsWith('### ')) {
                renderedElements.push(<h3 key={i} className="text-lg font-bold mt-4 mb-2" dangerouslySetInnerHTML={{ __html: processedLine.substring(4) }} />);
            } else if (processedLine.startsWith('## ')) {
                renderedElements.push(<h2 key={i} className="text-xl font-bold mt-4 mb-2" dangerouslySetInnerHTML={{ __html: processedLine.substring(3) }} />);
            } else if (processedLine.startsWith('# ')) {
                renderedElements.push(<h1 key={i} className="text-2xl font-bold mt-4 mb-2" dangerouslySetInnerHTML={{ __html: processedLine.substring(2) }} />);
            } else if (processedLine) {
                renderedElements.push(<p key={i} dangerouslySetInnerHTML={{ __html: processedLine }} />);
            }
        }
    });

    closeList('ul-end');

    return <>{renderedElements}</>;
};

// Helper component for the answer display, now with streaming indicator
const AnswerDisplay: React.FC<{ answer: string; isLoading: boolean }> = ({ answer, isLoading }) => {
  if (isLoading && !answer) {
    return <LoadingIndicator text="Gemini is preparing the answer..." />;
  }

  if (!answer && !isLoading) {
    return (
      <div className="flex items-start space-x-3 p-4 bg-gray-800/50 rounded-lg h-full">
        <InformationCircleIcon className="h-6 w-6 text-brand-light flex-shrink-0" />
        <p className="text-gray-400">The answer from Gemini will appear here once you ask a question.</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-800 rounded-lg prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-white prose-strong:text-white prose-ul:text-gray-300 prose-li:text-gray-300">
      <FormattedAnswer text={answer} />
      {isLoading && <span className="inline-block w-2 h-4 bg-brand-light animate-pulse ml-1" aria-hidden="true"></span>}
    </div>
  );
};


interface AppProps {
  ai: GoogleGenAI;
}

function App({ ai }: AppProps) {
  const [documentContent, setDocumentContent] = useState<string>('');
  const [tempDocumentContent, setTempDocumentContent] = useState<string>('');
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');
  const [isAsking, setIsAsking] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const questionTextareaRef = useRef<HTMLTextAreaElement>(null);

  const handleAskQuestion = useCallback(async () => {
    if (!question.trim() || !documentContent || isAsking) return;

    setError(null);
    setIsAsking(true);
    setAnswer('');

    const prompt = `Based on the following document, please provide a concise and accurate answer to the user's question. Format your response using basic markdown where appropriate (e.g., lists, bolding).

    DOCUMENT:
    ---
    ${documentContent}
    ---
    
    QUESTION:
    ${question}`;
    
    try {
        const stream = await ai.models.generateContentStream({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        for await (const chunk of stream) {
            setAnswer((prev) => prev + chunk.text);
        }

    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred while asking the question.';
        setError(errorMessage);
        console.error("Error calling Gemini API:", err);
    } finally {
        setIsAsking(false);
    }
  }, [ai, question, documentContent, isAsking]);
  
  const handleLoadDocument = () => {
    if (!tempDocumentContent.trim()) {
        setError("Document content cannot be empty.");
        return;
    }
    setError(null);
    setDocumentContent(tempDocumentContent);
  }

  const handleResetDocument = () => {
    setDocumentContent('');
    setTempDocumentContent('');
    setQuestion('');
    setAnswer('');
    setError(null);
  }

  const handleQuestionKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAskQuestion();
    }
  };
  
  const handleQuestionInput = () => {
    if (questionTextareaRef.current) {
        questionTextareaRef.current.style.height = 'auto';
        questionTextareaRef.current.style.height = `${questionTextareaRef.current.scrollHeight}px`;
    }
  };

  const commonHeader = (
    <header className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center">
        <SparklesIcon className="h-8 w-8 text-brand-primary" />
        <h1 className="ml-3 text-2xl font-bold tracking-tight text-white">Document Q&A with Gemini</h1>
        </div>
    </header>
  );

  if (!documentContent) {
    // --- Document Input View ---
    return (
      <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col font-sans">
        {commonHeader}
        <main className="flex-grow container mx-auto p-4 md:p-8 flex flex-col items-center justify-center">
          <div className="w-full max-w-3xl flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
                <DocumentTextIcon className="h-6 w-6 text-brand-primary" />
                <h2 className="text-xl font-semibold text-white">Provide Document Content</h2>
            </div>

            <p className="text-gray-400">
                Instead of fetching a file, please paste the content of the document you want to analyze below.
            </p>

            {error && <ErrorDisplay message={error} />}

            <textarea
                value={tempDocumentContent}
                onChange={(e) => setTempDocumentContent(e.target.value)}
                rows={15}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg text-gray-200 p-3 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary resize-y"
                placeholder="Paste your document here..."
            />
            <button
                onClick={handleLoadDocument}
                disabled={!tempDocumentContent.trim()}
                className="bg-brand-primary hover:bg-brand-secondary disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-5 rounded-lg transition-colors duration-200 self-end"
            >
                Analyze Document
            </button>
          </div>
        </main>
      </div>
    );
  }

  // --- Q&A View ---
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col font-sans">
      {commonHeader}
      <main className="flex-grow container mx-auto p-4 md:p-8 flex flex-col items-center">
        <div className="w-full max-w-3xl flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
                <SparklesIcon className="h-6 w-6 text-brand-primary" />
                <h2 className="text-xl font-semibold text-white">Ask about the document</h2>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-800/50 border border-gray-700 rounded-lg">
                <div className="flex items-start space-x-3">
                    <DocumentTextIcon className="h-5 w-5 mt-0.5 flex-shrink-0 text-brand-light"/>
                    <p className="text-sm text-gray-400">
                        The document you provided is loaded and ready.
                    </p>
                </div>
                <button
                    onClick={handleResetDocument}
                    className="text-sm text-brand-light hover:text-white underline"
                >
                    Use Another
                </button>
            </div>

            <div className="bg-gray-800/70 p-4 rounded-lg flex-grow min-h-[20rem] flex flex-col">
                <AnswerDisplay answer={answer} isLoading={isAsking} />
            </div>
            
            {error && <ErrorDisplay message={error} />}

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleAskQuestion();
                }}
                className="flex items-end space-x-2 bg-gray-800 p-2 rounded-lg"
            >
                <textarea
                ref={questionTextareaRef}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={handleQuestionKeyDown}
                onInput={handleQuestionInput}
                rows={1}
                className="flex-grow bg-transparent border-none text-gray-200 placeholder-gray-500 focus:ring-0 resize-none max-h-40"
                placeholder="Ask a question about the document..."
                disabled={isAsking}
                />
                <button
                type="submit"
                disabled={isAsking || !question.trim()}
                className="flex-shrink-0 bg-brand-primary hover:bg-brand-secondary disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold p-3 rounded-full transition-colors duration-200"
                aria-label="Ask question"
                >
                <PaperAirplaneIcon className="h-5 w-5" />
                </button>
            </form>
        </div>
      </main>
    </div>
  );
}

// --- END: React Components ---


// --- START: Embedding Logic ---
// This is the code that will find the container on your page and inject the app.

const CONTAINER_ID = 'gemini-qa-app'; 

const container = document.getElementById(CONTAINER_ID);

if (container) {
  // Create a Shadow DOM to encapsulate styles and structure.
  const shadowRoot = container.attachShadow({ mode: 'open' });

  // Create the root element for the React app inside the Shadow DOM.
  const appRoot = document.createElement('div');
  appRoot.id = 'root';
  shadowRoot.appendChild(appRoot);

  // Inject Tailwind CSS for styling.
  const tailwindScript = document.createElement('script');
  tailwindScript.src = 'https://cdn.tailwindcss.com';
  tailwindScript.onload = () => {
    // Configure Tailwind for our app.
    (window as any).tailwind.config = {
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

    // A slight delay ensures Tailwind is ready before rendering.
    setTimeout(() => {
        const root = ReactDOM.createRoot(appRoot);
        
        // Check for the API key before rendering the main app.
        if (!process.env.API_KEY) {
            root.render(<ApiKeyError />);
        } else { 
            // Initialize the Gemini client and pass it to the app.
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            root.render(
                <React.StrictMode>
                    <App ai={ai} />
                </React.StrictMode>
            );
        }
    }, 0);
  };
  shadowRoot.appendChild(tailwindScript);
  
  // Add base styles to ensure the app container fills the host element.
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    #root { 
      height: 100%;
      width: 100%;
    }
  `;
  shadowRoot.appendChild(styleElement);

} else {
  console.warn(`[Gemini Q&A App] Could not find container element with id #${CONTAINER_ID} to mount to.`);
}

// --- END: Embedding Logic ---
