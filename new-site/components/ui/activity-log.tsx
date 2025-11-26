'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CheckCircle2, ArrowRight, Database, Zap, Server, Globe, Shield, Clock } from 'lucide-react';

interface LogEntry {
  id: number;
  timestamp: string;
  action: string;
  source: string;
  target: string;
  status: 'success' | 'processing' | 'pending';
  latency?: string;
}

interface ActivityLogProps {
  className?: string;
  maxEntries?: number;
}

const SAMPLE_ACTIONS = [
  { action: 'Processing request', source: 'Client App', target: 'API Gateway' },
  { action: 'Authenticating user', source: 'Auth Service', target: 'Database' },
  { action: 'Fetching data', source: 'API Gateway', target: 'PostgreSQL' },
  { action: 'Caching response', source: 'Redis', target: 'Edge CDN' },
  { action: 'AI inference', source: 'AI Engine', target: 'Client App' },
  { action: 'Syncing state', source: 'Message Queue', target: 'Workers' },
  { action: 'Encrypting payload', source: 'Security Layer', target: 'API Gateway' },
  { action: 'Load balancing', source: 'Edge CDN', target: 'Server Pool' },
];

/**
 * ActivityLog - Simulated live system activity stream
 * Shows real-time-like log entries with animations
 */
export function ActivityLog({ className, maxEntries = 3 }: ActivityLogProps) {
  const [entries, setEntries] = useState<LogEntry[]>([]);
  const entryIdRef = useRef(0);

  // Generate new log entries periodically
  useEffect(() => {
    const addEntry = () => {
      const randomAction = SAMPLE_ACTIONS[Math.floor(Math.random() * SAMPLE_ACTIONS.length)];
      const now = new Date();
      const timestamp = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });

      const newEntry: LogEntry = {
        id: entryIdRef.current++,
        timestamp,
        ...randomAction,
        status: 'processing',
        latency: `${Math.floor(Math.random() * 20 + 5)}ms`,
      };

      setEntries(prev => {
        const updated = [newEntry, ...prev].slice(0, maxEntries + 1);
        return updated;
      });

      // Mark as complete after a short delay
      setTimeout(() => {
        setEntries(prev =>
          prev.map(entry =>
            entry.id === newEntry.id
              ? { ...entry, status: 'success' as const }
              : entry
          )
        );
      }, 500 + Math.random() * 500);
    };

    // Add initial entries
    addEntry();
    const interval = setInterval(addEntry, 3500);

    return () => clearInterval(interval);
  }, [maxEntries]);

  const statusIcons = {
    success: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
    processing: (
      <div className="w-4 h-4 border-2 border-brand-primary border-t-transparent rounded-full animate-spin" />
    ),
    pending: <Clock className="w-4 h-4 text-zinc-500" />,
  };

  return (
    <div className={cn(
      'relative rounded-xl border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm overflow-hidden',
      className
    )}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800 bg-zinc-900/50">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm font-mono text-zinc-400 uppercase tracking-wider font-medium">
            System Activity
          </span>
        </div>
        <span className="text-sm font-mono text-zinc-500">
          {entries.length} events
        </span>
      </div>

      {/* Log entries */}
      <div className="p-3 space-y-2 min-h-[140px]">
        <AnimatePresence mode="popLayout">
          {entries.slice(0, maxEntries).map((entry) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -20, height: 0 }}
              animate={{ opacity: 1, x: 0, height: 'auto' }}
              exit={{ opacity: 0, x: 20, height: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors group"
            >
              {/* Status icon */}
              <div className="flex-shrink-0">
                {statusIcons[entry.status]}
              </div>

              {/* Timestamp */}
              <span className="text-sm font-mono text-zinc-500 flex-shrink-0">
                {entry.timestamp}
              </span>

              {/* Action */}
              <span className="text-sm font-mono text-zinc-300 truncate font-medium">
                {entry.action}
              </span>

              {/* Flow indicator */}
              <div className="flex items-center gap-2 text-sm font-mono text-zinc-500 flex-shrink-0 ml-auto">
                <span className="text-zinc-500 hidden sm:inline">{entry.source}</span>
                <ArrowRight className="w-4 h-4 text-brand-primary" />
                <span className="text-zinc-500 hidden sm:inline">{entry.target}</span>
              </div>

              {/* Latency */}
              {entry.status === 'success' && entry.latency && (
                <span className="text-sm font-mono text-emerald-400 font-semibold flex-shrink-0">
                  {entry.latency}
                </span>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Animated bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
        <motion.div
          className="h-full w-1/3 bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent"
          animate={{ x: ['-100%', '400%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </div>
  );
}
