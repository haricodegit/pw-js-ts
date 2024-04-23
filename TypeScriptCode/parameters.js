//optional parameters
var getInformation = function (firstName, age) {
    return firstName + " " + age;
};
console.log(getInformation('Tom'));
console.log(getInformation('Tom', 30));
// default parameters
//make sure that default parameters should not be the first parameter in the function
var setDetails = function (name, mesg) {
    if (mesg === void 0) { mesg = "Welcome"; }
    return mesg + " " + name;
};
console.log(setDetails("Harish"));
console.log(setDetails("Harish", "Hello"));
console.log(setDetails("Harish", undefined)); // note first preference will be given to default value in the params not undefined
