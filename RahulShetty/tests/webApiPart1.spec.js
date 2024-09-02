const { test, expect, request } = require('@playwright/test');
const exp = require('constants');
const {ApiUtils} = require('../utils/ApiUtils')
const loginPayload = {userEmail:"resttassuredd@gmail.com",userPassword:"Welcome@123"}
const createOrderPayload = {orders:[{country:"United States",productOrderedId:"65c9cafda86f8f74dc75e4a9"}]} //IPHONE 15 PRO MAX

let response

test.beforeAll( async() => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext, loginPayload)
    response = await apiUtils.createOrder(createOrderPayload)
})

test("Client App E2E", async({page})=> {

     await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token );
    
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("[routerlink*=myorders]").click();

    await page.locator(".table-bordered").waitFor();

    const rowOrderId = page.locator(".table-bordered .ng-star-inserted");

    const check = await rowOrderId.locator('th[scope=row]').nth(0).textContent();
    const rows = await rowOrderId.locator('th[scope=row]').count();

    for(let j = 0; j< rows; ++j) {
         let actualOrderID = await rowOrderId.nth(j).locator('th[scope=row]').nth(j).textContent();
        if(actualOrderID.includes(response.OrderID)) {
            await rowOrderId.nth(j).locator('.btn-primary').click();
            break;
        }
    }

    await page.locator(".email-wrapper").first().waitFor();
    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(response.OrderID.includes(orderIdDetails)).toBeTruthy()
    // expect(page.locator(".address p").first()).toHaveText(" resttassuredd@gmail.com ");
    expect(page.locator(".artwork-card-info .title")).toHaveText(" IPhone 15 Pro Max ");
})

