//JavaScript program to illustrate async await concept

//async function without await steps or functions in it and returns resloved promise

async function f1() {
    return 42; // this normal value will be considered as resloved promise and will be sent back
}

/**
 * calling async function
 */

// f1()
// .then(result => {
//     console.log("Result: ",result)
// })

//async function without await steps or function in it and returns rejected promise

async function f2() {
    throw new Error("My error message") 
}

// f2().catch(error => {
//     console.log(`Message: ${error}`)
// })

console.log()
console.log("**********************")

//async function with a resloved/rejected promise:
function getInfo() {
    return new Promise((reslove, reject) => {
        const randomNumber = Math.random();
        setTimeout(() => {
            if(randomNumber < 0.5) {
                reslove(randomNumber)
            } else {
                reject(new Error("value error"))
            }
        })
    })
}

//create async function which will call getInfo()

async function getNumberInfo() 
{
    try {
    const result = await getInfo() //async step
    console.log("Random Number: ",result)
    } catch(error) {
    console.log("Error: ",error)
    }
}

//calling getNumberInfo function
getNumberInfo()