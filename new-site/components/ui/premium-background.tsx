"use client";

import React, { useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";

export function PremiumBackground() {
  const { scrollYProgress } = useScroll();

  // 1. Mouse Tracking (Performance optimized with useMotionValue)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement for buttery feel
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // 2. Parallax Effects based on Scroll
  // The 'Aurora' moves down and fades out as user scrolls
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, 200]);

  // The 'Deep' orbs move up slowly - creates parallax against scroll
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -300]);

  // CTA Intensity increases at the bottom
  const ctaIntensity = useTransform(scrollYProgress, [0.7, 1], [0.2, 0.8]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-zinc-50 dark:bg-zinc-950 pointer-events-none">
      {/* --- LAYER 1: Ambient Orbs (The "Deep") --- */}
      {/* These create the base atmosphere and move with parallax */}
      <motion.div style={{ y: orbY }} className="absolute inset-0">
        {/* Primary Blue Orb - Middle Left */}
        <div className="absolute top-[35%] left-[-15%] h-[600px] w-[600px] rounded-full bg-blue-400/15 dark:bg-blue-600/20 blur-[120px]" />

        {/* Sky Blue Orb - Center Right */}
        <div className="absolute top-[50%] right-[-10%] h-[500px] w-[500px] rounded-full bg-sky-400/10 dark:bg-sky-500/15 blur-[100px]" />

        {/* Deep Blue Orb - Bottom Left */}
        <div className="absolute top-[75%] left-[10%] h-[400px] w-[400px] rounded-full bg-blue-500/8 dark:bg-blue-700/10 blur-[100px]" />
      </motion.div>

      {/* --- LAYER 2: The Grid (Structure) --- */}
      {/* Barely visible grid that adds "tech" feel when illuminated by mouse */}
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

      {/* --- LAYER 3: The "Lantern" (Mouse Follower) --- */}
      {/* Creates a refined, tighter spotlight that follows cursor */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 opacity-50 dark:opacity-70 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${smoothX}px ${smoothY}px,
              rgba(59, 130, 246, 0.08),
              rgba(14, 165, 233, 0.03) 50%,
              transparent 100%
            )
          `,
        }}
      />
      {/* Dark mode lantern */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 dark:opacity-70 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${smoothX}px ${smoothY}px,
              rgba(59, 130, 246, 0.12),
              rgba(14, 165, 233, 0.04) 50%,
              transparent 100%
            )
          `,
        }}
      />

      {/* --- LAYER 4: The Hero "Aurora" (Top Layer) --- */}
      {/* This is your existing Aurora feel - fades as user scrolls */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="absolute -top-[5%] -right-[10%] h-[700px] w-[900px]"
      >
        {/* Primary blue glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/25 via-blue-500/15 dark:from-blue-500/40 dark:via-blue-600/20 to-transparent blur-[100px]" />
        {/* Secondary sky blue accent */}
        <div className="absolute top-[20%] right-[10%] h-[400px] w-[400px] rounded-full bg-sky-300/20 dark:bg-sky-400/25 blur-[80px]" />
      </motion.div>

      {/* --- LAYER 5: The CTA "Event" (Bottom Layer) --- */}
      {/* A "Gravity Well" that intensifies as user approaches CTA */}
      <motion.div
        style={{ opacity: ctaIntensity }}
        className="absolute -bottom-[20%] left-[10%] right-[10%] h-[500px]"
      >
        {/* Central convergence glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-400/20 via-blue-400/10 dark:from-blue-600/30 dark:via-blue-500/15 to-transparent blur-[100px]" />
        {/* Sky blue accent - left */}
        <div className="absolute bottom-0 left-[20%] h-[300px] w-[400px] rounded-full bg-sky-400/15 dark:bg-sky-500/20 blur-[80px]" />
        {/* Deep blue accent - right */}
        <div className="absolute bottom-0 right-[20%] h-[300px] w-[400px] rounded-full bg-blue-400/15 dark:bg-blue-600/20 blur-[80px]" />
      </motion.div>

      {/* --- LAYER 6: Noise Overlay (The Finish) --- */}
      {/* Crucial for premium feel - kills gradient banding */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* --- LAYER 7: Vignette (Depth) --- */}
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
