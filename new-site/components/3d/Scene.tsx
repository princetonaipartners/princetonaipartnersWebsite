'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

interface SceneProps {
  children: React.ReactNode;
  className?: string;
}

export function Scene({ children, className }: SceneProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
