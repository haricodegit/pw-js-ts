// Objects

customer = {
    firstName: "John",
    lastName: "Smith",
    cars: ["Volvo", "Toyota", "Tesla"]
}
// dot notation
customer.firstName = "Mike"

// bracket notation
customer['lastName'] = "Silver"

console.log(customer);

// Array 

let cars = ["Volvo", "Toyota", "Tesla"]
cars[0] = "BMW"
console.log(cars[0]);

console.log(customer.cars[2]);