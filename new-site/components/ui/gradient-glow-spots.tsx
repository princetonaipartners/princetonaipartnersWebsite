'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface GlowSpot {
  id: string;
  x: string; // CSS position (e.g., '10%', '80%')
  y: string; // CSS position
  size: number; // Size in pixels
  color: string; // Hex color
  opacity: number; // Base opacity 0-1
  parallaxSpeed: number; // 0-1, lower = slower movement
}

const defaultSpots: GlowSpot[] = [
  // Hero area - larger, brighter
  {
    id: 'hero-main',
    x: '50%',
    y: '20%',
    size: 600,
    color: '#0A84FF',
    opacity: 0.15,
    parallaxSpeed: 0.3,
  },
  // Left side accent
  {
    id: 'left-accent',
    x: '10%',
    y: '40%',
    size: 400,
    color: '#0A84FF',
    opacity: 0.08,
    parallaxSpeed: 0.5,
  },
  // Mid page - capabilities area
  {
    id: 'mid-right',
    x: '85%',
    y: '60%',
    size: 500,
    color: '#0066CC',
    opacity: 0.1,
    parallaxSpeed: 0.4,
  },
  // Lower section
  {
    id: 'lower-left',
    x: '15%',
    y: '120%',
    size: 450,
    color: '#0A84FF',
    opacity: 0.08,
    parallaxSpeed: 0.6,
  },
  // Tech stack area
  {
    id: 'tech-stack',
    x: '75%',
    y: '180%',
    size: 400,
    color: '#22D3EE',
    opacity: 0.06,
    parallaxSpeed: 0.5,
  },
  // CTA area - brighter to draw attention
  {
    id: 'cta-glow',
    x: '50%',
    y: '250%',
    size: 500,
    color: '#0A84FF',
    opacity: 0.12,
    parallaxSpeed: 0.4,
  },
];

interface GradientGlowSpotsProps {
  spots?: GlowSpot[];
  className?: string;
}

export function GradientGlowSpots({ spots = defaultSpots, className }: GradientGlowSpotsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none overflow-hidden ${className || ''}`}
      style={{ zIndex: 1 }}
    >
      {spots.map((spot) => (
        <GlowSpotElement key={spot.id} spot={spot} scrollY={scrollY} />
      ))}
    </div>
  );
}

function GlowSpotElement({
  spot,
  scrollY,
}: {
  spot: GlowSpot;
  scrollY: ReturnType<typeof useScroll>['scrollY'];
}) {
  // Parallax effect - spot moves slower than scroll
  const y = useTransform(scrollY, [0, 3000], [0, -1000 * spot.parallaxSpeed]);

  // Fade based on scroll position
  const opacity = useTransform(
    scrollY,
    [0, 500, 2000, 3000],
    [spot.opacity, spot.opacity * 0.8, spot.opacity * 0.6, spot.opacity * 0.4]
  );

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: spot.x,
        top: spot.y,
        width: spot.size,
        height: spot.size,
        y,
        opacity,
        background: `radial-gradient(circle, ${spot.color}40 0%, ${spot.color}20 30%, transparent 70%)`,
        filter: 'blur(80px)',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}

export default GradientGlowSpots;
