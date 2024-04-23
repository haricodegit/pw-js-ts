// TypeScript provides the concept of function overloading
// You can have multiple functions
// 1. with the same name
// 2. but different parameter types and return types
// 3. However, the number of parameters should be same.

// function display(a: number): void {
//     console.log(a);
// }

// function display(b: string): void {
//     console.log(b);
// }

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: boolean, b: boolean);

//need to implement the above functions

function add(a: any, b: any): any {
    return a+b;
}

let S1 = add('Hello', 'World');
let S2 = add(10, 20);
let S3 = add(true, false);

console.log(S1);
console.log(S2);
console.log(S3);