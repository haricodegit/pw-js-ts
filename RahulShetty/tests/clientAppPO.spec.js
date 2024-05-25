// import { browser, page, expect, test } from '@playwright/test';
const {test, expect} = require('@playwright/test');
const {LoginPage} = require("../PageObjects/LoginPage")
const {Dashboard} = require("../PageObjects/Dashboard")
const {CheckOutnPlaceorder} = require("../PageObjects/CheckOutnPlaceorder")

test("Client App Page Object Impl", async({page})=> {
    const productName = "IPhone 15 Pro Max";
    const username = "resttassuredd@gmail.com";
    const password = "Welcome@123"
    const countryname = "India"
    const CreditCardNumber = "1111 2222 3333 4444"
    const ExpriyMonth = "12"
    const ExpiryDate = "30"
    const CVV = "134"
    const NameonCard = "Ramesh Suresh"
    const Coupon = "rahulshettyacademy"
    const successmsg = "Thankyou for the order."

    const loginPage = new LoginPage(page, expect)
    await loginPage.goTo()
    await loginPage.validLogin(username, password)

    const dashboard = new Dashboard(page, expect)
    await dashboard.searchProductAddtoCart(productName)
    await dashboard.navigateToCart()

    const Checkoutnplaceorder = new CheckOutnPlaceorder(page, expect)
    await Checkoutnplaceorder.checkoutnplaceorder(countryname, username, CreditCardNumber, ExpriyMonth, ExpiryDate, CVV, NameonCard, Coupon, successmsg)

    // const bool = await page.locator("h3:has-text('IPhone 15 Pro Max')").isVisible();
    // expect(bool).toBeTruthy();

    let scliedOrderID = OrderID.substring(2,27);
    console.log("scliedOrderID ",scliedOrderID);
    scliedOrderID = await scliedOrderID.trim();
    console.log("Trim Order ID ",scliedOrderID);

    await page.locator("[routerlink*=myorders]").first().click();

    await page.locator(".table-bordered").waitFor();

    const table = page.locator(".table-bordered .ng-star-inserted");
    // .table-bordered tr th[scope=row]

    // .table-bordered .ng-star-inserted th[scope=row]

    const check = await table.locator('th[scope=row]').nth(0).textContent();
    console.log("check ",check);
    const itemCount = await table.locator('th[scope=row]').count();
    console.log("itemCount ",itemCount);

    for(let j = 0; j< itemCount; ++j) {
        let tmp = await table.nth(j).locator('th[scope=row]').nth(j).textContent();
        tmp = tmp.trim();
        if(tmp === scliedOrderID) {
            await table.nth(j).locator('.btn-primary').click();
            break;
        }
    }
    await page.locator(".email-wrapper").first().waitFor();
    expect(page.locator(".-main").first()).toHaveText(scliedOrderID);
    expect(page.locator(".address p").first()).toHaveText(" resttassuredd@gmail.com ");
    expect(page.locator(".artwork-card-info .title")).toHaveText(" IPhone 15 Pro Max ");
}) 

