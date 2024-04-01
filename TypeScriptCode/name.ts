console.log("Hello TypeScript !!");

// .ts --> type script
// tsc --> typeScript compiler
// .js --> JavaScript
// .ts --> tsc (TypeScript compiler) --> .js --> Can be ran on --> JavaScript Runtime Enviornment: Browser, NodeJS, App


// const user = {
//     firstName: "Tom",
//     age: 30
// }

// console.log(user.city)


//TypeScript is a statically typed language
//Type Annotations
//Type Inference

let firstName5: string = "Naveen"
let age123: number = 30
let isActive: boolean = true


let name7: string = "Harish"
name7 = 50;
name7 = true;

let fname: string; // Type Annotations
fname = 50
fname = false

let test = "JavaScript"  //type = string will be decided in Compile Time

test = 30
test = true

let billAmount = 6000 //type = number -- CT --> Type Inference

let isUserActive: boolean = true;
isUserActive = 40
isUserActive = "Harish"


// isActive = 32 

//null and undefined

let city: null = null
let country: undefined = undefined

