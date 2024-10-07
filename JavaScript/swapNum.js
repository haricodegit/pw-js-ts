// JavaScript program to swap 2 numbers without using 3rd variable
// Using Arithmetic Operations (Addition and Subtraction)

let a = 5;
let b = 4;

console.log(`Before swaping a = ${a} and b = ${b}`);

a = a + b;
b = a - b;
a = a - b;

console.log(`After swaping a = ${a} and b = ${b}`);


// Using bitwise XOR operator

console.log('Using bitwise XOR operator');

let c = 9;
let d = 20;

console.log(`Before swap c = ${c} and d = ${d}`);
c = c ^ d;
console.log('Step 1', c);
d = c ^ d;
console.log('Step 2', d);
c = c ^ d;
console.log('Step 3', c);

console.log(`After swap c = ${c} and d = ${d}`);
