//#37 - Most Important string methods in JavaScript

// length method
console.log("JavaScript".length);

let str = "JavaScript"
//console.log(str.length)

//charAt
console.log("JavaScript"[2]);
console.log("JavaScript".charAt(2));

// charCodeAt
console.log("JavaScript".charCodeAt(5));

// toLowerCase
console.log("JavaScript".toLowerCase());

// toLocaleLowerCase
console.log("JavaScript".toLocaleLowerCase());

// toUpperCase
console.log("JavaScript".toUpperCase());

// slice 
// +ve 1,2,3,4,5... so on
// --- JavaScript
// -ve -5,-4,-3,-2,-1... so on
console.log("JavaScript".slice(2,-2));

// substring

console.log("JavaScript".substring(2,5));

console.log("JavaScript".substring(-2,5));


// concat

console.log("Naveen".concat(" Automation").concat(" Labs"))

// split
let lang = "Java_JavaScript_Python"

let arr = lang.split("_")
console.log(arr[1]);

//If out of range index is provided then output will be undefined

console.log(arr[5]); //undefined

// includes
console.log("JavaScript".includes("Java")); //true
console.log("JavaScript".includes("Python")); //false

// Replace
console.log("Dev Test Framework".replace("Dev", "JS"));

// replaceAll
console.log("Dev Test Framework Dev".replaceAll("Dev", "JS"));

//more examples for replaceAll method

console.log("01-April-2024".replaceAll("-", "/"));

//Trim
let tstr = " Hello JS Happy Learning "
console.log(tstr.trim());

// trimStart
console.log(tstr.trimStart());

// trimEnd
console.log(tstr.trimEnd());

// padding

console.log("Dev".padStart(10, "*"));

console.log("Dev".padEnd(10, "*"));

// startsWith

console.log("JavaScript".startsWith("J"));

console.log("JavaScript".startsWith("T"));

console.log("JavaScript".startsWith("Java"));

console.log("JavaScript".startsWith("Script"));

console.log("JavaScript".endsWith("Script"));

console.log("JavaScript".endsWith("Java"));

// Repeat

console.log(" dev ".repeat(3));


// indexOf

console.log("Naveen Automation Labs".indexOf("Automation"));

console.log("Naveen Automation Labs".indexOf("N"));

console.log("Naveen Automation Labs".indexOf("JS"));

console.log("Naveen Automation Labs".indexOf("z"));


// lastIndexOf

console.log("Naveen Automation Labs Naveen".lastIndexOf("Naveen")); //23

console.log("Naveen Automation Labs Naveen".lastIndexOf("Harish")); //-1

// Search --> Index of Search both these methods provides same results

console.log("Naveen Automation Labs".search("Automation"));

console.log("Naveen Automation Labs".search("n")); //hence proved its case sensitive