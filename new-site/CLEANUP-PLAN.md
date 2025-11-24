# New-Site Cleanup Plan

**Date:** 2025-01-23
**Goal:** Archive outdated/irrelevant files while keeping core homepage functionality

---

## ✅ KEEP (Core Files - Currently Used)

### **App (Pages)**
- `app/page.tsx` ✅ - Homepage (keep all work done)
- `app/layout.tsx` ✅ - Root layout
- `app/globals.css` ✅ - Global styles

### **Components (Active)**
- `components/layout/` ✅ - Header, Footer
- `components/ui/` ✅ - All UI components (aurora, bento-grid, buttons, etc.)
- `components/animations/` ✅ - FadeInSection, etc.
- `components/icons/` ✅ - Icon system
- `components/providers/` ✅ - Theme provider
- `components/ui/service-backgrounds/` ✅ - All 7 service backgrounds + demos

### **Lib & Utils**
- `lib/utils.ts` ✅
- `lib/constants.ts` ✅
- `lib/icon-map.ts` ✅
- `lib/icon-types.ts` ✅
- `lib/animations.ts` ✅
- `lib/hooks/` ✅
- `hooks/` ✅

### **Config & Setup**
- `package.json` ✅
- `tsconfig.json` ✅
- `tailwind.config.ts` ✅
- `next.config.js` ✅
- `.eslintrc.json` ✅
- `.prettierrc` ✅
- `.gitignore` ✅

### **Documentation (Keep)**
- `README.md` ✅ - Project overview
- `REBRAND-FILES-SUMMARY.md` ✅ - Files summary

### **Assets**
- `public/logos/` ✅
- `components/princetonAI_LOGOS/` ✅

---

## 📦 ARCHIVE (Old/Not Currently Needed)

### **App - Old Service Pages**
These are outdated based on Vision 2.0. We'll rebuild them later.

- `app/solutions/` → **ARCHIVE**
  - `ai-agents/page.tsx`
  - `ai-phone-systems/page.tsx`
  - `bespoke-software/page.tsx`
  - `custom-bots/page.tsx`
  - `process-automation/page.tsx`
  - `web-development/page.tsx`
  - `web-scraping/page.tsx`
  - `website-management/page.tsx`
  - `page.tsx` (solutions overview)

- `app/api/diagnose-site/` → **ARCHIVE**
  - Old website diagnosis tool

- `app/(marketing)/` → **ARCHIVE**
  - Empty route group folder

### **Components - Old/Unused**

- `components/3d/` → **ARCHIVE**
  - FloatingShapes.tsx, Scene.tsx
  - Not currently used on homepage

- `components/animata/` → **ARCHIVE**
  - Various animation components
  - May use later but not on current homepage

- `components/effects/` → **ARCHIVE**
  - cursor-glow.tsx, scanline.tsx
  - Not on current homepage

- `components/hero/` → **ARCHIVE**
  - floating-service-cards.tsx, service-card.tsx
  - Old hero implementation

- `components/solutions/` → **ARCHIVE**
  - All solution page components (we'll rebuild for Vision 2.0)
  - FeaturesGrid, HowItWorks, SolutionHero
  - ai-agents/, web-dev/, website-management/ folders

- `components/demos/` → **DELETE**
  - Empty folder

- `components/sections/` → **DELETE**
  - Empty folder

- `components/shared/` → **DELETE**
  - Empty folder

### **Lib - Old Data**

- `lib/services-data.ts` → **ARCHIVE**
  - Old service definitions (rebuild for Vision 2.0)

### **Documentation - Old Plans**

- `VISION.md` → **ARCHIVE**
  - Old vision (replaced by Vision 2.0)

- `ANIMATION_UPGRADE_PLAN.md` → **ARCHIVE**
  - Old animation plan

- `CLAUDE.md` → **ARCHIVE**
  - Old Claude instructions (outdated)

### **Claude/Agent Config**

- `.agents/` → **ARCHIVE**
  - Agent configurations (can recreate if needed)

- `.claude/` → **KEEP .claude/commands/**, **ARCHIVE .claude/agents.json**
  - Keep slash commands
  - Archive agents config (can recreate)

---

## 📁 ARCHIVE STRUCTURE

```
_archive/
├── old-service-pages/
│   ├── app-solutions/          (all solution pages)
│   └── components-solutions/   (all solution components)
├── old-3d-components/
│   ├── 3d/
│   ├── animata/
│   ├── effects/
│   └── hero/
├── old-data/
│   └── services-data.ts
├── old-docs/
│   ├── VISION.md
│   ├── ANIMATION_UPGRADE_PLAN.md
│   └── CLAUDE.md
├── old-api/
│   └── diagnose-site/
└── old-config/
    └── agents/
```

---

## 🎯 AFTER CLEANUP - File Structure

```
new-site/
├── app/
│   ├── page.tsx                    ✅ Homepage
│   ├── layout.tsx                  ✅ Root layout
│   └── globals.css                 ✅ Global styles
├── components/
│   ├── layout/                     ✅ Header, Footer
│   ├── ui/                         ✅ All UI components
│   ├── animations/                 ✅ Animation wrappers
│   ├── icons/                      ✅ Icon system
│   ├── providers/                  ✅ Theme provider
│   └── princetonAI_LOGOS/          ✅ Logo assets
├── lib/
│   ├── utils.ts                    ✅
│   ├── constants.ts                ✅
│   ├── icon-map.ts                 ✅
│   ├── icon-types.ts               ✅
│   ├── animations.ts               ✅
│   └── hooks/                      ✅
├── hooks/
│   └── use-mouse-position.ts       ✅
├── public/
│   └── logos/                      ✅
├── _archive/                       📦 All old files
├── package.json                    ✅
├── tsconfig.json                   ✅
├── tailwind.config.ts              ✅
├── next.config.js                  ✅
└── README.md                       ✅
```

**Clean, focused, ready for Vision 2.0 implementation!**
