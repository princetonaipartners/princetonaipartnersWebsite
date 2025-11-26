'use client';

import { motion } from 'framer-motion';
import {
  Rocket,
  Brain,
  Building2,
  Workflow,
  Globe,
  Bot,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ProjectType } from '@/lib/quote/types';
import { PROJECT_TYPES } from '@/lib/quote/constants';
import { formatPrice } from '@/lib/quote/pricing';

interface ProjectTypeStepProps {
  selectedType: ProjectType | null;
  onSelect: (type: ProjectType) => void;
}

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  Brain,
  Building2,
  Workflow,
  Globe,
  Bot,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ProjectTypeStep({ selectedType, onSelect }: ProjectTypeStepProps) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-2">
          What would you like to build?
        </h2>
        <p className="text-text-secondary dark:text-dark-text-secondary">
          Select the type of project that best matches your needs
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {PROJECT_TYPES.map((type) => {
          const Icon = iconMap[type.icon];
          const isSelected = selectedType === type.id;

          return (
            <motion.button
              key={type.id}
              variants={itemVariants}
              onClick={() => onSelect(type.id)}
              className={cn(
                'relative p-5 rounded-xl border-2 text-left transition-all duration-200',
                'bg-white dark:bg-dark-bg-card',
                isSelected
                  ? 'border-brand-primary shadow-md'
                  : 'border-neutral-200 dark:border-dark-border hover:border-brand-primary/50'
              )}
            >
              {/* Selected indicator */}
              {isSelected && (
                <motion.div
                  layoutId="selectedIndicator"
                  className="absolute inset-0 rounded-xl bg-brand-light/50 dark:bg-brand-primary/10"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}

              <div className="relative">
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
                  {type.name}
                </h3>

                <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-3">
                  {type.description}
                </p>

                <div className="text-sm font-medium text-brand-primary">
                  {formatPrice(type.baseRange.low)} - {formatPrice(type.baseRange.high)}
                </div>
              </div>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
