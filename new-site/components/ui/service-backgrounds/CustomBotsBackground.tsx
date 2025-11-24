"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiTelegram, SiWhatsapp, SiDiscord, SiSlack } from "react-icons/si";
import { Check } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

interface Platform {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  darkColor: string;
  position: { x: number; y: number }; // percentage positions for paths
}

const platforms: Platform[] = [
  {
    id: "telegram",
    name: "Telegram",
    icon: SiTelegram,
    color: "#0088cc",
    darkColor: "#3BA5E8",
    position: { x: 12.5, y: 85 }, // Bottom position - flipped layout
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    icon: SiWhatsapp,
    color: "#25D366",
    darkColor: "#4ADE80",
    position: { x: 37.5, y: 85 }, // Bottom position - flipped layout
  },
  {
    id: "discord",
    name: "Discord",
    icon: SiDiscord,
    color: "#5865F2",
    darkColor: "#818CF8",
    position: { x: 62.5, y: 85 }, // Bottom position - flipped layout
  },
  {
    id: "slack",
    name: "Slack",
    icon: SiSlack,
    color: "#E01E5A",
    darkColor: "#F472B6",
    position: { x: 87.5, y: 85 }, // Bottom position - flipped layout
  },
];

interface Particle {
  id: string;
  platformId: string;
  progress: number;
  direction: "inbound" | "outbound";
}

export function CustomBotsBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [activeResponses, setActiveResponses] = useState<Set<string>>(new Set());

  // Initialize particles
  useEffect(() => {
    const initialParticles: Particle[] = [];
    platforms.forEach((platform, index) => {
      // Inbound particle (message to bot)
      initialParticles.push({
        id: `in-${platform.id}`,
        platformId: platform.id,
        progress: index * 25, // Stagger start positions
        direction: "inbound",
      });
      // Outbound particle (response from bot)
      initialParticles.push({
        id: `out-${platform.id}`,
        platformId: platform.id,
        progress: (index * 25 + 50) % 100, // Offset from inbound
        direction: "outbound",
      });
    });
    setParticles(initialParticles);
  }, []);

  // Animate particles (slowed down by 50% + additional 20%)
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle) => {
          const newProgress = (particle.progress + 0.625) % 100; // Further reduced from 0.75 (20% slower)

          // Trigger response indicator when outbound particle reaches platform
          if (particle.direction === "outbound" && newProgress < 2 && particle.progress >= 98) {
            setActiveResponses((prev) => new Set(prev).add(particle.platformId));
            setTimeout(() => {
              setActiveResponses((prev) => {
                const next = new Set(prev);
                next.delete(particle.platformId);
                return next;
              });
            }, 1440); // Increased from 1200ms (20% slower)
          }

          return { ...particle, progress: newProgress };
        })
      );
    }, 48); // Increased from 40ms (20% slower)

    return () => clearInterval(interval);
  }, []);

  // Calculate particle position along path
  const getParticlePosition = (particle: Particle) => {
    const platform = platforms.find((p) => p.id === particle.platformId);
    if (!platform) return { x: 50, y: 50 };

    const centerX = 50;
    const centerY = 50;
    const platformX = platform.position.x;
    const platformY = platform.position.y;

    let progress = particle.progress / 100;

    if (particle.direction === "outbound") {
      // Reverse direction for outbound
      progress = 1 - progress;
    }

    const x = platformX + (centerX - platformX) * progress;
    const y = platformY + (centerY - platformY) * progress;

    return { x, y };
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/10" />

      {/* SVG Paths and Particles Container */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          {/* Gradients for each platform */}
          {platforms.map((platform) => (
            <linearGradient key={platform.id} id={`gradient-${platform.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={platform.color} stopOpacity="0.3" />
              <stop offset="50%" stopColor={platform.color} stopOpacity="0.6" />
              <stop offset="100%" stopColor={platform.color} stopOpacity="0.3" />
            </linearGradient>
          ))}

          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection Lines */}
        {platforms.map((platform) => (
          <line
            key={`line-${platform.id}`}
            x1={`${platform.position.x}%`}
            y1={`${platform.position.y}%`}
            x2="50%"
            y2="50%"
            stroke={`url(#gradient-${platform.id})`}
            strokeWidth="0.5"
            filter="url(#glow)"
            className="opacity-40 dark:opacity-60"
          />
        ))}
      </svg>

      {/* Platform Icons - Bottom Row */}
      <div className="absolute top-[85%] left-0 right-0 flex justify-center items-center gap-[8%] px-[5%]">
        {platforms.map((platform, index) => {
          const Icon = platform.icon;
          return (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative"
            >
              {/* Platform Icon */}
              <motion.div
                className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg"
                whileHover={{ scale: 1.1 }}
                animate={{
                  boxShadow: [
                    `0 0 20px ${platform.color}40`,
                    `0 0 30px ${platform.color}60`,
                    `0 0 20px ${platform.color}40`,
                  ],
                }}
                transition={{ duration: 3.6, repeat: Infinity }} // Slowed by 20%: 3s → 3.6s
              >
                <Icon className="w-6 h-6" style={{ color: platform.color }} />
              </motion.div>

              {/* Response Indicator */}
              <AnimatePresence>
                {activeResponses.has(platform.id) && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 10 }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-green-500/90 dark:bg-green-400/90 text-white text-xs px-2 py-1 rounded-full shadow-lg"
                  >
                    <Check className="w-3 h-3" />
                    <span className="font-medium">Sent</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2"
                style={{
                  willChange: "transform, opacity",
                  transform: "translateZ(0)"
                }}
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 0, 0.6],
                  borderColor: platform.color,
                }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "linear", delay: index * 0.6 }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Center Bot Logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="relative z-10"
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 4.8, // Slowed by 20%: 4s → 4.8s
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Glow effect behind logo */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-primary/30 to-brand-secondary/30 dark:from-dark-brand-primary/40 dark:to-brand-secondary/40 blur-2xl"
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4.8, // Slowed by 20%: 4s → 4.8s
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Logo */}
          <div className="relative bg-white dark:bg-gray-900 rounded-full p-3 shadow-2xl">
            <Logo variant="icon" size="xl" />
          </div>

          {/* Pulse ring - reduced from 3 to 1 for performance */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-brand-primary dark:border-dark-brand-primary"
            style={{
              willChange: "transform, opacity",
              transform: "translateZ(0)"
            }}
            animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>

      {/* Animated Particles */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        {particles.map((particle) => {
          const position = getParticlePosition(particle);
          const platform = platforms.find((p) => p.id === particle.platformId);
          if (!platform) return null;

          return (
            <motion.circle
              key={particle.id}
              cx={`${position.x}%`}
              cy={`${position.y}%`}
              r="0.8"
              fill={platform.color}
              className="drop-shadow-lg"
              animate={{
                opacity: [0.4, 1, 0.4],
                r: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                filter: `drop-shadow(0 0 4px ${platform.color})`,
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}
