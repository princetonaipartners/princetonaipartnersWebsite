const { test, expect } = require('@playwright/test');

test('Capture solutions page full view', async ({ page }) => {
  await page.goto('http://localhost:3000/solutions.html');
  await page.waitForTimeout(3000);

  // Take full page screenshot
  await page.screenshot({
    path: 'tests/screenshots/solutions-full-page.png',
    fullPage: true
  });

  // Get viewport height and content height
  const dimensions = await page.evaluate(() => {
    return {
      viewportHeight: window.innerHeight,
      contentHeight: document.documentElement.scrollHeight,
      marqueeHeight: document.querySelector('.solutions-marquee')?.offsetHeight,
      wrapperHeight: document.querySelector('.solutions-marquee-wrapper')?.offsetHeight
    };
  });

  console.log('📊 Page Dimensions:');
  console.log(`   Viewport height: ${dimensions.viewportHeight}px`);
  console.log(`   Total content height: ${dimensions.contentHeight}px`);
  console.log(`   Marquee section height: ${dimensions.marqueeHeight}px`);
  console.log(`   Wrapper height: ${dimensions.wrapperHeight}px`);
});
