var a = 10;
function test() {
    var b = 20;
    console.log(b)
}
console.log(a)
test()

var browser = 'Chrome'
var browser = 'Firefox'
browser = "edge"

console.log(browser)

var g;
console.log(g) //undefined
g = "Hello World"
console.log(g)


//issue with var

flag = "hey naveen"
var n=5;
if(n<7) {
    flag = "hey tom"
}
console.log(flag)

//let
//scoped within blocks

let m = "hey harish"
//let m = "variable"
let num=5;
if(num>3) {
    let msg = "There is a new message"
    console.log(msg)
}

//console.log(msg)
console.log(m)

let len = 5;
len = 7;
console.log(len)

//const
const mg = "hey hari"
//mg = "hey Tom"
console.log(mg)

const days = 7;
//days = 10;
console.log(100 * days)

const con = 31;
console.log(con)
