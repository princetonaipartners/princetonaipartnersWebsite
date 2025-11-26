'use client';

import { useEffect, useRef, useState } from 'react';

// ============================================
// TYPES
// ============================================
interface Particle {
  x: number;
  y: number;
  baseSize: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  baseOpacity: number;
}

// ============================================
// MAGNETIC BACKGROUND - Matches Prod Site Exactly
// ============================================
export function MagneticBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Floating Particles - Full page */}
      <ParticlesCanvas />
    </div>
  );
}

// ============================================
// PARTICLES CANVAS - With Magnetic Button Attraction
// ============================================
interface MagneticTarget {
  element: Element;
  rect: DOMRect;
  isHovered: boolean;
}

function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const magneticTargetRef = useRef<MagneticTarget | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles - matching prod config
    const calculateParticleCount = () => {
      const area = window.innerWidth * window.innerHeight;
      return Math.floor((area / 800) * 0.1);
    };

    const initParticles = () => {
      const count = Math.min(calculateParticleCount(), 120);
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseSize: Math.random() * 2 + 1,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1,
        opacity: Math.random() * 0.4 + 0.2,
        baseOpacity: Math.random() * 0.4 + 0.2,
      }));
    };
    initParticles();

    // Track mouse and check for magnetic targets
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Check if hovering over a magnetic target
      const target = e.target as Element;
      const magneticElement = target.closest('[data-magnetic]');

      if (magneticElement) {
        const rect = magneticElement.getBoundingClientRect();
        magneticTargetRef.current = {
          element: magneticElement,
          rect,
          isHovered: true,
        };
      } else {
        magneticTargetRef.current = null;
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
      magneticTargetRef.current = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const magneticTarget = magneticTargetRef.current;

      particlesRef.current.forEach((particle) => {
        // Base movement
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Magnetic attraction when hovering a button
        if (magneticTarget) {
          const targetCenterX = magneticTarget.rect.left + magneticTarget.rect.width / 2;
          const targetCenterY = magneticTarget.rect.top + magneticTarget.rect.height / 2;

          const dx = targetCenterX - particle.x;
          const dy = targetCenterY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Attract particles within 400px radius
          const attractionRadius = 400;
          if (distance < attractionRadius && distance > 0) {
            // Stronger attraction closer to center, max force at edges of radius
            const force = (1 - distance / attractionRadius) * 0.08;
            particle.x += (dx / distance) * force * distance * 0.02;
            particle.y += (dy / distance) * force * distance * 0.02;

            // Boost size and opacity when being attracted
            const attractRatio = 1 - distance / attractionRadius;
            particle.size = particle.baseSize + (5 - particle.baseSize) * attractRatio * 0.5;
            particle.opacity = particle.baseOpacity + (1 - particle.baseOpacity) * attractRatio * 0.7;
          }
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Bubble effect on mouse hover (when not attracted to button)
        if (!magneticTarget) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const bubbleDistance = 150;

          if (distance < bubbleDistance) {
            const ratio = 1 - distance / bubbleDistance;
            particle.size = particle.baseSize + (4 - particle.baseSize) * ratio;
            particle.opacity = particle.baseOpacity + (1 - particle.baseOpacity) * ratio;
          } else {
            particle.size += (particle.baseSize - particle.size) * 0.1;
            particle.opacity += (particle.baseOpacity - particle.opacity) * 0.1;
          }
        } else {
          // Gradually return to base when outside attraction radius
          const targetCenterX = magneticTarget.rect.left + magneticTarget.rect.width / 2;
          const targetCenterY = magneticTarget.rect.top + magneticTarget.rect.height / 2;
          const dx = targetCenterX - particle.x;
          const dy = targetCenterY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance >= 400) {
            particle.size += (particle.baseSize - particle.size) * 0.1;
            particle.opacity += (particle.baseOpacity - particle.opacity) * 0.1;
          }
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(10, 132, 255, ${particle.opacity})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
    />
  );
}

// ============================================
// MOUSE BLUR - Only visible after scrolling 50%
// ============================================
function MouseBlur() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Show/hide based on scroll position - matches prod exactly
    // "if (window.scrollY > window.innerHeight * 0.5)"
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none transition-opacity duration-500"
      style={{
        // Matches prod: width: 250px; height: 250px;
        width: 250,
        height: 250,
        // Center on cursor
        left: position.x - 125,
        top: position.y - 125,
        // Matches prod: background: var(--accent-color-start); filter: blur(120px);
        background: '#0A84FF',
        borderRadius: '50%',
        filter: 'blur(120px)',
        // Matches prod: opacity: 0.2 when visible, 0 when not
        opacity: isVisible ? 0.2 : 0,
        // Smooth follow
        transition: 'left 0.1s ease-out, top 0.1s ease-out, opacity 0.5s ease-in-out',
        zIndex: -1,
      }}
    />
  );
}

// ============================================
// OPTIONAL: Magnetic Target wrapper (for future use)
// ============================================
export function MagneticTarget({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div data-magnetic className={className}>
      {children}
    </div>
  );
}
