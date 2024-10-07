// JavaScript program to find the number of character in a string/sentence with spaces and special characters included

console.log('JavaScript program to find the number of character in a string/sentence with spaces and special characters included');

function charCount(str) {
    return str.length;
}

// JavaScript program to find out the number of character in a string/sentence without spaces or special charaters if any
// Using regular expression to remove the spaces and special characters

function OnlycharCount(str){
    let noSpaces = str.replace(/\s/g, '');
    console.log(noSpaces);
    return noSpaces.length;
}

const sentence = "Hello, how are you?";
let count = charCount(sentence);
console.log(count);

let onlyCount = OnlycharCount(sentence);
console.log(onlyCount);