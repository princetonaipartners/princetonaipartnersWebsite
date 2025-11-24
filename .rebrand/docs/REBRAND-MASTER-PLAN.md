# MISSION: Build Princeton AI Partners - Premium Custom Tech Consultancy (Playful Tech Aesthetic)

> **Created**: 2025-10-30
> **Status**: Phase 0 - Documentation & Preparation
> **Timeline**: 3+ weeks (quality over speed)
> **Approach**: Methodical, well-documented, thoroughly tested

---

## 🎯 PROJECT VISION

Transform Princeton-ai.com into a **world-class tech consultancy platform** that screams "we build anything, and we do it fast." We're not another AI consultancy using no-code tools - we're full-stack engineers who build custom products end-to-end: RAG agents, phone AI systems, web scraping infrastructure, N8n workflows, process automation, and bespoke technical solutions.

**Brand Personality**: Friendly but supremely confident. Playful but technically rigorous. Approachable but elite. Think: Anthropic meets Puzzle Labs meets your most talented developer friend who just happens to be a design genius.

**Core Differentiators**:
- ⚡ **Speed**: We ship in weeks, not months
- 🎨 **100% Custom**: Zero templates, every solution is bespoke
- 🧠 **Technical Depth**: We build from scratch, not with no-code tools
- 🔄 **Full Stack**: Strategy → Design → Code → Deploy → Support

**The Goal**: Every visitor should think "holy shit, if they built THIS, imagine what they can build for me."

---

## 📦 TECH STACK (Premium Modern)

### Core Framework:
- **Next.js 15** (App Router, Server Components, React Server Actions)
- **TypeScript** (strict mode, comprehensive types)
- **Tailwind CSS** (custom theme with brand colors)
- **Framer Motion** (smooth animations, page transitions)

### 3D & Advanced Visuals:
- **React Three Fiber** (@react-three/fiber + @react-three/drei)
  - 3D animated icons for services
  - Interactive 3D hero elements
  - Smooth camera movements
- **Three.js** (underlying 3D engine)
- **@use-gesture/react** (drag interactions for 3D objects)

### UI/Components:
- **shadcn/ui** (base components, heavily customized)
- **Lucide Icons** (consistent iconography)
- **Radix UI** (accessible primitives)

### Animation Libraries:
- **Framer Motion** (primary animations)
- **GSAP** (complex scroll animations, text reveals) [OPTIONAL]
- **React Spring** (physics-based animations where needed)
- **Lottie** (if we create custom animated illustrations) [OPTIONAL]

### AI/Interactive Demos:
- **Vercel AI SDK** (for live RAG demo on site) - MOCK VERSION FIRST
- **React Syntax Highlighter** (code snippets with themes)
- **Recharts or Victory** (data visualizations)
- **React Flow** (workflow/architecture diagrams)

### Development:
- **ESLint + Prettier** (code quality)
- **Husky** (pre-commit hooks)
- **TypeScript** (strict, no implicit any)
- **Turbopack** (fast dev server in Next.js 15)

### Deployment:
- **Vercel** (already configured)
- **Git** (version control throughout)

---

## 🎨 DESIGN SYSTEM (Playful Tech Aesthetic)

### Brand Colors:
```typescript
colors: {
  brand: {
    primary: '#0A84FF',           // Electric blue (hero, CTAs)
    secondary: '#0060CE',         // Deep blue (accents)
    gradient: 'linear-gradient(135deg, #0A84FF 0%, #0060CE 100%)',
    light: '#E5F2FF',             // Light blue (backgrounds, highlights)
    dark: '#003D82',              // Dark blue (text on light backgrounds)
  },
  background: {
    primary: '#FAFAFA',           // Soft white (main bg)
    secondary: '#F5F5F5',         // Slightly darker (sections)
    card: '#FFFFFF',              // Pure white (cards, modals)
    elevated: '#FFFFFF',          // White with shadow (floating elements)
  },
  text: {
    primary: '#0F0F0F',           // Near black (headings, body)
    secondary: '#6B7280',         // Warm gray (descriptions)
    tertiary: '#9CA3AF',          // Light gray (captions, labels)
    inverse: '#FFFFFF',           // White text (on dark backgrounds)
  },
  accent: {
    purple: '#8B5CF6',            // Playful accent 1
    pink: '#EC4899',              // Playful accent 2
    green: '#10B981',             // Success/active states
    orange: '#F59E0B',            // Warnings/highlights
  },
  border: '#E5E7EB',              // Subtle borders
  shadow: 'rgba(0, 0, 0, 0.08)',  // Soft shadows
}
```

### Typography:
- **Primary Font**: Inter (400, 500, 600, 700, 800)
- **Monospace**: JetBrains Mono (for code snippets)
- **Fluid Scale**:
  - Mobile: 14-32px
  - Desktop: 16-64px
  - Use `clamp()` for smooth responsive scaling
- **Line Height**: 1.6 for body, 1.2 for headings
- **Letter Spacing**: -0.02em for large headings (tighter, more modern)

### Spacing System:
- Use Tailwind's default (4px base unit)
- Sections: `py-16 md:py-24 lg:py-32` (generous whitespace)
- Container: `max-w-7xl` (1280px) with `px-4 sm:px-6 lg:px-8`
- Component spacing: `space-y-4` to `space-y-12` based on hierarchy

### Border Radius:
- Buttons: `rounded-full` (pill-shaped, playful)
- Cards: `rounded-2xl` to `rounded-3xl` (soft, friendly)
- Inputs: `rounded-xl`
- Modals: `rounded-3xl`
- Images: `rounded-2xl`

### Shadows:
- Subtle: `shadow-sm` (cards at rest)
- Medium: `shadow-lg` (elevated cards, modals)
- Heavy: `shadow-2xl` (hero elements, important CTAs)
- Colored shadows on hover: `shadow-brand-primary/20`

### Animation Principles:
- **Duration**: 150ms (micro), 300ms (standard), 600ms (elaborate), 1200ms (hero)
- **Easing**: Custom cubic-bezier for premium feel:
  - Entrance: `cubic-bezier(0.22, 1, 0.36, 1)` (smooth ease-out)
  - Exit: `cubic-bezier(0.4, 0, 1, 1)` (quick exit)
  - Bounce: `cubic-bezier(0.68, -0.55, 0.265, 1.55)` (playful)
- **Scroll Animations**: Fade up + slight scale (subtle depth)
- **Page Transitions**: Cross-fade with slight upward movement
- **Hover States**: Scale 1.02-1.05 + colored shadow
- **3D Rotations**: Smooth, physics-based (React Spring)

---

## 🗂️ PROJECT STRUCTURE

```
princeton-ai/
├── app/
│   ├── (marketing)/                    # Marketing pages group
│   │   ├── layout.tsx                  # Shared marketing layout
│   │   ├── page.tsx                    # Homepage (hero, services, CTA)
│   │   ├── custom-products/page.tsx    # Flagship custom dev page
│   │   ├── ai-phone-agents/page.tsx    # Phone AI systems
│   │   ├── process-automation/page.tsx # Automation & workflows
│   │   ├── rag-agents/
│   │   │   ├── page.tsx                # RAG explanation + demo
│   │   │   └── components/             # RAG-specific components
│   │   │       ├── RAGDemo.tsx         # Interactive demo (MOCK FIRST)
│   │   │       └── ArchitectureDiagram.tsx
│   │   ├── web-scraping/page.tsx       # Scraping + bots
│   │   ├── n8n-workflows/page.tsx      # N8n automation
│   │   ├── website-management/page.tsx # Web dev services
│   │   ├── contact/page.tsx            # Contact form + info
│   │   └── about/page.tsx              # Team, story, values
│   ├── checkin/                        # Existing production feature (migrate)
│   │   ├── page.tsx
│   │   └── components/
│   ├── api/                            # API routes
│   │   ├── contact/route.ts            # Contact form handler
│   │   └── rag-demo/route.ts           # RAG demo backend (mock)
│   ├── layout.tsx                      # Root layout
│   ├── globals.css                     # Global styles + Tailwind
│   └── not-found.tsx                   # 404 page
├── components/
│   ├── ui/                             # shadcn components (customized)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── layout/                         # Layout components
│   │   ├── Header.tsx                  # Sticky nav with blur
│   │   ├── Footer.tsx                  # Multi-column footer
│   │   ├── Navigation.tsx              # Desktop nav with dropdowns
│   │   └── MobileMenu.tsx              # Mobile slide-in menu
│   ├── sections/                       # Homepage sections
│   │   ├── Hero.tsx                    # Hero with 3D background
│   │   ├── ServicesGrid.tsx            # Service cards with 3D icons
│   │   ├── SocialProof.tsx             # Stats, testimonials
│   │   └── FinalCTA.tsx                # Bottom CTA
│   ├── animations/                     # Animation wrappers
│   │   ├── PageTransition.tsx          # Route transitions
│   │   ├── FadeInSection.tsx           # Scroll-triggered fade
│   │   ├── StaggerChildren.tsx         # Stagger list animations
│   │   └── MagneticButton.tsx          # Magnetic hover effect
│   ├── 3d/                             # 3D components (React Three Fiber)
│   │   ├── Scene.tsx                   # Main 3D scene wrapper
│   │   ├── ServiceIcon3D.tsx           # 3D service icons
│   │   ├── FloatingShapes.tsx          # Abstract 3D bg shapes
│   │   └── InteractiveLogo.tsx         # 3D logo (if we build one)
│   ├── demos/                          # Interactive demos
│   │   ├── RAGPlayground.tsx           # Live RAG query interface
│   │   ├── WorkflowVisualizer.tsx      # N8n workflow diagram
│   │   └── CodeShowcase.tsx            # Syntax highlighted code
│   └── shared/                         # Reusable components
│       ├── ServiceCard.tsx             # Service card component
│       ├── FeatureList.tsx             # Feature grid
│       ├── Testimonial.tsx             # Testimonial card
│       └── GradientText.tsx            # Gradient text component
├── lib/
│   ├── utils.ts                        # cn() helper, etc.
│   ├── constants.ts                    # Site-wide constants
│   ├── animations.ts                   # Framer Motion variants
│   ├── three-helpers.ts                # Three.js utilities
│   └── api-client.ts                   # API call helpers
├── hooks/
│   ├── useScrollAnimation.ts           # Custom scroll hook
│   ├── useMagneticEffect.ts            # Magnetic button hook
│   └── useMousePosition.ts             # Mouse tracking
├── types/
│   ├── index.ts                        # Global types
│   └── services.ts                     # Service data types
├── content/
│   ├── services.ts                     # Service data (descriptions, features)
│   ├── testimonials.ts                 # Client testimonials
│   └── team.ts                         # Team member data (if applicable)
├── public/
│   ├── images/
│   │   ├── logos/                      # Logo variations
│   │   ├── services/                   # Service page images
│   │   ├── og/                         # Open Graph images
│   │   └── team/                       # Team photos (if applicable)
│   ├── models/                         # 3D models (.glb, .gltf)
│   └── fonts/                          # Self-hosted fonts (if needed)
├── styles/
│   └── code-themes.css                 # Syntax highlighting themes
├── .env.local                          # Environment variables (API keys)
├── tailwind.config.ts                  # Tailwind config (brand colors)
├── tsconfig.json                       # TypeScript config
├── next.config.js                      # Next.js config
└── package.json
```

---

## 📋 8 DEVELOPMENT PHASES

### PHASE 0: Documentation & Preparation (CURRENT)
**Status**: In Progress

**Tasks**:
- [x] Create `.rebrand/` documentation structure
- [ ] Write all planning documents
- [ ] Verify all required tools/MCPs
- [ ] Document all npm dependencies
- [ ] Create implementation checklist

### PHASE 1: Research & Architecture
**Primary Agent**: Design Researcher

**Competitor Sites to Analyze**:
1. **Anthropic.com** - Friendly sophistication, clear explanations
2. **Puzzle.io** - Playful animations, soft gradients
3. **Mercury.com** - Bold, modern, confident
4. **Linear.app** - Clean, fast, smooth transitions
5. **Pitch.com** - 3D elements, immersive feel

**Extract**:
- Color usage (playful + professional balance)
- Animation timing and easing
- Typography scale and hierarchy
- Spacing and whitespace strategies
- 3D element integration
- Interaction patterns
- Navigation styles
- CTA placement and design
- Content structure (explaining complex concepts simply)

**Modern Web Trends to Research**:
- Bento box layouts
- Magnetic button effects
- Micro-interactions
- 3D icons and illustrations
- Gradient text effects
- Glassmorphism
- Scroll-triggered reveals
- Custom cursors
- Interactive embedded demos

**Deliverables**:
- Competitor analysis report (markdown)
- 2025 web design trends relevant to our vibe
- Next.js + R3F architecture proposal
- Component library inventory
- 3D asset requirements
- Animation pattern library
- Content migration plan

### PHASE 2: Project Setup
**Location**: `/new-site` folder (parallel to current site)

**Tasks**:
1. Initialize Next.js 15 with TypeScript
2. Install all dependencies (see TECH-STACK.md)
3. Configure Tailwind with brand colors
4. Set up project structure
5. Initialize Git (new branch: `rebrand-v2`)
6. Create .env.local template

**Deliverables**:
- Fully initialized Next.js project
- All dependencies installed
- Tailwind configured
- Git repository initialized
- Environment variables template

### PHASE 3: Design System & Components
**Tasks**:
1. Install shadcn/ui base components
2. Customize components with brand colors
3. Build animation components (FadeInSection, MagneticButton, etc.)
4. Build 3D components (Scene, ServiceIcon3D, FloatingShapes)
5. Build layout components (Header, Footer, Navigation)
6. Create animation library (Framer Motion variants)

**Deliverables**:
- 20+ customized components
- Animation wrappers
- 3D components
- Layout components
- Animation library
- Utility hooks

### PHASE 4: Content Strategy
**Tasks**:
1. Analyze existing content (current HTML files)
2. Define service data structure (TypeScript interfaces)
3. Write homepage copy
4. Write service page copy (all 7 services)
5. Create SEO metadata for all pages
6. Write CTA variations

**Deliverables**:
- Complete service data structure
- Homepage copy
- Service page template
- Copy for all 7 service pages
- SEO metadata
- 12+ CTA variations

### PHASE 5: Page Development

**Priority 1 - MVP**:
1. Homepage (Hero, Services Grid, Stats, Final CTA)
2. Custom Products page
3. RAG Agents page (with mock demo)
4. Contact page
5. Navigation + Footer

**Priority 2 - Core Services**:
6. AI Phone Agents
7. Process Automation
8. Web Scraping
9. Website Management

**Priority 3 - Complete**:
10. N8n Workflows
11. About page
12. Check-In page (migrate existing)
13. 404 page

**Deliverables**:
- All 12 pages built and functional
- Consistent structure across service pages
- Interactive demos (mock versions)
- Contact form functional

### PHASE 6: Animations & Interactions
**Tasks**:
1. Scroll-triggered animations on all sections
2. Page transition animations (route changes)
3. Micro-interactions (button hover, card lift)
4. 3D animations (hero background, service icons)
5. Performance optimization
6. Accessibility (prefers-reduced-motion)

**Deliverables**:
- Scroll animations implemented
- Page transitions working
- Micro-interactions polished
- 3D hero animations
- 60fps performance
- Accessibility support

### PHASE 7: Optimization & Polish
**Tasks**:
1. Image optimization (WebP/AVIF, next/image)
2. Performance (code splitting, font optimization)
3. SEO (sitemap, robots.txt, JSON-LD, Open Graph)
4. Accessibility audit (WCAG 2.1 AA)
5. Cross-browser testing
6. Mobile responsiveness testing (320px - 2560px)
7. Lighthouse audits

**Performance Targets**:
- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Lighthouse Best Practices: 95+
- Lighthouse SEO: 100
- LCP: <2.5s
- FCP: <1.5s
- TTI: <3.5s

**Deliverables**:
- All images optimized
- Lighthouse scores 90+
- SEO complete
- Accessibility audit passed
- Cross-browser tested
- Performance optimized

### PHASE 8: Deployment
**Tasks**:
1. Final Git commits and tagging (v2.0.0)
2. Merge to main branch
3. Configure Vercel deployment
4. Set environment variables
5. Configure custom domain (princeton-ai.com)
6. Post-deployment verification
7. Documentation (README, deployment guide)

**Deliverables**:
- Deployed to Vercel
- Custom domain configured
- All functionality verified
- Complete documentation
- Git history clean

---

## 🚨 CRITICAL REQUIREMENTS

### Must-Haves:
- ✅ TypeScript strict mode (no `any` types)
- ✅ Mobile-first responsive design
- ✅ WCAG 2.1 AA accessibility
- ✅ SEO optimized (90+ Lighthouse SEO)
- ✅ Fast load times (<2s LCP)
- ✅ Smooth 60fps animations
- ✅ Git commits after each major feature
- ✅ Exact brand colors preserved
- ✅ Inter font throughout
- ✅ NO stock photos
- ✅ NO AI-generated slop art
- ✅ NO corporate speak
- ✅ NO boring grid layouts (use bento boxes, varied layouts)
- ✅ NO auto-playing videos

### Code Quality:
- Clean, commented code
- Consistent naming (camelCase for JS, kebab-case for files)
- Reusable components
- Proper TypeScript types (export interfaces)
- ESLint/Prettier formatted

---

## 💡 SPECIAL FEATURES TO IMPLEMENT

### 1. 3D Hero Background (Homepage):
- Floating abstract shapes (Three.js)
- Smooth camera rotations
- Mouse parallax effect (shapes move based on cursor)

### 2. Magnetic Logo Effect (Preserve from current site):
- Logo follows mouse slightly when hovering
- Use Framer Motion for smooth animation

### 3. Service Page Interactive Demos:
- **RAG Agents**: Live query interface (MOCK VERSION FIRST)
- **Phone Agents**: Embedded demo call recording (audio player)
- **Process Automation**: Animated workflow diagram (React Flow)
- **Web Scraping**: Live code examples with syntax highlighting

### 4. Smooth Page Transitions:
- Use Framer Motion's AnimatePresence
- Cross-fade between routes
- Preserve scroll position where appropriate

### 5. Animated Number Counters (Homepage Stats):
- Count up animation when scrolling into view
- Smooth easing
- Triggers only once

### 6. Custom Cursor (Optional):
- Gradient glow that follows cursor
- Different states on hover (larger on buttons)
- Disable on mobile

### 7. Gradient Text Effects:
- Use on headlines ("Build Anything")
- Animated gradient (subtle movement)

### 8. Card Hover Effects:
- Lift on hover (-translate-y-2)
- Colored shadow (brand blue)
- Smooth transition (300ms)

---

## ✅ SUCCESS CRITERIA

### The site is ready to launch when:
1. ✅ All 12 pages built and functional
2. ✅ Mobile responsive (tested 320px - 2560px)
3. ✅ Lighthouse scores 90+ (all categories)
4. ✅ All animations smooth (60fps, no jank)
5. ✅ Zero console errors
6. ✅ All links working
7. ✅ Forms functional (contact, RAG demo)
8. ✅ SEO metadata complete (all pages)
9. ✅ Accessibility audit passed (WCAG 2.1 AA)
10. ✅ Deployed to Vercel successfully
11. ✅ Custom domain connected (princeton-ai.com)
12. ✅ Git history clean with semantic commits

### The site successfully conveys:
- ✅ **"We're modern and elite"** (cutting-edge tech stack, premium design)
- ✅ **"We build anything, fast"** (speed, custom, technical depth)
- ✅ **"We're technical but approachable"** (playful + confident tone)
- ✅ **"This is what we can do"** (interactive demos prove capability)

---

## 📅 TIMELINE

**Estimated Duration**: 3-4 weeks (quality over speed)

- **Week 1**: Phases 0-2 (Documentation, Research, Setup, Design System)
- **Week 2**: Phase 3-5 (Components, Content, MVP Pages)
- **Week 3**: Phase 5-7 (Remaining Pages, Animations, Optimization)
- **Week 4**: Phase 8 (Final Polish, Testing, Deployment)

**Flexible**: We take the time needed to do it right.

---

## 🎯 CURRENT STATUS

**Phase**: 0 - Documentation & Preparation
**Next Milestone**: Complete all planning documents
**Blockers**: None
**Notes**: Taking it slow and methodical - getting all documentation in order before starting research.

---

**Last Updated**: 2025-10-30
