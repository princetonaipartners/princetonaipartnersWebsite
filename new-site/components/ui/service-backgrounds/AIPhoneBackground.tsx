import { AIPhoneTextLoop } from './demos/AIPhoneTextLoop';

export function AIPhoneBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Subtle background elements */}
      {/* Circular pulse rings - very subtle */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 dark:opacity-5">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border-2 border-brand-primary/20 dark:border-dark-brand-primary/30 animate-ping"
            style={{
              width: `${(i + 1) * 150}px`,
              height: `${(i + 1) * 150}px`,
              animationDelay: `${i * 1}s`,
              animationDuration: `${5 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Floating particles - very subtle */}
      <div className="absolute inset-0 opacity-5 dark:opacity-3">
        {[...Array(8)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-brand-primary/40 dark:bg-brand-primary/50 rounded-full animate-float"
            style={{
              left: `${(i * 12 + 8) % 85}%`,
              top: `${(i * 15 + 10) % 80}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${4 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* Main Feature - AI Phone Text Loop */}
      <AIPhoneTextLoop />
    </div>
  );
}
