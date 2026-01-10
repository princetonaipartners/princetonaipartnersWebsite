'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function RevealCTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative z-10 py-32 pb-40 flex items-center justify-center overflow-hidden"
    >
      {/* Simple ambient glow - no scroll tracking */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-[300px] h-[200px] rounded-full bg-blue-400/10 dark:bg-blue-500/15 blur-[80px]" />
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[300px] h-[200px] rounded-full bg-sky-300/10 dark:bg-sky-400/12 blur-[80px]" />
      </div>

      {/* Content with simple fade-in animation */}
      <motion.div
        className="relative z-20 text-center px-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Main headline */}
        <h2 className="font-bold mb-2 leading-tight">
          <span className="text-zinc-900 dark:text-white block text-4xl md:text-5xl lg:text-6xl">
            What Do You Want To Build?
          </span>
          <span className="block text-2xl md:text-3xl lg:text-4xl mt-3 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 dark:from-blue-400 dark:via-sky-300 dark:to-blue-400 bg-clip-text text-transparent">
            Get an Instant Quote Today
          </span>
        </h2>

        {/* CTA Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <Link href="/quote">
            <Button
              className="relative min-w-48 h-14 text-lg font-semibold
                bg-gradient-to-r from-blue-500 to-sky-500
                hover:from-blue-400 hover:to-sky-400
                text-white border border-blue-400/50
                shadow-[0_0_30px_rgba(59,130,246,0.4)]
                hover:shadow-[0_0_50px_rgba(59,130,246,0.6)]
                hover:scale-105 transition-all duration-300 rounded-xl transform-gpu"
            >
              <Image
                src="/logos/logo-header.png"
                alt="Princeton AI"
                width={24}
                height={24}
                className="mr-2"
              />
              Start Your Quote
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom edge glow */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-200/50 dark:from-zinc-950/50 to-transparent pointer-events-none" />
    </section>
  );
}
