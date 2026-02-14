'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { fadeUpVariants } from '@/lib/animations';
import { usePrefersReducedMotion } from '@/lib/hooks/use-mobile';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

/**
 * FadeInSection - Scroll-triggered fade-in animation
 *
 * Performance optimizations:
 * - Respects prefers-reduced-motion (renders immediately without animation)
 * - Memoized transition object
 * - Only animates once (useInView with once: true)
 */
export function FadeInSection({
  children,
  delay = 0,
  className
}: FadeInSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const prefersReducedMotion = usePrefersReducedMotion();

  // Memoize transition to prevent recreation
  const transition = useMemo(() => ({ delay }), [delay]);

  // Skip animation for users who prefer reduced motion
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeUpVariants}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
