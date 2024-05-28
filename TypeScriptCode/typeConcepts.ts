


// TypeScript is a statically typed language
// Type Inference --> let num = 123.. let name = "Harish"
// Type Annotations --> num: number... name: string...


// any
let value: any = 50
value = "test"
value = true

let num: number
num = "test"
num = true

//void: function that does not return any value

function printHello(): void {
    console.log("Hello")
    return 123;
}

function getNumber(): number {
    console.log("object");
    return 123
}

function getAnyValue(): any { //RunTime = any -- CT -- boolean
    return true
}

function addition(a, b) { // Compile Time --> Type Inference will be applied as Number
    return a+b
}

let sum = addition(10, 20);

function Multiplication(x, y) {
    return x*y
}

let mul = Multiplication("test1", "test2")

console.log(mul)

function add(i: number, j: number): number {
    return i + j;
}


