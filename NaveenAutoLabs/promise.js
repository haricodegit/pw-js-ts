//JavaScript program to illustrate promise concept

const randomNumberPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        const randomValue = Math.random();
        if(randomValue > 0.5) {
            resolve(randomValue)
        } else {
            reject(new Error("Value is too small"))
        }
    })

}, 2000); //delay of 2 secs


randomNumberPromise
        .then(result => {
            console.log("Promise is fulfilled with value ", result)
        })

        .catch(error => {
            console.error("promise is rejected with error ",error)
        });