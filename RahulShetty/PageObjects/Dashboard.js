class Dashboard {
  constructor(page, expect) {
    this.page = page;
    this.expect = expect;
    this.products = page.locator(".card-body");
    this.addToCart = "text= Add To Cart"
    this.toastContainer = "#toast-container"
    this.cart = page.locator("[routerlink*='cart']")
    this.myCartLabel = page.locator(".heading h1")
    this.myCart = "My Cart"
  }

  async searchProductAddtoCart(productName) {
    await this.products.last().waitFor();
    for (let i = 0; i < (await this.products.count()); ++i) {
      if ((await this.products.nth(i).locator("b").textContent()) === productName) {
        await this.products.nth(i).locator(this.addToCart).click();
        await this.expect(this.page.locator(this.toastContainer)).toBeVisible(this.myCart);
        break;
      }
    }
    // await this.page.waitForLoadState("networkidle");
  }

  async navigateToCart() {
    // await this.cart.click();
    // .btn-custom i
    // await this.page.locator("[routerlink*='cart']").click();
    // await this.page.locator(".btn-custom i").nth(2).click();
    // await this.page.locator("div li").first().waitFor();
    // await this.page.waitForLoadState("networkidle");
    // await this.expect(this.myCartLabel).toHaveText(this.myCart)

    // await this.page.goto("https://rahulshettyacademy.com/client/dashboard/cart")
    // await this.page
    // await this.page.waitForLoadState("networkidle");

    await this.page.locator("[routerlink*='cart']").click();
    await this.page.locator("div li").first().waitFor();
  }
}

module.exports = {Dashboard}
