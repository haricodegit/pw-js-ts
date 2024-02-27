//1. Array maps

let numbers = [1,2,3,4,5]
let doublenumbers = numbers.map((e) => e * 2);
console.log(doublenumbers);

//fahrenheit to celsius
//(°F − 32) × 5/9 = °C


let fahTemp = [30,69,90,120];

function fahToCel(fah) {
    return ((fah - 32) * (5/9));
}

let celsiTemp = fahTemp.map(fahToCel);
console.log(celsiTemp);

//2. array filters

let num = [1,2,3,4,5,6,7,8,9,10];
let evenNums = num.filter((e) => e % 2 == 0);
console.log(evenNums)


let employees = [
    {name: 'Arun', age: 30, gender: 'male'},
    {name: 'Varun', age: 45, gender: 'male'},
    {name: 'Priya', age: 25, gender: 'female'},
    {name: 'Kiran', age: 35, gender: 'male'},
    {name: 'Lisa', age : 28, gender: 'female'}
]

let femalempOver20 = employees.filter((emp) => {
    return emp.gender == 'female' && emp.age > 20;
});
console.log(femalempOver20);

//3. Array reduce method

let numb = [1,2,3,4,5] //sum = 15
let sum = numb.reduce((acc,num) => acc+num, 0);
console.log(sum);

let top = [10,25,50,5,70,600,30,100,150,34,12,64,5,6,98]
let maxx = top.reduce((max, num) => {
    if(max > num) {
        return max;
    }
    else{
        return num;
    }
}, top[0]);

console.log('Max Number: '+maxx)

let minNum = top.reduce((min, num) => {
    if(min < num) {
        return min;
    }
    else {
        return num;
    }
}, top[0]);

console.log("Min number: "+minNum);

//cart: product name, price

let cart = [
    {name: 'Jeans', price: 500},
    {name: 'Shirt', price: 400},
    {name: 'Shoes', price: 900},
    {name: 'Hat', price: 200},
    {name: 'T-Shirt', price: 300},
]

let totalPrice = cart.reduce((total, item) => total + item.price, total = 0);

console.log('Cart totalPrice: '+totalPrice);