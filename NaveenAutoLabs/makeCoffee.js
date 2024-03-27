//JavaScript program to illustrate callbackhell and arrow function

//Start the coffee machine - 2 secs
//Gring coffee beans - 1 sec
//Boil water - 1.5 secs
//Pour boiling water into a cup - 0.5 sec
//Add ground coffee to the cup - 0.5 sec
//Stir the coffee -- 0.3 secs
//Enjoy your coffee !

function startCoffeeMachine(callback) {
    console.log("Startig coffee machine...")
    setTimeout(function () {
        console.log("Coffee machine is ready")
        callback("coffee machine is ready ?")
    }, 2000);
}

function grindCoffeeBeans(callback) {
    console.log("Grinding coffee beans...")
    setTimeout(function () {
        console.log("Coffee beans are ground");
        callback("Ground coffee");
    }, 1000)
}

function boilWater(callback) {
    console.log("Boiling Water...")
    setTimeout(function () {
        console.log("Water is boiled")
    }, 1500)
}

function pourBoilingWaterIntoCup (boiledWater, callback) {
    console.log("Pouring Boiled water into a cup")
    setTimeout(function () {
        console.log("Boiling water is in the cup")
        callback(boiledWater ," in Cup")
    }, 500)
}

function addCoffeeToCup(groundCoffee, callback) {
    console.log("Adding ground coffee to the cup...")
    setTimeout(function () {
        console.log("Coffee is added to the cup")
        callback("coffee is added to ",groundCoffee)
    }, 500);
}

function stirCoffee(coffeeInCup, callback) {
    console.log("Strring the coffee")
    setTimeout(function () {
        console.log("Coffee is stirred")
        callback("Enjoyable "+coffeeInCup)
    }, 300)
}

function enjoyCoffee(finalCoffee) {
    console.log("Enjoying my "+finalCoffee)
}

//Start the coffee machine
//Grind coffee beans
//Boil water
//Pour boiling water into a cup
//Add ground coffe to the cup
//Stir the coffee
//Enjoy your coffee


//callbackhell

// startCoffeeMachine( function (coffeeMachineStatus) {
//     grindCoffeeBeans(function (groundCoffee) {
//         boilWater(function (boiledWater) {
//             pourBoilingWaterIntoCup(boiledWater, function (waterInCup) {
//                 addCoffeeToCup(groundCoffee, function (coffeeInCup) {
//                     stirCoffee(coffeeInCup, function (finalCoffee){
//                         enjoyCoffee(finalCoffee);
//                     })
//                 })
//             })
//         })
//     })
// }) 

//Using Arrow function
console.log()
console.log("Using Arrow Functions")
startCoffeeMachine( (coffeeMachineStatus) => {
    grindCoffeeBeans( (groundCoffee) => {
        boilWater( (boiledWater) => {
            pourBoilingWaterIntoCup(boiledWater,  (waterInCup) => {
                addCoffeeToCup(groundCoffee, (coffeeInCup) => {
                    stirCoffee(coffeeInCup, (finalCoffee) => {
                        enjoyCoffee(finalCoffee);
                    })
                })
            })
        })
    })
}) 