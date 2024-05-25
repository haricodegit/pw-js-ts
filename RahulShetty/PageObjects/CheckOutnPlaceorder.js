class CheckOutnPlaceorder {
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
        
    await this.checkoutbtn.last().click(); //checkout button
    await this.page.waitForLoadState("networkidle");
    await this.countryName.pressSequentially("India", {delay: 100});
    // page.locator("[placeholder*='Country']").pressSequentially("India", {delay: 100});
    await this.taresults.first().waitFor();

    for(let i = 0; i <  await this.listOfCountries.count(); ++i) {
        const item = await this.listOfCountries.nth(i).textContent();
        let itemcheck = item.trim()
        if(item === countryname) {
            await this.listOfCountries.nth(i).click();
            break;
        }
    }

    await this.expect(this.usernameLabel).toHaveText(username);
    const form = this.formLocator
    await form.nth(0).clear();
    await form.nth(0).fill(CreditCardNumber); //Credit Card Number
    await this.expiryDate.first().selectOption({label: ExpriyMonth}); //ExpriyMonth
    await this.expiryDate.last().selectOption({label: ExpiryDate}); //ExpiryDate
    await form.nth(1).fill(CVV); //CVV
    await form.nth(2).fill(NameonCard); //Name on Card
    await form.nth(3).fill(Coupon); // Coupon
    await this.applycouponbtn.click() //click on Apply Coupon button
    await this.placeOrderbtn.click(); //Place Order
    let msg = await this.successmesg.textContent()
    let trimmedmsg = msg.trim()
    await this.expect(trimmedmsg).toBe(successmsg);//Thank you message
    const OrderID = await this.orderIDlocator.last().textContent();
    console.log("OrderID: ",OrderID);
    }
}

module.exports = {CheckOutnPlaceorder}