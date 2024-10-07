// JavaScript program to remove white spaces from a string

function removeSpace(str) {
    return str.replace(/\s+/g, '');
}

let sentence = "    I Am Learning   Automation Testing    ";
console.log(removeSpace(sentence));