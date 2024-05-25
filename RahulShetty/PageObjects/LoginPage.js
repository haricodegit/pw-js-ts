class LoginPage {
  constructor(page, expect) {
    this.page = page;
    this.expect = expect
    this.userName = page.locator("#userEmail");
    this.Password = page.locator("#userPassword");
    this.SignInBtn = page.locator("#login");
    this.btnCustom = ".btn-custom"
  }

  async validLogin(username, password) {
    await this.userName.fill(username);
    await this.Password.fill(password);
    await this.SignInBtn.click();
    await this.page.waitForLoadState("networkidle");
    await this.expect(this.page.locator(this.btnCustom).first()).toBeVisible();
  }

  async goTo() {
    await this.page.goto("https://rahulshettyacademy.com/client");
  }
}

module.exports = { LoginPage };
