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
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 right-6 z-50 hidden md:block"
    >
      <div className="bg-white dark:bg-dark-bg-card rounded-xl shadow-md border border-neutral-200 dark:border-dark-border p-3 min-w-[180px]">
        <div className="text-xs font-medium text-text-tertiary dark:text-dark-text-tertiary uppercase tracking-wide mb-1">
          Estimated Range
        </div>
        <div className="text-xl font-bold text-brand-primary">
          {formatPrice(estimate.low)} - {formatPrice(estimate.high)}
        </div>
        <div className="text-xs text-text-tertiary dark:text-dark-text-tertiary mt-1">
          {estimate.timeline.minWeeks}-{estimate.timeline.maxWeeks} weeks
        </div>
      </div>
    </motion.div>
  );
}
