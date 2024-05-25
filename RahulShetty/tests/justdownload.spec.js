const {test, expect} = require('@playwright/test')

test('Just download', async({page}) =>{ 
    await page.goto("https://file-examples.com/index.php/sample-documents-download/sample-xls-download/")
    await page.waitForLoadState('networkidle')
    const docPromise = page.waitForEvent('download')
    await page.locator("a[href*='XLSX_50.xlsx']").click()
    await docPromise
})