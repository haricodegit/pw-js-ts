import { test, expect, Browser, Page, Locator } from '@playwright/test'
import { webkit, chromium, firefox } from 'playwright'

test('select dropdown value', async() => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome'});
    const page: Page = await browser.newPage();

    await page.goto("https://www.magupdate.co.uk/reader-enquiry/PATI/197");

    const dropval = 'select#Contact_CountryCode';

    // await page.selectOption(dropval, { value: 'IN'});
    // await page.selectOption(dropval, {label: 'France'});
    // await page.selectOption(dropval, {index: 10});

    const allOptions = await page.$$(dropval +' > option');
    console.log(allOptions.length);

    for( const e of allOptions ) {
        const text = await e.textContent();
        // console.log(text);
        if(text === "India"){
            await page.selectOption(dropval, {label: text});
            console.log(text);
            break;
        }
    }

    


    // await page.pause();
    // await dropval.scroll_into_view_if_needed();




    await page.waitForTimeout(5000);
    await page.close();
    await browser.close();
});