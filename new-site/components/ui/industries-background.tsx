'use client';

import { cn } from '@/lib/utils';
import { useShouldReduceMotion } from '@/lib/hooks/use-mobile';

interface IndustriesBackgroundProps {
  className?: string;
}

/**
 * IndustriesBackground - Subtle grid with pulsing glow spots
 * Designed for the "Who We Serve" page
 * Features:
 * - Perspective grid effect
 * - Animated glow spots in brand colors
 * - Static fallback on mobile
 * - Pure CSS animations for performance
 */
export function IndustriesBackground({ className }: IndustriesBackgroundProps) {
  const shouldReduceMotion = useShouldReduceMotion();

  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className
      )}
      style={{ contain: 'layout style paint' }}
    >
      {/* Top gradient fade for header safe zone */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark-bg-primary via-dark-bg-primary/80 to-transparent z-10" />

      {/* Subtle radial gradient base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,159,255,0.08)_0%,transparent_70%)]" />

      {/* Grid pattern - subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Perspective grid lines - very subtle */}
      <div className="absolute inset-0 [perspective:800px]">
        <div
          className="absolute inset-0 [transform:rotateX(60deg)] origin-center"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59,159,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59,159,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            height: '200%',
            top: '-50%',
          }}
        />
      </div>

      {/* Animated glow spots - disabled on mobile */}
      {!shouldReduceMotion && (
        <>
          {/* Top left glow */}
          <div
            className="absolute top-20 left-[10%] w-[300px] h-[300px] rounded-full bg-brand-primary/10 blur-[100px] animate-pulse-slow"
            style={{ animationDelay: '0s' }}
          />

          {/* Top right glow */}
          <div
            className="absolute top-32 right-[15%] w-[250px] h-[250px] rounded-full bg-cyan-500/8 blur-[80px] animate-pulse-slow"
            style={{ animationDelay: '2s' }}
          />

          {/* Center glow */}
          <div
            className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-brand-primary/5 blur-[120px] animate-pulse-slow"
            style={{ animationDelay: '1s' }}
          />

          {/* Bottom accent glows */}
          <div
            className="absolute bottom-[30%] left-[20%] w-[200px] h-[200px] rounded-full bg-purple-500/5 blur-[60px] animate-pulse-slow"
            style={{ animationDelay: '3s' }}
          />
          <div
            className="absolute bottom-[25%] right-[25%] w-[180px] h-[180px] rounded-full bg-emerald-500/5 blur-[60px] animate-pulse-slow"
            style={{ animationDelay: '4s' }}
          />
        </>
      )}

      {/* Static glows for mobile - no animation */}
      {shouldReduceMotion && (
        <>
          <div className="absolute top-20 left-[10%] w-[300px] h-[300px] rounded-full bg-brand-primary/8 blur-[100px]" />
          <div className="absolute top-32 right-[15%] w-[250px] h-[250px] rounded-full bg-cyan-500/6 blur-[80px]" />
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-brand-primary/4 blur-[120px]" />
        </>
      )}

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-bg-primary to-transparent" />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
