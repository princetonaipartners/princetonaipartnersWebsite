"use client";

import { cn } from "@/lib/utils";

interface TechHeroBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * TechHeroBackground - Premium tech-focused background with:
 * - Subtle gradient orbs (inspired by 21st.dev)
 * - Enhanced beam effects (slow-moving light rays)
 * - Animated grid pattern
 * - Theme-aware (adapts for light/dark mode)
 */
export default function TechHeroBackground({
  children,
  className,
}: TechHeroBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div
          className="absolute inset-0 animate-grid-move"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(10, 132, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(10, 132, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Gradient Orbs - Large center orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(10, 132, 255, 0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Gradient Orbs - Top right accent */}
      <div
        className="absolute -top-20 -right-20 w-[25rem] h-[25rem] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(10, 132, 255, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Gradient Orbs - Bottom left accent */}
      <div
        className="absolute -bottom-20 -left-20 w-[25rem] h-[25rem] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Enhanced Beam Effect - Diagonal light sweep */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[200%] h-[2px] top-1/3 left-0 animate-beam-sweep opacity-20 dark:opacity-30"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(10, 132, 255, 0.6), transparent)",
            boxShadow: "0 0 20px rgba(10, 132, 255, 0.5)",
          }}
        />
      </div>

      {/* Secondary beam - offset timing */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[200%] h-[2px] top-2/3 left-0 opacity-15 dark:opacity-25"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.6), transparent)",
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
            animation: "beamSweep 12s ease-in-out infinite",
            animationDelay: "4s",
          }}
        />
      </div>

      {/* Subtle Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.1) 100%)",
        }}
      />

      {/* Content Layer - elevated above all backgrounds */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
