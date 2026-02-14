'use client';

import { motion, Variants } from 'framer-motion';
import { useMemo } from 'react';
import { usePrefersReducedMotion } from '@/lib/hooks/use-mobile';

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
}

/**
 * StaggerChildren - Animated container that staggers child element animations
 *
 * Performance optimizations:
 * - Memoized variant objects to prevent recreation every render
 * - Respects prefers-reduced-motion (renders without animation)
 */
export function StaggerChildren({
  children,
  className,
  staggerDelay = 0.1,
  initialDelay = 0.2
}: StaggerChildrenProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  // Memoize variants to prevent recreation on every render
  const customStagger = useMemo<Variants>(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  }), [staggerDelay, initialDelay]);

  // Simplified static render for reduced motion
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={customStagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}
