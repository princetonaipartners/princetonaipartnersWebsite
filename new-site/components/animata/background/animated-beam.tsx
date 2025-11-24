"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

function Beam({ index }: { index: number }) {
  const flag = index % 8 === 0;
  return (
    <div
      className={cn("h-full animate-meteor", {
        "[--duration:7s]": flag,
        "[--duration:11s]": !flag,
      })}
      style={{
        width: "6px",
        transform: "translateY(-20%)",
        "--delay": `${index * 0.5}s`,
      } as React.CSSProperties}
    >
      <div
        style={{
          clipPath: "polygon(54% 0, 54% 0, 60% 100%, 40% 100%)",
        }}
        className={cn("w-full", {
          "h-8": flag,
          "h-12": !flag,
        })}
      >
        <div className="h-full w-full bg-gradient-to-b from-brand-primary/30 via-brand-secondary via-75% to-brand-primary/20" />
      </div>
    </div>
  );
}

function useGridCount() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      setCount(Math.ceil(rect.width / 40));
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return { count, containerRef };
}

function Background() {
  const { count, containerRef } = useGridCount();

  return (
    <div
      ref={containerRef}
      className="-z-1 absolute inset-0 flex h-full w-full flex-row justify-between bg-gradient-to-b from-background-primary to-white"
    >
      <div
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%,rgba(10,132,255,0.15) 0%,rgba(10,132,255,0.05) 50%,rgba(10,132,255,0) 100%)",
        }}
        className="absolute inset-0 top-1/2 h-full w-full rounded-full opacity-60"
      />
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="relative h-full w-px rotate-12 bg-brand-primary bg-opacity-5">
          {(1 + i) % 4 === 0 && <Beam index={i + 1} />}
        </div>
      ))}
    </div>
  );
}

export default function AnimatedBeam({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("storybook-fix relative w-full overflow-hidden", className)}>
      <Background />
      <div className="relative h-full w-full">{children}</div>
    </div>
  );
}
