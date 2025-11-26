'use client';

import { useEffect, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';

// ============================================
// TYPES
// ============================================
interface Node {
  x: number;
  y: number;
  pulsePhase: number;
  pulseSpeed: number;
  isActive: boolean;
  activationTime: number;
}

interface Pulse {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  progress: number;
  speed: number;
  horizontal: boolean;
}

interface NeuralGridBackgroundProps {
  className?: string;
  gridSize?: number;
  nodeSpacing?: number;
  pulseColor?: string;
  gridColor?: string;
}

// ============================================
// NEURAL GRID BACKGROUND
// ============================================
export function NeuralGridBackground({
  className,
  gridSize = 60,
  pulseColor = '#0A84FF',
  gridColor = 'rgba(63, 63, 70, 0.4)',
}: NeuralGridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const pulsesRef = useRef<Pulse[]>([]);
  const animationRef = useRef<number>();

  const initializeGrid = useCallback((width: number, height: number) => {
    const nodes: Node[] = [];
    const cols = Math.ceil(width / gridSize) + 1;
    const rows = Math.ceil(height / gridSize) + 1;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        nodes.push({
          x: col * gridSize,
          y: row * gridSize,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.02 + Math.random() * 0.02,
          isActive: false,
          activationTime: 0,
        });
      }
    }
    return nodes;
  }, [gridSize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      nodesRef.current = initializeGrid(window.innerWidth, window.innerHeight);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create random pulses along grid lines
    const createPulse = () => {
      const horizontal = Math.random() > 0.5;
      const maxX = window.innerWidth;
      const maxY = window.innerHeight;

      if (horizontal) {
        const y = Math.floor(Math.random() * Math.ceil(maxY / gridSize)) * gridSize;
        pulsesRef.current.push({
          startX: 0,
          startY: y,
          endX: maxX,
          endY: y,
          progress: 0,
          speed: 0.003 + Math.random() * 0.004,
          horizontal: true,
        });
      } else {
        const x = Math.floor(Math.random() * Math.ceil(maxX / gridSize)) * gridSize;
        pulsesRef.current.push({
          startX: x,
          startY: 0,
          endX: x,
          endY: maxY,
          progress: 0,
          speed: 0.003 + Math.random() * 0.004,
          horizontal: false,
        });
      }
    };

    // Initial pulses
    for (let i = 0; i < 3; i++) {
      createPulse();
    }

    // Add new pulses periodically
    const pulseInterval = setInterval(() => {
      if (pulsesRef.current.length < 6) {
        createPulse();
      }
    }, 2000);

    // Activate random nodes
    const nodeActivationInterval = setInterval(() => {
      const nodes = nodesRef.current;
      if (nodes.length > 0) {
        const randomIndex = Math.floor(Math.random() * nodes.length);
        nodes[randomIndex].isActive = true;
        nodes[randomIndex].activationTime = Date.now();
      }
    }, 500);

    // Animation loop
    const animate = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      // Draw grid lines
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw pulses along grid lines
      pulsesRef.current = pulsesRef.current.filter((pulse) => {
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) {
          return false;
        }

        const currentX = pulse.startX + (pulse.endX - pulse.startX) * pulse.progress;
        const currentY = pulse.startY + (pulse.endY - pulse.startY) * pulse.progress;

        // Draw pulse glow
        const gradient = ctx.createRadialGradient(
          currentX,
          currentY,
          0,
          currentX,
          currentY,
          40
        );
        gradient.addColorStop(0, `${pulseColor}80`);
        gradient.addColorStop(0.5, `${pulseColor}30`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(currentX, currentY, 40, 0, Math.PI * 2);
        ctx.fill();

        // Draw pulse line trail
        const trailLength = pulse.horizontal ? 80 : 80;
        const trailStart = Math.max(0, pulse.progress - 0.1);

        const lineGradient = pulse.horizontal
          ? ctx.createLinearGradient(
              pulse.startX + (pulse.endX - pulse.startX) * trailStart,
              currentY,
              currentX,
              currentY
            )
          : ctx.createLinearGradient(
              currentX,
              pulse.startY + (pulse.endY - pulse.startY) * trailStart,
              currentX,
              currentY
            );

        lineGradient.addColorStop(0, 'transparent');
        lineGradient.addColorStop(1, `${pulseColor}90`);

        ctx.strokeStyle = lineGradient;
        ctx.lineWidth = 2;
        ctx.beginPath();

        if (pulse.horizontal) {
          ctx.moveTo(pulse.startX + (pulse.endX - pulse.startX) * trailStart, currentY);
          ctx.lineTo(currentX, currentY);
        } else {
          ctx.moveTo(currentX, pulse.startY + (pulse.endY - pulse.startY) * trailStart);
          ctx.lineTo(currentX, currentY);
        }
        ctx.stroke();

        // Activate nodes near pulse
        nodesRef.current.forEach((node) => {
          const dx = node.x - currentX;
          const dy = node.y - currentY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 30) {
            node.isActive = true;
            node.activationTime = Date.now();
          }
        });

        return true;
      });

      // Draw nodes at intersections
      const now = Date.now();
      nodesRef.current.forEach((node) => {
        node.pulsePhase += node.pulseSpeed;

        // Check if node should deactivate
        if (node.isActive && now - node.activationTime > 1500) {
          node.isActive = false;
        }

        // Base glow for all nodes
        const baseOpacity = 0.15 + Math.sin(node.pulsePhase) * 0.1;

        if (node.isActive) {
          // Active node - bright glow with animation
          const activeDuration = now - node.activationTime;
          const fadeProgress = Math.min(activeDuration / 1500, 1);
          const activeOpacity = 1 - fadeProgress * 0.7;

          // Outer glow
          const outerGradient = ctx.createRadialGradient(
            node.x,
            node.y,
            0,
            node.x,
            node.y,
            20 * (1 + (1 - fadeProgress) * 0.5)
          );
          outerGradient.addColorStop(0, `${pulseColor}${Math.floor(activeOpacity * 80).toString(16).padStart(2, '0')}`);
          outerGradient.addColorStop(0.5, `${pulseColor}${Math.floor(activeOpacity * 40).toString(16).padStart(2, '0')}`);
          outerGradient.addColorStop(1, 'transparent');

          ctx.fillStyle = outerGradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 20 * (1 + (1 - fadeProgress) * 0.5), 0, Math.PI * 2);
          ctx.fill();

          // Inner bright core
          ctx.fillStyle = `${pulseColor}${Math.floor(activeOpacity * 255).toString(16).padStart(2, '0')}`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Inactive node - subtle glow
          ctx.fillStyle = `${pulseColor}${Math.floor(baseOpacity * 255).toString(16).padStart(2, '0')}`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      clearInterval(pulseInterval);
      clearInterval(nodeActivationInterval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [gridSize, pulseColor, gridColor, initializeGrid]);

  return (
    <div className={cn('fixed inset-0 pointer-events-none overflow-hidden -z-10', className)}>
      <canvas ref={canvasRef} className="absolute inset-0" />
      {/* Gradient overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, ${pulseColor}15, transparent 50%),
            radial-gradient(ellipse 60% 40% at 50% 120%, ${pulseColor}10, transparent 50%)
          `,
        }}
      />
    </div>
  );
}
