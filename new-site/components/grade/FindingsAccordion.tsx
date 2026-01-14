'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Search,
  Zap,
  Smartphone,
  Shield,
  Eye,
  Palette,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { CategoryKey, CategoryScore, Finding } from '@/lib/grade/types';
import { CATEGORY_META, gradeToColor } from '@/lib/grade/types';

interface FindingsAccordionProps {
  categoryKey: CategoryKey;
  data: CategoryScore;
  defaultOpen?: boolean;
}

const iconMap = {
  Search,
  Zap,
  Smartphone,
  Shield,
  Eye,
  Palette,
};

function FindingItem({ finding }: { finding: Finding }) {
  const getIcon = () => {
    switch (finding.type) {
      case 'success':
        return <CheckCircle2 className="w-4 h-4 text-colorful-green flex-shrink-0" />;
      case 'warning':
        return <AlertCircle className="w-4 h-4 text-colorful-orange flex-shrink-0" />;
      case 'error':
        return <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />;
    }
  };

  const getBgColor = () => {
    switch (finding.type) {
      case 'success':
        return 'bg-colorful-green/5 border-colorful-green/20';
      case 'warning':
        return 'bg-colorful-orange/5 border-colorful-orange/20';
      case 'error':
        return 'bg-red-500/5 border-red-500/20';
    }
  };

  return (
    <div className={cn('p-3 rounded-lg border', getBgColor())}>
      <div className="flex items-start gap-3">
        {getIcon()}
        <div>
          <p className="text-sm font-medium text-dark-text-primary">
            {finding.title}
          </p>
          <p className="text-xs text-dark-text-secondary mt-1">
            {finding.description}
          </p>
          {finding.impact && (
            <span
              className={cn(
                'inline-block mt-2 px-2 py-0.5 text-[10px] font-medium rounded',
                finding.impact === 'high' && 'bg-red-500/20 text-red-400',
                finding.impact === 'medium' && 'bg-colorful-orange/20 text-colorful-orange',
                finding.impact === 'low' && 'bg-dark-bg-tertiary text-dark-text-secondary'
              )}
            >
              {finding.impact.toUpperCase()} IMPACT
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function FindingsAccordion({
  categoryKey,
  data,
  defaultOpen = false,
}: FindingsAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const meta = CATEGORY_META[categoryKey];
  const Icon = iconMap[meta.icon as keyof typeof iconMap];
  const gradeColor = gradeToColor(data.grade);

  const successFindings = data.findings.filter((f) => f.type === 'success');
  const warningFindings = data.findings.filter((f) => f.type === 'warning');
  const errorFindings = data.findings.filter((f) => f.type === 'error');

  return (
    <div className="border border-dark-border/50 rounded-xl overflow-hidden bg-dark-bg-card/30">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center justify-between hover:bg-dark-bg-tertiary/30 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div
            className="p-2 rounded-lg"
            style={{ backgroundColor: `${meta.color}20` }}
          >
            <Icon className="w-5 h-5" style={{ color: meta.color }} />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-dark-text-primary">{meta.label}</h3>
            <p className="text-xs text-dark-text-secondary">{meta.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span
              className="text-xl font-bold tabular-nums"
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
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-5 h-5 text-dark-text-tertiary" />
          </motion.div>
        </div>
      </button>

      {/* Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 space-y-4">
              {/* Issues first */}
              {errorFindings.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">
                    Issues ({errorFindings.length})
                  </h4>
                  <div className="space-y-2">
                    {errorFindings.map((finding, i) => (
                      <FindingItem key={i} finding={finding} />
                    ))}
                  </div>
                </div>
              )}

              {/* Warnings */}
              {warningFindings.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-colorful-orange uppercase tracking-wider mb-2">
                    Warnings ({warningFindings.length})
                  </h4>
                  <div className="space-y-2">
                    {warningFindings.map((finding, i) => (
                      <FindingItem key={i} finding={finding} />
                    ))}
                  </div>
                </div>
              )}

              {/* Passed */}
              {successFindings.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-colorful-green uppercase tracking-wider mb-2">
                    Passed ({successFindings.length})
                  </h4>
                  <div className="space-y-2">
                    {successFindings.map((finding, i) => (
                      <FindingItem key={i} finding={finding} />
                    ))}
                  </div>
                </div>
              )}

              {/* Recommendations */}
              {data.recommendations.length > 0 && (
                <div className="mt-4 p-4 bg-brand-primary/5 border border-brand-primary/20 rounded-lg">
                  <h4 className="text-xs font-semibold text-brand-primary uppercase tracking-wider mb-2">
                    Recommendations
                  </h4>
                  <ul className="space-y-1">
                    {data.recommendations.map((rec, i) => (
                      <li
                        key={i}
                        className="text-sm text-dark-text-secondary flex items-start gap-2"
                      >
                        <span className="text-brand-primary">•</span>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
