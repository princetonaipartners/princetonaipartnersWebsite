'use client';

import { RefObject, useEffect, useId, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement>;
  fromRef: RefObject<HTMLElement>;
  toRef: RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

/**
 * AnimatedBeam - Creates animated SVG beam between two elements
 * Used for architecture diagrams showing data flow
 */
export function AnimatedBeam({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  pathColor = 'gray',
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = '#0A84FF',
  gradientStopColor = '#0060CE',
  delay = 0,
  duration = 2,
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}: AnimatedBeamProps) {
  const id = useId();
  const [pathD, setPathD] = useState('');
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  // Calculate the path between elements
  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) {
        return;
      }

      const containerRect = containerRef.current.getBoundingClientRect();
      const fromRect = fromRef.current.getBoundingClientRect();
      const toRect = toRef.current.getBoundingClientRect();

      const svgWidth = containerRect.width;
      const svgHeight = containerRect.height;
      setSvgDimensions({ width: svgWidth, height: svgHeight });

      // Calculate start and end points relative to container
      const startX = fromRect.left - containerRect.left + fromRect.width / 2 + startXOffset;
      const startY = fromRect.top - containerRect.top + fromRect.height / 2 + startYOffset;
      const endX = toRect.left - containerRect.left + toRect.width / 2 + endXOffset;
      const endY = toRect.top - containerRect.top + toRect.height / 2 + endYOffset;

      // Calculate control point for curve
      const midX = (startX + endX) / 2;
      const midY = (startY + endY) / 2;

      // Determine curve direction based on positions
      const dx = endX - startX;
      const dy = endY - startY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Perpendicular offset for curve
      const curvatureOffset = curvature * distance * 0.5;
      const controlX = midX + (-dy / distance) * curvatureOffset;
      const controlY = midY + (dx / distance) * curvatureOffset;

      // Create path
      const d = `M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`;
      setPathD(d);
    };

    updatePath();

    // Debounced resize handler
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updatePath, 100);
    };

    window.addEventListener('resize', handleResize);

    // Use ResizeObserver for container changes
    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      clearTimeout(timeoutId);
    };
  }, [containerRef, fromRef, toRef, curvature, startXOffset, startYOffset, endXOffset, endYOffset]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        'pointer-events-none absolute left-0 top-0 transform-gpu stroke-2',
        className
      )}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      {/* Background path */}
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
        fill="none"
      />

      {/* Animated gradient path */}
      <path
        d={pathD}
        stroke={`url(#${id}-gradient)`}
        strokeWidth={pathWidth}
        strokeLinecap="round"
        fill="none"
        strokeDasharray="1000"
        strokeDashoffset="1000"
      >
        <animate
          attributeName="stroke-dashoffset"
          values={reverse ? '0;1000' : '1000;0'}
          dur={`${duration}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
        />
      </path>

      {/* Glowing orb traveling along path */}
      <circle r="4" fill={`url(#${id}-glow)`}>
        <animateMotion
          dur={`${duration}s`}
          repeatCount="indefinite"
          begin={`${delay}s`}
          keyPoints={reverse ? '1;0' : '0;1'}
          keyTimes="0;1"
        >
          <mpath href={`#${id}-path`} />
        </animateMotion>
      </circle>

      {/* Hidden path for motion reference */}
      <path id={`${id}-path`} d={pathD} fill="none" />

      <defs>
        {/* Gradient for beam */}
        <linearGradient id={`${id}-gradient`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={gradientStartColor} stopOpacity="0" />
          <stop offset="50%" stopColor={gradientStartColor} stopOpacity="1" />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </linearGradient>

        {/* Radial gradient for glowing orb */}
        <radialGradient id={`${id}-glow`}>
          <stop offset="0%" stopColor={gradientStartColor} stopOpacity="1" />
          <stop offset="100%" stopColor={gradientStartColor} stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

interface ArchitectureNodeProps {
  icon: React.ReactNode;
  label: string;
  className?: string;
  isCenter?: boolean;
}

/**
 * ArchitectureNode - A node in the architecture diagram
 */
export const ArchitectureNode = ({
  icon,
  label,
  className,
  isCenter = false,
}: ArchitectureNodeProps) => {
  return (
    <div
      className={cn(
        'relative flex flex-col items-center gap-2',
        className
      )}
    >
      <div
        className={cn(
          'flex items-center justify-center rounded-xl border backdrop-blur-sm transition-all duration-300',
          isCenter
            ? 'h-20 w-20 border-brand-primary/50 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 shadow-brand'
            : 'h-14 w-14 border-zinc-700 bg-zinc-900/80 hover:border-brand-primary/50 hover:shadow-brand'
        )}
      >
        <div className={cn(
          'transition-colors',
          isCenter ? 'text-white' : 'text-zinc-400 group-hover:text-brand-primary'
        )}>
          {icon}
        </div>
      </div>
      <span className={cn(
        'text-xs font-mono',
        isCenter ? 'text-zinc-300' : 'text-zinc-500'
      )}>
        {label}
      </span>
    </div>
  );
};
