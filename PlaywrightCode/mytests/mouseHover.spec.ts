import { test, expect, Browser, Page, Locator, webkit, chromium, firefox } from '@playwright/test'
import exp from 'constants';
import { link } from 'fs';
/*
test('Mouse hover test click on Taxi sub menu', async() => {
    const browser: Browser = await chromium.launch({headless: true, channel: 'chrome'});
    const page: Page = await browser.newPage();

    await page.goto("https://www.spicejet.com/");

    await page.getByText('Add-ons').first().hover();
    await page.waitForTimeout(3000);
    await page.getByText('Taxi').first().click();

    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();
});

test('Mouse hover - click on Visa Services', async() => {
    const browser: Browser = await chromium.launch({headless: true, channel: 'chrome'});
    const page: Page = await browser.newPage();

    await page.goto("https://www.spicejet.com/");
    await page.getByText('Add-ons').first().hover();
    await page.waitForTimeout(3000);
    await page.getByText('Visa Services').first().click();

    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();
});
*/
test('Mouse Hover - BigBasket', async() => {
    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page: Page = await browser.newPage();

    await page.goto("https://www.bigbasket.com/");
    const Category: Locator = page.locator("xpath=//button[@id='headlessui-menu-button-:R5bab6:' and @type='button']");
    await expect(Category).toBeVisible();
    await Category.click();
    await page.waitForTimeout(2000);

    const value1: Locator = page.locator("xpath=//div[@id='headlessui-menu-items-:R9bab6:']/nav/ul/li//a[text()='Beverages']");

    //div[@id='headlessui-menu-items-:R9bab6:']/nav//ul[@class='jsx-1259984711 w-56 px-2.5 bg-silverSurfer-200 text-darkOnyx-800']/li/a[text()='Green Tea']
    await expect(value1).toBeVisible();
    await value1.hover();
    await page.waitForTimeout(2000);

    const value2: Locator = page.locator("xpath=//div[@id='headlessui-menu-items-:R9bab6:']/nav//ul[@class='jsx-1259984711 w-56 px-2.5 bg-silverSurfer-200 text-darkOnyx-800']/li//a[text()='Tea']");
    await expect(value2).toBeVisible();
    await value2.hover();
    await page.waitForTimeout(2000);

    // //div[@id='headlessui-menu-items-:R9bab6:']/nav//ul[@class='jsx-1259984711 w-56 px-2.5 bg-white text-darkOnyx-800 rounded-r-xs']/li//a[text()='Green Tea']
    const value3: Locator = page.locator("//div[@id='headlessui-menu-items-:r7q:']/nav//ul[@class='jsx-1259984711 w-56 px-2.5 bg-white text-darkOnyx-800 rounded-r-xs']/li//a[text()='Green Tea']");
    await page.waitForTimeout(2000);
    await expect(value3).toBeVisible();
    await value3.click();

    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();

});