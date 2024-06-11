class OrderSummary {
  constructor(page, expect) {
    this.page = page;
    this.expect = expect;
    this.Ordersbtn = "[routerlink*=myorders]";
  }

  async verifyOrderSummary(orderID, productName) {
    await this.page.locator("[routerlink*=myorders]").first().click();
    await this.page.locator(".table-bordered").waitFor();
    const table = this.page.locator(".table-bordered .ng-star-inserted");
    // .table-bordered tr th[scope=row]

    // .table-bordered .ng-star-inserted th[scope=row]

    const itemCount = await table.locator("th[scope=row]").count();
    console.log("itemCount ",itemCount);
    console.log("orderID ",orderID);
    console.log("productName ",productName);

    for (let j = 0; j < itemCount; ++j) {
      let tmp = await table.nth(j).locator("th[scope=row]").nth(j).textContent();
      tmp = tmp.trim();
      if (tmp === orderID) {
        await table.nth(j).locator(".btn-primary").click();
        break;
      }
    }
    await this.page.locator(".email-wrapper").first().waitFor();
    await this.expect(this.page.locator(".-main").first()).toHaveText(orderID);
    // await this.expect(this.page.locator(".address p").first()).toHaveText(" resttassuredd@gmail.com ");
    await this.expect(this.page.locator(".artwork-card-info .title")).toHaveText(" "+productName+" ");
  }
}

module.exports = { OrderSummary };