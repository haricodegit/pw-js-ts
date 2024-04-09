
//TypeScript program to illustrate Union concept

let userId: (string | number);
userId = 10001
userId = "Naveen"
//userId = true

function getUserInfo(CustomerID: (string | number)) {
    if(typeof(CustomerID) === "number"){
        return CustomerID+"_number"
    }
    else if(typeof(CustomerID) === "string"){
        return CustomerID+"_string"
    }
    else {
        return "Invalid value"
    }
}

console.log(getUserInfo(10001))
console.log(getUserInfo("Harish"));