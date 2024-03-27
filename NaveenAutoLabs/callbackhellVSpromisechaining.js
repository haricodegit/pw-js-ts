//Call Back hell vs Promise chaining

const { error } = require("console")

//Start coffee beans
//Grind coffee beans
//Boil water
//Pour boiling water into cup
//Add ground coffee to the cup
//stir the coffee
//Enjoy your coffee !!

function startCoffeeMachine() {
    return new Promise((reslove) => {
        console.log('Starting the coffee machine...')
        setTimeout(() => {
            console.log('coffee machine is ready.')
            reslove('Above info passed')
        }, 2000) //2000 mili seconds -- 2 secs
    }) 
}

/**
 * forward slash '/' followed by double ** then press Enter key on keyboard
 * @returns 
 */

function grindCoffeeBeans() {
    return new Promise((reslove) => {
        console.log('Grinding coffee beans...')
        setTimeout(() => {
            console.log('Coffee beans are ground');
            reslove('ground coffee');
        }, 1000) //1000 mili seconds -- 1 sec
    })
}

function boilWater() {
    return new Promise ((reslove) => {
        console.log('Boiling water...');
        setTimeout(() => {
            console.log('water is boiled')
            reslove('boiled Water')
        }, 1500)
    })
}

function pourBoilingWaterIntoCup(boiledWater) {
    return new Promise ((reslove) => {
        console.log('Pouring boiling water inot a cup...')
        setTimeout(() => {
            console.log('Boiling water is in the cup ')
            reslove(boiledWater +' in cup')
        }, 500)
    })
}

function addCoffeeToCup(groundCoffee) {
    return new Promise((reslove) => {
        console.log('Adding ground coffee to the cup...')
        setTimeout(() => {
            console.log('Coffee is added to the cup')
            reslove('coffee is added to '+groundCoffee)
        }, 500)
    })
}

function stirCoffee(coffeeInCup){
    return new Promise ((reslove) => {
        console.log('Strring the coffee...')
        setTimeout(() => {
            console.log('Coffee is strirred')
            reslove('Enjoyable '+coffeeInCup)
        }, 300)
    })
}

function enjoyCoffee(finalCoffee) {
    console.log('Enjoying my '+finalCoffee)
}


//promise chaining

startCoffeeMachine((coffeeMachineStatus) => {
    console.log(coffeeMachineStatus)
    return grindCoffeeBeans()
})
.then((groundCoffee) => {
    console.log(groundCoffee)
    return boilWater();
})
.then((boiledWater) => {
    console.log(boiledWater)
    return pourBoilingWaterIntoCup(boiledWater)
})
.then((waterInCup) => {
    console.log(waterInCup)
    return addCoffeeToCup(waterInCup)
})
.then((coffeeInCup) => {
    console.log(coffeeInCup)
    return stirCoffee(coffeeInCup)
})
.then((finalCoffee) => {
    enjoyCoffee(finalCoffee)
})
.catch((error) => {
    console.log('Error occurred ', error)
})

