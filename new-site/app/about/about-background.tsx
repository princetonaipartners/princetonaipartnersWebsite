'use client';

import { Particles } from '@/components/ui/particles';

export function AboutBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Radial gradient base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,159,255,0.08)_0%,transparent_50%)]" />

      {/* Particles effect - interactive on mouse move */}
      <Particles
        className="absolute inset-0"
        quantity={80}
        staticity={30}
        ease={80}
        size={0.5}
        color="#3B9FFF"
        vx={0}
        vy={0}
      />

      {/* Secondary particles layer - white/subtle */}
      <Particles
        className="absolute inset-0"
        quantity={40}
        staticity={50}
        ease={100}
        size={0.3}
        color="#ffffff"
        vx={0}
        vy={0}
      />

      {/* Ambient glow spots */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[100px]" />

      {/* Top fade for header */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark-bg-primary via-dark-bg-primary/80 to-transparent z-[1]" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg-primary to-transparent" />
    </div>
  );
}
