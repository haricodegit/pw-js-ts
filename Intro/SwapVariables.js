console.log('Javascript program to swap variable values of 2 variables');

console.log('1. Swap using temp variable');

let a = 5;
let b = 9;
let temp = 0;
flag = 'before'
printfn(a, b, flag);

temp = a;
a = b;
b = temp;
flag = 'after'
printfn(a, b, flag);

function printfn(a, b, flag) {
    console.log(flag+ ' swap')
    console.log('Value 1 = '+a);
    console.log('Value 2 = '+b);
}

console.log('2. Swap Using es6(ES2015) Destructing assignment')

let name1 = 'John';
let name2 = 'David';
flag = 'before';

printfn(name1, name2, flag);

//using destructing assignment
[name1, name2] = [name2, name1];

flag = 'after';
printfn(name1, name2, flag);


console.log('3. Swap Using arthithmetic Operators')

let x = 7;
let y = 9;
flag = 'before'

printfn(x, y, flag);

x = x + y; // x = 16
y = x - y; // y = 7
x = x - y; // x = 9

flag = 'after'
printfn(x, y, flag);

console.log('4. Swap Using Bitwise XOR operator')
let i = 5;
let j = 7;
flag = 'before';

printfn(i, j, flag);

i = i ^ j; // i is less than j so i + j(5+7) = 12
j = i ^ j; // i is greater than j so i - j(12-7) = 5
i = i ^ j; // i is greater than j so i - j(12-5) = 7

flag = 'after'
printfn(i, j, flag);
