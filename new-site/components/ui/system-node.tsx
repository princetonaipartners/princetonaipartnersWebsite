'use client';

import { forwardRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

type NodeStatus = 'healthy' | 'warning' | 'error' | 'idle';
type NodeSize = 'sm' | 'md' | 'lg' | 'xl';

interface SystemNodeProps {
  icon?: React.ReactNode;
  image?: string;
  label: string;
  description?: string;
  status?: NodeStatus;
  metrics?: {
    label: string;
    value: string;
    percentage?: number; // 0-100 for progress bar
  }[];
  handles?: string[]; // What this service handles
  techStack?: string[];
  isCenter?: boolean;
  size?: NodeSize;
  className?: string;
}

/**
 * SystemNode - Enhanced architecture node with status and hover details
 * Used in architecture diagrams to show system components
 */
export const SystemNode = forwardRef<HTMLDivElement, SystemNodeProps>(({
  icon,
  image,
  label,
  description,
  status = 'healthy',
  metrics,
  handles,
  techStack,
  isCenter = false,
  size = 'md',
  className,
}, ref) => {
  const [isHovered, setIsHovered] = useState(false);

  const statusColors = {
    healthy: {
      dot: 'bg-emerald-400',
      ring: 'ring-emerald-400/20',
      glow: 'shadow-emerald-400/20',
    },
    warning: {
      dot: 'bg-amber-400',
      ring: 'ring-amber-400/20',
      glow: 'shadow-amber-400/20',
    },
    error: {
      dot: 'bg-red-400',
      ring: 'ring-red-400/20',
      glow: 'shadow-red-400/20',
    },
    idle: {
      dot: 'bg-zinc-400',
      ring: 'ring-zinc-400/20',
      glow: 'shadow-zinc-400/20',
    },
  };

  // Size configurations
  const sizeConfig = {
    sm: { container: 'h-12 w-12', icon: 'w-5 h-5', label: 'text-xs', image: 32 },
    md: { container: 'h-16 w-16', icon: 'w-6 h-6', label: 'text-sm', image: 40 },
    lg: { container: 'h-20 w-20', icon: 'w-7 h-7', label: 'text-base', image: 48 },
    xl: { container: 'h-24 w-24', icon: 'w-10 h-10', label: 'text-lg', image: 56 },
  };

  const centerSizeConfig = {
    sm: { container: 'h-16 w-16', icon: 'w-7 h-7', label: 'text-sm', image: 40 },
    md: { container: 'h-20 w-20', icon: 'w-8 h-8', label: 'text-base', image: 48 },
    lg: { container: 'h-28 w-28', icon: 'w-12 h-12', label: 'text-lg', image: 64 },
    xl: { container: 'h-32 w-32', icon: 'w-14 h-14', label: 'text-xl', image: 72 },
  };

  const currentSize = isCenter ? centerSizeConfig[size] : sizeConfig[size];
  const colors = statusColors[status];

  return (
    <div
      ref={ref}
      className={cn('relative flex flex-col items-center gap-3', className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Node container */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className={cn(
          'relative flex items-center justify-center rounded-xl border backdrop-blur-sm transition-all duration-300 cursor-pointer',
          currentSize.container,
          isCenter
            ? 'border-brand-primary/50 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 shadow-lg shadow-brand-primary/25'
            : 'border-zinc-700 bg-zinc-900/80 hover:border-brand-primary/50 hover:shadow-lg hover:shadow-brand-primary/10',
          isHovered && !isCenter && 'border-brand-primary/50 shadow-lg shadow-brand-primary/10'
        )}
      >
        {/* Animated ring on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className={cn(
                'absolute inset-0 rounded-xl ring-2',
                colors.ring
              )}
            />
          )}
        </AnimatePresence>

        {/* Subtle glow breathe effect for center node */}
        {isCenter && (
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )}

        {/* Icon or Image */}
        <div className={cn(
          'relative z-10 transition-colors',
          currentSize.icon,
          isCenter ? 'text-white' : 'text-zinc-400',
          isHovered && !isCenter && 'text-brand-primary'
        )}>
          {image ? (
            <img
              src={image}
              alt={label}
              width={currentSize.image}
              height={currentSize.image}
              className="object-contain"
            />
          ) : (
            icon
          )}
        </div>

        {/* Status indicator */}
        <div className="absolute -top-1 -right-1">
          <div className={cn('w-2.5 h-2.5 rounded-full', colors.dot)}>
            <div className={cn('absolute inset-0 rounded-full animate-ping', colors.dot)} style={{ animationDuration: '2s' }} />
          </div>
        </div>
      </motion.div>

      {/* Label */}
      <span className={cn(
        'font-mono transition-colors font-medium',
        currentSize.label,
        isCenter ? 'text-zinc-200' : 'text-zinc-400',
        isHovered && 'text-zinc-200'
      )}>
        {label}
      </span>

      {/* Enhanced Hover card */}
      <AnimatePresence>
        {isHovered && (description || metrics || techStack || handles) && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-4 z-50 w-72"
          >
            <div className="bg-zinc-900/98 backdrop-blur-xl border border-zinc-700/80 rounded-xl shadow-2xl shadow-black/60 overflow-hidden">
              {/* Arrow */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-900 border-l border-t border-zinc-700/80 rotate-45" />

              {/* Header with status */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
                <span className="text-sm font-semibold text-zinc-200">{label}</span>
                <div className={cn(
                  'flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wide',
                  status === 'healthy' && 'bg-emerald-400/10 text-emerald-400',
                  status === 'warning' && 'bg-amber-400/10 text-amber-400',
                  status === 'error' && 'bg-red-400/10 text-red-400',
                  status === 'idle' && 'bg-zinc-400/10 text-zinc-400'
                )}>
                  <div className={cn('w-1.5 h-1.5 rounded-full', colors.dot)} />
                  {status}
                </div>
              </div>

              <div className="p-4 space-y-4">
                {/* Description */}
                {description && (
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {description}
                  </p>
                )}

                {/* What it handles */}
                {handles && handles.length > 0 && (
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                      What it handles
                    </span>
                    <ul className="mt-2 space-y-1.5">
                      {handles.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                          <span className="text-brand-primary mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Metrics with progress bars */}
                {metrics && metrics.length > 0 && (
                  <div className="space-y-3">
                    {metrics.map((metric, i) => (
                      <div key={i}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-mono text-zinc-500 uppercase">
                            {metric.label}
                          </span>
                          <span className="text-sm font-mono text-brand-primary font-semibold">
                            {metric.value}
                          </span>
                        </div>
                        {metric.percentage !== undefined && (
                          <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full transition-all duration-500"
                              style={{ width: `${metric.percentage}%` }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Tech stack footer */}
              {techStack && techStack.length > 0 && (
                <div className="px-4 py-3 border-t border-zinc-800 bg-zinc-900/50">
                  <div className="flex flex-wrap gap-1.5">
                    {techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-mono bg-zinc-800/80 text-zinc-400 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

SystemNode.displayName = 'SystemNode';
