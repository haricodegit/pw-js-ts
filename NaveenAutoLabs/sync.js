//JavaScript program to illustrate sync API examples

const fs = require("fs");

const data = fs.readFileSync("Naveen.txt", 'utf-8')
console.log(data)

console.log("Bye Naveen")