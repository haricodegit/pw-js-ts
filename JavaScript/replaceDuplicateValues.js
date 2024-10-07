function replaceDuplicate(str, specialChar = '*') {
    let charCount = [];
    let result = '';

    for(let char of str) {
        char = char.toLowerCase();
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for(let char of str) {
        if(charCount[char.toLowerCase()] > 1) {
            result += specialChar;
        } else {
            result += char;
        }
    }

    return result;
}

let result = replaceDuplicate('Programming', '*')
console.log(result);