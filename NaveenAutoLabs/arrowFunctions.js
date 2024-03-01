//Different types of Arrow functions

const square = num => num * num;
console.log('square: '+square(5));

const msg = () => 'Hello JS';
console.log('msg: '+msg());

const add = (a, b) => a + b;
console.log('add arrow function: '+add(5,4));

const person = {
    firstName: 'Naveen',
    lastName: 'Automation Labs'
}

const getFullName = person => `${person.firstName} ${person.lastName}`

const fullName = getFullName(person);
console.log(fullName);

const greet = (username='guest', age=0) => `Hello, ${username} !, you are ${age} years old`
const g1 = greet();
console.log(g1);

const g2 = greet('Tom', 30);
console.log(g2);

//rest parameters ... varargs
const sum = (...numbers) => numbers.reduce((acc, num) => acc+num, 0);
const total = sum(1,2,3,4,5);
console.log('total: ',total);


//3 dot rest parameters with arrow function

const bro = (browser = 'chrome', ...details) => {
    console.log(`Browser: ${browser}`);
    console.log('Other details: ', details);
}

bro('FireFox', '111.12','mozilla','headless mode');

//program to find the Max value in an array
const findMaxValue = (a,b,c) => {
    return Math.max(a,b,c);
}

const maxValue = findMaxValue(10,30,50);
console.log('maxValue: ',maxValue)