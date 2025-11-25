'use client';

import { motion } from 'framer-motion';
import { Clock, Zap, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import type { Timeline } from '@/lib/quote/types';
import { TIMELINE_OPTIONS } from '@/lib/quote/constants';

interface TimelineStepProps {
  timeline: Timeline;
  onSelect: (timeline: Timeline) => void;
  onNext: () => void;
  onBack: () => void;
}

const iconMap = {
  flexible: Calendar,
  standard: Clock,
  fast: Zap,
};

export function TimelineStep({
  timeline,
  onSelect,
  onNext,
  onBack,
}: TimelineStepProps) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-2">
          When do you need this?
        </h2>
        <p className="text-text-secondary dark:text-dark-text-secondary">
          Select your preferred timeline - faster delivery has a rush fee
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {TIMELINE_OPTIONS.map((option) => {
          const Icon = iconMap[option.id];
          const isSelected = timeline === option.id;
          const isPremium = option.id === 'fast';
          const isDiscount = option.id === 'flexible';

          return (
            <motion.button
              key={option.id}
              onClick={() => onSelect(option.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                'relative p-6 rounded-2xl border-2 text-center transition-all duration-300',
                'bg-white dark:bg-dark-bg-card',
                isSelected
                  ? 'border-brand-primary shadow-lg shadow-brand-primary/20'
                  : 'border-neutral-200 dark:border-dark-border hover:border-brand-primary/50'
              )}
            >
              {/* Badge */}
              {(isPremium || isDiscount) && (
                <div
                  className={cn(
                    'absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold',
                    isPremium && 'bg-accent-orange text-white',
                    isDiscount && 'bg-accent-green text-white'
                  )}
                >
                  {isPremium ? '+20%' : '-10%'}
                </div>
              )}

              {/* Selected indicator */}
              {isSelected && (
                <motion.div
                  layoutId="timelineIndicator"
                  className="absolute inset-0 rounded-2xl bg-brand-light/50 dark:bg-brand-primary/10"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}

              <div className="relative">
                <div
                  className={cn(
                    'w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300',
                    isSelected
                      ? 'bg-brand-primary text-white'
                      : 'bg-brand-light dark:bg-dark-brand-light text-brand-primary'
                  )}
                >
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-semibold text-text-primary dark:text-dark-text-primary mb-1">
                  {option.name}
                </h3>

                <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-3">
                  {option.description}
                </p>

                <div className="text-lg font-bold text-brand-primary">
                  {option.duration}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-4 max-w-3xl mx-auto">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onNext}>Continue</Button>
      </div>
    </div>
  );
}
