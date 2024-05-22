// import { browser, page, expect, test } from '@playwright/test';
const {test, expect} = require('@playwright/test');

let webContext;
const emailID = "resttassuredd@gmail.com";

test.beforeAll( async({browser})=>{

    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(emailID);
    await page.locator("#userPassword").fill("Welcome@123");
    await page.locator("#login").click();
    await expect(page.locator(".btn-custom").first()).toBeVisible();
    await context.storageState({path: 'state.json'})
    webContext = await browser.newContext({storageState: 'state.json'})
})


test("Client App E2E", async()=> {

    const productName = "IPhone 15 Pro Max";
    const page = await webContext.newPage()
    await page.goto("https://rahulshettyacademy.com/client");
    const products = page.locator(".card-body");
    await products.last().waitFor();
    let Titles = await page.locator("#products h5 b").allTextContents()
    console.log(Titles);
    
    for(let i=0; i < await products.count(); ++i) {
        if(await products.nth(i).locator("b").textContent() === productName) {
            await products.nth(i).locator("text= Add To Cart").click();
            await expect(page.locator("#toast-container")).toBeVisible();
            break;
        }
    }
    
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('IPhone 15 Pro Max')").isVisible();
    expect(bool).toBeTruthy();

    await page.locator("button[type='button']").last().click();
    page.locator("[placeholder*='Country']").pressSequentially("India", {delay: 100});
    await page.locator(".ta-results").first().waitFor();

    for(let i = 0; i <  await page.locator(".list-group button").count(); ++i) {
        const item = await page.locator(".list-group button").nth(i).textContent();
        if( item === " India") {
            await page.locator(".list-group button").nth(i).click();
            break;
        }
    }

    await expect(page.locator(".user__name label")).toHaveText(emailID);
    const form = page.locator(".form__cc .field input");
    await form.nth(0).clear();
    await form.nth(0).fill("1111 2222 3333 4444"); //Credit Card Number
    await page.locator(".small .ddl").first().selectOption({label: "05"});
    await page.locator(".small .ddl").last().selectOption({label: "05"});
    await form.nth(1).fill("123"); //CVV
    await form.nth(2).fill("Ramesh Kumar"); //Name on Card
    await form.nth(3).fill("rahulshettyacademy"); // Coupon
    await page.locator("button:has-text('Apply Coupon')").click() //click on Apply Coupon button
    await page.locator(".action__submit").click();
    await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const OrderID = await page.locator(".em-spacer-1 label").last().textContent();
    console.log("OrderID: ",OrderID);

    let scliedOrderID = OrderID.substring(2,27);
    console.log("scliedOrderID ",scliedOrderID);
    scliedOrderID = await scliedOrderID.trim();
    console.log("Trim Order ID ",scliedOrderID);

    await page.locator("[routerlink*=myorders]").first().click();

    await page.locator(".table-bordered").waitFor();

    const table = page.locator(".table-bordered .ng-star-inserted");
    // .table-bordered tr th[scope=row]

    // .table-bordered .ng-star-inserted th[scope=row]

    const rowOrderId = page.locator(".table-bordered .ng-star-inserted");

    const check = await rowOrderId.locator('th[scope=row]').nth(0).textContent();
    const rows = await rowOrderId.locator('th[scope=row]').count();

    for(let j = 0; j< rows; ++j)
    {
        let actualOrderID = await rowOrderId.nth(j).locator('th[scope=row]').nth(j).textContent();
       if(actualOrderID.includes(OrderID)) {
           await rowOrderId.nth(j).locator('.btn-primary').click();
           break;
    }
    }
    await page.locator(".email-wrapper").first().waitFor();
    expect(page.locator(".-main").first()).toHaveText(OrderID);
    expect(page.locator(".address p").first()).toHaveText(" resttassuredd@gmail.com ");
    expect(page.locator(".artwork-card-info .title")).toHaveText(" IPhone 15 Pro Max ");
})

test("Test Case 2", async()=> {

    const productName = "IPhone 15 Pro Max";
    const page = await webContext.newPage()
    await page.goto("https://rahulshettyacademy.com/client");
    const products = page.locator(".card-body");
    await products.last().waitFor();
    let Titles = await page.locator("#products h5 b").allTextContents()
    console.log(Titles);

})

