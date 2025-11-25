# Princeton AI Partners - Website Rebrand v2.0

> **AI-Native Development Environment** - This file auto-loads when Claude Code starts.

**Last Updated:** 2025-11-25
**Branch:** REBRAND

---

## Project Overview

**What:** B2B software agency website with interactive quote calculator
**Brand Position:** "Your Automated CTO with Live Support"
**Stack:** Next.js 15 + React 19 + TypeScript + Tailwind CSS + Framer Motion

### Core Products
1. **MVP Builder** (Hero) - Interactive quote calculator, $15k-$50k projects
2. **7 Services** - AI Agents, AI Phone, Web Dev, Automation, Scraping, Bots, Bespoke
3. **CTO Suite** - $2,500/month recurring service

---

## Source of Truth Files

**Always read these for current values - don't rely on hardcoded info:**

| What | File |
|------|------|
| **Colors & Theme** | `tailwind.config.ts` |
| **Design System** | `.rebrand/docs/DESIGN-SYSTEM.md` |
| **Component Patterns** | `.rebrand/context/COMPONENT-PATTERNS.md` |
| **TypeScript Conventions** | `.rebrand/context/TYPESCRIPT-CONVENTIONS.md` |
| **Animation Guidelines** | `.rebrand/context/ANIMATION-GUIDELINES.md` |
| **Testing Standards** | `.rebrand/context/TESTING-STANDARDS.md` |
| **Vision & Goals** | `.rebrand/VISION-SUMMARY.md` |
| **Site Config** | `lib/constants.ts` |

---

## Code Conventions

### TypeScript
- **Strict mode** - No `any` types
- **Interfaces** - Use `interface` for props, `type` for unions
- **JSDoc** - Document all public interfaces

### React Components
- **Server Components by default** - No `'use client'` unless needed
- **Client Components** - Only for: hooks, event handlers, Framer Motion, browser APIs
- **forwardRef** - For all UI components
- **displayName** - Always set on forwardRef components

### Styling
- **No inline styles** - Use Tailwind classes only
- **cn() helper** - For conditional classes: `cn('base', condition && 'active')`
- **Mobile-first** - Start mobile, add `md:` / `lg:` for larger
- **Brand tokens** - Use semantic color names from `tailwind.config.ts`

### File Naming
- **Components:** `PascalCase.tsx`
- **Utilities:** `kebab-case.ts`
- **Hooks:** `use-hook-name.ts`

---

## Project Structure

```
new-site/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── layout/             # Header, Footer
│   ├── animations/         # Motion wrappers
│   └── icons/              # Icon system
├── lib/
│   ├── utils.ts            # cn() helper
│   ├── constants.ts        # Site config
│   └── animations.ts       # Framer variants
├── .rebrand/               # Vision & planning docs
└── public/                 # Static assets
```

---

## Available Slash Commands

| Command | Description |
|---------|-------------|
| `/component` | Generate a new React component |
| `/page` | Create a new Next.js page |
| `/api-route` | Create an API route handler |
| `/test` | Generate Playwright tests |
| `/lint` | Run ESLint + Prettier + TypeScript checks |
| `/review` | Pre-commit code review |

---

## Development Scripts

```bash
npm run dev           # Start dev server (port 3000)
npm run dev:clean     # Kill port + clean .next + start
npm run build         # Production build
npm run lint:fix      # Auto-fix linting issues
npm run format        # Format with Prettier
npm run type-check    # TypeScript check
```

---

## Git Workflow

### Commit Format
```
type: brief description

- Detail 1
- Detail 2

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

**Types:** `feat`, `fix`, `refactor`, `docs`, `style`, `test`, `chore`

---

## Pre-Commit Checklist

- [ ] `npm run type-check` passes
- [ ] `npm run lint` passes
- [ ] No `any` types introduced
- [ ] No console.logs (except intentional)
- [ ] Mobile responsive (test 320px-1280px)
- [ ] Dark mode works (if applicable)
- [ ] Accessibility: semantic HTML, alt text, ARIA labels

---

## Common Gotchas

1. **Client vs Server** - Framer Motion requires `'use client'`
2. **Dark Mode** - Use `dark:` prefix, check `tailwind.config.ts` for dark colors
3. **Images** - Always use `next/image` with proper `sizes` prop
4. **Icons** - Import from `lucide-react`
5. **cn() import** - `import { cn } from '@/lib/utils'`

---

## Before Building

When starting work on a component or feature:
1. Read `COMPONENT-PATTERNS.md` for the standard template
2. Check `tailwind.config.ts` for available colors/animations
3. Look at existing similar components in `components/ui/`
4. Use the `/component` command for scaffolding

---

**Remember:** Quality over speed. Reference the source files for current values.
