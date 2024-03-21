// JavaScript program to illustrate Promise.all()

//Case 1
// f1 -- reslove
// f2 -- reslove
// f3 -- reslove

/*
const function1 = () => {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            //reslove("Data from Function1");
            const data = [1,2,3,4,5]
            reslove(data)
        }, 2000);
    });
}

const function2 = () => {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            //reslove("Data from Function2");
            const data = [6,7,8,9,10]
            reslove(data)
        }, 2000);
    });
}

const function3 = () => {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            //reslove("Data from Function3");
            const data = [11,12,13,14]
            reslove(data)
        })
    })
}

Promise.all([function1(), function2(), function3()])
        .then(dataArray => {
            console.log("All Data from different functions ", dataArray)
        })
        .catch(error => {
            console.log('Error in promise ', error.message)
        });


*/
//Case 2
// f1 - reslove
// f2 - error

const getData = () => {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            //reslove("Data from Function1");
            const data = [1,2,3,4,5]
            reslove(data)
        }, 2000);
    });
}

const ErrorData = () => {
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            reject("Error: Data is not available form ErrorData function")
            
        }, 2000);
    });
}


Promise.all( [getData(), ErrorData() ])
        .then(dataArray => {
            console.log("All data fetched ?")
        })
        .catch(error => {
            console.log("Error occured ",error)
        })