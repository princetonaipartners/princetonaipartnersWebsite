'use client';

import { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

// Particle type
interface Particle {
  id: number;
  initialX: number; // percentage 0-100
  initialY: number; // percentage -20 to 120 (allows overflow)
  size: number;
  opacity: number;
  driftSpeed: number;
  driftAmplitude: number;
  phase: number; // random starting phase for sine wave
}

// Generate particles with random properties
function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    initialX: 5 + Math.random() * 90, // 5-95% to stay within bounds
    initialY: 10 + Math.random() * 80, // 10-90% to stay within bounds
    size: 3 + Math.random() * 5, // 3-8px
    opacity: 0.2 + Math.random() * 0.3, // 0.2-0.5
    driftSpeed: 0.3 + Math.random() * 0.4, // varies per particle
    driftAmplitude: 10 + Math.random() * 15, // reduced drift to stay in bounds
    phase: Math.random() * Math.PI * 2,
  }));
}

// Single floating particle component
function FloatingParticle({
  particle,
  isButtonHovered,
  buttonPosition,
  containerRect,
}: {
  particle: Particle;
  isButtonHovered: boolean;
  buttonPosition: { x: number; y: number } | null;
  containerRect: DOMRect | null;
}) {
  const controls = useAnimation();
  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const startTimeRef = useRef(Date.now());

  // Ambient floating animation
  useEffect(() => {
    if (isButtonHovered) return;

    const animate = () => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      const x = Math.sin(elapsed * particle.driftSpeed + particle.phase) * particle.driftAmplitude;
      const y = Math.cos(elapsed * particle.driftSpeed * 0.7 + particle.phase) * particle.driftAmplitude * 0.6;
      setCurrentPos({ x, y });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isButtonHovered, particle]);

  // Calculate target position when button is hovered
  const targetX = useMemo(() => {
    if (!isButtonHovered || !buttonPosition || !containerRect) return currentPos.x;
    const particleAbsX = (particle.initialX / 100) * containerRect.width;
    return buttonPosition.x - particleAbsX;
  }, [isButtonHovered, buttonPosition, containerRect, particle.initialX, currentPos.x]);

  const targetY = useMemo(() => {
    if (!isButtonHovered || !buttonPosition || !containerRect) return currentPos.y;
    const particleAbsY = (particle.initialY / 100) * containerRect.height;
    return buttonPosition.y - particleAbsY;
  }, [isButtonHovered, buttonPosition, containerRect, particle.initialY, currentPos.y]);

  return (
    <motion.div
      className="absolute rounded-full bg-blue-500 dark:bg-blue-400 pointer-events-none"
      style={{
        left: `${particle.initialX}%`,
        top: `${particle.initialY}%`,
        width: particle.size,
        height: particle.size,
        opacity: particle.opacity,
        filter: 'blur(1px)',
        boxShadow: '0 0 6px rgba(59, 130, 246, 0.6)',
      }}
      animate={{
        x: isButtonHovered ? targetX : currentPos.x,
        y: isButtonHovered ? targetY : currentPos.y,
        scale: isButtonHovered ? 0.5 : 1,
        opacity: isButtonHovered ? particle.opacity * 1.5 : particle.opacity,
      }}
      transition={
        isButtonHovered
          ? { type: 'spring', stiffness: 80, damping: 15 }
          : { type: 'tween', duration: 0.1 }
      }
    />
  );
}

export function RevealCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [buttonPosition, setButtonPosition] = useState<{ x: number; y: number } | null>(null);
  const [containerRect, setContainerRect] = useState<DOMRect | null>(null);

  // Generate particles only on client side to avoid hydration mismatch
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(generateParticles(25));
  }, []);

  // Track container and button positions
  useEffect(() => {
    const updatePositions = () => {
      if (containerRef.current) {
        setContainerRect(containerRef.current.getBoundingClientRect());
      }
      if (buttonRef.current && containerRef.current) {
        const btnRect = buttonRef.current.getBoundingClientRect();
        const contRect = containerRef.current.getBoundingClientRect();
        setButtonPosition({
          x: btnRect.left - contRect.left + btnRect.width / 2,
          y: btnRect.top - contRect.top + btnRect.height / 2,
        });
      }
    };

    updatePositions();
    window.addEventListener('resize', updatePositions);
    window.addEventListener('scroll', updatePositions);
    return () => {
      window.removeEventListener('resize', updatePositions);
      window.removeEventListener('scroll', updatePositions);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Text reveal animations
  const textBlur = useTransform(scrollYProgress, [0, 0.3, 0.5], [20, 8, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5], [0, 0.5, 1]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [60, 0]);

  // Converging glow orbs
  const leftOrbX = useTransform(scrollYProgress, [0, 0.6], [-200, 0]);
  const rightOrbX = useTransform(scrollYProgress, [0, 0.6], [200, 0]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 0.3, 0.6]);

  // Central glow intensifies
  const coreGlowOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 0.8]);
  const coreGlowScale = useTransform(scrollYProgress, [0.3, 0.7], [0.5, 1]);

  // Button reveal
  const buttonOpacity = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);
  const buttonY = useTransform(scrollYProgress, [0.35, 0.55], [20, 0]);

  return (
    <section
      ref={containerRef}
      className="relative z-10 py-32 pb-40 flex items-center justify-center overflow-hidden"
    >
      {/* ============================================
          AMBIENT FLOATING PARTICLES
          ============================================ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <FloatingParticle
            key={particle.id}
            particle={particle}
            isButtonHovered={isButtonHovered}
            buttonPosition={buttonPosition}
            containerRect={containerRect}
          />
        ))}
      </div>

      {/* ============================================
          CONVERGING GLOW ORBS
          ============================================ */}
      <motion.div
        style={{ x: leftOrbX, opacity: orbOpacity }}
        className="absolute left-[5%] top-1/2 -translate-y-1/2 w-[300px] h-[200px] rounded-full bg-blue-400/15 dark:bg-blue-500/20 blur-[80px] pointer-events-none"
      />
      <motion.div
        style={{ x: rightOrbX, opacity: orbOpacity }}
        className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[300px] h-[200px] rounded-full bg-sky-300/12 dark:bg-sky-400/15 blur-[80px] pointer-events-none"
      />

      {/* Central core glow */}
      <motion.div
        style={{ opacity: coreGlowOpacity, scale: coreGlowScale }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] rounded-full pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/15 via-sky-300/25 dark:from-blue-500/20 dark:via-sky-400/30 to-blue-400/15 dark:to-blue-500/20 blur-[60px]" />
      </motion.div>

      {/* ============================================
          CONTENT - DRAMATIC REVEAL
          ============================================ */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        {/* Main headline */}
        <motion.div
          style={{
            filter: useTransform(textBlur, (v) => `blur(${v}px)`),
            opacity: textOpacity,
            scale: textScale,
            y: textY,
          }}
        >
          <h2 className="font-bold mb-2 leading-tight">
            <span className="text-zinc-900 dark:text-white block text-4xl md:text-5xl lg:text-6xl">
              What Do You Want To Build?
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-3 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 dark:from-blue-400 dark:via-sky-300 dark:to-blue-400 bg-clip-text text-transparent">
              Get an Instant Quote Today
            </span>
          </h2>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          style={{ opacity: buttonOpacity, y: buttonY }}
          className="mt-8"
        >
          <Link href="/quote">
            <Button
              ref={buttonRef}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              className="relative min-w-48 h-14 text-lg font-semibold
                bg-gradient-to-r from-blue-500 to-sky-500
                hover:from-blue-400 hover:to-sky-400
                text-white border border-blue-400/50
                shadow-[0_0_30px_rgba(59,130,246,0.4)]
                hover:shadow-[0_0_50px_rgba(59,130,246,0.6)]
                hover:scale-105 transition-all duration-300 rounded-xl"
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
      </div>

      {/* Bottom edge glow */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-200/50 dark:from-zinc-950/50 to-transparent pointer-events-none" />
    </section>
  );
}
