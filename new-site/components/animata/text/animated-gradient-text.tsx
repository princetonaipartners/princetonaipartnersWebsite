"use client";

import { cn } from "@/lib/utils";

export default function AnimatedGradientText({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-bg-position bg-gradient-to-r from-brand-primary from-30% via-brand-secondary via-50% to-brand-primary to-80% bg-[length:200%_auto] bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </div>
  );
}
