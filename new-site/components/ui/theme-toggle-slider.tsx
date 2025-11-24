"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface ThemeToggleSliderProps {
  className?: string;
}

export function ThemeToggleSlider({ className }: ThemeToggleSliderProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={cn(
          "flex w-16 h-8 p-1 rounded-full",
          "bg-gray-200 dark:bg-dark-bg-tertiary border border-gray-300 dark:border-dark-border",
          className
        )}
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";

    // Check if View Transition API is supported
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      // Modern browsers: use View Transition API for directional wipe effect
      (document as any).startViewTransition(() => {
        setTheme(newTheme);
      });
    } else {
      // Fallback for older browsers: simple theme switch
      setTheme(newTheme);
    }
  };

  return (
    <div
      className={cn(
        "flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300",
        isDark
          ? "bg-dark-bg-tertiary border border-dark-border"
          : "bg-gray-200 border border-gray-300",
        "hover:scale-105 active:scale-95",
        className
      )}
      onClick={toggleTheme}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleTheme();
        }
      }}
      aria-label="Toggle theme"
    >
      <div className="flex justify-between items-center w-full relative">
        {/* Sliding indicator */}
        <div
          className={cn(
            "absolute flex justify-center items-center w-6 h-6 rounded-full transition-all duration-300 ease-smooth",
            isDark
              ? "translate-x-8 bg-dark-brand-primary shadow-lg shadow-dark-brand-primary/30"
              : "translate-x-0 bg-brand-primary shadow-lg shadow-brand-primary/30"
          )}
        >
          {isDark ? (
            <Moon className="w-3.5 h-3.5 text-white" strokeWidth={2} />
          ) : (
            <Sun className="w-3.5 h-3.5 text-white" strokeWidth={2} />
          )}
        </div>

        {/* Static icons on track */}
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 transition-opacity duration-200",
            !isDark ? "opacity-0" : "opacity-40"
          )}
        >
          <Sun className="w-3.5 h-3.5 text-dark-text-tertiary" strokeWidth={1.5} />
        </div>
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 transition-opacity duration-200",
            isDark ? "opacity-0" : "opacity-40"
          )}
        >
          <Moon className="w-3.5 h-3.5 text-gray-500" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}
