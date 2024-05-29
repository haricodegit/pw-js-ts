const {test, expect} = require('@playwright/test')

test('@Web Calender Date picker', async({page}) => {

    const month = "6"
    const date ="15"
    const year = "2027"

    const arr = [month, date, year]
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers')
    await page.locator(".date-field-container label[for='deliveryDate']").waitFor()
    // await page.getByLabel("Delivery Date").waitFor()
    await page.locator("div .react-date-picker").click();
    await page.locator(".react-calendar__navigation__label").click()
    await page.locator(".react-calendar__navigation__label").click()
    await page.getByText(year).click()
    await page.locator(".react-calendar__year-view__months__month").nth(Number(month)-1).click()
    await page.locator("//abbr[text()='"+date+"']").click()
    const items = page.locator(".react-date-picker__inputGroup .react-date-picker__inputGroup__input");

    for(let index=0; index < await items.count(); index++) {
        // await expect(page.locator(".react-date-picker__inputGroup .react-date-picker__inputGroup__input").nth(index)).toHaveAttribute('value', arr[index]);
        await expect(items.nth(index)).toHaveAttribute('value', arr[index]);
        console.log(arr[index]);
    }
})