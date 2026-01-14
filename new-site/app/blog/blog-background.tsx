'use client';

import { ShootingStars } from '@/components/ui/shooting-stars';

export function BlogBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,159,255,0.08)_0%,rgba(0,0,0,0)_70%)]" />

      {/* Static starfield */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.8), transparent),
            radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.9), transparent),
            radial-gradient(1px 1px at 50px 160px, rgba(255,255,255,0.6), transparent),
            radial-gradient(2px 2px at 90px 40px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.7), transparent),
            radial-gradient(2px 2px at 160px 120px, rgba(255,255,255,0.6), transparent),
            radial-gradient(1px 1px at 70px 100px, rgba(59,159,255,0.8), transparent),
            radial-gradient(2px 2px at 110px 150px, rgba(59,159,255,0.6), transparent),
            radial-gradient(1px 1px at 180px 60px, rgba(59,159,255,0.7), transparent)
          `,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />

      {/* Multiple shooting star layers with brand colors */}
      <ShootingStars
        starColor="#3B9FFF"
        trailColor="#0A84FF"
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#22D3EE"
        trailColor="#0891B2"
        minSpeed={10}
        maxSpeed={25}
        minDelay={2000}
        maxDelay={4000}
      />
      <ShootingStars
        starColor="#818CF8"
        trailColor="#6366F1"
        minSpeed={12}
        maxSpeed={30}
        minDelay={1500}
        maxDelay={3500}
      />

      {/* Top fade for header */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark-bg-primary via-dark-bg-primary/80 to-transparent z-[1]" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-bg-primary to-transparent" />
    </div>
  );
}
