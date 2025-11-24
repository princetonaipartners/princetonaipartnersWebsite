'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Search, MessageSquare, TrendingUp, FileText, Network } from 'lucide-react';
import { FadeInSection } from '@/components/animations/FadeInSection';

export function AISEOExplainer() {
  const [activeTab, setActiveTab] = useState<'traditional' | 'ai'>('traditional');
  const [chatQuery, setChatQuery] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleAsk = () => {
    setShowResult(true);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-dark-bg-primary dark:via-dark-brand-primary/5 dark:to-dark-bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary dark:bg-dark-brand-primary/10 dark:text-dark-brand-primary text-sm font-semibold mb-4">
              <Brain className="w-4 h-4" />
              The Future of SEO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary dark:text-dark-text-primary">
              Why AI SEO is Your Competitive Edge
            </h2>
            <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
              ChatGPT, Claude, and Perplexity are answering 100M+ queries daily. If your business isn't optimized for AI, you're invisible to the future of search.
            </p>
          </div>
        </FadeInSection>

        {/* Comparison Tabs */}
        <FadeInSection delay={0.2}>
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('traditional')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all ${
                activeTab === 'traditional'
                  ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg'
                  : 'bg-neutral-100 dark:bg-dark-bg-secondary text-text-secondary hover:text-text-primary'
              }`}
            >
              <div className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                Traditional SEO
              </div>
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all ${
                activeTab === 'ai'
                  ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg'
                  : 'bg-neutral-100 dark:bg-dark-bg-secondary text-text-secondary hover:text-text-primary'
              }`}
            >
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                AI SEO
              </div>
            </button>
          </div>
        </FadeInSection>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'traditional' && (
            <motion.div
              key="traditional"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 gap-12"
            >
              {/* Diagram */}
              <div className="bg-white dark:bg-dark-bg-primary rounded-2xl p-8 border border-neutral-200 dark:border-dark-border">
                <h3 className="text-xl font-bold mb-6 text-text-primary dark:text-dark-text-primary">
                  How Traditional SEO Works
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                      <Search className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary dark:text-dark-text-primary mb-1">
                        Google Crawlers
                      </h4>
                      <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                        Bots scan your site for keywords, backlinks, and metadata
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary dark:text-dark-text-primary mb-1">
                        PageRank Algorithm
                      </h4>
                      <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                        Sites ranked by authority signals and keyword matching
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary dark:text-dark-text-primary mb-1">
                        Search Results
                      </h4>
                      <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                        10 blue links ranked by relevance and authority
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-dark-bg-primary rounded-2xl p-6 border border-neutral-200 dark:border-dark-border">
                  <div className="text-4xl font-bold text-brand-primary dark:text-dark-brand-primary mb-2">
                    Still Important
                  </div>
                  <p className="text-text-secondary dark:text-dark-text-secondary">
                    Google processes 8.5B searches/day. Traditional SEO isn't dead—but it's not enough.
                  </p>
                </div>

                <div className="bg-neutral-50 dark:bg-dark-bg-secondary rounded-2xl p-6 border border-neutral-200 dark:border-dark-border">
                  <h4 className="font-semibold text-text-primary dark:text-dark-text-primary mb-4">
                    What Traditional SEO Optimizes:
                  </h4>
                  <ul className="space-y-2 text-sm text-text-secondary dark:text-dark-text-secondary">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                      Title tags and meta descriptions
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                      Keyword density and placement
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                      Backlink profile
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                      Page speed and mobile optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                      Sitemap and robots.txt
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'ai' && (
            <motion.div
              key="ai"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 gap-12"
            >
              {/* Diagram */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-700">
                <h3 className="text-xl font-bold mb-6 text-text-primary dark:text-dark-text-primary">
                  How AI SEO Works
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center flex-shrink-0">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary dark:text-dark-text-primary mb-1">
                        LLM Understanding
                      </h4>
                      <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                        AI reads your entire site like a human, understanding context and intent
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Network className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary dark:text-dark-text-primary mb-1">
                        Structured Data
                      </h4>
                      <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                        Schema markup helps AI extract and recommend your business
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary dark:text-dark-text-primary mb-1">
                        AI Recommendations
                      </h4>
                      <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                        ChatGPT, Claude, Perplexity recommend your business in conversational answers
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats & Demo */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl p-6 text-white">
                  <div className="text-4xl font-bold mb-2">
                    100M+ Daily
                  </div>
                  <p className="opacity-90">
                    AI assistant queries. That's 36B+ per year—and growing 300% annually.
                  </p>
                </div>

                <div className="bg-white dark:bg-dark-bg-primary rounded-2xl p-6 border border-neutral-200 dark:border-dark-border">
                  <h4 className="font-semibold text-text-primary dark:text-dark-text-primary mb-4">
                    What AI SEO Optimizes:
                  </h4>
                  <ul className="space-y-2 text-sm text-text-secondary dark:text-dark-text-secondary">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary" />
                      Schema.org structured data (JSON-LD)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary" />
                      Context-rich content (not keyword stuffing)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary" />
                      Natural language optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary" />
                      Entity relationships and knowledge graphs
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary" />
                      LLM-readable APIs and data feeds
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary" />
                      Conversational query optimization
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-700">
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                    Princeton AI's Approach:
                  </h4>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    We build for both. Traditional SEO for Google, AI SEO for ChatGPT/Claude. Your business shows up everywhere.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive Demo */}
        <FadeInSection delay={0.4}>
          <div className="mt-16 bg-white dark:bg-dark-bg-primary rounded-2xl p-8 border border-neutral-200 dark:border-dark-border">
            <h3 className="text-2xl font-bold mb-4 text-text-primary dark:text-dark-text-primary text-center">
              Try It: Ask AI About a Business
            </h3>
            <p className="text-center text-text-secondary dark:text-dark-text-secondary mb-8">
              See the difference between AI-optimized vs non-optimized sites
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="flex gap-3 mb-6">
                <input
                  type="text"
                  value={chatQuery}
                  onChange={(e) => setChatQuery(e.target.value)}
                  placeholder='Try "best pizza in NYC" or "top pediatricians near me"'
                  className="flex-1 px-4 py-3 rounded-xl border border-neutral-300 dark:border-dark-border bg-white dark:bg-dark-bg-secondary text-text-primary dark:text-dark-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
                <button
                  onClick={handleAsk}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold hover:shadow-lg transition-all"
                >
                  Ask AI
                </button>
              </div>

              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="grid md:grid-cols-2 gap-6"
                  >
                    {/* Without AI SEO */}
                    <div className="p-6 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <span className="text-sm font-semibold text-red-900 dark:text-red-100">
                          Without AI SEO
                        </span>
                      </div>
                      <p className="text-sm text-red-800 dark:text-red-200">
                        "I don't have enough structured information to recommend specific businesses. You might want to search Google."
                      </p>
                    </div>

                    {/* With AI SEO */}
                    <div className="p-6 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-sm font-semibold text-green-900 dark:text-green-100">
                          With AI SEO
                        </span>
                      </div>
                      <p className="text-sm text-green-800 dark:text-green-200">
                        "Based on the structured data I found, <strong>Joe's Pizza</strong> (4.8★, 2,400 reviews) specializes in New York-style thin crust. Located in Greenwich Village, they're known for their coal-fired oven and late-night availability."
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
