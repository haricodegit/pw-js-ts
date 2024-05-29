const { test, expect } = require('@playwright/test')
const exp = require('constants')

test.describe.configure({mode: 'serial'})

test('More Validations', async({page}) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    // await page.goto("https://google.com")
    // await page.goBack()
    // await page.goForward()
    await expect(page.locator("#displayed-text")).toBeVisible()
    await page.locator("#hide-textbox").click()
    await expect(page.locator("#displayed-text")).toBeHidden()
    // await page.pause()
    page.on('dialog', dialog => dialog.accept())
    await page.locator("#confirmbtn").click()
    await(page.locator("#alertbtn")).click()
    const framePage = page.frameLocator("#courses-iframe")
    await framePage.locator("li a[href*=lifetime-access]:visible").click()
    const msg = await framePage.locator(".text h2").textContent()
    
    console.log(msg.split(" ")[1])
})


test('Capture Screenshot full screen & only element', async({page}) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    // await locator("#hide-textbox").scrollIntoViewIfNeeded()
    await expect(page.locator("#displayed-text")).toBeVisible()
    await page.locator("#hide-textbox").click()
    // await locator("#hide-textbox").scrollIntoViewIfNeeded();
    await page.screenshot({path: 'fullScreen1.png', fullPage: true})
    await expect(page.locator("#displayed-text")).toBeHidden()
    page.on('dialog', dialog => dialog.accept())
    // await page.screenshot({path: 'Screenshot2.png'})
    await page.locator("#confirmbtn").screenshot({path: 'confirmbtn.png'})
    await page.locator("#confirmbtn").click()
    await(page.locator("#alertbtn")).screenshot({path: 'alertbtn.png'})
    await(page.locator("#alertbtn")).click()
    // await page.screenshot({path: 'Screenshot3.png'})
})

test.skip('Visual testing - Screenshot to Screenshot comparision', async({page})=>{
    await page.goto("https://www.clocktab.com/")
    expect(await page.screenshot()).toMatchSnapshot('landing.png')
})

// C:\Users\harish.arumugam\OneDrive - Accenture\Documents\PlaywrightProj\pw-js-ts\ExcelJS
