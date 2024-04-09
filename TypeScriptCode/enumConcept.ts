//Enum : Enumerator: data type : hold the set of constants
//numeric
//string
//heterogenous

enum Browser {
    FireFox, //it will already be in +1 value considering the value assigned for the previous value, Edge 10
    Edge,
    Safari = getBrowserName("chrome") * 5,
    Chrome = getBrowserName("chrome")
}

function getBrowserName(browserName: string): number {
    if(browserName === "chrome") {
        return 115
    }
    return -1
}

// console.log(Browser[0])
console.log(Browser.Chrome);
console.log(Browser.Safari);
// console.log(Browser);

// console.log(Browser.Safari);


// Enum: string

enum Enviornments {
    DEV = "dev",
    TEST = "test",
    STAGE = "stage",
    PROD = "prod"
}

console.log(Enviornments);
console.log(Enviornments.DEV);
console.log(Enviornments["STAGE"]);

// heterogenous

enum Status {
    ACTIVE = "active",
    DEACTIVE = 1,
    PENDING
}

console.log(Status);
console.log(Status.ACTIVE);
console.log(Status.DEACTIVE);
console.log(Status.PENDING);