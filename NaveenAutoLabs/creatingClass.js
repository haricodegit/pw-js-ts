class Car {
    constructor(name, price, model, color) {
        this.name = name;
        this.price = price;
        this.model = model;
        this.color = color;
    }

    constructor(name) {
        this.name = name;
    }

    refueling() {
        console.log(this.name + " Car was refueled");
    }
}

const c1 = new Car("BMW", 1000, "520d", "Black");

console.log(c1.name);
console.log(c1.price);
console.log(c1.model);
console.log(c1.color);

c1.refueling();

//creating one more object for the same class blueprint

const c2 = new Car("Honda", 5000, "Civic", "White");

console.log("--------------");
console.log(c2.name);
console.log(c2.price);
console.log(c2.model);
console.log(c2.color);

c2.refueling();

const c3 = new Car("Hilux");

console.log(c3.name);

// Error message is printed for the c3 object for constructor with single parameter. -- 
//SyntaxError: A class may only have one constructor