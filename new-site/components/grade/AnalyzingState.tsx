'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnalyzingStateProps {
  url: string;
}

const steps = [
  { label: 'Fetching website', delay: 0 },
  { label: 'Analyzing SEO', delay: 0.5 },
  { label: 'Checking performance', delay: 1 },
  { label: 'Testing mobile', delay: 1.5 },
  { label: 'Scanning security', delay: 2 },
  { label: 'Evaluating accessibility', delay: 2.5 },
  { label: 'Reviewing UI/UX', delay: 3 },
  { label: 'Calculating scores', delay: 3.5 },
];

export function AnalyzingState({ url }: AnalyzingStateProps) {
  return (
    <div className="w-full max-w-lg mx-auto py-16">
      {/* Main animation */}
      <div className="relative flex items-center justify-center mb-12">
        {/* Outer ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="absolute w-32 h-32 rounded-full border-2 border-dashed border-brand-primary/30"
        />

        {/* Middle ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          className="absolute w-24 h-24 rounded-full border-2 border-brand-primary/50"
        />

        {/* Inner pulse */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-16 h-16 rounded-full bg-brand-primary/20 flex items-center justify-center"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-8 h-8 rounded-full bg-brand-primary"
          />
        </motion.div>
      </div>

      {/* URL being analyzed */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center text-dark-text-secondary mb-8"
      >
        Analyzing{' '}
        <span className="text-brand-primary font-medium">
          {url.replace(/^https?:\/\//, '')}
        </span>
      </motion.p>

      {/* Steps */}
      <div className="space-y-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: step.delay }}
            className="flex items-center gap-3"
          >
            {/* Indicator */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: step.delay + 0.2 }}
              className={cn(
                'w-2 h-2 rounded-full',
                index <= 3 ? 'bg-colorful-green' : 'bg-brand-primary animate-pulse'
              )}
            />

            {/* Label */}
            <span
              className={cn(
                'text-sm',
                index <= 3 ? 'text-dark-text-primary' : 'text-dark-text-secondary'
              )}
            >
              {step.label}
              {index <= 3 && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: step.delay + 0.3 }}
                  className="text-colorful-green ml-2"
                >
                  ✓
                </motion.span>
              )}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mt-8 h-1 bg-dark-bg-tertiary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 4, ease: 'easeInOut' }}
          className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary"
        />
      </div>
    </div>
  );
}
