// let i =0

// while(i < 10) {
//     setTimeout(fiveMin, 60000)
// }


// function fiveMin() {
//     console.log('function called after 1 mins');
// }


// const myTimeout = setTimeout(myGreeting, 5000);

// function myStopFunction() {
//   clearTimeout(myTimeout);
// }


function alertFunc() {
  console.log("Hello!");
}

let i = 0
let timeout;

function myFunction() {
timeout = setTimeout(alertFunc, 5000);
console.log('timeout',timeout);
}

myFunction()
// while(i < 10) {
//     console.log('inside while loop ?');
//     // console.log(i);
//     let y = 1
//     y++
//     let z = 5
//     z++
// }