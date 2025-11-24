# Design System - Princeton AI Partners

> **Last Updated**: 2025-10-30
> **Brand**: Playful Tech Aesthetic
> **Inspiration**: Anthropic meets Puzzle Labs meets your most talented developer friend

---

## 🎨 Brand Philosophy

**Personality**: Friendly but supremely confident. Playful but technically rigorous. Approachable but elite.

**Visual Language**:
- Soft, rounded corners (friendly, approachable)
- Bold, confident typography
- Generous whitespace (premium feel)
- Subtle animations (playful without being distracting)
- 3D elements (modern, cutting-edge)
- Gradient accents (tech-forward)

---

## 🌈 Color System

### Primary Brand Colors

```typescript
// tailwind.config.ts
colors: {
  brand: {
    primary: '#0A84FF',    // Electric blue - Main CTAs, links, primary actions
    secondary: '#0060CE',  // Deep blue - Hover states, accents
    light: '#E5F2FF',      // Light blue - Backgrounds, highlights, code blocks
    dark: '#003D82',       // Dark blue - Text on light backgrounds
  }
}
```

**Usage**:
- `brand-primary`: Primary buttons, links, important text
- `brand-secondary`: Hover states, gradient endpoints
- `brand-light`: Section backgrounds, card highlights
- `brand-dark`: Dark mode text, high contrast needs

**Gradient** (signature look):
```css
background: linear-gradient(135deg, #0A84FF 0%, #0060CE 100%);
```

---

### Background Colors

```typescript
background: {
  primary: '#FAFAFA',     // Main page background (soft white)
  secondary: '#F5F5F5',   // Alternating sections (slightly darker)
  card: '#FFFFFF',        // Cards, modals, elevated surfaces
}
```

**Usage**:
- `bg-background-primary`: Main page background
- `bg-background-secondary`: Alternating sections for visual hierarchy
- `bg-background-card`: Cards, dialogs, dropdowns

---

### Text Colors

```typescript
text: {
  primary: '#0F0F0F',     // Headings, body text (near black)
  secondary: '#6B7280',   // Descriptions, supporting text (warm gray)
  tertiary: '#9CA3AF',    // Captions, labels, meta info (light gray)
  inverse: '#FFFFFF',     // Text on dark backgrounds
}
```

**Usage**:
- `text-text-primary`: Headlines, body copy, important text
- `text-text-secondary`: Descriptions, subheadings
- `text-text-tertiary`: Captions, timestamps, meta info
- `text-text-inverse`: Text on colored backgrounds

---

### Accent Colors

```typescript
accent: {
  purple: '#8B5CF6',      // Playful accent 1 - Creative features
  pink: '#EC4899',        // Playful accent 2 - Call-outs, highlights
  green: '#10B981',       // Success states, positive actions
  orange: '#F59E0B',      // Warnings, highlights, badges
}
```

**Usage**:
- `accent-purple`: AI/creative features, playful elements
- `accent-pink`: Special call-outs, limited offers
- `accent-green`: Success messages, checkmarks, "active" states
- `accent-orange`: Warnings, "new" badges, highlights

---

### Functional Colors

```typescript
border: '#E5E7EB',              // Default borders
shadow: 'rgba(0, 0, 0, 0.08)',  // Soft shadows (default)
```

**Custom Shadows**:
```css
.shadow-brand {
  box-shadow: 0 10px 40px rgba(10, 132, 255, 0.15);
}

.shadow-brand-lg {
  box-shadow: 0 20px 60px rgba(10, 132, 255, 0.2);
}
```

---

## 📝 Typography

### Font Families

**Primary Font**: Inter (Google Fonts)

**Weights Used**:
- 400 (Regular) - Body text
- 500 (Medium) - Emphasized text, labels
- 600 (Semibold) - Subheadings, button text
- 700 (Bold) - Headings
- 800 (Extrabold) - Hero text (optional)

**Monospace Font**: JetBrains Mono (for code snippets)

**Font Loading** (app/layout.tsx):
```typescript
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
});
```

---

### Type Scale (Responsive)

Use `clamp()` for fluid typography:

```css
/* Hero Headline */
.text-hero {
  font-size: clamp(2.5rem, 5vw, 4rem);  /* 40px - 64px */
  line-height: 1.1;
  letter-spacing: -0.02em;
  font-weight: 700;
}

/* H1 */
.text-h1 {
  font-size: clamp(2rem, 4vw, 3rem);    /* 32px - 48px */
  line-height: 1.2;
  letter-spacing: -0.02em;
  font-weight: 700;
}

/* H2 */
.text-h2 {
  font-size: clamp(1.75rem, 3vw, 2.25rem);  /* 28px - 36px */
  line-height: 1.3;
  letter-spacing: -0.01em;
  font-weight: 600;
}

/* H3 */
.text-h3 {
  font-size: clamp(1.25rem, 2vw, 1.5rem);   /* 20px - 24px */
  line-height: 1.4;
  font-weight: 600;
}

/* Body Large */
.text-lg {
  font-size: clamp(1.125rem, 1.5vw, 1.25rem);  /* 18px - 20px */
  line-height: 1.6;
  font-weight: 400;
}

/* Body */
.text-base {
  font-size: 1rem;  /* 16px */
  line-height: 1.6;
  font-weight: 400;
}

/* Small */
.text-sm {
  font-size: 0.875rem;  /* 14px */
  line-height: 1.5;
  font-weight: 400;
}

/* Tiny */
.text-xs {
  font-size: 0.75rem;  /* 12px */
  line-height: 1.4;
  font-weight: 500;
}
```

---

### Typography Best Practices

1. **Heading Hierarchy**: Always use proper HTML tags (h1, h2, h3)
2. **Line Height**:
   - Headings: 1.1 - 1.4
   - Body: 1.6
   - Small text: 1.4 - 1.5
3. **Letter Spacing**:
   - Large headings: -0.02em (tighter, more modern)
   - Body text: 0 (default)
4. **Max Width**:
   - Body paragraphs: `max-w-2xl` (672px) for readability
   - Headlines: `max-w-4xl` (896px)

---

## 📏 Spacing System

Use Tailwind's default spacing scale (4px base unit):

### Container Widths

```typescript
container: {
  center: true,
  padding: {
    DEFAULT: '1rem',      // 16px
    sm: '1.5rem',         // 24px
    lg: '2rem',           // 32px
  },
  screens: {
    '2xl': '1280px',      // max-width
  },
}
```

**Usage**: Wrap all content in `.container.mx-auto.px-4.sm:px-6.lg:px-8`

---

### Section Spacing

```css
/* Default section padding */
.section-padding {
  @apply py-16 md:py-24 lg:py-32;
}

/* Tight section (less vertical space) */
.section-padding-sm {
  @apply py-12 md:py-16 lg:py-20;
}

/* Extra spacious section */
.section-padding-lg {
  @apply py-20 md:py-32 lg:py-40;
}
```

**Usage**:
- Homepage sections: `py-32`
- Service page sections: `py-24`
- Nested sections: `py-16`

---

### Component Spacing

```css
/* Card internal padding */
.card-padding {
  @apply p-6 md:p-8;
}

/* Button padding */
.btn-padding {
  @apply px-6 py-3 md:px-8 md:py-3.5;
}

/* Stack spacing (vertical) */
.stack-tight {
  @apply space-y-4;
}

.stack-default {
  @apply space-y-6;
}

.stack-loose {
  @apply space-y-12;
}
```

---

## 🔲 Border Radius

Rounded corners create a friendly, playful aesthetic:

```typescript
borderRadius: {
  'sm': '0.5rem',       // 8px - Small elements
  'md': '0.75rem',      // 12px - Default
  'lg': '1rem',         // 16px - Cards
  'xl': '1.25rem',      // 20px - Inputs
  '2xl': '1.5rem',      // 24px - Large cards
  '3xl': '2rem',        // 32px - Hero cards, modals
  'full': '9999px',     // Pill-shaped buttons
}
```

**Usage**:
- Buttons: `rounded-full` (pill-shaped)
- Cards: `rounded-2xl` or `rounded-3xl`
- Inputs: `rounded-xl`
- Images: `rounded-2xl`
- Modals/Dialogs: `rounded-3xl`

---

## 🎭 Shadows

Soft, subtle shadows create depth without heaviness:

```typescript
boxShadow: {
  'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
  'DEFAULT': '0 1px 3px rgba(0, 0, 0, 0.1)',
  'md': '0 4px 6px rgba(0, 0, 0, 0.07)',
  'lg': '0 10px 15px rgba(0, 0, 0, 0.08)',
  'xl': '0 20px 25px rgba(0, 0, 0, 0.08)',
  '2xl': '0 25px 50px rgba(0, 0, 0, 0.1)',

  // Custom brand shadows (blue tint)
  'brand': '0 10px 40px rgba(10, 132, 255, 0.15)',
  'brand-lg': '0 20px 60px rgba(10, 132, 255, 0.2)',
}
```

**Usage**:
- Cards at rest: `shadow-sm`
- Elevated cards: `shadow-lg`
- Modals: `shadow-2xl`
- Buttons on hover: `shadow-brand-lg`

---

## ✨ Animation System

### Duration & Easing

```typescript
// tailwind.config.ts
theme: {
  extend: {
    transitionDuration: {
      '150': '150ms',   // Micro-interactions
      '300': '300ms',   // Standard transitions
      '600': '600ms',   // Elaborate animations
      '1000': '1000ms', // Hero/entrance animations
    },
    transitionTimingFunction: {
      'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',     // Smooth ease-out
      'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', // Playful bounce
      'sharp': 'cubic-bezier(0.4, 0, 1, 1)',          // Quick exit
    },
  }
}
```

---

### Built-in Animations

```typescript
animation: {
  'fade-up': 'fadeUp 0.6s ease-out',
  'fade-in': 'fadeIn 0.4s ease-out',
  'scale-in': 'scaleIn 0.4s ease-out',
  'slide-in': 'slideIn 0.5s ease-out',
  'float': 'float 3s ease-in-out infinite',
}

keyframes: {
  fadeUp: {
    '0%': { opacity: '0', transform: 'translateY(20px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  scaleIn: {
    '0%': { opacity: '0', transform: 'scale(0.95)' },
    '100%': { opacity: '1', transform: 'scale(1)' },
  },
  slideIn: {
    '0%': { opacity: '0', transform: 'translateX(-20px)' },
    '100%': { opacity: '1', transform: 'translateX(0)' },
  },
  float: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
  },
}
```

---

### Framer Motion Variants

```typescript
// lib/animations.ts

// Fade up on scroll
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  },
};

// Stagger children
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  },
};

// Scale in
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  },
};

// Page transitions
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};
```

---

### Hover Effects

**Cards**:
```css
.card-hover {
  @apply transition-all duration-300 hover:-translate-y-2 hover:shadow-brand-lg;
}
```

**Buttons**:
```css
.btn-hover {
  @apply transition-all duration-300 hover:scale-105 hover:shadow-brand-lg active:scale-100;
}
```

**Images**:
```css
.image-hover {
  @apply transition-all duration-300 hover:scale-105;
}
```

---

## 📱 Responsive Breakpoints

Use Tailwind's default breakpoints:

```typescript
screens: {
  'sm': '640px',    // Tablet
  'md': '768px',    // Small laptop
  'lg': '1024px',   // Laptop
  'xl': '1280px',   // Desktop
  '2xl': '1536px',  // Large desktop
}
```

**Mobile-First Approach**:
```html
<!-- Default: mobile -->
<div class="text-2xl md:text-4xl lg:text-6xl">
  <!-- 2xl on mobile, 4xl on tablet, 6xl on desktop -->
</div>
```

---

## 🎯 Component Patterns

### Buttons

```tsx
// Primary (gradient)
<Button variant="default">Get Started</Button>

// Outline
<Button variant="outline">Learn More</Button>

// Ghost
<Button variant="ghost">Cancel</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
```

**Custom Styles**:
```typescript
// components/ui/button.tsx
variants: {
  variant: {
    default: 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:shadow-brand-lg hover:scale-105',
    outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-light',
    ghost: 'text-brand-primary hover:bg-brand-light',
  },
  size: {
    sm: 'h-10 px-6 text-sm',
    default: 'h-12 px-8 text-base',
    lg: 'h-14 px-10 text-lg',
  },
}
```

---

### Cards

```tsx
<Card className="p-8 hover:-translate-y-2 hover:shadow-brand-lg transition-all duration-300">
  <h3>Card Title</h3>
  <p>Card content...</p>
</Card>
```

**Variants**:
- Default: `rounded-3xl bg-white shadow-sm`
- Elevated: `rounded-3xl bg-white shadow-lg`
- Highlighted: `rounded-3xl bg-brand-light border border-brand-primary/20`

---

### Gradient Text

```tsx
<GradientText>
  Build Anything
</GradientText>

// Implementation
function GradientText({ children }) {
  return (
    <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
      {children}
    </span>
  );
}
```

---

## 🚫 Design Don'ts

**Avoid**:
- ❌ Stock photos (use custom illustrations or real screenshots)
- ❌ Generic icons (customize or create unique ones)
- ❌ Boring grids (use bento box layouts, varied sizes)
- ❌ Auto-playing videos (respect user control)
- ❌ Aggressive animations (keep it subtle, smooth)
- ❌ Corporate jargon (write like a human)
- ❌ Too many fonts (stick to Inter + JetBrains Mono)
- ❌ Harsh shadows (keep them soft and subtle)
- ❌ Parallax scrolling (use fade-up instead)

---

## ✅ Design Best Practices

**Always**:
- ✅ Mobile-first responsive design
- ✅ Generous whitespace (let content breathe)
- ✅ Consistent spacing (use Tailwind scale)
- ✅ Soft, rounded corners (friendly aesthetic)
- ✅ Subtle animations (enhance, don't distract)
- ✅ High contrast text (WCAG AA minimum)
- ✅ Semantic HTML (proper headings, alt text)
- ✅ Fast load times (optimize images, code split)
- ✅ Clear CTAs (make next steps obvious)
- ✅ Respect `prefers-reduced-motion`

---

## 📐 Grid Layouts

**Bento Box** (varied card sizes):
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card className="lg:col-span-2 lg:row-span-2">Large feature</Card>
  <Card>Small item 1</Card>
  <Card>Small item 2</Card>
  <Card className="lg:col-span-2">Wide item</Card>
</div>
```

**Standard Grid** (equal sizes):
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {items.map(item => <Card key={item.id}>{item.content}</Card>)}
</div>
```

---

## 🎨 Example Page Layout

```tsx
<main>
  {/* Hero - Full screen, gradient background */}
  <section className="min-h-screen flex items-center bg-gradient-to-br from-brand-light to-white">
    <div className="container mx-auto px-4">
      <h1 className="text-hero">We Build Anything. Fast.</h1>
    </div>
  </section>

  {/* Services - Alternating background */}
  <section className="py-32 bg-background-secondary">
    <div className="container mx-auto px-4">
      <h2 className="text-h1">What We Build</h2>
      {/* Services grid */}
    </div>
  </section>

  {/* CTA - Brand gradient */}
  <section className="py-32 bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-h1">Ready to Build?</h2>
      <Button variant="outline" className="border-white text-white">Get Started</Button>
    </div>
  </section>
</main>
```

---

**Last Updated**: 2025-10-30
**Status**: Complete - Design system documented
**Next**: Apply this system consistently across all components and pages
