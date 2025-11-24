"use client";

import { cn } from "@/lib/utils";

interface ScanlineProps {
  className?: string;
  color?: string;
  height?: number;
  opacity?: number;
  speed?: number;
}

/**
 * Scanline - Animated horizontal line that moves vertically
 * Creates "data processing" tech aesthetic
 */
export default function Scanline({
  className,
  color = "rgba(10, 132, 255, 0.3)",
  height = 2,
  opacity = 0.3,
  speed = 3,
}: ScanlineProps) {
  return (
    <div
      className={cn("absolute w-full pointer-events-none", className)}
      style={{
        height: `${height}px`,
        background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        boxShadow: `0 0 20px ${color}`,
        opacity,
        animation: `scanline ${speed}s linear infinite`,
      }}
    />
  );
}
