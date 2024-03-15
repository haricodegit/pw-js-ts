// 20 useful Tips in JavaScript

//1. Find unique values from array
//2. Convert int to string
//3. float to int
//4. check if a variable is number
//5. swap variable values without using temp variable
//6. check if an object has a property
//7. remove falsy values from array : (false,0, "", null, undefined, NaN)
//8. String --> UpperCase --> LowerCase
//9. check if array constain specifi  values;
//10. check if array is empty
//11. generate a random number
//12. String to number
//13. Join array element into a String/sentence
//14. get object property
//15. clone an array or object
//16. Convert Object to Array
//17. get current date and time:
//18. check if variable is defined
//19. truncate an array
//20. Last item in the array


//1. Find unique values from array:

const array = [1,2,3,2,3,3,5,6,2];
const uniqueArray = [...new Set(array)] //... is spead operator and Set object is to filter the unique values in the array
console.log(uniqueArray);

//2. Convert int to string

const num = 32;
const numstr = 32 + '';
console.log(typeof numstr);
console.log(numstr + 10);

//or using String(num) object to convert int to string

let num1 = 42;
const numstr1 = String(num1);
console.log(typeof numstr1);
console.log(numstr1 + 10);

//3. Float to int
const floatNum = 3.76;
const intNum = parseInt(floatNum);
console.log(intNum);

//4. Check if a variable is number
const value = 'temp';

if(typeof value === 'number')
{
    console.log(value + ' is a number')
}
else {
    console.log(value + ' is not a number')
}

//5. Swap variable values without using temp variable

let a = 5;
let b = 10;
[a , b] = [b , a];
console.log(a)
console.log(b)


//6. Check if an object has a property

const person = {
    name: 'John',
    age: 25
}

if(person.hasOwnProperty('age')) {
    console.log('person has property')
}
else{
    console.log('person does not have property')
}

//7. remove falsy values from array: (false, 0 "", null, undefined, NaN);

const values = [0, 1,2, false, "", undefined, 4, NaN, 3];
const filteredVal = values.filter(Boolean);
console.log(filteredVal);

//8. String --> UpperCare --> LowerCase

const strname = 'Naveen Automation Labs';
const u1 = strname.toUpperCase();
const l1 = strname.toLowerCase();
console.log(u1);
console.log(l1);

//9. check if array contains specific value

const lang = ['java', 'javascript', 'python', 'ruby']
if(lang.includes('javascript')) {
    console.log('Found');
}

//10. Check if an array is empty
const empty = [];

if(empty.length === 0) {
    console.log('array is empty')
}

//11. generate random number;

const min = 10;
const max = 200;

const randomNum = Math.floor(Math.random() * (max-min + 1)) + min;
console.log(randomNum);

//12. String to Number:

const strNumber = '32';
console.log(typeof strNumber);
const cnum = parseFloat(strNumber);
console.log(cnum);
console.log(typeof cnum);

//13. Join Array elements into a string/sentence

const words = ['Hello', 'Naveen'];
const sentence = words.join(".");
console.log(sentence);

//14. get Object property

const user = {
    name: 'Tom',
    age: 25
}

console.log(user.name);
console.log(user.age);

//15. clone an array or object

const marks = [70,30, 66,75,99]
const marksDuplicate = [...marks] // duplicate/clone array using spread operator

console.log(marksDuplicate)

const userDuplicate = {...user} // duplicate/clone object using speard operator

console.log(userDuplicate)

//16 Convert Object to Array:

const employee = {
    name: 'Tom',
    age: 27
}

//a. keys array
const keysVal = Object.keys(employee);
console.log(keysVal);

//b. values array
const onlyVal = Object.values(employee);
console.log(onlyVal);

//c key and value array - entires
const keyandVal = Object.entries(employee)
console.log(keyandVal);

//17. get current date and time:

const currentDate = new Date();
console.log(currentDate.toLocaleString())

//18. check variable is defined or not

let i;
if(typeof i === 'undefined') {
    console.log('variable is undefined')
}

//19. truncate an array

const testing = [0,1,2,3,4,5,6,7];
testing.length = 3;
console.log(testing);

//20. Last item in the array

const pop = [0,1,2,3,4,5,67]
console.log(pop.slice(-1));