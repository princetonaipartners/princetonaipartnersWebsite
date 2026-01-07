'use client';

import { useEffect, useCallback, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@/components/icons';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { ThemeToggleSlider } from '@/components/ui/theme-toggle-slider';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

// Custom easing curve
const customEase = [0.22, 1, 0.36, 1] as const;

// Animation variants
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: customEase },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: customEase },
  },
};

const drawerVariants = {
  hidden: { x: '100%', opacity: 0.8 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring' as const, damping: 25, stiffness: 300, mass: 0.8 },
  },
  exit: {
    x: '100%',
    opacity: 0.8,
    transition: { duration: 0.25, ease: customEase },
  },
};

const navContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: customEase },
  },
};

const accordionVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: customEase },
      opacity: { duration: 0.2 },
    },
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.3, ease: customEase },
      opacity: { duration: 0.3, delay: 0.1 },
    },
  },
};

/**
 * MobileDrawer - Slide-in mobile navigation drawer
 * Features: backdrop blur, accordion, focus trap, body scroll lock
 */
export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Escape key handler
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Focus the close button when drawer opens
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  // Focus trap
  const handleTabKeyPress = useCallback((e: KeyboardEvent) => {
    if (e.key !== 'Tab' || !drawerRef.current) return;

    const focusableElements = drawerRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleTabKeyPress);
    }
    return () => {
      document.removeEventListener('keydown', handleTabKeyPress);
    };
  }, [isOpen, handleTabKeyPress]);

  // Handle link click
  const handleLinkClick = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] lg:hidden"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop with blur */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            variants={backdropVariants}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <motion.div
            ref={drawerRef}
            variants={drawerVariants}
            className={cn(
              'absolute right-0 top-0 bottom-0 w-[85%] max-w-sm',
              'bg-white dark:bg-dark-bg-primary',
              'shadow-2xl border-l border-neutral-200 dark:border-dark-border',
              'flex flex-col'
            )}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Header with close button */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-100 dark:border-dark-border">
              <span className="text-lg font-semibold text-text-primary dark:text-dark-text-primary">
                Menu
              </span>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className={cn(
                  'p-3 rounded-full',
                  'text-text-secondary dark:text-dark-text-secondary',
                  'hover:bg-neutral-100 dark:hover:bg-dark-bg-tertiary',
                  'transition-colors duration-200'
                )}
                aria-label="Close menu"
              >
                <Icon name="close" size={24} aria-hidden />
              </button>
            </div>

            {/* Navigation items */}
            <motion.nav
              className="flex-1 overflow-y-auto px-6 py-4"
              variants={navContainerVariants}
            >
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <motion.li key={link.title} variants={navItemVariants}>
                    {link.dropdown ? (
                      /* Solutions accordion */
                      <div>
                        <button
                          onClick={() => setSolutionsOpen(!solutionsOpen)}
                          className={cn(
                            'w-full flex items-center justify-between py-4 px-4',
                            'text-lg font-medium',
                            'text-text-primary dark:text-dark-text-primary',
                            'hover:text-brand-primary dark:hover:text-dark-brand-primary',
                            'hover:bg-neutral-50 dark:hover:bg-dark-bg-secondary',
                            'rounded-xl transition-all duration-200'
                          )}
                          aria-expanded={solutionsOpen}
                          aria-controls="solutions-menu"
                        >
                          <span>{link.title}</span>
                          <motion.div
                            animate={{ rotate: solutionsOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Icon name="chevronDown" size={20} aria-hidden />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {solutionsOpen && (
                            <motion.ul
                              id="solutions-menu"
                              variants={accordionVariants}
                              initial="collapsed"
                              animate="expanded"
                              exit="collapsed"
                              className="overflow-hidden ml-4 mt-1 space-y-1"
                            >
                              {link.dropdown.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    onClick={handleLinkClick}
                                    className={cn(
                                      'flex items-center gap-3 py-3 px-4',
                                      'text-base text-text-secondary dark:text-dark-text-secondary',
                                      'hover:text-brand-primary dark:hover:text-dark-brand-primary',
                                      'hover:bg-neutral-50 dark:hover:bg-dark-bg-secondary',
                                      'rounded-lg transition-all duration-200'
                                    )}
                                  >
                                    <Icon
                                      name={item.icon}
                                      size={20}
                                      className="text-brand-primary dark:text-dark-brand-primary"
                                      aria-hidden
                                    />
                                    <span>{item.title}</span>
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      /* Regular nav link */
                      <Link
                        href={link.href || '#'}
                        onClick={handleLinkClick}
                        className={cn(
                          'flex items-center py-4 px-4',
                          'text-lg font-medium',
                          'text-text-primary dark:text-dark-text-primary',
                          'hover:text-brand-primary dark:hover:text-dark-brand-primary',
                          'hover:bg-neutral-50 dark:hover:bg-dark-bg-secondary',
                          'rounded-xl transition-all duration-200'
                        )}
                      >
                        {link.title}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.nav>

            {/* Footer with theme toggle and CTA */}
            <div className="p-6 border-t border-neutral-100 dark:border-dark-border space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary dark:text-dark-text-secondary">
                  Theme
                </span>
                <ThemeToggleSlider />
              </div>

              <Link href="/contact" onClick={handleLinkClick} className="block">
                <InteractiveHoverButton text="Get Started" className="w-full justify-center" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

MobileDrawer.displayName = 'MobileDrawer';
