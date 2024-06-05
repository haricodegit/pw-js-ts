const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
// const { playwright } = require('@playwright/test')

let OrderID, ProductName;

Given(
  "User login Ecom App with {string} and {string}",
  { timeout: 100 * 1000 },
  async function (username, password) {
    await this.page.goto("https://rahulshettyacademy.com/client");
    await this.page.locator("#userEmail").fill(username);
    await this.page.locator("#userPassword").fill(password);
    await this.page.locator("#login").click();
    await expect(this.page.locator(".btn-custom").first()).toBeVisible();
  }
);

When("Add item to Cart {string}", async function (productName) {
  // Write code here that turns the phrase above into concrete actions
  this.dashboard = this.poManager.getDashboardPage();
  await this.dashboard.searchProductAddtoCart(productName);
});

Then("Verify item {string} added to Cart",{timeout: 100*1000} ,async function (productName) {
  // Write code here that turns the phrase above into concrete actions
  await this.dashboard.navigateToCart(productName);
  ProductName = productName;

});

When(
  "Place Order with valid details {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}",
  { timeout: 100 * 1000 },
  async function (
    Country,
    username,
    CreditCardNumber,
    ExpriyMonth,
    ExpiryDate,
    CVV,
    NameonCard,
    Coupon,
    successmsg
  ) {
    // Write code here that turns the phrase above into concrete actions
    this.Checkoutnplaceorder = this.poManager.getCheckoutnplaceorder();
    const orderID = await this.Checkoutnplaceorder.checkoutnplaceorder(
      Country,
      username,
      CreditCardNumber,
      ExpriyMonth,
      ExpiryDate,
      CVV,
      NameonCard,
      Coupon,
      successmsg
    );
    OrderID = orderID;
    await this.page.waitForLoadState("networkidle");
  }
);

Then(
  "Verify Order in Order History",
  { timeout: 100 * 1000 },
  async function () {
    // Write code here that turns the phrase above into concrete actions
    const ordersummary = this.poManager.getordersummary();
    await ordersummary.verifyOrderSummary(OrderID, ProductName);
  }
);
