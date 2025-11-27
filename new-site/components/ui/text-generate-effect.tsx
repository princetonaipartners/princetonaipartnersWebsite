'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  delay?: number;
}

export function TextGenerateEffect({
  words,
  className,
  filter = true,
  duration = 0.5,
  delay = 0,
}: TextGenerateEffectProps) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const wordsArray = words.split(' ');

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      filter: filter ? 'blur(10px)' : 'none',
      y: 10,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: duration,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={cn('font-bold', className)}
      variants={containerVariants}
      initial="hidden"
      animate={hasAnimated ? 'visible' : 'hidden'}
    >
      {wordsArray.map((word, idx) => (
        <motion.span key={word + idx} className="inline-block mr-[0.25em]" variants={wordVariants}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

// Variant with typing cursor effect
interface TypewriterEffectProps {
  words: string;
  className?: string;
  cursorClassName?: string;
  speed?: number;
  delay?: number;
}

export function TypewriterEffect({
  words,
  className,
  cursorClassName,
  speed = 50,
  delay = 0,
}: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      let currentIndex = 0;

      const interval = setInterval(() => {
        if (currentIndex <= words.length) {
          setDisplayedText(words.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, words, speed, delay]);

  // Cursor blink
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div ref={ref} className={cn('font-bold', className)}>
      <span>{displayedText}</span>
      <span
        className={cn(
          'inline-block w-[3px] h-[1em] ml-1 align-middle bg-brand-primary',
          showCursor ? 'opacity-100' : 'opacity-0',
          isComplete && 'hidden',
          cursorClassName
        )}
      />
    </div>
  );
}

// Gradient text variant that reveals word by word
interface GradientTextGenerateProps {
  words: string;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
  duration?: number;
}

export function GradientTextGenerate({
  words,
  className,
  gradientFrom = '#0A84FF',
  gradientTo = '#0066CC',
  duration = 0.6,
}: GradientTextGenerateProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const wordsArray = words.split(' ');

  return (
    <div
      ref={ref}
      className={cn('font-bold', className)}
      style={{
        backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                }
              : {}
          }
          transition={{
            duration: duration,
            delay: idx * 0.1,
            ease: [0.25, 0.4, 0.25, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
