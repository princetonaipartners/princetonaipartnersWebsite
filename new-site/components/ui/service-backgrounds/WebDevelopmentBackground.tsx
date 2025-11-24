import { WebDevCarousel } from './demos/WebDevCarousel';

export function WebDevelopmentBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient waves background */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
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
