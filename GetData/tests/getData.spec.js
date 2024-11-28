import { test, expect } from '@playwright/test';

test('get Data', async ({page}) => {
  // await page.goto('https://groww.in/charts/futures/nifty-bank/BANKNIFTY24NOVFUT?exchange=NSE');
  await page.goto('https://groww.in/charts/indices/nifty-bank');
  
  await page.waitForSelector('iframe');

  const frames = page.frames();

  const dynamicFrame = frames.find(frame => frame.name().includes('tradingview'));

  await dynamicFrame.locator('.valuesAdditionalWrapper-G1_Pfvwd').first().waitFor({state: 'attached'});
  // await dynamicFrame.focus('body')

  await page.waitForTimeout(20000);
  // let jsonObjects = {};
  let i = 1;

  const fs = require('fs');

// Create a writable stream for the log file
const logStream = fs.createWriteStream('BNSpotNov27.txt', { flags: 'a' });

// Override the console.log function
console.log = function (message) {
    // Write to the console (optional)
    process.stdout.write(message + '\n');
    
    // Write to the file
    logStream.write(message + '\n');
};

  
  while (i<=75) {
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(1000)
    // console.log(await dynamicFrame.locator('.valuesAdditionalWrapper-G1_Pfvwd').first().textContent());
    let input = await dynamicFrame.locator('.valuesAdditionalWrapper-G1_Pfvwd').first().textContent();
    const cleanedString = input.slice(0, 36);
    let separatedParts = cleanedString.split(/(?=[A-Za-z])/);
    console.log(separatedParts);
    i++;
    // separatedParts.forEach(item => {
    //   // Use a regular expression to separate the alphabetic characters and numeric values
    //   const match = item.match(/^([A-Za-z]+)(\d+\.\d+)$/);

    //   if (match) {
    //     const key = match[1]; // The character part (e.g., "O")
    //     const value = match[2]; // The numeric part (e.g., "52063.00")

    //     // Assign the key-value pair to the result object
    //     jsonObjects[key] = value;
    //   }
    //   console.log('jsonObjects', jsonObjects)
    // });
  }
});