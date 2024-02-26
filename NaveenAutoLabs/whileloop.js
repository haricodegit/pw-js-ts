console.log('Javascript program to illustrate while loop')

let i = 1;
while (i<=10) {
    console.log('Value of i is: '+i)
    i++;
    //++i;
   // i=i+1;
}

console.log('Print even numbers')
let j = 2;
while (j<=10) {
    console.log('Value of j is: '+j)
    j=j+2;
}

console.log('List of Cars')

let cars = ['BMW', 'Volvo', 'Porche', 'Pagani', 'Supra']
let text1 = '';
let k = 0;
for(;cars[k];) {
    text1 += cars[k];
    k++;
}

console.log('Above example in do while loop')

let text2 = '';
let l =  0;
while(l<cars.length) {
    text2 += cars[l];
    l++;
}

console.log('for loop output: '+text1);
console.log('whileloop output: '+text2);

console.log();
console.log('print only the numbers that are divisible by 5')

let num = 20;
let c = 1;
while(c <= num) {
    //console.log(c)
    if(c % 5 == 0){
        console.log(c);
        console.log('Hi..');
        break;
    }
    c++;
}

const browser = ['Chrome', 'Firefox', 'Edge', 'Internet Explorer', 'Opera', 'Safari'];
//For Of loop
for (const iterator of object) {
    array.forEach(element => {
        
    });
}