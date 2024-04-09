var names = ["Tom", "Sanju", "Ravi", "Peter"];
console.log(names[0]);
// using generics
var empName = ["Tom", "Sanju", "Ravi", "Peter"];
var empID = [1, 2, 3, 4, 5, 6, 7];
var empInfo = [2341, "Tom", true, null, undefined];
// multi-type array
var multiTypeArray = ["Tom", 1232234, "true"];
//multi-type array using generics
var multiTypeArrayGenerics = ["Jack", true, false];
// first array declaration and then initilization
var users;
users = ["Tom", "Ram", "Sam"];
// 1. index based loop
var newEmp;
newEmp = ["Tom", "Harish", "Peter", "Sam"];
for (var i = 0; i < newEmp.length; i++) {
    console.log(newEmp[i]);
}
// 2. for in loop
console.log("____________________________")
var e;
for (e in newEmp) {
    console.log(e +" "+newEmp[e]);
}
