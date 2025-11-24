# Testing Standards - Princeton AI Partners

> **AI-Readable Reference**: Testing requirements, patterns, and standards for this Next.js project.

---

## Testing Philosophy

**Core Principles**:
1. **Test user behavior, not implementation details**
2. **Prioritize integration tests over unit tests**
3. **Accessibility testing is non-negotiable**
4. **Visual regression for UI components**
5. **Test in real browsers, not just jsdom**

---

## Testing Stack

### Primary: Playwright (E2E & Component Testing)
- End-to-end tests
- Visual regression tests
- Accessibility tests
- Real browser testing

### Secondary: Jest + React Testing Library (Unit Tests)
- Utility functions
- Hooks
- Server actions
- API routes (unit level)

### Tools:
- **axe-core**: Accessibility testing
- **Lighthouse CI**: Performance & SEO testing

---

## Installation

```bash
# Playwright
npm install -D @playwright/test
npx playwright install

# Jest + React Testing Library
npm install -D jest @testing-library/react @testing-library/jest-dom
npm install -D @testing-library/user-event

# Accessibility
npm install -D @axe-core/playwright

# Lighthouse CI
npm install -D @lhci/cli
```

---

## Playwright Configuration

### playwright.config.ts

```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    // Desktop browsers
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    // Mobile browsers
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],

  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
```

---

## E2E Test Patterns

### Homepage Test

```typescript
// tests/homepage.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display hero section', async ({ page }) => {
    // Test heading exists
    const heading = page.getByRole('heading', {
      name: /build anything.*fast/i,
      level: 1
    });
    await expect(heading).toBeVisible();

    // Test CTA button
    const ctaButton = page.getByRole('button', { name: /get started/i });
    await expect(ctaButton).toBeVisible();
  });

  test('should navigate to services', async ({ page }) => {
    // Click navigation link
    await page.getByRole('link', { name: /services/i }).click();

    // Verify URL
    await expect(page).toHaveURL('/services');

    // Verify content loaded
    await expect(
      page.getByRole('heading', { name: /services/i })
    ).toBeVisible();
  });

  test('should display service cards', async ({ page }) => {
    // Wait for cards to load
    const cards = page.getByTestId('service-card');
    await expect(cards).toHaveCount(7); // 7 services

    // Verify first card has content
    const firstCard = cards.first();
    await expect(firstCard.getByRole('heading')).toBeVisible();
    await expect(firstCard.getByText(/./)).toBeVisible();
  });
});
```

### Form Interaction Test

```typescript
// tests/contact-form.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test('should submit contact form successfully', async ({ page }) => {
    await page.goto('/contact');

    // Fill form
    await page.getByLabel(/name/i).fill('John Doe');
    await page.getByLabel(/email/i).fill('john@example.com');
    await page.getByLabel(/message/i).fill('Hello, I need help with...');

    // Submit
    await page.getByRole('button', { name: /submit/i }).click();

    // Verify success message
    await expect(
      page.getByText(/thank you.*contact/i)
    ).toBeVisible({ timeout: 5000 });
  });

  test('should show validation errors', async ({ page }) => {
    await page.goto('/contact');

    // Submit empty form
    await page.getByRole('button', { name: /submit/i }).click();

    // Verify error messages
    await expect(page.getByText(/name is required/i)).toBeVisible();
    await expect(page.getByText(/email is required/i)).toBeVisible();
  });
});
```

---

## Accessibility Testing

### Basic Accessibility Test

```typescript
// tests/accessibility.spec.ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility', () => {
  test('homepage should not have accessibility violations', async ({ page }) => {
    await page.goto('/');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should support keyboard navigation', async ({ page }) => {
    await page.goto('/');

    // Tab through focusable elements
    await page.keyboard.press('Tab');
    const firstFocusable = await page.locator(':focus');
    await expect(firstFocusable).toHaveAttribute('href', '/services');

    // Test navigation menu
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

    // Verify navigation worked
    await expect(page).toHaveURL(/\/services/);
  });

  test('buttons should have accessible names', async ({ page }) => {
    await page.goto('/');

    // All buttons should have accessible text or aria-label
    const buttons = page.getByRole('button');
    const count = await buttons.count();

    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i);
      const accessibleName = await button.getAttribute('aria-label') ||
                             await button.innerText();
      expect(accessibleName).toBeTruthy();
      expect(accessibleName.length).toBeGreaterThan(0);
    }
  });

  test('images should have alt text', async ({ page }) => {
    await page.goto('/');

    // All images should have alt attribute
    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      expect(alt).toBeDefined(); // Empty alt is OK for decorative images
    }
  });
});
```

---

## Visual Regression Testing

### Screenshot Tests

```typescript
// tests/visual.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Visual Regression', () => {
  test('homepage hero matches snapshot', async ({ page }) => {
    await page.goto('/');

    // Wait for animations to complete
    await page.waitForTimeout(1000);

    // Take screenshot of hero section
    const hero = page.locator('section').first();
    await expect(hero).toHaveScreenshot('hero-section.png', {
      maxDiffPixels: 100, // Allow small differences
    });
  });

  test('service cards match snapshot', async ({ page }) => {
    await page.goto('/services');

    await page.waitForTimeout(500);

    const cards = page.getByTestId('service-card');
    await expect(cards.first()).toHaveScreenshot('service-card.png');
  });

  test('mobile navigation matches snapshot', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Open mobile menu
    await page.getByRole('button', { name: /menu/i }).click();

    await expect(page.locator('nav')).toHaveScreenshot('mobile-nav.png');
  });
});
```

---

## Performance Testing

### Lighthouse CI Configuration

```javascript
// lighthouserc.js
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run build && npm run start',
      url: [
        'http://localhost:3000/',
        'http://localhost:3000/services',
        'http://localhost:3000/contact',
      ],
      numberOfRuns: 3,
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],

        // Specific metrics
        'first-contentful-paint': ['error', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['error', { maxNumericValue: 300 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
```

### Performance Test

```typescript
// tests/performance.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Performance', () => {
  test('page should load within performance budget', async ({ page }) => {
    const startTime = Date.now();

    await page.goto('/');

    // Wait for main content
    await page.getByRole('heading', { level: 1 }).waitFor();

    const loadTime = Date.now() - startTime;

    // Should load in < 3 seconds
    expect(loadTime).toBeLessThan(3000);
  });

  test('images should be optimized', async ({ page }) => {
    await page.goto('/');

    // Get all images
    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);

      // Should have width and height attributes (prevent layout shift)
      const width = await img.getAttribute('width');
      const height = await img.getAttribute('height');

      if (!await img.getAttribute('data-decorative')) {
        // Non-decorative images must have dimensions
        expect(width || height).toBeTruthy();
      }

      // Should use loading="lazy" for below-fold images
      const isAboveFold = await img.evaluate((el) => {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight;
      });

      if (!isAboveFold) {
        const loading = await img.getAttribute('loading');
        expect(loading).toBe('lazy');
      }
    }
  });
});
```

---

## Component Unit Tests (Jest)

### Button Component Test

```typescript
// components/ui/__tests__/button.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);

    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant styles', () => {
    render(<Button variant="outline">Outline</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('border-2', 'border-brand-primary');
  });

  it('disables button when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('forwards ref correctly', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Button</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
```

### Custom Hook Test

```typescript
// hooks/__tests__/useMediaQuery.test.ts
import { renderHook } from '@testing-library/react';
import { useMediaQuery } from '../useMediaQuery';

describe('useMediaQuery', () => {
  it('returns true for matching media query', () => {
    // Mock matchMedia
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: query === '(min-width: 768px)',
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    const { result } = renderHook(() => useMediaQuery('(min-width: 768px)'));
    expect(result.current).toBe(true);
  });
});
```

---

## API Route Tests

```typescript
// app/api/contact/__tests__/route.test.ts
import { POST } from '../route';
import { NextRequest } from 'next/server';

describe('POST /api/contact', () => {
  it('returns 200 for valid contact form submission', async () => {
    const request = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello!',
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
  });

  it('returns 400 for missing fields', async () => {
    const request = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'John Doe',
        // Missing email and message
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.success).toBe(false);
    expect(data.error).toContain('required');
  });
});
```

---

## Test Coverage Requirements

### Minimum Coverage Thresholds

```json
// jest.config.js
{
  "coverageThreshold": {
    "global": {
      "statements": 80,
      "branches": 75,
      "functions": 80,
      "lines": 80
    }
  }
}
```

### What to Test

#### ✅ Always Test:
- **Public APIs**: All exported functions
- **User interactions**: Forms, buttons, navigation
- **Accessibility**: Keyboard navigation, screen readers
- **Critical paths**: Checkout, signup, contact forms
- **Error states**: 404, 500, form validation errors

#### ⚠️ Sometimes Test:
- **Utility functions**: If complex logic
- **Hooks**: If custom behavior
- **Server actions**: Integration tests preferred
- **Static pages**: Visual regression only

#### ❌ Don't Test:
- **Third-party libraries**: Trust they're tested
- **Next.js internals**: Trust Next.js
- **Trivial code**: Simple getters/setters
- **Type definitions**: TypeScript handles this

---

## Test Organization

### Folder Structure

```
tests/
├── e2e/                       # End-to-end tests
│   ├── homepage.spec.ts
│   ├── services.spec.ts
│   ├── contact-form.spec.ts
│   └── navigation.spec.ts
├── accessibility/             # Accessibility tests
│   ├── pages.spec.ts
│   └── components.spec.ts
├── visual/                    # Visual regression tests
│   ├── homepage.spec.ts
│   └── components.spec.ts
└── performance/               # Performance tests
    └── lighthouse.spec.ts

components/
└── ui/
    ├── button.tsx
    └── __tests__/
        └── button.test.tsx

lib/
└── utils/
    ├── cn.ts
    └── __tests__/
        └── cn.test.ts
```

---

## Test Naming Conventions

```typescript
// Test suites: describe('ComponentName' or 'functionName')
describe('Button', () => {
  // Test cases: it('should do something')
  it('should render children correctly', () => {});

  // Nested suites for variants
  describe('variant="outline"', () => {
    it('should apply outline styles', () => {});
  });
});
```

---

## CI/CD Integration

### GitHub Actions Workflow

```yaml
# .github/workflows/test.yml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm ci

      - name: Run linters
        run: npm run lint

      - name: Run type check
        run: npm run type-check

      - name: Run unit tests
        run: npm test

      - name: Install Playwright
        run: npx playwright install --with-deps

      - name: Run E2E tests
        run: npx playwright test

      - name: Upload test results
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: playwright-report
          path: playwright-report/

      - name: Run Lighthouse CI
        run: |
          npm run build
          npm run lhci
```

---

## Pre-commit Hooks

```bash
# .husky/pre-commit
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

# Run linters
npm run lint

# Run type check
npm run type-check

# Run tests (fast unit tests only, not E2E)
npm test -- --onlyChanged
```

---

## Test Data Management

### Mock Data

```typescript
// tests/fixtures/users.ts
export const mockUser = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  createdAt: new Date('2025-01-01'),
};

export const mockUsers = [
  mockUser,
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    createdAt: new Date('2025-01-02'),
  },
];
```

### Test Helpers

```typescript
// tests/helpers.ts
export async function fillContactForm(page: Page, data: ContactFormData) {
  await page.getByLabel(/name/i).fill(data.name);
  await page.getByLabel(/email/i).fill(data.email);
  await page.getByLabel(/message/i).fill(data.message);
}

export async function submitForm(page: Page) {
  await page.getByRole('button', { name: /submit/i }).click();
}
```

---

## Debugging Tests

### Playwright Debugging

```bash
# Run in headed mode (see browser)
npx playwright test --headed

# Run specific test
npx playwright test tests/homepage.spec.ts

# Debug mode (pause before each action)
npx playwright test --debug

# Generate test code (record interactions)
npx playwright codegen http://localhost:3000
```

### Jest Debugging

```bash
# Run specific test file
npm test button.test.tsx

# Run in watch mode
npm test -- --watch

# Run with coverage
npm test -- --coverage
```

---

## Best Practices Checklist

Before pushing tests:

- [ ] **Tests pass locally**: All tests green
- [ ] **Accessibility**: No axe violations
- [ ] **Visual regression**: Screenshots reviewed
- [ ] **Performance**: Lighthouse scores meet thresholds
- [ ] **Mobile**: Tests run on mobile viewports
- [ ] **Cross-browser**: Tests pass in Chrome, Firefox, Safari
- [ ] **Flake-free**: Tests are deterministic, no random failures
- [ ] **Fast**: E2E tests complete in < 5 minutes
- [ ] **Documented**: Complex tests have comments

---

**Last Updated**: 2025-11-04
**Status**: Complete - Follow these standards for all tests
**Coverage Target**: 80% statements, 75% branches
**Lighthouse Target**: 90+ all categories
