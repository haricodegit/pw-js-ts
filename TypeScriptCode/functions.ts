// functions in TypeScript

// void
// return
// take some parameters

//named functions

function getInfo(){ // 0 params
    console.log("Hello getInfo");
}

getInfo();

function add(a: number, b:number) { //parameters
    console.log(a+b);
}

add(10,20)

function multiply(x: number, y:number): number {
    return x * y;
    // return "Hari"
}

let product = multiply(5, 2)
console.log(product);

console.log("---------------------------");
function isUserActive(userName: string): boolean {
    if(userName === 'Naveen') {
        return true;
    } else if(userName === 'Tom') {
        return true;
    } else {
        console.log(userName+" user not found");
        return false;
    }
}

let flag: boolean;

flag = isUserActive("Naveen")
console.log(flag);
flag = isUserActive('Tom')
console.log(flag);
flag = isUserActive('Peter')
console.log(flag);

// Anonymous function: without name function -- store in a variable:
//call it using variable name only

let info = function(): void {
    console.log("This is a Anonymous function");
   // return; void return
}

info()


let sub = function(l: number, m: number): number {
    return  l - m;
}

let result: number = sub(20, 5);
console.log(result);