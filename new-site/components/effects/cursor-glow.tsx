"use client";

import { useEffect, useRef } from "react";

interface CursorGlowProps {
  className?: string;
  color?: string;
  size?: number;
  opacity?: number;
}

/**
 * CursorGlow - Radial gradient that follows cursor
 * Adds premium interactive feel to hero sections
 */
export default function CursorGlow({
  className = "",
  color = "59, 130, 246", // RGB for brand blue
  size = 300,
  opacity = 0.15,
}: CursorGlowProps) {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        const { clientX, clientY } = e;
        glowRef.current.style.left = `${clientX}px`;
        glowRef.current.style.top = `${clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className={`pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle, rgba(${color}, ${opacity}) 0%, transparent 70%)`,
        filter: "blur(40px)",
        zIndex: 1,
      }}
    />
  );
}
