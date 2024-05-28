// TypeScript program to illustrate typeassertion

//TSC - TypeScript Complier

/**Type assertion in TypeScript is a way to tell the TypeScript complier that you know more about the 
 * type of a value then it does/ */

// 1. Using <>
// 2. Using as keyword

let totalBill: any = 123;
let finalBill = <number>totalBill + 200
console.log(finalBill);

let someValue: any = "Hello TypeScript with Naveen Automation"
let len = (someValue as string).length;
console.log(len);

let flag: any = true
if(flag as boolean) {
    console.log("Hello TypeScript");
} else {
    console.log("Condition was false");
}