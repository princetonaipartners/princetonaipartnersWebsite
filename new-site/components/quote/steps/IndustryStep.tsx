'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Landmark,
  Heart,
  ShoppingCart,
  Cloud,
  Building,
  Scale,
  GraduationCap,
  Truck,
  Utensils,
  Factory,
  Film,
  MoreHorizontal,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import type { IndustryId } from '@/lib/quote/types';
import { INDUSTRIES } from '@/lib/quote/constants';

interface IndustryStepProps {
  selectedIndustry: IndustryId | null;
  industryOther: string;
  onSelect: (industry: IndustryId) => void;
  onOtherChange: (value: string) => void;
}

const iconMap: Record<string, LucideIcon> = {
  Landmark,
  Heart,
  ShoppingCart,
  Cloud,
  Building,
  Scale,
  GraduationCap,
  Truck,
  Utensils,
  Factory,
  Film,
  MoreHorizontal,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function IndustryStep({
  selectedIndustry,
  industryOther,
  onSelect,
  onOtherChange,
}: IndustryStepProps) {
  const showOtherInput = selectedIndustry === 'other';

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-2">
          What industry are you in?
        </h2>
        <p className="text-text-secondary dark:text-dark-text-secondary">
          This helps us tailor features and pricing to your needs
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
      >
        {INDUSTRIES.map((industry) => {
          const Icon = iconMap[industry.icon];
          const isSelected = selectedIndustry === industry.id;

          return (
            <motion.button
              key={industry.id}
              variants={itemVariants}
              onClick={() => onSelect(industry.id)}
              className={cn(
                'relative p-4 rounded-xl border-2 text-left transition-all duration-200',
                'bg-white dark:bg-dark-bg-card',
                isSelected
                  ? 'border-brand-primary shadow-md'
                  : 'border-neutral-200 dark:border-dark-border hover:border-brand-primary/50'
              )}
            >
              {isSelected && (
                <motion.div
                  layoutId="industrySelectedIndicator"
                  className="absolute inset-0 rounded-xl bg-brand-light/50 dark:bg-brand-primary/10"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}

              <div className="relative">
                <div
                  className={cn(
                    'w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors duration-300',
                    isSelected
                      ? 'bg-brand-primary text-white'
                      : 'bg-brand-light dark:bg-dark-brand-light text-brand-primary'
                  )}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                </div>

                <h3 className="text-sm font-semibold text-text-primary dark:text-dark-text-primary mb-1">
                  {industry.name}
                </h3>

                <p className="text-xs text-text-secondary dark:text-dark-text-secondary line-clamp-2">
                  {industry.description}
                </p>
              </div>
            </motion.button>
          );
        })}
      </motion.div>

      {showOtherInput && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="space-y-2"
        >
          <label className="text-sm font-medium text-text-primary dark:text-dark-text-primary">
            Please specify your industry
          </label>
          <Input
            placeholder="e.g., Agriculture, Non-profit, Government..."
            value={industryOther}
            onChange={(e) => onOtherChange(e.target.value)}
            className="max-w-md"
            autoFocus
          />
        </motion.div>
      )}

      <p className="text-center text-sm text-text-tertiary dark:text-dark-text-tertiary">
        Select your industry to continue
      </p>
    </div>
  );
}
