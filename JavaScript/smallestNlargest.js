// JavaScript program to find the smallest and largest number in an array Using built in function


function findMaxnMin(arr) {
    if(arr.length === 0) {
        return {smallest: undefined, largest: undefined}
    }

    const largest = Math.max(...arr);
    const smallest = Math.min(...arr);

    return { smallest, largest };
}

// const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const numbers = []; 
const result = findMaxnMin(numbers);
console.log(result);