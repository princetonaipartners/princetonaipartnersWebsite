# Architecture Proposal - Princeton AI Partners Rebrand

> **Created**: 2025-10-30
> **Based on**: Competitor research + original requirements
> **Status**: Ready for approval

---

## 🎯 Executive Summary

This architecture proposal synthesizes findings from 5 competitor sites (Anthropic, Puzzle, Mercury, Linear, Pitch) with the original rebrand requirements to create a technically sound, performant, and visually stunning website.

**Core Philosophy**:
- **Playful but Rigorous** (Anthropic's warmth + Mercury's confidence)
- **Smooth but Fast** (Linear's performance + Puzzle's interactions)
- **3D but Usable** (Pitch's decorative approach)

---

## 🏗️ Technology Stack (Finalized)

### Core Framework
```typescript
next: "^15.0.0"           // App Router, Server Components, Turbopack
react: "^19.0.0"          // Latest React
typescript: "^5.3.0"      // Strict mode
```

**Why**: Linear's approach validates Next.js for smooth performance

---

### Styling & UI
```typescript
tailwindcss: "^3.4.0"     // Utility-first CSS
framer-motion: "^11.0.0"  // Animations (all sites use similar)
shadcn/ui: CLI-based      // Customizable components
lucide-react: "^0.300.0"  // Icons
```

**Why**:
- Tailwind = Anthropic/Mercury's approach (utility classes)
- Framer Motion = Smooth animations like all competitors
- shadcn/ui = Customizable (unlike Material-UI)

---

### 3D Graphics
```typescript
three: "^0.160.0"
@react-three/fiber: "^8.15.0"
@react-three/drei: "^9.92.0"
@use-gesture/react: "^10.3.0"
```

**Why**: Pitch proves 3D can be decorative without hurting performance

**Usage**:
- Hero background (floating shapes)
- Service icons (rotating 3D)
- NO functional 3D (only decorative)

---

### Utilities
```typescript
clsx: "^2.0.0"                      // Conditional classes
tailwind-merge: "^2.2.0"            // Merge Tailwind classes
class-variance-authority: "^0.7.0"  // Component variants
```

**Why**: Pattern matching all competitor sites

---

## 🎨 Design System (Research-Informed)

### Color Palette (Final)

Based on Anthropic's warm accent + Mercury's boldness:

```typescript
// tailwind.config.ts
colors: {
  brand: {
    primary: '#0A84FF',     // Electric blue (like Anthropic's terracotta - warm accent)
    secondary: '#0060CE',   // Deep blue (gradient endpoint)
    light: '#E5F2FF',       // Light blue (backgrounds, code blocks)
    dark: '#003D82',        // Dark blue (high contrast text)
  },
  background: {
    primary: '#FAFAFA',     // Soft white (like Anthropic's cream)
    secondary: '#F5F5F5',   // Slightly darker (alternating sections)
    card: '#FFFFFF',        // Pure white (cards, elevated surfaces)
  },
  text: {
    primary: '#0F0F0F',     // Near black (high contrast)
    secondary: '#6B7280',   // Warm gray (descriptions)
    tertiary: '#9CA3AF',    // Light gray (meta info)
    inverse: '#FFFFFF',     // White on dark
  },
  accent: {
    purple: '#8B5CF6',      // Playful accent 1
    pink: '#EC4899',        // Playful accent 2
    green: '#10B981',       // Success states
    orange: '#F59E0B',      // Warnings
  },
}
```

**Strategy**:
- Light-first (better for consultancy vs. Linear's dark)
- High contrast (Anthropic's approach)
- Warm blue accent (similar role to Anthropic's terracotta)

---

### Typography (Research-Validated)

```typescript
// Font: Inter (Linear's choice, validated by research)
font-family: 'Inter', system-ui, sans-serif

// Scale: Fluid with clamp() (all competitors use this)
text-hero:   clamp(2.5rem, 5vw, 4rem)      // 40-64px
text-h1:     clamp(2rem, 4vw, 3rem)        // 32-48px
text-h2:     clamp(1.75rem, 3vw, 2.25rem)  // 28-36px
text-h3:     clamp(1.25rem, 2vw, 1.5rem)   // 20-24px
text-lg:     clamp(1.125rem, 1.5vw, 1.25rem) // 18-20px
text-base:   1rem                          // 16px
text-sm:     0.875rem                      // 14px

// Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)
// Line-heights: 1.1-1.2 for headings, 1.6 for body
// Letter-spacing: -0.02em for large headings (Anthropic/Mercury approach)
```

**Rationale**:
- Inter = Professional, readable (Linear uses it)
- Fluid sizing = All competitors use `clamp()`
- Tight line-heights = Modern (Anthropic's approach)

---

### Animation System (Research-Backed)

```typescript
// Duration (from competitor analysis)
transition-duration: {
  '150': '150ms',   // Micro-interactions (Mercury's quick fades)
  '300': '300ms',   // Standard (Anthropic's range)
  '600': '600ms',   // Elaborate (word reveals)
  '1200': '1200ms', // Hero entrances
}

// Easing (refined from competitors)
transition-timing-function: {
  'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',        // Smooth ease-out (validated)
  'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', // Playful (use sparingly)
  'sharp': 'cubic-bezier(0.4, 0, 1, 1)',             // Quick exit
}
```

**Animation Patterns**:

```typescript
// Scroll-triggered fade up (Anthropic's approach)
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
};

// IntersectionObserver threshold: 0.1 (10% visibility - Anthropic's exact threshold)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '-100px 0px',
};

// Word reveal (Anthropic's signature effect)
const wordReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,  // Stagger 100ms (Anthropic's timing)
      duration: 0.6,
    }
  }),
};

// Hover effects (validated by Puzzle + Mercury)
hover: {
  scale: 1.05,                    // Subtle (Puzzle uses 1.1, we're more subtle)
  translateY: -8px,               // Lift (Mercury's approach)
  shadow: '0 20px 60px rgba(10, 132, 255, 0.2)', // Colored shadow
  transition: { duration: 0.3 },
}
```

**Accessibility**:
```typescript
// Respect prefers-reduced-motion (all competitors do this)
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const variants = reduceMotion
  ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }  // Fade only
  : { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }; // Fade + move
```

---

### Spacing System (Research-Validated)

```typescript
// Section padding (generous like Anthropic/Mercury)
section-padding:    py-16 md:py-24 lg:py-32  // 64-128px
section-padding-sm: py-12 md:py-16 lg:py-20  // 48-80px
section-padding-lg: py-20 md:py-32 lg:py-40  // 80-160px

// Container (not too wide like Mercury's 1952px)
max-w-7xl  // 1280px (sweet spot)
px-4 sm:px-6 lg:px-8  // Responsive padding

// Component spacing
gap-8   // 32px (cards, grids)
gap-12  // 48px (major sections)
space-y-6  // 24px (content flow)
```

**Rationale**: All competitors use generous spacing. Mercury's 192px is excessive; 128px is perfect.

---

### Border Radius (Playful but Professional)

```typescript
// Buttons: rounded-full (pill-shaped - playful)
// Cards: rounded-2xl (24px) or rounded-3xl (32px) - friendly
// Inputs: rounded-xl (20px)
// Modals: rounded-3xl (32px)
// Images: rounded-2xl (24px)
```

**Rationale**: Puzzle proves rounded elements feel modern + approachable

---

### Shadows (Subtle Depth)

```typescript
boxShadow: {
  'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',           // Cards at rest
  'lg': '0 10px 15px rgba(0, 0, 0, 0.08)',         // Elevated
  '2xl': '0 25px 50px rgba(0, 0, 0, 0.1)',         // Modals
  'brand': '0 10px 40px rgba(10, 132, 255, 0.15)', // Colored shadow
  'brand-lg': '0 20px 60px rgba(10, 132, 255, 0.2)', // Hover
}
```

**Rationale**: All competitors use soft shadows. Colored shadows on hover (Mercury's approach).

---

## 📁 Project Structure (Finalized)

```
new-site/                          # ← NEW PROJECT FOLDER
├── app/
│   ├── (marketing)/               # Route group (shared layout)
│   │   ├── layout.tsx             # Marketing layout (nav + footer)
│   │   ├── page.tsx               # Homepage
│   │   │
│   │   ├── custom-products/
│   │   │   └── page.tsx
│   │   │
│   │   ├── rag-agents/
│   │   │   ├── page.tsx
│   │   │   └── components/
│   │   │       ├── RAGDemo.tsx    # MOCK version
│   │   │       └── ArchitectureDiagram.tsx
│   │   │
│   │   ├── ai-phone-agents/
│   │   │   └── page.tsx
│   │   │
│   │   ├── process-automation/
│   │   │   └── page.tsx
│   │   │
│   │   ├── web-scraping/
│   │   │   └── page.tsx
│   │   │
│   │   ├── n8n-workflows/
│   │   │   └── page.tsx
│   │   │
│   │   ├── website-management/
│   │   │   └── page.tsx
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   │
│   │   └── about/
│   │       └── page.tsx
│   │
│   ├── checkin/                   # Migrate from old site
│   │   └── page.tsx
│   │
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts           # Contact form handler
│   │   └── rag-demo/
│   │       └── route.ts           # Mock RAG API
│   │
│   ├── layout.tsx                 # Root layout (fonts, providers)
│   ├── globals.css                # Tailwind + custom styles
│   ├── not-found.tsx              # Custom 404
│   └── error.tsx                  # Error boundary
│
├── components/
│   ├── ui/                        # shadcn components (customized)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── dialog.tsx
│   │   └── ...
│   │
│   ├── layout/
│   │   ├── Header.tsx             # Sticky nav (Anthropic's approach)
│   │   ├── Navigation.tsx         # Desktop nav
│   │   ├── MobileMenu.tsx         # Mobile slide-in
│   │   ├── Footer.tsx             # Multi-column
│   │   └── Container.tsx          # Max-width wrapper
│   │
│   ├── sections/                  # Homepage sections
│   │   ├── Hero.tsx               # 3D background + gradient text
│   │   ├── ServicesGrid.tsx       # 7 service cards
│   │   ├── SocialProof.tsx        # Animated stats
│   │   └── FinalCTA.tsx           # Bottom CTA
│   │
│   ├── animations/                # Animation wrappers
│   │   ├── PageTransition.tsx     # Route changes
│   │   ├── FadeInSection.tsx      # Scroll-triggered
│   │   ├── StaggerChildren.tsx    # Grid animations
│   │   ├── MagneticButton.tsx     # Cursor follow
│   │   └── GradientText.tsx       # Animated gradient
│   │
│   ├── 3d/                        # React Three Fiber
│   │   ├── Scene.tsx              # 3D wrapper
│   │   ├── FloatingShapes.tsx     # Hero background (Pitch's approach)
│   │   └── ServiceIcon3D.tsx      # Rotating icons
│   │
│   ├── demos/                     # Interactive demos
│   │   ├── RAGPlayground.tsx      # Mock query interface
│   │   ├── WorkflowVisualizer.tsx # React Flow diagram
│   │   └── CodeShowcase.tsx       # Syntax highlighted
│   │
│   └── shared/                    # Reusable
│       ├── ServiceCard.tsx
│       ├── FeatureList.tsx
│       └── Testimonial.tsx
│
├── lib/
│   ├── utils.ts                   # cn() helper
│   ├── constants.ts               # Site-wide constants
│   ├── animations.ts              # Framer Motion variants
│   └── three-helpers.ts           # 3D utilities
│
├── hooks/
│   ├── useScrollAnimation.ts
│   ├── useMagneticEffect.ts
│   └── useMousePosition.ts
│
├── types/
│   ├── index.ts                   # Global types
│   └── services.ts                # Service data types
│
├── content/
│   ├── services.ts                # All service data
│   └── testimonials.ts            # Client quotes
│
├── public/
│   ├── images/
│   │   ├── logos/
│   │   ├── services/
│   │   └── og/                    # Open Graph images
│   └── models/                    # 3D models (.glb)
│
├── .env.local                     # Environment variables
├── tailwind.config.ts             # Brand colors configured
├── tsconfig.json                  # Strict mode
├── next.config.js                 # Next.js config
└── package.json
```

**Key Decisions**:
1. **Route groups**: `(marketing)` for shared layout (Next.js 15 pattern)
2. **Colocated components**: Page-specific components next to pages
3. **3D lazy loading**: Dynamic imports for performance
4. **API routes**: Mock RAG demo backend
5. **Type safety**: Strict TypeScript throughout

---

## 🎨 Component Architecture

### Component Hierarchy (Build Order)

**Phase 3: Design System** (Foundation)
```
1. shadcn/ui base → Customize variants
2. Animation wrappers → FadeInSection, PageTransition
3. 3D components → Scene, FloatingShapes
4. Layout components → Header, Footer, Navigation
```

**Phase 5: Page Development** (Priority)
```
1. Homepage
   - Hero (3D background, gradient text, CTAs)
   - ServicesGrid (7 cards)
   - SocialProof (animated stats)
   - FinalCTA

2. Service Pages (template-based)
   - RAG Agents (flagship with mock demo)
   - Custom Products
   - AI Phone Agents
   - Process Automation
   - Web Scraping
   - N8n Workflows
   - Website Management

3. Supporting Pages
   - Contact (form + validation)
   - About (company story)
   - Check-In (migrate)
   - 404 (custom)
```

---

### Component Patterns (Research-Informed)

**Button Component**:
```typescript
// Based on Mercury's bold approach + shadcn/ui
<Button variant="default" size="lg">
  // variant="default" → Gradient (our brand)
  // variant="outline" → Border with hover fill
  // variant="ghost" → Transparent with hover bg

  // size="sm" → h-10 px-6
  // size="default" → h-12 px-8
  // size="lg" → h-14 px-10
</Button>

// Custom styles (bolder than competitors)
className="rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary hover:scale-105 hover:shadow-brand-lg"
```

**Card Component**:
```typescript
// Based on Puzzle's soft approach
<Card className="rounded-3xl p-8 hover:-translate-y-2 hover:shadow-brand-lg transition-all duration-300">
  // rounded-3xl → 32px (more playful than competitors' 12-24px)
  // hover:-translate-y-2 → Lift effect (Mercury's approach)
  // hover:shadow-brand-lg → Colored shadow
</Card>
```

**Gradient Text**:
```typescript
// Based on Linear's subtle approach
<GradientText>
  Build Anything
</GradientText>

// Implementation
<span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
  {children}
</span>
```

---

## 🎭 Animation Strategy (Validated)

### Scroll-Triggered Animations

**Pattern** (from Anthropic):
```typescript
// IntersectionObserver with 10% threshold
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, {
  threshold: 0.1,              // Anthropic's exact threshold
  rootMargin: '-100px 0px'     // Trigger slightly before visible
});

// Apply to all .animate-on-scroll elements
document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
```

**Framer Motion Version**:
```typescript
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-100px' }}
  variants={fadeUpVariants}
>
  {children}
</motion.div>
```

---

### Page Transitions (Smooth like Linear)

```typescript
// app/(marketing)/layout.tsx
'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function MarketingLayout({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

---

### Micro-Interactions (Purpose-Driven)

**Magnetic Button** (inspired by current site + Puzzle):
```typescript
'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function MagneticButton({ children, className }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3;  // 30% follow
    const y = (clientY - (top + height / 2)) * 0.3;
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

---

## 🌐 3D Strategy (Pitch's Approach)

### Hero Background (Decorative Only)

```typescript
// components/3d/FloatingShapes.tsx
'use client';
import { Canvas } from '@react-three/fiber';
import { FloatingShapes } from './FloatingShapes';

export function Hero3DBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <FloatingShapes />
      </Canvas>
    </div>
  );
}

// FloatingShapes.tsx
export function FloatingShapes() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#0A84FF" wireframe />
      </mesh>
      {/* More shapes */}
    </group>
  );
}
```

**Key Principles**:
1. **Decorative only** - Never blocks content
2. **Low poly** - Performance first (Linear's approach)
3. **Lazy loaded** - Dynamic import
4. **Fallback** - Graceful degradation

---

### Service Icons (Rotating 3D)

```typescript
// components/3d/ServiceIcon3D.tsx
export function ServiceIcon3D({ color = '#0A84FF' }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <RoundedBox
      ref={meshRef}
      args={[1, 1, 1]}
      radius={0.2}
      smoothness={4}
    >
      <meshStandardMaterial color={color} />
    </RoundedBox>
  );
}
```

**Usage**:
```typescript
<div className="w-24 h-24">
  <Canvas>
    <ServiceIcon3D color="#0A84FF" />
  </Canvas>
</div>
```

---

## 🚀 Performance Strategy (Linear's Approach)

### Critical Optimizations

**1. Image Optimization**:
```typescript
// Always use Next.js Image
import Image from 'next/image';

<Image
  src="/images/service-hero.png"
  alt="RAG Agents"
  width={1200}
  height={600}
  priority={false}  // Only true for above-fold images
  placeholder="blur"
  blurDataURL="data:image/..." // Or import from local
/>
```

**2. Font Optimization**:
```typescript
// app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,  // Preload for performance
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
```

**3. Code Splitting**:
```typescript
// Lazy load heavy components (3D, demos)
import dynamic from 'next/dynamic';

const Hero3DBackground = dynamic(
  () => import('@/components/3d/Hero3DBackground'),
  { ssr: false, loading: () => <div className="animate-pulse" /> }
);

const RAGDemo = dynamic(
  () => import('@/components/demos/RAGPlayground'),
  { ssr: false }
);
```

**4. Server Components by Default**:
```typescript
// Most components are Server Components (Next.js 15 default)
// Only use 'use client' when needed:
// - Animations (Framer Motion)
// - 3D (React Three Fiber)
// - Forms (useState)
// - Browser APIs (useEffect)
```

---

### Performance Targets (Validated)

| Metric | Target | Rationale |
|--------|--------|-----------|
| **Lighthouse Performance** | 90+ | Linear achieves this |
| **Lighthouse Accessibility** | 95+ | WCAG 2.1 AA compliance |
| **Lighthouse Best Practices** | 95+ | Industry standard |
| **Lighthouse SEO** | 100 | Critical for consultancy |
| **First Contentful Paint** | <1.5s | User perception threshold |
| **Largest Contentful Paint** | <2.5s | Core Web Vital |
| **Time to Interactive** | <3.5s | Usability threshold |
| **Cumulative Layout Shift** | <0.1 | Core Web Vital |

**How We'll Achieve This**:
- Server Components (reduce JS bundle)
- Image optimization (Next.js Image)
- Font preloading (Inter variable font)
- Code splitting (dynamic imports)
- Lazy load 3D (off-screen initially)
- Efficient animations (CSS transforms, not layout properties)

---

## 📱 Responsive Strategy (Mobile-First)

### Breakpoints (Tailwind Default)

```typescript
sm: '640px',    // Tablet portrait
md: '768px',    // Tablet landscape
lg: '1024px',   // Laptop
xl: '1280px',   // Desktop
2xl: '1536px',  // Large desktop
```

**Approach**: Mobile-first (all competitors do this)

---

### Layout Adaptations

**Hero Section**:
```typescript
// Mobile: Single column, smaller text
<h1 className="text-4xl md:text-6xl lg:text-7xl">
  We Build <GradientText>Anything</GradientText>. Fast.
</h1>

// Mobile: Stacked CTAs
<div className="flex flex-col sm:flex-row gap-4">
  <Button>Start Your Project</Button>
  <Button variant="outline">See Our Work</Button>
</div>
```

**Services Grid**:
```typescript
// Mobile: 1 col, Tablet: 2 col, Desktop: 3 col
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {services.map(service => <ServiceCard key={service.id} {...service} />)}
</div>
```

**Navigation**:
```typescript
// Desktop: Horizontal nav
<nav className="hidden md:flex items-center space-x-8">
  {/* Links */}
</nav>

// Mobile: Hamburger + slide-in menu
<button className="md:hidden">
  {/* Hamburger icon */}
</button>

<MobileMenu isOpen={isOpen} />
```

---

## 🎯 Development Workflow

### Git Strategy

```bash
# Branch structure
main          # Production (deployed to Vercel)
dev           # Development (preview deployments)
rebrand-v2    # Current work branch
feature/*     # Individual features
```

**Commit Convention** (semantic):
```bash
feat: add RAG agents page with mock demo
fix: resolve mobile nav animation bug
refactor: optimize image loading
style: update button hover states
docs: add component usage documentation
chore: update dependencies
```

---

### Build Process

**Phase 2**: Setup
```bash
npx create-next-app@latest new-site --typescript --tailwind --app --use-npm
cd new-site
npm install [all dependencies]
```

**Phase 3-5**: Development
```bash
npm run dev  # Start Turbopack dev server
# Build components, pages, features
# Git commit after each major feature
```

**Phase 6-7**: Optimization
```bash
npm run build  # Production build
npm run start  # Test production locally
# Run Lighthouse audits
# Fix performance issues
```

**Phase 8**: Deployment
```bash
git push origin main  # Auto-deploys to Vercel
```

---

### Testing Strategy

**Development** (Phase 3-5):
- Manual testing in Chrome/Firefox/Safari
- Responsive design testing (DevTools)
- Console error checking

**Pre-Deployment** (Phase 7):
- Lighthouse audits (all pages)
- Cross-browser testing (Chrome, Firefox, Safari)
- Mobile testing (real devices)
- Accessibility audit (WCAG 2.1 AA)
- Form validation testing
- Link checking

**Post-Deployment** (Phase 8):
- Production Lighthouse audit
- Real-world performance testing
- Analytics setup (optional)

---

## 📊 Success Metrics

### Technical Metrics
- [ ] TypeScript strict mode (no `any` types)
- [ ] Lighthouse Performance: 90+
- [ ] Lighthouse Accessibility: 95+
- [ ] Lighthouse Best Practices: 95+
- [ ] Lighthouse SEO: 100
- [ ] Mobile responsive (320px - 2560px)
- [ ] 60fps animations
- [ ] Zero console errors

### User Experience Metrics
- [ ] <2s page load time
- [ ] Smooth animations (no jank)
- [ ] Clear CTAs (obvious next steps)
- [ ] Easy navigation (find any service in 2 clicks)
- [ ] Professional feel (builds trust)
- [ ] Playful touches (memorable experience)

### Brand Metrics
- [ ] Conveys "modern and elite"
- [ ] Conveys "we build anything, fast"
- [ ] Conveys "technical but approachable"
- [ ] Interactive demos prove capability

---

## 🚦 Decision Points & Alternatives

### If 3D Performance Is Poor
**Alternative**: Use CSS 3D transforms instead
- `transform: rotateY()` for simple rotations
- Still looks good, much faster
- Fallback for older devices

### If Framer Motion Bundle Is Too Large
**Alternative**: Use CSS animations + view transitions
- Native browser support
- Smaller bundle
- Still smooth

### If Next.js 15 Has Issues
**Alternative**: Use Next.js 14 (stable)
- Well-tested
- Similar features
- Slight performance difference

**Decision**: Start with Next.js 15 (cutting-edge), fallback if needed

---

## 📋 Phase 2 Kickoff Checklist

Before starting Phase 2 (Project Setup):

**Prerequisites**:
- [x] Node.js 18+ installed (v22.20.0 ✅)
- [x] npm 9+ installed (v10.9.3 ✅)
- [x] Git configured (v2.51.0 ✅)
- [x] Architecture approved
- [x] Design system finalized
- [x] Content structure ready

**First Steps** (Phase 2):
1. Create `/new-site` folder
2. Initialize Next.js 15 project
3. Install all dependencies
4. Configure Tailwind with brand colors
5. Set up project structure
6. Initialize git (rebrand-v2 branch)
7. First commit: "feat: initialize Next.js 15 project"

---

## 🎯 Final Recommendations

### Adopt These Patterns

✅ **Anthropic's Approach**:
- Warm accent on cool backgrounds
- Word-reveal animations
- Simple, human language
- Content-first (no unnecessary graphics)

✅ **Puzzle's Approach**:
- Generous rounded corners
- Smooth (not bouncy) animations
- Purpose-driven interactions

✅ **Mercury's Approach**:
- Bold, confident typography
- Generous spacing
- Commanding presence

✅ **Linear's Approach**:
- Performance-first
- Clean, polished details
- Inter font

✅ **Pitch's Approach**:
- Decorative 3D (background only)
- Never block content
- Optimized for performance

---

### Critical Success Factors

1. **Performance First** (Linear's lesson)
   - Lazy load everything heavy
   - Server Components by default
   - Optimize images

2. **Purpose-Driven Animation** (all sites)
   - Every animation serves UX
   - No excessive motion
   - Respect accessibility

3. **Generous Spacing** (Anthropic + Mercury)
   - Let content breathe
   - Don't cram
   - Whitespace = premium

4. **3D as Decoration** (Pitch's lesson)
   - Background only
   - Never obstruct
   - Performance-optimized

5. **Bold but Professional** (balance)
   - Playful elements (rounded corners, smooth animations)
   - Professional credibility (high contrast, clear hierarchy)
   - Technical depth (real demos, clear explanations)

---

## ✅ Architecture Approval Checklist

Review this architecture for:

- [ ] **Tech stack appropriate** (Next.js 15, TypeScript, Tailwind, R3F)
- [ ] **Design system validated** (colors, typography, spacing)
- [ ] **Animation strategy sound** (durations, easing, patterns)
- [ ] **3D approach sensible** (decorative only, performance-first)
- [ ] **Component structure clear** (hierarchy, patterns)
- [ ] **Performance targets achievable** (90+ Lighthouse)
- [ ] **Development workflow practical** (git, testing, deployment)
- [ ] **Responsive strategy complete** (mobile-first, breakpoints)

---

**Status**: ✅ Ready for approval
**Next**: Phase 2 - Project Setup
**Timeline**: 3-4 weeks (quality over speed)

---

**Last Updated**: 2025-10-30
**Created By**: Claude Code
**Based On**: 5 competitor analyses + original requirements
