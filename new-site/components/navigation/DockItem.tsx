'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@/components/icons';
import { IconName } from '@/lib/icon-types';
import { cn } from '@/lib/utils';

interface DockItemProps {
  icon: IconName;
  label: string;
  href?: string;
  isActive?: boolean;
  scale?: number;
  onHover?: () => void;
  onLeave?: () => void;
  onClick?: () => void;
  isPanelOpen?: boolean;
  isMobile?: boolean;
}

const tooltipVariants = {
  hidden: { opacity: 0, y: 4, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.15, ease: 'easeOut' as const }
  },
  exit: {
    opacity: 0,
    y: 4,
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

export function DockItem({
  icon,
  label,
  href,
  isActive = false,
  scale = 1,
  onHover,
  onLeave,
  onClick,
  isPanelOpen = false,
  isMobile = false,
}: DockItemProps) {
  const [showTooltip, setShowTooltip] = useState(false);

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

  const content = (
    <motion.div
      className={cn(
        "relative flex items-center justify-center",
        isMobile ? "w-10 h-10" : "w-12 h-12",
        "rounded-xl transition-colors duration-200",
        "text-zinc-600 dark:text-zinc-400",
        "hover:text-brand-primary dark:hover:text-brand-primary",
        "hover:bg-brand-primary/10",
        isActive && "text-brand-primary dark:text-brand-primary",
        isPanelOpen && "bg-brand-primary/10 text-brand-primary dark:text-brand-primary"
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
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      aria-label={label}
      aria-current={isActive ? 'page' : undefined}
      aria-expanded={isPanelOpen ? true : undefined}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <Icon
        name={icon}
        size={isMobile ? 20 : 24}
        aria-hidden={true}
      />

      {/* Active indicator dot */}
      {isActive && !isPanelOpen && (
        <motion.div
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-primary"
          layoutId="active-indicator"
          style={{
            boxShadow: '0 0 8px 2px rgba(59, 130, 246, 0.6)'
          }}
        />
      )}

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
              variants={tooltipVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="tooltip"
            >
              {label}
              {/* Tooltip arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                <div className="w-2 h-2 bg-zinc-900 dark:bg-zinc-800 rotate-45 -translate-y-1" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );

  if (href && !onClick) {
    return (
      <Link href={href} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-xl">
        {content}
      </Link>
    );
  }

  return content;
}
