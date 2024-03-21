//JavaScript program to illustrate Promise.any()

//Its used for handing multiple promises and resloving with the value of the first fulfilled promise, similar to Promise.race()
//However, Unlike Promise.race(), Promise.any() doesn't reject immediately when the first promise rejects;
//instead, it waits until atleast one promise fulfills/reslove
//If all promise are reject then print info/reason for rejections

const getMessage = () => {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove("getMessage Promise resloved")
        }, 500)
    })
}

const getUser = () => {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reject("getUser Promise rejected")
        }, 200)
    })
}

const getProduct = () => {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reject("getProduct Promise rejected")
        }, 1000)
    })
}


Promise.any([getMessage(), getUser(), getProduct()])
        .then(result => {
            console.log("First successfully fulfilled promise ", result)
        })
        .catch(errors => {
            console.error("All promises rejected: ", errors)
        })
        