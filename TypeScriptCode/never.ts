// TypeScript program to illustrate never concept

let sum: never;

function throwError(mesg: string): never {
    // return;
    throw new Error(mesg)
}

// throwError("some error")

function infinteloop(): never {
    while(true) {
        console.log("Welcome to Taj Hotel");
    }
}

infinteloop()