const { chromium } = require('playwright');
const { POManager } = require('../../PageObjects/POManager')
const { expect } = require('@playwright/test')
const { Before, After, AfterStep, Status } = require('@cucumber/cucumber')

Before({ timeout: 100 * 1000, tags: "@Regression or @EndtoEndFlow or @Validation or @ErrorMessages" }, async function () {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.poManager = new POManager(this.page, expect)
  });

  AfterStep({timeout: 100*1000}, async function({result}) {
    if(result.status === Status.FAILED) {
        await this.page.screenshot({path: "FailedScreenshot1.png"})
    }
  })

  After(function () {
    console.log("This is the last step of Execution");
  })