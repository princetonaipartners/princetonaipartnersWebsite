"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconBrandSlack } from "@tabler/icons-react";
import { Check } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { useShouldReduceMotion } from "@/lib/hooks/use-mobile";

// Inline SVG icons for brands not in Tabler
function SalesforceIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M10.006 5.415a4.195 4.195 0 0 1 3.045-1.306c1.56 0 2.954.9 3.69 2.205.63-.3 1.35-.45 2.1-.45 2.85 0 5.159 2.34 5.159 5.22s-2.31 5.22-5.16 5.22c-.45 0-.884-.06-1.305-.165a3.91 3.91 0 0 1-3.39 1.965c-.54 0-1.065-.105-1.545-.315a4.427 4.427 0 0 1-3.84 2.22c-1.98 0-3.69-1.32-4.23-3.15-.36.075-.72.12-1.095.12-2.61 0-4.72-2.13-4.72-4.785 0-2.655 2.115-4.8 4.725-4.8.66 0 1.29.135 1.86.375a4.26 4.26 0 0 1 4.71-2.355z"/>
    </svg>
  );
}

function GoogleSheetsIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.385 3H4.615A1.615 1.615 0 0 0 3 4.615v14.77A1.615 1.615 0 0 0 4.615 21h14.77A1.615 1.615 0 0 0 21 19.385V4.615A1.615 1.615 0 0 0 19.385 3zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-8v-2h8v2zm0-4h-8v-2h8v2zm0-4h-8V7h8v2z"/>
    </svg>
  );
}

interface Destination {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  lane: number; // 0, 1, or 2
}

const destinations: Destination[] = [
  { id: "slack", name: "Slack", icon: IconBrandSlack, color: "#4A154B", lane: 0 },
  { id: "sheets", name: "Sheets", icon: GoogleSheetsIcon, color: "#34A853", lane: 1 },
  { id: "salesforce", name: "Salesforce", icon: SalesforceIcon, color: "#00A1E0", lane: 2 },
];

interface DataPacket {
  id: number;
  destination: Destination;
  decision: string;
}

const decisions = [
  "High Priority?",
  "New Lead?",
  "Data Sync?",
  "Alert Team?",
  "Update CRM?",
];

// Source Hub Component
function SourceHub() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer glow */}
      <motion.div
        className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 dark:from-dark-brand-primary/30 dark:to-brand-secondary/30 blur-xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hub container */}
      <div className="relative w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-700/50 shadow-xl flex items-center justify-center">
        <Logo variant="icon" size="md" />

        {/* Pulse ring */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-brand-primary/50 dark:border-dark-brand-primary/50"
          animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

// Destination Logo Component
function DestinationLogo({
  destination,
  isActive,
  showSuccess,
}: {
  destination: Destination;
  isActive: boolean;
  showSuccess: boolean;
}) {
  const Icon = destination.icon;

  return (
    <div className="relative flex flex-col items-center">
      <motion.div
        className="relative w-12 h-12 rounded-xl flex items-center justify-center border-2 bg-white dark:bg-slate-800 shadow-lg"
        style={{
          borderColor: isActive ? destination.color : "rgba(148, 163, 184, 0.3)",
        }}
        animate={{
          scale: isActive ? [1, 1.08, 1] : 1,
          boxShadow: isActive
            ? `0 0 24px ${destination.color}50`
            : "0 4px 12px rgba(0,0,0,0.1)",
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Icon className="w-6 h-6" style={{ color: destination.color }} />

        {/* Success badge */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
              style={{ backgroundColor: destination.color }}
            >
              <Check className="w-3 h-3 text-white" strokeWidth={3} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 mt-1.5">
        {destination.name}
      </span>
    </div>
  );
}

// Decision Gate Component
function DecisionGate({ label, isActive }: { label: string; isActive: boolean }) {
  return (
    <div className="relative flex flex-col items-center">
      <motion.div
        className="relative px-3 py-1.5 rounded-lg border bg-slate-900/90 backdrop-blur"
        style={{
          borderColor: isActive ? "rgba(251, 191, 36, 0.5)" : "rgba(148, 163, 184, 0.2)",
        }}
        animate={{
          boxShadow: isActive
            ? "0 0 20px rgba(251, 191, 36, 0.3)"
            : "none",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={label}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-[10px] font-medium text-amber-400 whitespace-nowrap"
          >
            {label}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

// SVG Highway with lanes and particles
function DataHighway({
  packet,
  phase,
}: {
  packet: DataPacket | null;
  phase: "idle" | "traveling" | "routing" | "delivering" | "complete";
}) {
  const laneY = [35, 60, 85]; // Y positions for 3 lanes
  const hubX = 8;
  const gateX = 50;
  const destX = 92;

  // Calculate particle position based on phase
  const getParticlePos = () => {
    if (!packet) return { x: hubX, y: laneY[1] };

    const targetLane = packet.destination.lane;

    switch (phase) {
      case "traveling":
        return { x: gateX - 5, y: laneY[1] }; // Middle lane to gate
      case "routing":
        return { x: gateX + 5, y: laneY[targetLane] }; // Switch to target lane
      case "delivering":
      case "complete":
        return { x: destX - 5, y: laneY[targetLane] }; // To destination
      default:
        return { x: hubX + 5, y: laneY[1] };
    }
  };

  const particlePos = getParticlePos();
  const particleColor = packet?.destination.color || "#F59E0B";

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        {/* Glow filter for active lane */}
        <filter id="laneGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Particle glow */}
        <filter id="particleGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background lanes */}
      {laneY.map((y, i) => (
        <line
          key={`lane-${i}`}
          x1={`${hubX + 6}%`}
          y1={`${y}%`}
          x2={`${destX - 6}%`}
          y2={`${y}%`}
          stroke="rgba(148, 163, 184, 0.15)"
          strokeWidth="0.8"
          strokeDasharray="3 2"
        />
      ))}

      {/* Active lane highlight */}
      {packet && (phase === "routing" || phase === "delivering" || phase === "complete") && (
        <motion.line
          x1={`${gateX}%`}
          y1={`${laneY[packet.destination.lane]}%`}
          x2={`${destX - 6}%`}
          y2={`${laneY[packet.destination.lane]}%`}
          stroke={packet.destination.color}
          strokeWidth="1.5"
          strokeOpacity="0.5"
          filter="url(#laneGlow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        />
      )}

      {/* Animated particle */}
      {packet && phase !== "idle" && phase !== "complete" && (
        <motion.circle
          r="2.5"
          fill={particleColor}
          filter="url(#particleGlow)"
          initial={{ cx: `${hubX + 5}%`, cy: `${laneY[1]}%` }}
          animate={{ cx: `${particlePos.x}%`, cy: `${particlePos.y}%` }}
          transition={{
            duration: phase === "routing" ? 0.8 : 1.2,
            ease: [0.4, 0, 0.2, 1]
          }}
        />
      )}

      {/* Particle trail */}
      {packet && (phase === "traveling" || phase === "routing") && (
        <motion.line
          x1={`${hubX + 5}%`}
          y1={`${laneY[1]}%`}
          x2={`${particlePos.x}%`}
          y2={`${particlePos.y}%`}
          stroke={particleColor}
          strokeWidth="1"
          strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        />
      )}
    </svg>
  );
}

export function ProcessAutomationBackground() {
  const shouldReduceMotion = useShouldReduceMotion();
  const [packet, setPacket] = useState<DataPacket | null>(null);
  const [phase, setPhase] = useState<"idle" | "traveling" | "routing" | "delivering" | "complete">("idle");
  const [activeDestination, setActiveDestination] = useState<string | null>(null);
  const [successDestination, setSuccessDestination] = useState<string | null>(null);
  const [packetCount, setPacketCount] = useState(0);

  useEffect(() => {
    // On mobile, show static "Ready" state without animation
    if (shouldReduceMotion) return;

    const runAnimation = async () => {
      // Pick random destination and decision
      const dest = destinations[packetCount % destinations.length];
      const decision = decisions[Math.floor(Math.random() * decisions.length)];

      const newPacket: DataPacket = {
        id: Date.now(),
        destination: dest,
        decision,
      };

      // Start sequence
      setPacket(newPacket);
      setPhase("idle");
      await new Promise(r => setTimeout(r, 400));

      // Travel to gate
      setPhase("traveling");
      await new Promise(r => setTimeout(r, 1400));

      // Route decision
      setPhase("routing");
      await new Promise(r => setTimeout(r, 1000));

      // Deliver to destination
      setPhase("delivering");
      setActiveDestination(dest.id);
      await new Promise(r => setTimeout(r, 1200));

      // Complete
      setPhase("complete");
      setSuccessDestination(dest.id);
      await new Promise(r => setTimeout(r, 1200));

      // Reset
      setActiveDestination(null);
      setSuccessDestination(null);
      setPacket(null);
      setPhase("idle");
      setPacketCount(c => c + 1);

      await new Promise(r => setTimeout(r, 800));
    };

    runAnimation();
    const interval = setInterval(runAnimation, 6000);
    return () => clearInterval(interval);
  }, [packetCount, shouldReduceMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ contain: "layout style paint" }}>
      {/* Top gradient fade for header safe zone */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white dark:from-dark-bg-card to-transparent pointer-events-none z-20" />

      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-transparent to-amber-50/20 dark:from-slate-900/50 dark:via-transparent dark:to-amber-950/10" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* SVG Highway */}
      <DataHighway packet={packet} phase={phase} />

      {/* Main horizontal layout */}
      <div className="absolute inset-0 flex items-center justify-between px-8 pt-20">
        {/* Left: Source Hub */}
        <div className="flex-shrink-0">
          <SourceHub />
        </div>

        {/* Center: Decision Gate */}
        <div className="flex-shrink-0">
          <DecisionGate
            label={packet?.decision || "Routing..."}
            isActive={phase === "routing"}
          />
        </div>

        {/* Right: Destination Logos */}
        <div className="flex flex-col gap-4 flex-shrink-0">
          {destinations.map((dest) => (
            <DestinationLogo
              key={dest.id}
              destination={dest}
              isActive={activeDestination === dest.id}
              showSuccess={successDestination === dest.id}
            />
          ))}
        </div>
      </div>

      {/* Bottom status */}
      <motion.div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.div
          className="w-2 h-2 rounded-full bg-emerald-400"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
          {phase === "idle" ? "Ready" : phase === "traveling" ? "Processing..." : phase === "routing" ? "Routing..." : phase === "delivering" ? "Syncing..." : "Delivered!"}
        </span>
      </motion.div>
    </div>
  );
}
