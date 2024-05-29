// import { browser, page, expect, test } from '@playwright/test';
const { test, expect, request } = require('@playwright/test');
const { POManager } = require('../PageObjects/POManager')
const { customtest } = require('../utils/test-base')
const dataset = JSON.parse(JSON.stringify(require("../utils/placeOrderTestData.json")))
const exp = require('constants');
const { LoginAPI } = require("../utils/LoginAPI")
const loginPayload = {userEmail:"resttassuredd@gmail.com",userPassword:"Welcome@123"}

let token

test.beforeAll(async() => {
    const loginContext = await request.newContext()
    const loginUtils = new LoginAPI(loginContext, loginPayload)
    token = await loginUtils.gettoken()
})

for(const data of dataset)
{
test(`Client App Page Object Impl for product ${data.productName}`, async({page})=> {

    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token)
    
    const poManager = new POManager(page, expect)
    // const loginPage = poManager.getLoginPage()
    // await loginPage.goTo()
    // await loginPage.validLogin(data.username, data.password)

    // const dashboard = new Dashboard(page, expect)
    const dashboard = poManager.getDashboardPage()
    await dashboard.searchProductAddtoCart(data.productName)
    await dashboard.navigateToCart()

    // const Checkoutnplaceorder = new CheckOutnPlaceorder(page, expect)
    const Checkoutnplaceorder = poManager.getCheckoutnplaceorder()
    const orderID = await Checkoutnplaceorder.checkoutnplaceorder(data.countryname, data.username, data.CreditCardNumber, data.ExpriyMonth, data.ExpiryDate, data.CVV, data.NameonCard, data.Coupon, data.successmsg)
    await page.waitForLoadState('networkidle')
    // await page.screenshot({path: ""+data.productName+" RahulShetty/screenshots/orderSummary.png"})
    // await page.screenshot({path: "/RahulShetty/screenshots/orderSummary "+data.productName+".png"})
    await page.screenshot({path: "OrderSummary.png"})
    // const ordersummary = new OrderSummary(page, expect)s
    const ordersummary = poManager.getordersummary()
    await ordersummary.verifyOrderSummary(orderID, data.productName)
}) 
}

customtest(`Client App - Test Data Fixture`, async({page, DataForOrders})=> {

    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token)
    
    const poManager = new POManager(page, expect)
    // const loginPage = poManager.getLoginPage()
    // await loginPage.goTo()
    // await loginPage.validLogin(data.username, data.password)

    // const dashboard = new Dashboard(page, expect)
    const dashboard = poManager.getDashboardPage()
    await dashboard.searchProductAddtoCart(DataForOrders.productName)
    await dashboard.navigateToCart()

    // const Checkoutnplaceorder = new CheckOutnPlaceorder(page, expect)
    const Checkoutnplaceorder = poManager.getCheckoutnplaceorder()
    const orderID = await Checkoutnplaceorder.checkoutnplaceorder(DataForOrders.countryname, DataForOrders.username, DataForOrders.CreditCardNumber, DataForOrders.ExpriyMonth, DataForOrders.ExpiryDate, DataForOrders.CVV, DataForOrders.NameonCard, DataForOrders.Coupon, DataForOrders.successmsg)
    await page.waitForLoadState('networkidle')
    // await page.screenshot({path: ""+data.productName+" RahulShetty/screenshots/orderSummary.png"})
    // await page.screenshot({path: "/RahulShetty/screenshots/orderSummary "+data.productName+".png"})
    await page.screenshot({path: "OrderSummary.png"})
    // const ordersummary = new OrderSummary(page, expect)
    const ordersummary = poManager.getordersummary()
    await ordersummary.verifyOrderSummary(orderID, DataForOrders.productName)
}) 
