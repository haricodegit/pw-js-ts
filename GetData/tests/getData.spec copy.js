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
    
  // const frames = page.frames();
  const dynamicFrame = frames.find(frame => frame.name().includes('tradingview'));
    // const frame = page.frame({name: 'tradingview_'});

    await dynamicFrame.locator('cq-hu-static').waitFor({state: 'attached'});
    // await dynamicFrame.focus('body')

    await page.waitForTimeout(60000);

    console.log(await dynamicFrame.locator('cq-hu-static').textContent());
    let input = await dynamicFrame.locator('cq-hu-static').textContent();

    const cleanedString = input.slice(0, 36);
    console.log('cleanedString ', cleanedString);

    let separatedParts = cleanedString.split(/(?=[A-Za-z])/); // Split at the point before each alphabetic character
    console.log(separatedParts);

    let jsonObjects = {};

    separatedParts.forEach(item => {
      // Use a regular expression to separate the alphabetic characters and numeric values
      const match = item.match(/^([A-Za-z]+)(\d+\.\d+)$/);
      
      if (match) {
        const key = match[1]; // The character part (e.g., "O")
        const value = match[2]; // The numeric part (e.g., "52063.00")
        
        // Assign the key-value pair to the result object
        jsonObjects[key] = value;
      }
  });

  console.log('jsonObjects ',jsonObjects);


    while(true) {
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(1000)
      console.log(await dynamicFrame.locator('.valuesAdditionalWrapper-G1_Pfvwd').first().textContent());
    }
    
    // O52063.00H52099.00L52026.70C52095.0052095.00+44.50 (+0.09%)Vol11.13K

    await page.pause();
    await page.close();
  });