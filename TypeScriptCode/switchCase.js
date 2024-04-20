// TypeScript program to illustrate switchCase over If else if condition usage
// let day: string = "Saturday1"
// let dayOfWeek: string;
// if(day === "Sunday") {
//     dayOfWeek = "Sunday";
// } else if(day === "Monday") {
//     dayOfWeek = "Monday";
// } else if(day === "Tuesday") {
//     dayOfWeek = "Tuesday";
// } else if(day === "Wednesday") {
//     dayOfWeek = "Wednesday";
// } else if(day === "Thursday") {
//     dayOfWeek = "Thursday";
// } else if(day === "Friday") {
//     dayOfWeek = "Friday";
// } else if(day === "Saturday") {
//     dayOfWeek = "Saturday";
// } else {
//     dayOfWeek = "invalid input";
// }
// console.log(dayOfWeek);
// switch case over if else if condition
var myday = "SUNday";
switch (myday.toLowerCase()) {
    case "sunday":
        console.log("Sunday");
        break;
    case "monday":
        console.log("Monday");
        break;
    case "tuesday":
        console.log("Tuesday");
        break;
    case "wednesday":
        console.log("Wednesday");
        break;
    case "thursday":
        console.log("Thursday");
        break;
    case "friday":
        console.log("Friday");
        break;
    case "saturday":
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Input");
        break;
}
var marks = 100000;
switch (marks) {
    case 100:
        console.log("Hundreds");
        break;
    case 1000:
        console.log("Thousands");
        break;
    case 100000:
        console.log("Lakhs");
        break;
    default:
        console.log("wrong input values");
        break;
}
// switch case with enum
var Browser;
(function (Browser) {
    Browser["FireFox"] = "firefox";
    Browser["Chrome"] = "chrome";
    Browser["Safari"] = "safari";
    Browser["Opera"] = "opera";
    Browser["Edge"] = "edge";
})(Browser || (Browser = {}));
var browserName = Browser.Edge;
switch (browserName) {
    case Browser.Chrome:
        console.log("launch Chrome");
        break;
    case Browser.FireFox:
        console.log("launch FireFox");
        break;
    case Browser.Opera:
        console.log("launch Opera");
        break;
    case Browser.Safari:
        console.log("launch Safari");
        break;
    default:
        console.log("wrong browser name was passed");
        break;
}
