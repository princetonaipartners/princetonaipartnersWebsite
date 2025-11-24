# Component Generator

Generate a new React component following Princeton AI patterns.

## Steps:

1. **Ask for component details**:
   - Component name (PascalCase)
   - Component type: UI component, feature component, or layout component
   - Should it be a client or server component?
   - What props does it need?

2. **Read patterns** from `.rebrand/context/COMPONENT-PATTERNS.md`

3. **Generate component file** with:
   - TypeScript interface for props with JSDoc
   - Forwarded refs (for UI components)
   - CVA variants (if applicable)
   - Proper imports (React, cn, type imports)
   - Default exports

4. **Determine file location**:
   - UI components → `components/ui/`
   - Feature components → `components/features/[feature-name]/`
   - Shared components → `components/shared/`

5. **Create the file** at the appropriate location

6. **Add component to index** (if applicable):
   - Add export to `components/ui/index.ts` (for UI components)

## Template Structure:

```typescript
import React from 'react';
import { cn } from '@/lib/utils';

/**
 * ComponentName - Brief description
 *
 * @example
 * ```tsx
 * <ComponentName variant="primary">
 *   Content
 * </ComponentName>
 * ```
 */
interface ComponentNameProps {
  /**
   * Component variant
   * @default "default"
   */
  variant?: 'default' | 'primary';

  /**
   * Child elements
   */
  children: React.ReactNode;

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
    <div
      ref={ref}
      className={cn(
        'base-styles',
        variant === 'primary' && 'primary-styles',
        className
      )}
    >
      {children}
    </div>
  );
});

ComponentName.displayName = 'ComponentName';
```

## Brand Checklist:

- [ ] Uses Tailwind classes (no inline styles)
- [ ] Follows brand colors (brand-primary, brand-secondary, etc.)
- [ ] Mobile-first responsive design
- [ ] Accessible (semantic HTML, ARIA labels if needed)
- [ ] TypeScript strict mode compatible

## After Generation:

- Show the file path and content
- Suggest running `/lint` to format the code
- Remind to test the component in browser
