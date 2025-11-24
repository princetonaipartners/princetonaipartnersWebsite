"use client";

import React from "react";
import { motion } from "framer-motion";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

export function WebScrapingBackground() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Dark hacker background with subtle grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950/40 via-emerald-950/20 to-gray-950/40 dark:from-gray-950/60 dark:via-emerald-950/30 dark:to-gray-950/60" />

      {/* Matrix-style grid pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating code snippets/symbols in background */}
      {["</>", "{}", "[]", "//", "=>", "&&"].map((symbol, i) => (
        <motion.div
          key={i}
          className="absolute text-green-500/20 dark:text-green-400/30 font-mono text-2xl font-bold"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 2) * 50}%`,
            willChange: "transform, opacity",
            transform: "translateZ(0)",
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        >
          {symbol}
        </motion.div>
      ))}

      {/* Central Gooey Text */}
      <div className="relative z-10 flex items-center justify-center">
        <GooeyText
          texts={["SCRAPING", "PARSING", "EXTRACTING", "DATA", "CRAWLING", "HACKING"]}
          morphTime={2}
          cooldownTime={1.5}
          className="text-6xl"
          textClassName="text-green-500 dark:text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)] font-bold"
        />
      </div>

      {/* Scanning line effect */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"
        animate={{
          top: ["0%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Corner brackets for hacker aesthetic */}
      <div className="absolute top-4 left-4 text-green-500/30 dark:text-green-400/40 font-mono text-xl">
        {"┌─"}
      </div>
      <div className="absolute top-4 right-4 text-green-500/30 dark:text-green-400/40 font-mono text-xl">
        {"─┐"}
      </div>
      <div className="absolute bottom-4 left-4 text-green-500/30 dark:text-green-400/40 font-mono text-xl">
        {"└─"}
      </div>
      <div className="absolute bottom-4 right-4 text-green-500/30 dark:text-green-400/40 font-mono text-xl">
        {"─┘"}
      </div>
    </div>
  );
}
