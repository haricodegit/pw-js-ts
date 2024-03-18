//Java script program to illustrate static variable and methods in a class

class Car {
    static wheels = 4;
    constructor(name, model, price ){
        this.name = name;
        this.model = model;
        this.price = price;
    }

    static stop() {
        console.log('Stopping Car')
    }

    driving() {
        console.log('Driving ', this.name, 'Car')
    }

    getCarInfo() {
        return `${this.name}, ${this.model}, ${this.price}`
    }
}

const c1 = new Car('Honda', 2023, 50)

c1.driving();
//c1.stop(); //Error - TypeError: c1.stop is not a function
Car.stop()
console.log(c1.wheels)
console.log(Car.wheels)
//Car.driving(); //Error -- TypeError: Car.driving is not a function
console.log(c1.getCarInfo())

