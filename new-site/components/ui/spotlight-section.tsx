'use client';

import { cn } from '@/lib/utils';

interface SpotlightSectionProps {
  className?: string;
  children?: React.ReactNode;
  /** Spotlight intensity - controls glow opacity */
  intensity?: 'subtle' | 'medium' | 'strong' | 'finale';
  /** Primary spotlight color */
  color?: 'blue' | 'purple' | 'mixed' | 'white';
}

export function SpotlightSection({
  className,
  children,
  intensity = 'medium',
  color = 'mixed',
}: SpotlightSectionProps) {
  const intensityMap = {
    subtle: { spotlight: 'opacity-20', ring: 'opacity-10', core: 'opacity-15' },
    medium: { spotlight: 'opacity-30', ring: 'opacity-15', core: 'opacity-20' },
    strong: { spotlight: 'opacity-40', ring: 'opacity-20', core: 'opacity-30' },
    finale: { spotlight: 'opacity-50', ring: 'opacity-30', core: 'opacity-40' },
  };

  const colorMap = {
    blue: {
      primary: 'rgba(59, 130, 246, 0.6)',
      secondary: 'rgba(10, 132, 255, 0.4)',
      ring: 'rgba(59, 130, 246, 0.5)',
      core: 'rgba(96, 165, 250, 0.8)',
    },
    purple: {
      primary: 'rgba(139, 92, 246, 0.6)',
      secondary: 'rgba(168, 85, 247, 0.4)',
      ring: 'rgba(139, 92, 246, 0.5)',
      core: 'rgba(167, 139, 250, 0.8)',
    },
    mixed: {
      primary: 'rgba(99, 102, 241, 0.5)',
      secondary: 'rgba(139, 92, 246, 0.4)',
      ring: 'rgba(59, 130, 246, 0.4)',
      core: 'rgba(129, 140, 248, 0.7)',
    },
    white: {
      primary: 'rgba(255, 255, 255, 0.15)',
      secondary: 'rgba(200, 200, 255, 0.1)',
      ring: 'rgba(255, 255, 255, 0.2)',
      core: 'rgba(255, 255, 255, 0.3)',
    },
  };

  const { spotlight, ring, core } = intensityMap[intensity];
  const colors = colorMap[color];

  return (
    <section
      className={cn(
        'relative z-10 overflow-hidden bg-transparent',
        className
      )}
    >
      {/* ============================================
          THE "GRAND FINALE" SPOTLIGHT SYSTEM
          Creates a dramatic "portal" effect
          ============================================ */}

      {/* Outer ambient glow - Sets the stage */}
      <div
        className={cn(
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[300%] rounded-full blur-[150px] pointer-events-none',
          spotlight
        )}
        style={{
          background: `radial-gradient(ellipse 40% 30% at center, ${colors.secondary} 0%, transparent 70%)`,
        }}
      />

      {/* Primary spotlight - The main "Glow Up" */}
      <div
        className={cn(
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[200%] rounded-full blur-[100px] pointer-events-none',
          spotlight
        )}
        style={{
          background: `radial-gradient(ellipse 50% 40% at center, ${colors.primary} 0%, ${colors.secondary} 40%, transparent 70%)`,
        }}
      />

      {/* Core spotlight - Intense center focus */}
      <div
        className={cn(
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[80%] h-[60%] rounded-full blur-[80px] pointer-events-none',
          core
        )}
        style={{
          background: `radial-gradient(ellipse 60% 50% at center, ${colors.core} 0%, transparent 60%)`,
        }}
      />

      {/* Animated breathing ring - Subtle life */}
      <div
        className={cn(
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[120%] rounded-full blur-[60px] pointer-events-none',
          ring
        )}
        style={{
          background: `radial-gradient(ellipse 70% 60% at center, ${colors.ring} 0%, transparent 50%)`,
          animation: 'spotlight-breathe 4s ease-in-out infinite',
        }}
      />

      {/* Top fade - Smooth transition from content above */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, transparent 100%)',
        }}
      />

      {/* Content - Elevated above spotlight */}
      <div className="relative z-10">{children}</div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes spotlight-breathe {
          0%, 100% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(1.05);
          }
        }
      `}</style>
    </section>
  );
}
