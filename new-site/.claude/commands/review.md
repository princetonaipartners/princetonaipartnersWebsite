# Code Review

Automated code review before commits.

## Steps:

1. **Check git status**:
   ```bash
   git status
   ```

2. **Get diff of changes**:
   ```bash
   git diff
   ```

3. **Run all quality checks**:
   - Execute `/lint` command
   - Check for TypeScript errors
   - Verify build succeeds

4. **Review changes for**:
   - **Code Quality**:
     - No TypeScript `any` types
     - Explicit return types
     - Proper error handling
     - No console.logs (except intentional)

   - **React/Next.js Best Practices**:
     - Server Components by default
     - Client components only when needed
     - Proper use of async/await
     - No prop drilling

   - **Styling**:
     - Tailwind classes only (no inline styles)
     - Mobile-first responsive design
     - Brand colors used correctly
     - Consistent spacing

   - **Accessibility**:
     - Semantic HTML
     - Alt text on images
     - Keyboard accessible
     - ARIA labels where needed

   - **Performance**:
     - Next.js Image component for images
     - Lazy loading where appropriate
     - No unnecessary client components
     - Code splitting for heavy components

   - **Testing**:
     - Critical paths have tests
     - Accessibility tests added
     - No broken tests

5. **Generate review report**:
   - List of issues by severity (blocker, warning, suggestion)
   - Code snippets showing problems
   - Suggested fixes

6. **Ask user**:
   - Should I auto-fix issues?
   - Should I proceed with commit?
   - Need more changes?

## Review Checklist:

### Blockers (Must Fix):
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] Build succeeds
- [ ] No broken tests
- [ ] No accessibility violations (critical)
- [ ] No security issues (exposed secrets, XSS, etc.)

### Warnings (Should Fix):
- [ ] No unused variables/imports
- [ ] No `any` types
- [ ] Explicit return types on functions
- [ ] Images have alt text
- [ ] Links have accessible names
- [ ] Forms have labels
- [ ] Mobile responsive

### Suggestions (Nice to Have):
- [ ] Add JSDoc comments
- [ ] Extract magic numbers to constants
- [ ] Consider component composition over props
- [ ] Could be optimized for performance

## Report Format:

```
🔍 Code Review Report

📊 Summary:
   - Files changed: 5
   - Lines added: 127
   - Lines removed: 43
   - Commits: 1

❌ Blockers (3):
   1. TypeScript error in app/page.tsx:45
      - Type 'string | undefined' not assignable to 'string'
      - Fix: Add null check or use optional chaining

   2. Missing alt text on image in components/Hero.tsx:23
      - <Image> component missing alt prop
      - Fix: Add descriptive alt text

   3. Accessibility violation in components/Modal.tsx
      - Modal missing aria-label
      - Fix: Add aria-label="Modal title"

⚠️ Warnings (2):
   1. Unused import in lib/utils.ts:3
      - 'formatDate' is imported but never used
      - Fix: Remove unused import

   2. Using `any` type in components/Card.tsx:12
      - Avoid `any` types, use proper TypeScript
      - Fix: Define proper interface

💡 Suggestions (1):
   1. Consider extracting Hero component styles
      - Lots of Tailwind classes, could use CVA
      - Improves readability and reusability

🎯 Next Steps:
   1. Fix all blockers before committing
   2. Consider fixing warnings
   3. Run /lint to auto-fix formatting
   4. Test in browser (mobile + desktop)
   5. Ready to commit? (yes/no)
```

## After Review:

- If blockers exist: "❌ Please fix blockers before committing"
- If only warnings: "⚠️ Warnings found, but can commit. Fix recommended."
- If all clear: "✅ Code looks good! Ready to commit."
- Offer to run `/lint` to auto-fix issues
- Offer to create commit with proper message
