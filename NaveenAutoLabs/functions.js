// 1. function declaration

function sum(a, b) {
    return a + b;
}

console.log('Sum: '+sum(5, 6))

//function without any parameters

function printmsg() {
    console.log('Hi this is JavaScript')
}

printmsg();

//2. Function Expression: also known as Annonymous function

const multiply = function(x, y) {
    return x*y;
}

const mul = multiply(5, 6)
console.log('mul: '+mul)

//3. Arrow function expression: also known as Annonymous function

const divide = (i, j) => i / j;
const div = divide(20, 2)

console.log('div: '+div)

//4. Function Constructor

const substract = new Function('a', 'b', 'return a - b;')
const subs = substract(10, 2);
console.log('subs: '+subs)

/* 
Below function is not working need to look into it
//5. IIFE Immediately Invoked Function Expression
(function(){
    console.log("Server is up n running on port 3000");
})();
*/

// 6 Generator Function:
//function* and yield keyword
function* generateNumberSequence() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const generate = generateNumberSequence();
console.log(generate.next().value);
console.log(generate.next().value);
console.log(generate.next().value);
console.log(generate.next().value);