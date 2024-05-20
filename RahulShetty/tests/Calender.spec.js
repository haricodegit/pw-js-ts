const {test, expect} = require('@playwright/test')

test('Calender Date picker', async({page}) => {

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
    await page.locator(".react-calendar__year-view__months__month").nth(Number(month)+1).click()
    await page.locator("//abbr[text()='"+date+"']").click()
    const items = page.locator(".react-date-picker__inputGroup .react-date-picker__inputGroup__input");

    for(let index=0; index < await items.count(); index++) {

        const value = items[index].getAttribute("value");
        expect(value).toEqual(arr[index]);
        console.log("Actual ",value);
        // expect( items[index] === arr[index])
        // console.log("Actual ",+await items[index].textContent()+ "   Expected: ",arr[index]);
        // console.log("Actual ",await items.nth(index).);
    }
})