'use client';

import { motion } from 'framer-motion';
import type { PriceEstimate } from '@/lib/quote/types';
import { formatPrice } from '@/lib/quote/pricing';

interface QuoteEstimateProps {
  estimate: PriceEstimate;
}

export function QuoteEstimate({ estimate }: QuoteEstimateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="fixed bottom-6 right-6 z-50 hidden md:block"
    >
      <div className="bg-white dark:bg-dark-bg-card rounded-2xl shadow-xl border border-neutral-200 dark:border-dark-border p-4 min-w-[200px]">
        <div className="text-xs font-medium text-text-tertiary dark:text-dark-text-tertiary uppercase tracking-wide mb-1">
          Estimated Range
        </div>
        <motion.div
          key={`${estimate.low}-${estimate.high}`}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="text-2xl font-bold text-brand-primary"
        >
          {formatPrice(estimate.low)} - {formatPrice(estimate.high)}
        </motion.div>
        <div className="text-xs text-text-tertiary dark:text-dark-text-tertiary mt-1">
          {estimate.timeline.minWeeks}-{estimate.timeline.maxWeeks} weeks
        </div>
      </div>
    </motion.div>
  );
}
