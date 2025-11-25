"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FileText, TrendingUp, Users, Package } from "lucide-react";

interface QueryExample {
  id: number;
  query: string;
  icon: typeof Search;
  color: string;
  bgColor: string;
}

const queryExamples: QueryExample[] = [
  {
    id: 1,
    query: "Show me top performing products",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    id: 2,
    query: "Summarize last month's sales trends",
    icon: FileText,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
  },
  {
    id: 3,
    query: "Find customers inactive for 30 days",
    icon: Users,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
  },
  {
    id: 4,
    query: "What's our inventory status?",
    icon: Package,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
  },
  {
    id: 5,
    query: "Compare Q3 vs Q4 revenue",
    icon: Search,
    color: "from-rose-500 to-red-500",
    bgColor: "bg-rose-500/10",
  },
];

export function AIAgentsBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  const currentQuery = queryExamples[currentIndex];
  const Icon = currentQuery.icon;

  // Typewriter effect
  useEffect(() => {
    if (!isTyping) {
      const targetText = currentQuery.query;
      let charIndex = 0;
      setDisplayedText("");

      const typeInterval = setInterval(() => {
        if (charIndex < targetText.length) {
          setDisplayedText(targetText.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeInterval);
        }
      }, 40);

      return () => clearInterval(typeInterval);
    }
  }, [currentIndex, isTyping, currentQuery.query]);

  // Cycle through queries
  useEffect(() => {
    const cycleTimer = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentIndex((current) => (current + 1) % queryExamples.length);
        setIsTyping(false);
      }, 600);
    }, 4500);

    return () => clearInterval(cycleTimer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ contain: 'layout style paint' }}>
      {/* Top gradient fade for header safe zone */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white dark:from-dark-bg-card to-transparent pointer-events-none z-10" />

      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-transparent to-blue-50/50 dark:from-slate-900/50 dark:via-transparent dark:to-blue-950/30" />

      {/* Main Chat Interface - positioned below header safe zone */}
      <div className="absolute inset-0 flex items-end justify-center px-5 pb-6 pt-32">
        <div className="w-full max-w-sm">
          {/* Chat Card */}
          <motion.div
            className="relative rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Animated top border */}
            <motion.div
              className={`h-1 bg-gradient-to-r ${currentQuery.color}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              style={{ transformOrigin: 'left' }}
            />

            {/* Content */}
            <div className="p-4">
              {/* Icon + Query */}
              <div className="flex items-start gap-3">
                <motion.div
                  className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${currentQuery.color} flex items-center justify-center shadow-lg`}
                  animate={{
                    scale: isTyping ? [1, 1.1, 1] : 1,
                    boxShadow: isTyping
                      ? ['0 10px 15px -3px rgba(0,0,0,0.1)', '0 10px 25px -3px rgba(0,0,0,0.2)', '0 10px 15px -3px rgba(0,0,0,0.1)']
                      : '0 10px 15px -3px rgba(0,0,0,0.1)'
                  }}
                  transition={{ duration: 0.5, repeat: isTyping ? Infinity : 0 }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.div>

                <div className="flex-1 min-h-[48px]">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-base font-medium text-slate-800 dark:text-slate-100 leading-relaxed"
                    >
                      {displayedText}
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="inline-block w-0.5 h-4 bg-slate-400 dark:bg-slate-500 ml-0.5 align-middle"
                      />
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>

              {/* AI Response Indicator */}
              <AnimatePresence>
                {isTyping ? (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="mt-3 flex items-center gap-2"
                  >
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentQuery.color}`}
                          animate={{ y: [0, -6, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">AI is thinking...</span>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-3"
                  >
                    {/* Progress bar */}
                    <div className="h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${currentQuery.color}`}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 4, ease: 'linear' }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom indicator dots */}
            <div className="flex items-center justify-center gap-1.5 pb-3">
              {queryExamples.map((_, index) => (
                <motion.div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? `w-6 bg-gradient-to-r ${currentQuery.color}`
                      : "w-1.5 bg-slate-200 dark:bg-slate-700"
                  }`}
                  animate={{ scale: index === currentIndex ? [1, 1.1, 1] : 1 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>

            {/* Glow effect */}
            <motion.div
              className={`absolute -inset-px bg-gradient-to-r ${currentQuery.color} rounded-2xl blur-xl opacity-0 -z-10`}
              animate={{ opacity: isTyping ? 0.3 : 0.15 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
