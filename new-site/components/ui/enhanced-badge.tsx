'use client';

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface EnhancedBadgeProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * EnhancedBadge - Badge with animated gradient border
 * Uses brand gradient colors for the trail effect
 */
export default function EnhancedBadge({ children, className }: EnhancedBadgeProps) {
  return (
    <motion.div
      className={cn(
        "relative inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium overflow-hidden",
        className
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-[length:200%_100%] animate-shimmer-text opacity-30" />

      {/* Inner background */}
      <div className="absolute inset-[1px] rounded-full bg-gradient-to-r from-brand-light to-white dark:from-dark-bg-secondary dark:to-dark-bg-tertiary" />

      {/* Content */}
      <span className="relative bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
        {children}
      </span>
    </motion.div>
  );
}
