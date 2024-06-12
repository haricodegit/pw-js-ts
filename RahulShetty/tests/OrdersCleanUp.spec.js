const { test, expect, request} = require('@playwright/test');
const { brotliCompress } = require('zlib');

test("Clean Up Orders Page", async({page}) => {

<<<<<<< HEAD
    const emailID = "resttassuredd@gmail.com";
    // const emailID = "restassured@gmail.com";
=======
    // const emailID = "resttassuredd@gmail.com";
    const emailID = "restassured@gmail.com";
>>>>>>> b94eeeefe518dc39826667d4acb3bcfdaa82f07e
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(emailID);
    await page.locator("#userPassword").fill("Welcome@123");
    await page.locator("#login").click();
    await expect(page.locator(".btn-custom").first()).toBeVisible();

    await page.locator("[routerlink*=myorders]").first().click();
    await page.waitForLoadState('networkidle')
    const itemsToDelete = page.locator(".table-bordered .ng-star-inserted .btn-danger");
    const table = page.locator(".table-bordered")
    const OrderIds	 = page.locator("tbody tr th");
    const rowData = page.locator("tbody tr")
    const itemCount = await itemsToDelete.count();
    console.log("itemCount ",itemCount);
    const flag = await table.isVisible()
    
    if(flag)
    {
    await table.waitFor();
    while (await rowData.count() > 0 )
    {
        // console.log("rowData.count()", await rowData.count());
        console.log(await rowData.nth(0).textContent());
        await itemsToDelete.nth(0).click()
        // const responsePromise = page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/delete-order/*")
        await page.waitForTimeout(300)
        // await page.waitForLoadState('load')
        // console.log(await products.nth(0).textContent());
        // const response = await responsePromise
        // console.log("response ", response);
    }
    } else {
    console.log("Order page is empty.. No Items to delete!");
    }

    console.log("Orders page cleaned up");

})
