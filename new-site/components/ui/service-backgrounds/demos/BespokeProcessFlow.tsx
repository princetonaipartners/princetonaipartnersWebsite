"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Palette, Hammer, Sparkles, Rocket, Users, User } from "lucide-react";
import { motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";

interface ProcessStage {
  id: number;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  color: string;
  gradient: string;
}

const stages: ProcessStage[] = [
  {
    id: 1,
    icon: MessageSquare,
    title: "Discovery",
    subtitle: "Understanding your vision and requirements",
    description: "We dive deep into your business needs, technical requirements, and project goals through collaborative sessions.",
    deliverables: ["Requirements doc", "Technical spec", "Project roadmap"],
    color: "text-blue-500 dark:text-blue-400",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    icon: Palette,
    title: "Design",
    subtitle: "Architecting the perfect solution",
    description: "Our team creates detailed wireframes, user flows, and system architecture tailored to your specific needs.",
    deliverables: ["UI/UX mockups", "System diagrams", "Data models"],
    color: "text-purple-500 dark:text-purple-400",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    icon: Hammer,
    title: "Build",
    subtitle: "Bringing your vision to life",
    description: "Development begins with regular check-ins, code reviews, and iterative releases so you see progress in real-time.",
    deliverables: ["Working software", "Test coverage", "Documentation"],
    color: "text-orange-500 dark:text-orange-400",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    icon: Sparkles,
    title: "Refine",
    subtitle: "Perfecting every detail",
    description: "We fine-tune based on your feedback, optimize performance, and ensure everything works flawlessly.",
    deliverables: ["Bug fixes", "Performance tuning", "UX polish"],
    color: "text-pink-500 dark:text-pink-400",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 5,
    icon: Rocket,
    title: "Launch",
    subtitle: "Deploying to production",
    description: "We handle deployment, monitoring, and provide ongoing support to ensure a smooth launch and beyond.",
    deliverables: ["Production deploy", "Monitoring setup", "Support plan"],
    color: "text-green-500 dark:text-green-400",
    gradient: "from-green-500 to-emerald-500",
  },
];

export function BespokeProcessFlow() {
  const [activeStage, setActiveStage] = useState(0);
  const [flowProgress, setFlowProgress] = useState(0);

  // Auto-cycle through stages
  useEffect(() => {
    const stageInterval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 3250); // Slowed down by 30% for more deliberate pacing

    return () => clearInterval(stageInterval);
  }, []);

  // Animate flow progress (vertical)
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setFlowProgress((prev) => (prev + 1) % 100);
    }, 40);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col px-8 pt-24 pb-8 overflow-hidden">
      <motion.div
        className="w-full max-w-5xl mx-auto flex-1 flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-full flex-1 flex items-center">
          {/* Vertical Timeline Line */}
          <div className="absolute left-16 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gray-300 to-transparent dark:via-gray-700">
            {/* Animated flowing particle */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-brand-primary to-brand-secondary dark:from-dark-brand-primary dark:to-brand-secondary rounded-full shadow-lg"
              style={{
                top: `${flowProgress}%`,
              }}
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          {/* Stages - Vertical Stack */}
          <div className="w-full space-y-6">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const isActive = activeStage === index;

              return (
                <motion.div
                  key={stage.id}
                  className="relative flex items-center gap-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  onHoverStart={() => setActiveStage(index)}
                >
                  {/* Stage Number & Icon */}
                  <div className="relative flex items-center justify-center flex-shrink-0">
                    <motion.div
                      className="relative z-10 flex items-center justify-center w-24 h-24 rounded-full bg-white dark:bg-gray-900 border-4 cursor-pointer"
                      style={{
                        willChange: "transform, border-color, box-shadow",
                        transform: "translateZ(0)",
                      }}
                      animate={{
                        scale: isActive ? 1.05 : 1,
                        borderColor: isActive ? "rgb(59, 130, 246)" : "rgb(229, 231, 235)",
                        boxShadow: isActive
                          ? "0 25px 50px -12px rgba(59, 130, 246, 0.3)"
                          : "0 0 0 0 rgba(0, 0, 0, 0)",
                      }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <Icon
                          className={`h-10 w-10 transition-colors ${
                            isActive ? stage.color : "text-gray-400 dark:text-gray-500"
                          }`}
                        />
                        <span className={`text-xs font-bold ${
                          isActive ? "text-brand-primary dark:text-dark-brand-primary" : "text-gray-400 dark:text-gray-600"
                        }`}>
                          {index + 1}
                        </span>
                      </div>

                      {/* Pulse Ring on Active */}
                      {isActive && (
                        <motion.div
                          key={`pulse-${index}`}
                          className="absolute inset-0 rounded-full border-4 border-brand-primary dark:border-dark-brand-primary"
                          style={{
                            willChange: "transform, opacity",
                            transform: "translateZ(0)",
                          }}
                          initial={{ scale: 1, opacity: 0.6 }}
                          animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        />
                      )}
                    </motion.div>
                  </div>

                  {/* Stage Content - Two Column Layout */}
                  <div className="flex-1 grid grid-cols-2 gap-6">
                    {/* Left Column - Title, Subtitle, Description */}
                    <motion.div
                      animate={{
                        opacity: isActive ? 1 : 0.6,
                      }}
                    >
                      <h3 className={`text-xl font-bold mb-1 transition-all ${
                        isActive ? `bg-gradient-to-r ${stage.gradient} bg-clip-text text-transparent` : "text-gray-700 dark:text-gray-300"
                      }`}>
                        {stage.title}
                      </h3>
                      <p className={`text-sm mb-1 transition-colors ${
                        isActive ? "text-gray-700 dark:text-gray-300" : "text-gray-500 dark:text-gray-500"
                      }`}>
                        {stage.subtitle}
                      </p>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed"
                        >
                          {stage.description}
                        </motion.p>
                      )}
                    </motion.div>

                    {/* Right Column - Deliverables */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2"
                      >
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          Key Deliverables
                        </h4>
                        <div className="space-y-2 bg-white/40 dark:bg-gray-800/30 rounded-lg p-3 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                          {stage.deliverables.map((deliverable, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1, duration: 0.3 }}
                              className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400"
                            >
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${stage.gradient} flex-shrink-0`} />
                              <span>{deliverable}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
