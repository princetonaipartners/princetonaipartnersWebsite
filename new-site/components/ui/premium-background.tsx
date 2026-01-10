"use client";

import React from "react";

export function PremiumBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-zinc-50 dark:bg-zinc-950 pointer-events-none">
      {/* --- LAYER 1: The Grid (Structure) --- */}
      {/* Subtle grid that adds "tech" feel */}
      <div
        className="absolute inset-0 opacity-[0.3] dark:opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
      {/* Dark mode grid overlay */}
      <div
        className="absolute inset-0 opacity-0 dark:opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* --- LAYER 2: Noise Overlay (The Finish) --- */}
      {/* Crucial for premium feel - kills gradient banding */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* --- LAYER 3: Vignette (Depth) --- */}
      {/* Subtle darkening at edges for depth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)",
        }}
      />
    </div>
  );
}
