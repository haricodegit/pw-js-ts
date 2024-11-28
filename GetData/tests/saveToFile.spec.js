const fs = require('fs');

// Create a writable stream for the log file
const logStream = fs.createWriteStream('output.txt', { flags: 'a' });

// Override the console.log function
console.log = function (message) {
    // Write to the console (optional)
    process.stdout.write(message + '\n');
    
    // Write to the file
    logStream.write(message + '\n');
};

// Sample console logs
console.log("This is the first log message.");
console.log("Another log message.");
