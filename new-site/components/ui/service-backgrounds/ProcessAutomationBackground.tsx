"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiGmail, SiSlack, SiSalesforce } from "react-icons/si";
import { FaFileExcel } from "react-icons/fa6";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface App {
  id: string;
  label: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
}

const apps: App[] = [
  { id: "gmail", label: "Gmail", color: "#EA4335", icon: SiGmail },
  { id: "slack", label: "Slack", color: "#4A154B", icon: SiSlack },
  { id: "excel", label: "Excel", color: "#217346", icon: FaFileExcel },
  { id: "salesforce", label: "Salesforce", color: "#00A1E0", icon: SiSalesforce },
];

// App Icon Component
function AppIcon({
  app,
  active,
  completed,
}: {
  app: App;
  active: boolean;
  completed: boolean;
}) {
  const Icon = app.icon;

  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0.5, scale: 0.9 }}
      animate={{
        opacity: active ? 1 : 0.5,
        scale: active ? 1.1 : 1,
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Icon container */}
      <div className="relative">
        <motion.div
          className={cn(
            "w-14 h-14 rounded-2xl flex items-center justify-center",
            "bg-white dark:bg-gray-900 border-2 transition-all duration-300 shadow-lg"
          )}
          animate={{
            borderColor: active ? "#3B82F6" : "#E5E7EB",
            boxShadow: active
              ? "0 10px 25px rgba(59, 130, 246, 0.3)"
              : "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Icon className="w-8 h-8" style={{ color: app.color }} />

          {/* Checkmark when completed */}
          {completed && (
            <motion.div
              className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <Check className="w-3 h-3 text-white" strokeWidth={3} />
            </motion.div>
          )}
        </motion.div>

        {/* Pulsing ring when active */}
        <AnimatePresence>
          {active && (
            <motion.div
              key="pulse-ring"
              className="absolute inset-0 rounded-2xl border-2 border-blue-500"
              style={{
                willChange: "transform, opacity",
                transform: "translateZ(0)",
                pointerEvents: "none"
              }}
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Label */}
      <span
        className={cn(
          "text-xs font-medium transition-colors whitespace-nowrap",
          active ? "text-blue-500" : "text-gray-500 dark:text-gray-400"
        )}
      >
        {app.label}
      </span>
    </motion.div>
  );
}

// Animated Arrow Component
function AnimatedArrow({ active }: { active: boolean }) {
  return (
    <motion.div
      animate={{
        x: active ? [0, 8, 0] : 0,
        opacity: active ? 1 : 0.3,
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        repeat: active ? Infinity : 0,
      }}
    >
      <ArrowRight
        className={cn(
          "w-5 h-5 transition-colors",
          active ? "text-blue-500" : "text-gray-400 dark:text-gray-600"
        )}
      />
    </motion.div>
  );
}

export function ProcessAutomationBackground() {
  const [activeStep, setActiveStep] = useState(-1); // -1 = not started

  useEffect(() => {
    const sequence = async () => {
      // Reset
      setActiveStep(-1);
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Animate through each step
      for (let i = 0; i < apps.length; i++) {
        setActiveStep(i);
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }

      // Wait before restarting
      await new Promise((resolve) => setTimeout(resolve, 1000));
    };

    sequence();
    const interval = setInterval(sequence, apps.length * 1200 + 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/20 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/10" />

      {/* Content Container - Centered */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Workflow Visualization - Centered */}
        <div className="flex items-center justify-center gap-3">
          {apps.map((app, index) => (
            <React.Fragment key={app.id}>
              {/* App Icon */}
              <AppIcon
                app={app}
                active={activeStep >= index}
                completed={activeStep > index}
              />

              {/* Arrow between apps (not after last one) */}
              {index < apps.length - 1 && (
                <AnimatedArrow active={activeStep === index} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
