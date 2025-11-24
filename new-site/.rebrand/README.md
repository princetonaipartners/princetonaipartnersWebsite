# Princeton AI Partners - Website Rebrand v2.0

> **Complete rebuild**: Static HTML → Next.js 15 + TypeScript + React Three Fiber
> **Vision**: Premium custom tech consultancy with playful tech aesthetic
> **Timeline**: 3-4 weeks (quality over speed)
> **Status**: Phase 0 - Documentation Complete ✅

---

## 📁 Documentation Structure

All planning documents are in `.rebrand/docs/`:

1. **[REBRAND-MASTER-PLAN.md](docs/REBRAND-MASTER-PLAN.md)**
   - Complete project vision
   - All 8 development phases
   - Brand philosophy
   - Success criteria

2. **[TECH-STACK.md](docs/TECH-STACK.md)**
   - Complete dependency list
   - Installation order
   - Configuration templates
   - Package.json blueprint

3. **[DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md)**
   - Brand colors (exact hex values)
   - Typography scale
   - Spacing system
   - Animation patterns
   - Component patterns

4. **[CONTENT-STRUCTURE.md](docs/CONTENT-STRUCTURE.md)**
   - All service data structures
   - Copy for all pages
   - SEO metadata templates
   - Voice & tone guidelines

5. **[IMPLEMENTATION-CHECKLIST.md](docs/IMPLEMENTATION-CHECKLIST.md)**
   - Granular task breakdown
   - Progress tracking
   - Timeline estimates
   - Success criteria checklist

6. **[TOOLS-AND-MCPS.md](docs/TOOLS-AND-MCPS.md)**
   - Required MCPs
   - Development tools
   - Installation verification
   - Troubleshooting guide

---

## 🎯 Project Overview

### What We're Building

A world-class tech consultancy platform that proves we can "build anything, fast."

**Key Features**:
- 3D animated hero with floating shapes (React Three Fiber)
- Interactive RAG demo (mock version first)
- 7 service pages with custom demos
- Smooth page transitions (Framer Motion)
- Magnetic button effects
- Scroll-triggered animations
- Mobile-first responsive design
- 90+ Lighthouse scores

**Tech Stack**:
- Next.js 15 (App Router, Server Components)
- TypeScript (strict mode)
- Tailwind CSS (custom brand theme)
- Framer Motion (animations)
- React Three Fiber (3D elements)
- shadcn/ui (customized components)

---

## 🗂️ Folder Structure

```
.rebrand/
├── README.md                      # This file
├── docs/                          # All documentation
│   ├── REBRAND-MASTER-PLAN.md
│   ├── TECH-STACK.md
│   ├── DESIGN-SYSTEM.md
│   ├── CONTENT-STRUCTURE.md
│   ├── IMPLEMENTATION-CHECKLIST.md
│   └── TOOLS-AND-MCPS.md
├── research/                      # Phase 1 outputs (competitor analysis)
└── assets/                        # Design assets, screenshots, etc.
```

---

## 📋 Current Phase: Phase 0 - Documentation

**Status**: ✅ Complete

**Completed**:
- [x] Created documentation structure
- [x] Wrote all planning documents
- [x] Defined tech stack
- [x] Documented design system
- [x] Structured all content
- [x] Created implementation checklist
- [x] Listed required tools

**Next Steps**:
1. Verify all tools and MCPs
2. Begin Phase 1 (Research & Architecture)
3. Analyze 5 competitor sites
4. Research 2025 web design trends
5. Propose final architecture

---

## 🚀 Development Phases

### Phase 0: Documentation & Preparation ✅
- Create all planning documents
- Verify tools and MCPs
- Review and approve plan

### Phase 1: Research & Architecture ⏸️
- Competitor analysis (Anthropic, Puzzle, Mercury, Linear, Pitch)
- 2025 web design trends
- Next.js 15 + R3F best practices
- Architecture proposal

### Phase 2: Project Setup ⏸️
- Initialize Next.js 15 in `/new-site`
- Install all dependencies
- Configure Tailwind with brand colors
- Set up git workflow

### Phase 3: Design System & Components ⏸️
- Customize shadcn/ui components
- Build animation components
- Create 3D components
- Build layout (Header, Footer, Nav)

### Phase 4: Content Strategy ⏸️
- Write all service data
- Homepage copy
- Service page copy (7 pages)
- SEO metadata

### Phase 5: Page Development ⏸️
- Homepage (Hero, Services, Stats, CTA)
- 7 service pages
- Contact page
- About page
- Check-in page (migrate)
- 404 page

### Phase 6: Animations & Interactions ⏸️
- Scroll-triggered animations
- Page transitions
- Micro-interactions
- 3D animations

### Phase 7: Optimization & Polish ⏸️
- Image optimization
- Performance tuning
- SEO (sitemap, metadata)
- Accessibility audit
- Lighthouse 90+

### Phase 8: Deployment ⏸️
- Deploy to Vercel
- Configure custom domain
- Post-deployment verification
- Documentation

---

## 🎨 Brand Colors (Exact Values)

```typescript
brand: {
  primary: '#0A84FF',      // Electric blue
  secondary: '#0060CE',    // Deep blue
  light: '#E5F2FF',        // Light blue
  dark: '#003D82',         // Dark blue
}

background: {
  primary: '#FAFAFA',      // Soft white
  secondary: '#F5F5F5',    // Slightly darker
  card: '#FFFFFF',         // Pure white
}

text: {
  primary: '#0F0F0F',      // Near black
  secondary: '#6B7280',    // Warm gray
  tertiary: '#9CA3AF',     // Light gray
}

accent: {
  purple: '#8B5CF6',       // Playful accent 1
  pink: '#EC4899',         // Playful accent 2
  green: '#10B981',        // Success
  orange: '#F59E0B',       // Warning
}
```

---

## ✅ Success Criteria

### The site is ready when:
- [ ] All 12 pages built and functional
- [ ] Mobile responsive (320px - 2560px)
- [ ] Lighthouse scores 90+ (all categories)
- [ ] All animations smooth (60fps)
- [ ] Zero console errors
- [ ] All links working
- [ ] Forms functional
- [ ] SEO metadata complete
- [ ] Deployed to Vercel
- [ ] Custom domain connected

### The site successfully conveys:
- [ ] "We're modern and elite"
- [ ] "We build anything, fast"
- [ ] "We're technical but approachable"
- [ ] Interactive demos prove capability

---

## 🔗 Quick Links

**Documentation**:
- [Master Plan](docs/REBRAND-MASTER-PLAN.md)
- [Tech Stack](docs/TECH-STACK.md)
- [Design System](docs/DESIGN-SYSTEM.md)
- [Content Structure](docs/CONTENT-STRUCTURE.md)
- [Implementation Checklist](docs/IMPLEMENTATION-CHECKLIST.md)
- [Tools & MCPs](docs/TOOLS-AND-MCPS.md)

**Current Site**:
- [princeton-ai.com](https://princeton-ai.com)
- [GitHub Repo](https://github.com/princetonaipartners/princetonaipartnersWebsite)

**Design Inspiration**:
- [Anthropic.com](https://anthropic.com)
- [Puzzle.io](https://puzzle.io)
- [Mercury.com](https://mercury.com)
- [Linear.app](https://linear.app)
- [Pitch.com](https://pitch.com)

---

## 📝 Notes

**Approach**: Slow and methodical, quality over speed
**Timeline**: Flexible - we take the time to do it right
**Project Location**: `/new-site` (parallel to current site)
**RAG Demo**: Mock version first, real API later
**Git Strategy**: `rebrand-v2` branch → `dev` → `main`

---

**Created**: 2025-10-30
**Last Updated**: 2025-10-30
**Phase**: 0 - Documentation Complete ✅
**Next Milestone**: Complete tools verification, begin research
