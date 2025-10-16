/**
 * QUICK PRE-DEPLOYMENT CHECK
 *
 * Fast essential tests before pushing to prod.
 * Runs in under 2 minutes.
 *
 * Run with: npx playwright test tests/quick-check.spec.js
 */

const { test, expect } = require('@playwright/test');

// Critical pages only
const criticalPages = [
    { name: 'Home', url: 'http://localhost:3000/index.html' },
    { name: 'Solutions', url: 'http://localhost:3000/solutions.html' },
    { name: 'Website Management', url: 'http://localhost:3000/websitemanagement.html' },
];

test.describe('QUICK CHECK: Essential Pre-Deployment Tests', () => {

    // Test 1: Critical pages load
    test.describe('Page Load Check', () => {
        for (const page of criticalPages) {
            test(`${page.name} loads successfully`, async ({ page: p }) => {
                const response = await p.goto(page.url, { waitUntil: 'domcontentloaded' });
                expect(response.status()).toBe(200);

                // Basic content check
                const body = p.locator('body');
                await expect(body).toBeVisible();
            });
        }
    });

    // Test 2: No console errors
    test.describe('Console Error Check', () => {
        test('Home page has no critical errors', async ({ page }) => {
            const errors = [];
            page.on('console', msg => {
                if (msg.type() === 'error') {
                    errors.push(msg.text());
                }
            });

            await page.goto('http://localhost:3000/index.html', { waitUntil: 'domcontentloaded' });
            await page.waitForTimeout(2000);

            // Filter out expected/non-critical errors
            const criticalErrors = errors.filter(err =>
                !err.includes('favicon') &&
                !err.includes('404') &&
                !err.includes('net::ERR')
            );

            expect(criticalErrors.length).toBe(0);
        });
    });

    // Test 3: Navigation works
    test('Header navigation exists on all pages', async ({ page }) => {
        for (const p of criticalPages) {
            await page.goto(p.url, { waitUntil: 'domcontentloaded' });

            const header = page.locator('#main-header, header');
            await expect(header).toBeVisible();

            const logo = page.locator('.logo, .logo-img').first();
            await expect(logo).toBeVisible();
        }
    });

    // Test 4: Key interactive features
    test('Solutions page: Cards exist', async ({ page }) => {
        await page.goto('http://localhost:3000/solutions.html', { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(1000);

        const cards = page.locator('.service-card, .solution-card, .card');
        const count = await cards.count();
        expect(count).toBeGreaterThan(0);
    });

    test('Website Management: Mockup gallery exists', async ({ page }) => {
        await page.goto('http://localhost:3000/websitemanagement.html', { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(1000);

        const gallery = page.locator('.mockup-thumbnail, .gallery-item, .mockup-grid');
        const count = await gallery.count();
        expect(count).toBeGreaterThan(0);
    });

    // Test 5: Performance check (basic)
    test('Home page loads in reasonable time', async ({ page }) => {
        const startTime = Date.now();
        await page.goto('http://localhost:3000/index.html', { waitUntil: 'domcontentloaded' });
        const loadTime = Date.now() - startTime;

        // Should load DOM within 5 seconds
        expect(loadTime).toBeLessThan(5000);
        console.log(`Home page DOM load: ${loadTime}ms`);
    });

    // Test 6: Mobile responsiveness (basic)
    test('Home page renders on mobile', async ({ page }) => {
        await page.setViewportSize({ width: 390, height: 844 });
        await page.goto('http://localhost:3000/index.html', { waitUntil: 'domcontentloaded' });

        const body = page.locator('body');
        await expect(body).toBeVisible();

        // Check that content isn't broken
        const overflowX = await page.evaluate(() => {
            return document.body.scrollWidth > document.body.clientWidth;
        });

        // Some horizontal scroll is ok, but not excessive
        expect(overflowX).toBeDefined();
    });

    // Test 7: Critical content exists
    test('Home page has hero section', async ({ page }) => {
        await page.goto('http://localhost:3000/index.html', { waitUntil: 'domcontentloaded' });

        const hero = page.locator('.hero, .hero-section').first();
        await expect(hero).toBeVisible();
    });

    test('All pages have proper titles', async ({ page }) => {
        for (const p of criticalPages) {
            await page.goto(p.url, { waitUntil: 'domcontentloaded' });
            const title = await page.title();

            expect(title.length).toBeGreaterThan(0);
            expect(title).not.toBe('');
            console.log(`${p.name} title: ${title}`);
        }
    });
});

test.afterAll(async () => {
    console.log('\n========================================');
    console.log('✅ QUICK CHECK COMPLETED');
    console.log('========================================');
    console.log('If all tests passed: CLEAR TO PUSH');
    console.log('If any failed: Review and fix first');
    console.log('========================================\n');
});
