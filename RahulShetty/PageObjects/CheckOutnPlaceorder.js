class CheckOutnPlaceorder {
    // let scliedOrderID =""
    constructor(page, expect) {
        this.page = page
        this.expect = expect
        this.checkoutbtn = page.locator("button[type='button']")
        this.countryName = page.locator("[placeholder*='Country']")
        // page.locator("[placeholder*='Country']").pressSequentially("India", {delay: 100});
        // this.userName = page.locator("#userEmail");
        this.taresults = page.locator(".ta-results")
        this.listOfCountries = page.locator(".list-group button")
        this.usernameLabel = page.locator(".user__name label")
        this.formLocator = page.locator(".form__cc .field input")
        this.expiryDate = page.locator(".small .ddl")
        this.applycouponbtn = page.locator("button:has-text('Apply Coupon')")
        this.placeOrderbtn = page.locator(".action__submit")
        this.successmesg = page.locator(".hero-primary")
        this.orderIDlocator = page.locator(".em-spacer-1 label")
    }

    async checkoutnplaceorder (countryname, username, CreditCardNumber, ExpriyMonth, ExpiryDate, CVV, NameonCard, Coupon, successmsg) {
        
    let scliedOrderID;
    await this.checkoutbtn.last().click(); //checkout button
    await this.page.waitForLoadState("networkidle");
    await this.countryName.pressSequentially("United States", {delay: 100});
    // page.locator("[placeholder*='Country']").pressSequentially("India", {delay: 100});
    await this.taresults.first().waitFor();

    for(let i = 0; i <  await this.listOfCountries.count(); ++i) {
        const item = await this.listOfCountries.nth(i).textContent();
        let itemcheck = item.trim()
        if(itemcheck === "United States") {
            await this.listOfCountries.nth(i).click();
            break;
        }
    }

    // await this.expect(this.usernameLabel).toHaveText(username);
    const form = this.formLocator
    await form.nth(0).clear();
    await form.nth(0).fill(CreditCardNumber); //Credit Card Number
    await this.expiryDate.first().selectOption({label: ExpriyMonth}); //ExpriyMonth
    await this.expiryDate.last().selectOption({label: ExpiryDate}); //ExpiryDate
    await form.nth(1).fill(CVV); //CVV
    await form.nth(2).fill(NameonCard); //Name on Card
    await form.nth(3).fill(Coupon); // Coupon
    // await this.applycouponbtn.click() //click on Apply Coupon button
    // await this.page.locator("button:has-text('Apply Coupon')").click()
    await this.page.locator("button[type='submit']")
    // await this.placeOrderbtn.click(); //Place Order
    // await this.page.locator(".actions .action__submit").waitFor()
    await this.page.locator(".action__submit").click()
    await this.page.locator(".content-wrap").waitFor()
    let msg = await this.page.locator(".hero-primary").textContent()
    let trimmedmsg = msg.trim()
    // await this.expect(trimmedmsg).toBe(successmsg);//Thank you message
    await this.expect(this.successmesg).toHaveText(" Thankyou for the order. ");
    const OrderID = await this.orderIDlocator.last().textContent();

    // const OrderID = await page.locator(".em-spacer-1 label").last().textContent();
    scliedOrderID = OrderID.substring(2,27);
    scliedOrderID = await scliedOrderID.trim();

    return scliedOrderID
    }
}

module.exports = {CheckOutnPlaceorder}