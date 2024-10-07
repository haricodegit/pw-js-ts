// JavaScript program to find the number of occurence of a word in a sentence

function countWords(sentence, word) {
    const lowerSentence = sentence.toLowerCase();
    const lowerWord = word.toLowerCase();

    const regex = RegExp(`\\b${lowerWord}\\b`, 'g');

    const matches = lowerSentence.match(regex);

    return matches? matches.length : 0;
}

const sentence = "The quick brown fox jumps over the lazy dog. The fox was very quick.";
const word = "fox";
const count = countWords(sentence, word);
console.log(count);