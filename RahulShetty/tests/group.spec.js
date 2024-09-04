const { test, expect } = require('@playwright/test')

test.describe("Smoke Test", () => {

    test("Verify Test 1", async( { page} ) => {
        await page.goto("https://www.youtube.com/@testerstalk")
        await page.locator()
    }) 
})