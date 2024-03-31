//#35 - Remove Duplicate Elements From Array in JavaScript

const numbers = [1,2,3,4,5,6,6,6,7,7,7,8,8,9,0,0,0]
const names = ["Naveen", "Tom", "Lisa", "Naveen","Peter","Tom","Raj","Robby","Tom"]

const uniqueNumbers = [... new Set(numbers)];
console.log(uniqueNumbers);

const uniqueNames = [... new Set(names)]
console.log(uniqueNames);