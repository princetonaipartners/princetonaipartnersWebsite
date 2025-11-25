"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase, Home, Newspaper, TrendingUp,
  ShoppingBag, Check
} from "lucide-react";

// Source code that scrolls in background
const CODE_SNIPPETS = [
  '<div class="listing">',
  '  <h2>Senior Developer</h2>',
  '  <span class="salary">$150k</span>',
  '</div>',
  '<article class="property">',
  '  <p class="price">$450,000</p>',
  '  <span>3 bed, 2 bath</span>',
  '</article>',
  '<section id="news">',
  '  <time>2 hours ago</time>',
  '  <h1>Breaking...</h1>',
  '</section>',
  '<div class="review">',
  '  <span>★★★★☆</span>',
  '  <p>Great product...</p>',
  '</div>',
];

// Diverse extracted data examples
const EXTRACTED_DATA = [
  {
    icon: Briefcase,
    category: "Jobs",
    title: "Senior Engineer @ Google",
    detail: "$180k/year",
    meta: "Remote",
    color: "blue"
  },
  {
    icon: Home,
    category: "Real Estate",
    title: "3BR House in Austin",
    detail: "$425,000",
    meta: "2,100 sqft",
    color: "emerald"
  },
  {
    icon: ShoppingBag,
    category: "Shopping",
    title: "Nike Air Max 90",
    detail: "$129.99",
    meta: "In Stock",
    color: "purple"
  },
  {
    icon: Newspaper,
    category: "News",
    title: "Fed holds rates steady",
    detail: "Bloomberg",
    meta: "1h ago",
    color: "amber"
  },
  {
    icon: TrendingUp,
    category: "Stocks",
    title: "NVDA +8.2%",
    detail: "$892.50",
    meta: "NASDAQ",
    color: "green"
  },
];

const colorMap: Record<string, string> = {
  blue: "text-blue-400 bg-blue-500/20",
  emerald: "text-emerald-400 bg-emerald-500/20",
  amber: "text-amber-400 bg-amber-500/20",
  green: "text-green-400 bg-green-500/20",
  purple: "text-purple-400 bg-purple-500/20",
  yellow: "text-yellow-400 bg-yellow-500/20",
};

// Scrolling code column
function CodeColumn({ offset = 0 }: { offset?: number }) {
  const repeatedCode = [...CODE_SNIPPETS, ...CODE_SNIPPETS, ...CODE_SNIPPETS, ...CODE_SNIPPETS];

  return (
    <motion.div
      className="absolute font-mono text-[8px] leading-loose text-slate-500/30 dark:text-slate-600/40 whitespace-pre select-none"
      style={{ left: offset === 0 ? "5%" : "52%" }}
      animate={{ y: [0, -500] }}
      transition={{
        duration: 40,
        repeat: Infinity,
        ease: "linear",
        delay: offset * 2,
      }}
    >
      {repeatedCode.map((line, i) => (
        <div key={i} className="py-0.5">
          {line}
        </div>
      ))}
    </motion.div>
  );
}

// Extracted data card
function DataCard({ data, index }: { data: (typeof EXTRACTED_DATA)[0]; index: number }) {
  const Icon = data.icon;
  const colors = colorMap[data.color] || colorMap.emerald;
  const [textColor, bgColor] = colors.split(" ");

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        opacity: { duration: 1, ease: "easeInOut" },
        y: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
        layout: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      }}
      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-slate-800/70 border border-slate-700/40 backdrop-blur-sm shadow-lg"
    >
      {/* Icon */}
      <div className={`w-9 h-9 rounded-lg ${bgColor} flex items-center justify-center flex-shrink-0`}>
        <Icon className={`w-4 h-4 ${textColor}`} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className={`text-[9px] font-medium ${textColor} uppercase tracking-wide`}>
            {data.category}
          </span>
        </div>
        <p className="text-[11px] font-medium text-slate-200 truncate">
          {data.title}
        </p>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-[10px] font-semibold text-slate-300">
            {data.detail}
          </span>
          <span className="text-[9px] text-slate-500">
            {data.meta}
          </span>
        </div>
      </div>

      {/* Check mark */}
      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
        <Check className="w-3 h-3 text-emerald-400" strokeWidth={3} />
      </div>
    </motion.div>
  );
}

export function WebScrapingBackground() {
  const [extractedItems, setExtractedItems] = useState<number[]>([]);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    // Start with one item after a delay
    const initialDelay = setTimeout(() => {
      setExtractedItems([0]);
      currentIndexRef.current = 1;
    }, 2000);

    const interval = setInterval(() => {
      setExtractedItems((prev) => {
        const newItems = [...prev, currentIndexRef.current];
        if (newItems.length > 2) {
          newItems.shift();
        }
        return newItems;
      });
      currentIndexRef.current = (currentIndexRef.current + 1) % EXTRACTED_DATA.length;
    }, 5000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{ contain: "layout style paint" }}
    >
      {/* Top gradient fade for header safe zone */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white dark:from-dark-bg-card via-white/80 dark:via-dark-bg-card/80 to-transparent pointer-events-none z-20" />

      {/* Dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-950/50 to-slate-900/40 dark:from-slate-950/50 dark:via-slate-950/70 dark:to-slate-950/60" />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(148, 163, 184, 0.8) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Scrolling code columns (background) */}
      <div className="absolute inset-0 overflow-hidden opacity-60">
        <CodeColumn offset={0} />
        <CodeColumn offset={1} />
      </div>

      {/* Extracted data cards */}
      <div className="absolute left-3 right-3 top-[45%] z-10 space-y-2.5">
        <AnimatePresence mode="sync">
          {extractedItems.map((dataIndex, i) => (
            <DataCard
              key={`card-${dataIndex}-${extractedItems.length}-${i}`}
              data={EXTRACTED_DATA[dataIndex]}
              index={i}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Bottom fade mask */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-dark-bg-card via-white/50 dark:via-dark-bg-card/50 to-transparent pointer-events-none z-10" />

      {/* Subtle corner accents */}
      <div className="absolute top-32 left-3 text-slate-500/15 font-mono text-[10px]">
        {"<extract>"}
      </div>
      <div className="absolute bottom-16 right-3 text-slate-500/15 font-mono text-[10px]">
        {"</extract>"}
      </div>
    </div>
  );
}
