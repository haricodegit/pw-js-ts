// TypeScript program to illustrate IfElse in TypeScript and Unreacheable code examples

let flag: boolean = true
if(flag) {
    console.log("pass");
} else {
    console.log("fail");
}

let x: number = 10, y:number = 20;
if(x > y) {
    console.log("x is greater than y");
} else {
    console.log("y is greater than x");
}

// we can also try < <= > >= != ===

//if-else if.. find out greater of 3 numbers

let a: number = 1500
let b: number = 700
let c: number = 900

if(a > b && a > c) {
    console.log(a," A is greater");
} //else if (b > a && b > c) {
    else if (b > c) {
    console.log(b," B is greater");
} else {
    console.log(c," C is greater");
}

// Ternary operator

let i: number = 100
let j: number = 200

i>j ? console.log("i is gr then j") : console.log("j is gr than i");


let browser: string = "firefox";

// (browser === "chrome") ? console.log("launch chrome browser"): console.log("launch default browser");

(browser === "chrome") ? console.log("launch chrome") : (browser === "firefox") ? console.log("lanch firefox") : console.log("invalid");