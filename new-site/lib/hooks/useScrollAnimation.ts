import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface UseScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

/**
 * Custom hook for scroll-triggered animations
 * Similar to the original Intersection Observer pattern
 */
export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = '0px 0px -50px 0px',
  } = options;

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: triggerOnce,
    margin: rootMargin as `${number}px ${number}px ${number}px ${number}px`,
    amount: threshold,
  });

  return { ref, isInView };
}

/**
 * Hook for staggered animations (like original GSAP stagger effect)
 */
export function useStaggerAnimation(itemCount: number, baseDelay: number = 0.1) {
  const [delays, setDelays] = useState<number[]>([]);

  useEffect(() => {
    const calculatedDelays = Array.from(
      { length: itemCount },
      (_, i) => i * baseDelay
    );
    setDelays(calculatedDelays);
  }, [itemCount, baseDelay]);

  return delays;
}

/**
 * Hook for animated counter (for metrics, stats)
 */
export function useAnimatedCounter(
  end: number,
  duration: number = 2000,
  start: number = 0
) {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);

  const animate = () => {
    setIsAnimating(true);
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(start + (end - start) * easeProgress);

      setCount(currentCount);

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(updateCount);
  };

  return { count, animate, isAnimating };
}
