# Component Patterns - Princeton AI Partners

> **AI-Readable Reference**: This document defines the standard patterns for building React components in this project. Always follow these conventions.

---

## Component Architecture

### File Structure

```
components/
├── ui/                          # shadcn/ui base components (customized)
│   ├── button.tsx
│   ├── card.tsx
│   └── ...
├── features/                    # Feature-specific components
│   ├── hero/
│   │   ├── Hero.tsx
│   │   ├── Hero3DBackground.tsx
│   │   └── HeroContent.tsx
│   └── services/
│       ├── ServiceCard.tsx
│       └── ServiceGrid.tsx
├── layout/                      # Layout components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Navigation.tsx
└── shared/                      # Reusable components
    ├── GradientText.tsx
    ├── AnimatedSection.tsx
    └── MagneticButton.tsx
```

---

## TypeScript Component Pattern

### Standard Component Template

```typescript
import React from 'react';
import { cn } from '@/lib/utils';

/**
 * ComponentName - Brief description of what this component does
 *
 * @example
 * ```tsx
 * <ComponentName variant="primary" size="lg">
 *   Content
 * </ComponentName>
 * ```
 */
interface ComponentNameProps {
  /**
   * The variant style to apply
   * @default "default"
   */
  variant?: 'default' | 'primary' | 'secondary';

  /**
   * The size of the component
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Child elements to render
   */
  children: React.ReactNode;

  /**
   * Optional additional CSS classes
   */
  className?: string;
}

export const ComponentName = React.forwardRef<
  HTMLDivElement,
  ComponentNameProps
>(({ variant = 'default', size = 'md', children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        // Base styles
        'relative',

        // Variant styles
        {
          'default': 'bg-white text-text-primary',
          'primary': 'bg-brand-primary text-white',
          'secondary': 'bg-brand-light text-brand-dark',
        }[variant],

        // Size styles
        {
          'sm': 'p-4 text-sm',
          'md': 'p-6 text-base',
          'lg': 'p-8 text-lg',
        }[size],

        // Custom classes
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

ComponentName.displayName = 'ComponentName';
```

---

## Server vs Client Components

### Server Component (Default)

```typescript
// app/page.tsx or components without interactivity

import { ComponentName } from '@/components/ui/component-name';

export default function Page() {
  return (
    <main>
      <ComponentName>Static content</ComponentName>
    </main>
  );
}
```

**Use Server Components when:**
- No interactivity needed
- Fetching data
- Static content
- SEO-critical content

### Client Component

```typescript
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function InteractiveComponent() {
  const [count, setCount] = useState(0);

  return (
    <motion.button
      onClick={() => setCount(count + 1)}
      whileHover={{ scale: 1.05 }}
    >
      Count: {count}
    </motion.button>
  );
}
```

**Use Client Components when:**
- Using `useState`, `useEffect`, or other hooks
- Event handlers (`onClick`, `onChange`, etc.)
- Framer Motion animations
- Browser APIs (localStorage, etc.)

---

## Component Variants with CVA

Use `class-variance-authority` for complex variant logic:

```typescript
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  // Base styles (always applied)
  'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:shadow-brand-lg hover:scale-105',
        outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-light',
        ghost: 'text-brand-primary hover:bg-brand-light',
      },
      size: {
        sm: 'h-10 px-6 text-sm',
        md: 'h-12 px-8 text-base',
        lg: 'h-14 px-10 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
```

---

## Brand-Specific Components

### GradientText

```typescript
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </span>
  );
}
```

### AnimatedCard

```typescript
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedCard({
  children,
  className,
  delay = 0
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 }
      }}
      className={cn(
        'rounded-3xl bg-white p-8 shadow-sm hover:shadow-brand-lg transition-shadow',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
```

---

## Data Fetching Patterns

### Server Component with Data Fetching

```typescript
// app/services/page.tsx

interface Service {
  id: string;
  title: string;
  description: string;
}

async function getServices(): Promise<Service[]> {
  // Fetch from API or database
  const response = await fetch('https://api.example.com/services', {
    cache: 'no-store', // or 'force-cache' for static data
  });

  if (!response.ok) {
    throw new Error('Failed to fetch services');
  }

  return response.json();
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <main>
      <h1>Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </main>
  );
}
```

---

## Composition Patterns

### Compound Components

```typescript
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn('rounded-3xl bg-white p-8 shadow-sm', className)}>
      {children}
    </div>
  );
}

Card.Header = function CardHeader({ children, className }: CardProps) {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
};

Card.Title = function CardTitle({ children, className }: CardProps) {
  return (
    <h3 className={cn('text-h3 font-semibold', className)}>
      {children}
    </h3>
  );
};

Card.Content = function CardContent({ children, className }: CardProps) {
  return (
    <div className={cn('text-text-secondary', className)}>
      {children}
    </div>
  );
};

// Usage:
<Card>
  <Card.Header>
    <Card.Title>Title</Card.Title>
  </Card.Header>
  <Card.Content>
    Content
  </Card.Content>
</Card>
```

---

## Accessibility Patterns

### Focus Management

```typescript
'use client';

import { useRef, useEffect } from 'react';

export function Modal({ isOpen, onClose, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      // Focus the modal when it opens
      modalRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      className="modal"
    >
      {children}
    </div>
  );
}
```

### Semantic HTML

```typescript
// ✅ GOOD: Semantic HTML
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/services">Services</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

// ❌ BAD: Div soup
<div className="navigation">
  <div className="nav-item">
    <div onClick={handleClick}>Services</div>
  </div>
</div>
```

---

## Performance Patterns

### Lazy Loading Images

```typescript
import Image from 'next/image';

export function OptimizedImage({ src, alt }: ImageProps) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={false} // Set to true for above-the-fold images
      />
    </div>
  );
}
```

### Dynamic Imports

```typescript
import dynamic from 'next/dynamic';

// Lazy load 3D component (heavy)
const Hero3DBackground = dynamic(
  () => import('@/components/features/hero/Hero3DBackground'),
  {
    ssr: false, // Don't render on server
    loading: () => <div className="h-screen bg-gradient-to-br from-brand-light to-white" />
  }
);
```

---

## Error Handling

### Error Boundary Pattern

```typescript
'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="text-h2 mb-4">Something went wrong!</h2>
      <button
        onClick={reset}
        className="rounded-full bg-brand-primary px-8 py-3 text-white"
      >
        Try again
      </button>
    </div>
  );
}
```

---

## Component Testing Pattern

```typescript
// __tests__/Button.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '@/components/ui/button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);

    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant styles', () => {
    render(<Button variant="outline">Outline</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('border-2', 'border-brand-primary');
  });
});
```

---

## Naming Conventions

### Components
- **PascalCase**: `ComponentName.tsx`
- **Descriptive**: `ServiceCard.tsx` not `Card.tsx`
- **Feature prefix**: `Hero3DBackground.tsx` not `ThreeDBackground.tsx`

### Props Interfaces
- **Component + Props**: `ComponentNameProps`
- **Export with component**: `export interface ButtonProps`

### Files
- **Components**: `ComponentName.tsx`
- **Utilities**: `utility-name.ts`
- **Hooks**: `useHookName.ts`
- **Types**: `types.ts` or `ComponentName.types.ts`

---

## Anti-Patterns to Avoid

### ❌ Don't: Inline Styles
```typescript
// BAD
<div style={{ color: 'red', fontSize: '16px' }}>Text</div>

// GOOD
<div className="text-red-500 text-base">Text</div>
```

### ❌ Don't: Prop Drilling
```typescript
// BAD: Passing props through many levels
<Parent data={data}>
  <Child data={data}>
    <GrandChild data={data} />
  </Child>
</Parent>

// GOOD: Use Server Components or context when needed
async function Parent() {
  const data = await getData();
  return <GrandChild data={data} />;
}
```

### ❌ Don't: useEffect for Data Fetching in Server Components
```typescript
// BAD (Client Component)
'use client';
function Page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/api/data').then(res => res.json()).then(setData);
  }, []);
}

// GOOD (Server Component)
async function Page() {
  const data = await getData(); // Direct fetch on server
  return <Content data={data} />;
}
```

---

**Last Updated**: 2025-11-04
**Status**: Complete - Follow these patterns for all components
