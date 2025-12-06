'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuoteProgressProps {
  currentStep: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  onStepClick: (step: 1 | 2 | 3 | 4 | 5 | 6 | 7) => void;
}

const STEPS = [
  { number: 1, label: 'Industry' },
  { number: 2, label: 'Project' },
  { number: 3, label: 'Scope' },
  { number: 4, label: 'Tech' },
  { number: 5, label: 'Timeline' },
  { number: 6, label: 'Contact' },
] as const;

export function QuoteProgress({ currentStep, onStepClick }: QuoteProgressProps) {
  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2 px-4">
      {STEPS.map((step, index) => {
        const isCompleted = currentStep > step.number;
        const isCurrent = currentStep === step.number;
        const isClickable = isCompleted;

        return (
          <div key={step.number} className="flex items-center">
            {/* Step circle */}
            <button
              onClick={() => isClickable && onStepClick(step.number as 1 | 2 | 3 | 4 | 5 | 6)}
              disabled={!isClickable}
              className={cn(
                'relative flex items-center justify-center transition-all duration-300',
                isClickable && 'cursor-pointer hover:scale-110',
                !isClickable && 'cursor-default'
              )}
            >
              <div
                className={cn(
                  'w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300',
                  isCompleted && 'bg-brand-primary text-white',
                  isCurrent && 'bg-brand-primary text-white ring-4 ring-brand-primary/20',
                  !isCompleted && !isCurrent && 'bg-neutral-100 dark:bg-dark-bg-card text-text-tertiary border-2 border-neutral-200 dark:border-dark-border'
                )}
              >
                {isCompleted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  >
                    <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                ) : (
                  step.number
                )}
              </div>

              {/* Step label - hidden on mobile */}
              <span
                className={cn(
                  'absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium whitespace-nowrap hidden sm:block',
                  isCurrent && 'text-brand-primary',
                  isCompleted && 'text-text-secondary dark:text-dark-text-secondary',
                  !isCompleted && !isCurrent && 'text-text-tertiary dark:text-dark-text-tertiary'
                )}
              >
                {step.label}
              </span>
            </button>

            {/* Connector line */}
            {index < STEPS.length - 1 && (
              <div
                className={cn(
                  'w-6 sm:w-12 h-0.5 mx-1 sm:mx-2 transition-colors duration-300',
                  currentStep > step.number + 1 && 'bg-brand-primary',
                  currentStep === step.number + 1 && 'bg-gradient-to-r from-brand-primary to-neutral-200 dark:to-dark-border',
                  currentStep <= step.number && 'bg-neutral-200 dark:bg-dark-border'
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
