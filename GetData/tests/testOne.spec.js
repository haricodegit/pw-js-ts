const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the target page
  await page.goto('https://groww.in/charts/futures/nifty-bank/BANKNIFTY24NOVFUT?exchange=NSE');

  // Get all frames on the page
  const frames = page.frames();

  // Print frame details
  console.log(`Number of frames: ${frames.length}`);
  frames.forEach((frame, index) => {
    console.log(`Frame ${index + 1}:`);
    console.log(`  Name: ${frame.name()}`);
    console.log(`  URL: ${frame.url()}`);
  });

  await browser.close();
})();
