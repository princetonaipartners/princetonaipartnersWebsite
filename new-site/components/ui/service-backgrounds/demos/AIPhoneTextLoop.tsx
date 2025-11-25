"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Zap, Heart, Phone } from "lucide-react";

// Stats data
const stats = [
  { value: "24/7", label: "Available", icon: Clock, color: "from-blue-500 to-cyan-500" },
  { value: "<2s", label: "Response", icon: Zap, color: "from-amber-500 to-orange-500" },
  { value: "98%", label: "Satisfied", icon: Heart, color: "from-pink-500 to-rose-500" },
];

// Conversation messages
const conversationMessages = [
  { id: 1, sender: "caller" as const, text: "Hi, I need to schedule an appointment" },
  { id: 2, sender: "ai" as const, text: "Of course! When works best for you?" },
  { id: 3, sender: "caller" as const, text: "Tomorrow afternoon if possible" },
  { id: 4, sender: "ai" as const, text: "I have 2pm or 4pm available. Which do you prefer?" },
  { id: 5, sender: "caller" as const, text: "2pm please" },
  { id: 6, sender: "ai" as const, text: "Perfect! You're booked for tomorrow at 2pm. See you then!" },
];

// Stat Card Component
function StatCard({
  stat,
  index
}: {
  stat: typeof stats[0];
  index: number;
}) {
  const Icon = stat.icon;

  return (
    <motion.div
      className="flex-1 relative overflow-hidden rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 p-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      {/* Gradient accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`} />

      <div className="flex flex-col items-center text-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
        >
          <Icon className="w-5 h-5 text-slate-500 dark:text-slate-400 mb-1" />
        </motion.div>
        <span className="text-2xl font-bold text-slate-800 dark:text-slate-100">
          {stat.value}
        </span>
        <span className="text-xs text-slate-500 dark:text-slate-400">
          {stat.label}
        </span>
      </div>
    </motion.div>
  );
}

export function AIPhoneTextLoop() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % (conversationMessages.length - 1));
        setIsTyping(false);
      }, 800);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  // Get 2 consecutive messages to display
  const visibleMessages = [
    conversationMessages[currentIndex],
    conversationMessages[currentIndex + 1],
  ];

  return (
    <div className="absolute inset-0 flex flex-col p-5 pt-28">
      {/* Top gradient fade for header safe zone */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white dark:from-dark-bg-card to-transparent pointer-events-none z-10" />

      {/* Stats Row */}
      <div className="flex gap-2 mb-4">
        {stats.map((stat, index) => (
          <StatCard key={stat.label} stat={stat} index={index} />
        ))}
      </div>

      {/* Conversation Container */}
      <div className="flex-1 relative bg-white/40 dark:bg-slate-900/40 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm overflow-hidden">
        {/* Chat Header */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-slate-200/50 dark:border-slate-700/50 bg-white/50 dark:bg-slate-800/50">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
            <Phone className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">AI Receptionist</p>
            <p className="text-xs text-green-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Active
            </p>
          </div>
        </div>

        {/* Messages */}
        <div className="p-4 space-y-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="space-y-3"
            >
              {visibleMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "ai" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl ${
                      message.sender === "ai"
                        ? "bg-gradient-to-br from-brand-primary to-brand-secondary text-white rounded-br-md"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-bl-md"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Typing Indicator */}
          <AnimatePresence>
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex justify-end"
              >
                <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl rounded-br-md px-4 py-3">
                  <div className="flex gap-1">
                    <motion.div
                      className="w-2 h-2 bg-white/80 rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-white/80 rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-white/80 rounded-full"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
