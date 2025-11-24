# Test Generator

Generate comprehensive test suite for a component or function.

## Steps:

1. **Ask what to test**:
   - File path of component/function to test
   - Type: Component, Hook, Utility function, or API route

2. **Read the implementation file** to understand:
   - Props and their types
   - Interactions (onClick, onChange, etc.)
   - Edge cases
   - Accessibility requirements

3. **Read testing patterns** from `.rebrand/context/TESTING-STANDARDS.md`

4. **Generate Playwright test** with:
   - Component rendering tests
   - User interaction tests
   - Accessibility checks (axe-core)
   - Visual regression (screenshot)
   - Edge cases

5. **Create test file** at `tests/[component-name].spec.ts`

6. **Run tests** to verify they work:
   ```bash
   npx playwright test tests/[component-name].spec.ts
   ```

7. **Report results**:
   - Number of tests generated
   - Test coverage areas
   - Any failures or warnings

## Test Template:

```typescript
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('ComponentName', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test-page-with-component');
  });

  test('should render correctly', async ({ page }) => {
    const component = page.getByTestId('component-name');
    await expect(component).toBeVisible();
  });

  test('should handle user interactions', async ({ page }) => {
    const button = page.getByRole('button', { name: /click me/i });
    await button.click();

    await expect(page.getByText(/success/i)).toBeVisible();
  });

  test('should not have accessibility violations', async ({ page }) => {
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should match visual snapshot', async ({ page }) => {
    const component = page.getByTestId('component-name');
    await expect(component).toHaveScreenshot('component-name.png');
  });
});
```

## Test Coverage Checklist:

- [ ] Renders without errors
- [ ] Handles all user interactions
- [ ] Validates props/input
- [ ] Tests edge cases (empty, null, large data)
- [ ] Accessibility (keyboard, screen reader, ARIA)
- [ ] Visual regression (screenshot)
- [ ] Responsive (mobile, tablet, desktop)

## After Generation:

- Run the tests immediately
- Report pass/fail status
- Suggest fixes if tests fail
- Update coverage report
