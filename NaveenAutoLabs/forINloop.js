//JavaScript program to illustrate for in loop
console.log('JavaScript program to illustrate for IN loop');

const person = {fname: 'John', lname: 'Doe', Age: 25, phone: 9988776655}
let req = 'fname'
console.log('Requested details for '+req+ ' : ' +getPersonDetails(person, req));

function getPersonDetails(person, req) {
    let text = "";
    for(let x in person) {
        if(x == req) {
            text = person[x];
            return text;
        }
    
    }
}

console.log();
console.log('another way of For in loop')

//Defining an object in Javascript

const user = {
    username: 'Peter', 
    lastname: 'Jin', 
    age: 30, 
    city: 'New York'}
let checkkey = 'lastname';
//let element = '';

    for (const key1 in user) {
        if (user.hasOwnProperty.call(user, key1)) {
            const element1 = user[key1];
            console.log(key1+" is "+element1);
        }
    }

console.log()
    for (const key in user) {
        if (key == checkkey) {
            const element = user[key];
            console.log(key+ ' is '+element)
        }
    }
