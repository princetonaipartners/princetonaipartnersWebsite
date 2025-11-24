export function RAGAgentsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Neural network-style floating particles with connection lines */}
      <div className="absolute inset-0">
        {/* Particles with glow effect */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${(i * 17 + 10) % 90}%`,
              top: `${(i * 23 + 15) % 80}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          >
            <div className="relative">
              {/* Particle glow */}
              <div className="absolute inset-0 w-3 h-3 bg-brand-primary/30 dark:bg-dark-brand-primary/40 rounded-full blur-sm animate-pulse"
                style={{ animationDuration: `${2 + (i % 2)}s` }}
              />
              {/* Particle core */}
              <div className="relative w-2 h-2 bg-brand-primary dark:bg-dark-brand-primary rounded-full shadow-lg" />
            </div>
          </div>
        ))}

        {/* Connection lines - SVG with enhanced styling */}
        <svg className="absolute inset-0 w-full h-full opacity-30 dark:opacity-40">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0A84FF" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#0060CE" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0A84FF" stopOpacity="0.4" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {[...Array(10)].map((_, i) => (
            <line
              key={i}
              x1={`${(i * 20 + 10) % 90}%`}
              y1={`${(i * 15 + 20) % 70}%`}
              x2={`${((i + 1) * 25 + 30) % 85}%`}
              y2={`${((i + 1) * 18 + 35) % 75}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              filter="url(#glow)"
              className="animate-pulse"
              style={{
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + (i % 2)}s`,
              }}
            />
          ))}
        </svg>

        {/* Data flow particles along lines */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`flow-${i}`}
            className="absolute w-1 h-1 bg-brand-secondary dark:bg-brand-secondary rounded-full animate-slide-right opacity-60"
            style={{
              left: `${10 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: '3s',
            }}
          />
        ))}
      </div>
    </div>
  );
}
