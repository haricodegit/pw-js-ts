import { test, expect, Browser, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('noInCognito browser test', async() => {
    // const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});

    const userDataDir: string = await "C:\Users\harish.arumugam\AppData\Local\Google\Chrome\User Data\Default";
    const browser: BrowserContext = await chromium.launchPersistentContext('', {headless: true, channel: 'chrome'})
   
    const pages: Page[] = browser.pages(); // 0-1 2 windows
    
    const page: Page = pages[0];

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    await page.locator('#input-firstname').fill("Naveen");
    await page.locator('#input-lastname').fill("Automation Labs");

    // await expect(page.getByRole('button', {name: 'Continue'})).toBeVisible();

    await page.waitForTimeout(10000);

    await page.close();
    await browser.close();
})