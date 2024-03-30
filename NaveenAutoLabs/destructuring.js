//#33 - De-structuring in JavaScript

//Extract values from Array or objects and assign or store it in indidual varibles

//Array

const numbers = [1,2,3,4,5];
const [a,b,c,d] = numbers;

console.log(a)
console.log(b)
console.log(c)
console.log(d)

//Using spread operator with Array

//spread operator ...variableName

const lang = ['JavaScript', 'Java','Ruby','Python','GO']
const [p,q, ...testLang] = lang
console.log(p);
console.log(q);
console.log(testLang);

//Object destructring

const user = {
    firstName: 'Tom',
    lastName: 'Cruise',
    age: 30
}

const {firstName, lastName, city = 'LA', age} = user;

console.log(firstName)
console.log(lastName)
console.log(age)
console.log(city)

//Destructuring with function parameters

//function without De-Structuring

// function printUserName(person) {
//     console.log(person.firstName + ' '+person.lastName)
// }

// const person = {
//     firstName: "John",
//     lastName: 'Doe'
// }

// printUserName(person)

//function with De-Structuring

function printUserName( {firstName, lastName} ) {
    console.log(firstName + ' '+lastName)
}

const person = {
    firstName: "John",
    lastName: 'Doe'
}

printUserName(person)