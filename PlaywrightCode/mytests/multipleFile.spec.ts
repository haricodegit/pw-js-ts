import { test, expect, Browser, Page, Locator } from '@playwright/test'
import { webkit, chromium, firefox } from '@playwright/test'
import path from 'path'

test('Upload Multiple Files', async()=> {
    const browser: Browser = await chromium.launch( { headless: false, channel: 'chrome'});
    const page: Page = await browser.newPage();
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    await page.locator("#filesToUpload").
    setInputFiles([
        path.join("C:/Users/harish.arumugam/OneDrive - Accenture/Documents/logo.png"),
        path.join("C:/Users/harish.arumugam/OneDrive - Accenture/Documents/Kodai.xlsx"),
        path.join("C:/Users/harish.arumugam/OneDrive - Accenture/Documents/Harish Arumugam-Profile.pptx")]);

    await page.waitForTimeout(3000);

    await page.locator("#filesToUpload").setInputFiles([]);

    await page.waitForTimeout(3000);
    await page.close();
    await browser.close(); 
})