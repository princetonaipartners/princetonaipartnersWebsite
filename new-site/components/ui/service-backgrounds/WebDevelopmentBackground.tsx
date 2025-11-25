import { WebDevCarousel } from './demos/WebDevCarousel';

export function WebDevelopmentBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ contain: 'layout style paint' }}>
      {/* Top gradient fade for header safe zone */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white dark:from-dark-bg-card to-transparent pointer-events-none z-10" />

      {/* Animated gradient waves background */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20" style={{ willChange: 'background-position' }}>
        <div
          className="absolute inset-0 animate-wave"
          style={{
            background: 'linear-gradient(60deg, rgba(10, 132, 255, 0.15) 0%, transparent 50%, rgba(59, 159, 255, 0.15) 100%)',
            backgroundSize: '200% 200%',
          }}
        />
        <div
          className="absolute inset-0 animate-wave-slow"
          style={{
            background: 'linear-gradient(120deg, transparent 0%, rgba(10, 132, 255, 0.1) 50%, transparent 100%)',
            backgroundSize: '200% 200%',
            animationDelay: '1s',
          }}
        />
        <div
          className="absolute inset-0 animate-wave"
          style={{
            background: 'linear-gradient(180deg, rgba(59, 159, 255, 0.12) 0%, transparent 50%, rgba(10, 132, 255, 0.12) 100%)',
            backgroundSize: '200% 200%',
            animationDelay: '2s',
          }}
        />
      </div>

      {/* Main Feature - Carousel Showcase */}
      <WebDevCarousel />
    </div>
  );
}
