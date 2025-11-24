'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Target, Accessibility, CheckCircle, Search, Sparkles } from 'lucide-react';

interface ScoreMetric {
  label: string;
  score: number;
  icon: React.ElementType;
  color: string;
}

export function LighthouseRunner() {
  const [url, setUrl] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showAfter, setShowAfter] = useState(false);

  // Demo scores - before optimization
  const beforeScores: ScoreMetric[] = [
    { label: 'Performance', score: 52, icon: Zap, color: '#f59e0b' },
    { label: 'SEO', score: 68, icon: Search, color: '#f59e0b' },
    { label: 'Accessibility', score: 74, icon: Accessibility, color: '#10b981' },
    { label: 'Best Practices', score: 71, icon: CheckCircle, color: '#10b981' },
  ];

  // Demo scores - after optimization (what we'd build)
  const afterScores: ScoreMetric[] = [
    { label: 'Performance', score: 98, icon: Zap, color: '#10b981' },
    { label: 'SEO', score: 100, icon: Search, color: '#10b981' },
    { label: 'Accessibility', score: 100, icon: Accessibility, color: '#10b981' },
    { label: 'Best Practices', score: 100, icon: CheckCircle, color: '#10b981' },
  ];

  const runAudit = () => {
    setIsRunning(true);
    setShowResults(false);
    setShowAfter(false);

    // Simulate audit
    setTimeout(() => {
      setIsRunning(false);
      setShowResults(true);
    }, 2500);
  };

  const showImprovedScores = () => {
    setShowAfter(true);
  };

  const currentScores = showAfter ? afterScores : beforeScores;

  return (
    <div className="relative bg-white dark:bg-dark-bg-primary rounded-3xl shadow-2xl p-8 border border-neutral-200 dark:border-dark-border">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-text-primary dark:text-dark-text-primary mb-2">
          Performance Audit
        </h3>
        <p className="text-text-secondary dark:text-dark-text-secondary">
          See how any website performs
        </p>
      </div>

      {/* Input */}
      <div className="flex gap-3 mb-8">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter website URL (e.g., example.com)"
          className="flex-1 px-4 py-3 rounded-xl border border-neutral-300 dark:border-dark-border bg-white dark:bg-dark-bg-secondary text-text-primary dark:text-dark-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-dark-brand-primary transition-all"
        />
        <button
          onClick={runAudit}
          disabled={isRunning}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isRunning ? 'Auditing...' : 'Audit'}
        </button>
      </div>

      {/* Loading State */}
      <AnimatePresence>
        {isRunning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-dark-bg-secondary animate-pulse" />
                <div className="flex-1">
                  <div className="h-4 bg-neutral-100 dark:bg-dark-bg-secondary rounded animate-pulse mb-2 w-32" />
                  <div className="h-8 bg-neutral-100 dark:bg-dark-bg-secondary rounded animate-pulse" />
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results */}
      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Scores */}
            <div className="grid grid-cols-2 gap-4">
              {currentScores.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="p-4 rounded-xl bg-neutral-50 dark:bg-dark-bg-secondary border border-neutral-200 dark:border-dark-border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 flex items-center justify-center">
                        <metric.icon className="w-5 h-5" style={{ color: metric.color }} />
                      </div>
                      <span className="text-sm font-medium text-text-secondary dark:text-dark-text-secondary">
                        {metric.label}
                      </span>
                    </div>

                    {/* Progress Circle */}
                    <div className="relative w-24 h-24 mx-auto">
                      <svg className="transform -rotate-90 w-24 h-24">
                        {/* Background circle */}
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="6"
                          fill="none"
                          className="text-neutral-200 dark:text-dark-border"
                        />
                        {/* Progress circle */}
                        <motion.circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke={metric.color}
                          strokeWidth="6"
                          fill="none"
                          strokeLinecap="round"
                          initial={{ strokeDashoffset: 251.2 }}
                          animate={{ strokeDashoffset: 251.2 * (1 - metric.score / 100) }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          style={{
                            strokeDasharray: 251.2,
                          }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold" style={{ color: metric.color }}>
                          {metric.score}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            {!showAfter && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={showImprovedScores}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Now see what we'd build
              </motion.button>
            )}

            {showAfter && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-900 dark:text-green-100">
                      Perfect Scores Across the Board
                    </h4>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      This is what Princeton AI builds. Every. Single. Time.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
