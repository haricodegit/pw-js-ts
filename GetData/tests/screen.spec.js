const { chromium } = require('playwright');
import {
    test,
    expect
  } from '@playwright/test';

test('get Data',async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({
        viewport: { width: 1500, height: 900 } // Set viewport size to Full HD
    });
    const page = await context.newPage();

    await page.goto('https://kite.zerodha.com/');

    // Perform actions here
    await page.pause();

    await browser.close();
});
