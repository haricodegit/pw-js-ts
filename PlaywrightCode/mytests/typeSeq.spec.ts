import { test, expect, Browser, Page, Locator} from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'

test("Type Search text sequencely", async() => {
    const browser: Browser = await chromium.launch( {headless: false, channel: 'chrome'} )
    const page: Page = await browser.newPage();
    await page.goto("https://www.flipkart.com/");

    await page.getByPlaceholder("Search for Products, Brands and More").pressSequentially("Macbook", {delay: 1000});

    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();

});