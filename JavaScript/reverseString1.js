// JavaScript program to reverse a string without using build-in functions like split(), reverse(), join()
// using for loop in reverse order we can reverse a string

function reverseString(str) {
    let reversedString = '';

    for(let i = str.length - 1; i>=0; i--) {
        reversedString += str[i]
    }

    return reversedString;
}

let originalString = 'Hello';
let reversedStr = reverseString(originalString);
console.log(reversedStr);