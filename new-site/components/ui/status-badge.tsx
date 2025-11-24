"use client";

import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  children: React.ReactNode;
  status?: "live" | "active" | "new" | "beta";
  className?: string;
}

/**
 * StatusBadge - Badge with pulse animation for live/active status
 * Tech-focused design
 */
export default function StatusBadge({
  children,
  status = "live",
  className,
}: StatusBadgeProps) {
  const statusColors = {
    live: "bg-green-500",
    active: "bg-brand-primary dark:bg-dark-brand-primary",
    new: "bg-accent-purple",
    beta: "bg-accent-orange",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium",
        "bg-white/90 dark:bg-dark-bg-tertiary",
        "border border-border dark:border-dark-border",
        className
      )}
    >
      {/* Pulsing dot */}
      <span className="relative flex h-2 w-2">
        <span
          className={cn(
            "animate-pulse-glow absolute inline-flex h-full w-full rounded-full",
            statusColors[status]
          )}
        />
        <span
          className={cn(
            "relative inline-flex rounded-full h-2 w-2",
            statusColors[status]
          )}
        />
      </span>
      <span className="text-text-primary dark:text-dark-text-primary">
        {children}
      </span>
    </div>
  );
}
