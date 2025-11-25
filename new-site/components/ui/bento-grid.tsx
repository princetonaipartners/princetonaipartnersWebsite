import { ReactNode, useState, useRef, useEffect, useCallback } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";

// Throttle function for performance
function throttle<T extends (...args: any[]) => void>(
  func: T,
  limit: number
): T {
  let inThrottle: boolean;
  return function (this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  } as T;
}

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Throttled mouse position update (60ms = ~16fps, smooth enough for spotlight)
  const throttledSetPosition = useCallback(
    throttle((x: number, y: number) => {
      setMousePosition({ x, y });
    }, 60),
    []
  );

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      throttledSetPosition(e.clientX - rect.left, e.clientY - rect.top);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    card.addEventListener('mousemove', handleMouseMove, { passive: true });
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [throttledSetPosition]);

  return (
    <div
      ref={cardRef}
      key={name}
      onClick={() => router.push(href)}
      className={cn(
        "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl cursor-pointer",
        // Glassmorphic base - light mode
        "bg-white/70 backdrop-blur-md border border-slate-200/50",
        "[box-shadow:0_4px_24px_rgba(0,0,0,0.06)]",
        // Glassmorphic base - dark mode (Gemini "Glass" styling)
        "transform-gpu dark:bg-zinc-900/40 dark:backdrop-blur-md dark:border-white/10",
        "dark:[box-shadow:0_0_0_1px_rgba(255,255,255,0.05),0_4px_24px_rgba(0,0,0,0.3)]",
        // Performance: contain layout for better paint performance
        "[contain:layout_style_paint]",
        // hover effects - specific transitions
        "transition-[transform,box-shadow,background-color,border-color] duration-300 ease-out",
        // Hover - light mode
        "hover:bg-white/90 hover:border-brand-primary/30 hover:shadow-[0_8px_32px_rgba(59,130,246,0.15)]",
        // Hover - dark mode (increases opacity, border visibility)
        "dark:hover:bg-zinc-900/60 dark:hover:border-white/20 dark:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_32px_rgba(59,130,246,0.15)]",
        "hover:-translate-y-1 active:translate-y-0",
        className,
      )}
    >
      {/* Mouse tracking spotlight effect */}
      {isHovering && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(10, 132, 255, 0.08), transparent 40%)`,
          }}
        />
      )}

      {/* Background Animation Container */}
      <div className="pointer-events-none absolute inset-0 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
        {background}
      </div>

      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60 dark:to-dark-bg-card/60 opacity-0 group-hover:opacity-40 transition-opacity duration-500" />

      {/* Content Container */}
      <div className="relative z-10 flex transform-gpu flex-col gap-3 p-6 transition-all duration-500 group-hover:-translate-y-4">
        {/* Icon + Title Row */}
        <div className="flex items-center gap-4">
          <Icon className="h-12 w-12 flex-shrink-0 transform-gpu text-brand-primary dark:text-dark-brand-primary transition-all duration-500 ease-out group-hover:scale-105 drop-shadow-lg" />
          <h3 className="relative text-3xl font-bold transition-all duration-500 text-gray-800 dark:text-blue-100 group-hover:text-blue-600 dark:group-hover:text-white group-hover:drop-shadow-[0_0_20px_rgba(37,99,235,0.5)] dark:group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] whitespace-nowrap">
            {name}
            {/* Gradient underline on hover */}
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 group-hover:w-full" />
          </h3>
        </div>
        {/* Description */}
        <p className="text-base leading-relaxed text-text-secondary dark:text-dark-text-secondary transition-all duration-300 group-hover:text-text-primary dark:group-hover:text-dark-text-secondary">
          {description}
        </p>
      </div>

      {/* Shimmer Button - bottom right corner, appears on hover */}
      <div className="absolute bottom-4 right-4 z-20 opacity-0 translate-y-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0">
        <ShimmerButton
          shimmerColor="#ffffff"
          shimmerSize="0.05em"
          borderRadius="12px"
          shimmerDuration="2s"
          background="linear-gradient(135deg, rgba(10, 132, 255, 0.9), rgba(0, 96, 206, 0.9))"
          className="text-sm px-4 py-2 font-semibold shadow-lg hover:shadow-xl"
          onClick={(e) => {
            e.stopPropagation();
            router.push(href);
          }}
        >
          {cta}
        </ShimmerButton>
      </div>

      {/* Hover Overlay with subtle glow */}
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-brand-primary/[.05] group-hover:to-transparent dark:group-hover:from-dark-brand-primary/10 dark:group-hover:to-transparent" />

      {/* Spotlight effect on hover */}
      <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r from-transparent via-brand-primary/10 to-transparent blur-xl" />
    </div>
  );
};

export { BentoCard, BentoGrid };
