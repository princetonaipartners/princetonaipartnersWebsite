'use client';

import { cn } from '@/lib/utils';

interface RetroGridProps {
  className?: string;
  angle?: number;
}

/**
 * RetroGrid - Animated perspective grid background
 * Creates a 3D floor effect that scrolls towards the viewer
 * Inspired by Vercel/Linear aesthetic
 */
export function RetroGrid({ className, angle = 65 }: RetroGridProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden [perspective:200px]',
        className
      )}
      style={{ '--grid-angle': `${angle}deg` } as React.CSSProperties}
    >
      {/* Grid container with 3D transform */}
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div
          className={cn(
            // Grid pattern with animation
            '[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]',
            // Animation
            '[animation:grid_20s_linear_infinite]',
            // Light mode grid
            '[background-image:linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_0)]',
            // Dark mode grid - more visible
            'dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_0)]'
          )}
        />
      </div>

      {/* Gradient fade at bottom for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />

      {/* Top fade for smooth transition */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-zinc-950 to-transparent" />
    </div>
  );
}
