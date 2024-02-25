//JavaScript program to illustrate for in loop
console.log('JavaScript program to illustrate for IN loop');

const person = {fname: 'John', lname: 'Doe', Age: 25, phone: 9988776655}
let req = 'phone'
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


