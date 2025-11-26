'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Activity, Zap, Clock, Server, CheckCircle2, AlertCircle } from 'lucide-react';

interface Metric {
  label: string;
  value: string | number;
  suffix?: string;
  icon: React.ReactNode;
  color: 'green' | 'blue' | 'amber';
  trend?: 'up' | 'down' | 'stable';
}

interface LiveMetricsBarProps {
  className?: string;
}

/**
 * LiveMetricsBar - Real-time system metrics display
 * Shows animated counters for system health, latency, throughput
 */
export function LiveMetricsBar({ className }: LiveMetricsBarProps) {
  const [metrics, setMetrics] = useState<Metric[]>([
    { label: 'System Health', value: 99.9, suffix: '%', icon: <CheckCircle2 className="w-3.5 h-3.5" />, color: 'green' },
    { label: 'Requests', value: 1247, suffix: '/s', icon: <Activity className="w-3.5 h-3.5" />, color: 'blue' },
    { label: 'Latency', value: 12, suffix: 'ms', icon: <Zap className="w-3.5 h-3.5" />, color: 'green' },
    { label: 'Uptime', value: '99.99', suffix: '%', icon: <Server className="w-3.5 h-3.5" />, color: 'green' },
  ]);

  const [statusMessage, setStatusMessage] = useState('All systems operational');
  const [pulse, setPulse] = useState(false);

  // Simulate live metric updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => prev.map(metric => {
        if (metric.label === 'Requests') {
          const newValue = Math.floor(1200 + Math.random() * 100);
          return { ...metric, value: newValue };
        }
        if (metric.label === 'Latency') {
          const newValue = Math.floor(10 + Math.random() * 8);
          return { ...metric, value: newValue, color: newValue > 15 ? 'amber' : 'green' };
        }
        return metric;
      }));
      setPulse(true);
      setTimeout(() => setPulse(false), 200);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const colorClasses = {
    green: 'text-emerald-400',
    blue: 'text-brand-primary',
    amber: 'text-amber-400',
  };

  const bgColorClasses = {
    green: 'bg-emerald-400/10',
    blue: 'bg-brand-primary/10',
    amber: 'bg-amber-400/10',
  };

  return (
    <div className={cn(
      'relative rounded-xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm overflow-hidden',
      className
    )}>
      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent" />

      {/* Scanning line effect */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-transparent via-brand-primary/5 to-transparent"
        animate={{ x: ['-100%', '400%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative px-4 py-3 flex items-center justify-between gap-4">
        {/* Status indicator */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className={cn(
              'w-2 h-2 rounded-full bg-emerald-400',
              pulse && 'animate-ping absolute inset-0'
            )} />
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
            {statusMessage}
          </span>
        </div>

        {/* Metrics */}
        <div className="flex items-center gap-4 sm:gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className={cn(
                'p-1 rounded',
                bgColorClasses[metric.color]
              )}>
                <span className={colorClasses[metric.color]}>
                  {metric.icon}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider hidden md:block">
                  {metric.label}
                </span>
                <div className="flex items-baseline gap-0.5">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={metric.value}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className={cn('text-sm font-mono font-semibold', colorClasses[metric.color])}
                    >
                      {typeof metric.value === 'number' ? metric.value.toLocaleString() : metric.value}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-[10px] font-mono text-zinc-500">
                    {metric.suffix}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live indicator */}
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
            Live
          </span>
        </div>
      </div>
    </div>
  );
}
