"use client";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";
import { useShouldReduceMotion } from "@/lib/hooks/use-mobile";

/**
 * EvervaultCard - Optimized animated card component
 *
 * Performance optimizations:
 * - RAF throttling on mousemove (prevents 60fps state updates)
 * - Reduced string length (500 chars vs 1500)
 * - Cached bounding rect on mouseenter
 * - Debounced string regeneration (every 100ms)
 * - Respects prefers-reduced-motion
 */
export const EvervaultCard = ({
  text,
  className,
}: {
  text?: string;
  className?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shouldReduceMotion = useShouldReduceMotion();

  const [randomString, setRandomString] = useState("");

  // Cache bounding rect to avoid repeated calls
  const cachedRect = useRef<DOMRect | null>(null);
  const lastStringUpdate = useRef<number>(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Initial string generation - smaller for better performance
    const str = generateRandomString(500);
    setRandomString(str);
  }, []);

  // Throttled mousemove handler
  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // Skip animations if user prefers reduced motion
      if (shouldReduceMotion) return;

      // Skip if we already have a pending RAF
      if (rafId.current !== null) return;

      rafId.current = requestAnimationFrame(() => {
        const rect = cachedRect.current || e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);

        // Only regenerate string every 100ms (not every frame)
        const now = Date.now();
        if (now - lastStringUpdate.current > 100) {
          const str = generateRandomString(500);
          setRandomString(str);
          lastStringUpdate.current = now;
        }

        rafId.current = null;
      });
    },
    [mouseX, mouseY, shouldReduceMotion]
  );

  // Cache bounding rect on mouse enter
  const onMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    cachedRect.current = e.currentTarget.getBoundingClientRect();
  }, []);

  // Clear cache on mouse leave
  const onMouseLeave = useCallback(() => {
    cachedRect.current = null;
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  }, []);

  // If reduced motion, show a simpler static version
  if (shouldReduceMotion) {
    return (
      <div
        className={cn(
          "relative flex aspect-square h-full w-full items-center justify-center bg-transparent p-0.5",
          className
        )}
      >
        <div className="group/card relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-transparent">
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-green-500/10" />
          <div className="relative z-10 flex items-center justify-center">
            <div className="relative flex h-44 w-44 items-center justify-center rounded-full text-4xl font-bold text-white">
              <div className="absolute h-full w-full rounded-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm" />
              <span className="relative z-20 text-black dark:text-white">
                {text}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex aspect-square h-full w-full items-center justify-center bg-transparent p-0.5",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="group/card relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-transparent"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative flex h-44 w-44 items-center justify-center rounded-full text-4xl font-bold text-white">
            <div className="absolute h-full w-full rounded-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm" />
            <span className="relative z-20 text-black dark:text-white">
              {text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CardPatternProps {
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
  randomString: string;
}

export function CardPattern({ mouseX, mouseY, randomString }: CardPatternProps) {
  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50" />
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 h-full whitespace-pre-wrap break-words font-mono text-xs font-bold text-white transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
