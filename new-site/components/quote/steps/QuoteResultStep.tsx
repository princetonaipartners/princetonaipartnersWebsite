'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, Check, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { QuoteState, PriceEstimate } from '@/lib/quote/types';
import { formatPrice, getFeatureNames, generateQuoteId } from '@/lib/quote/pricing';
import { PROJECT_TYPES, COMPLEXITY_OPTIONS, TIMELINE_OPTIONS } from '@/lib/quote/constants';
import { downloadQuotePDF } from '@/lib/quote/generate-pdf';

interface QuoteResultStepProps {
  state: QuoteState;
  estimate: PriceEstimate | null;
}

export function QuoteResultStep({ state, estimate }: QuoteResultStepProps) {
  const [quoteId] = useState(() => generateQuoteId());
  const [isDownloading, setIsDownloading] = useState(false);

  if (!estimate || !state.projectType) {
    return null;
  }

  const projectType = PROJECT_TYPES.find((p) => p.id === state.projectType);
  const complexity = COMPLEXITY_OPTIONS.find((c) => c.id === state.complexity);
  const timeline = TIMELINE_OPTIONS.find((t) => t.id === state.timeline);
  const featureNames = getFeatureNames(state.features);

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    try {
      await downloadQuotePDF(state, estimate, quoteId);
    } catch (error) {
      console.error('Failed to generate PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleScheduleCall = () => {
    // TODO: Open Calendly or booking link
    window.open('https://calendly.com', '_blank');
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-2">
          Your Personalized Quote
        </h2>
        <p className="text-text-secondary dark:text-dark-text-secondary">
          We&apos;ve sent a copy to {state.contact.email}
        </p>
      </motion.div>

      {/* Quote card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-dark-bg-card rounded-xl border border-neutral-200 dark:border-dark-border overflow-hidden"
      >
        {/* Price header */}
        <div className="bg-brand-primary p-8 text-center text-white">
          <div className="text-sm font-medium opacity-90 mb-2">Estimated Investment</div>
          <div className="text-4xl md:text-5xl font-bold">
            {formatPrice(estimate.low)} - {formatPrice(estimate.high)}
          </div>
          <div className="text-sm opacity-90 mt-2">
            {estimate.timeline.minWeeks}-{estimate.timeline.maxWeeks} weeks delivery
          </div>
        </div>

        {/* Quote details */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Project summary */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary">
              Project Summary
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-text-tertiary dark:text-dark-text-tertiary">Type</div>
                <div className="font-medium text-text-primary dark:text-dark-text-primary">
                  {projectType?.name}
                </div>
              </div>
              <div>
                <div className="text-text-tertiary dark:text-dark-text-tertiary">Complexity</div>
                <div className="font-medium text-text-primary dark:text-dark-text-primary">
                  {complexity?.name}
                </div>
              </div>
              <div>
                <div className="text-text-tertiary dark:text-dark-text-tertiary">Timeline</div>
                <div className="font-medium text-text-primary dark:text-dark-text-primary">
                  {timeline?.name} ({timeline?.duration})
                </div>
              </div>
              <div>
                <div className="text-text-tertiary dark:text-dark-text-tertiary">Quote ID</div>
                <div className="font-mono font-medium text-text-primary dark:text-dark-text-primary">
                  {quoteId}
                </div>
              </div>
            </div>
          </div>

          {/* Features included */}
          {featureNames.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary">
                Features Included
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {featureNames.map((name) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 text-sm text-text-secondary dark:text-dark-text-secondary"
                  >
                    <Check className="w-4 h-4 text-accent-green flex-shrink-0" />
                    {name}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Price breakdown */}
          <div className="space-y-3 pt-4 border-t border-neutral-200 dark:border-dark-border">
            <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary">
              Price Breakdown
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-text-secondary dark:text-dark-text-secondary">
                  Base ({projectType?.name}, {complexity?.name})
                </span>
                <span className="font-medium text-text-primary dark:text-dark-text-primary">
                  {formatPrice(estimate.breakdown.base)}
                </span>
              </div>
              {estimate.breakdown.features > 0 && (
                <div className="flex justify-between">
                  <span className="text-text-secondary dark:text-dark-text-secondary">
                    Feature add-ons
                  </span>
                  <span className="font-medium text-text-primary dark:text-dark-text-primary">
                    +{formatPrice(estimate.breakdown.features)}
                  </span>
                </div>
              )}
              {estimate.breakdown.timelineAdjustment !== 0 && (
                <div className="flex justify-between">
                  <span className="text-text-secondary dark:text-dark-text-secondary">
                    Timeline adjustment ({timeline?.name})
                  </span>
                  <span
                    className={
                      estimate.breakdown.timelineAdjustment > 0
                        ? 'font-medium text-accent-orange'
                        : 'font-medium text-accent-green'
                    }
                  >
                    {estimate.breakdown.timelineAdjustment > 0 ? '+' : ''}
                    {formatPrice(estimate.breakdown.timelineAdjustment)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Button
          onClick={handleScheduleCall}
          className="flex-1 h-14 text-lg"
        >
          <Calendar className="w-5 h-5 mr-2" />
          Schedule Discovery Call
        </Button>
        <Button
          variant="outline"
          onClick={handleDownloadPDF}
          disabled={isDownloading}
          className="flex-1 h-14 text-lg"
        >
          {isDownloading ? (
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
          ) : (
            <Download className="w-5 h-5 mr-2" />
          )}
          {isDownloading ? 'Generating...' : 'Download PDF'}
        </Button>
      </motion.div>

      {/* Contact info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center text-sm text-text-tertiary dark:text-dark-text-tertiary"
      >
        Questions? Email us at{' '}
        <a
          href="mailto:hello@princeton-ai.com"
          className="text-brand-primary hover:underline"
        >
          hello@princeton-ai.com
        </a>
      </motion.div>
    </div>
  );
}
