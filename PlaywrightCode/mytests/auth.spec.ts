import {test, Browser, expect, Page, Locator, BrowserContext} from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('auth-test', async()=>{
    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();

    const username: any = 'admin';
    const password: any = 'admin';
    const authHeader: any = 'Basic ' + btoa('admin'+':'+'admin')

    page.setExtraHTTPHeaders({Authorization: getBasicAuth(username, password)})
    await page.goto('https://the-internet.herokuapp.com/basic_auth')

    // await new Promise(() => {}); //Blank promise, prevents your script from exiting!
    await page.waitForTimeout(5000)  //wait for 5 secs
    console.log("Waiting time ??");

    await context.close();
    await browser.close();
});


function getBasicAuth(username: any, password: any):any {
    return 'Basic ' + btoa('admin'+':'+'admin')
}