//JavaScript program to illustrate method overridding concept in JavaScript

/* Method overriding is possible in JavaScript however method overloading is not possible
methodoverloading mean methods having same names with different paramenter type and count
during the run time based on the number of parameters and datatype method will be invoked.

whereas in overriding same method names are defined in both parent and child class for the objects from 
the child class the first preference will be always given to the child class methods, if in case there is 
no method in child class then it will look for the same parent class and execute accordingly*/

class Car {
    minSpeed = 100;
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    startEngine() {
        console.log('Starting Engine of... Car')
    }

    getCarInfo() {
        return `Make ${this.make} , Model ${this.model}`
    }
}

class Audi extends Car {
    minSpeed = 200
    startEngine() {
        console.log('Starting Engine of... Audi')
    }

    autoParking() {
        console.log('AutoParking feature in Audi')
    }
}

const audi = new Audi()
const car = new Car('Toyota', 'Innovo')

audi.startEngine()
console.log(car.getCarInfo())
console.log(audi.minSpeed)
//Car.autoParking() // Error -- TypeError: Car.autoParking is not a function
audi.autoParking()