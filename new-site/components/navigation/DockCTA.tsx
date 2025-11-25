'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface DockCTAProps {
  href: string;
  isMobile?: boolean;
}

export function DockCTA({ href, isMobile = false }: DockCTAProps) {
  return (
    <Link href={href} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary rounded-xl">
      <motion.div
        className={cn(
          "flex items-center justify-center",
          isMobile ? "px-3 py-2" : "px-5 py-2.5",
          "rounded-xl",
          "font-semibold text-white",
          isMobile ? "text-xs" : "text-sm",
          "bg-gradient-to-r from-brand-primary to-brand-secondary",
          "shadow-[0_4px_15px_rgba(59,130,246,0.4)]",
          "hover:shadow-[0_4px_25px_rgba(59,130,246,0.6)]",
          "transition-shadow duration-300"
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 20
        }}
      >
        {isMobile ? 'Quote' : 'Get Quote'}
      </motion.div>
    </Link>
  );
}
