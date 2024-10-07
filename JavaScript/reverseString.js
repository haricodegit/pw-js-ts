function reverseString(str) {

    // using split() method, convert string with individual char of array
    let strArry = str.split("")

    // using reverse() method, reverse the array of char
    let revArry = strArry.reverse();

    // using join() method, covert the array of char into regular string
    let reversedString = revArry.join("")

    return reversedString;
}

let originalString = "Hello";
let reversedStr = reverseString(originalString);
console.log(reversedStr);

