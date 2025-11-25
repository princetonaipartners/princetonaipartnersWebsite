import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('loads correctly with hero section', async ({ page }) => {
    await page.goto('/');

    // Check hero text is visible (use exact match to avoid multiple matches)
    await expect(page.getByText('Custom', { exact: true })).toBeVisible();
    await expect(page.getByText('Built for You')).toBeVisible();

    // Check CTA buttons exist (button text appears in spans inside buttons)
    await expect(page.locator('button:has-text("Get Started")').first()).toBeVisible();
    await expect(page.locator('button:has-text("Our Work")').first()).toBeVisible();
  });

  test('quote preview section is visible', async ({ page }) => {
    await page.goto('/');

    // Scroll to quote preview section
    await page.getByText('See What Your Project Could Cost').scrollIntoViewIfNeeded();

    // Check the section exists
    await expect(page.getByText('Free Instant Quote')).toBeVisible();
    await expect(page.getByText('See What Your Project Could Cost')).toBeVisible();
  });

  test('quote preview selection shows price range', async ({ page }) => {
    await page.goto('/');

    // Scroll to quote preview section first
    await page.getByText('Free Instant Quote').scrollIntoViewIfNeeded();

    // Click a project type card in the quote preview section
    const mvpCard = page.getByRole('button', { name: /MVP.*Web App/i }).first();
    await mvpCard.click();

    // Should show the price range
    await expect(page.getByText('$15k - $50k').first()).toBeVisible();
  });

  test('services bento grid is visible', async ({ page }) => {
    await page.goto('/');

    // Check services section header
    const servicesHeader = page.getByText('What We Can Build');
    await servicesHeader.scrollIntoViewIfNeeded();
    await expect(servicesHeader).toBeVisible();

    // Check service card headings exist (use heading role for specificity)
    await expect(page.getByRole('heading', { name: 'Web Development' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'AI Phone Systems' })).toBeVisible();
  });

  test('CTA section is visible at bottom', async ({ page }) => {
    await page.goto('/');

    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Check CTA section
    await expect(page.getByText('Ready to Build Something Great?')).toBeVisible();
  });
});
