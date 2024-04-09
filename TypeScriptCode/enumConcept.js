//Enum : Enumerator: data type : hold the set of constants
//numeric
//string
//heterogenous
var Browser;
(function (Browser) {
    Browser[Browser["FireFox"] = 0] = "FireFox";
    Browser[Browser["Edge"] = 1] = "Edge";
    Browser[Browser["Safari"] = getBrowserName("chrome") * 5] = "Safari";
    Browser[Browser["Chrome"] = getBrowserName("chrome")] = "Chrome";
})(Browser || (Browser = {}));
function getBrowserName(browserName) {
    if (browserName === "chrome") {
        return 115;
    }
    return -1;
}
// console.log(Browser[0])
console.log(Browser.Chrome);
console.log(Browser.Safari);
// console.log(Browser);
// console.log(Browser.Safari);
// Enum: string
var Enviornments;
(function (Enviornments) {
    Enviornments["DEV"] = "dev";
    Enviornments["TEST"] = "test";
    Enviornments["STAGE"] = "stage";
    Enviornments["PROD"] = "prod";
})(Enviornments || (Enviornments = {}));
console.log(Enviornments);
console.log(Enviornments.DEV);
console.log(Enviornments["STAGE"]);
// heterogenous
var Status;
(function (Status) {
    Status["ACTIVE"] = "active";
    Status[Status["DEACTIVE"] = 1] = "DEACTIVE";
    Status[Status["PENDING"] = 2] = "PENDING";
})(Status || (Status = {}));
console.log(Status);
console.log(Status.ACTIVE);
console.log(Status.DEACTIVE);
console.log(Status.PENDING);
