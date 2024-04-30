import { test, expect, Browser, Page, Locator } from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'

test('Differnt types of Mouse Clicks', async() => {
    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page: Page = await browser.newPage();

    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

    await page.getByText('Double-Click Me To See Alert').dblclick();
    await page.waitForTimeout(2000);

    await page.getByText('right click me').click({button: 'right'} );
    await page.waitForTimeout(2000);

    await page.goto("https://the-internet.herokuapp.com/shifting_content");
    await page.getByText('Example 1: Menu Element').click({modifiers: ['Shift']});

    //mouse hover and click on spiceset website

    await page.goto("https://www.spicejet.com/");
    await page.getByText("Add-ons").first().hover();
    await page.getByText("Taxi").first().click();

    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();
});