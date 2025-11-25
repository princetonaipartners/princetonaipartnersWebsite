"use client";

export function PageBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base background - zinc-50 light, zinc-900 dark */}
      <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-900" />

      {/* ============================================
          HERO ZONE: Top-right Aurora flow
          ============================================ */}

      {/* Primary Aurora continuation - Top-right glow */}
      <div
        className="absolute -top-[10%] -right-[10%] w-[70%] h-[60%] rounded-full blur-[100px] opacity-40 dark:opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(10, 132, 255, 0.4) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%)',
        }}
      />

      {/* Secondary purple accent - Top-right */}
      <div
        className="absolute top-[5%] right-[5%] w-[40%] h-[35%] rounded-full blur-[80px] opacity-30 dark:opacity-25"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
        }}
      />

      {/* ============================================
          BENTO ZONE: Center flow continuation
          ============================================ */}

      {/* Glow continuation - Flows diagonally from hero into bento area */}
      <div
        className="absolute top-[40%] left-[10%] w-[60%] h-[50%] rounded-full blur-[120px] opacity-25 dark:opacity-20"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at center, rgba(59, 130, 246, 0.25) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 80%)',
        }}
      />

      {/* Center ambient glow - Behind bento grid */}
      <div
        className="absolute top-[55%] left-1/2 -translate-x-1/2 w-[80%] h-[35%] rounded-full blur-[100px] opacity-20 dark:opacity-15"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
        }}
      />

      {/* ============================================
          CTA ZONE: Bottom atmosphere + spotlight prep
          ============================================ */}

      {/* CTA left accent - Purple glow */}
      <div
        className="absolute bottom-[5%] -left-[5%] w-[45%] h-[40%] rounded-full blur-[100px] opacity-25 dark:opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.3) 0%, rgba(168, 85, 247, 0.15) 50%, transparent 70%)',
        }}
      />

      {/* CTA right accent - Blue glow */}
      <div
        className="absolute bottom-[8%] -right-[5%] w-[40%] h-[35%] rounded-full blur-[100px] opacity-20 dark:opacity-15"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.25) 0%, transparent 70%)',
        }}
      />

      {/* CTA center spotlight base - Subtle warm undertone */}
      <div
        className="absolute bottom-[0%] left-1/2 -translate-x-1/2 w-[60%] h-[30%] rounded-full blur-[80px] opacity-15 dark:opacity-12"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)',
        }}
      />

      {/* Noise texture overlay - Prevents gradient banding */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
