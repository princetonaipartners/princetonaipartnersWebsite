'use client';

import { motion } from 'framer-motion';

export function SolutionsBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/[0.03] via-transparent to-cyan-500/[0.02]" />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.15]">
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <pattern
              id="solutions-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(59, 159, 255, 0.3)"
                strokeWidth="0.5"
              />
            </pattern>
            <linearGradient id="grid-fade" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.5" />
              <stop offset="50%" stopColor="white" stopOpacity="0.1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="grid-mask">
              <rect width="100%" height="100%" fill="url(#grid-fade)" />
            </mask>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#solutions-grid)"
            mask="url(#grid-mask)"
          />
        </svg>
      </div>

      {/* Floating glow orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59, 159, 255, 0.12) 0%, transparent 70%)',
          left: '-10%',
          top: '10%',
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%)',
          right: '-5%',
          top: '30%',
        }}
        animate={{
          x: [0, -25, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59, 159, 255, 0.08) 0%, transparent 70%)',
          left: '20%',
          bottom: '20%',
        }}
        animate={{
          x: [0, 20, 0],
          y: [0, -25, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Vertical accent lines */}
      <div className="absolute left-[20%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-primary/10 to-transparent" />
      <div className="absolute right-[20%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent" />

      {/* Top fade for header */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark-bg-primary via-dark-bg-primary/80 to-transparent z-[1]" />
    </div>
  );
}
