import {
  test,
  expect
} from '@playwright/test';
const { chromium } = require('playwright');
import { url } from 'inspector';

test('get Data', async () => {

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({
      viewport: { width: 1800, height: 1020 } // Set viewport size to Full HD
  });
    const page = await context.newPage();
  await page.goto('https://kite.zerodha.com/');

  await page.waitForTimeout(30000);

  await page.waitForSelector('iframe');
  const framesOld = page.frames();
  const dynamicFrameOld = framesOld.find(frame => frame.name().includes('chart-iframe'));

  const [newPage] = await Promise.all([
    context.waitForEvent('page'), // Wait for a new page to be created
    await dynamicFrameOld.locator('#popout_chart').click(), // Click the element that opens the new tab
]);

  const fs = require('fs');

// Create a writable stream for the log file
const logStream = fs.createWriteStream('KiteBNSpotNovMonth.txt', { flags: 'a' });

// Override the console.log function
console.log = function (message) {
    // Write to the console (optional)
    process.stdout.write(message + '\n');
    
    // Write to the file
    logStream.write(message + '\n');
};

  await newPage.waitForLoadState();
  await newPage.waitForSelector('iframe');
  const frames = newPage.frames();
  const dynamicFrame = frames.find(frame => frame.name().includes('chart-iframe'));

  await newPage.waitForTimeout(60000);

  await dynamicFrame.locator('cq-hu-static').waitFor({state: 'attached'});

    let i = 1;
    while(i<=1200) {
      await newPage.keyboard.press('ArrowRight');
      await newPage.waitForTimeout(1000)
    let Open = await dynamicFrame.locator('cq-hu-static div cq-hu-open').textContent();
    let High = await dynamicFrame.locator('cq-hu-static div cq-hu-high').textContent();
    let Low = await dynamicFrame.locator('cq-hu-static div cq-hu-low').textContent();
    let Close = await dynamicFrame.locator('cq-hu-static div cq-hu-close').textContent();
    let DateTime = await dynamicFrame.locator('cq-hu-static div cq-hu-date').textContent();
    console.log(Open+','+High+','+Low+','+Close+','+DateTime);
    // console.log(Open,High,Low,Close,DateTime);
    }
  

    // await page.pause();
    await newPage.close();
    await page.close();
  });