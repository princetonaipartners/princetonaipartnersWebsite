# Lint & Format

Run all code quality checks and auto-fix issues.

## Steps:

1. **Run ESLint with auto-fix**:
   ```bash
   npm run lint:fix
   ```

2. **Run Prettier formatting**:
   ```bash
   npm run format
   ```

3. **Run TypeScript type checking**:
   ```bash
   npm run type-check
   ```

4. **Report results**:
   - ✅ ESLint: X errors fixed, Y warnings
   - ✅ Prettier: X files formatted
   - ✅ TypeScript: No errors

5. **If errors remain**:
   - List all errors with file locations
   - Suggest manual fixes
   - Group errors by category

## Auto-fixable Issues:

ESLint will auto-fix:
- Missing semicolons
- Incorrect spacing/indentation
- Unused imports
- Sort imports
- Prefer const over let

Prettier will fix:
- Inconsistent formatting
- Line length violations
- Quote style
- Trailing commas

## Manual Fixes Needed For:

TypeScript errors:
- Type mismatches
- Missing return types
- `any` types
- Null/undefined handling

ESLint errors:
- Unused variables (remove them)
- Missing dependencies in hooks
- Accessibility violations

## Report Format:

```
🔍 Running code quality checks...

✅ ESLint (npm run lint:fix)
   - 12 errors auto-fixed
   - 3 warnings remaining
   - /app/page.tsx:45 - Missing alt text on image
   - /components/Button.tsx:12 - Unused variable 'count'
   - /lib/utils.ts:8 - Prefer const over let

✅ Prettier (npm run format)
   - 8 files formatted
   - No issues

✅ TypeScript (npm run type-check)
   - 2 errors found
   - /components/Card.tsx:23 - Type 'string | undefined' is not assignable to type 'string'
   - /lib/api.ts:15 - Function lacks return type annotation

📝 Manual Fixes Required:
1. Add alt text to image in app/page.tsx:45
2. Remove unused variable in components/Button.tsx:12
3. Add return type to function in lib/api.ts:15
```

## After Running:

- If all checks pass: "✅ All checks passed! Ready to commit."
- If errors remain: "❌ Please fix the errors above before committing."
- Suggest running tests next: "Run /test to verify functionality"
