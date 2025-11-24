'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface FloatingShapeProps {
  position: [number, number, number];
  color: string;
  speed?: number;
}

function FloatingBox({ position, color, speed = 1 }: FloatingShapeProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.01 * speed;
    meshRef.current.rotation.y += 0.01 * speed;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function FloatingSphere({ position, color, speed = 1 }: FloatingShapeProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * speed) * 0.4;
    meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.2;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export function FloatingShapes() {
  return (
    <>
      <FloatingBox position={[-2, 1, 0]} color="#0A84FF" speed={0.8} />
      <FloatingSphere position={[2, -1, -1]} color="#0060CE" speed={1.2} />
      <FloatingBox position={[1, 2, -2]} color="#E5F2FF" speed={1} />
      <FloatingSphere position={[-1.5, -1.5, -1]} color="#0A84FF" speed={0.9} />
    </>
  );
}
