"use client"
import React, { useState } from 'react';

const PDFChatViewer = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-900">
      {/* Toolbar */}
      <div className="bg-gray-800 px-6 py-3 border-b border-gray-700">
        <h1 className="text-white text-xl font-semibold">Document Viewer</h1>
      </div>

      {/* Main container with 75/25 split */}
      <div className="flex flex-1 h-full overflow-hidden">
        {/* PDF viewer section (75%) */}
        <div className="w-3/4 h-full p-4">
          <div className="h-full rounded-lg overflow-hidden bg-white shadow-lg">
            <style jsx global>{`
              object {
                /* Remove default browser chrome */
                border: none;
                background: transparent;
              }

              /* Target the PDF viewer's toolbar */
              ::-webkit-scrollbar {
                width: 10px;
                height: 10px;
              }

              ::-webkit-scrollbar-track {
                background: #1f2937;
                border-radius: 5px;
              }

              ::-webkit-scrollbar-thumb {
                background: #4B5563;
                border-radius: 5px;
              }

              ::-webkit-scrollbar-thumb:hover {
                background: #6B7280;
              }

              /* Hide default PDF controls in Firefox */
              object[type="application/pdf"] {
                min-height: 100%;
              }
            `}</style>
            <object
              data="https://bitcoin.org/bitcoin.pdf"
              type="application/pdf"
              className="w-full h-full"
            >
              <div className="flex items-center justify-center h-full bg-gray-800 text-white p-8 text-center">
                <div>
                  <p className="mb-4">Your browser cannot display this PDF.</p>
                  <a 
                    href="https://bitcoin.org/bitcoin.pdf" 
                    download
                    className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </object>
          </div>
        </div>

        {/* Chat section (25%) */}
        <div className="w-1/4 h-full bg-gray-800 flex flex-col border-l border-gray-700">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-white font-medium">Discussion</h2>
          </div>

          {/* Messages area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className="p-3 bg-gray-700 rounded-lg text-white text-sm"
              >
                {msg}
              </div>
            ))}
          </div>

          {/* Input area */}
          <form onSubmit={handleSubmit} className="p-4 bg-gray-800 border-t border-gray-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm font-medium"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PDFChatViewer;