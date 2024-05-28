// Arrow function: => fat arrow or lambda function
// Anonymous function without name
// In Java this is called as -> streams
var inform = function () {
    console.log("Pring something");
};
var typeSomething = function () {
    console.log("Type something");
};
inform();
typeSomething();
// supply parameters to the arrow functions
var addd = function (a, b) {
    return a + b;
};
var sum = addd(5, 9);
console.log(sum);
var singleLine = function (p, q) { return p + q; };
console.log(singleLine(30, 40));
// using Class
var Person = /** @class */ (function () {
    function Person(firstName, age) {
        this.firstName = firstName;
        this.age = age;
    }
    Person.prototype.displayPersonInfo = function () {
        console.log(this.firstName + " " + this.age);
    };
    return Person;
}());
var p = new Person('Tom', 30);
p.displayPersonInfo();
