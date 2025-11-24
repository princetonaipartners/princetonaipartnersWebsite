# Tech Stack Documentation - Princeton AI Partners Rebrand

> **Last Updated**: 2025-10-30
> **Project**: Princeton AI Partners Website Rebrand v2.0
> **Framework**: Next.js 15 + TypeScript + React Three Fiber

---

## 📦 Core Dependencies

### Framework & Runtime

```json
{
  "next": "^15.0.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "typescript": "^5.3.0"
}
```

**Why Next.js 15?**
- App Router (Server Components by default)
- React Server Actions
- Turbopack (faster dev server)
- Built-in image optimization
- Automatic code splitting
- SEO-friendly

---

## 🎨 Styling & UI

### Tailwind CSS

```json
{
  "tailwindcss": "^3.4.0",
  "tailwindcss-animate": "^1.0.7",
  "autoprefixer": "^10.4.16",
  "postcss": "^8.4.32"
}
```

**Utilities**:
```json
{
  "clsx": "^2.0.0",
  "tailwind-merge": "^2.2.0",
  "class-variance-authority": "^0.7.0"
}
```

**Usage**: `cn()` helper for conditional classnames

---

### shadcn/ui Components

**Installation Method**: CLI (not npm package)

```bash
npx shadcn-ui@latest init
```

**Components to Install**:
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add tabs
npx shadcn-ui@latest add accordion
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add avatar
npx shadcn-ui@latest add separator
npx shadcn-ui@latest add select
npx shadcn-ui@latest add label
npx shadcn-ui@latest add form
```

**Note**: All shadcn/ui components will be customized with our brand colors

---

### Icons

```json
{
  "lucide-react": "^0.300.0"
}
```

**Why Lucide?**
- Consistent design language
- Tree-shakeable (only imports used icons)
- Modern, clean aesthetic
- Extensive icon library

---

## ✨ Animations & 3D

### Framer Motion (Primary Animation Library)

```json
{
  "framer-motion": "^11.0.0"
}
```

**Use Cases**:
- Page transitions
- Scroll-triggered animations
- Hover effects
- Component entrances/exits
- Layout animations

---

### React Three Fiber (3D Graphics)

```json
{
  "three": "^0.160.0",
  "@react-three/fiber": "^8.15.0",
  "@react-three/drei": "^9.92.0",
  "@use-gesture/react": "^10.3.0"
}
```

**Use Cases**:
- 3D hero background (floating shapes)
- 3D service icons
- Interactive 3D elements
- Mouse parallax effects

**Optional** (if needed for advanced effects):
```json
{
  "@react-three/postprocessing": "^2.16.0"
}
```

---

### GSAP (Optional - Complex Scroll Animations)

```json
{
  "gsap": "^3.12.0"
}
```

**Use Cases** (if Framer Motion isn't sufficient):
- Complex scroll-triggered animations
- Text reveal effects
- SVG path animations

**Note**: Start with Framer Motion. Only add GSAP if needed.

---

### React Spring (Optional - Physics-Based Animations)

```json
{
  "react-spring": "^9.7.0"
}
```

**Use Cases**:
- Physics-based interactions
- Fluid drag animations
- Natural spring movements

**Note**: Only add if we need physics-based animations beyond Framer Motion.

---

## 🤖 AI & Interactive Demos

### Vercel AI SDK (RAG Demo)

```json
{
  "ai": "^3.0.0",
  "@ai-sdk/anthropic": "^0.0.10"
}
```

**OR** (if using OpenAI):
```json
{
  "@ai-sdk/openai": "^0.0.10"
}
```

**Note**: Start with MOCK version. Add real API later.

---

### Code Highlighting

```json
{
  "react-syntax-highlighter": "^15.5.0"
}
```

**Use Cases**:
- Code examples in service pages
- Technical documentation
- Web scraping code samples

---

### Data Visualization (Optional)

**Option 1 - Recharts** (simpler):
```json
{
  "recharts": "^2.10.0"
}
```

**Option 2 - Victory** (more customizable):
```json
{
  "victory": "^37.0.0"
}
```

**Use Cases**:
- Stats visualizations
- Performance charts
- Data-driven graphics

**Decision**: Choose based on actual need in Phase 5.

---

### Workflow Diagrams

```json
{
  "react-flow-renderer": "^10.3.17"
}
```

**Use Cases**:
- N8n workflow visualizations
- Process automation diagrams
- Architecture diagrams

---

## 🛠️ Development Tools

### TypeScript

```json
{
  "@types/react": "^19.0.0",
  "@types/react-dom": "^19.0.0",
  "@types/node": "^20.10.0",
  "@types/three": "^0.160.0"
}
```

**Configuration**: Strict mode, no implicit `any`

---

### Linting & Formatting

```json
{
  "eslint": "^8.55.0",
  "eslint-config-next": "^15.0.0",
  "@typescript-eslint/parser": "^6.15.0",
  "@typescript-eslint/eslint-plugin": "^6.15.0",
  "eslint-config-prettier": "^9.1.0",
  "prettier": "^3.1.0",
  "prettier-plugin-tailwindcss": "^0.5.9"
}
```

---

### Git Hooks

```json
{
  "husky": "^8.0.3",
  "lint-staged": "^15.2.0"
}
```

**Configuration** (.husky/pre-commit):
```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

**lint-staged config** (package.json):
```json
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md}": [
      "prettier --write"
    ]
  }
}
```

---

## 📧 Contact Form (Optional)

**Option 1 - Resend** (recommended):
```json
{
  "resend": "^2.1.0"
}
```

**Option 2 - SendGrid**:
```json
{
  "@sendgrid/mail": "^8.1.0"
}
```

**Option 3 - Nodemailer** (self-hosted):
```json
{
  "nodemailer": "^6.9.0"
}
```

**Decision**: Choose in Phase 5 based on requirements.

---

## 🚀 Deployment

### Vercel

**No additional packages needed** - Vercel CLI is optional.

**Vercel CLI** (optional, for manual deployments):
```bash
npm i -g vercel
```

**Environment Variables** (set in Vercel dashboard or .env.local):
```
ANTHROPIC_API_KEY=sk-ant-xxx (for RAG demo - LATER)
CONTACT_EMAIL=contact@princeton-ai.com
NEXT_PUBLIC_GA_ID=G-xxx (optional - analytics)
```

---

## 📊 Analytics (Optional)

**Option 1 - Vercel Analytics** (built-in):
```json
{
  "@vercel/analytics": "^1.1.0"
}
```

**Option 2 - Google Analytics 4**:
Use `next/script` for GA4 tag.

**Decision**: Add in Phase 7 (Optimization).

---

## 🎞️ Lottie Animations (Optional)

```json
{
  "lottie-react": "^2.4.0"
}
```

**Use Cases** (if we create custom animations):
- Animated illustrations
- Loading states
- Micro-interactions

**Note**: Only add if we have Lottie files. Not essential.

---

## 📦 Complete package.json

```json
{
  "name": "princeton-ai-rebrand",
  "version": "2.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbo",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit",
    "prepare": "husky install"
  },
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",

    "framer-motion": "^11.0.0",

    "three": "^0.160.0",
    "@react-three/fiber": "^8.15.0",
    "@react-three/drei": "^9.92.0",
    "@use-gesture/react": "^10.3.0",

    "lucide-react": "^0.300.0",

    "tailwindcss": "^3.4.0",
    "tailwindcss-animate": "^1.0.7",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.2.0",
    "class-variance-authority": "^0.7.0",

    "react-syntax-highlighter": "^15.5.0",
    "react-flow-renderer": "^10.3.17",

    "ai": "^3.0.0",
    "@ai-sdk/anthropic": "^0.0.10"
  },
  "devDependencies": {
    "@types/node": "^20.10.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@types/three": "^0.160.0",

    "typescript": "^5.3.0",

    "eslint": "^8.55.0",
    "eslint-config-next": "^15.0.0",
    "@typescript-eslint/parser": "^6.15.0",
    "@typescript-eslint/eslint-plugin": "^6.15.0",
    "eslint-config-prettier": "^9.1.0",

    "prettier": "^3.1.0",
    "prettier-plugin-tailwindcss": "^0.5.9",

    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",

    "husky": "^8.0.3",
    "lint-staged": "^15.2.0"
  }
}
```

---

## 🔧 Installation Order

### Phase 2: Project Setup

1. **Initialize Next.js**:
```bash
npx create-next-app@latest new-site --typescript --tailwind --app --use-npm
cd new-site
```

2. **Install Animation Libraries**:
```bash
npm install framer-motion
npm install three @react-three/fiber @react-three/drei @use-gesture/react
```

3. **Install UI Utilities**:
```bash
npm install clsx tailwind-merge class-variance-authority
npm install lucide-react
npm install tailwindcss-animate
```

4. **Install shadcn/ui** (and components):
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input textarea dialog dropdown-menu tabs accordion badge avatar separator
```

5. **Install Code & Demo Tools**:
```bash
npm install react-syntax-highlighter
npm install react-flow-renderer
npm install ai @ai-sdk/anthropic
```

6. **Install Dev Tools**:
```bash
npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm install -D eslint-config-prettier prettier prettier-plugin-tailwindcss
npm install -D husky lint-staged
npm install -D @types/three
```

7. **Setup Git Hooks**:
```bash
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

---

## 🚫 What We're NOT Using

- **No jQuery** - Modern React doesn't need it
- **No Bootstrap** - Using Tailwind CSS
- **No Material-UI** - Using shadcn/ui
- **No Styled Components** - Using Tailwind
- **No Redux** - Using React Server Components + Server Actions
- **No Axios** - Using native `fetch` with Next.js
- **No Moment.js** - Using native `Date` or `date-fns` if needed
- **No Lodash** - Modern JS has most utilities built-in

---

## 📚 Documentation Links

**Official Docs**:
- [Next.js 15 Docs](https://nextjs.org/docs)
- [React 19 Docs](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [Vercel AI SDK](https://sdk.vercel.ai/)

**Guides**:
- [Next.js App Router Guide](https://nextjs.org/docs/app)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Three.js Journey](https://threejs-journey.com/) (3D learning resource)

---

**Last Updated**: 2025-10-30
**Status**: Complete - All dependencies documented
