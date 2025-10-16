# Pre-Deployment Checklist

**IMPORTANT:** Run this checklist before EVERY push to production.

## Step 1: Run Pre-Deployment Tests

```bash
npx playwright test tests/pre-deployment.spec.js --reporter=html
```

This will:
- ✅ Test all pages load without errors
- ✅ Verify navigation works
- ✅ Check images load correctly
- ✅ Test interactive elements (modals, buttons, etc.)
- ✅ Verify performance (page load times)
- ✅ Test responsive design (mobile, tablet, desktop)
- ✅ Validate links aren't broken
- ✅ Check JavaScript functionality
- ✅ Verify critical content exists
- ✅ Basic accessibility checks

## Step 2: Review Test Results

After tests complete:

1. **Check Terminal Output** - Look for any failures
2. **Review HTML Report** - Run `npx playwright show-report` to see detailed results
3. **Check Screenshots** - Review screenshots in `tests/screenshots/`

## Step 3: Decision Tree

### ✅ If ALL tests pass:
- You are **CLEAR TO PUSH** to production
- Proceed to Step 4

### ❌ If ANY tests fail:
- **DO NOT PUSH**
- Review the failing test(s)
- Fix the issue(s)
- Re-run the test suite
- Only push once all tests pass

## Step 4: Push to Production

```bash
# Stage changes
git add .

# Commit with descriptive message
git commit -m "Your commit message"

# Push to production
git push
```

## Step 5: Post-Deployment

After pushing:
1. Visit the live site
2. Verify critical functionality
3. Check that changes deployed correctly

## Quick Test Command

For a fast check before pushing:

```bash
# Run just the critical tests
npx playwright test tests/pre-deployment.spec.js --grep="Page Load"
```

## Test Results Archive

All test results are saved in:
- `playwright-report/` - HTML reports
- `tests/screenshots/` - Visual captures
- `test-results/` - Detailed test data

## Troubleshooting

### Tests fail locally but site looks fine?
- Make sure local server is running: `npx http-server -p 3000 -c-1`
- Clear browser cache
- Check console for errors

### Tests are too slow?
- Run specific test groups: `--grep="Navigation"`
- Use headed mode to debug: `--headed`
- Skip screenshots: Comment out screenshot lines

## Contact

Questions about testing? Check the Playwright docs or review test file comments.

---

**Remember:** These tests protect BOTH of us. They catch issues before they go live, making deployments safer and giving us confidence in our changes.
