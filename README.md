# Princeton AI Partners - Web Development Workspace

**Production Site**: https://princetonaipartners.github.io/princetonaipartnersWebsite/

---

## 📁 Directory Structure

### Production Website (Root)
All `.html` files in root are part of the live princeton-ai.com website.

**Main Pages:**
- `index.html` - Homepage
- `about.html` - About page
- `solutions.html` - Solutions showcase
- `PhoneAgent.html` - AI Phone Agent demo
- `checkin.html` - Check-in system demo
- `websitemanagement.html` - Website management page
- `contact.html` - Contact page
- `clients.html` - Client showcase

### `.agent/` - Your Development System ⭐
**Primary documentation and workflow system**

Read: `.agent/readme.md` for complete guide

**Quick Start:**
```bash
# Starting a new feature?
cp .agent/system/requirements-template.md .agent/task/[feature]-requirements.md
# Fill it out, then have agent create implementation plan
```

**Key Docs:**
- `.agent/system/core-principles.md` - How we work with Claude Code
- `.agent/system/design-system.md` - Design patterns
- `.agent/system/animation-patterns.md` - GSAP recipes
- `.agent/system/seo-checklist.md` - Pre-publish checklist

### `client-work/` - Client Projects
- `UplevelResume/` - Active client project
- `templates/` - Reusable starter templates

Read: `client-work/README.md` for client workflow

### `tests/` - Playwright Testing
Test files for production site (27 test suites)
```bash
npx playwright test              # Run all tests
npx playwright test --ui         # Interactive mode
```

### `_archive/` - Old Files
Historical documentation, completed client work, and old projects.

---

## 🚀 Quick Commands

**Local Development:**
```bash
npx http-server -p 3000          # Serve site locally
```

**Testing:**
```bash
npx playwright test              # Run tests
npx playwright show-report       # View test results
```

**Deploy:**
```bash
git add .
git commit -m "Description"
git push origin main             # Auto-deploys to GitHub Pages
```

---

## 🎯 Workflow for New Features

1. **Requirements** - Copy `.agent/system/requirements-template.md` to `.agent/task/`
2. **Plan** - Agent creates implementation plan
3. **Build** - Reference `.agent/system/` docs as needed
4. **Test** - Run Playwright tests
5. **Deploy** - Git push to main branch
6. **Document** - Move plan to `.agent/task/archive/`

---

## 📚 Documentation

**Start here:** `.agent/readme.md`

All patterns, templates, and best practices are in `.agent/system/`

---

**Last Updated**: October 25, 2025
