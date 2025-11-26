'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { cn } from '@/lib/utils';

interface CyberneticGridShaderProps {
  className?: string;
}

export function CyberneticGridShader({ className }: CyberneticGridShaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Renderer, Scene, Camera, Clock
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const clock = new THREE.Clock();

    // GLSL Shaders
    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform vec2 iMouse;

      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }

      void main() {
        // Normalize coords around center
        vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
        vec2 mouse = (iMouse - 0.5 * iResolution.xy) / iResolution.y;

        float t = iTime * 0.15;
        float mouseDist = length(uv - mouse);

        // Warp effect around mouse (reduced intensity)
        float warp = sin(mouseDist * 15.0 - t * 3.0) * 0.06;
        warp *= smoothstep(0.5, 0.0, mouseDist);
        uv += warp;

        // Grid lines
        vec2 gridUv = abs(fract(uv * 8.0) - 0.5);
        float line = pow(1.0 - min(gridUv.x, gridUv.y), 40.0);

        // Brand blue color (#0A84FF = rgb(10, 132, 255))
        vec3 gridColor = vec3(0.04, 0.52, 1.0);

        // Base grid with subtle pulse
        vec3 color = gridColor * line * (0.3 + sin(t * 1.5) * 0.1);

        // Energy pulses along grid (reduced)
        float energy = sin(uv.x * 15.0 + t * 4.0) * sin(uv.y * 15.0 + t * 2.5);
        energy = smoothstep(0.85, 1.0, energy);
        color += vec3(0.6, 0.1, 0.9) * energy * line * 0.5;

        // Glow around mouse (subtle)
        float glow = smoothstep(0.15, 0.0, mouseDist);
        color += gridColor * glow * 0.3;

        // Subtle noise grain
        color += random(uv + t * 0.1) * 0.02;

        // Fade at edges for smoother integration (extended coverage)
        float edgeFade = smoothstep(0.0, 0.4, 0.8 - abs(uv.x)) * smoothstep(0.0, 0.4, 0.8 - abs(uv.y));
        color *= edgeFade * 0.85;

        // Dark background with grid overlay
        vec3 bgColor = vec3(0.035, 0.035, 0.043); // zinc-950
        color = bgColor + color;

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Uniforms, Material, Mesh
    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2() },
      iMouse: { value: new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2) },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Resize handler
    const onResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      uniforms.iResolution.value.set(width, height);
    };
    window.addEventListener('resize', onResize);
    onResize();

    // Mouse handler
    const onMouseMove = (e: MouseEvent) => {
      uniforms.iMouse.value.set(e.clientX, container.clientHeight - e.clientY);
    };
    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    renderer.setAnimationLoop(() => {
      uniforms.iTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    });

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      renderer.setAnimationLoop(null);

      const canvas = renderer.domElement;
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }

      material.dispose();
      geometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn('fixed inset-0 -z-10 pointer-events-none', className)}
      aria-hidden="true"
    />
  );
}

export default CyberneticGridShader;
