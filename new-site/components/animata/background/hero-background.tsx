"use client";
import { cn } from "@/lib/utils";
import AnimatedBeam from "./animated-beam";
import BlurryBlob from "./blurry-blob";
import MovingGradient from "./moving-gradient";

interface HeroBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * HeroBackground - Orchestrates multiple animated background layers
 * Combines: Animated Beams + Blurry Morphing Blobs + Moving Gradient
 * All customized with Princeton AI brand colors
 */
export default function HeroBackground({ children, className }: HeroBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Layer 1: Moving Gradient Base (brand colors) */}
      <MovingGradient
        gradientClassName="bg-gradient-to-r from-brand-primary/10 via-accent-purple/10 to-accent-pink/10 bg-[length:300%_auto]"
        className="absolute inset-0"
      >
        {/* Layer 2: Animated Beams */}
        <AnimatedBeam className="absolute inset-0">
          {/* Layer 3: Morphing Blobs */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <BlurryBlob
              firstBlobColor="bg-brand-primary/30"
              secondBlobColor="bg-accent-purple/30"
              className="absolute left-1/4 top-1/4"
            />
            <BlurryBlob
              firstBlobColor="bg-accent-pink/25"
              secondBlobColor="bg-brand-secondary/25"
              className="absolute right-1/4 bottom-1/4"
            />
          </div>
        </AnimatedBeam>
      </MovingGradient>

      {/* Content Layer - elevated above all backgrounds */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
