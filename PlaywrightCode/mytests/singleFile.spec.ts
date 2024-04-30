import { test, expect, Browser, Page, Locator } from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'

test('Single file upload test', async() => {
    const browser: Browser = await chromium.launch( {headless: false, channel: 'chrome'} );
    const page: Page = await browser.newPage();
    await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html")
    
    // single upload
    // await page.locator("xpath=//input[@name='upfile']").setInputFiles("C:/Users/harish.arumugam/OneDrive - Accenture/Documents/logo.png");
    // await page.locator("input[name='upfile']").setInputFiles("C:/Users/harish.arumugam/OneDrive - Accenture/Documents/logo.png");
    // await page.waitForTimeout(3000);
    // await page.locator("input[name='upfile']").setInputFiles([]);

    await page.locator("input[name='upfile']").setInputFiles({
        name: 'Harish.txt',
        mimeType: 'text/plain',
        buffer: Buffer.from('this is test Harish')
      });

    await page.waitForTimeout(5000);
    await page.close();
    await browser.close();
});