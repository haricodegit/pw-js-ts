/*
1. ID Selector: Selects elements based on their id attribute
const element = page.locator('id=my-button');

2. Class Name Selector: Selects elements based on their class name
const element = page.locator('.submit-button');

3. Text Selector: Selects elements that contain specific text.
const element = page.locator('text=Submit');

4. CSS Selector: Selects elements based on their CSS properties.
const element = page.locator('css=button#id');

5. Xpath Selector: Selects elements based on Xpath query.
const element = page.locator('xpath=//buton[text()="Submit"]');

*/

import { test, expect, Browser, Page, Locator, webkit, chromium, firefox } from '@playwright/test'
//import (webkit, chromium, firefox) from 

test('Locators 1', async()=> {
    const browser: Browser = await chromium.launch({headless: true, channel: 'chrome'});
    const page: Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    // 1. ID Selector, Id is always unique

    const firstName: Locator = page.locator('id=input-firstname');
    await firstName.fill("Ramesh")

    const lastName: Locator = page.locator('id=input-lastname');
    await lastName.fill("Suresh")

    const emailId: Locator = page.locator('id=input-email');
    await emailId.fill("xyz@gmail.com")

    // 2. Class Selector

    const logo: Locator = page.locator(".img-responsive");
    
    const logoExist = await logo.isEnabled();
    await console.log("logoExist ",logoExist);

    // 3. Text selector

    const header: Locator = page.locator('text=Register Account');

    const headerExist = await header.isEnabled();
    await console.log("registerExist ",headerExist);


    const forgotPass: Locator = page.locator('text=Forgotten Password');
    const forgotPassExist = await forgotPass.isEnabled();
    await console.log("forgotPassExist ",forgotPassExist);

    const continueBtn: Locator = page.locator('text=Continue');
    const continueBtnExist = await continueBtn.isEnabled();
    await console.log("continueBtnExist ",continueBtnExist);

    // 4. css selector
    // const element = page.locator('css=button#id');

    await emailId.clear();

    const emailId1: Locator = page.locator('css=input#input-email');
    await emailId1.fill('abc@gmail.com');

    const telePhone: Locator = page.locator('css=input[name="telephone"]');
    await telePhone.fill("9988776677");
    
    const checkBox: Locator = page.locator("css=input[type='checkbox']");
    await checkBox.click();


    // 5. Xpath
    // const element = page.locator('xpath=//buton[text()="Submit"]');

    const passwrd: Locator = page.locator("xpath=//input[@id='input-confirm']");
    const passwrdEditable = await passwrd.isEditable();
    await console.log("passwrdEditable ",passwrdEditable);
    
    const search: Locator = page.locator("//input[@name='search' and @type='text']");
    await search.fill("Search something");

    await page.waitForTimeout(5000);
    await page.close();
    await browser.close();

});