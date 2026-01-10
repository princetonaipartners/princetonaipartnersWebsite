'use client';

import { AIPhoneTextLoop } from './demos/AIPhoneTextLoop';
import { useShouldReduceMotion } from "@/lib/hooks/use-mobile";

export function AIPhoneBackground() {
  const shouldReduceMotion = useShouldReduceMotion();

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ contain: 'layout style paint' }}>
      {/* Subtle background elements - HIDDEN ON MOBILE */}
      {!shouldReduceMotion && (
        <>
          {/* Circular pulse rings - reduced from 3 to 2 */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 dark:opacity-5">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full border-2 border-brand-primary/20 dark:border-dark-brand-primary/30 animate-ping"
                style={{
                  width: `${(i + 1) * 180}px`,
                  height: `${(i + 1) * 180}px`,
                  animationDelay: `${i * 1.5}s`,
                  animationDuration: `${6 + i}s`,
                  willChange: 'transform, opacity',
                }}
              />
            ))}
          </div>

          {/* Floating particles - reduced from 8 to 4 */}
          <div className="absolute inset-0 opacity-5 dark:opacity-3">
            {[...Array(4)].map((_, i) => (
              <div
                key={`particle-${i}`}
                className="absolute w-2 h-2 bg-brand-primary/40 dark:bg-brand-primary/50 rounded-full animate-float"
                style={{
                  left: `${(i * 25 + 10) % 85}%`,
                  top: `${(i * 20 + 40) % 60 + 30}%`,
                  animationDelay: `${i * 0.6}s`,
                  animationDuration: `${5 + i}s`,
                  willChange: 'transform',
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* Main Feature - AI Phone Text Loop */}
      <AIPhoneTextLoop />
    </div>
  );
}
