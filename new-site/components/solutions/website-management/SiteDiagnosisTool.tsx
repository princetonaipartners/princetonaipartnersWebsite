'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Loader2, AlertCircle, CheckCircle, XCircle, TrendingUp, Smartphone, Shield, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DiagnosisResult {
  url: string;
  scores: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  vitals: {
    lcp: number; // Largest Contentful Paint
    fid: number; // First Input Delay
    cls: number; // Cumulative Layout Shift
  };
  issues: {
    category: string;
    severity: 'critical' | 'warning' | 'info';
    title: string;
    description: string;
  }[];
  estimatedCost: {
    min: number;
    max: number;
    breakdown: { item: string; cost: string }[];
  };
}

/**
 * SiteDiagnosisTool - Interactive tool for diagnosing website performance
 *
 * Features:
 * - Real-time PageSpeed Insights API integration
 * - Lighthouse scores (Performance, Accessibility, Best Practices, SEO)
 * - Core Web Vitals display
 * - Specific issue identification
 * - Custom quote generation based on issues
 */
export function SiteDiagnosisTool(): React.ReactElement {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async (): Promise<void> => {
    if (!url.trim()) {
      setError('Please enter a valid URL');
      return;
    }

    setIsAnalyzing(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/diagnose-site', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze site');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while analyzing your site');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-600 dark:text-green-400';
    if (score >= 50) return 'text-orange-600 dark:text-orange-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getScoreBgColor = (score: number): string => {
    if (score >= 90) return 'bg-green-100 dark:bg-green-900/30';
    if (score >= 50) return 'bg-orange-100 dark:bg-orange-900/30';
    return 'bg-red-100 dark:bg-red-900/30';
  };

  return (
    <div className="mx-auto max-w-6xl">
      {/* Input Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary dark:text-dark-text-primary">
            Free Website Diagnosis
          </h2>
          <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
            Enter your website URL to get a comprehensive performance audit powered by Google PageSpeed Insights.
            Get real Lighthouse scores, Core Web Vitals, and a custom improvement quote in 5-10 seconds.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-secondary" />
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
              placeholder="https://yourwebsite.com"
              className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 pl-12 pr-4 py-4 text-text-primary dark:text-dark-text-primary placeholder:text-text-tertiary focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all"
              disabled={isAnalyzing}
            />
          </div>
          <button
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className={cn(
              'rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
              'flex items-center justify-center gap-2 min-w-[140px]'
            )}
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Analyzing
              </>
            ) : (
              'Analyze'
            )}
          </button>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 flex items-center gap-2 rounded-xl bg-red-50 dark:bg-red-900/20 px-4 py-3 text-red-800 dark:text-red-200 max-w-2xl mx-auto"
          >
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <p className="text-sm">{error}</p>
          </motion.div>
        )}
      </motion.div>

      {/* Results Section */}
      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Lighthouse Scores */}
            <div className="rounded-3xl bg-white dark:bg-neutral-900 p-8 shadow-sm border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-2xl font-bold mb-6 text-text-primary dark:text-dark-text-primary">
                Lighthouse Scores
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: 'Performance', score: result.scores.performance, icon: Zap },
                  { label: 'Accessibility', score: result.scores.accessibility, icon: Shield },
                  { label: 'Best Practices', score: result.scores.bestPractices, icon: CheckCircle },
                  { label: 'SEO', score: result.scores.seo, icon: TrendingUp },
                ].map(({ label, score, icon: Icon }) => (
                  <div key={label} className="text-center">
                    <div className={cn('mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full', getScoreBgColor(score))}>
                      <span className={cn('text-3xl font-bold', getScoreColor(score))}>{score}</span>
                    </div>
                    <Icon className={cn('mx-auto mb-2 h-5 w-5', getScoreColor(score))} />
                    <p className="text-sm font-medium text-text-secondary dark:text-dark-text-secondary">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Web Vitals */}
            <div className="rounded-3xl bg-white dark:bg-neutral-900 p-8 shadow-sm border border-neutral-200 dark:border-neutral-800">
              <h3 className="text-2xl font-bold mb-6 text-text-primary dark:text-dark-text-primary">
                Core Web Vitals
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {result.vitals.lcp < 2.5 ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                    <h4 className="font-semibold text-text-primary dark:text-dark-text-primary">LCP</h4>
                  </div>
                  <p className="text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-1">
                    {result.vitals.lcp.toFixed(1)}s
                  </p>
                  <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                    Largest Contentful Paint
                  </p>
                  <p className="text-xs text-text-tertiary dark:text-dark-text-tertiary mt-1">
                    Target: {'<'} 2.5s
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {result.vitals.fid < 100 ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                    <h4 className="font-semibold text-text-primary dark:text-dark-text-primary">FID</h4>
                  </div>
                  <p className="text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-1">
                    {result.vitals.fid}ms
                  </p>
                  <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                    First Input Delay
                  </p>
                  <p className="text-xs text-text-tertiary dark:text-dark-text-tertiary mt-1">
                    Target: {'<'} 100ms
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {result.vitals.cls < 0.1 ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                    <h4 className="font-semibold text-text-primary dark:text-dark-text-primary">CLS</h4>
                  </div>
                  <p className="text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-1">
                    {result.vitals.cls.toFixed(3)}
                  </p>
                  <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                    Cumulative Layout Shift
                  </p>
                  <p className="text-xs text-text-tertiary dark:text-dark-text-tertiary mt-1">
                    Target: {'<'} 0.1
                  </p>
                </div>
              </div>
            </div>

            {/* Issues Found */}
            {result.issues.length > 0 && (
              <div className="rounded-3xl bg-white dark:bg-neutral-900 p-8 shadow-sm border border-neutral-200 dark:border-neutral-800">
                <h3 className="text-2xl font-bold mb-6 text-text-primary dark:text-dark-text-primary">
                  Issues Found ({result.issues.length})
                </h3>
                <div className="space-y-4">
                  {result.issues.map((issue, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={cn(
                        'rounded-xl p-4 border-l-4',
                        issue.severity === 'critical' && 'bg-red-50 dark:bg-red-900/10 border-red-500',
                        issue.severity === 'warning' && 'bg-orange-50 dark:bg-orange-900/10 border-orange-500',
                        issue.severity === 'info' && 'bg-blue-50 dark:bg-blue-900/10 border-blue-500'
                      )}
                    >
                      <div className="flex items-start gap-3">
                        {issue.severity === 'critical' && <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />}
                        {issue.severity === 'warning' && <AlertCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />}
                        {issue.severity === 'info' && <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />}
                        <div className="flex-1">
                          <h4 className="font-semibold text-text-primary dark:text-dark-text-primary mb-1">
                            {issue.title}
                          </h4>
                          <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                            {issue.description}
                          </p>
                          <span className="inline-block mt-2 rounded-full bg-white/50 dark:bg-black/20 px-3 py-1 text-xs font-medium">
                            {issue.category}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Estimated Cost */}
            <div className="rounded-3xl bg-gradient-to-br from-brand-light to-purple-50 dark:from-brand-dark dark:to-purple-900/20 p-8 border-2 border-brand-primary shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-text-primary dark:text-dark-text-primary">
                Custom Quote
              </h3>
              <div className="mb-6">
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-2">
                  Estimated investment to fix identified issues:
                </p>
                <p className="text-5xl font-bold text-brand-primary dark:text-dark-brand-primary">
                  ${result.estimatedCost.min.toLocaleString()} - ${result.estimatedCost.max.toLocaleString()}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {result.estimatedCost.breakdown.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-brand-primary/20 last:border-0">
                    <span className="text-text-primary dark:text-dark-text-primary">{item.item}</span>
                    <span className="font-semibold text-text-primary dark:text-dark-text-primary">{item.cost}</span>
                  </div>
                ))}
              </div>

              <a
                href="/contact"
                className="block w-full text-center py-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                Get Detailed Report & Free Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
