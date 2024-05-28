//TypeScript program to illustrate loops concept in typeScript

//For loop
//For of loop
//For in loop

//while loop
//do-while loop

//for loop

let number: number[] = [10,20,30,40,50]

for(let i=0; i<number.length; i++) {
    console.log(number[i]);
    if(number[i] === 30){
        console.log("hi");
        break;
    }
}

//for of loop
console.log("---------------");
let num: number[] = [100,200,300,400,500]

for(let n of num) {
    console.log(n);
    if(n === 200) {
        console.log("Hello");
        break;
    }
}

//for in loop

console.log("------------------");
let n:number[] = [1000,2000,3000,4000,5000]

for(let j in n){
    console.log(j +" = "+n[j]);
}



// while loop
let p = 1;
while (p<=10) {
    console.log(p);
    if(p === 5) {
        console.log("break the loop");
        break;
    }
    p++;
}

//User cases for while loop ? used when the number of iterations are not fixed or unknown

//1. infinite scrolling to find an elements on Zomato, swiggy, linkedIn page
//2. wait for page loading.. 2, 5, 10 secs
//3. wait for elements visibility on page: 2,5,10 secs
//4. Calender handling.. select a past or future date year month
//5. webtable pagination: prev....12345....next

//use case for For loop:
//when the number of iterations are fixed
//drop down month: Jan to Dec: 1 to 12 or date selection max 31 days in a month


//do-while loop

console.log("---------------------");
let k = -10;
do {
    if(k === 10) {
        console.log("Max Value reached");
        break;
    }
    console.log("Value: "+k);
    k++;
} while (k<=10);


