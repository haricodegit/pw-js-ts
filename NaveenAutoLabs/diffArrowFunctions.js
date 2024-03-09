//JavaScript program to illustrate different types of Arrow functions

//1. Arrow function with single parameters
//2. Arrow function with multiple parameters
//3. Arrow function with no parameters
//4. Passing Objects as parameters to Arrow functions
//5. Passing default values as parameters to Arrow functions
//6. Passing rest parameters... varargs to Arrow functions
//7. Passing one default value and one rest parameters to Arrow functions

//1. Arrow function with single parameters

const findSquare = num => num * num;
let squareNumber = findSquare(5);
console.log('squareNumber: ',squareNumber);

//2. Arrow function with multiple parameters

const findSum = (a, b) => a + b;
let sum = findSum(5, 4);
console.log('Sum: ',sum);

//3. Arrow function with no parameters

const mesg = () => 'Hello, JavaScript!'
console.log(mesg());

//4. Passing Objects as parameters to Arrow functions

const getFullName = person => `${person.firstName} ${person.lastName}`

const person = {
    firstName: 'Naveen',
    lastName: 'Automation Labs'
}

let fullName = getFullName(person);
console.log(fullName);

//5. Pasing default values as parameter to Arrow function

const greet = (username = 'guest', age = 0) => `Hello, ${username} you are ${age} years old`

const g1 = greet();
console.log(g1);
const g2 = greet('Tom', 50);
console.log(g2);

//6. Passing rest parameters... varagrs as paramets to Arrow function

const getTotal = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
let summ = getTotal(1,2,3,4,5);
console.log(summ);

//7. Passing one default value and one rest parameters to Arrow functions

//const getBrowser = (browser = 'chrome', ...browserdetails) => `Current browser ${browser} and details are ${browserdetails}`
const getBrowser = (browser = 'chrome', ...browserdetails) => {
    console.log(`Current browser ${browser}`);
    console.log(`${browser} details are ${browserdetails}`);
}
const browser1 = getBrowser();
console.log(browser1);
const browser2 = getBrowser('firefox', '115.112', 'Mozilla', 'headless');
console.log(browser2);

//JavaScript program to illustrate Math built in function

const findMax = (a,b,c) => {
    return Math.max(a,b,c);
}

let max = findMax(10, 40, 99);
console.log('Max number: ',max);