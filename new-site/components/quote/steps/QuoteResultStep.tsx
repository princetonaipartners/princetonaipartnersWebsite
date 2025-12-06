'use client';

import { motion } from 'framer-motion';
import { Check, Download, Calendar, Mail, ArrowRight, FileText, Clock, Building2, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import type { QuoteState, PriceEstimate } from '@/lib/quote/types';
import { getProjectTypeById, getIndustryById, getComplexityById, getTimelineById } from '@/lib/quote/constants';
import { formatPrice, getFeatureNames, generateQuoteId } from '@/lib/quote/pricing';

interface QuoteResultStepProps {
  state: QuoteState;
  estimate: PriceEstimate | null;
  quoteId?: string;
}

export function QuoteResultStep({ state, estimate, quoteId }: QuoteResultStepProps) {
  const projectType = getProjectTypeById(state.projectType!);
  const industry = getIndustryById(state.industry!);
  const complexity = getComplexityById(state.complexity);
  const timeline = getTimelineById(state.timeline);
  const featureNames = getFeatureNames(state.features);
  const displayQuoteId = quoteId || generateQuoteId();

  if (!estimate) {
    return (
      <div className="text-center py-12">
        <p className="text-text-secondary">Unable to generate estimate. Please try again.</p>
      </div>
    );
  }

  const handleScheduleCall = () => {
    window.open('https://calendly.com/princeton-ai', '_blank');
  };

  const handleDownloadPdf = async () => {
    // TODO: Implement PDF download
    console.log('Download PDF');
  };

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
          <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-2">
          Your Quote is Ready!
        </h2>
        <p className="text-text-secondary dark:text-dark-text-secondary">
          We have sent a copy to <span className="font-medium text-text-primary dark:text-dark-text-primary">{state.contact.email}</span>
        </p>
      </motion.div>

      {/* Price Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-br from-brand-primary to-blue-600 rounded-2xl p-8 text-white text-center"
      >
        <p className="text-blue-100 text-sm uppercase tracking-wide mb-2">Estimated Investment</p>
        <p className="text-4xl md:text-5xl font-bold mb-2">
          {formatPrice(estimate.low)} - {formatPrice(estimate.high)}
        </p>
        <div className="flex items-center justify-center gap-2 text-blue-100">
          <Clock className="w-4 h-4" />
          <span>{estimate.timeline.minWeeks}-{estimate.timeline.maxWeeks} weeks delivery</span>
        </div>
        {estimate.confidence === 'refined' && (
          <div className="mt-3 inline-flex items-center gap-1 text-xs bg-white/20 rounded-full px-3 py-1">
            <Sparkles className="w-3 h-3" />
            Refined estimate based on your selections
          </div>
        )}
      </motion.div>

      {/* Project Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-dark-bg-card rounded-2xl border border-neutral-200 dark:border-dark-border p-6"
      >
        <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary mb-4">Project Summary</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-text-tertiary mb-1">Industry</p>
            <p className="font-medium text-text-primary dark:text-dark-text-primary">{industry?.name}</p>
          </div>
          <div>
            <p className="text-text-tertiary mb-1">Project Type</p>
            <p className="font-medium text-text-primary dark:text-dark-text-primary">{projectType?.name}</p>
          </div>
          <div>
            <p className="text-text-tertiary mb-1">Complexity</p>
            <p className="font-medium text-text-primary dark:text-dark-text-primary">{complexity?.name}</p>
          </div>
          <div>
            <p className="text-text-tertiary mb-1">Timeline</p>
            <p className="font-medium text-text-primary dark:text-dark-text-primary">{timeline?.name}</p>
          </div>
          <div className="col-span-2">
            <p className="text-text-tertiary mb-1">Quote ID</p>
            <p className="font-mono text-brand-primary">{displayQuoteId}</p>
          </div>
        </div>
      </motion.div>

      {/* Features */}
      {featureNames.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="bg-white dark:bg-dark-bg-card rounded-2xl border border-neutral-200 dark:border-dark-border p-6"
        >
          <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary mb-4">Features Included</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {featureNames.map((name) => (
              <div key={name} className="flex items-center gap-2 text-sm text-text-secondary dark:text-dark-text-secondary">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Price Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white dark:bg-dark-bg-card rounded-2xl border border-neutral-200 dark:border-dark-border p-6"
      >
        <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary mb-4">Price Breakdown</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-text-secondary">Base ({projectType?.name}, {complexity?.name})</span>
            <span className="font-medium text-text-primary dark:text-dark-text-primary">{formatPrice(estimate.breakdown.basePrice)}</span>
          </div>
          {estimate.breakdown.complexityAdjustment !== 0 && (
            <div className="flex justify-between">
              <span className="text-text-secondary">Complexity adjustment</span>
              <span className="font-medium text-text-primary dark:text-dark-text-primary">+{formatPrice(estimate.breakdown.complexityAdjustment)}</span>
            </div>
          )}
          {estimate.breakdown.featuresTotal > 0 && (
            <div className="flex justify-between">
              <span className="text-text-secondary">Feature add-ons ({state.features.length})</span>
              <span className="font-medium text-text-primary dark:text-dark-text-primary">+{formatPrice(estimate.breakdown.featuresTotal)}</span>
            </div>
          )}
          {estimate.breakdown.industryAdjustment !== 0 && (
            <div className="flex justify-between">
              <span className="text-text-secondary">Industry adjustment ({industry?.name})</span>
              <span className="font-medium text-text-primary dark:text-dark-text-primary">+{formatPrice(estimate.breakdown.industryAdjustment)}</span>
            </div>
          )}
          {estimate.breakdown.timelineAdjustment !== 0 && (
            <div className="flex justify-between">
              <span className="text-text-secondary">Timeline ({timeline?.name})</span>
              <span className={cn('font-medium', estimate.breakdown.timelineAdjustment < 0 ? 'text-green-600' : 'text-text-primary dark:text-dark-text-primary')}>
                {estimate.breakdown.timelineAdjustment < 0 ? '' : '+'}{formatPrice(estimate.breakdown.timelineAdjustment)}
              </span>
            </div>
          )}
          <div className="border-t border-neutral-200 dark:border-dark-border pt-3 flex justify-between">
            <span className="font-semibold text-text-primary dark:text-dark-text-primary">Estimated Total</span>
            <span className="font-bold text-brand-primary">{formatPrice(estimate.low)} - {formatPrice(estimate.high)}</span>
          </div>
        </div>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <Button
          size="lg"
          onClick={handleScheduleCall}
          className="bg-gradient-to-r from-brand-primary to-blue-600 hover:from-brand-primary/90 hover:to-blue-600/90 shadow-lg"
        >
          <Calendar className="w-4 h-4 mr-2" />
          Schedule Discovery Call
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={handleDownloadPdf}
        >
          <Download className="w-4 h-4 mr-2" />
          Download PDF Quote
        </Button>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center text-sm text-text-tertiary dark:text-dark-text-tertiary"
      >
        <p className="mb-2">Questions? We are here to help.</p>
        <a
          href="mailto:hello@princeton-ai.com"
          className="inline-flex items-center gap-2 text-brand-primary hover:underline"
        >
          <Mail className="w-4 h-4" />
          hello@princeton-ai.com
        </a>
      </motion.div>

      {/* Disclaimer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="text-xs text-text-tertiary dark:text-dark-text-tertiary text-center"
      >
        This estimate is valid for 30 days. Final pricing may vary based on detailed requirements discussed during the discovery call.
      </motion.p>
    </div>
  );
}
