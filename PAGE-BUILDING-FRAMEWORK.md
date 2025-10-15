# Page Building Framework
## A Systematic Approach to Building High-Quality Web Pages

**Created**: October 15, 2025
**Purpose**: Repeatable process for building ANY page with Claude Code
**Use Case**: New pages OR major page updates

---

## 🏗️ The 7-Phase Framework

### **Phase 1: Discovery & Strategy**

**1.1 Define the Goal**
- What is the PRIMARY action we want visitors to take?
- What feeling should they have when they leave?
- How does this page fit into the overall site?

**1.2 Identify the Audience**
- Who is this page for? (personas)
- What do they care about?
- What objections do they have?

**1.3 Success Metrics**
- How do we measure if this page is working?
- Engagement metrics (time on page, scroll depth)
- Conversion metrics (clicks, form fills, contact)

**1.4 Competitive Analysis**
- What are the best examples in this space?
- What patterns work? What doesn't?
- How can we differentiate?

---

### **Phase 2: Information Architecture**

**2.1 Section Breakdown**
- Hero (above the fold)
- Supporting sections (3-7 typically)
- Social proof / credibility
- Final CTA
- Footer

**2.2 Content Hierarchy**
- What's the most important message?
- What order tells the best story?
- Where do we need visual vs. text?

**2.3 User Flow**
- Entry points (where do users come from?)
- Journey through page (scrolling, clicking)
- Exit points (where do we want them to go?)

---

### **Phase 3: Design System**

**3.1 Visual Style**
- Color palette (primary, secondary, accents)
- Typography (headings, body, code)
- Spacing scale (8px grid? 16px?)
- Border radius, shadows, effects

**3.2 Component Library**
- Buttons (primary, secondary, ghost)
- Cards (content, feature, testimonial)
- Forms (input, textarea, select)
- Navigation (desktop, mobile)
- Animations (hover, scroll, entrance)

**3.3 Responsive Strategy**
- Breakpoints (mobile, tablet, desktop)
- Layout changes per breakpoint
- Touch vs. hover interactions

---

### **Phase 4: Content Creation**

**4.1 Copywriting**
- Headlines (clear, compelling)
- Body copy (scannable, conversational)
- CTAs (action-oriented, specific)
- Microcopy (labels, tooltips, errors)

**4.2 Visual Assets**
- Images (photos, illustrations, icons)
- Videos (demos, explainers)
- Screenshots (products, features)
- Mockups (designs, prototypes)

**4.3 Interactive Elements**
- Demos (live, iframe, video)
- Animations (GSAP, CSS, Lottie)
- Forms (inputs, validation)
- Modals, tooltips, popovers

---

### **Phase 5: Technical Implementation**

**5.1 Structure (HTML)**
- Semantic markup
- Accessibility (ARIA labels, alt text)
- SEO (meta tags, headings, schema)

**5.2 Styling (CSS)**
- Mobile-first approach
- BEM or utility classes
- CSS custom properties (variables)
- Performance (critical CSS, lazy loading)

**5.3 Interactivity (JavaScript)**
- Progressive enhancement
- Event delegation
- Performance (debounce, throttle)
- Error handling

**5.4 Animation Strategy**
- Entrance animations (fade, slide, scale)
- Scroll-triggered effects
- Hover interactions
- Loading states

---

### **Phase 6: Testing & Refinement**

**6.1 Functionality Testing**
- All links work
- Forms submit correctly
- Animations smooth (60fps)
- No console errors

**6.2 Cross-Device Testing**
- Desktop (1920px, 1440px, 1280px)
- Tablet (1024px, 768px)
- Mobile (390px, 375px, 360px)

**6.3 Performance Testing**
- Load time (<3s ideal)
- First contentful paint
- Lighthouse score (>90)

**6.4 User Feedback**
- Show to user
- Note reactions
- Iterate based on feedback

---

### **Phase 7: Deployment & Documentation**

**7.1 Git Workflow**
- Branch naming convention
- Commit message format
- Pull request if needed

**7.2 Production Deployment**
- Push to main
- Verify live
- Test on production URL

**7.3 Documentation**
- Add to DEVELOPMENT-LOG.md
- Document key decisions
- Note for future reference

---

## 📋 Template Checklist (Use for Every Page)

```markdown
## Page: [PAGE_NAME]

### Phase 1: Discovery ✅
- [ ] Goal defined
- [ ] Audience identified
- [ ] Success metrics set
- [ ] Competitive research done

### Phase 2: Architecture ✅
- [ ] Sections mapped
- [ ] Content hierarchy defined
- [ ] User flow planned

### Phase 3: Design System ✅
- [ ] Color palette chosen
- [ ] Typography set
- [ ] Component library defined
- [ ] Responsive strategy planned

### Phase 4: Content ✅
- [ ] Copy written
- [ ] Visual assets gathered
- [ ] Interactive elements planned

### Phase 5: Implementation ✅
- [ ] HTML structure
- [ ] CSS styling
- [ ] JavaScript interactivity
- [ ] Animations added

### Phase 6: Testing ✅
- [ ] Functionality tested
- [ ] Cross-device tested
- [ ] Performance tested
- [ ] User feedback incorporated

### Phase 7: Deployment ✅
- [ ] Committed to git
- [ ] Pushed to production
- [ ] Documented in log
```

---

## 🎯 Framework Benefits

### For the Team
- **Consistent quality** across all pages
- **Faster development** (no "where do I start?")
- **Better collaboration** (shared language)
- **Clear progress tracking**

### For Claude Code
- **Structured approach** to problem-solving
- **Know what questions** to ask
- **Deliver complete solutions**
- **Easy to iterate** and refine

---

## 🚀 How to Use This Framework

1. **Copy the checklist** for your page
2. **Work through each phase** sequentially
3. **Check off items** as you complete them
4. **Document decisions** in DEVELOPMENT-LOG.md
5. **Iterate** based on feedback

---

## 📚 Example Application

See DEVELOPMENT-LOG.md for examples of this framework in action:
- PhoneAgent.html (October 14, 2025)
- checkin.html (October 15, 2025)
- solutions.html (October 15, 2025)

---

## 💡 Tips for Success

### Do's ✅
- Spend time in Discovery (don't rush to code)
- Get user feedback early and often
- Test on real devices, not just browser resize
- Document decisions as you go
- Iterate based on what you learn

### Don'ts ❌
- Skip phases (especially Discovery)
- Build without a plan
- Assume you know what users want
- Test only on desktop
- Forget to document

---

## 🔄 Framework Iteration

This framework is a living document. As we learn what works, we'll update it.

**Version**: 1.0
**Last Updated**: October 15, 2025
**Status**: Active

---

**Ready to build something amazing? Let's start with Phase 1!**
