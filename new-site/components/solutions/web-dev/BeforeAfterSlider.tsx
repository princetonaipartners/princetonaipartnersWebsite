'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Zap, TrendingUp, Users } from 'lucide-react';
import { FadeInSection } from '@/components/animations/FadeInSection';

const examples = [
  {
    name: 'Local Restaurant',
    before: {
      image: '/placeholder-old-restaurant.jpg',
      loadTime: '8.4s',
      seoScore: 42,
      conversionRate: '1.2%',
    },
    after: {
      image: '/placeholder-new-restaurant.jpg',
      loadTime: '1.1s',
      seoScore: 98,
      conversionRate: '4.8%',
    },
  },
  {
    name: 'Medical Practice',
    before: {
      image: '/placeholder-old-medical.jpg',
      loadTime: '12.3s',
      seoScore: 38,
      conversionRate: '0.9%',
    },
    after: {
      image: '/placeholder-new-medical.jpg',
      loadTime: '0.9s',
      seoScore: 100,
      conversionRate: '6.2%',
    },
  },
  {
    name: 'E-commerce Store',
    before: {
      image: '/placeholder-old-ecommerce.jpg',
      loadTime: '15.7s',
      seoScore: 34,
      conversionRate: '0.7%',
    },
    after: {
      image: '/placeholder-new-ecommerce.jpg',
      loadTime: '1.3s',
      seoScore: 97,
      conversionRate: '5.4%',
    },
  },
];

export function BeforeAfterSlider() {
  const [selectedExample, setSelectedExample] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const example = examples[selectedExample];

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  // Calculate metrics based on slider position
  const interpolate = (before: number, after: number) => {
    const progress = sliderPosition / 100;
    return before + (after - before) * progress;
  };

  const currentLoadTime = interpolate(
    parseFloat(example.before.loadTime),
    parseFloat(example.after.loadTime)
  ).toFixed(1);

  const currentSEO = Math.round(
    interpolate(example.before.seoScore, example.after.seoScore)
  );

  const currentConversion = interpolate(
    parseFloat(example.before.conversionRate),
    parseFloat(example.after.conversionRate)
  ).toFixed(1);

  return (
    <section className="py-24 bg-neutral-50 dark:bg-dark-bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary dark:text-dark-text-primary">
              See the Transformation
            </h2>
            <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto">
              Drag the slider to see the difference between a dated website and a modern, optimized site built by Princeton AI
            </p>
          </div>
        </FadeInSection>

        {/* Example Selector */}
        <FadeInSection delay={0.2}>
          <div className="flex justify-center gap-4 mb-12">
            {examples.map((ex, index) => (
              <button
                key={index}
                onClick={() => setSelectedExample(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedExample === index
                    ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg'
                    : 'bg-white dark:bg-dark-bg-secondary text-text-secondary hover:text-text-primary border border-neutral-200 dark:border-dark-border'
                }`}
              >
                {ex.name}
              </button>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection delay={0.3}>
          <div className="space-y-8">
            {/* Slider Container */}
            <div
              className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 cursor-ew-resize"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseUp}
            >
              {/* Before (Full width, clipped) */}
              <div className="absolute inset-0">
                <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl font-bold text-white/20 mb-4">BEFORE</div>
                    <p className="text-white/60">Slow, outdated, poor SEO</p>
                  </div>
                </div>
              </div>

              {/* After (Revealed by slider) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl font-bold text-white mb-4">AFTER</div>
                    <p className="text-white/90">Fast, modern, optimized</p>
                  </div>
                </div>
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                  <div className="flex gap-0.5">
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute bottom-6 left-6 px-4 py-2 rounded-lg bg-black/50 backdrop-blur-sm">
                <span className="text-sm font-semibold text-white">Before</span>
              </div>
              <div className="absolute bottom-6 right-6 px-4 py-2 rounded-lg bg-white/90 backdrop-blur-sm">
                <span className="text-sm font-semibold text-gray-900">After</span>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                key={currentLoadTime}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="bg-white dark:bg-dark-bg-secondary rounded-xl p-6 border border-neutral-200 dark:border-dark-border"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-sm font-medium text-text-secondary dark:text-dark-text-secondary">
                    Load Time
                  </span>
                </div>
                <div className="text-3xl font-bold text-text-primary dark:text-dark-text-primary">
                  {currentLoadTime}s
                </div>
                <div className="mt-2 text-sm text-text-tertiary dark:text-dark-text-tertiary">
                  {sliderPosition > 50 ? '↓ Faster' : sliderPosition < 50 ? '↑ Slower' : 'Neutral'}
                </div>
              </motion.div>

              <motion.div
                key={currentSEO}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="bg-white dark:bg-dark-bg-secondary rounded-xl p-6 border border-neutral-200 dark:border-dark-border"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-sm font-medium text-text-secondary dark:text-dark-text-secondary">
                    SEO Score
                  </span>
                </div>
                <div className="text-3xl font-bold text-text-primary dark:text-dark-text-primary">
                  {currentSEO}/100
                </div>
                <div className="mt-2 text-sm text-text-tertiary dark:text-dark-text-tertiary">
                  {sliderPosition > 50 ? '↑ Better' : sliderPosition < 50 ? '↓ Worse' : 'Neutral'}
                </div>
              </motion.div>

              <motion.div
                key={currentConversion}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="bg-white dark:bg-dark-bg-secondary rounded-xl p-6 border border-neutral-200 dark:border-dark-border"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 flex items-center justify-center">
                    <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-sm font-medium text-text-secondary dark:text-dark-text-secondary">
                    Conversion Rate
                  </span>
                </div>
                <div className="text-3xl font-bold text-text-primary dark:text-dark-text-primary">
                  {currentConversion}%
                </div>
                <div className="mt-2 text-sm text-text-tertiary dark:text-dark-text-tertiary">
                  {sliderPosition > 50 ? '↑ Higher' : sliderPosition < 50 ? '↓ Lower' : 'Neutral'}
                </div>
              </motion.div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
