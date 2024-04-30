import { test, expect, Browser, Page, Locator } from '@playwright/test'
import {webkit, chromium, firefox } from 'playwright'

test('Drag and Drop test', async() =>{
    const browser: Browser = await chromium.launch( {headless: false, channel: 'chrome'} )
    const page: Page = await browser.newPage();

    page.goto("https://jqueryui.com/resources/demos/droppable/default.html");

    //single line
    // await page.locator("#draggable").dragTo(page.locator("#droppable"));

    // Multiple commands
    await page.locator("#draggable").hover();
    await page.mouse.down();
    await page.locator("#droppable").hover();
    await page.mouse.up();

    await page.waitForTimeout(3000);
    await page.close();
    await browser.close();
})