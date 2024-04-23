// functions in TypeScript
// void
// return
// take some parameters
//named functions
function getInfo() {
    console.log("Hello getInfo");
}
getInfo();
function add(a, b) {
    console.log(a + b);
}
add(10, 20);
function multiply(x, y) {
    return x * y;
    // return "Hari"
}
var product = multiply(5, 2);
console.log(product);
console.log("---------------------------");
function isUserActive(userName) {
    if (userName === 'Naveen') {
        return true;
    }
    else if (userName === 'Tom') {
        return true;
    }
    else {
        console.log(userName + " user not found");
        return false;
    }
}
var flag;
flag = isUserActive("Naveen");
console.log(flag);
flag = isUserActive('Tom');
console.log(flag);
flag = isUserActive('Peter');
console.log(flag);
// Anonymous function: without name function -- store in a variable:
//call it using variable name only
var info = function () {
    console.log("This is a Anonymous function");
    // return; void return
};
info();
var sub = function (l, m) {
    return l - m;
};
var result = sub(20, 5);
console.log(result);
