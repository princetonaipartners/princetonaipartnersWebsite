'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ShowcaseSite {
  id: string;
  name: string;
  category: string;
  description: string;
  url: string;
  type: 'live' | 'mockup';
  screenshot: string;
  tags: string[];
  performanceScore?: number;
  seoOptimizations?: string[];
}

const showcaseSites: ShowcaseSite[] = [
  {
    id: 'renew-verse',
    name: 'Renew-Verse',
    category: 'E-commerce Platform',
    description: 'Full-featured e-commerce platform with custom product configurator, AI-powered recommendations, and seamless checkout experience.',
    url: 'https://www.renew-verse.com/',
    type: 'live',
    screenshot: '/assets/screenshots/renew-verse-screenshot.png',
    tags: ['E-commerce', 'AI-Powered', 'Mobile-First'],
    performanceScore: 94,
    seoOptimizations: ['Schema Markup', 'Product Rich Snippets', 'Mobile Optimization'],
  },
  {
    id: 'made-by-genie',
    name: 'Made by Genie',
    category: 'Creative Portfolio',
    description: 'Stunning portfolio site with interactive galleries, smooth animations, and compelling storytelling that converts visitors into clients.',
    url: 'https://www.madebygenie.com/',
    type: 'live',
    screenshot: '/assets/screenshots/made-by-genie-screenshot.png',
    tags: ['Portfolio', 'Creative', 'Animations'],
    performanceScore: 97,
    seoOptimizations: ['Image Optimization', 'Lazy Loading', 'Fast Load Times'],
  },
  {
    id: 'medical',
    name: 'Premium Medical Practice',
    category: 'Healthcare',
    description: 'Professional medical site with patient portal, online booking, secure forms, and HIPAA-compliant infrastructure for modern healthcare.',
    url: '/mockups/medical.html',
    type: 'mockup',
    screenshot: '/assets/screenshots/medical-mockup-screenshot.png',
    tags: ['Healthcare', 'HIPAA-Ready', 'Patient Portal'],
    performanceScore: 96,
    seoOptimizations: ['Local SEO', 'Health Schema', 'Accessibility AA'],
  },
  {
    id: 'real-estate',
    name: 'Luxury Real Estate Portfolio',
    category: 'Real Estate',
    description: 'High-end real estate showcase with virtual tours, property search, lead capture, and premium branding that attracts qualified buyers.',
    url: '/mockups/realestate.html',
    type: 'mockup',
    screenshot: '/assets/screenshots/realestate-mockup-screenshot.png',
    tags: ['Real Estate', 'Virtual Tours', 'Lead Gen'],
    performanceScore: 93,
    seoOptimizations: ['Location Targeting', 'Property Schema', 'Visual Search'],
  },
  {
    id: 'restaurant',
    name: 'Fine Dining Restaurant',
    category: 'Food & Beverage',
    description: 'Mouth-watering restaurant site with online reservations, digital menu, photo galleries, and integrated ordering system.',
    url: '/mockups/restaurant.html',
    type: 'mockup',
    screenshot: '/assets/screenshots/restaurant-mockup-screenshot.png',
    tags: ['Restaurant', 'Reservations', 'Online Orders'],
    performanceScore: 95,
    seoOptimizations: ['Menu Schema', 'Local Listings', 'Review Integration'],
  },
  {
    id: 'stimi',
    name: 'Social Gaming Platform',
    category: 'Entertainment & Gaming',
    description: 'Free-to-play social sportsbook with live betting lines, prop predictions, and sweepstakes integration for real prizes.',
    url: '/mockups/stimi.html',
    type: 'mockup',
    screenshot: '/assets/screenshots/stimi-mockup-screenshot.png',
    tags: ['Gaming', 'Social Features', 'Real-Time Data'],
    performanceScore: 92,
    seoOptimizations: ['Real-Time Updates', 'Social Sharing', 'User Engagement'],
  },
];

/**
 * WebsiteShowcaseCarousel - Interactive carousel displaying portfolio websites
 *
 * Features:
 * - Full-width carousel with navigation arrows
 * - Dot indicators for quick navigation
 * - Swipe/drag support for mobile
 * - Auto-play with pause on hover
 * - Performance metrics display
 * - Modal view for full-screen preview
 */
export function WebsiteShowcaseCarousel(): React.ReactElement {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalSite, setModalSite] = useState<ShowcaseSite | null>(null);

  const currentSite = showcaseSites[currentIndex];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handlePrevious = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? showcaseSites.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === showcaseSites.length - 1 ? 0 : prev + 1));
  }, []);

  const handleDotClick = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  const handleViewFullScreen = useCallback(() => {
    setModalSite(currentSite);
    setShowModal(true);
  }, [currentSite]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <>
      <div
        className="relative w-full"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Carousel Container */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Carousel */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-900">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                {/* Screenshot with overlay */}
                <div className="relative h-full w-full group">
                  <img
                    src={currentSite.screenshot}
                    alt={`${currentSite.name} website screenshot`}
                    className="h-full w-full object-cover"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Content overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
                    <div className="mx-auto max-w-4xl">
                      {/* Performance Score Badge */}
                      {currentSite.performanceScore && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-500/20 px-4 py-2 backdrop-blur-sm"
                        >
                          <div className="h-2 w-2 rounded-full bg-green-400" />
                          <span className="text-sm font-semibold text-white">
                            Performance: {currentSite.performanceScore}/100
                          </span>
                        </motion.div>
                      )}

                      {/* Category */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mb-2 text-sm font-medium uppercase tracking-wider text-brand-primary"
                      >
                        {currentSite.category}
                      </motion.p>

                      {/* Title */}
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mb-3 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
                      >
                        {currentSite.name}
                      </motion.h3>

                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mb-4 text-base text-neutral-200 md:text-lg max-w-3xl"
                      >
                        {currentSite.description}
                      </motion.p>

                      {/* Tags */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mb-6 flex flex-wrap gap-2"
                      >
                        {currentSite.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </motion.div>

                      {/* CTAs */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-wrap gap-3"
                      >
                        <button
                          onClick={handleViewFullScreen}
                          className="group/btn inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-secondary hover:scale-105"
                        >
                          <Maximize2 className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
                          View Full Site
                        </button>
                        {currentSite.type === 'live' && (
                          <a
                            href={currentSite.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-105"
                          >
                            Visit Live Site →
                          </a>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 rounded-full bg-white dark:bg-neutral-800 p-3 shadow-xl transition-all hover:scale-110 hover:bg-neutral-100 dark:hover:bg-neutral-700"
            aria-label="Previous showcase"
          >
            <ChevronLeft className="h-6 w-6 text-neutral-900 dark:text-white" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 rounded-full bg-white dark:bg-neutral-800 p-3 shadow-xl transition-all hover:scale-110 hover:bg-neutral-100 dark:hover:bg-neutral-700"
            aria-label="Next showcase"
          >
            <ChevronRight className="h-6 w-6 text-neutral-900 dark:text-white" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {showcaseSites.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={cn(
                'h-2 rounded-full transition-all',
                index === currentIndex
                  ? 'w-8 bg-brand-primary'
                  : 'w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Full Screen Modal */}
      {showModal && modalSite && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative h-[90vh] w-[90vw] rounded-2xl bg-white overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 z-10 rounded-full bg-black/80 p-3 text-white backdrop-blur-sm transition-all hover:bg-black hover:scale-110"
            >
              <span className="text-2xl leading-none">×</span>
            </button>
            <iframe
              src={modalSite.url}
              className="h-full w-full border-none"
              title={`${modalSite.name} full preview`}
            />
          </motion.div>
        </div>
      )}
    </>
  );
}
