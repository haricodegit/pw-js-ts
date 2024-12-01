function transformDateTime(input) {
    // Split the input into date and time parts
    const [datePart, timePart] = input.split(' ');

    // Extract day, month, and year from the date part
    const [day, month, year] = datePart.split('-');

    // Reformat into the desired format
    const transformedDateTime = `${year}-${month}-${day} ${timePart}:00`;

    return transformedDateTime;
}

// Example usage
const input = "04-11-2024 09:15";
const output = transformDateTime(input);
console.log(output); // Output: 2024-11-04 09:15:00
