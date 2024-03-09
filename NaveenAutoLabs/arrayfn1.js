// JavaScript few more array methods

//1 arrry.every();
//2 array.some();
//3. array.find();
//4. array.indexOf();
//5. array.lastindexOf();
//6. array.reverse();
//7. array.sort();

//1. array.every();
let num = [1,2,3,4,5,30];

//return true or false
let flag = num.every((e) => e < 10);

console.log(flag);


//2. array.some();

let numb = [1,3,5,7,9];
let fg = numb.some((e) => e %2 == 0);
console.log(fg)

//3. array.find()

//let frts = ['apple','orange','mango','apple','pear']

//let fistindex = frts.find((e) => e == 'pear');

let n = [1,2,5,6];
let fistindex = n.find((e) => e % 2 == 0)
console.log(fistindex);


//4. indexOf() and 5. lastindexOf();

let frts = ['apple','123orange','mango','apple','Pear']

let firstindex = frts.indexOf('apple');
console.log('firstindex ',firstindex);

let lastindexof = frts.lastIndexOf('apple');
console.log('lastindexof ', lastindexof);

//6. array.reverse()

let reverse_str = frts.reverse();
console.log('reverse_str ',reverse_str)

//7. array.sort();

let sorted_str = frts.sort();
console.log('sorted_str ',sorted_str)



