// Various ways of declaring a function in JavaScript
//Normal function declaration
sum1 = [];

function add(a, b) {
    return a + b;
}

for(let i = 1; i<10; i++) {
    //sum = add(5, i);
    sum1.push(add(5, i));
}

console.log(sum1);

// Normal function without any parameter just printing some message

function print() {
    console.log('Hi this is JavaScript')
}

print();


//2. Function Expression

let multipy = function(a, b) {
    return a*b;
}

let mul = multipy(5, 4);
console.log(mul)

//3. Arrow function

const divide = (t1, t2) => t1/t2;

let div = divide(10 , 2);
console.log(div);

//4. Function Constructor
const substraction = new Function('a', 'b', 'return a - b')

let subs = substraction(5, 4);

console.log('substraction ',subs);

//5. IIFE - Immediately Invoked Function Expression

(function() {
    console.log('server is up n running on port 3000');
}) ();

//6 Generator Function
//function** and yield keyword

function* generateNumberSquence() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const generator = generateNumberSquence();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

//7. Annonymous function
//no specific name

// const numbers = [1,2,3,4,5]
// const squareNumber = numbers.map(function(e) {
//     return e*e;
// });
// console.log('squareNumber ',squareNumber);

const numbers = [1,2,3,4,5];
const squareNumber = numbers.map((e) => {
    return e*e;
});

console.log('squareNumber ', squareNumber);

//8 Recusrive function

function factorial(n) {
    if((n == 0) || (n == 1)) {
        return 1;
    }
    else {
        return n * factorial(n-1)
    }
}

console.log(factorial(5));
console.log(factorial(4));


//9. Higher Order function

function add(a, b) {
    return a + b;
}

function subss(a, b) {
    return a - b;
}

function multipyy(a, b) {
    return a * b;
}

function operate(funcName, a, b) {
    return funcName(a, b);
}

const sum = operate(add, 5, 4);
const sub = operate(subss, 5, 4);
const m = operate(multipyy, 5, 4);

console.log('sum ', sum);
console.log('sub ', sub);
console.log('m ', m);