const { test, expect, request } = require("@playwright/test");
const exp = require("constants");
const { ApiUtils } = require("./utils/ApiUtils");
const loginPayload = {
  userEmail: "resttassuredd@gmail.com",
  userPassword: "Welcome@123",
};
const createOrderPayload = {
  orders: [
    { country: "United States", productOrderedId: "65c9cafda86f8f74dc75e4a9" },
  ],
}; //IPHONE 15 PRO MAX

let response;
let requestFakeBody = { data: [], message: "No Orders" };

test.beforeAll(async () => {
  const apiContext = await request.newContext();
  const apiUtils = new ApiUtils(apiContext, loginPayload);
  response = await apiUtils.createOrder(createOrderPayload);
});

test("Client App E2E", async ({ page }) => {
  await page.addInitScript((value) => {
    window.localStorage.setItem("token", value);
  }, response.token);

  await page.goto("https://rahulshettyacademy.com/client");

  await page.route(
    "https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
    async (route) => {
      const realResponse = await page.request.fetch(route.request());
      let body = JSON.stringify(requestFakeBody);
      route.fulfill({
        realResponse,
        body,
      });
    }
  );

  await page.locator("[routerlink*=myorders]").click();
  // await page.pause()
  await page.waitForResponse(
    "https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*"
  );
  console.log(await page.locator(".mt-4").textContent());
});
