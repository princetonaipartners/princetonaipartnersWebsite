'use client';

import { RefObject, useEffect, useId, useState, useMemo } from 'react';
import { cn } from '@/lib/utils';

interface ParticleBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement>;
  fromRef: RefObject<HTMLElement>;
  toRef: RefObject<HTMLElement>;
  curvature?: number;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  particleCount?: number;
  particleSize?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
  reverse?: boolean;
}

/**
 * ParticleBeam - Enhanced beam with flowing particles
 * Creates animated data flow visualization between nodes
 */
export function ParticleBeam({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  pathColor = 'rgba(255,255,255,0.1)',
  pathWidth = 1,
  pathOpacity = 0.3,
  gradientStartColor = '#0A84FF',
  gradientStopColor = '#0060CE',
  delay = 0,
  duration = 2,
  particleCount = 3,
  particleSize = 3,
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  reverse = false,
}: ParticleBeamProps) {
  const id = useId();
  const [pathD, setPathD] = useState('');
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  // Generate particle delays for staggered animation
  const particleDelays = useMemo(() => {
    return Array.from({ length: particleCount }, (_, i) =>
      delay + (i * (duration / particleCount))
    );
  }, [particleCount, delay, duration]);

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
        'pointer-events-none absolute left-0 top-0 transform-gpu',
        className
      )}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      {/* Background path (static) */}
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
        fill="none"
        strokeDasharray="4 4"
      />

      {/* Animated gradient line */}
      <path
        d={pathD}
        stroke={`url(#${id}-line-gradient)`}
        strokeWidth={pathWidth + 1}
        strokeLinecap="round"
        fill="none"
      >
        <animate
          attributeName="stroke-dasharray"
          values="0 1000;100 1000;0 1000"
          dur={`${duration}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dashoffset"
          values={reverse ? '0;-1000' : '1000;0'}
          dur={`${duration}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
        />
      </path>

      {/* Multiple particles traveling along path */}
      {particleDelays.map((particleDelay, index) => (
        <g key={index}>
          {/* Particle glow (larger, softer) */}
          <circle
            r={particleSize * 2}
            fill={`url(#${id}-particle-glow)`}
            opacity={0.5}
          >
            <animateMotion
              dur={`${duration}s`}
              repeatCount="indefinite"
              begin={`${particleDelay}s`}
              keyPoints={reverse ? '1;0' : '0;1'}
              keyTimes="0;1"
              calcMode="linear"
            >
              <mpath href={`#${id}-motion-path`} />
            </animateMotion>
          </circle>

          {/* Particle core (smaller, brighter) */}
          <circle
            r={particleSize}
            fill={gradientStartColor}
          >
            <animateMotion
              dur={`${duration}s`}
              repeatCount="indefinite"
              begin={`${particleDelay}s`}
              keyPoints={reverse ? '1;0' : '0;1'}
              keyTimes="0;1"
              calcMode="linear"
            >
              <mpath href={`#${id}-motion-path`} />
            </animateMotion>
          </circle>

          {/* Particle trail */}
          <circle
            r={particleSize * 0.5}
            fill={gradientStopColor}
            opacity={0.7}
          >
            <animateMotion
              dur={`${duration}s`}
              repeatCount="indefinite"
              begin={`${particleDelay + 0.05}s`}
              keyPoints={reverse ? '1;0' : '0;1'}
              keyTimes="0;1"
              calcMode="linear"
            >
              <mpath href={`#${id}-motion-path`} />
            </animateMotion>
          </circle>
        </g>
      ))}

      {/* Hidden path for motion reference */}
      <path id={`${id}-motion-path`} d={pathD} fill="none" />

      <defs>
        {/* Gradient for animated line */}
        <linearGradient id={`${id}-line-gradient`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={gradientStartColor} stopOpacity="0" />
          <stop offset="30%" stopColor={gradientStartColor} stopOpacity="0.8" />
          <stop offset="70%" stopColor={gradientStopColor} stopOpacity="0.8" />
          <stop offset="100%" stopColor={gradientStopColor} stopOpacity="0" />
        </linearGradient>

        {/* Radial gradient for particle glow */}
        <radialGradient id={`${id}-particle-glow`}>
          <stop offset="0%" stopColor={gradientStartColor} stopOpacity="0.8" />
          <stop offset="50%" stopColor={gradientStartColor} stopOpacity="0.3" />
          <stop offset="100%" stopColor={gradientStartColor} stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}
