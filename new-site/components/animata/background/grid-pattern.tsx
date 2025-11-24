"use client";

import { cn } from "@/lib/utils";

interface GridPatternProps {
  className?: string;
  gridSize?: number;
  opacity?: number;
  animate?: boolean;
}

/**
 * GridPattern - Animated dot grid background for tech aesthetic
 * Can be used as overlay in various sections
 */
export default function GridPattern({
  className,
  gridSize = 30,
  opacity = 0.2,
  animate = true,
}: GridPatternProps) {
  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)}>
      <div
        className={cn("absolute inset-0", animate && "animate-grid-move")}
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          opacity,
        }}
      />
    </div>
  );
}
