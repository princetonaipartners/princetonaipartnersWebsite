"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiTelegram, SiWhatsapp, SiDiscord, SiSlack } from "react-icons/si";
import { Check } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

interface Platform {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  darkColor: string;
  glowColor: string;
  position: { x: number; y: number };
}

const platforms: Platform[] = [
  {
    id: "telegram",
    name: "Telegram",
    icon: SiTelegram,
    color: "#0088cc",
    darkColor: "#3BA5E8",
    glowColor: "rgba(0, 136, 204, 0.6)",
    position: { x: 12.5, y: 82 },
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    icon: SiWhatsapp,
    color: "#25D366",
    darkColor: "#4ADE80",
    glowColor: "rgba(37, 211, 102, 0.6)",
    position: { x: 37.5, y: 82 },
  },
  {
    id: "discord",
    name: "Discord",
    icon: SiDiscord,
    color: "#5865F2",
    darkColor: "#818CF8",
    glowColor: "rgba(88, 101, 242, 0.6)",
    position: { x: 62.5, y: 82 },
  },
  {
    id: "slack",
    name: "Slack",
    icon: SiSlack,
    color: "#E01E5A",
    darkColor: "#F472B6",
    glowColor: "rgba(224, 30, 90, 0.6)",
    position: { x: 87.5, y: 82 },
  },
];

interface Particle {
  id: string;
  platformId: string;
  progress: number;
  direction: "inbound" | "outbound";
  size: number;
}

// Ping effect component
function PingEffect({ platform, isActive }: { platform: Platform; isActive: boolean }) {
  if (!isActive) return null;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 48,
            height: 48,
            border: `2px solid ${platform.color}`,
          }}
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{
            duration: 1,
            delay: i * 0.2,
            ease: "easeOut",
          }}
        />
      ))}
    </motion.div>
  );
}

export function CustomBotsBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [activeResponses, setActiveResponses] = useState<Set<string>>(new Set());
  const [activeLines, setActiveLines] = useState<Set<string>>(new Set());
  const [pingEffects, setPingEffects] = useState<Set<string>>(new Set());

  // Initialize particles with staggered timing
  useEffect(() => {
    const initialParticles: Particle[] = [];
    platforms.forEach((platform, index) => {
      initialParticles.push({
        id: `particle-${platform.id}`,
        platformId: platform.id,
        progress: index * 20,
        direction: index % 2 === 0 ? "inbound" : "outbound",
        size: 1,
      });
    });
    setParticles(initialParticles);
  }, []);

  // Animate particles with enhanced effects
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle) => {
          const newProgress = (particle.progress + 0.8) % 100;

          // Calculate size pulse based on position
          const distanceFromCenter = Math.abs(50 - newProgress);
          const sizePulse = 1 + (1 - distanceFromCenter / 50) * 0.5;

          // Activate line glow when particle is traveling
          if (newProgress > 10 && newProgress < 90) {
            setActiveLines((prev) => new Set(prev).add(particle.platformId));
          } else {
            setActiveLines((prev) => {
              const next = new Set(prev);
              next.delete(particle.platformId);
              return next;
            });
          }

          // Trigger ping and response when particle reaches destination
          if (particle.direction === "outbound" && newProgress < 3 && particle.progress >= 97) {
            setPingEffects((prev) => new Set(prev).add(particle.platformId));
            setTimeout(() => {
              setPingEffects((prev) => {
                const next = new Set(prev);
                next.delete(particle.platformId);
                return next;
              });
            }, 1000);

            setActiveResponses((prev) => new Set(prev).add(particle.platformId));
            setTimeout(() => {
              setActiveResponses((prev) => {
                const next = new Set(prev);
                next.delete(particle.platformId);
                return next;
              });
            }, 1500);
          }

          return { ...particle, progress: newProgress, size: sizePulse };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Calculate particle position along path with easing
  const getParticlePosition = (particle: Particle) => {
    const platform = platforms.find((p) => p.id === particle.platformId);
    if (!platform) return { x: 50, y: 42 };

    const centerX = 50;
    const centerY = 42;
    const platformX = platform.position.x;
    const platformY = platform.position.y;

    let progress = particle.progress / 100;

    if (particle.direction === "outbound") {
      progress = 1 - progress;
    }

    // Apply easing for more natural movement
    const easedProgress = progress < 0.5
      ? 2 * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    const x = platformX + (centerX - platformX) * easedProgress;
    const y = platformY + (centerY - platformY) * easedProgress;

    return { x, y };
  };

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ contain: 'layout style paint' }}>
      {/* Top gradient fade for header safe zone */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white dark:from-dark-bg-card to-transparent pointer-events-none z-20" />

      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-purple-50/30 dark:from-blue-950/30 dark:via-transparent dark:to-purple-950/20" />

      {/* SVG Paths and Particles Container */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          {/* Animated gradients for each platform */}
          {platforms.map((platform) => (
            <React.Fragment key={platform.id}>
              {/* Base gradient */}
              <linearGradient id={`gradient-${platform.id}`} x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={platform.color} stopOpacity="0.2" />
                <stop offset="50%" stopColor={platform.color} stopOpacity="0.5" />
                <stop offset="100%" stopColor={platform.color} stopOpacity="0.2" />
              </linearGradient>
              {/* Active/glowing gradient */}
              <linearGradient id={`gradient-active-${platform.id}`} x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={platform.color} stopOpacity="0.4" />
                <stop offset="50%" stopColor={platform.color} stopOpacity="0.9" />
                <stop offset="100%" stopColor={platform.color} stopOpacity="0.4" />
              </linearGradient>
            </React.Fragment>
          ))}

          {/* Glow filter for active lines */}
          <filter id="lineGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection Lines with animated glow */}
        {platforms.map((platform) => {
          const isActive = activeLines.has(platform.id);
          return (
            <g key={`line-${platform.id}`}>
              {/* Background line (always visible) */}
              <line
                x1={`${platform.position.x}%`}
                y1={`${platform.position.y}%`}
                x2="50%"
                y2="42%"
                stroke={`url(#gradient-${platform.id})`}
                strokeWidth="0.6"
                className="opacity-40 dark:opacity-50"
              />
              {/* Active line (when particle is traveling) */}
              <line
                x1={`${platform.position.x}%`}
                y1={`${platform.position.y}%`}
                x2="50%"
                y2="42%"
                stroke={`url(#gradient-active-${platform.id})`}
                strokeWidth={isActive ? "1.2" : "0.6"}
                filter={isActive ? "url(#lineGlow)" : undefined}
                style={{
                  opacity: isActive ? 1 : 0,
                  transition: "opacity 0.3s ease, stroke-width 0.3s ease",
                }}
              />
            </g>
          );
        })}
      </svg>

      {/* Platform Icons - Bottom Row */}
      <div className="absolute top-[82%] left-0 right-0 flex justify-center items-center gap-[6%] px-[8%]">
        {platforms.map((platform, index) => {
          const Icon = platform.icon;
          const isActive = activeLines.has(platform.id);
          const hasPing = pingEffects.has(platform.id);

          return (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              {/* Ping Effect */}
              <AnimatePresence>
                {hasPing && <PingEffect platform={platform} isActive={hasPing} />}
              </AnimatePresence>

              {/* Platform Icon - Larger */}
              <motion.div
                className="relative z-10 flex items-center justify-center w-14 h-14 rounded-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50"
                whileHover={{ scale: 1.1 }}
                animate={{
                  boxShadow: isActive
                    ? `0 0 30px ${platform.glowColor}`
                    : `0 4px 20px rgba(0,0,0,0.1)`,
                  borderColor: isActive ? platform.color : undefined,
                }}
                transition={{ duration: 0.3 }}
              >
                <Icon className="w-7 h-7" style={{ color: platform.color }} />
              </motion.div>

              {/* Response Indicator */}
              <AnimatePresence>
                {activeResponses.has(platform.id) && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-green-500 text-white text-xs px-2.5 py-1 rounded-full shadow-lg whitespace-nowrap"
                  >
                    <Check className="w-3 h-3" strokeWidth={3} />
                    <span className="font-semibold">Sent!</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Platform name label */}
              <motion.span
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap"
                animate={{
                  color: isActive ? platform.color : undefined,
                }}
              >
                {platform.name}
              </motion.span>
            </motion.div>
          );
        })}
      </div>

      {/* Center Bot Logo - positioned at 42% to match line endpoints */}
      <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="relative z-10"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Glow effect behind logo */}
          <motion.div
            className="absolute -inset-4 rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 dark:from-dark-brand-primary/30 dark:to-brand-secondary/30 blur-xl"
            animate={{
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Logo container */}
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-3.5 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
            <Logo variant="icon" size="xl" />
          </div>

          {/* Subtle pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-brand-primary/50 dark:border-dark-brand-primary/50"
            style={{
              willChange: "transform, opacity",
              transform: "translateZ(0)"
            }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          />
        </motion.div>
      </div>

      {/* Animated Particles - Enhanced with glow and size pulsing */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          {/* Particle glow filters */}
          {platforms.map((platform) => (
            <filter key={`particleGlow-${platform.id}`} id={`particleGlow-${platform.id}`} x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="0.6" result="blur" />
              <feFlood floodColor={platform.color} floodOpacity="0.8" />
              <feComposite in2="blur" operator="in" />
              <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          ))}
        </defs>
        {particles.map((particle) => {
          const position = getParticlePosition(particle);
          const platform = platforms.find((p) => p.id === particle.platformId);
          if (!platform) return null;

          const baseSize = 1.2;
          const size = baseSize * particle.size;

          return (
            <g key={particle.id}>
              {/* Glow behind particle */}
              <circle
                cx={`${position.x}%`}
                cy={`${position.y}%`}
                r={size * 2}
                fill={platform.color}
                opacity="0.3"
                style={{ willChange: 'cx, cy' }}
              />
              {/* Main particle */}
              <circle
                cx={`${position.x}%`}
                cy={`${position.y}%`}
                r={size}
                fill={platform.color}
                filter={`url(#particleGlow-${platform.id})`}
                style={{ willChange: 'cx, cy' }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
