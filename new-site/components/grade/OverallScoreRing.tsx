'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { GradeLevel } from '@/lib/grade/types';
import { gradeToColor } from '@/lib/grade/types';

interface OverallScoreRingProps {
  score: number;
  grade: GradeLevel;
  className?: string;
}

export function OverallScoreRing({ score, grade, className }: OverallScoreRingProps) {
  const [isVisible, setIsVisible] = useState(false);
  const color = gradeToColor(grade);

  // Animated counter
  const springValue = useSpring(0, { stiffness: 50, damping: 20 });
  const displayScore = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    setIsVisible(true);
    springValue.set(score);
  }, [score, springValue]);

  // SVG circle properties
  const size = 280;
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progress = (score / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn('relative flex items-center justify-center', className)}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 blur-3xl opacity-20"
        style={{ backgroundColor: color }}
      />

      {/* SVG Ring */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={strokeWidth}
        />

        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - progress }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          style={{
            filter: `drop-shadow(0 0 10px ${color}50)`,
          }}
        />
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Score number */}
        <motion.span
          className="text-7xl font-bold tabular-nums"
          style={{ color }}
        >
          {isVisible && (
            <motion.span>{displayScore}</motion.span>
          )}
        </motion.span>

        {/* Grade badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.4 }}
          className="mt-2 px-4 py-1.5 rounded-full text-lg font-semibold"
          style={{
            backgroundColor: `${color}20`,
            color: color,
            border: `1px solid ${color}40`,
          }}
        >
          Grade: {grade}
        </motion.div>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-3 text-sm text-dark-text-secondary"
        >
          out of 100
        </motion.p>
      </div>
    </motion.div>
  );
}
