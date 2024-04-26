import { test, expect, Browser, Page, Locator, BrowserContext } from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test("browser context" ,async()=>{
    const browser: Browser = await chromium.launch({headless: true, channel: 'chrome'})

    //browser Context1:
    const browserContext_1: BrowserContext = await browser.newContext();
    const page1: Page = await browserContext_1.newPage();

    //browser Context2:
    const browserContext_2: BrowserContext = await browser.newContext();
    const page2: Page = await browserContext_2.newPage();

    //browser-page1:
    await page1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")

    const emailId1: Locator = await page1.locator('#input-email');
    const password1: Locator = await page1.locator('#input-password')
    const loginBtn1: Locator = await page1.locator("[value='Login']")

    await emailId1.fill('r.ramesh@gmail.com');
    await password1.fill('Welcome@123');
    await loginBtn1.click();

    const title1:string = await page1.title();
    console.log("Page1 Title",title1);

    await expect(title1).toEqual("My Account")

    //browser-page2:
    await page2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    const emailId2: Locator = await page2.locator('#input-email');
    const password2: Locator = await page2.locator('#input-password');
    const loginBtn2: Locator = await page2.locator("[value='Login']");

    await emailId2.fill('Sureeesh.kumarrr93@gmail.com')
    await password2.fill('Welcome@123');
    await loginBtn2.click();

    await expect(page2.getByRole('link', {name: 'Edit your account information'})).toBeVisible();

    // await page2.

    const title2:string = await page2.title();
    console.log("Page2 Title",title2);

    await expect(title2).toEqual('My Account');

    // await new Promise(() => {}); //prevents your script from exiting!

    await browserContext_1.close();
    await browserContext_2.close();
    await browser.close();
});


