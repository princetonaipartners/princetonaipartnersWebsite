"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const webDevServices = [
  {
    id: "frameworks",
    title: "Modern Frameworks",
    description: "Next.js & React",
    details: "Server-side rendering, static generation, and dynamic routing for high-performance applications.",
    mockup: (
      <div className="relative w-full h-32 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-lg overflow-hidden border border-slate-300 dark:border-slate-700">
        <div className="absolute top-3 left-3 flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="absolute top-10 left-3 right-3 space-y-2">
          <div className="flex items-center gap-2">
            <div className="text-xs font-mono text-purple-600 dark:text-purple-400">import</div>
            <div className="text-xs font-mono text-slate-700 dark:text-slate-300">{'{ useState }'}</div>
            <div className="text-xs font-mono text-purple-600 dark:text-purple-400">from</div>
            <div className="text-xs font-mono text-green-600 dark:text-green-400">'react'</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-xs font-mono text-blue-600 dark:text-blue-400">export default</div>
            <div className="text-xs font-mono text-yellow-600 dark:text-yellow-400">function</div>
            <div className="text-xs font-mono text-slate-700 dark:text-slate-300">App()</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "performance",
    title: "Performance Optimization",
    description: "Lightning-fast load times",
    details: "Code splitting, lazy loading, image optimization, and caching strategies for optimal user experience.",
    mockup: (
      <div className="relative w-full h-32 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-950 rounded-lg overflow-hidden border border-green-300 dark:border-green-800 flex items-center justify-center">
        <div className="space-y-3 w-full px-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-green-700 dark:text-green-300">Performance Score</span>
            <span className="text-2xl font-bold text-green-600 dark:text-green-400">98</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-2 flex-1 bg-green-200 dark:bg-green-900 rounded-full overflow-hidden">
                <div className="h-full w-[95%] bg-green-500 rounded-full" />
              </div>
              <span className="text-xs text-green-700 dark:text-green-300">FCP</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 flex-1 bg-green-200 dark:bg-green-900 rounded-full overflow-hidden">
                <div className="h-full w-[98%] bg-green-500 rounded-full" />
              </div>
              <span className="text-xs text-green-700 dark:text-green-300">LCP</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "components",
    title: "Component Libraries",
    description: "Scalable design systems",
    details: "Reusable, accessible components with consistent styling and behavior across your entire application.",
    mockup: (
      <div className="relative w-full h-32 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950 dark:to-pink-950 rounded-lg overflow-hidden border border-purple-300 dark:border-purple-800 p-4">
        <div className="grid grid-cols-3 gap-3 h-full">
          <div className="bg-white dark:bg-slate-800 rounded-md shadow-sm border border-purple-200 dark:border-purple-700 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400" />
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-md shadow-sm border border-purple-200 dark:border-purple-700 flex flex-col p-2 gap-1">
            <div className="h-2 bg-purple-300 dark:bg-purple-700 rounded" />
            <div className="h-2 bg-purple-200 dark:bg-purple-800 rounded w-2/3" />
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-md shadow-sm border border-purple-200 dark:border-purple-700 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-purple-400 rounded" />
          </div>
          <div className="col-span-2 bg-white dark:bg-slate-800 rounded-md shadow-sm border border-purple-200 dark:border-purple-700 flex items-center px-2">
            <div className="h-1.5 bg-purple-200 dark:bg-purple-800 rounded flex-1" />
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-md shadow-sm flex items-center justify-center">
            <div className="w-3 h-3 border-2 border-white rounded-sm" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "dashboards",
    title: "Custom Dashboards",
    description: "Data visualization & analytics",
    details: "Interactive charts, real-time data, and intuitive interfaces for complex business intelligence.",
    mockup: (
      <div className="relative w-full h-32 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 rounded-lg overflow-hidden border border-blue-300 dark:border-blue-800 p-4">
        <div className="grid grid-cols-2 gap-3 h-full">
          <div className="bg-white dark:bg-slate-800 rounded-md shadow-sm border border-blue-200 dark:border-blue-700 p-2 flex flex-col">
            <div className="flex-1 flex items-end gap-1 mb-1">
              <div className="flex-1 bg-blue-400 rounded-t" style={{ height: '60%' }} />
              <div className="flex-1 bg-blue-500 rounded-t" style={{ height: '85%' }} />
              <div className="flex-1 bg-blue-400 rounded-t" style={{ height: '45%' }} />
              <div className="flex-1 bg-blue-500 rounded-t" style={{ height: '70%' }} />
            </div>
            <div className="h-1 bg-blue-200 dark:bg-blue-800 rounded w-full" />
          </div>
          <div className="space-y-2">
            <div className="bg-white dark:bg-slate-800 rounded-md shadow-sm border border-blue-200 dark:border-blue-700 p-2 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500" />
              <div className="flex-1 space-y-1">
                <div className="h-1.5 bg-blue-300 dark:bg-blue-700 rounded w-full" />
                <div className="h-1 bg-blue-200 dark:bg-blue-800 rounded w-2/3" />
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-md shadow-sm border border-blue-200 dark:border-blue-700 p-2 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500" />
              <div className="flex-1 space-y-1">
                <div className="h-1.5 bg-blue-300 dark:bg-blue-700 rounded w-full" />
                <div className="h-1 bg-blue-200 dark:bg-blue-800 rounded w-2/3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "responsive",
    title: "Responsive Design",
    description: "Perfect on every device",
    details: "Mobile-first approach ensuring your application looks and works beautifully across all screen sizes.",
    mockup: (
      <div className="relative w-full h-32 bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-950 dark:to-red-950 rounded-lg overflow-hidden border border-orange-300 dark:border-orange-800 flex items-center justify-center gap-3 px-4">
        <div className="w-16 h-24 bg-white dark:bg-slate-800 rounded-lg border-2 border-orange-300 dark:border-orange-700 shadow-lg flex flex-col">
          <div className="h-2 bg-orange-200 dark:bg-orange-900 rounded-t-md" />
          <div className="flex-1 p-1 space-y-0.5">
            <div className="h-1 bg-orange-300 dark:bg-orange-700 rounded" />
            <div className="h-1 bg-orange-200 dark:bg-orange-800 rounded w-3/4" />
            <div className="h-4 bg-orange-100 dark:bg-orange-900 rounded mt-1" />
          </div>
        </div>
        <div className="w-20 h-28 bg-white dark:bg-slate-800 rounded-xl border-2 border-orange-300 dark:border-orange-700 shadow-lg flex flex-col">
          <div className="h-3 bg-orange-200 dark:bg-orange-900 rounded-t-lg" />
          <div className="flex-1 p-1.5 space-y-1">
            <div className="h-1 bg-orange-300 dark:bg-orange-700 rounded" />
            <div className="h-1 bg-orange-200 dark:bg-orange-800 rounded w-3/4" />
            <div className="h-6 bg-orange-100 dark:bg-orange-900 rounded mt-1" />
          </div>
        </div>
        <div className="w-24 h-16 bg-white dark:bg-slate-800 rounded-lg border-2 border-orange-300 dark:border-orange-700 shadow-lg flex flex-col">
          <div className="h-2 bg-orange-200 dark:bg-orange-900 rounded-t-md flex items-center px-1 gap-0.5">
            <div className="w-0.5 h-0.5 rounded-full bg-orange-400" />
            <div className="w-0.5 h-0.5 rounded-full bg-orange-400" />
            <div className="w-0.5 h-0.5 rounded-full bg-orange-400" />
          </div>
          <div className="flex-1 p-1.5 flex gap-1">
            <div className="flex-1 space-y-0.5">
              <div className="h-0.5 bg-orange-300 dark:bg-orange-700 rounded" />
              <div className="h-0.5 bg-orange-200 dark:bg-orange-800 rounded w-2/3" />
            </div>
            <div className="w-8 h-full bg-orange-100 dark:bg-orange-900 rounded" />
          </div>
        </div>
      </div>
    ),
  },
];

export function WebDevAccordion() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <Accordion type="single" collapsible className="w-full space-y-2">
          {webDevServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <AccordionItem
                value={service.id}
                className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-slate-50 dark:hover:bg-slate-700/50">
                  <div className="flex items-center gap-3 text-left">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary dark:from-dark-brand-primary dark:to-brand-secondary flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100">
                        {service.title}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        {service.description}
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-3 pt-2">
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      {service.details}
                    </p>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      {service.mockup}
                    </motion.div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        {/* Tech Stack Footer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="mt-4 flex justify-center gap-2 flex-wrap"
        >
          {['Next.js', 'React', 'TypeScript', 'Tailwind'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-full text-slate-700 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
