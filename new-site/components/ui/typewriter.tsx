'use client';

import { useEffect, useState, useMemo, useCallback } from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/lib/hooks/use-mobile";

interface TypewriterProps {
  text: string | string[];
  speed?: number;
  initialDelay?: number;
  waitTime?: number;
  deleteSpeed?: number;
  loop?: boolean;
  className?: string;
  showCursor?: boolean;
  hideCursorOnType?: boolean;
  cursorChar?: string | React.ReactNode;
  cursorClassName?: string;
}

/**
 * Typewriter - Optimized typing animation component
 *
 * Performance optimizations:
 * - Batch character updates (every 2 chars instead of 1) for reduced re-renders
 * - CSS animation for cursor blink (no JS interval)
 * - Respects prefers-reduced-motion (shows full text immediately)
 * - Memoized text array to prevent recalculations
 */
const Typewriter = ({
  text,
  speed = 50,
  initialDelay = 0,
  waitTime = 2000,
  deleteSpeed = 30,
  loop = true,
  className,
  showCursor = true,
  hideCursorOnType = false,
  cursorChar = "|",
  cursorClassName = "ml-1",
}: TypewriterProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const texts = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  // If user prefers reduced motion, show full first text immediately
  // This provides accessible experience without jarring animations
  useEffect(() => {
    if (prefersReducedMotion && texts.length > 0) {
      setDisplayText(texts[0]);
    }
  }, [prefersReducedMotion, texts]);

  // Main typing logic - optimized with batching
  useEffect(() => {
    // Skip if reduced motion
    if (prefersReducedMotion) return;

    let timeout: NodeJS.Timeout;
    const currentText = texts[currentTextIndex];

    const startTyping = () => {
      if (isDeleting) {
        setIsTyping(true);
        if (displayText === "") {
          setIsDeleting(false);
          setIsTyping(false);
          if (currentTextIndex === texts.length - 1 && !loop) {
            return;
          }
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          setCurrentIndex(0);
          timeout = setTimeout(() => {}, waitTime);
        } else {
          // Delete 2 chars at a time for faster deletion
          timeout = setTimeout(() => {
            setDisplayText((prev) => prev.slice(0, -2) || prev.slice(0, -1));
          }, deleteSpeed);
        }
      } else {
        if (currentIndex < currentText.length) {
          setIsTyping(true);
          // Type 2 chars at a time if we have enough left, otherwise type 1
          const charsToAdd = Math.min(2, currentText.length - currentIndex);
          timeout = setTimeout(() => {
            setDisplayText((prev) => prev + currentText.slice(currentIndex, currentIndex + charsToAdd));
            setCurrentIndex((prev) => prev + charsToAdd);
          }, speed);
        } else if (texts.length > 1) {
          setIsTyping(false);
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, waitTime);
        } else {
          setIsTyping(false);
        }
      }
    };

    // Apply initial delay only at the start
    if (currentIndex === 0 && !isDeleting && displayText === "") {
      timeout = setTimeout(startTyping, initialDelay);
    } else {
      startTyping();
    }

    return () => clearTimeout(timeout);
  }, [
    currentIndex,
    displayText,
    isDeleting,
    speed,
    deleteSpeed,
    waitTime,
    texts,
    currentTextIndex,
    loop,
    initialDelay,
    prefersReducedMotion,
  ]);

  // Determine if cursor should be hidden
  const shouldHideCursor = useMemo(() => {
    if (!showCursor) return true;
    if (hideCursorOnType && isTyping) return true;
    return false;
  }, [showCursor, hideCursorOnType, isTyping]);

  return (
    <span className={cn("inline-block whitespace-pre-wrap tracking-tight pb-[0.1em]", className)}>
      <span>{displayText}</span>
      {!shouldHideCursor && (
        <span
          className={cn(
            cursorClassName,
            // CSS animation for cursor blink - no JS needed
            "animate-cursor-blink"
          )}
          aria-hidden="true"
        >
          {cursorChar}
        </span>
      )}
    </span>
  );
};

export { Typewriter };
