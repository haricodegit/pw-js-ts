//let browser = 'chrome'

const { firefox } = require('playwright');

(async () => {
    const browser = await firefox.launch();
    const page = await browser.newPage();
    await page.goto('https://www.w3schools.com/jsref/jsref_return.asp')
    await browser.close();

}) ();