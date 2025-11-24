"use client";

import { motion, useTransform, useScroll, MotionValue } from 'framer-motion';
import Link from 'next/link';
import { ServiceIcon } from '@/components/icons';
import { Service } from '@/lib/services-data';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  scrollProgress: MotionValue<number>;
  index: number;
}

export function ServiceCard({ service, scrollProgress, index }: ServiceCardProps) {
  // Different parallax speeds for different cards
  const speeds = [20, 30, 25, 35, 22, 28, 32, 26];
  const speed = speeds[index] || 25;

  const y = useTransform(scrollProgress, [0, 1], [0, speed]);
  const opacity = useTransform(scrollProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: service.delay, duration: 0.5 }}
      style={{
        y,
        opacity,
        position: 'absolute',
        top: service.position.top,
        left: service.position.left,
      }}
      className="hidden lg:block" // Only show on large screens
    >
      <Link href={service.href}>
        <motion.div
          whileHover={{ scale: 1.08, y: -8 }}
          whileTap={{ scale: 0.98 }}
          className={cn(
            "w-48 h-56 rounded-2xl p-6",
            "backdrop-blur-md bg-white/5 dark:bg-black/20",
            "border border-white/10 dark:border-white/5",
            "shadow-xl",
            "cursor-pointer group",
            "transition-all duration-300",
            "hover:bg-white/10 dark:hover:bg-black/30",
            "hover:border-brand-primary/50 dark:hover:border-dark-brand-primary/50",
            "hover:shadow-2xl hover:shadow-brand-primary/20 dark:hover:shadow-dark-brand-primary/20"
          )}
        >
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className={cn(
              "w-16 h-16 rounded-xl flex items-center justify-center",
              "bg-gradient-to-br", service.gradient,
              "group-hover:scale-110 transition-transform duration-300",
              "shadow-lg"
            )}>
              <ServiceIcon
                icon={service.icon}
                className="text-white"
                size={32}
              />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-center text-white mb-2 group-hover:text-brand-primary dark:group-hover:text-dark-brand-primary transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-center text-white/70 dark:text-white/60 line-clamp-2">
            {service.description}
          </p>

          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className={cn(
              "absolute inset-0 rounded-2xl blur-xl",
              "bg-gradient-to-br", service.gradient,
              "opacity-20"
            )} />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
