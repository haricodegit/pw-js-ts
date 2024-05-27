const { test, expect, request} = require('@playwright/test');
const { brotliCompress } = require('zlib');

test("Clean Up Orders Page", async({page}) => {

    const emailID = "resttassuredd@gmail.com";
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(emailID);
    await page.locator("#userPassword").fill("Welcome@123");
    await page.locator("#login").click();
    await expect(page.locator(".btn-custom").first()).toBeVisible();

    await page.locator("[routerlink*=myorders]").first().click();
    await page.waitForLoadState('networkidle')
    const itemsToDelete = page.locator(".table-bordered .ng-star-inserted .btn-danger");
    const table = page.locator(".table-bordered")
    const itemCount = await itemsToDelete.count();
    console.log("itemCount ",itemCount);
    const flag = await table.isVisible()
    
    if(flag)
    {
    await table.waitFor();
    for (let j = 0; j < itemCount; ++j)
    {
        await itemsToDelete.nth(0).click()
        console.log(await products.nth(j).locator("b").textContent());
    }
    } else {
    console.log("Order page is empty.. No Items to delete!");
    }

    console.log("Orders page cleaned up");

})
