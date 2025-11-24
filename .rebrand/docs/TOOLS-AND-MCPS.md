# Tools & MCPs Required - Princeton AI Partners Rebrand

> **Last Updated**: 2025-10-30
> **Purpose**: Verify all required tools and MCPs are available
> **Status**: Verification in progress

---

## 🛠️ Model Context Protocol (MCP) Servers

### Currently Available

✅ **@modelcontextprotocol/server-filesystem**
- **Purpose**: Read/write all project files
- **Usage**: File creation, updates, directory management
- **Critical for**: All phases (setup, development, deployment)
- **Status**: ✅ Available

✅ **@modelcontextprotocol/server-github**
- **Purpose**: Git version control
- **Usage**: Commits, branches, tags, push/pull
- **Critical for**: Version control throughout project
- **Status**: ✅ Available

---

### Required (Need to Verify)

❓ **@modelcontextprotocol/server-sequential-thinking**
- **Purpose**: Complex architecture decisions
- **Usage**: Planning component structure, state management
- **Critical for**: Phase 1 (Research & Architecture)
- **Status**: ❓ Unknown - Need to verify

❓ **@modelcontextprotocol/server-brave-search**
- **Purpose**: Web research for competitor analysis
- **Usage**: Research competitor sites, modern web trends
- **Critical for**: Phase 1 (Research)
- **Alternative**: Manual research via WebFetch if not available
- **Status**: ❓ Unknown - Need to verify

---

## 💻 Development Tools

### Node.js & npm

**Required Version**: Node.js 18+ (for Next.js 15)

**Check**:
```bash
node --version  # Should be v18.0.0 or higher
npm --version   # Should be 9.0.0 or higher
```

**Status**: ⏸️ To verify in Phase 2

---

### Git

**Required**: Git 2.0+

**Check**:
```bash
git --version
```

**Status**: ✅ Assumed available (already using git)

---

### Code Editor

**Recommended**: VS Code with extensions:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript

**Status**: ⏸️ User's choice

---

## 📦 NPM Packages (Phase 2 Installation)

### Core Framework
```bash
npm create next-app@latest new-site --typescript --tailwind --app --use-npm
```

Installs:
- next@^15.0.0
- react@^19.0.0
- react-dom@^19.0.0
- typescript@^5.3.0
- tailwindcss@^3.4.0

**Status**: ⏸️ To install in Phase 2

---

### Animation Libraries
```bash
npm install framer-motion
npm install three @react-three/fiber @react-three/drei @use-gesture/react
```

**Status**: ⏸️ To install in Phase 2

---

### UI & Utilities
```bash
npm install clsx tailwind-merge class-variance-authority lucide-react tailwindcss-animate
```

**Status**: ⏸️ To install in Phase 2

---

### shadcn/ui
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input textarea dialog dropdown-menu tabs accordion badge avatar separator
```

**Status**: ⏸️ To install in Phase 2

---

### AI & Demos
```bash
npm install ai @ai-sdk/anthropic
npm install react-syntax-highlighter react-flow-renderer
```

**Status**: ⏸️ To install in Phase 2

---

### Dev Tools
```bash
npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-prettier prettier prettier-plugin-tailwindcss husky lint-staged @types/three
```

**Status**: ⏸️ To install in Phase 2

---

## 🌐 External Services & APIs

### Vercel (Deployment)

**Required**: Vercel account
- **Purpose**: Deploy production site
- **Setup**: Already configured
- **Status**: ✅ Available

**Vercel CLI** (optional):
```bash
npm i -g vercel
```

---

### Anthropic API (RAG Demo)

**Required**: API key for Claude
- **Purpose**: RAG demo functionality (MOCK VERSION FIRST)
- **Setup**: Later phase
- **Status**: ⏸️ Mock version first, real API later

**Environment Variable**:
```
ANTHROPIC_API_KEY=sk-ant-xxx
```

---

### Contact Form Email Service (Optional)

**Options**:
1. **Resend** (recommended) - `npm install resend`
2. **SendGrid** - `npm install @sendgrid/mail`
3. **Nodemailer** (self-hosted) - `npm install nodemailer`

**Decision**: Choose in Phase 5
**Status**: ⏸️ To decide later

---

## 🔍 Browser Requirements (Testing)

### Desktop Browsers
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)

### Mobile Browsers
- [ ] Safari iOS (latest)
- [ ] Chrome Android (latest)

### Testing Tools
- [ ] Chrome DevTools (built-in)
- [ ] Lighthouse (built-in)
- [ ] Responsive design mode (built-in)

**Status**: ⏸️ To test in Phase 7

---

## 🎨 Design Tools (Optional)

### Asset Creation
- **Figma** (for mockups, if needed)
- **Photoshop/GIMP** (image editing)
- **Illustrator/Inkscape** (vector graphics)

**Status**: ⏸️ Optional, as needed

---

### 3D Assets
- **Blender** (if creating custom 3D models)
- **Spline** (web-based 3D design)

**Status**: ⏸️ Optional, may use procedural 3D instead

---

## 📊 Analytics (Optional)

### Vercel Analytics
```bash
npm install @vercel/analytics
```

**Status**: ⏸️ Optional, Phase 7

---

### Google Analytics 4
- Use Next.js `<Script>` component
- No package needed

**Status**: ⏸️ Optional, Phase 7

---

## ✅ Pre-Phase 1 Verification Checklist

Before starting Phase 1 (Research), verify:

- [ ] Node.js 18+ installed
- [ ] npm 9+ installed
- [ ] Git configured
- [ ] Filesystem MCP available
- [ ] GitHub MCP available
- [ ] Sequential Thinking MCP status confirmed
- [ ] Brave Search MCP status confirmed (or alternative plan)
- [ ] Code editor ready
- [ ] Internet connection stable (for research)

---

## 🚨 Critical Dependencies

**Must Have** (Project cannot proceed without):
1. ✅ Node.js 18+
2. ✅ npm 9+
3. ✅ Git
4. ✅ Filesystem MCP
5. ✅ GitHub MCP

**Nice to Have** (Can work around if missing):
1. Sequential Thinking MCP (can plan manually)
2. Brave Search MCP (can use WebFetch for research)
3. Vercel CLI (can deploy via Vercel dashboard)

---

## 🔄 Installation Order (Phase 2)

When we reach Phase 2, install in this order:

1. **Create Next.js project**:
```bash
npx create-next-app@latest new-site --typescript --tailwind --app --use-npm
cd new-site
```

2. **Install animation libraries**:
```bash
npm install framer-motion
npm install three @react-three/fiber @react-three/drei @use-gesture/react
```

3. **Install UI utilities**:
```bash
npm install clsx tailwind-merge class-variance-authority lucide-react tailwindcss-animate
```

4. **Initialize shadcn/ui**:
```bash
npx shadcn-ui@latest init
```

5. **Install shadcn components**:
```bash
npx shadcn-ui@latest add button card input textarea dialog dropdown-menu tabs accordion badge avatar separator
```

6. **Install demo tools**:
```bash
npm install react-syntax-highlighter react-flow-renderer
npm install ai @ai-sdk/anthropic
```

7. **Install dev tools**:
```bash
npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-prettier prettier prettier-plugin-tailwindcss husky lint-staged @types/three
```

8. **Initialize git hooks**:
```bash
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

---

## 📋 Environment Variables Template

Create `.env.local` in Phase 2:

```bash
# AI API (for RAG demo - LATER)
# ANTHROPIC_API_KEY=sk-ant-xxx

# Contact Form (optional - LATER)
# RESEND_API_KEY=re_xxx
# CONTACT_EMAIL=contact@princeton-ai.com

# Analytics (optional - LATER)
# NEXT_PUBLIC_GA_ID=G-xxx

# Vercel (auto-configured)
# VERCEL=1
# VERCEL_ENV=production
```

---

## 🔧 Troubleshooting Common Issues

### Node Version Issues
**Problem**: Next.js 15 requires Node 18+

**Solution**:
```bash
nvm install 18
nvm use 18
```

---

### npm Install Errors
**Problem**: Dependency conflicts

**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

### TypeScript Errors
**Problem**: Type mismatches

**Solution**:
- Ensure `strict: true` in tsconfig.json
- Install missing `@types/*` packages
- Use proper type imports

---

### 3D Performance Issues
**Problem**: Low FPS with React Three Fiber

**Solution**:
- Use `useMemo` for expensive calculations
- Limit polygon count
- Use `<Suspense>` for lazy loading
- Disable shadows if needed

---

## 📚 Documentation Links

**Tools**:
- [Node.js Download](https://nodejs.org/)
- [Git Download](https://git-scm.com/)
- [VS Code Download](https://code.visualstudio.com/)

**MCPs**:
- [MCP Documentation](https://modelcontextprotocol.io/)

**Packages**:
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)
- [shadcn/ui Docs](https://ui.shadcn.com/)

---

## ✅ Verification Complete

Once all tools are verified, update this section:

**Verified On**: [DATE]
**Node Version**: [VERSION]
**npm Version**: [VERSION]
**Git Version**: [VERSION]
**MCPs Available**: [LIST]

**Blockers**: [ANY ISSUES]

**Ready to Proceed**: [ ] Yes / [ ] No

---

**Last Updated**: 2025-10-30
**Status**: Awaiting verification
**Next Step**: Verify all tools before Phase 1
