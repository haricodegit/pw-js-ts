console.log('Javascript program to find out the Max and Min in an Array number list')

const array1 = [-42, 53, 2, 64, 15, 93, 6];
console.log('Min number is '+findMin(array1))
console.log('Max number is '+findMax(array1));

function findMin(array1) {
    return Math.min(...array1);
}

function findMax(array1) {
    return Math.max(...array1);
}

