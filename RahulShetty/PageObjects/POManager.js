const { LoginPage } = require("../PageObjects/LoginPage");
const { Dashboard } = require("../PageObjects/Dashboard");
const { CheckOutnPlaceorder } = require("../PageObjects/CheckOutnPlaceorder");
const { OrderSummary } = require("../PageObjects/OrderSummary");

class POManager {
  constructor(page, expect) {
    this.page = page;
    this.expect = expect;
    this.loginPage = new LoginPage(this.page, this.expect);
    this.dashboard = new Dashboard(this.page, this.expect);
    this.Checkoutnplaceorder = new CheckOutnPlaceorder(this.page, this.expect);
    this.ordersummary = new OrderSummary(this.page, this.expect);
  }

  getLoginPage() {
    return this.loginPage;
  }

  getDashboardPage() {
    return this.dashboard;
  }

  getCheckoutnplaceorder() {
    return this.Checkoutnplaceorder;
  }

  getordersummary() {
    return this.ordersummary;
  }
}

module.exports = { POManager };