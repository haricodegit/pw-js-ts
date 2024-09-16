const { test, expect } = require('@playwright/test');
const exp = require('constants');
const { beforeEach, afterEach } = require('node:test');

test.beforeEach(async ({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/')
});

test.afterEach(async ({page}) => {
    await page.close();
});

test('Login with environment variables', async ({ page }) => {
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;
    await page.fill("input[name='username']", username);
    await page.fill("input[name='password']", password);
    await page.click('.btn');

    // await page.locator('#username').first().fill('student');
    // await page.locator('#password').first().fill('Password123');
    // await page.locator('.btn').click();
    const pageTitle = await page.title();
    expect(pageTitle).toBe('Logged In Successfully | Practice Test Automation')
  });