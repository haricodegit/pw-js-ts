//JavaScript program to pint the list of Even number in a range
let num = 20;
evennumbers(num);
oddnumber(num);

function evennumbers(num) {
    for(let i=1; i<=num; i++) {
        if(i % 2 ==  0) {
            console.log(i);
        }
    }
}

function oddnumber(num) {
    for(let j=1; j<=num; j++) {
        if(j % 2 != 0) {
            console.log(j)
        }
    }
}
