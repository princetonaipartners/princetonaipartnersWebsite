'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Icon } from '@/components/icons';
import { cn } from '@/lib/utils';

interface DockThemeToggleProps {
  scale?: number;
  onHover?: () => void;
  onLeave?: () => void;
  isMobile?: boolean;
}

export function DockThemeToggle({
  scale = 1,
  onHover,
  onLeave,
  isMobile = false,
}: DockThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setShowTooltip(true);
      onHover?.();
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setShowTooltip(false);
      onLeave?.();
    }
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const isDark = resolvedTheme === 'dark';
  const label = isDark ? 'Light mode' : 'Dark mode';

  if (!mounted) {
    return (
      <div className={cn(
        "flex items-center justify-center",
        isMobile ? "w-10 h-10" : "w-12 h-12",
        "rounded-xl",
        "text-zinc-600 dark:text-zinc-400"
      )}>
        <div className={isMobile ? "w-5 h-5" : "w-6 h-6"} />
      </div>
    );
  }

  return (
    <motion.button
      className={cn(
        "relative flex items-center justify-center",
        isMobile ? "w-10 h-10" : "w-12 h-12",
        "rounded-xl transition-colors duration-200",
        "text-zinc-600 dark:text-zinc-400",
        "hover:text-brand-primary dark:hover:text-brand-primary",
        "hover:bg-brand-primary/10",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
      )}
      style={{
        scale,
        transformOrigin: 'bottom center'
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25,
        mass: 0.5
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={toggleTheme}
      aria-label={label}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <Icon
              name="moon"
              size={isMobile ? 20 : 24}
              aria-hidden={true}
            />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <Icon
              name="sun"
              size={isMobile ? 20 : 24}
              aria-hidden={true}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tooltip */}
      {!isMobile && (
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              className={cn(
                "absolute -top-10 left-1/2 -translate-x-1/2",
                "px-2 py-1 rounded-md",
                "bg-zinc-900 dark:bg-zinc-800 text-white text-xs font-medium",
                "whitespace-nowrap",
                "shadow-lg"
              )}
              initial={{ opacity: 0, y: 4, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              role="tooltip"
            >
              {label}
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                <div className="w-2 h-2 bg-zinc-900 dark:bg-zinc-800 rotate-45 -translate-y-1" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.button>
  );
}
