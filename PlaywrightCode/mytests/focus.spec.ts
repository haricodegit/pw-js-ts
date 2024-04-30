import { test, expect, Browser, Page, Locator } from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('Focus method', async() => {
    const browser: Browser = await chromium.launch( {headless: false, channel: 'chrome'} );
    const page: Page = await browser.newPage();

    await page.goto("https://www.orangehrm.com/en/30-day-free-trial/")

    const fullName: Locator = await page.locator("#Form_getForm_Name");

    await fullName.focus();
    await fullName.fill("Harish Automation Testing");

    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();

})