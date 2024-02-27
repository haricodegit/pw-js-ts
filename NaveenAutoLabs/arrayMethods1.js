//1. every method - all the values in the array must satisfy the condition return boolean - true/false

let num = [1,2,3,4,5,6,7]

let flag = num.every((e) => e < 10);
console.log('every method flag: ' +flag)

//2. some method - atleast one value in the array must satisfy the condition return boolean - true/false

let n = [1,12,3,4,5]

let fg = n.some((e) => e > 5)
console.log('some method flag: '+fg)

//3. find(); finds the first element in the array that satisify the condition and returns the same

let total = [1,5,3,6,7,9,] // if non of the values are satisfied with condition then returns undefined

let fe = total.find((e) => e % 2 == 0);
console.log(fe)

//4. IndexOf method - return the index of the element in the array list, 
//if the element is not available then return -1

let fruit = ['apple','orange','bannana','pear']

let indexof_stg = fruit.indexOf('pear1');
console.log('indexof_stg: '+indexof_stg)

//5. lastindexof() - return the last index of an element in the arrary list 

let fruits = ['apple', 'orange', 'apple', 'bannana', 'pear']

let lastindexofApple = fruits.lastIndexOf('apple');
console.log('lastindexofApple: '+lastindexofApple)

// 6. reverse() - return the reverse of an array list
let frts = ['apple', 'orange', 'apple', 'bannana', 'pear']

let reversefrts = frts.reverse();
console.log('reversefrts: '+reversefrts)

// 7. sort() - return the sorted order say alphabetically or numerically
console.log()
let products = ['macBook', 'imax', 'samsumg', 'canon', 'oneplus', '123Test', 'Tshirt']
let Suprsort = products.sort()
console.log('Suprsort: '+Suprsort)