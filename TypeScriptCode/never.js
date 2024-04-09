// TypeScript program to illustrate never concept
var sum;
function throwError(mesg) {
    // return;
    throw new Error(mesg);
}
// throwError("some error")
function infinteloop() {
    while (true) {
        console.log("Welcome to Taj Hotel");
    }
}
infinteloop();
