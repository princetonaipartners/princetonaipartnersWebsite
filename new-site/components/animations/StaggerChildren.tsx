'use client';

import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/animations';

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
}

export function StaggerChildren({
  children,
  className,
  staggerDelay = 0.1,
  initialDelay = 0.2
}: StaggerChildrenProps) {
  const customStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };

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
