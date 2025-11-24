"use client";

import React from "react";
import { motion } from "framer-motion";

export function MobileAppsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-blue-50/20 dark:from-purple-950/20 dark:via-transparent dark:to-blue-950/10" />

      {/* Enhanced phone mockup outline with shadow */}
      <motion.div
        className="relative w-36 h-64 border-[3px] border-brand-primary/40 dark:border-dark-brand-primary/50 rounded-[2rem] shadow-2xl shadow-brand-primary/20 dark:shadow-dark-brand-primary/30"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Screen content that transitions */}
        <div className="absolute inset-2 bg-gradient-to-br from-brand-primary/20 via-brand-secondary/15 to-brand-primary/25 dark:from-dark-brand-primary/30 dark:via-brand-secondary/25 dark:to-dark-brand-primary/35 rounded-[1.5rem] overflow-hidden backdrop-blur-sm">
          {/* Status bar */}
          <div className="h-6 flex items-center justify-between px-3 pt-2">
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-brand-primary/50 dark:bg-dark-brand-primary/60 rounded-full" />
              <div className="w-1 h-1 bg-brand-primary/50 dark:bg-dark-brand-primary/60 rounded-full" />
            </div>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-brand-primary/50 dark:bg-dark-brand-primary/60 rounded-full" />
              <div className="w-3 h-1 bg-brand-primary/50 dark:bg-dark-brand-primary/60 rounded-full" />
            </div>
          </div>

          {/* App icons grid with staggered animation */}
          <div className="p-4 pt-2 grid grid-cols-3 gap-3">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="relative aspect-square"
              >
                {/* Icon glow */}
                <div
                  className="absolute inset-0 bg-brand-primary/30 dark:bg-dark-brand-primary/40 rounded-xl blur-sm animate-pulse"
                  style={{
                    animationDelay: `${i * 0.15}s`,
                    animationDuration: `${2 + (i % 3) * 0.5}s`,
                    willChange: "opacity",
                    transform: "translateZ(0)",
                  }}
                />
                {/* Icon solid */}
                <div
                  className="relative w-full h-full bg-gradient-to-br from-brand-primary/50 to-brand-secondary/50 dark:from-dark-brand-primary/60 dark:to-brand-secondary/60 rounded-xl shadow-lg animate-pulse"
                  style={{
                    animationDelay: `${i * 0.15}s`,
                    animationDuration: `${2 + (i % 3) * 0.5}s`,
                    willChange: "opacity",
                    transform: "translateZ(0)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced notch with camera */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-gray-800/80 dark:bg-gray-900/80 rounded-b-3xl flex items-center justify-center">
          <div className="w-2 h-2 bg-gray-600/60 dark:bg-gray-700/60 rounded-full" />
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-brand-primary/60 dark:bg-dark-brand-primary/70 rounded-full" />
      </motion.div>

      {/* Enhanced radiating circles for "app launching" effect */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border-2 border-brand-primary/15 dark:border-dark-brand-primary/25"
          style={{
            width: `${(i + 2) * 90}px`,
            height: `${(i + 2) * 90}px`,
            willChange: "transform, opacity",
            transform: "translateZ(0)",
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 3.5 + i * 0.5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Floating app notification dots */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`notif-${i}`}
          className="absolute w-2 h-2 bg-brand-secondary/60 dark:bg-brand-secondary/70 rounded-full animate-float"
          style={{
            left: `${20 + i * 12}%`,
            top: `${15 + (i % 2) * 60}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${2.5 + (i % 3)}s`,
            willChange: "transform",
            transform: "translateZ(0)",
          }}
        />
      ))}
    </div>
  );
}
