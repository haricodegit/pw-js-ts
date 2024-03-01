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


//7. Annonymous function
//no specific name

const numbers = [1,2,3,4,5];

const squareNumbers = numbers.map(function(e) {
    return e * e;
});

console.log("squareNumbers: "+squareNumbers);

const numb = [1,2,3,4,5];
const sqrtnumb = numb.map((e) => {
    return e * e;
});

console.log('sqrtnumb: '+sqrtnumb);

//8. Recursive function
//Factorial of a number

function factorial(n) {
    if(n == 0 || n == 1) {
        return 1;
    }
    else {
        return n * factorial(n-1);
    }
}

console.log('factorial: '+factorial(5));

//9. Higher-Order function

function addition(a, b){
    return a + b;
}

function multiplication(a, b){
    return a * b;
}

function operate(funcName, a, b) {
    return funcName(a, b);
}

const s = operate(multiplication, 4, 5);
console.log('Higher Order function - Sum/Multiplication: '+s)
