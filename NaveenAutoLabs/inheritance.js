//JavaScript program to illustrate inheritance concepts in JavaScript

//Multi-level inheritance

class Automobile {
    constructor(chasisNumber) {
        this.chasisNumber = chasisNumber;
    }

    useAerodynamics() {
        console.log('using Aero Dynamics...', this.model);
    }
}

class Vehicle extends Automobile {
    constructor(make, model, year) {
        super(8797977423);
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getInfo() {
        return `${this.make} , ${this.model} , ${this.year}`
    }

    startEngine() {
        console.log('Starting Engine... of ', this.model);
    }

    stopEngine() {
        console.log('Stoping Engine... of ', this.model);
    }
}

//creating child-class or sub-class

class Car extends Vehicle {
    constructor(make, model, year, fuelType) {
        super(make, model, year);
        this.fuelType = fuelType;
    }

    driveCar() {
        console.log('Driving the Car '+this.model+ ' of FuelType '+this.fuelType);
    }
}

class Truck extends Vehicle {
    constructor(make, model, year, loadingCapacity) {
        super(make, model, year);
        this.loadingCapacity = loadingCapacity;
    }

    driveTruck() {
        console.log('Driving Truck '+this.model+ ' with loading Capacity of '+this.loadingCapacity);
    }
}

//creating objects or instance with new keyword

const car = new Car("Honda", "Civic", 2023, "Petrol");
const truck = new Truck("Tata", "Eicher", 2020, 5050);

car.startEngine();
console.log(car.getInfo());

truck.startEngine();
console.log(truck.getInfo());

car.driveCar();
truck.driveTruck();


//Its not possible to inherit sibling class even though they share same prototype from main Parent/Super class
//car.driveTruck();

console.log(car.chasisNumber);
car.useAerodynamics();

console.log(truck.chasisNumber);
truck.useAerodynamics();