

let names: string[] = ["Tom", "Sanju", "Ravi", "Peter"]
console.log(names[0])

// using generics
let empName: Array<string> = ["Tom", "Sanju", "Ravi", "Peter"];
let empID: Array<number> = [1,2,3,4,5,6,7]
let empInfo: Array<any> = [2341, "Tom", true, null, undefined]

// multi-type array
let multiTypeArray: (string | number)[] = ["Tom", 1232234, "true"];

//multi-type array using generics
let multiTypeArrayGenerics: Array<string | boolean> = ["Jack", true, false]

// first array declaration and then initilization

let users: Array<string>;
users = ["Tom", "Ram", "Sam"]

// 1. index based loop
let newEmp: Array<string>;
newEmp = ["Tom", "Harish", "Peter", "Sam"]
for(let i =0; i<newEmp.length;i++) {
    console.log(newEmp[i])
}

// 2. for in loop
let e: string;
for(e in newEmp) {
    console.log(newEmp[e])
}



