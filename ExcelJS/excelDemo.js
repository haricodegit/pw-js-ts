const ExcelJs = require('exceljs')

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

WriteExcel("Mango", 350, {rowChange: 0, colChange: 2}, "C:/Users/harish.arumugam/Downloads/download.xlsx")
