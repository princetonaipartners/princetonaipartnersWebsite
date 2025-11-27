"use client";

import React from "react";
import { motion } from "framer-motion";

const techStack = [
  { name: "Next.js", icon: "▲", color: "text-gray-900 dark:text-white" },
  { name: "TypeScript", icon: "TS", color: "text-blue-500" },
  { name: "Tailwind", icon: "T", color: "text-cyan-500" },
  { name: "React", icon: "⚛", color: "text-blue-400" },
];

const floatVariants = {
  initial: () => ({
    y: 0,
    opacity: 0,
    scale: 0.8,
  }),
  animate: (custom: number) => ({
    y: [0, -15, 0],
    opacity: 1,
    scale: 1,
    transition: {
      y: {
        duration: 3 + custom * 0.5,
        repeat: Infinity,
        ease: [0.42, 0, 0.58, 1] as const,
        delay: custom * 0.3,
      },
      opacity: {
        duration: 0.6,
        delay: custom * 0.15,
      },
      scale: {
        duration: 0.5,
        delay: custom * 0.15,
      },
    },
  }),
};

export function WebDevFloatingUI() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Floating UI Components */}
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div className="grid grid-cols-3 gap-8 w-full">
          {/* Button Component */}
          <motion.div
            custom={0}
            variants={floatVariants}
            initial="initial"
            animate="animate"
            className="flex items-center justify-center"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <button className="px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary dark:from-dark-brand-primary dark:to-brand-secondary text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all cursor-pointer">
              Get Started
            </button>
          </motion.div>

          {/* Card Component */}
          <motion.div
            custom={1}
            variants={floatVariants}
            initial="initial"
            animate="animate"
            className="flex items-center justify-center"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl border border-gray-200 dark:border-gray-700 w-full max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg" />
                <div className="flex-1">
                  <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-20 mb-1" />
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-16" />
                </div>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-full mb-1" />
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
            </div>
          </motion.div>

          {/* Input Field Component */}
          <motion.div
            custom={2}
            variants={floatVariants}
            initial="initial"
            animate="animate"
            className="flex items-center justify-center"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="w-full max-w-xs">
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-brand-primary dark:focus:border-dark-brand-primary outline-none transition-colors"
                placeholder="you@example.com"
                readOnly
              />
            </div>
          </motion.div>

          {/* Toggle Switch Component */}
          <motion.div
            custom={3}
            variants={floatVariants}
            initial="initial"
            animate="animate"
            className="flex items-center justify-center col-span-1"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Dark Mode
              </span>
              <div className="relative w-14 h-7 bg-brand-primary dark:bg-dark-brand-primary rounded-full shadow-inner cursor-pointer">
                <motion.div
                  className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md"
                  animate={{ x: [0, 24, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Badge Component */}
          <motion.div
            custom={4}
            variants={floatVariants}
            initial="initial"
            animate="animate"
            className="flex items-center justify-center col-span-1"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-green-700 dark:text-green-400">
                Live
              </span>
            </div>
          </motion.div>

          {/* Notification Component */}
          <motion.div
            custom={5}
            variants={floatVariants}
            initial="initial"
            animate="animate"
            className="flex items-center justify-center col-span-1"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg border border-gray-200 dark:border-gray-700 flex items-start gap-3 max-w-xs">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm">✓</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-24 mb-1" />
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tech Stack Footer */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {techStack.map((tech, i) => (
          <motion.div
            key={tech.name}
            className={`px-4 py-2 rounded-full text-sm font-semibold bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm ${tech.color}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <span className="mr-1.5">{tech.icon}</span>
            {tech.name}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
