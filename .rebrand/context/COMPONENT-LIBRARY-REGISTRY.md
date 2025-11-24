# Component Library Registry - Princeton AI Partners

> **AI-Readable Reference**: This document catalogs all component libraries used in this project and when to use each one.

---

## Library Overview

We use multiple component libraries strategically:

1. **shadcn/ui** - Base design system components (customized with our brand)
2. **21st.dev** - Premium, copy-paste marketing components
3. **Aceternity UI** - Advanced animations and effects
4. **Magic UI** - Specialty components

---

## 1. shadcn/ui (Primary Base Library)

**Installation Method**: CLI (components copied to `/components/ui`)

**Why We Use It**:
- Fully customizable (owns the code)
- TypeScript-first
- Tailwind CSS based
- Radix UI primitives (accessible)
- No package dependency bloat

### Installed Components

```bash
# Core UI Components
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add label
npx shadcn-ui@latest add select
npx shadcn-ui@latest add form

# Interactive Components
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add tabs
npx shadcn-ui@latest add accordion

# Visual Components
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add avatar
npx shadcn-ui@latest add separator
```

### Brand Customization

All shadcn/ui components are customized in `/components/ui` with our brand colors:

```typescript
// components/ui/button.tsx (customized)
const buttonVariants = cva(
  'rounded-full font-semibold transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:shadow-brand-lg hover:scale-105',
        outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-light',
        ghost: 'text-brand-primary hover:bg-brand-light',
      },
    },
  }
);
```

### When to Use shadcn/ui

✅ **Use for:**
- Form inputs (text, select, checkbox, etc.)
- Buttons (primary, outline, ghost)
- Cards (basic layout cards)
- Dialogs/Modals
- Dropdowns
- Navigation components
- Any component that needs to match base design system

---

## 2. 21st.dev (Premium Marketing Components)

**Website**: https://21st.dev
**Installation Method**: Copy-paste individual components

**Why We Use It**:
- Premium, polished marketing components
- Modern, sleek designs
- Battle-tested landing page sections
- Tailwind CSS based

### Component Categories

#### Hero Sections
```typescript
// Example: Animated hero with gradient background
// Source: 21st.dev/components/hero-animated-gradient

'use client';

import { motion } from 'framer-motion';

export function Hero21st() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-hero font-bold"
        >
          We Build Anything. Fast.
        </motion.h1>
      </div>
    </section>
  );
}
```

#### Feature Grids
- Bento grid layouts
- Icon feature cards
- Comparison tables

#### CTAs
- Gradient CTA sections
- Email capture forms
- Multi-step signup flows

### When to Use 21st.dev

✅ **Use for:**
- Hero sections (homepage, service pages)
- Feature showcases
- Pricing sections
- CTA sections
- Newsletter signup forms
- Testimonial sections
- Landing page layouts

❌ **Don't use for:**
- Form inputs (use shadcn/ui)
- Basic UI components (use shadcn/ui)
- Admin interfaces

---

## 3. Aceternity UI (Advanced Animations)

**Website**: https://ui.aceternity.com
**Installation Method**: Copy-paste + dependencies

**Why We Use It**:
- Cutting-edge animations
- 3D effects
- Modern micro-interactions
- Framer Motion based

### Key Components

#### Background Effects
```typescript
// Animated gradient background
import { BackgroundGradient } from '@/components/ui/background-gradient';

<BackgroundGradient className="rounded-3xl p-8">
  <div>Content with animated gradient border</div>
</BackgroundGradient>
```

#### Animated Cards
- Hover-reveal cards
- Tilt effect cards
- Glow effect cards

#### Text Effects
- Typewriter effect
- Text reveal on scroll
- Gradient text animations

### When to Use Aceternity UI

✅ **Use for:**
- Hero section animations
- Special feature highlights
- Interactive demos
- Premium feel sections
- 3D background effects

❌ **Don't use for:**
- Every component (too much animation is bad UX)
- Form elements
- Navigation
- Text-heavy content

---

## 4. Magic UI (Specialty Components)

**Website**: https://magicui.design
**Installation Method**: Copy-paste

**Why We Use It**:
- Unique, magical interactions
- Scroll-based animations
- Interactive elements

### Key Components

#### Animated Beams
```typescript
// Connecting lines animation
import { AnimatedBeam } from '@/components/ui/animated-beam';

// Use for: Workflow diagrams, connection visualizations
```

#### Marquee
```typescript
// Infinite scrolling logos/testimonials
import { Marquee } from '@/components/ui/marquee';

<Marquee>
  {logos.map(logo => <Logo key={logo.id} {...logo} />)}
</Marquee>
```

### When to Use Magic UI

✅ **Use for:**
- Logo clouds
- Testimonial carousels
- Workflow visualizations
- Special effects

---

## Component Selection Matrix

| Use Case | Primary Library | Alternative |
|----------|----------------|-------------|
| **Forms** | shadcn/ui | - |
| **Buttons** | shadcn/ui (customized) | - |
| **Hero Section** | 21st.dev | Aceternity UI |
| **Feature Cards** | shadcn/ui + custom | 21st.dev |
| **Pricing Tables** | 21st.dev | shadcn/ui |
| **Testimonials** | 21st.dev | Magic UI (Marquee) |
| **CTAs** | 21st.dev | Custom |
| **Navigation** | shadcn/ui | Custom |
| **Modals** | shadcn/ui | - |
| **Animations** | Framer Motion | Aceternity UI |
| **Background Effects** | Aceternity UI | Custom |
| **Logo Clouds** | Magic UI | Custom |
| **Workflows** | Magic UI (AnimatedBeam) | react-flow-renderer |

---

## Implementation Guidelines

### 1. Start with Base, Enhance with Premium

```typescript
// Base card from shadcn/ui
import { Card } from '@/components/ui/card';

// Enhanced with Aceternity animation
import { BackgroundGradient } from '@/components/ui/background-gradient';

export function PremiumCard({ children }: CardProps) {
  return (
    <BackgroundGradient>
      <Card className="p-8">
        {children}
      </Card>
    </BackgroundGradient>
  );
}
```

### 2. Customize to Match Brand

Always adapt library components to match our brand colors:

```typescript
// 21st.dev component (original)
<div className="bg-blue-600 text-white">
  CTA Button
</div>

// Customized for Princeton AI
<div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
  CTA Button
</div>
```

### 3. Mix Libraries Strategically

```typescript
// Homepage Hero: 21st.dev layout + Aceternity animations + shadcn/ui button
export function Hero() {
  return (
    // 21st.dev hero layout
    <section className="hero-21st-layout">
      {/* Aceternity background effect */}
      <BackgroundGradient />

      <div>
        <h1>Build Anything. Fast.</h1>

        {/* shadcn/ui button (customized) */}
        <Button variant="default" size="lg">
          Get Started
        </Button>
      </div>
    </section>
  );
}
```

---

## Component Library Folders

Organize copied components by source:

```
components/
├── ui/                          # shadcn/ui components (customized)
│   ├── button.tsx
│   ├── card.tsx
│   └── ...
├── 21st/                        # 21st.dev components
│   ├── hero-gradient.tsx
│   ├── feature-grid-bento.tsx
│   ├── cta-gradient.tsx
│   └── pricing-table.tsx
├── aceternity/                  # Aceternity UI components
│   ├── background-gradient.tsx
│   ├── card-hover-effect.tsx
│   ├── text-reveal.tsx
│   └── animated-beam.tsx
├── magic/                       # Magic UI components
│   ├── marquee.tsx
│   ├── animated-beam.tsx
│   └── sparkles.tsx
└── custom/                      # Custom components
    ├── GradientText.tsx
    ├── AnimatedSection.tsx
    └── ...
```

---

## License & Attribution

### shadcn/ui
- **License**: MIT
- **Attribution**: Not required (code is copied to your project)

### 21st.dev
- **License**: Check individual components (usually MIT or free for commercial use)
- **Attribution**: Recommended in comments

### Aceternity UI
- **License**: MIT
- **Attribution**: Recommended in comments

### Magic UI
- **License**: MIT
- **Attribution**: Recommended in comments

**Component Attribution Example**:
```typescript
/**
 * AnimatedBeam Component
 * Source: Aceternity UI (https://ui.aceternity.com)
 * License: MIT
 * Customized for Princeton AI brand
 */
```

---

## Adding New Library Components

When adding a new component from a library:

1. **Copy the component** to appropriate folder (`components/21st/`, etc.)
2. **Add attribution comment** at top of file
3. **Customize brand colors** to match our design system
4. **Update this registry** with component details
5. **Test accessibility** (WCAG AA minimum)
6. **Document usage** in this file

---

## Component Quality Checklist

Before using any library component:

- [ ] **Responsive**: Works on mobile (320px+) to desktop (2560px)
- [ ] **Accessible**: Keyboard navigation, ARIA labels, screen reader support
- [ ] **Performance**: Doesn't tank Lighthouse scores
- [ ] **Brand Match**: Uses our colors, fonts, and spacing
- [ ] **Type Safe**: Full TypeScript support
- [ ] **Documented**: Clear props and usage examples

---

**Last Updated**: 2025-11-04
**Status**: Active - Update when adding new libraries or components
**Maintainer**: Update this file when discovering new useful libraries
