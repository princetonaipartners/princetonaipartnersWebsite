'use client';

import { motion } from 'framer-motion';
import { DollarSign, Clock } from 'lucide-react';
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
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 hidden lg:block"
    >
      <div className="bg-white dark:bg-dark-bg-card rounded-2xl shadow-2xl border border-neutral-200 dark:border-dark-border p-5 min-w-[240px]">
        <div className="flex items-center gap-2 text-sm text-text-tertiary dark:text-dark-text-tertiary mb-3">
          <DollarSign className="w-4 h-4" />
          <span>Live Estimate</span>
        </div>

        <div className="space-y-3">
          <div>
            <p className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">
              {formatPrice(estimate.low)} - {formatPrice(estimate.high)}
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-text-secondary dark:text-dark-text-secondary">
            <Clock className="w-4 h-4" />
            <span>{estimate.timeline.minWeeks}-{estimate.timeline.maxWeeks} weeks</span>
          </div>

          {estimate.confidence === 'refined' && (
            <p className="text-xs text-brand-primary">
              Refined estimate based on selections
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
