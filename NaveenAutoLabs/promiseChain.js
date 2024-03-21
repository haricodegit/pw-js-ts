// JavaScript program to illustrate Promise chaining

function getEvenNumber(value, delay) {

    return new Promise((reslove, reject) => {
        setTimeout(() => {
            if(value % 2 == 0) {
                reslove(value)
            }
            else {
                reject(new Error("Value is not even number"));
            }
        }, delay);

    });
}

//Promise chain
getEvenNumber(4, 1000)
        .then(result => {
            console.log('Step 1: getting the results with even number', result);
            return getEvenNumber(6, 2000);
        })
        .then(result => {
            console.log('Step 2: getting the result with even number', result);
        })
        .catch(error => {
            console.log('promise chain error', error.message);
        });