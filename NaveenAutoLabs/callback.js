// #18 callback function in JavaScript

//callback function
//async call/task -- once this task is completed -- then only callback function will be called

//basic callback:

function greet(name1, callback) {
    console.log('Hello ',name1)
    callback()
}

//callback function definition
function welcome () {
    console.log("Welcome...!!!")
}

greet('Naveen' , welcome);


//callback with async function:

function printInfo(name2, callback) {
    //async function/task/step:
    setTimeout(function(){
        console.log('Printing info for ', name2)
        callback('Plz call me back!')
    }, 5000); //delay of 5000ms/5 sec
}

//callback
function displayMessage(mesg) {
    console.log(mesg)
}

printInfo('Lisa ', displayMessage);

//callback function with async function

function fetchUserData(userId, callback) {
    setTimeout(function() {
        const users = {
            1: {id: 1, name: 'Naveen'},
            2: {id: 2, name: 'Tom'},
        };

        const user = users[userId];
        if(user) {
            callback(null, user);
        } else {
                callback("User not found...", null)
            }
        }, 5000);
}

//callback function
function handleUserData(error, user) {
    if(error) {
        console.log('Error: ', error)
    }
    else {
        console.log('User: ',user)
    }
}

fetchUserData(1, handleUserData)
fetchUserData(3, handleUserData)
