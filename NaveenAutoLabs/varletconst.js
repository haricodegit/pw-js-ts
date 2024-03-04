//program to illustrate var

var browser = 'chorme';
var browser = 'firefox';
var t = 3;

if(t > 2) {
    var browser = 'opera';
    console.log(browser);
}

console.log(browser);

let one = 1;
// let one = 3;
if(t > 1) {
    let one = 2;
    console.log('inside block: ',one);
}

console.log(one);

//const

const weekday = 6;
console.log('weekday: ',weekday);
console.log(100*weekday);
//Reinitilization of const variable
// weekday = 10;
// console.log(100*weekday);

