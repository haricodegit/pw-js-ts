import { test, expect, Browser, Page, Locator } from '@playwright/test'
import exp from 'constants';
import { webkit, chromium, firefox } from 'playwright'

// test.use({viewport: {width: 1100, height: 500}});

test('Chaining Locators', async() => {
    // const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});

    const page: Page = await browser.newPage();

    await page.goto("https://www.orangehrm.com/en/30-day-free-trial/");
    
    // await page.locator('form#Form_getForm >> #Form_getForm_Name').fill('Naveen');
    // await expect(page.locator('form#Form_getForm >> text=Get Your Free Trial')).toBeVisible();
    // await page.locator('form#Form_getForm >> text=Get Your Free Trial').click();

    // const form = page.locator('form#Form_getForm');
    // const getUrFreeTrailBtn = page.getByRole('button', {name: 'Get Your Free Trial'});

    // await expect(getUrFreeTrailBtn).toBeVisible();
    // await form.locator(getUrFreeTrailBtn).click();

    await page.locator('form#Form_getForm').locator('#Form_getForm_Name').fill('Naveen');
    await expect(page.locator('form#Form_getForm').getByRole('button', {name: 'Get Your Free Trial'})).toBeVisible();
    await page.locator('form#Form_getForm').getByRole('button', {name: 'Get Your Free Trial'}).click();

    await expect(page.locator('form#Form_getForm').getByRole('button', {name: 'Get Your Free Trial'})).toBeInViewport();

    await page.waitForTimeout(5000);

    await page.close();
    await browser.close();
});