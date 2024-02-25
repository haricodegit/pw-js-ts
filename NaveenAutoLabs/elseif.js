let browser = 'Safari'

if(0 == browser.localeCompare('Chrome')) {
    console.log('Chrome browser')
}
else if(0 == browser.localeCompare('Firefox')) {
    console.log("Firefox browser")
}
else if(0 == browser.localeCompare('Edge')) {
    console.log('Edge browser')
}
else if(0 == browser.localeCompare('Opera')) {
    console.log('Opera browser')
}
else if(0 == browser.localeCompare('Safari')) {
    console.log('Safari browser')
}
else {
    console.log('Please enter a valid browser name')
}