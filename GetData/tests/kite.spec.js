import {
  test,
  expect
} from '@playwright/test';
import { url } from 'inspector';

test('get Data', async ({
  page
}) => {
  await page.goto('https://kite.zerodha.com/');

  await page.waitForTimeout(60000);
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

  await page.waitForSelector('iframe');
  const frames = page.frames();
  const dynamicFrame = frames.find(frame => frame.name().includes('chart-iframe'));

    await dynamicFrame.locator('cq-hu-static').waitFor({state: 'attached'});

    let i = 1;
    while(i<=1200) {
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(1000)
    let Open = await dynamicFrame.locator('cq-hu-static div cq-hu-open').textContent();
    let High = await dynamicFrame.locator('cq-hu-static div cq-hu-high').textContent();
    let Low = await dynamicFrame.locator('cq-hu-static div cq-hu-low').textContent();
    let Close = await dynamicFrame.locator('cq-hu-static div cq-hu-close').textContent();
    let DateTime = await dynamicFrame.locator('cq-hu-static div cq-hu-date').textContent();
    console.log(Open+','+High+','+Low+','+Close+','+DateTime);
    // console.log(Open,High,Low,Close,DateTime);
    }
  

    // await page.pause();
    await page.close();
  });