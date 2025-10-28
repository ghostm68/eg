import React, { useState, useEffect, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleGenAI } from "@google/genai";

// --- START: Gemini Service ---
// ---  START: Gemini Service ---
// Note: This service is now initialized only after checking for the API key.
// ---  END: Gemini Service ---

// ...

interface AppProps {
  ai: GoogleGenAI;
}

function  App({ ai }: AppProps) {
    // ...
    const askQuestionAboutDocument = useCallback(async (doc : string, q: string): Promise<string> => {
        // ... uses the 'ai' prop
     }, [ai]);
    // ...
}

// ...

// --- START: Embedding Logic ---
//  ...
if (container) {
    // ...
    // Check for the API key before rendering the main app
    if  (!process.env.API_KEY) {
        root.render(<ApiKeyError />);
    } else { 
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        root. render(
            <React.StrictMode>
                <App ai={ai} />
            </React.StrictMode >
        );
    }
    // ...
}

async function askQuestionAboutDocument(documentContent: string, question: string): Promise<string> {
    try {
        const prompt = `Based on the following document, please provide a concise and accurate answer to the user's question.

        DOCUMENT:
        ---
        ${documentContent}
        ---
        
        QUESTION:
        ${question}`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-pro',
            contents: prompt,
        });

        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        if (error instanceof Error) {
            return `Failed to get answer from Gemini: ${error.message}`;
        }
        return "An unexpected error occurred while communicating with the Gemini API.";
    }
}
// --- END: Gemini Service ---


// --- START: Icon Components ---
type IconProps = React.HTMLAttributes<SVGElement>;

const SparklesIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
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


// --- START: Main App Component ---
const DOCUMENT_URL = 'https://wordstar.nexus/dreamweaver.txt';

const LoadingIndicator: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex flex-col items-center justify-center space-y-2 p-4 bg-gray-800/50 rounded-lg">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-light"></div>
    <p className="text-gray-400 text-sm">{text}</p>
  </div>
);

const ErrorDisplay: React.FC<{ message: string }> = ({ message }) => (
  <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg relative flex items-start space-x-2" role="alert">
    <ExclamationTriangleIcon className="h-5 w-5 mt-0.5 flex-shrink-0" />
    <div>
      <strong className="font-bold">An error occurred:</strong>
      <span className="block sm:inline ml-1">{message}</span>
    </div>
  </div>
);

const AnswerDisplay: React.FC<{ answer: string; isLoading: boolean }> = ({ answer, isLoading }) => {
  if (isLoading) {
    return <LoadingIndicator text="Gemini is analyzing..." />;
  }

  if (!answer) {
    return (
      <div className="flex items-start space-x-3 p-4 bg-gray-800/50 rounded-lg h-full">
        <InformationCircleIcon className="h-6 w-6 text-brand-light flex-shrink-0" />
        <p className="text-gray-400">The answer from Gemini will appear here once you ask a question.</p>
      </div>
    );
  }

  const formattedAnswer = answer.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div className="p-4 bg-gray-800 rounded-lg prose prose-invert max-w-none prose-p:text-gray-300">
      <p>{formattedAnswer}</p>
    </div>
  );
};

function App() {
  const [documentContent, setDocumentContent] = useState<string>('');
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');
  const [isFetchingDoc, setIsFetchingDoc] = useState<boolean>(true);
  const [isAsking, setIsAsking] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const fetchDocument = async () => {
      setError(null);
      setIsFetchingDoc(true);
      try {
        const response = await fetch(DOCUMENT_URL);
        if (!response.ok) {
          throw new Error(`Failed to fetch document. Status: ${response.status}`);
        }
        const text = await response.text();
        setDocumentContent(text);
      } catch (err: unknown) {
        if (err instanceof Error) {
            let errorMessage = err.message;
            if (err instanceof TypeError) {
                 errorMessage += ' This might be a CORS issue. The server at the specified URL needs to allow requests from this origin.';
            }
          setError(errorMessage);
        } else {
          setError('An unknown error occurred while fetching the document.');
        }
      } finally {
        setIsFetchingDoc(false);
      }
    };

    fetchDocument();
  }, []);

  const handleAskQuestion = useCallback(async () => {
    if (!question.trim() || !documentContent || isAsking) return;

    setError(null);
    setIsAsking(true);
    setAnswer('');

    try {
      const result = await askQuestionAboutDocument(documentContent, question);
      setAnswer(result);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred while asking the question.');
      }
    } finally {
      setIsAsking(false);
    }
  }, [question, documentContent, isAsking]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAskQuestion();
    }
  };
  
  const handleInput = () => {
    if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col font-sans">
      <header className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center">
          <SparklesIcon className="h-8 w-8 text-brand-primary" />
          <h1 className="ml-3 text-2xl font-bold tracking-tight text-white">Document Q&A with Gemini</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4 md:p-8 flex flex-col items-center justify-center">
        {isFetchingDoc ? (
            <LoadingIndicator text="Fetching document..." />
        ) : error && !documentContent ? (
            <div className="w-full max-w-3xl">
                <ErrorDisplay message={error}/>
            </div>
        ) : (
            <div className="w-full max-w-3xl flex flex-col space-y-4">
                <div className="flex items-center space-x-2">
                    <SparklesIcon className="h-6 w-6 text-brand-primary" />
                    <h2 className="text-xl font-semibold text-white">Ask about the document</h2>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-gray-800/50 border border-gray-700 rounded-lg">
                    <DocumentTextIcon className="h-5 w-5 mt-0.5 flex-shrink-0 text-brand-light"/>
                    <p className="text-sm text-gray-400">
                        The document from <code className="bg-gray-700 rounded px-1 text-xs text-gray-300">{DOCUMENT_URL}</code> is loaded. You can now ask questions about its content.
                    </p>
                </div>

                <div className="bg-gray-800/70 p-4 rounded-lg flex-grow min-h-[20rem] flex flex-col">
                   <AnswerDisplay answer={answer} isLoading={isAsking} />
                </div>
                
                {error && documentContent && <ErrorDisplay message={error} />}

                <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleAskQuestion();
                    }}
                    className="flex items-end space-x-2 bg-gray-800 p-2 rounded-lg"
                >
                    <textarea
                    ref={textareaRef}
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onInput={handleInput}
                    rows={1}
                    className="flex-grow bg-transparent border-none text-gray-200 placeholder-gray-500 focus:ring-0 resize-none max-h-40"
                    placeholder="Ask a question about the document..."
                    disabled={isAsking || isFetchingDoc || !documentContent}
                    />
                    <button
                    type="submit"
                    disabled={isAsking || !question.trim() || !documentContent}
                    className="flex-shrink-0 bg-brand-primary hover:bg-brand-secondary disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold p-3 rounded-full transition-colors duration-200"
                    aria-label="Ask question"
                    >
                    <PaperAirplaneIcon className="h-5 w-5" />
                    </button>
                </form>
            </div>
        )}
      </main>
    </div>
  );
}
// --- END: Main App Component ---


// --- START: Embedding Logic ---
const CONTAINER_ID = 'gemini-qa-app'; 
const container = document.getElementById(CONTAINER_ID);

if (container) {
  const shadowRoot = container.attachShadow({ mode: 'open' });
  const appRoot = document.createElement('div');
  appRoot.id = 'root';
  shadowRoot.appendChild(appRoot);

  const tailwindScript = document.createElement('script');
  tailwindScript.src = 'https://cdn.tailwindcss.com';
  tailwindScript.onload = () => {
    // FIX: The `require` function is a Node.js feature and is not available in the browser.
    // The typography plugin is loaded via the CDN script, so the `plugins` configuration is not needed.
    (window as any).tailwind.config = {
      theme: {
        extend: {
          typography: ({ theme }: any) => ({
            invert: {
              css: {
                '--tw-prose-body': theme('colors.gray[300]'),
                '--tw-prose-headings': theme('colors.white'),
                '--tw-prose-lead': theme('colors.gray[400]'),
                '--tw-prose-links': theme('colors.white'),
                '--tw-prose-bold': theme('colors.white'),
                '--tw-prose-counters': theme('colors.gray[400]'),
                '--tw-prose-bullets': theme('colors.gray[600]'),
                '--tw-prose-hr': theme('colors.gray[700]'),
                '--tw-prose-quotes': theme('colors.gray[100]'),
                '--tw-prose-quote-borders': theme('colors.gray[700]'),
                '--tw-prose-captions': theme('colors.gray[400]'),
                '--tw-prose-code': theme('colors.white'),
                '--tw-prose-pre-code': theme('colors.gray[300]'),
                '--tw-prose-pre-bg': theme('colors.gray[900]'),
                '--tw-prose-th-borders': theme('colors.gray[600]'),
                '--tw-prose-td-borders': theme('colors.gray[700]'),
              },
            },
          }),
          colors: {
            'brand-primary': '#4f46e5',
            'brand-secondary': '#7c3aed',
            'brand-light': '#a5b4fc',
          }
        }
      },
      plugins: [
        // require('@tailwindcss/typography'), // This is removed
      ],
    };
    
    // The CDN version of Tailwind Typography plugin needs to be loaded separately.
    const typographyScript = document.createElement('script');
    typographyScript.src = 'https://cdn.tailwindcss.com/3.4.1?plugins=typography';
    typographyScript.onload = () => {
        // Now that both scripts are loaded, render the app
        setTimeout(() => {
            const root = ReactDOM.createRoot(appRoot);
            root.render(
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            );
        }, 0);
    };
    shadowRoot.appendChild(typographyScript);
  };
  shadowRoot.appendChild(tailwindScript);
  
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
