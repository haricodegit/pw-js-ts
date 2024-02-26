console.log('Javascript program to illustrate Array')

//Array declaration

myArray = []; //an empty array

lang = ['Java', 'Javascript', 'Typescript', 'Python']

console.log('//1. Push method on array')
// array.push method add a new value to the end of an array list
lang.push('HTML', 'CSS', 'Java', 'Javascript') //able to add duplicate values aswel
console.log(lang)

console.log();
console.log('Push array values into an empty array')
myArray.push('element1', 'element2', 'element3')
console.log(myArray);

console.log('//2. array.pop method on array')
//array.pop method is using to remove the last value from the array list
numbers = [1, 2, 3, 4, 5, 6];
numbers.pop()
console.log(numbers);

console.log('//3. array.shift method on array')
//array.shift() removes the first element in the array and returns it value aswel
fruits = ['apple', 'orange', 'bannana', 'Grapes']

let removedfruit = fruits.shift()
console.log('Removed fruit: '+removedfruit);
console.log(fruits);

console.log('//4. array.unshift method on array')
//array.unshift() add new elements to the starting index of the array

let colors = ['red', 'blue', 'white', 'yellow'];
let len = colors.unshift('green', 'pink', 'grey')
console.log('Returned length: '+len);
console.log('New array elements: '+colors);

console.log();
console.log('//5. Splice method on array')

let animals = ['dog', 'cat', 'cow', 'rat', 'birds']
let deleteditems = animals.splice(0,2, 'snakes', 'Monkey', 'Panda')

console.log('animals: '+animals);
console.log('deleted items '+deleteditems);

console.log()
console.log('//6. Slice method on array')
//slice method return the sub-set of an original array

let pop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
slicedarray = pop.slice(3,-4)
console.log('Sliced array: '+slicedarray)

console.log()
console.log('//7. Concat method on array')
//concat method is using to combain two different arrays

let fr = ['apple', 'orange', 'bannana']
let num = [1, 2, 3, 4, 5]
let mixedarray = fr.concat(num);
console.log('mixedarray: '+mixedarray)

console.log()
console.log('//8. Index of an element in a array')

let col = ['red', 'green', 'blue', 'black', 'green',  'pink', 'white',  'green', 'yellow', 'green']
let g = 0;
let AllindexofGreen = 1;

while (g<col.length) 
{
    let indexofGreen = col.indexOf('green')
    let AllindexofGreen = col.indexOf('green', col.indexOf('green')+g)
    //console.log('indexofGreen: '+indexofGreen)
    console.log('AllindexofGreen: '+AllindexofGreen)
    g++;
}

console.log()
console.log('//9. array.includes on array')

let roles = ['admin', 'customer', 'seller', 'viewonlyuser', 'superuser']
let flag = roles.includes('seller','customer')
console.log('flag '+flag)

console.log()
console.log('//10. forEach loop')

let n = [1,2,3,4,5,6,7,8,9]

n.forEach((e) => {
    console.log(e * 2)
}) 