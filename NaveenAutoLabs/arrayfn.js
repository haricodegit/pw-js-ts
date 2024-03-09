//JavaScript program to illustrate array.map() method

let num = [1,2,3,4,5];

let doubleNum = num.map((e) => e * 2);

console.log(doubleNum);

//JavaScript progam to convert Fah to Cel

//formula = (fah - 32) * (5/9)

let fah = [32, 68, 86, 104, 212];

function fahToCel(fah) {
    return ((fah - 32) * (5/9));
}

let Cel = fah.map(fahToCel);
console.log(Cel);

//filter method

let numb = [1,2,3,4,5,6,7,8,9,10];
let evenNum = numb.filter((e) => e % 2 == 0);
console.log('evenNum ', evenNum);

//Filter employee array

let employee = [
    {name: 'John', age: 30, gender: 'male'},
    {name: 'Bob', age: 35, gender: 'male'},
    {name: 'Lisa', age: 40, gender: 'female'},
    {name: 'Priya', age: 25, gender: 'female'},
    {name: 'Peter', age: 55, gender: 'male'}
]

let femaleEmpOver20 = employee.filter((emp) => {
    return (emp.gender == 'female' && emp.age > 20);
});

console.log('femaleEmpOver20 ',femaleEmpOver20);

//3. reduce

let numbr = [1,2,3,4,5];

let sum = numbr.reduce((acc, num) => acc + num, 0);
//acc - accumulator variable stores the final value
// num - points to the current value in the array
// here we are doing addition operation
// 0 is the initial value given to the acc - accumulator

console.log(sum);


//JavaScript program to findout Max number in an array using array.reduce() method

let numm = [33,64,86,8,33,83,323,722,-323,742,43,2,4,0,43242];
let maxNum = numm.reduce((acc, num) => {
    if(num > acc) {
        return num;
    }
    else {
        return acc;
    }
}, 0);

console.log('maxNum ', maxNum);

//JavaScript program to identify the sum of total items purchased or in the cart

let cart = [
    {item: "Jeans", price: 500},
    {item: "Shirt", price: 400},
    {item: "Shoes", price: 700},
    {item: "Watch", price: 300}
]

const totalPrice = cart.reduce((acc, pricee) => acc + pricee.price, 0);

console.log('totalPrice ',totalPrice)