const {test, expect} = require('@playwright/test');
const { request } = require('http');

test('Test case name here', async({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    const errormesg = page.locator("[style*='block']");
    const userName = page.locator('#username');
    const loginBtn = page.locator('#signInBtn');
    const items = page.locator('div.card-body a');
    // const allItems = page.locator('div.card-body');
    // await page.route('**/*.css', route=> route.abort())
    await page.route('**/*.{jpg, jpeg, png}',route=> route.abort())
    page.on('request', request=> console.log(request.url()));
    page.on('response', Response=> console.log(Response.url(), Response.status()))
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    // console.log(await page.title());
    expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

    await userName.fill('rahulshetty');
    await page.locator("input[type='password']").fill('learning');
    await loginBtn.click();
    // console.log(await errormesg.textContent());
    await expect(errormesg).toContainText("Incorrect");  //keyword partial text is enough
    await userName.clear();
    await userName.fill("rahulshettyacademy");
    await loginBtn.click();
    await items.last().waitFor();
    // await page.waitForLoadState('networkidle');
    // await page.waitForTimeout(30000) // wait for 30 secs
    // console.log(await page.title());
    await expect(page).toHaveTitle('ProtoCommerce');

    // console.log(await items.first().textContent());
    // console.log(await items.nth(1).textContent());
    // console.log(await items.last().textContent());
    // await page.waitForLoadState('networkidle');
    await items.last().waitFor();
    const allItems = await items.allTextContents();
    console.log(allItems);

    
    // await page.pause();

});

test('@Web 4 Fixtures test', async({ page }) => {
    await page.goto("https://www.google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});

test('@Web UI Controls', async({page})=> {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const dropdown = page.locator("select.form-control");
    const radioBtn = page.locator("span.radiotextsty");
    const popUpOkay = page.locator("#okayBtn");
    await dropdown.selectOption("consult");

    // await radioBtn.nth(1).click();
    await radioBtn.last().click();
    await popUpOkay.click();
    console.log(await radioBtn.last().isChecked());
    await expect((radioBtn).last()).toBeChecked();
    // Checkbox

    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    console.log(await page.locator("#terms").isChecked());
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    // await page.pause();
    const docLink = "a[href*=documents-request]";
    await expect(page.locator(docLink)).toHaveAttribute("class", "blinkingText");
});

test("@Child window handles", async({browser})=> {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const docLink = page.locator("a[href*=documents-request]");
    
    const [newPage] = await Promise.all(
        [
        context.waitForEvent('page'),
        docLink.click(),
        ]
)

const text = await newPage.locator('.red').first().textContent();
await console.log(text);

const arrayText = text.split("@");
const domain = arrayText[1].split(" ")[0];
console.log(domain);

await page.locator("#username").fill(domain);
// await page.pause();

await page.close();
await newPage.close();
await browser.close();

});