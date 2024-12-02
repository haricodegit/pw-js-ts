import {
  test,
  expect
} from '@playwright/test';
import { url } from 'inspector';

test('get Data', async ({
  page
}) => {
  await page.goto('https://kite.zerodha.com/');

  await page.waitForTimeout(30000);

  await page.waitForSelector('iframe');

  const frames = page.frames();

  // cq-hu-static

  // Print frame details
  console.log(`Number of frames: ${frames.length}`);
  frames.forEach((frame, index) => {
      console.log(`Frame ${index + 1}:`);
      console.log(`  Name: ${frame.name()}`);
      console.log(`  URL: ${frame.url()}`);
  });
    // const frame = page.frame( {url: 'https://groww.in/charts/futures/nifty-bank/BANKNIFTY24NOVFUT?exchange=NSE'});
    // const frame = page.frame({ url: /https:\/\/groww\.in\/charts\/futures\/nifty-bank\/BANKNIFTY24NOVFUT\?exchange=NSE/ });

  const dynamicFrame = frames.find(frame => frame.name().includes('chart-iframe'));

    await dynamicFrame.locator('cq-hu-static').waitFor({state: 'attached'});
    let Open = await dynamicFrame.locator('cq-hu-static div cq-hu-open').textContent();
    let High = await dynamicFrame.locator('cq-hu-static div cq-hu-high').textContent();
    let Low = await dynamicFrame.locator('cq-hu-static div cq-hu-low').textContent();
    let Close = await dynamicFrame.locator('cq-hu-static div cq-hu-close').textContent();
    let DateTime = await dynamicFrame.locator('cq-hu-static div cq-hu-date').textContent();

    // console.log(Open,',',High,',',Low,',',Close,',',DateTime);SSSSS
    console.log(Open,High,Low,Close,DateTime);

// let temp;
//     while(true) {
//       await page.keyboard.press('ArrowRight');
//       await page.waitForTimeout(1000)
//     }
  

    // await page.pause();
    await page.close();
  });