# Animation Guidelines - Princeton AI Partners

> **AI-Readable Reference**: Standards for implementing animations using Framer Motion, Tailwind CSS, and CSS transitions.

---

## Animation Philosophy

**Core Principles**:
1. **Subtle over showy**: Enhance, don't distract
2. **Purposeful**: Every animation should serve a function
3. **Performance-first**: 60fps or don't ship
4. **Accessible**: Respect `prefers-reduced-motion`
5. **Consistent**: Use predefined variants

---

## Animation Libraries

### Primary: Framer Motion
- Complex animations
- Scroll-triggered effects
- Page transitions
- Gesture-based interactions

### Secondary: Tailwind CSS
- Simple hover effects
- Transitions
- Utility animations

### Tertiary: CSS Keyframes
- Infinite loops (floating, rotating)
- Simple effects

---

## Duration & Easing Standards

### Duration Guidelines

```typescript
// lib/animations.ts

export const DURATION = {
  instant: 0.15,      // Micro-interactions (hover, focus)
  fast: 0.3,          // Standard transitions (button hover, dropdown)
  normal: 0.6,        // Entrances, exits
  slow: 1.0,          // Hero animations, page transitions
  verySlow: 1.5,      // Special effects (parallax, 3D)
} as const;
```

### Easing Curves

```typescript
export const EASING = {
  // Smooth ease-out (default)
  smooth: [0.22, 1, 0.36, 1],

  // Sharp exit
  sharp: [0.4, 0, 1, 1],

  // Playful bounce
  bounce: [0.68, -0.55, 0.265, 1.55],

  // Elastic spring
  elastic: [0.68, -0.6, 0.32, 1.6],
} as const;
```

---

## Framer Motion Variants

### Fade Up (Scroll-Triggered)

```typescript
// lib/animations.ts

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASING.smooth,
    },
  },
};

// Usage:
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-100px' }}
  variants={fadeUp}
>
  Content appears as you scroll
</motion.div>
```

### Stagger Children

```typescript
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,    // 100ms delay between children
      delayChildren: 0.2,       // Wait 200ms before starting
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASING.smooth,
    },
  },
};

// Usage:
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={staggerContainer}
>
  {items.map(item => (
    <motion.div key={item.id} variants={staggerItem}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Scale In

```typescript
export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION.fast,
      ease: EASING.smooth,
    },
  },
};

// Usage: Modals, dropdowns, tooltips
<motion.div variants={scaleIn}>
  Modal content
</motion.div>
```

### Slide In

```typescript
export const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASING.smooth,
    },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASING.smooth,
    },
  },
};
```

---

## Page Transitions

```typescript
// app/template.tsx

'use client';

import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
```

---

## Hover & Interaction Effects

### Card Hover

```typescript
// Using Framer Motion
<motion.div
  whileHover={{
    y: -8,
    transition: { duration: 0.3, ease: EASING.smooth }
  }}
  className="card"
>
  Card content
</motion.div>

// OR using Tailwind CSS (simpler)
<div className="transition-all duration-300 hover:-translate-y-2 hover:shadow-brand-lg">
  Card content
</div>
```

### Button Hover

```typescript
// components/ui/button.tsx (Framer Motion)
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
  className="button"
>
  Click me
</motion.button>

// OR Tailwind CSS (simpler, preferred for buttons)
<button className="transition-all duration-300 hover:scale-105 active:scale-100 hover:shadow-brand-lg">
  Click me
</button>
```

### Magnetic Button Effect

```typescript
'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="button"
    >
      {children}
    </motion.button>
  );
}
```

---

## Scroll Animations

### Scroll-Triggered Fade Up

```typescript
import { motion, useScroll, useTransform } from 'framer-motion';

export function ScrollSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeUp}
    >
      {children}
    </motion.section>
  );
}
```

### Parallax Effect

```typescript
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function ParallaxSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}
```

---

## 3D Animations (React Three Fiber)

### Floating Shapes

```typescript
// components/features/hero/Hero3DBackground.tsx
'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape() {
  return (
    <Float
      speed={1.5}           // Animation speed
      rotationIntensity={0.5}   // Rotation intensity
      floatIntensity={0.5}      // Float intensity
    >
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial
          color="#0A84FF"
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>
    </Float>
  );
}

export function Hero3DBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingShape />
      </Canvas>
    </div>
  );
}
```

---

## Infinite Animations (CSS)

### Float

```typescript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
};

// Usage:
<div className="animate-float">
  Floating element
</div>
```

### Pulse Glow

```typescript
// Custom animation for glowing effects
export const keyframes = {
  pulseGlow: {
    '0%, 100%': {
      boxShadow: '0 0 20px rgba(10, 132, 255, 0.5)',
    },
    '50%': {
      boxShadow: '0 0 40px rgba(10, 132, 255, 0.8)',
    },
  },
};

// Tailwind config
animation: {
  'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
}
```

---

## Accessibility: Reduced Motion

### Respect User Preferences

```typescript
// lib/animations.ts

export function getReducedMotionVariants<T extends object>(
  variants: T
): T | {} {
  if (typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return {}; // No animation
  }
  return variants;
}

// Usage:
import { fadeUp, getReducedMotionVariants } from '@/lib/animations';

<motion.div variants={getReducedMotionVariants(fadeUp)}>
  Content
</motion.div>
```

### CSS Approach

```css
/* Disable all animations for reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## Performance Optimization

### Use `will-change` Sparingly

```typescript
// ✅ GOOD: Only during animation
<motion.div
  whileHover={{ scale: 1.05 }}
  style={{ willChange: 'transform' }}
>
  Content
</motion.div>

// ❌ BAD: Always set
<div style={{ willChange: 'transform, opacity' }}>
  Content
</div>
```

### Optimize Re-renders

```typescript
// Use useMemo for animation variants
const variants = useMemo(() => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}), []);

<motion.div variants={variants}>
  Content
</motion.div>
```

### Lazy Load Heavy Animations

```typescript
import dynamic from 'next/dynamic';

// Don't load 3D on server or until needed
const Hero3DBackground = dynamic(
  () => import('@/components/features/hero/Hero3DBackground'),
  { ssr: false }
);
```

---

## Animation Testing Checklist

Before shipping animations:

- [ ] **60fps**: Use Chrome DevTools Performance tab
- [ ] **Mobile**: Test on real devices, not just emulators
- [ ] **Reduced motion**: Verify `prefers-reduced-motion` works
- [ ] **Layout shift**: No cumulative layout shift (CLS)
- [ ] **Purpose**: Animation enhances UX, doesn't distract
- [ ] **Timing**: Duration feels natural, not too fast/slow
- [ ] **Consistency**: Uses predefined variants from this guide

---

## Common Animation Patterns

### Homepage Hero

```typescript
<motion.section
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.2 }}
>
  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4, ease: EASING.smooth }}
  >
    Build Anything. Fast.
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.6 }}
  >
    Description
  </motion.p>

  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.8 }}
  >
    <Button>Get Started</Button>
  </motion.div>
</motion.section>
```

### Feature Grid

```typescript
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-100px' }}
  variants={staggerContainer}
  className="grid grid-cols-1 md:grid-cols-3 gap-8"
>
  {features.map(feature => (
    <motion.div
      key={feature.id}
      variants={staggerItem}
      whileHover={{ y: -8 }}
      className="card"
    >
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </motion.div>
  ))}
</motion.div>
```

### Modal Entrance

```typescript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  className="fixed inset-0 bg-black/50"
>
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95, y: 20 }}
    transition={{ duration: 0.2 }}
    className="modal-content"
  >
    Modal content
  </motion.div>
</motion.div>
```

---

## Anti-Patterns to Avoid

### ❌ Don't: Animate Everything

```typescript
// BAD: Too much animation
<motion.div animate={{ opacity: [0, 1, 0, 1, 0, 1] }}>
  <motion.h1 animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}>
    <motion.span animate={{ color: ['red', 'blue', 'green'] }}>
      STOP THIS
    </motion.span>
  </motion.h1>
</motion.div>

// GOOD: Subtle, purposeful
<motion.div variants={fadeUp}>
  <h1>Clear, Simple Headline</h1>
</motion.div>
```

### ❌ Don't: Long Durations

```typescript
// BAD: User waits 3 seconds
<motion.div
  animate={{ opacity: 1 }}
  transition={{ duration: 3 }}
>

// GOOD: Quick, snappy
<motion.div
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
```

### ❌ Don't: Ignore Performance

```typescript
// BAD: Animating expensive properties
<motion.div
  animate={{
    width: '100%',     // Triggers layout
    height: '500px',   // Triggers layout
    background: 'blue' // Triggers paint
  }}
>

// GOOD: GPU-accelerated properties only
<motion.div
  animate={{
    transform: 'scale(1.05)',  // GPU
    opacity: 1                  // GPU
  }}
>
```

---

**Last Updated**: 2025-11-04
**Status**: Complete - Follow these patterns for all animations
**Performance Target**: 60fps on all animations, < 0.1 CLS
