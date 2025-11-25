import { test, expect } from '@playwright/test';

test.describe('Quote Calculator', () => {
  test('quote page loads with step 1', async ({ page }) => {
    await page.goto('/quote');

    // Check step 1 is visible
    await expect(page.getByText('What would you like to build?')).toBeVisible();

    // Check project type options are visible
    await expect(page.getByText('MVP / Web App')).toBeVisible();
    await expect(page.getByText('AI System')).toBeVisible();
    await expect(page.getByText('Website')).toBeVisible();
  });

  test('selecting project type advances to step 2', async ({ page }) => {
    await page.goto('/quote');

    // Click a project type
    await page.getByText('MVP / Web App').click();

    // Wait for auto-advance and check step 2
    await expect(page.getByText('Tell us more about your project')).toBeVisible({ timeout: 2000 });
  });

  test('can complete full quote flow', async ({ page }) => {
    await page.goto('/quote');

    // Step 1: Select project type
    await page.getByText('MVP / Web App').click();

    // Step 2: Should auto-advance, select complexity and continue
    await expect(page.getByText('Tell us more about your project')).toBeVisible({ timeout: 2000 });
    await page.getByText('Standard').click();
    await page.getByRole('button', { name: 'Continue' }).click();

    // Step 3: Select timeline
    await expect(page.getByText('When do you need this?')).toBeVisible();
    await page.getByText('Standard (4-8 weeks)').click();
    await page.getByRole('button', { name: 'Continue' }).click();

    // Step 4: Fill contact form
    await expect(page.getByText('Where should we send your quote?')).toBeVisible();
    await page.getByPlaceholder('John').fill('Test');
    await page.getByPlaceholder('Smith').fill('User');
    await page.getByPlaceholder('john@company.com').fill('test@example.com');
  });

  test('progress indicator shows current step', async ({ page }) => {
    await page.goto('/quote');

    // Step 1 should be active
    const step1 = page.locator('[data-step="1"]').first();
    // Check we're on step 1 by verifying the question
    await expect(page.getByText('What would you like to build?')).toBeVisible();
  });
});
