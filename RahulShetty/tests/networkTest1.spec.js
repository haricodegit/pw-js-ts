const {test, expect } = require('@playwright/test')

test("Mock request", async({page})=> {

    const emailID = "resttassuredd@gmail.com";
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(emailID);
    await page.locator("#userPassword").fill("Welcome@123");
    await page.locator("#login").click();
    await expect(page.locator(".btn-custom").first()).toBeVisible();
    await page.locator("[routerlink*=myorders]").first().click();

    await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*',
        route=> route.continue({url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6581cade9fd99c85e8ee7ff5'})
    )  
    await page.locator("button:has-text('View')").first().click()
    await expect( page.locator(".blink_me")).toHaveText("You are not authorize to view this order")
})


