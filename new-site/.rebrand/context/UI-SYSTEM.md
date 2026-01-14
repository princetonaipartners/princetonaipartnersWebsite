# UI System - Princeton AI Partners

> **Version**: 2.0
> **Last Updated**: 2026-01-14
> **Purpose**: Comprehensive UI reference for AI-assisted development

---

## Quick Reference

### Brand Identity
- **Position**: "Your Automated CTO with Live Support"
- **Aesthetic**: Playful Tech - Friendly but supremely confident
- **Inspiration**: Anthropic meets Linear meets Vercel

### Tech Stack
- Next.js 16 + React 19 + TypeScript
- Tailwind CSS + Framer Motion
- Font: Manrope (primary), JetBrains Mono (code)

---

## Color Tokens

### Primary Brand
```
brand-primary:   #0A84FF  → CTAs, links, primary actions
brand-secondary: #0060CE  → Hover states, gradient endpoints
brand-light:     #E5F2FF  → Light backgrounds, highlights
brand-dark:      #003D82  → High contrast needs
```

### Dark Mode (Default)
```
dark-bg-primary:   #09090B  → Main background (zinc-950)
dark-bg-secondary: #18181B  → Section alternates (zinc-900)
dark-bg-tertiary:  #27272A  → Cards, elevated surfaces (zinc-800)
dark-text-primary: #FAFAFA  → Headlines, body text
dark-text-secondary: #A1A1AA → Descriptions (zinc-400)
dark-brand-primary: #3B9FFF → Brighter blue for dark mode
```

### Accent Colors
```
colorful-pink:   #EC4899  → Special highlights
colorful-green:  #10B981  → Success states
colorful-orange: #F59E0B  → Warnings, badges
```

### Usage Patterns
```tsx
// Dark background with brand accent
className="bg-dark-bg-primary text-dark-text-primary"

// Brand gradient
className="bg-gradient-to-r from-brand-primary to-brand-secondary"

// Glowing effect
className="shadow-glow" // Uses blue inset shadows
```

---

## Typography

### Font Scale
```tsx
// Hero headline
className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"

// Section headline
className="text-3xl md:text-4xl font-bold"

// Card title
className="text-xl md:text-2xl font-semibold"

// Body text
className="text-base md:text-lg text-dark-text-secondary"

// Small/caption
className="text-sm text-dark-text-tertiary"
```

### Text Styling
- Headlines: `font-bold tracking-tight` (negative letter-spacing)
- Body: `leading-relaxed` (1.625 line-height)
- Max width for paragraphs: `max-w-2xl`

---

## Spacing System

### Section Padding
```tsx
// Standard section
className="py-16 md:py-24 lg:py-32"

// Compact section
className="py-12 md:py-16"

// Spacious section (hero)
className="py-20 md:py-32 lg:py-40"
```

### Container
```tsx
// Standard container
className="container mx-auto px-4 sm:px-6 lg:px-8"

// Max width: 1280px (configured in tailwind.config.ts)
```

### Component Spacing
```tsx
// Card internal padding
className="p-6 md:p-8"

// Button padding
className="px-6 py-3 md:px-8"

// Grid gaps
className="gap-4 md:gap-6 lg:gap-8"
```

---

## Animation Tokens

### Tailwind Animations
```tsx
// Entrance animations
animate-fade-up      // translateY + opacity
animate-fade-in      // opacity only
animate-scale-in     // scale + opacity
animate-slide-in     // translateX + opacity
animate-blur-fade-in // blur + opacity

// Continuous animations
animate-float        // gentle up/down float
animate-pulse-glow   // pulsing glow effect
animate-orbit        // rotation for decorative elements
animate-aurora       // gradient background movement
```

### Framer Motion Standards
```tsx
// Standard entrance
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}

// Stagger children
transition={{ staggerChildren: 0.1 }}

// Hover scale
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
```

### Timing Functions
```tsx
ease-smooth: cubic-bezier(0.22, 1, 0.36, 1)   // Default smooth
ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55) // Playful
ease-sharp:  cubic-bezier(0.4, 0, 1, 1)       // Quick exit
```

---

## Component Inventory

### Backgrounds (14)
| Component | Use Case |
|-----------|----------|
| `aurora-background` | Hero sections, large areas |
| `aurora-shader-background` | WebGL aurora effect |
| `gradient-mesh-background` | Animated mesh gradients |
| `neural-grid-background` | Tech/AI themed sections |
| `dot-shader-background` | Subtle dot patterns |
| `magnetic-background` | Interactive mouse effects |
| `premium-background` | High-end page backgrounds |
| `page-background` | Standard page wrapper |
| `retro-grid` | Perspective grid effect |
| `cybernetic-grid-shader` | Advanced grid effects |
| `background-boxes` | Animated box grid |
| Service backgrounds | Per-service themed BGs |
| `shooting-stars` | Blog page animated shooting stars |
| `industries-background` | Clients/industries page grid |

### Buttons (5)
| Component | Use Case |
|-----------|----------|
| `button` | Standard buttons (shadcn) |
| `shimmer-button` | CTA with shimmer effect |
| `interactive-hover-button` | Reveal text on hover |
| `magnetize-button` | Magnetic cursor effect |
| `enhanced-cta-button` | Premium CTA styling |

### Cards & Containers (4)
| Component | Use Case |
|-----------|----------|
| `card` | Standard card container |
| `bento-grid` | Asymmetric grid layout |
| `evervault-card` | Encrypted/premium feel |
| `feature-section-with-hover-effects` | Service feature cards |

### Text Effects (4)
| Component | Use Case |
|-----------|----------|
| `typewriter` | Typing animation |
| `text-generate-effect` | Text reveal animation |
| `gooey-text-morphing` | Morphing text effect |
| `text-loop` | Rotating text |

### Decorative Animations (5)
| Component | Use Case |
|-----------|----------|
| `animated-beam` | Connecting beam lines |
| `orbiting-circles` | Circular orbit animation |
| `particle-beam` | Particle effects |
| `gradient-glow-spots` | Floating glow orbs |
| `spotlight-section` | Spotlight hover effect |

### Forms & Input (4)
| Component | Use Case |
|-----------|----------|
| `input` | Text input fields |
| `textarea` | Multi-line input |
| `accordion` | Collapsible sections |
| `badge` | Labels, tags |

### Layout (4)
| Component | Use Case |
|-----------|----------|
| `Header` | Main navigation |
| `MinimalHeader` | Simple header variant |
| `Footer` | Site footer |
| `SolutionPageLayout` | Service page template |

### Service-Specific Demos (10+)
Located in `components/ui/service-backgrounds/`:
- `AIAgentsBackground` - RAG/agent visualization
- `AIPhoneBackground` - Phone system demo
- `WebDevelopmentBackground` - Code/framework showcase
- `ProcessAutomationBackground` - Workflow visualization
- `WebScrapingBackground` - Data extraction demo
- And more...

---

## Common Patterns

### Page Structure
```tsx
<>
  <PageBackground />
  <Header />
  <main className="pt-20">
    {/* Hero Section */}
    <section className="py-20 md:py-32">
      <div className="container">
        {/* Content */}
      </div>
    </section>

    {/* Feature Sections */}
    <section className="py-16 md:py-24">
      {/* ... */}
    </section>

    {/* CTA Section */}
    <CTASection />
  </main>
  <Footer />
</>
```

### Card Pattern
```tsx
<div className={cn(
  "rounded-2xl md:rounded-3xl",
  "bg-dark-bg-tertiary/50 backdrop-blur-sm",
  "border border-dark-border/50",
  "p-6 md:p-8",
  "transition-all duration-300",
  "hover:-translate-y-1 hover:shadow-brand"
)}>
  {/* Card content */}
</div>
```

### Gradient Text
```tsx
<span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
  Gradient Text
</span>
```

### Glow Effect
```tsx
<div className="relative">
  <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl blur opacity-30" />
  <div className="relative bg-dark-bg-secondary rounded-2xl p-6">
    Content
  </div>
</div>
```

---

## Visual Consistency Rules

### DO
- Use brand colors from tokens (not arbitrary hex)
- Apply consistent border-radius (`rounded-2xl` for cards, `rounded-xl` for buttons)
- Maintain generous whitespace
- Use subtle shadows with blue tint
- Animate with purpose (entrance, interaction feedback)
- Mobile-first responsive breakpoints

### DON'T
- Use inline styles or arbitrary colors
- Mix border-radius sizes inconsistently
- Over-animate (keep it subtle)
- Use stock photos (prefer illustrations, demos, code)
- Ignore dark mode (it's the default!)
- Use harsh shadows

---

## Modern UI Trends (2024-2025)

### Currently Trending
- Bento grids with varied card sizes
- Glassmorphism with subtle blur
- Micro-interactions on hover/focus
- Scroll-triggered animations
- Dark mode with rich gradients
- 3D elements (subtle, performant)
- Variable fonts with fluid typography
- Animated mesh/gradient backgrounds

### Becoming Dated
- Flat, static cards with no depth
- Generic stock photography
- Hamburger menus on desktop
- Parallax overuse
- Heavy drop shadows
- Generic Material/Bootstrap look
- Overly complex navigation

---

## Premium Indicators

What makes UI feel "premium":
1. **Subtle shadows and depth** - Not harsh, blue-tinted
2. **Smooth animations** - 60fps, intentional, not flashy
3. **Generous whitespace** - Let content breathe
4. **Refined typography** - Proper hierarchy, tracking
5. **Micro-interactions** - Responsive to user input
6. **High-quality visuals** - Custom demos, not stock
7. **Cohesive palette** - Consistent color usage
8. **Attention to detail** - Polish in small touches

---

## Reference Sites

### Design Inspiration
- **Vercel** - Clean, minimal, dark mode excellence
- **Linear** - Premium SaaS UI
- **Stripe** - Enterprise polish
- **Raycast** - Dark mode done right
- **Arc Browser** - Innovative interactions

### Component Inspiration
- **Magic UI** - Animated components
- **Aceternity UI** - Premium effects
- **shadcn/ui** - Solid foundations

### Galleries
- Awwwards, Land-book, Dribbble, Mobbin

---

## Template: Starting a New UI Task

```markdown
## Before Starting
1. [ ] Read this UI-SYSTEM.md
2. [ ] Check if similar component exists
3. [ ] Review related pages for consistency

## During Implementation
1. [ ] Use existing color/animation tokens
2. [ ] Follow established patterns
3. [ ] Test mobile viewport
4. [ ] Verify dark mode appearance

## After Implementation
1. [ ] Screenshot the result
2. [ ] Compare with rest of site
3. [ ] Check 60fps animations
4. [ ] Verify accessibility
```

---

**Document Version**: 2.0
**Maintained by**: Claude Code UI Agent
