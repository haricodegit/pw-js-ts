
// Tuple fixed size and order matter
// Tuple vs Array
// Array dynamix runtime: more values can be added

let person: [string, number] = ["Tom", 100]
let user: [string, number, boolean] = ["Tom", 200, true]

console.log(user[2]);

let data: [string, number] [] = [["Naveen", 100], ["Ravi", 200]]
console.log(data[0]);
console.log(data[0][0]);
console.log(data[1]);
console.log(data[1][0]);

let customer: [string, number] = ["Naveen", 100]
console.log(customer)
customer.push("Ravi", 200)
console.log(customer);