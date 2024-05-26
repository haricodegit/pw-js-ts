// import { browser, page, expect, test } from '@playwright/test';
const {test, expect} = require('@playwright/test');
const {POManager} = require('../PageObjects/POManager')
const exp = require('constants');

test("Client App Page Object Impl", async({page})=> {
    const productName = "ADIDAS ORIGINAL";
    const username = "resttassuredd@gmail.com";
    const password = "Welcome@123"
    const countryname = "United States"
    const CreditCardNumber = "4444 3333 2222 1111"
    const ExpriyMonth = "11"
    const ExpiryDate = "31"
    const CVV = "174"
    const NameonCard = "Ramesh Suresh"
    const Coupon = "rahulshettyacademy"
    const successmsg = "Thankyou for the order."

    const poManager = new POManager(page, expect)
    const loginPage = poManager.getLoginPage()
    await loginPage.goTo()
    await loginPage.validLogin(username, password)

    // const dashboard = new Dashboard(page, expect)
    const dashboard = poManager.getDashboardPage()
    await dashboard.searchProductAddtoCart(productName)
    await dashboard.navigateToCart()

    // const Checkoutnplaceorder = new CheckOutnPlaceorder(page, expect)
    const Checkoutnplaceorder = poManager.getCheckoutnplaceorder()
    const orderID = await Checkoutnplaceorder.checkoutnplaceorder(countryname, username, CreditCardNumber, ExpriyMonth, ExpiryDate, CVV, NameonCard, Coupon, successmsg)

    // const ordersummary = new OrderSummary(page, expect)
    const ordersummary = poManager.getordersummary()
    await ordersummary.verifyOrderSummary(orderID)    
    await page.screenshot({path: 'orderSummary.png'})
}) 

