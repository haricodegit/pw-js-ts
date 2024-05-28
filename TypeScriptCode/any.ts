//Type Script program to illustrate any concept

//Variables
//Array
//Functions


//variables
let num: any = 12.35;

let something: any;

something = 123
something = "testing"
something = true
something = 12.34

//Array

let lang: any[] = ["Harish learning Automation testing", 12345, true, 13.64]
console.log(lang);

//Functions

function getInfo(a: number, b: number): any {
    if(a>b) {
        return "A is greater than B"
    }
    else {
        return 123
    }
}

console.log(getInfo(40, 20));