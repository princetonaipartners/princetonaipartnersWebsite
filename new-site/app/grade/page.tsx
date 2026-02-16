'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, Share2, RotateCcw, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  UrlInputForm,
  AnalyzingState,
  OverallScoreRing,
  ScoreRadarChart,
  CategoryCard,
  FindingsAccordion,
  LeadCaptureForm,
} from '@/components/grade';
import type { WebsiteAnalysis, CategoryKey } from '@/lib/grade/types';
import { CATEGORY_META } from '@/lib/grade/types';

type ViewState = 'input' | 'analyzing' | 'results';

export default function GradePage() {
  const [viewState, setViewState] = useState<ViewState>('input');
  const [analysis, setAnalysis] = useState<WebsiteAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [analyzingUrl, setAnalyzingUrl] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | null>(null);

  const handleAnalyze = async (url: string) => {
    setError(null);
    setAnalyzingUrl(url);
    setViewState('analyzing');

    try {
      const response = await fetch('/api/grade', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      // Check if response has content before parsing
      const text = await response.text();
      if (!text) {
        throw new Error('Analysis service is temporarily unavailable. Please try again.');
      }

      let data;
      try {
        data = JSON.parse(text);
      } catch {
        console.error('Failed to parse response:', text);
        throw new Error('Received invalid response from server. Please try again.');
      }

      if (!data.success) {
        throw new Error(data.error || 'Analysis failed');
      }

      setAnalysis(data.data);
      setViewState('results');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      setViewState('input');
    }
  };

  const handleReset = () => {
    setViewState('input');
    setAnalysis(null);
    setError(null);
    setSelectedCategory(null);
  };

  const handleShare = async () => {
    if (!analysis) return;

    const shareText = `I just scored ${analysis.overallScore}/100 on the Princeton AI Website Grader! Check your site's score at princeton-ai.com/grade`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Website Score',
          text: shareText,
          url: window.location.href,
        });
      } catch {
        // User cancelled or share failed
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(shareText);
    }
  };

  return (
    <main className="min-h-screen bg-dark-bg-primary">
      {/* Background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-colorful-pink/5 rounded-full blur-[128px]" />
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          {/* INPUT STATE */}
          {viewState === 'input' && (
            <motion.div
              key="input"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="container py-20 md:py-32"
            >
              {/* Hero */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-brand-primary/10 border border-brand-primary/20"
                >
                  <Sparkles className="w-4 h-4 text-brand-primary" />
                  <span className="text-sm text-brand-primary font-medium">
                    Free Website Analysis
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-6xl font-bold text-dark-text-primary mb-6"
                >
                  Rate Your Website
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl text-dark-text-secondary max-w-2xl mx-auto"
                >
                  Get an instant analysis of your website's SEO, performance, security,
                  accessibility, and more. Find out what's working and what needs improvement.
                </motion.p>
              </div>

              {/* URL Input */}
              <div className="mb-12">
                <UrlInputForm onAnalyze={handleAnalyze} />
              </div>

              {/* Error */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-2xl mx-auto p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-center"
                >
                  <p className="text-red-400">{error}</p>
                </motion.div>
              )}

              {/* Categories preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-16"
              >
                <p className="text-center text-sm text-dark-text-tertiary mb-6 uppercase tracking-wider">
                  We analyze 6 key areas
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {Object.values(CATEGORY_META).map((meta, i) => (
                    <motion.div
                      key={meta.key}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.05 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-bg-card/50 border border-dark-border/30"
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: meta.color }}
                      />
                      <span className="text-sm text-dark-text-secondary">{meta.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* ANALYZING STATE */}
          {viewState === 'analyzing' && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="container py-20"
            >
              <AnalyzingState url={analyzingUrl} />
            </motion.div>
          )}

          {/* RESULTS STATE */}
          {viewState === 'results' && analysis && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="container py-12 md:py-20"
            >
              {/* Results header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <div>
                  <p className="text-sm text-dark-text-secondary mb-1">Results for</p>
                  <h1 className="text-2xl md:text-3xl font-bold text-dark-text-primary">
                    {analysis.domain}
                  </h1>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleShare}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-bg-card border border-dark-border/50 text-dark-text-secondary hover:text-dark-text-primary hover:border-dark-border transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    <span className="text-sm">Share</span>
                  </button>
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-bg-card border border-dark-border/50 text-dark-text-secondary hover:text-dark-text-primary hover:border-dark-border transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span className="text-sm">Analyze Another</span>
                  </button>
                </div>
              </div>

              {/* Main results grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left column: Score ring + radar */}
                <div className="lg:col-span-5 space-y-8">
                  {/* Overall score */}
                  <div className="p-8 rounded-2xl bg-dark-bg-card/30 backdrop-blur-sm border border-dark-border/30">
                    <h2 className="text-center text-sm font-medium text-dark-text-tertiary uppercase tracking-wider mb-6">
                      Overall Score
                    </h2>
                    <OverallScoreRing
                      score={analysis.overallScore}
                      grade={analysis.letterGrade}
                    />
                  </div>

                  {/* Radar chart */}
                  <div className="p-6 rounded-2xl bg-dark-bg-card/30 backdrop-blur-sm border border-dark-border/30">
                    <h2 className="text-sm font-medium text-dark-text-tertiary uppercase tracking-wider mb-4">
                      Score Breakdown
                    </h2>
                    <ScoreRadarChart categories={analysis.categories} />
                  </div>

                  {/* Lead capture */}
                  <LeadCaptureForm
                    websiteUrl={analysis.url}
                    score={analysis.overallScore}
                    grade={analysis.letterGrade}
                  />
                </div>

                {/* Right column: Category cards + findings */}
                <div className="lg:col-span-7 space-y-6">
                  <h2 className="text-sm font-medium text-dark-text-tertiary uppercase tracking-wider">
                    Category Scores
                  </h2>

                  {/* Category cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(Object.keys(analysis.categories) as CategoryKey[]).map((key, i) => (
                      <CategoryCard
                        key={key}
                        categoryKey={key}
                        data={analysis.categories[key]}
                        index={i}
                        onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
                      />
                    ))}
                  </div>

                  {/* Detailed findings */}
                  <div className="mt-8">
                    <h2 className="text-sm font-medium text-dark-text-tertiary uppercase tracking-wider mb-4">
                      Detailed Findings
                    </h2>
                    <div className="space-y-4">
                      {(Object.keys(analysis.categories) as CategoryKey[]).map((key) => (
                        <FindingsAccordion
                          key={key}
                          categoryKey={key}
                          data={analysis.categories[key]}
                          defaultOpen={selectedCategory === key}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-brand-primary/10 to-colorful-pink/10 border border-brand-primary/20"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-dark-text-primary mb-2">
                      Ready to improve your score?
                    </h3>
                    <p className="text-dark-text-secondary">
                      Our team can help fix these issues and boost your website's performance.
                    </p>
                  </div>
                  <a
                    href="/quote"
                    className={cn(
                      'flex items-center gap-2 px-8 py-4',
                      'bg-brand-primary hover:bg-brand-secondary',
                      'text-white font-semibold rounded-xl',
                      'transition-colors whitespace-nowrap'
                    )}
                  >
                    <BarChart3 className="w-5 h-5" />
                    Get a Free Quote
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
