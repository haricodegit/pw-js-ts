const { test, expect, request } = require('@playwright/test');
// const exp = require('constants');

const loginPayload = {userEmail:"resttassuredd@gmail.com",userPassword:"Welcome@123"}
const createOrderPayload = {orders:[{country:"United States",productOrderedId:"65c9cafda86f8f74dc75e4a9"}]} //IPHONE 15 PRO MAX
let token;
let OrderID;
let actualOrderID;


test.beforeAll( async() => {

    // Login API Call
    const apiContext = await request.newContext()
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
    {
        data: loginPayload
    })
    expect(loginResponse.ok()).toBeTruthy()
    const loginResponseJson = await loginResponse.json()
    token = loginResponseJson.token
    console.log(token);

    //Create Order API Call
    const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
    {
        data: createOrderPayload,
        headers: 
        {
            'Authorization': token,
            'Content-Type' : 'application/json'
        },
    })
    // expect(await orderResponse.ok).toBeTruthy()
    const orderResponseJson = await orderResponse.json()
    console.log(orderResponseJson)
    OrderID = orderResponseJson.orders[0]
})

test.beforeEach( () => {

})

test("Client App E2E", async({page})=> {

     await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    },  token);
    
    await page.goto("https://rahulshettyacademy.com/client");

    await page.locator("[routerlink*=myorders]").first().click();

    await page.locator(".table-bordered").waitFor();

    const rowOrderId = page.locator(".table-bordered .ng-star-inserted");

    const check = await rowOrderId.locator('th[scope=row]').nth(0).textContent();
    console.log("check ",check);
    const rows = await rowOrderId.locator('th[scope=row]').count();
    // console.log("itemCount ",itemCount);

    for(let j = 0; j< rows; ++j) {
         actualOrderID = await rowOrderId.nth(j).locator('th[scope=row]').nth(j).textContent();
        if(actualOrderID.includes(OrderID)) {
            await rowOrderId.nth(j).locator('.btn-primary').click();
            break;
        }
    }

    await page.locator(".email-wrapper").first().waitFor();
    const orderIdDetails = await page.locator(".col-text").textContent();
    // await page.pause()
    expect(actualOrderID.includes(orderIdDetails)).toBeTruthy()
    
    // expect(page.locator(".-main").first()).toHaveText(scliedOrderID);
    expect(page.locator(".address p").first()).toHaveText(" resttassuredd@gmail.com ");
    expect(page.locator(".artwork-card-info .title")).toHaveText(" IPhone 15 Pro Max ");
}) 

