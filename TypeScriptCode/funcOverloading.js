// TypeScript provides the concept of function overloading
// You can have multiple functions
// 1. with the same name
// 2. but different parameter types and return types
// 3. However, the number of parameters should be same.
//need to implement the above functions
function add(a, b) {
    return a + b;
}
var S1 = add('Hello', 'World');
var S2 = add(10, 20);
var S3 = add(true, false);
console.log(S1);
console.log(S2);
console.log(S3);
