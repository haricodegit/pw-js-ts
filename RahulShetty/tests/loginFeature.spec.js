const { test, expect, chromium } = require('@playwright/test');
const exp = require('constants');
const { beforeEach, afterEach } = require('node:test');

test.beforeEach(async ({page}) => {
    // Initialize the browser and a new page
    // console.log("before Each");
    // const browser = await chromium.launch( {headless: false});
    // const page = await browser.newPage();
    await page.goto('https://practicetestautomation.com/practice-test-login/')
});

test.afterEach(async ({page}) => {
    // Close the browser after the each test
    // console.log('after each');
    await page.close();
});

test.describe('Login feature suite', () => {

    test('Login with valid username and password', async({page}) => {
        await page.locator('#username').first().fill('student');
        await page.locator('#password').first().fill('Password123');
        await page.locator('.btn').click();
        const pageTitle = await page.title();
        expect(pageTitle).toBe('Logged In Successfully | Practice Test Automation')
        // expect(page.title()).toBe()
    });

    test.skip('Login with invalid username', async({page})=> {

        await page.locator('#username').first().fill('student');
        await page.locator('#password').first().fill('Password123');
        await page.locator('.btn').click();
        // await page.locator('.show').toBeVisible();
        expect(await page.locator("//div[@id='error']").isVisible({timeout: 30*1000}));
        // const error = page.locator('.show');
        // await expect(error).toBe('Your username is invalid!');
        const error = page.locator("//div[@id='error']");
        await page.waitForSelector("//div[@id='error']");
        await expect(error).toHaveText('Your username is invalid!', {timeout: 30 * 1000});
        // textContent
        // toHaveText()

    });

    test.skip('Login with invalid password', async ({page})=> {
        await page.locator('#username').first().fill('student');
        await page.locator('#password').first().fill('Password123');
        await page.locator('.btn').click();
        await expect(error).toBe('Your password is invalid!');
    });
});