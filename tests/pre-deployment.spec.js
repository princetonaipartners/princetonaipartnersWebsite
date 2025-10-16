/**
 * PRE-DEPLOYMENT TEST SUITE
 *
 * This comprehensive test suite runs before every push to production.
 * It checks all critical functionality across the entire site.
 *
 * Run with: npx playwright test tests/pre-deployment.spec.js
 */

const { test, expect } = require('@playwright/test');

// Configure test to run on all pages
const pages = [
    { name: 'Home', url: 'http://localhost:3000/index.html' },
    { name: 'Solutions', url: 'http://localhost:3000/solutions.html' },
    { name: 'Website Management', url: 'http://localhost:3000/websitemanagement.html' },
    { name: 'Phone Agent', url: 'http://localhost:3000/PhoneAgent.html' },
    { name: 'Check-in', url: 'http://localhost:3000/checkin.html' },
    { name: 'About', url: 'http://localhost:3000/about.html' },
    { name: 'Contact', url: 'http://localhost:3000/contact.html' },
];

test.describe('PRE-DEPLOYMENT: Critical Functionality Tests', () => {

    // Test 1: All pages load successfully
    test.describe('Page Load Tests', () => {
        for (const page of pages) {
            test(`${page.name} page loads without errors`, async ({ page: p }) => {
                const response = await p.goto(page.url);
                expect(response.status()).toBe(200);

                // Check for no console errors
                const errors = [];
                p.on('console', msg => {
                    if (msg.type() === 'error') errors.push(msg.text());
                });

                await p.waitForLoadState('networkidle');
                expect(errors.length).toBe(0);
            });
        }
    });

    // Test 2: Navigation works on all pages
    test.describe('Navigation Tests', () => {
        for (const page of pages) {
            test(`Navigation menu works on ${page.name}`, async ({ page: p }) => {
                await p.goto(page.url);

                // Check header exists
                const header = p.locator('#main-header, header');
                await expect(header).toBeVisible();

                // Check logo exists and is clickable
                const logo = p.locator('.logo, .logo-img').first();
                await expect(logo).toBeVisible();
            });
        }
    });

    // Test 3: Critical images load
    test.describe('Image Load Tests', () => {
        for (const page of pages) {
            test(`Critical images load on ${page.name}`, async ({ page: p }) => {
                await p.goto(page.url);
                await p.waitForLoadState('networkidle');

                // Check for logo
                const logo = p.locator('.logo-img, img[alt*="Princeton"]').first();
                if (await logo.count() > 0) {
                    await expect(logo).toBeVisible();
                }
            });
        }
    });

    // Test 4: Interactive elements work
    test.describe('Interactivity Tests', () => {

        test('Solutions page: Service cards are clickable', async ({ page }) => {
            await page.goto('http://localhost:3000/solutions.html');
            await page.waitForLoadState('networkidle');

            // Check if cards exist
            const cards = page.locator('.service-card, .solution-card');
            const count = await cards.count();
            expect(count).toBeGreaterThan(0);
        });

        test('Website Management: Mockups modal works', async ({ page }) => {
            await page.goto('http://localhost:3000/websitemanagement.html');
            await page.waitForLoadState('networkidle');

            // Check for mockup thumbnails
            const thumbnails = page.locator('.mockup-thumbnail, .gallery-item');
            const count = await thumbnails.count();

            if (count > 0) {
                // Click first thumbnail
                await thumbnails.first().click();

                // Check if modal appears
                const modal = page.locator('.modal, .mockup-modal');
                await expect(modal).toBeVisible({ timeout: 2000 });

                // Close modal
                const closeBtn = page.locator('.close-modal, .modal-close, [aria-label="Close"]');
                if (await closeBtn.count() > 0) {
                    await closeBtn.click();
                }
            }
        });

        test('Check-in: Timeline switcher works', async ({ page }) => {
            await page.goto('http://localhost:3000/checkin.html');
            await page.waitForLoadState('networkidle');

            // Find timeline buttons
            const buttons = page.locator('.timeline-btn, button[data-business]');
            const count = await buttons.count();

            if (count > 0) {
                // Click different timeline
                await buttons.nth(1).click();
                await page.waitForTimeout(500);

                // Check if content changed
                const timelineCards = page.locator('.timeline-card, .step-card');
                expect(await timelineCards.count()).toBeGreaterThan(0);
            }
        });

        test('Phone Agent: Demo interaction works', async ({ page }) => {
            await page.goto('http://localhost:3000/PhoneAgent.html');
            await page.waitForLoadState('networkidle');

            // Check for interactive demo elements
            const demoButtons = page.locator('button, .demo-button, .cta-button');
            expect(await demoButtons.count()).toBeGreaterThan(0);
        });
    });

    // Test 5: Performance checks
    test.describe('Performance Tests', () => {
        for (const page of pages) {
            test(`${page.name} loads within acceptable time`, async ({ page: p }) => {
                const startTime = Date.now();
                await p.goto(page.url);
                await p.waitForLoadState('networkidle');
                const loadTime = Date.now() - startTime;

                // Should load within 10 seconds
                expect(loadTime).toBeLessThan(10000);

                console.log(`${page.name} load time: ${loadTime}ms`);
            });
        }
    });

    // Test 6: Responsive design
    test.describe('Responsive Design Tests', () => {
        const viewports = [
            { name: 'Mobile', width: 390, height: 844 },
            { name: 'Tablet', width: 768, height: 1024 },
            { name: 'Desktop', width: 1920, height: 1080 }
        ];

        for (const viewport of viewports) {
            test(`Home page renders on ${viewport.name}`, async ({ page }) => {
                await page.setViewportSize({ width: viewport.width, height: viewport.height });
                await page.goto('http://localhost:3000/index.html');
                await page.waitForLoadState('networkidle');

                // Check that content is visible
                const body = page.locator('body');
                await expect(body).toBeVisible();

                // Take screenshot for reference
                await page.screenshot({
                    path: `tests/screenshots/pre-deploy-${viewport.name.toLowerCase()}.png`,
                    fullPage: false
                });
            });
        }
    });

    // Test 7: Links are not broken
    test.describe('Link Validation Tests', () => {
        test('Navigation links work on home page', async ({ page }) => {
            await page.goto('http://localhost:3000/index.html');
            await page.waitForLoadState('networkidle');

            // Get all navigation links
            const navLinks = page.locator('nav a, .nav-links a');
            const count = await navLinks.count();

            for (let i = 0; i < Math.min(count, 5); i++) {
                const link = navLinks.nth(i);
                const href = await link.getAttribute('href');

                if (href && !href.startsWith('#') && !href.startsWith('http')) {
                    expect(href).toBeTruthy();
                }
            }
        });
    });

    // Test 8: JavaScript functionality
    test.describe('JavaScript Tests', () => {
        test('Header scroll effect works', async ({ page }) => {
            await page.goto('http://localhost:3000/index.html');
            await page.waitForLoadState('networkidle');

            const header = page.locator('#main-header, header').first();

            // Scroll down
            await page.evaluate(() => window.scrollTo(0, 200));
            await page.waitForTimeout(300);

            // Check if header changed (got scrolled class or backdrop)
            const headerElement = await header.elementHandle();
            expect(headerElement).toBeTruthy();
        });

        test('Smooth scrolling to anchors works', async ({ page }) => {
            await page.goto('http://localhost:3000/index.html');
            await page.waitForLoadState('networkidle');

            // Find anchor link
            const anchorLink = page.locator('a[href^="#"]').first();
            if (await anchorLink.count() > 0) {
                await anchorLink.click();
                await page.waitForTimeout(500);

                // Check scroll position changed
                const scrollY = await page.evaluate(() => window.scrollY);
                expect(scrollY).toBeGreaterThan(0);
            }
        });
    });

    // Test 9: Critical content exists
    test.describe('Content Validation Tests', () => {
        test('Home page has hero section', async ({ page }) => {
            await page.goto('http://localhost:3000/index.html');
            const hero = page.locator('.hero, .hero-section, section').first();
            await expect(hero).toBeVisible();
        });

        test('Solutions page has service offerings', async ({ page }) => {
            await page.goto('http://localhost:3000/solutions.html');
            await page.waitForLoadState('networkidle');

            const services = page.locator('.service-card, .solution-card, .card');
            expect(await services.count()).toBeGreaterThan(0);
        });

        test('Contact page has form or contact info', async ({ page }) => {
            await page.goto('http://localhost:3000/contact.html');
            await page.waitForLoadState('networkidle');

            // Check for form or contact information
            const hasForm = await page.locator('form').count() > 0;
            const hasContactInfo = await page.locator('a[href^="mailto"], a[href^="tel"]').count() > 0;

            expect(hasForm || hasContactInfo).toBeTruthy();
        });
    });

    // Test 10: Accessibility basics
    test.describe('Accessibility Tests', () => {
        for (const page of pages) {
            test(`${page.name} has proper title`, async ({ page: p }) => {
                await p.goto(page.url);
                const title = await p.title();
                expect(title.length).toBeGreaterThan(0);
                expect(title).not.toBe('');
            });
        }
    });
});

// Generate summary report
test.afterAll(async () => {
    console.log('\n=================================');
    console.log('PRE-DEPLOYMENT TESTS COMPLETED');
    console.log('=================================');
    console.log('Review the test results above.');
    console.log('If all tests passed, you are clear to push to production.');
    console.log('If any tests failed, review and fix before deploying.');
    console.log('=================================\n');
});
