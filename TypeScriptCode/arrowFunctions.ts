// Arrow function: => fat arrow or lambda function
// Anonymous function without name
// In Java this is called as -> streams

let inform = () => {
    console.log("Pring something");
}

let typeSomething = () => {
    console.log("Type something");
}

inform()
typeSomething()


// supply parameters to the arrow functions

let addd = (a:number, b:number): number => {
    return a + b;

}


let sum:number = addd(5, 9)
console.log(sum);

let singleLine = (p: number, q: number): number => p + q;

console.log(singleLine(30, 40));


// using Class

class Person {
    firstName: string;
    age: number;

    constructor(firstName: string, age: number) {
        this.firstName = firstName;
        this.age = age;
    }

    displayPersonInfo(){
        console.log(this.firstName +" "+this.age);
    }
}

let p = new Person('Tom', 30)

p.displayPersonInfo()