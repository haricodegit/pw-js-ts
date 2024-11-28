const { chromium } = require('@playwright/test');

(async () => {
  // Launch a browser instance using the Chrome executable
  const browser = await chromium.launch({
    headless: false, // Set to true to run in headless mode
    channel: 'chrome', // Ensures Chrome is used instead of Chromium
  });

  // Create a new browser context
  const context = await browser.newContext();

  // Open a new page
  const page = await context.newPage();

  // Navigate to a URL
  await page.goto('https://groww.in/charts/futures/nifty-bank/BANKNIFTY24NOVFUT?exchange=NSE');

  // Wait for a few seconds (optional, for observation purposes)
  await page.waitForTimeout(9000);

  // Close the browser
  await browser.close();
})();
