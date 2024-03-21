//JavaScript program to illustrate PromiseAllSettled concept

const getData = () => {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove('Data from getData')
        }, 2000)
    })
}

const getError = () => {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reject("Error: data is not available")
        }, 2000)
    });
}

Promise.allSettled([getData(), getError()])
        .then(results => {
            results.forEach(result => {
                if(result.status === 'fulfilled'){
                    console.log("value: ",result.value);
                }
                else {
                    console.error("reason for rejection ",result.reason);
                }
            })
        })