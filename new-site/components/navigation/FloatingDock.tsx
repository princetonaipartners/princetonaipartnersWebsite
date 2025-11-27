'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { DockItem } from './DockItem';
import { DockCTA } from './DockCTA';
import { SolutionsPanel } from './SolutionsPanel';
import { cn } from '@/lib/utils';

const DOCK_ITEMS = [
  { id: 'home', icon: 'home' as const, href: '/', label: 'Home' },
  { id: 'solutions', icon: 'layout' as const, label: 'Solutions', hasPanel: true },
  { id: 'about', icon: 'info' as const, href: '/about', label: 'About' },
  { id: 'contact', icon: 'mail' as const, href: '/contact', label: 'Contact' },
];

function getMagnification(index: number, hoveredIndex: number | null): number {
  if (hoveredIndex === null) return 1;
  const distance = Math.abs(index - hoveredIndex);
  if (distance === 0) return 1.2;
  if (distance === 1) return 1.1;
  return 1;
}

const dockVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 300, damping: 30, delay: 0.3 }
  }
};

export function FloatingDock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  const handleItemHover = useCallback((index: number) => {
    if (!prefersReducedMotion) {
      setHoveredIndex(index);
    }
  }, [prefersReducedMotion]);

  const handleItemLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  const handleSolutionsClick = useCallback(() => {
    setSolutionsOpen((prev) => !prev);
  }, []);

  const closeSolutions = useCallback(() => {
    setSolutionsOpen(false);
  }, []);

  return (
    <>
      {/* Solutions Panel */}
      <AnimatePresence>
        {solutionsOpen && (
          <SolutionsPanel onClose={closeSolutions} />
        )}
      </AnimatePresence>

      {/* Desktop Dock */}
      <motion.nav
        className={cn(
          "fixed bottom-6 inset-x-0 z-50",
          "hidden md:flex justify-center", // Desktop only
        )}
        initial="hidden"
        animate="visible"
        variants={dockVariants}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className={cn(
          "flex items-center gap-1",
          "px-3 py-2",
          "bg-white/10 dark:bg-black/40",
          "backdrop-blur-xl",
          "border border-white/20 dark:border-white/10",
          "rounded-2xl",
          "shadow-lg shadow-black/10",
          "dark:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
        )}>
          {/* Navigation Items */}
          {DOCK_ITEMS.map((item, index) => (
            <DockItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              href={item.hasPanel ? undefined : item.href}
              isActive={item.hasPanel
                ? pathname.startsWith('/solutions')
                : pathname === item.href
              }
              scale={getMagnification(index, hoveredIndex)}
              onHover={() => handleItemHover(index)}
              onLeave={handleItemLeave}
              onClick={item.hasPanel ? handleSolutionsClick : undefined}
              isPanelOpen={item.hasPanel && solutionsOpen}
            />
          ))}

          {/* Divider */}
          <div className="w-px h-8 bg-white/20 dark:bg-white/10 mx-2" aria-hidden="true" />

          {/* CTA Button */}
          <DockCTA href="/quote" />
        </div>
      </motion.nav>

      {/* Mobile Dock */}
      <motion.nav
        className={cn(
          "fixed bottom-4 left-4 right-4 z-50",
          "md:hidden", // Mobile only
        )}
        initial="hidden"
        animate="visible"
        variants={dockVariants}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className={cn(
          "flex items-center justify-center gap-1",
          "px-3 py-2",
          "bg-white/10 dark:bg-black/40",
          "backdrop-blur-xl",
          "border border-white/20 dark:border-white/10",
          "rounded-2xl",
          "shadow-lg shadow-black/10",
          "dark:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
        )}>
          {/* Mobile Navigation Items */}
          {DOCK_ITEMS.map((item) => (
            <DockItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              href={item.hasPanel ? undefined : item.href}
              isActive={item.hasPanel
                ? pathname.startsWith('/solutions')
                : pathname === item.href
              }
              scale={1} // No magnification on mobile
              onClick={item.hasPanel ? handleSolutionsClick : undefined}
              isMobile
            />
          ))}

          {/* Divider */}
          <div className="w-px h-6 bg-white/20 dark:bg-white/10 mx-1" aria-hidden="true" />

          {/* CTA Button */}
          <DockCTA href="/quote" isMobile />
        </div>
      </motion.nav>
    </>
  );
}
