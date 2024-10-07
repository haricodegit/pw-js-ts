// JavaScript program to find largest and smallest number in an array using reduce method

function findSmallestAndLargest(arr) {
    if(arr.length === 0) {
        return { smallest: undefined, largest: undefined }
    }

    return arr.reduce((acc, num) => {
        return {
            largest: num > acc.largest ? num : acc.largest,
            smallest: num < acc.smallest ? num : acc.smallest
        };
    }, {largest: arr[0], smallest: arr[0]});
}