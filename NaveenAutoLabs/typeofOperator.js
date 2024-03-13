// JavaScript program to illustrate type of typeof Operator

//number type variable
let x = 123;
console.log(typeof x);

//string type variable
x = 'Naveen';
console.log(typeof x);

// In JavaScipt we dont need to declare the type of the variable unlike C, C++, Java..

//the type of the variable is decided by JavaScript during runtime, Its not complied unlike C, C++, Java

//array type variable
let arr = [1,2,3,4,5];
//console.log(typeof arr);
let type = typeof arr;

console.log(type);

//null assigned variable
let b = null;
console.log(typeof b);

//employee object in {} for example 

// let emp = {
//     name: 'Naveen',
//     age: 40

// }

let employee = {
    name: 'Naveen',
    age: 27,
    occupation: 'Engineer'
}

console.log(typeof employee);

//function datatype
function print(name) {
    console.log('my name is '+name);
}

console.log(print);

//undefined datatype

let t;
console.log(typeof t);
