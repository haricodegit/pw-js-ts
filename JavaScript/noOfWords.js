// JavaScript program to count the number of words in a sentence
// trim() --> then split with regular expression /\s+/

function wordCount(str) {

    let words = str.trim().split(/\s+/);
    console.log(words);
    return words.length;
}

let sentence = "  Hello, how are you today?  ";
let count = wordCount(sentence);
console.log(count);