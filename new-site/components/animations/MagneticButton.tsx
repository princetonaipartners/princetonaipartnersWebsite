'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useCallback } from 'react';
import { useShouldReduceMotion } from '@/lib/hooks/use-mobile';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticButton({
  children,
  className,
  strength = 0.3
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const rafRef = useRef<number | null>(null);
  const shouldReduceMotion = useShouldReduceMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  // Cache rect on mouse enter to avoid getBoundingClientRect on every move
  const handleMouseEnter = useCallback(() => {
    if (ref.current) {
      rectRef.current = ref.current.getBoundingClientRect();
    }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    // Skip if reduced motion or no cached rect
    if (shouldReduceMotion || !rectRef.current) return;

    // Throttle with RAF
    if (rafRef.current) return;

    rafRef.current = requestAnimationFrame(() => {
      const rect = rectRef.current!;
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = (e.clientX - centerX) * strength;
      const distanceY = (e.clientY - centerY) * strength;

      x.set(distanceX);
      y.set(distanceY);
      rafRef.current = null;
    });
  }, [shouldReduceMotion, strength, x, y]);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    rectRef.current = null;
    x.set(0);
    y.set(0);
  }, [x, y]);

  // On mobile, just render children without magnetic effect
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}
