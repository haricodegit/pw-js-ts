// TypeScript program to illustrate void concept


//variables
let num: void = undefined
console.log(num);

// functions

function getInfo(mesg: string): void {
    console.log(mesg);
    return;
}

getInfo("Learning void concept is TS")