//JavaScript progam to illustrate Async APIs examples

const { isUtf8 } = require('buffer')
const fs = require('fs')

const data = fs.readFile("Naveen.txt", 'utf-8', (error, data) => {
    console.log(data)
});

console.log('Bye Naveen')