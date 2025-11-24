"use client";

import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { ServiceCard } from './service-card';
import { PRINCETON_AI_SERVICES } from '@/lib/services-data';

export function FloatingServiceCards() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 5 }}
    >
      {/* Make cards clickable but not the container */}
      <div className="relative w-full h-full">
        {PRINCETON_AI_SERVICES.map((service, index) => (
          <div key={service.id} className="pointer-events-auto">
            <ServiceCard
              service={service}
              scrollProgress={scrollYProgress}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
