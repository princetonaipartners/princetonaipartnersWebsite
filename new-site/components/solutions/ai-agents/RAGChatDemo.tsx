'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, FileText, Sparkles, DollarSign } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  sources?: string[];
}

const suggestedQuestions = [
  "What services does Princeton AI offer?",
  "How much does web development cost?",
  "What's the difference between RAG and ChatGPT?",
  "Do you provide ongoing support?",
];

const demoResponses: Record<string, { answer: string; sources: string[] }> = {
  "What services does Princeton AI offer?": {
    answer: "Princeton AI Partners offers custom software development services including Web Development, AI Agents (RAG), AI Phone Systems, Process Automation, Custom Bots, and Web Scraping. We specialize in building AI-powered solutions that solve real business problems.",
    sources: ["services.md", "homepage.md"],
  },
  "How much does web development cost?": {
    answer: "Web development pricing ranges from $1,000 for a starter 5-page site to $15,000+ for premium enterprise solutions. The Professional tier ($5,000) includes AI-driven SEO optimization and is our most popular package for growing businesses.",
    sources: ["pricing.md", "web-development.md"],
  },
  "What's the difference between RAG and ChatGPT?": {
    answer: "RAG (Retrieval Augmented Generation) differs from generic ChatGPT in that it searches your specific documents first, then generates answers based on YOUR data. This means 98.7% accuracy vs ChatGPT's tendency to hallucinate when it doesn't know something. RAG cites sources, ChatGPT doesn't.",
    sources: ["rag-explainer.md", "technical-docs.md"],
  },
  "Do you provide ongoing support?": {
    answer: "Yes! All packages include ongoing support. Starter gets 30 days, Professional gets 90 days priority support, and Premium gets 6 months of dedicated support. We also offer monthly maintenance plans for continuous updates and optimization.",
    sources: ["support.md", "pricing.md"],
  },
};

export function RAGChatDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm a RAG agent trained on Princeton AI's documentation. Ask me anything about our services, pricing, or technology. I'll search our knowledge base and give you an accurate answer with sources.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [tokenCount, setTokenCount] = useState(0);

  const handleSend = () => {
    if (!input.trim() || isThinking) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsThinking(true);

    // Simulate RAG search and response
    setTimeout(() => {
      const response = demoResponses[userMessage] || {
        answer: "I found information related to your question in our documentation. Princeton AI specializes in custom AI solutions. For specific details, I can search our knowledge base of 47 documents covering services, pricing, case studies, and technical specifications.",
        sources: ["general-info.md"],
      };

      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: response.answer,
          sources: response.sources,
        },
      ]);

      // Simulate token usage (rough estimate)
      const tokens = Math.floor((userMessage.length + response.answer.length) / 4);
      setTokenCount(prev => prev + tokens);
      setIsThinking(false);
    }, 1500);
  };

  const handleSuggestion = (question: string) => {
    setInput(question);
  };

  return (
    <div className="h-[600px] bg-white dark:bg-dark-bg-primary rounded-2xl shadow-2xl border border-neutral-200 dark:border-dark-border flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-neutral-200 dark:border-dark-border">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-text-primary dark:text-dark-text-primary">
                Princeton AI RAG Agent
              </h3>
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                47 documents indexed
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold text-green-700 dark:text-green-300">
              Live
            </span>
          </div>
        </div>

        {/* Cost Counter */}
        <div className="flex items-center gap-2 text-xs text-text-tertiary dark:text-dark-text-tertiary">
          <DollarSign className="w-3 h-3" />
          <span>
            {tokenCount} tokens used (~$
            {(tokenCount * 0.00001).toFixed(4)})
          </span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <AnimatePresence initial={false}>
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white'
                    : 'bg-neutral-50 dark:bg-dark-bg-secondary text-text-primary dark:text-dark-text-primary'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>

                {/* Sources */}
                {message.sources && message.sources.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-neutral-200 dark:border-neutral-700">
                    <div className="flex items-center gap-2 text-xs text-text-tertiary dark:text-dark-text-tertiary mb-2">
                      <FileText className="w-3 h-3" />
                      <span className="font-semibold">Sources:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {message.sources.map((source, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 rounded-md bg-white dark:bg-dark-bg-primary text-xs font-mono text-brand-primary dark:text-dark-brand-primary"
                        >
                          {source}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}

          {isThinking && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-start"
            >
              <div className="bg-neutral-50 dark:bg-dark-bg-secondary rounded-2xl px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-brand-primary animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 rounded-full bg-brand-primary animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 rounded-full bg-brand-primary animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                  <span className="text-xs text-text-tertiary dark:text-dark-text-tertiary">
                    Searching knowledge base...
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Suggested Questions */}
      {messages.length === 1 && (
        <div className="px-6 pb-4">
          <p className="text-xs text-text-tertiary dark:text-dark-text-tertiary mb-2">
            Try asking:
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((question, idx) => (
              <button
                key={idx}
                onClick={() => handleSuggestion(question)}
                className="px-3 py-1.5 rounded-lg bg-neutral-50 dark:bg-dark-bg-secondary text-xs text-text-secondary dark:text-dark-text-secondary hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-brand-primary dark:hover:text-dark-brand-primary transition-all border border-neutral-200 dark:border-dark-border"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-6 border-t border-neutral-200 dark:border-dark-border">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about services, pricing, technology..."
            className="flex-1 px-4 py-3 rounded-xl border border-neutral-300 dark:border-dark-border bg-white dark:bg-dark-bg-secondary text-text-primary dark:text-dark-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-primary"
            disabled={isThinking}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isThinking}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
