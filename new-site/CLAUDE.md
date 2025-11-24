# Princeton AI Partners - Claude Development Guide

> **AI-Native Development Environment**: This file auto-loads when Claude Code starts. Follow these guidelines for all development work.

---

## Project Overview

**Name**: Princeton AI Partners Website Rebrand v2.0
**Framework**: Next.js 16 (App Router) + React 19 + TypeScript
**Purpose**: Premium custom tech consultancy platform
**Brand**: Playful tech aesthetic - friendly but supremely confident

**Key Features**:
- 3D animated hero (React Three Fiber)
- Interactive component demos
- 7 service pages with custom showcases
- Smooth Framer Motion animations
- Mobile-first responsive design
- 90+ Lighthouse scores target

---

## Tech Stack

### Core
- **Next.js**: 16.0.1 (App Router, Server Components, Turbopack)
- **React**: 19.2.0
- **TypeScript**: 5.9.3 (strict mode)
- **Node**: 18+

### Styling
- **Tailwind CSS**: 3.4.17 (utility-first, custom brand theme)
- **CVA**: class-variance-authority (component variants)
- **cn()**: clsx + tailwind-merge helper

### UI Components
- **Radix UI**: Accessible primitives (Dialog, Dropdown, Accordion, Tabs)
- **shadcn/ui**: Customized components in `/components/ui`
- **21st.dev**: Premium marketing components (copy-paste)
- **Aceternity UI**: Advanced animations
- **Lucide Icons**: Primary icon library

### Animations
- **Framer Motion**: 12.23.24 (primary animation library)
- **React Three Fiber**: 9.4.0 (3D graphics)
- **@react-three/drei**: 10.7.6 (3D helpers)

### Development
- **ESLint**: 9.38.0 (code quality)
- **Prettier**: 3.6.2 (formatting, with Tailwind plugin)
- **TypeScript**: Strict mode enabled

---

## Agent System

**IMPORTANT**: This project uses specialized agents for complex tasks. **Automatically launch agents** when the user requests related work.

### Available Agents

#### 1. Component Builder Agent (`.agents/component-builder/`)
**When to launch**: User wants to create/build/generate a component

**Triggers**:
- "Create a button component"
- "Build a hero section"
- "Make a new card component"
- "Generate a service card"

**What it does**:
- Gathers component requirements
- Reads design system patterns
- Generates TypeScript component with brand colors
- Places file in correct location
- Verifies accessibility and responsiveness

#### 2. Testing Agent (`.agents/testing/`)
**When to launch**: User wants to test something or add tests

**Triggers**:
- "Test the homepage"
- "Write tests for the button"
- "Add accessibility tests"
- "Create test suite"

**What it does**:
- Analyzes component/page
- Generates Playwright E2E tests
- Adds accessibility tests (axe-core)
- Creates visual regression tests
- Runs tests and reports results

#### 3. Code Review Agent (`.agents/code-review/`)
**When to launch**: User wants code reviewed or before commits

**Triggers**:
- "Review my code"
- "Check my changes"
- "Can I commit this?"
- "Code review before commit"

**What it does**:
- Analyzes git diff
- Runs linters and type checking
- Checks accessibility, performance, brand compliance
- Groups issues by severity
- Suggests fixes

#### 4. Deployment Agent (`.agents/deployment/`)
**When to launch**: User wants to deploy or check production readiness

**Triggers**:
- "Ready to deploy?"
- "Check deployment"
- "Can we ship this?"
- "Production readiness check"

**What it does**:
- Runs all quality checks
- Lighthouse performance audit
- Security audit
- Asset optimization check
- Generates deployment report

### Agent Guidelines

**Be Proactive**:
- Launch agents automatically when user intent is clear
- Don't ask permission - just launch the appropriate agent
- Multiple agents can run in parallel if needed

**Example Workflow**:
```
User: "Create a button component and test it"

Claude:
1. Launches component-builder agent (creates button)
2. Launches testing agent (tests button)
3. Reports results from both agents
```

**Registered in**: `.claude/agents.json`

---

## Code Conventions

### TypeScript

#### Module System
```typescript
// ✅ ALWAYS: ES modules
import { Component } from './component';
import type { Props } from './types';
export { Component };

// ❌ NEVER: CommonJS
const { Component } = require('./component');
```

#### Destructure Imports
```typescript
// ✅ GOOD
import { useState, useEffect } from 'react';
import { Button, Card } from '@/components/ui';

// ❌ BAD
import React from 'react';
React.useState();
```

#### Explicit Return Types
```typescript
// ✅ ALWAYS declare return types for functions
function getUser(id: string): Promise<User | null> {
  return fetch(`/api/users/${id}`).then(res => res.json());
}

// ✅ ReactNode for components
export function Card({ children }: { children: ReactNode }): ReactNode {
  return <div>{children}</div>;
}
```

#### No `any` Types
```typescript
// ❌ NEVER use `any`
function processData(data: any) { }

// ✅ Use `unknown` and type guards
function processData(data: unknown): number[] {
  if (Array.isArray(data)) {
    return data.filter((item): item is number => typeof item === 'number');
  }
  throw new Error('Invalid data');
}
```

---

### React

#### Server Components by Default
```typescript
// ✅ DEFAULT: Server Component (no "use client")
export default async function Page() {
  const data = await getData();
  return <Content data={data} />;
}
```

#### Client Components When Needed
```typescript
// ✅ Use "use client" for:
// - useState, useEffect, hooks
// - Event handlers (onClick, onChange, etc.)
// - Framer Motion
// - Browser APIs

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function InteractiveComponent() {
  const [count, setCount] = useState(0);
  return <motion.button onClick={() => setCount(count + 1)}>
    {count}
  </motion.button>;
}
```

#### Component Props Pattern
```typescript
/**
 * ComponentName - Brief description
 *
 * @example
 * ```tsx
 * <ComponentName variant="primary" />
 * ```
 */
interface ComponentNameProps {
  /**
   * The variant style
   * @default "default"
   */
  variant?: 'default' | 'primary' | 'secondary';

  /**
   * Child elements
   */
  children: ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;
}

export const ComponentName = React.forwardRef<
  HTMLDivElement,
  ComponentNameProps
>(({ variant = 'default', children, className }, ref) => {
  return (
    <div ref={ref} className={cn('base-classes', className)}>
      {children}
    </div>
  );
});

ComponentName.displayName = 'ComponentName';
```

---

### Styling

#### Tailwind Utility Classes Only
```typescript
// ✅ GOOD: Tailwind utilities
<div className="rounded-3xl bg-white p-8 shadow-sm hover:shadow-brand-lg transition-all">

// ❌ BAD: Inline styles
<div style={{ borderRadius: '24px', backgroundColor: 'white' }}>
```

#### Use `cn()` Helper for Conditional Classes
```typescript
import { cn } from '@/lib/utils';

<button
  className={cn(
    'base-classes',
    variant === 'primary' && 'bg-brand-primary',
    isActive && 'ring-2',
    className
  )}
>
```

#### Mobile-First Responsive Design
```typescript
// ✅ GOOD: Mobile first, then tablet, then desktop
<div className="text-2xl md:text-4xl lg:text-6xl">
  Headline
</div>

// ❌ BAD: Desktop first
<div className="lg:text-2xl md:text-4xl text-6xl">
```

---

## Brand Colors & Design System

### Colors (Use Tailwind Classes)
```typescript
// Primary brand colors
'bg-brand-primary'      // #0A84FF - Electric blue
'bg-brand-secondary'    // #0060CE - Deep blue
'bg-brand-light'        // #E5F2FF - Light blue
'bg-brand-dark'         // #003D82 - Dark blue

// Backgrounds
'bg-background-primary'   // #FAFAFA - Soft white
'bg-background-secondary' // #F5F5F5 - Slightly darker
'bg-background-card'      // #FFFFFF - Pure white

// Text
'text-text-primary'    // #0F0F0F - Near black
'text-text-secondary'  // #6B7280 - Warm gray
'text-text-tertiary'   // #9CA3AF - Light gray

// Accents
'bg-accent-purple'  // #8B5CF6 - Playful
'bg-accent-pink'    // #EC4899 - Highlights
'bg-accent-green'   // #10B981 - Success
'bg-accent-orange'  // #F59E0B - Warning
```

### Typography
```typescript
// Font family: Inter (loaded in app/layout.tsx)
'font-sans'  // Inter

// Headings
'text-hero'  // Hero headline (40px - 64px fluid)
'text-h1'    // H1 (32px - 48px fluid)
'text-h2'    // H2 (28px - 36px fluid)
'text-h3'    // H3 (20px - 24px fluid)

// Body
'text-lg'    // Large body (18px - 20px)
'text-base'  // Body (16px)
'text-sm'    // Small (14px)
'text-xs'    // Tiny (12px)
```

### Spacing & Layout
```typescript
// Section padding
'py-32'  // Homepage sections
'py-24'  // Service page sections
'py-16'  // Nested sections

// Container
'container mx-auto px-4 sm:px-6 lg:px-8'

// Card padding
'p-6 md:p-8'  // Internal padding

// Border radius
'rounded-full'  // Buttons (pill-shaped)
'rounded-3xl'   // Cards, modals
'rounded-2xl'   // Images
'rounded-xl'    // Inputs
```

---

## File Organization

```
app/                    # Next.js routes (App Router)
├── page.tsx           # Homepage
├── layout.tsx         # Root layout
├── globals.css        # Global styles + Tailwind
├── services/
│   └── page.tsx       # Services page
└── api/
    └── route.ts       # API routes

components/
├── ui/                # shadcn/ui components (customized)
│   ├── button.tsx
│   ├── card.tsx
│   └── ...
├── 21st/              # 21st.dev components
├── aceternity/        # Aceternity UI components
├── features/          # Feature-specific components
│   ├── hero/
│   │   ├── Hero.tsx
│   │   └── Hero3DBackground.tsx
│   └── services/
└── shared/            # Reusable components
    ├── GradientText.tsx
    └── AnimatedSection.tsx

lib/
├── utils.ts           # cn() helper and utilities
├── animations.ts      # Framer Motion variants
└── constants.ts       # Constants

hooks/                 # Custom React hooks

types/                 # TypeScript type definitions

content/               # Static content/data

public/                # Static assets
```

---

## Naming Conventions

### Files & Folders
- **Components**: `ComponentName.tsx` (PascalCase)
- **Utilities**: `utility-name.ts` (kebab-case)
- **Hooks**: `useHookName.ts`
- **Types**: `types.ts` or `ComponentName.types.ts`

### Code
- **Components**: PascalCase (`Button`, `ServiceCard`)
- **Functions**: camelCase (`getUser`, `formatDate`)
- **Constants**: UPPER_SNAKE_CASE (`API_URL`, `MAX_ITEMS`)
- **Props Interfaces**: `ComponentNameProps`

---

## Animation Guidelines

### Framer Motion Variants
```typescript
// Always use predefined variants from lib/animations.ts
import { fadeUp, staggerContainer } from '@/lib/animations';

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-100px' }}
  variants={fadeUp}
>
  Content appears on scroll
</motion.div>
```

### Duration Standards
```typescript
// From lib/animations.ts
DURATION.instant  // 0.15s - Micro-interactions
DURATION.fast     // 0.3s  - Standard transitions
DURATION.normal   // 0.6s  - Entrances, exits
DURATION.slow     // 1.0s  - Hero animations
```

### Accessibility
```typescript
// ALWAYS respect prefers-reduced-motion
import { getReducedMotionVariants } from '@/lib/animations';

<motion.div variants={getReducedMotionVariants(fadeUp)}>
  Content
</motion.div>
```

---

## Testing Requirements

### Before Committing
1. **Type check**: `npm run type-check`
2. **Lint**: `npm run lint`
3. **Format**: `npm run format`
4. **Build**: `npm run build` (ensure no errors)

### Accessibility
- All interactive elements must be keyboard accessible
- Images must have alt text
- Semantic HTML (proper heading hierarchy)
- ARIA labels where needed
- WCAG AA compliance minimum

### Performance
- Images: Use Next.js `<Image>` component
- Lazy load below-fold content
- Code split heavy components (3D, charts)
- Lighthouse score 90+ target

---

## Component Libraries

### When to Use Each Library

**shadcn/ui** (Primary):
- Forms (inputs, selects, checkboxes)
- Buttons
- Dialogs/Modals
- Dropdowns
- Navigation
- Any base UI component

**21st.dev**:
- Hero sections
- Feature showcases
- Pricing tables
- CTA sections
- Newsletter signups
- Marketing pages

**Aceternity UI**:
- Advanced animations
- 3D effects
- Special feature highlights
- Hero background effects

**Custom**:
- Brand-specific components
- Unique interactions
- Complex business logic

---

## Common Patterns

### Page Structure
```typescript
// app/page.tsx (Server Component)
import { Hero } from '@/components/features/hero/Hero';
import { Services } from '@/components/features/services/Services';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
    </main>
  );
}
```

### Animated Section
```typescript
'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

export function AnimatedSection({ children }: { children: ReactNode }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeUp}
      className="py-32"
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </motion.section>
  );
}
```

### Gradient Text
```typescript
import { cn } from '@/lib/utils';

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span className={cn(
      'bg-gradient-to-r from-brand-primary to-brand-secondary',
      'bg-clip-text text-transparent',
      className
    )}>
      {children}
    </span>
  );
}
```

---

## Git Workflow

### Commit Messages
```bash
# Conventional commits format
feat: Add hero section with 3D background
fix: Resolve mobile navigation bug
style: Update button hover states
docs: Add component documentation
test: Add accessibility tests for forms
```

### AI Attribution
```bash
# Include co-author when Claude helps
git commit -m "feat: Add service cards

🤖 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Available Commands (package.json)

```bash
npm run dev              # Start dev server (Turbopack)
npm run dev:clean        # Clean .next and start dev
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint errors
npm run format           # Format with Prettier
npm run format:check     # Check formatting
npm run type-check       # TypeScript type checking
```

---

## Slash Commands

Available Claude Code slash commands (in `.claude/commands/`):

- `/component` - Generate new React component
- `/test` - Create test file
- `/api-route` - Create Next.js API route
- `/page` - Create new page
- `/lint` - Run linters and auto-fix
- `/review` - Pre-commit code review

---

## Documentation References

**Internal Docs** (`.rebrand/docs/`):
- REBRAND-MASTER-PLAN.md - Project vision & phases
- TECH-STACK.md - All dependencies
- DESIGN-SYSTEM.md - Brand colors, typography, spacing
- CONTENT-STRUCTURE.md - Site structure & copy

**Context Docs** (`.rebrand/context/`):
- COMPONENT-PATTERNS.md - React/TypeScript patterns
- COMPONENT-LIBRARY-REGISTRY.md - When to use which library
- ANIMATION-GUIDELINES.md - Framer Motion standards
- TYPESCRIPT-CONVENTIONS.md - Type patterns
- TESTING-STANDARDS.md - Test requirements

**External Docs**:
- [Next.js 16 Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)

---

## Design Principles

**Brand Personality**:
- Friendly but supremely confident
- Playful but technically rigorous
- Approachable but elite

**Visual Language**:
- Soft, rounded corners (friendly)
- Bold typography (confident)
- Generous whitespace (premium)
- Subtle animations (playful, not distracting)
- 3D elements (modern, cutting-edge)

**UX Principles**:
- Mobile-first
- Accessibility is non-negotiable
- Performance matters (90+ Lighthouse)
- Clear CTAs
- Smooth, purposeful animations

---

## Anti-Patterns (Don't Do This)

### ❌ Inline Styles
```typescript
<div style={{ color: 'red' }}>  // Use Tailwind instead
```

### ❌ Using `any` Type
```typescript
function process(data: any) { }  // Use `unknown` + type guards
```

### ❌ Client Component for Static Content
```typescript
'use client';  // Don't use client components for static content
export default function StaticPage() { }
```

### ❌ Prop Drilling
```typescript
<Parent user={user}>
  <Child user={user}>
    <GrandChild user={user} />  // Use Server Components instead
```

### ❌ Too Much Animation
```typescript
<motion.div animate={{ rotate: [0, 360, 0, 360] }}>  // Distracting!
```

---

## Quick Reference

**Read these first**:
1. `.rebrand/context/COMPONENT-PATTERNS.md` - How to build components
2. `.rebrand/context/ANIMATION-GUIDELINES.md` - How to animate
3. `.rebrand/docs/DESIGN-SYSTEM.md` - Brand colors & typography

**Before committing**:
1. Run `npm run type-check`
2. Run `npm run lint:fix`
3. Run `npm run format`
4. Test in browser (mobile + desktop)
5. Check accessibility (keyboard navigation)

**Performance checklist**:
- [ ] Use Next.js `<Image>` component
- [ ] Lazy load 3D components
- [ ] Minimize client components
- [ ] Optimize images
- [ ] Check Lighthouse scores

---

**Project Status**: Phase 0 Complete, Phase 1 In Progress
**Last Updated**: 2025-11-04
**Primary Developer**: Princeton AI Partners + Claude Code

Happy coding! 🚀
