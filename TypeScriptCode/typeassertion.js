// TypeScript program to illustrate typeassertion
//TSC - TypeScript Complier
/**Type assertion in TypeScript is a way to tell the TypeScript complier that you know more about the
 * type of a value then it does/ */
// 1. Using <>
// 2. Using as keyword
var totalBill = 123;
var finalBill = totalBill + 200;
console.log(finalBill);
var someValue = "Hello TypeScript with Naveen Automation";
var len = someValue.length;
console.log(len);
var flag = true;
if (flag) {
    console.log("Hello TypeScript");
}
else {
    console.log("Condition was false");
}
