// JavaScript program to find out largest and smallest number in an array without using built-in functions

function findSmallestAndLargest(arr) {

    if(arr.length === 0) {
        return { smallest: undefined, largest: undefined }
    }

    let smallest = arr[0];
    let largest = arr[0];

    for(i = 1; i<=arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i]
        }

        if(arr[i] < smallest) {
            smallest = arr[i]
        }
    }

    return { smallest, largest };
}

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const result = findSmallestAndLargest(numbers);
console.log(result);