// JavaScript program to remove middle element from an array (Even or Odd in length)

// find the array length
// find the middle element Math.floor(arry.length / 2)
// then remove the middle number using splice method

function removeMiddleElement(arr) {
    if(arr.length === 0) {
        return arr;
    }

    const middleEle = Math.floor(arr.length / 2) - 1;
    const resultArr = arr.splice(middleEle, 1);

    return resultArr
}

const array1 = [1,2,3,4,5,6]
console.log(removeMiddleElement(array1));