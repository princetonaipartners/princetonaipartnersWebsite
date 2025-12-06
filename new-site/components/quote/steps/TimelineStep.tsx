'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Zap, Rocket, Check } from 'lucide-react';
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

const iconMap: Record<string, typeof Calendar> = {
  Calendar,
  Clock,
  Zap,
  Rocket,
};

export function TimelineStep({ timeline, onSelect, onNext, onBack }: TimelineStepProps) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-2">
          When do you need it?
        </h2>
        <p className="text-text-secondary dark:text-dark-text-secondary">
          Timeline affects pricing - flexible schedules save money
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {TIMELINE_OPTIONS.map((option) => {
          const Icon = iconMap[option.icon];
          const isSelected = timeline === option.id;
          const isDiscount = option.multiplier < 1;
          const isPremium = option.multiplier > 1;
          const percentChange = Math.round((option.multiplier - 1) * 100);

          return (
            <motion.button
              key={option.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(option.id)}
              className={cn(
                'relative p-5 rounded-xl border-2 text-left transition-all duration-300',
                isSelected
                  ? 'border-brand-primary bg-brand-light/50 dark:bg-brand-primary/10'
                  : 'border-neutral-200 dark:border-dark-border hover:border-brand-primary/50 bg-white dark:bg-dark-bg-card'
              )}
            >
              {/* Selection indicator */}
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-3 right-3 w-5 h-5 rounded-full bg-brand-primary flex items-center justify-center"
                >
                  <Check className="w-3 h-3 text-white" />
                </motion.div>
              )}

              <div
                className={cn(
                  'w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300',
                  isSelected
                    ? 'bg-brand-primary text-white'
                    : 'bg-brand-light dark:bg-dark-brand-light text-brand-primary'
                )}
              >
                {Icon && <Icon className="w-6 h-6" />}
              </div>

              <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary mb-1">
                {option.name}
              </h3>

              <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-3">
                {option.description}
              </p>

              {/* Price adjustment badge */}
              {(isDiscount || isPremium) && (
                <span
                  className={cn(
                    'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium',
                    isDiscount
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                  )}
                >
                  {isDiscount ? `${percentChange}% savings` : `+${percentChange}% rush`}
                </span>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onNext}>Continue</Button>
      </div>
    </div>
  );
}
