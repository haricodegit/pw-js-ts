const ExcelJs = require('exceljs')
const {test, expect } = require("@playwright/test")

async function WriteExcel(searchText, replaceText, delta, filePath) {
    const workbook = new ExcelJs.Workbook()
    await workbook.xlsx.readFile(filePath)
    const worksheet = workbook.getWorksheet('Sheet1')
    let inputs = await readExcel(worksheet, searchText);
    let cell = worksheet.getCell(inputs.rowNumber, inputs.colNumber + delta.colChange)
    cell.value = replaceText
    await workbook.xlsx.writeFile(filePath)
}

async function readExcel(worksheet, searchText) {
    let inputs = {rowNumber:-1, colNumber:-1}
    worksheet.eachRow((row, rowNumber)=>
        {
            row.eachCell((cell, colNumber)=> 
            {
                if(cell.value === searchText)
                    {
                        inputs.rowNumber = rowNumber
                        inputs.colNumber = colNumber
                    }
            })
        })
        return inputs
}

test("Upload-download file validations", async({page})=> {
    const textSearch = 'Mango'
    const updateValue = '350'
    const fpath = "C:/Users/HARISH A/Downloads/download.xlsx"
    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html")
    await page.waitForLoadState('networkidle')
    // await page.locator('#downloadButton').waitFor()
    // const downloadPromise = page.waitForEvent('download')
    // await page.getByRole('button', {name: 'Download'}).click({modifiers: ['Control']})
    // await page.locator('#downloadButton').click({modifiers: 'Shift'})
    // await downloadPromise;
    // await page.pause()
    WriteExcel("Mango", 350, {rowChange: 0, colChange: 2}, fpath)
    // await page.locator("#fileinput").click()
    await page.locator("#fileinput").setInputFiles(fpath)
    // const value = await page.locator("#cell-4-undefined").first().textContent();
    const textLocator = page.getByText(textSearch)
    const desiredRow = page.getByRole('row').filter({has: textLocator})
    await expect(desiredRow.locator('#cell-4-undefined')).toHaveText(updateValue)
    await page.screenshot({path: 'Verify.png'})
})
