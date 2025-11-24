'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeUpVariants } from '@/lib/animations';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FadeInSection({
  children,
  delay = 0,
  className
}: FadeInSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeUpVariants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
