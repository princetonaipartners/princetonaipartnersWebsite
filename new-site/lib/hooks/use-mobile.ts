'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to detect if the viewport is mobile-sized
 * @param breakpoint - Width threshold in pixels (default: 768)
 * @returns boolean indicating if viewport is below breakpoint
 */
export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check on mount
    const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);
    checkMobile();

    // Debounced resize handler
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 100);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [breakpoint]);

  return isMobile;
}

/**
 * Hook to detect if user prefers reduced motion
 * Respects system accessibility settings
 * @returns boolean indicating if user prefers reduced motion
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mq.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return prefersReduced;
}

/**
 * Combined hook for animation decisions
 * Returns true if animations should be simplified/disabled
 */
export function useShouldReduceMotion(): boolean {
  const isMobile = useIsMobile();
  const prefersReduced = usePrefersReducedMotion();
  return isMobile || prefersReduced;
}
