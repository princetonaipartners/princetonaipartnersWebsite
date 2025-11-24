import { BespokeProcessFlow } from './demos/BespokeProcessFlow';

// Pre-calculate orbit positions to avoid hydration mismatch
const ORBIT_POSITIONS = [...Array(6)].map((_, i) => ({
  x: Math.round(Math.cos((i * Math.PI) / 3) * 80 * 100) / 100,
  y: Math.round(Math.sin((i * Math.PI) / 3) * 80 * 100) / 100,
}));

export function BespokeSoftwareBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Subtle background geometric shapes - more subdued to not compete with demo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 dark:opacity-10">
        {/* Central morphing shape */}
        <div className="relative w-40 h-40">
          {/* Rotating hexagon */}
          <div className="absolute inset-0 animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon
                points="50,5 90,27 90,73 50,95 10,73 10,27"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-brand-primary/30 dark:text-dark-brand-primary/40"
              />
            </svg>
          </div>

          {/* Counter-rotating triangle */}
          <div
            className="absolute inset-0 animate-spin-slow"
            style={{ animationDirection: 'reverse', animationDelay: '0.5s' }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon
                points="50,15 80,70 20,70"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-brand-secondary/30 dark:text-brand-secondary/40"
              />
            </svg>
          </div>

          {/* Pulsing circle in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-8 h-8 rounded-full bg-brand-primary/20 dark:bg-dark-brand-primary/30 animate-ping"
              style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
            />
          </div>
        </div>

        {/* Orbiting particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-orbit"
            style={{
              animationDelay: `${i * 0.5}s`,
              animationDuration: '6s',
              willChange: "transform",
              transform: "translateZ(0)",
            }}
          >
            <div
              className="w-3 h-3 bg-gradient-to-br from-brand-primary to-brand-secondary dark:from-dark-brand-primary dark:to-brand-secondary rounded-full"
              style={{
                transform: `translate(${ORBIT_POSITIONS[i].x}px, ${ORBIT_POSITIONS[i].y}px) translateZ(0)`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Floating geometric fragments - reduced */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float opacity-30"
          style={{
            left: `${(i * 20 + 5) % 85}%`,
            top: `${(i * 25 + 10) % 75}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${5 + (i % 3)}s`,
            willChange: "transform",
            transform: "translateZ(0)",
          }}
        >
          {i % 3 === 0 ? (
            <div className="w-2 h-2 border-2 border-brand-primary/40 dark:border-dark-brand-primary/50 rotate-45" />
          ) : i % 3 === 1 ? (
            <div className="w-2 h-2 border-2 border-brand-secondary/40 dark:border-brand-secondary/50 rounded-full" />
          ) : (
            <div className="w-2 h-2 bg-brand-primary/30 dark:bg-dark-brand-primary/40" />
          )}
        </div>
      ))}

      {/* Interactive Process Flow - Main Feature */}
      <BespokeProcessFlow />
    </div>
  );
}
