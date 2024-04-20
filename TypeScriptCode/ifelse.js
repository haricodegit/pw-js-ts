// TypeScript program to illustrate IfElse in TypeScript and Unreacheable code examples
var flag = true;
if (flag) {
    console.log("pass");
}
else {
    console.log("fail");
}
var x = 10, y = 20;
if (x > y) {
    console.log("x is greater than y");
}
else {
    console.log("y is greater than x");
}
// we can also try < <= > >= != ===
//if-else if.. find out greater of 3 numbers
var a = 1500;
var b = 700;
var c = 900;
if (a > b && a > c) {
    console.log(a, " A is greater");
} //else if (b > a && b > c) {
else if (b > c) {
    console.log(b, " B is greater");
}
else {
    console.log(c, " C is greater");
}
// Ternary operator
var i = 100;
var j = 200;
i > j ? console.log("i is gr then j") : console.log("j is gr than i");
var browser = "firefox";
// (browser === "chrome") ? console.log("launch chrome browser"): console.log("launch default browser");
(browser === "chrome") ? console.log("launch chrome") : (browser === "firefox") ? console.log("lanch firefox") : console.log("invalid");
