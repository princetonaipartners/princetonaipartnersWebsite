'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@/components/icons';
import { IconName } from '@/lib/icon-types';
import { cn } from '@/lib/utils';

interface SolutionsPanelProps {
  onClose: () => void;
}

const SOLUTIONS = [
  { title: 'Web Development', href: '/solutions/web-development', icon: 'code' as IconName },
  { title: 'AI Phone Systems', href: '/solutions/ai-phone-systems', icon: 'phone' as IconName },
  { title: 'AI Agents (RAG)', href: '/solutions/ai-agents', icon: 'database' as IconName },
  { title: 'Process Automation', href: '/solutions/process-automation', icon: 'zap' as IconName },
  { title: 'Custom Bots', href: '/solutions/custom-bots', icon: 'bot' as IconName },
  { title: 'Bespoke Software', href: '/solutions/bespoke-software', icon: 'sparkles' as IconName },
  { title: 'Web Scraping', href: '/solutions/web-scraping', icon: 'globe' as IconName },
];

const panelVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 300,
      damping: 25,
      staggerChildren: 0.03,
      delayChildren: 0.05
    }
  },
  exit: {
    opacity: 0,
    y: 10,
    scale: 0.98,
    transition: { duration: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 300, damping: 24 }
  }
};

export function SolutionsPanel({ onClose }: SolutionsPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        // Check if click is on the dock (don't close if clicking dock)
        const dock = document.querySelector('[role="navigation"]');
        if (dock && dock.contains(event.target as Node)) {
          return;
        }
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <motion.div
        ref={panelRef}
        className={cn(
          "fixed bottom-24 left-1/2 -translate-x-1/2 z-50",
          "w-[90vw] max-w-md",
          "bg-white/95 dark:bg-zinc-900/95",
          "backdrop-blur-xl",
          "border border-neutral-200 dark:border-zinc-800",
          "rounded-2xl",
          "shadow-2xl shadow-black/20",
          "p-4"
        )}
        variants={panelVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        role="menu"
        aria-label="Solutions menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
            Solutions
          </h3>
          <button
            onClick={onClose}
            className={cn(
              "w-8 h-8 flex items-center justify-center",
              "rounded-lg",
              "text-zinc-500 dark:text-zinc-400",
              "hover:bg-zinc-100 dark:hover:bg-zinc-800",
              "transition-colors duration-200",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            )}
            aria-label="Close menu"
          >
            <Icon name="close" size={18} aria-hidden={true} />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {SOLUTIONS.map((solution) => (
            <motion.div key={solution.href} variants={itemVariants}>
              <Link
                href={solution.href}
                onClick={onClose}
                className={cn(
                  "flex flex-col items-center gap-2 p-3",
                  "rounded-xl",
                  "text-zinc-700 dark:text-zinc-300",
                  "hover:bg-brand-primary/10",
                  "hover:text-brand-primary dark:hover:text-brand-primary",
                  "transition-colors duration-200",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
                )}
                role="menuitem"
              >
                <div className={cn(
                  "w-10 h-10 flex items-center justify-center",
                  "rounded-xl",
                  "bg-zinc-100 dark:bg-zinc-800",
                  "group-hover:bg-brand-primary/20"
                )}>
                  <Icon name={solution.icon} size={20} aria-hidden={true} />
                </div>
                <span className="text-xs font-medium text-center leading-tight">
                  {solution.title}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div variants={itemVariants} className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-700">
          <Link
            href="/solutions"
            onClick={onClose}
            className={cn(
              "flex items-center justify-center gap-2",
              "py-2 px-4 rounded-lg",
              "text-sm font-medium",
              "text-brand-primary hover:text-brand-primary/80",
              "hover:bg-brand-primary/10",
              "transition-colors duration-200",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
            )}
          >
            View All Solutions
            <Icon name="chevronRight" size={16} aria-hidden={true} />
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
}
