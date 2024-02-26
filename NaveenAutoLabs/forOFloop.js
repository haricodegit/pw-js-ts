//JavaScript program to illustrate For...of loop
const array = ['apple','orange','grapes','mango','banana']
printArray(array)

function printArray(array) {
    for(const e of array) {
        console.log(e)
    }
}

//print the same array value using normal for loop
console.log('print the same array value using normal for loop');
normalforloop(array)

function normalforloop(array) {
    for(let i = 0; i<array.length; i++) {
        console.log(array[i])
    }
}

console.log();
const browser = ['Chrome', 'Firefox', 'Edge', 'Internet Explorer', 'Opera', 'Safari'];
//For Of loop
let b = 'Firefox';
for (const e of browser) {
    //array.forEach(element => {
        console.log(e);
        if(e == b) {
            console.log('Launch '+b+' browser');
            break;
        }
    };
