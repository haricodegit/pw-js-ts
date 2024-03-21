//JavaScript program to illustrate Promise.race()

//this method returns the promise that would execute first be it resloved promise or rejected promise

const reslovedPromise = () => {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove("Resloved !")
        }, 300)
    })
}

const rejectedPromise = () => {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reject("Rejected !")
        }, 500)
    })
}

Promise.race([reslovedPromise(), rejectedPromise()])
        .then(result => {
            console.log("Result: ", result)
        })
        .catch(error => {
            console.log("Error ", error)
        })