// 1. Sorting an Array of Strings (Alphabetical Order):

console.log('1. Sorting an Array of Strings (Alphabetical Order):');
let fruits = ["Banana", "Apple", "Mango", "Cherry", ];
fruits.sort()
console.log(fruits);

// 2. Sorting an Array of Number (Ascending and Decending Order)
console.log('2. Sorting an Array of Number (Ascending and Decending Order)');
let numbers = [23, 5, 100, 7, 42]
numbers.sort((a, b) => a - b) //If a is less than b, the function returns a negative value (indicating a should come first). If a is greater, it returns a positive value (indicating b should come first).
console.log(numbers);

console.log('Decending Order');
const result = numbers.sort((a, b) => b - a)
console.log(result);

// 3. Sorting an array of Objects

console.log('3. Sorting an array of Objects');

const students = [
   { name: 'John', age: 22 },
   { name: 'Anna', age: 19 },
   { name: "Zoe", age: 25}
]

students.sort((a, b) => b.age - a.age)
console.log(students);

// 4. Sorting String in Reverse Alphabetical order

console.log('4. Sorting String in Reverse Alphabetical order');

let frts = ['Banana', 'Apple', 'Mango', 'Cherry']
frts.sort().reverse();
console.log(frts);

// 5. Case Insensitive String Sorting

let fruits1 = ["banana", "Apple", "mango", "Cherry"];
fruits1.sort((a, b) => a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase()));
console.log(fruits1);


// Swap with using a third variable

a = a + b;
b = a - b;
a = a - b

console.log('Before swapping = a = ${a}, b = ${b}')