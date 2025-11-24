"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FileText, TrendingUp } from "lucide-react";

interface QueryExample {
  id: number;
  query: string;
  icon: typeof Search | typeof FileText | typeof TrendingUp;
  color: string;
}

const queryExamples: QueryExample[] = [
  {
    id: 1,
    query: "What were our Q3 revenue numbers?",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    query: "Summarize last week's customer feedback",
    icon: FileText,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    query: "Show me top performing products",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-500",
  },
];

export function AIAgentsBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const cycleTimer = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % queryExamples.length);
        setIsTyping(false);
      }, 800);
    }, 4000);

    return () => clearInterval(cycleTimer);
  }, []);

  const currentQuery = queryExamples[currentIndex];
  const Icon = currentQuery.icon;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 via-transparent to-blue-50/30 dark:from-slate-900/30 dark:via-transparent dark:to-blue-900/10" />

      {/* Floating particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(6)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-brand-primary/40 rounded-full animate-float"
            style={{
              left: `${(i * 15 + 10) % 90}%`,
              top: `${(i * 20 + 15) % 80}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${5 + (i % 2)}s`,
            }}
          />
        ))}
      </div>

      {/* Main Chat Interface Mockup - positioned lower to avoid overlap */}
      <div className="absolute inset-0 flex items-end justify-center pb-8 px-6">
        <div className="w-full max-w-2xl">
          {/* Chat Input Box */}
          <div className="relative">
            <div className="rounded-3xl border-2 border-slate-300/60 dark:border-slate-700/60 bg-white/80 dark:bg-[#1F2023]/80 backdrop-blur-sm shadow-2xl p-4 transition-all duration-300">
              {/* Query Display */}
              <div className="flex items-start gap-4 mb-3">
                <div className="flex-shrink-0 mt-1">
                  <motion.div
                    animate={{ rotate: isTyping ? 360 : 0 }}
                    transition={{ duration: 0.5 }}
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${currentQuery.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                <div className="flex-1 min-h-[60px] flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg text-slate-800 dark:text-slate-200 font-medium"
                    >
                      {currentQuery.query}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>

              {/* Typing Indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-2 pl-14 pb-2"
                  >
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-brand-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
                      <div className="w-2 h-2 bg-brand-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                      <div className="w-2 h-2 bg-brand-primary/60 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400">AI is thinking...</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Decorative bottom indicator */}
              <div className="flex items-center justify-center gap-2 pt-3 border-t border-slate-200/50 dark:border-slate-700/50">
                {queryExamples.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-gradient-to-r " + currentQuery.color
                        : "w-1.5 bg-slate-300 dark:bg-slate-700"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Glow effect */}
            <div
              className={`absolute -inset-1 bg-gradient-to-r ${currentQuery.color} rounded-3xl blur-2xl opacity-20 -z-10 transition-all duration-500`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
