'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuoteProgressProps {
  currentStep: 1 | 2 | 3 | 4 | 5;
  onStepClick: (step: 1 | 2 | 3 | 4 | 5) => void;
}

const steps = [
  { number: 1, label: 'Project' },
  { number: 2, label: 'Scope' },
  { number: 3, label: 'Timeline' },
  { number: 4, label: 'Contact' },
  { number: 5, label: 'Quote' },
] as const;

export function QuoteProgress({ currentStep, onStepClick }: QuoteProgressProps) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center gap-2 md:gap-4">
        {steps.map((step, index) => {
          const isCompleted = currentStep > step.number;
          const isCurrent = currentStep === step.number;
          const isClickable = step.number < currentStep;

          return (
            <div key={step.number} className="flex items-center">
              {/* Step circle */}
              <button
                onClick={() => isClickable && onStepClick(step.number as 1 | 2 | 3 | 4 | 5)}
                disabled={!isClickable}
                className={cn(
                  'relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full font-semibold text-sm md:text-base transition-all duration-300',
                  isCompleted &&
                    'bg-brand-primary text-white cursor-pointer hover:bg-brand-secondary',
                  isCurrent &&
                    'bg-brand-primary text-white ring-4 ring-brand-light dark:ring-brand-primary/30',
                  !isCompleted &&
                    !isCurrent &&
                    'bg-neutral-100 dark:bg-dark-bg-tertiary text-text-tertiary dark:text-dark-text-tertiary'
                )}
              >
                {isCompleted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  >
                    <Check className="w-5 h-5" />
                  </motion.div>
                ) : (
                  step.number
                )}
              </button>

              {/* Step label (hidden on mobile) */}
              <span
                className={cn(
                  'hidden md:block ml-2 text-sm font-medium transition-colors duration-300',
                  isCurrent
                    ? 'text-brand-primary'
                    : 'text-text-tertiary dark:text-dark-text-tertiary'
                )}
              >
                {step.label}
              </span>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    'w-8 md:w-12 h-0.5 mx-2 md:mx-4 transition-colors duration-300',
                    currentStep > step.number
                      ? 'bg-brand-primary'
                      : 'bg-neutral-200 dark:bg-dark-border'
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
