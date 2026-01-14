'use client';

import { motion } from 'framer-motion';
import {
  Search,
  Zap,
  Smartphone,
  Shield,
  Eye,
  Palette,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { CategoryKey, CategoryScore, CategoryMeta } from '@/lib/grade/types';
import { CATEGORY_META, gradeToColor } from '@/lib/grade/types';

interface CategoryCardProps {
  categoryKey: CategoryKey;
  data: CategoryScore;
  index: number;
  onClick?: () => void;
}

const iconMap = {
  Search,
  Zap,
  Smartphone,
  Shield,
  Eye,
  Palette,
};

export function CategoryCard({ categoryKey, data, index, onClick }: CategoryCardProps) {
  const meta: CategoryMeta = CATEGORY_META[categoryKey];
  const Icon = iconMap[meta.icon as keyof typeof iconMap];
  const gradeColor = gradeToColor(data.grade);

  const successCount = data.findings.filter((f) => f.type === 'success').length;
  const warningCount = data.findings.filter((f) => f.type === 'warning').length;
  const errorCount = data.findings.filter((f) => f.type === 'error').length;

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        'relative w-full p-5 rounded-xl text-left',
        'bg-dark-bg-card/50 backdrop-blur-sm',
        'border border-dark-border/50 hover:border-dark-border',
        'transition-all duration-300',
        'group cursor-pointer'
      )}
    >
      {/* Background gradient on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity"
        style={{ backgroundColor: meta.color }}
      />

      <div className="relative flex items-start gap-4">
        {/* Icon */}
        <div
          className="flex-shrink-0 p-2.5 rounded-lg"
          style={{ backgroundColor: `${meta.color}20` }}
        >
          <Icon className="w-5 h-5" style={{ color: meta.color }} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-dark-text-primary">{meta.label}</h3>
            <div className="flex items-center gap-2">
              <span
                className="text-2xl font-bold tabular-nums"
                style={{ color: gradeColor }}
              >
                {data.score}
              </span>
              <span
                className="px-2 py-0.5 text-xs font-semibold rounded"
                style={{
                  backgroundColor: `${gradeColor}20`,
                  color: gradeColor,
                }}
              >
                {data.grade}
              </span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-1.5 w-full bg-dark-bg-tertiary rounded-full overflow-hidden mb-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${data.score}%` }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="h-full rounded-full"
              style={{ backgroundColor: gradeColor }}
            />
          </div>

          {/* Finding counts */}
          <div className="flex items-center gap-3 text-xs">
            {successCount > 0 && (
              <span className="flex items-center gap-1 text-colorful-green">
                <span className="w-1.5 h-1.5 rounded-full bg-colorful-green" />
                {successCount} passed
              </span>
            )}
            {warningCount > 0 && (
              <span className="flex items-center gap-1 text-colorful-orange">
                <span className="w-1.5 h-1.5 rounded-full bg-colorful-orange" />
                {warningCount} warnings
              </span>
            )}
            {errorCount > 0 && (
              <span className="flex items-center gap-1 text-red-500">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                {errorCount} issues
              </span>
            )}
          </div>
        </div>

        {/* Arrow */}
        <ChevronRight className="w-5 h-5 text-dark-text-tertiary group-hover:text-dark-text-secondary transition-colors flex-shrink-0" />
      </div>
    </motion.button>
  );
}
