"use client";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EnhancedCTAButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * EnhancedCTAButton - Replaces MagneticButton with scale, glow, and shadow effects
 * No cursor-following behavior - just smooth hover enhancements
 * Uses brand colors for glow effects
 */
export default function EnhancedCTAButton({
  children,
  className,
  onClick
}: EnhancedCTAButtonProps) {
  return (
    <div
      className={cn(
        "group relative inline-block cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {/* Glow effect layer */}
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary via-accent-purple to-accent-pink rounded-xl opacity-0 blur-xl transition-all duration-500 group-hover:opacity-60" />

      {/* Button content */}
      <div className="relative transition-all duration-300 group-hover:scale-105">
        {children}
      </div>
    </div>
  );
}
