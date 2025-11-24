"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, Target, MousePointer, Layers, Clock, Award } from "lucide-react";

const webDevServices = [
  {
    id: 0,
    title: "Modern Frameworks",
    description: "Build lightning-fast applications with cutting-edge technology",
    features: [
      "Next.js 15 with App Router & Server Components",
      "TypeScript for type-safe development",
      "Optimized performance & SEO out of the box"
    ],
    mockup: (
      <div className="relative w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-xl overflow-hidden border-2 border-slate-300 dark:border-slate-700 shadow-2xl">
        <div className="absolute top-4 left-4 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="absolute top-16 left-5 right-5 space-y-3">
          <div className="flex items-center gap-2">
            <div className="text-base font-mono text-purple-600 dark:text-purple-400 font-semibold">import</div>
            <div className="text-base font-mono text-slate-700 dark:text-slate-300">{'{ useState }'}</div>
            <div className="text-base font-mono text-purple-600 dark:text-purple-400 font-semibold">from</div>
            <div className="text-base font-mono text-green-600 dark:text-green-400">'react'</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-base font-mono text-blue-600 dark:text-blue-400 font-semibold">export default</div>
            <div className="text-base font-mono text-yellow-600 dark:text-yellow-400 font-semibold">function</div>
            <div className="text-base font-mono text-slate-700 dark:text-slate-300">App()</div>
          </div>
          <div className="ml-4 text-base font-mono text-slate-600 dark:text-slate-400">{'{'}</div>
          <div className="ml-8 flex items-center gap-2">
            <div className="text-base font-mono text-purple-600 dark:text-purple-400 font-semibold">return</div>
            <div className="text-base font-mono text-pink-600 dark:text-pink-400">{'<div>'}</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    title: "Performance Optimization",
    description: "Deliver exceptional user experiences with blazing-fast load times",
    features: [
      "Code splitting & lazy loading strategies",
      "Image optimization & CDN integration",
      "98+ Lighthouse performance scores"
    ],
    mockup: (
      <div className="relative w-full h-full bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-950 rounded-xl overflow-hidden border-2 border-green-300 dark:border-green-800 shadow-2xl flex items-center justify-center">
        <div className="space-y-5 w-full px-10 py-6">
          {/* Header with Score and Badge */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-green-700 dark:text-green-300">Performance Score</span>
              <span className="px-2.5 py-1 bg-green-200 dark:bg-green-800 rounded-full text-xs font-bold text-green-700 dark:text-green-300 flex items-center gap-1">
                <Award className="w-3 h-3" />
                A+
              </span>
            </div>
            <span className="text-7xl font-bold text-green-600 dark:text-green-400 leading-none">98</span>
          </div>

          {/* Metrics with Icons */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Zap className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
              <span className="text-xs font-medium text-green-700 dark:text-green-300 uppercase tracking-wider w-12">FCP</span>
              <div className="h-3 flex-1 bg-green-200 dark:bg-green-900 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "95%" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
                />
              </div>
              <span className="text-sm text-green-700 dark:text-green-300 font-semibold w-10 text-right">95%</span>
            </div>

            <div className="flex items-center gap-3">
              <Target className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
              <span className="text-xs font-medium text-green-700 dark:text-green-300 uppercase tracking-wider w-12">LCP</span>
              <div className="h-3 flex-1 bg-green-200 dark:bg-green-900 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "98%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
                />
              </div>
              <span className="text-sm text-green-700 dark:text-green-300 font-semibold w-10 text-right">98%</span>
            </div>

            <div className="flex items-center gap-3">
              <MousePointer className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
              <span className="text-xs font-medium text-green-700 dark:text-green-300 uppercase tracking-wider w-12">TTI</span>
              <div className="h-3 flex-1 bg-green-200 dark:bg-green-900 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "92%" }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
                />
              </div>
              <span className="text-sm text-green-700 dark:text-green-300 font-semibold w-10 text-right">92%</span>
            </div>

            <div className="flex items-center gap-3">
              <Layers className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
              <span className="text-xs font-medium text-green-700 dark:text-green-300 uppercase tracking-wider w-12">CLS</span>
              <div className="h-3 flex-1 bg-green-200 dark:bg-green-900 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "96%" }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
                />
              </div>
              <span className="text-sm text-green-700 dark:text-green-300 font-semibold w-10 text-right">96%</span>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" />
              <span className="text-xs font-medium text-green-700 dark:text-green-300 uppercase tracking-wider w-12">TTFB</span>
              <div className="h-3 flex-1 bg-green-200 dark:bg-green-900 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "94%" }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
                />
              </div>
              <span className="text-sm text-green-700 dark:text-green-300 font-semibold w-10 text-right">94%</span>
            </div>
          </div>

          {/* Footer Label */}
          <div className="pt-2 border-t border-green-200 dark:border-green-800">
            <span className="text-xs text-green-600 dark:text-green-400 font-medium">Lighthouse Performance Audit</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Component Libraries",
    description: "Scale your design system with consistent, reusable components",
    features: [
      "Accessible, WCAG-compliant components",
      "Customizable design tokens & themes",
      "Radix UI & Headless UI integration"
    ],
    mockup: (
      <div className="relative w-full h-full bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950 dark:to-pink-950 rounded-xl overflow-hidden border-2 border-purple-300 dark:border-purple-800 shadow-2xl p-6">
        <div className="grid grid-cols-3 gap-5 h-full">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border-2 border-purple-200 dark:border-purple-700 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400" />
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border-2 border-purple-200 dark:border-purple-700 flex flex-col p-4 gap-2">
            <div className="h-3 bg-purple-300 dark:bg-purple-700 rounded" />
            <div className="h-2.5 bg-purple-200 dark:bg-purple-800 rounded w-2/3" />
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border-2 border-purple-200 dark:border-purple-700 flex items-center justify-center">
            <div className="w-10 h-10 border-3 border-purple-400 rounded-lg" />
          </div>
          <div className="col-span-2 bg-white dark:bg-slate-800 rounded-xl shadow-lg border-2 border-purple-200 dark:border-purple-700 flex items-center px-4">
            <div className="h-2.5 bg-purple-200 dark:bg-purple-800 rounded flex-1" />
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white rounded" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Custom Dashboards",
    description: "Transform complex data into actionable insights",
    features: [
      "Real-time data visualization & analytics",
      "Interactive charts with Chart.js & D3",
      "Custom admin panels & reporting tools"
    ],
    mockup: (
      <div className="relative w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 rounded-xl overflow-hidden border-2 border-blue-300 dark:border-blue-800 shadow-2xl p-6">
        <div className="grid grid-cols-2 gap-5 h-full">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border-2 border-blue-200 dark:border-blue-700 p-4 flex flex-col">
            <div className="flex-1 flex items-end gap-2 mb-2">
              <div className="flex-1 bg-blue-400 rounded-t-lg" style={{ height: '60%' }} />
              <div className="flex-1 bg-blue-500 rounded-t-lg" style={{ height: '85%' }} />
              <div className="flex-1 bg-blue-400 rounded-t-lg" style={{ height: '45%' }} />
              <div className="flex-1 bg-blue-500 rounded-t-lg" style={{ height: '70%' }} />
            </div>
            <div className="h-2 bg-blue-200 dark:bg-blue-800 rounded-full w-full" />
          </div>
          <div className="space-y-3">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border-2 border-blue-200 dark:border-blue-700 p-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-2.5 bg-blue-300 dark:bg-blue-700 rounded-full w-full" />
                <div className="h-2 bg-blue-200 dark:bg-blue-800 rounded-full w-2/3" />
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border-2 border-blue-200 dark:border-blue-700 p-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-2.5 bg-blue-300 dark:bg-blue-700 rounded-full w-full" />
                <div className="h-2 bg-blue-200 dark:bg-blue-800 rounded-full w-2/3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Responsive Design",
    description: "Pixel-perfect experiences across all devices and screen sizes",
    features: [
      "Mobile-first, touch-optimized interfaces",
      "Fluid layouts with Tailwind CSS",
      "Cross-browser compatibility guaranteed"
    ],
    mockup: (
      <div className="relative w-full h-full bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-950 dark:to-red-950 rounded-xl overflow-hidden border-2 border-orange-300 dark:border-orange-800 shadow-2xl flex items-center justify-center gap-5 px-8">
        <div className="w-24 h-40 bg-white dark:bg-slate-800 rounded-2xl border-3 border-orange-300 dark:border-orange-700 shadow-xl flex flex-col">
          <div className="h-4 bg-orange-200 dark:bg-orange-900 rounded-t-2xl" />
          <div className="flex-1 p-2.5 space-y-2">
            <div className="h-2 bg-orange-300 dark:bg-orange-700 rounded" />
            <div className="h-2 bg-orange-200 dark:bg-orange-800 rounded w-3/4" />
            <div className="h-12 bg-orange-100 dark:bg-orange-900 rounded mt-2" />
          </div>
        </div>
        <div className="w-32 h-48 bg-white dark:bg-slate-800 rounded-3xl border-3 border-orange-300 dark:border-orange-700 shadow-xl flex flex-col">
          <div className="h-5 bg-orange-200 dark:bg-orange-900 rounded-t-3xl" />
          <div className="flex-1 p-3 space-y-2">
            <div className="h-2 bg-orange-300 dark:bg-orange-700 rounded" />
            <div className="h-2 bg-orange-200 dark:bg-orange-800 rounded w-3/4" />
            <div className="h-16 bg-orange-100 dark:bg-orange-900 rounded mt-3" />
          </div>
        </div>
        <div className="w-40 h-28 bg-white dark:bg-slate-800 rounded-2xl border-3 border-orange-300 dark:border-orange-700 shadow-xl flex flex-col">
          <div className="h-4 bg-orange-200 dark:bg-orange-900 rounded-t-2xl flex items-center px-2 gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
            <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
            <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
          </div>
          <div className="flex-1 p-3 flex gap-2">
            <div className="flex-1 space-y-1.5">
              <div className="h-1.5 bg-orange-300 dark:bg-orange-700 rounded" />
              <div className="h-1.5 bg-orange-200 dark:bg-orange-800 rounded w-2/3" />
            </div>
            <div className="w-14 h-full bg-orange-100 dark:bg-orange-900 rounded-lg" />
          </div>
        </div>
      </div>
    ),
  },
];

export function WebDevCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % webDevServices.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const currentService = webDevServices[currentIndex];

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="w-full h-full max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-full flex items-center"
          >
            {/* Side-by-side layout */}
            <div className="grid grid-cols-2 gap-8 h-full w-full items-center">
              {/* Left side - Text content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-4xl font-bold text-text-primary dark:text-dark-text-primary mb-3 leading-tight">
                    {currentService.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-text-secondary dark:text-dark-text-secondary">
                    {currentService.description}
                  </p>
                </div>

                {/* Features list */}
                <ul className="space-y-4">
                  {currentService.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-6 h-6 text-brand-primary dark:text-dark-brand-primary flex-shrink-0 mt-1" />
                      <span className="text-base leading-relaxed text-text-primary dark:text-dark-text-secondary">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Right side - Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="h-full flex items-center"
              >
                <div className="w-full h-80">
                  {currentService.mockup}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Indicators - Bottom left */}
        <div className="absolute bottom-6 left-6 flex gap-2">
          {webDevServices.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-brand-primary dark:bg-dark-brand-primary"
                  : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Tech Stack Footer - Bottom right */}
        <div className="absolute bottom-6 right-6 flex gap-2">
          {['Next.js', 'React', 'TypeScript', 'Tailwind'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-semibold bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-full text-slate-700 dark:text-slate-300 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
