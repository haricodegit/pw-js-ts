// Tuple fixed size and order matter
// Tuple vs Array
// Array dynamix runtime: more values can be added
var person = ["Tom", 100];
var user = ["Tom", 200, true];
console.log(user[2]);
var data = [["Naveen", 100], ["Ravi", 200]];
console.log(data[0]);
console.log(data[0][0]);
console.log(data[1]);
console.log(data[1][0]);
var customer = ["Naveen", 100];
console.log(customer);
customer.push("Ravi", 200);
console.log(customer);
