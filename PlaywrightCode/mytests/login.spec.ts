import {test, expect, Browser, Page, Locator} from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('login test', async()=>{
    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page: Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")

    const emailId: Locator = await page.locator('#input-email');
    const password: Locator = await page.locator('#input-password')
    const loginBtn: Locator = await page.locator("[value='Login']")

    await emailId.fill("r.ramesh@gmail.com");
    await password.fill("Welcome@123");
    await loginBtn.click();

    const title = await page.title();
    console.log("Page Title: ",title)

    await page.screenshot({path: 'homepage.png'});

    await expect(title).toEqual("My Account");

    const myAccount: Locator = await page.locator("//a[@title='My Account']")
    const logoutBtn: Locator = await page.locator("//li/a[text()='Logout']")

    await myAccount.click();
    await logoutBtn.click();
    await page.waitForTimeout(5000)

    await page.screenshot({path: 'logout.png'});

    await browser.close();
    
});


// register new user

test('New User Creation', async()=>{
    const browser: Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page: Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register")

    const firstName: Locator = await page.locator('#input-firstname');
    const lastName: Locator = await page.locator('#input-lastname');
    const emailID: Locator = await page.locator('#input-email');
    const telePhone: Locator = await page.locator('#input-telephone');
    const password: Locator = await page.locator('#input-password');
    const confirmPassword: Locator = await page.locator('#input-confirm');
    const checkBox: Locator = await page.locator("//input[@name='agree']");
    const contn: Locator = await page.locator("//input[@value='Continue']");

    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    function generateString(length:number) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log("generateString: ",result);
    return result;
}

    await firstName.fill("Suresh")
    await lastName.fill("Kumar")
    await emailID.fill(generateString(5)+"@gmail.com")
    await telePhone.fill("9988776655");
    await password.fill("Welcome@123")
    await confirmPassword.fill("Welcome@123")
    await checkBox.click();
    await contn.click();

    const title1 = await page.title();
    console.log("Page Title ",title1);

    await page.screenshot({path: 'NewUser.png'})
    await expect(title1).toEqual("Your Account Has Been Created!")

    const contnNew: Locator = await page.locator("//a[text()='Continue']")
    await contnNew.click();

    const myAccount: Locator = await page.locator("//a[@title='My Account']");
    const logoutBtn: Locator = await page.locator("//li/a[text()='Logout']");

    await myAccount.click();
    await logoutBtn.click();
    await page.waitForTimeout(5000)

    await browser.close();

})