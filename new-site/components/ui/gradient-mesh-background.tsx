'use client';

import { cn } from '@/lib/utils';

interface GradientMeshBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export function GradientMeshBackground({
  className,
  children,
}: GradientMeshBackgroundProps) {
  return (
    <div
      className={cn(
        'relative z-10 overflow-hidden bg-slate-900 dark:bg-zinc-900',
        className
      )}
    >
      {/* Animated gradient mesh - pure CSS, 0 extra DOM elements */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, rgba(120, 119, 198, 0.3), transparent),
            radial-gradient(ellipse 60% 50% at 80% 50%, rgba(59, 130, 246, 0.3), transparent),
            radial-gradient(ellipse 50% 80% at 50% 100%, rgba(124, 58, 237, 0.2), transparent)
          `,
        }}
      />

      {/* Animated gradient orbs */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)
          `,
          animation: 'gradientShift 15s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      {/* Subtle animated movement layer */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, rgba(96, 165, 250, 0.5) 0%, transparent 40%)
          `,
          animation: 'gradientPulse 8s ease-in-out infinite',
          willChange: 'transform, opacity',
        }}
      />

      {/* Noise texture overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-soft-light pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient fade from top (connects to previous section) */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white dark:from-dark-bg-secondary to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* CSS Keyframes */}
      <style jsx>{`
        @keyframes gradientShift {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(5%, 5%) scale(1.05);
          }
          66% {
            transform: translate(-5%, -3%) scale(0.95);
          }
        }

        @keyframes gradientPulse {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.35;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
