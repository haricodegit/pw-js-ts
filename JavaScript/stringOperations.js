const input = "O52063.00H52099.00L52026.70C52095.0052095.00+44.50 (+0.09%)Vol11.13K";

// Remove characters after the 5th character (index 4)
const cleanedString = input.slice(0, 36);
console.log('cleanedString ', cleanedString);

// 2. Separate string based on alphabetic characters (delimiter)
let separatedParts = cleanedString.split(/(?=[A-Za-z])/); // Split at the point before each alphabetic character
console.log(separatedParts);
// Output: ["O", "52063.00", "H", "52099.00", "L", "52026.70", "C", "52095.00", "52095.00"]

let jsonObjects = {};

// Iterate through the input array
separatedParts.forEach(item => {
    // Use a regular expression to separate the alphabetic characters and numeric values
    const match = item.match(/^([A-Za-z]+)(\d+\.\d+)$/);
    
    if (match) {
      const key = match[1]; // The character part (e.g., "O")
      const value = match[2]; // The numeric part (e.g., "52063.00")
      
      // Assign the key-value pair to the result object
      jsonObjects[key] = value;
    }
});


console.log('jsonObjects ',jsonObjects);




