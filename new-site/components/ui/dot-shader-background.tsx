'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// GLSL Shader for animated dot grid with mouse interaction
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uMouseIntensity;
  uniform vec3 uDotColor;
  uniform vec3 uBgColor;
  uniform float uGridSize;
  uniform float uDotSize;
  uniform float uDotOpacity;

  varying vec2 vUv;

  float circle(vec2 st, float radius) {
    float d = length(st);
    return 1.0 - smoothstep(radius - 0.01, radius + 0.01, d);
  }

  void main() {
    vec2 st = vUv * uGridSize;
    vec2 grid = fract(st) - 0.5;

    // Mouse influence
    vec2 mousePos = uMouse * uGridSize;
    vec2 cellCenter = floor(st) + 0.5;
    float dist = distance(cellCenter, mousePos);

    // Pulsing effect based on distance from mouse
    float mouseInfluence = smoothstep(15.0, 0.0, dist) * uMouseIntensity;

    // Wave animation
    float wave = sin(uTime * 2.0 + dist * 0.3) * 0.5 + 0.5;

    // Dynamic dot size
    float dynamicSize = uDotSize * (1.0 + mouseInfluence * 0.8 + wave * 0.1);

    // Create dot
    float dot = circle(grid, dynamicSize);

    // Opacity with mouse influence
    float opacity = uDotOpacity * (0.3 + mouseInfluence * 0.7 + wave * 0.2);

    // Mix colors
    vec3 color = mix(uBgColor, uDotColor, dot * opacity);

    gl_FragColor = vec4(color, 1.0);
  }
`;

interface DotShaderMaterialProps {
  dotColor?: THREE.Color;
  bgColor?: THREE.Color;
  gridSize?: number;
  dotSize?: number;
  dotOpacity?: number;
}

function DotShaderMaterial({
  dotColor = new THREE.Color('#0A84FF'),
  bgColor = new THREE.Color('#09090b'),
  gridSize = 80,
  dotSize = 0.08,
  dotOpacity = 0.6,
}: DotShaderMaterialProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size, viewport } = useThree();
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [mouseIntensity, setMouseIntensity] = useState(0);
  const targetIntensity = useRef(0);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX / window.innerWidth,
        y: 1 - e.clientY / window.innerHeight,
      });
      targetIntensity.current = 1;
    };

    const handleMouseLeave = () => {
      targetIntensity.current = 0;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Create shader material
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uMouseIntensity: { value: 0 },
      uDotColor: { value: dotColor },
      uBgColor: { value: bgColor },
      uGridSize: { value: gridSize },
      uDotSize: { value: dotSize },
      uDotOpacity: { value: dotOpacity },
    }),
    [dotColor, bgColor, gridSize, dotSize, dotOpacity, size.width, size.height]
  );

  // Animation loop
  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = state.clock.elapsedTime;
      material.uniforms.uMouse.value.set(mouse.x, mouse.y);

      // Smooth intensity transition
      const currentIntensity = material.uniforms.uMouseIntensity.value;
      material.uniforms.uMouseIntensity.value +=
        (targetIntensity.current - currentIntensity) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

interface DotShaderBackgroundProps {
  className?: string;
  dotColor?: string;
  bgColor?: string;
  gridSize?: number;
  dotSize?: number;
  dotOpacity?: number;
}

export function DotShaderBackground({
  className = '',
  dotColor = '#0A84FF',
  bgColor = '#09090b',
  gridSize = 80,
  dotSize = 0.08,
  dotOpacity = 0.6,
}: DotShaderBackgroundProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={className}
        style={{ backgroundColor: bgColor, width: '100%', height: '100%' }}
      />
    );
  }

  return (
    <div className={className} style={{ width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ antialias: true, alpha: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <DotShaderMaterial
          dotColor={new THREE.Color(dotColor)}
          bgColor={new THREE.Color(bgColor)}
          gridSize={gridSize}
          dotSize={dotSize}
          dotOpacity={dotOpacity}
        />
      </Canvas>
    </div>
  );
}

export default DotShaderBackground;
