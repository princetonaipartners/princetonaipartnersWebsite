'use client';

import { motion } from 'framer-motion';

interface BlogHeaderProps {
  title?: string;
  description?: string;
}

export function BlogHeader({
  title = 'Insights & Resources',
  description = 'Expert perspectives on AI automation, web development, and digital transformation strategies.',
}: BlogHeaderProps) {
  return (
    <div className="relative py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/5 via-transparent to-transparent" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(10, 132, 255, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            <span className="text-sm text-zinc-400">The Princeton AI Blog</span>
          </motion.div>

          {/* Title with gradient */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
