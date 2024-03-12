// #10 Various ways of creating objects in JavaScript

//1. Object Literals: {}
//2. Constructor Function
//3. Class Style
//4. Object.create(): with some prototype object.
//5. Using Factory Function: returns an object.

//1. Object Literals: {}
const user = {
    name: 'michael',
    age: 25,
    country: 'USA',
    Occupation: 'Engineer'
};

console.log(user.name);
console.log(user.age);
console.log(user.country);
console.log(user.Occupation);

//2. Constructor Function:

function Car(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
};

const c1 = new Car('BMW', '520d', 10000);
const c2 = new Car('Audi', 'Q7', 15000);

console.log(c1.brand+ " " + c1.model+ " " +c1.price);
console.log(c2.brand+ " "+c2.model+ " " +c2.price);

//3. Class Style:

class Customer{
    constructor(name, product) {
        this.name = name; //instance variables
        this.product = product;
    }

    addToCart() {
        console.log(`${this.product} added to Cart`);
    }

}

//instance of the class:

const cust1 = new Customer('Naveen', 'Apple Mac Book Pro');
console.log(cust1.name);
console.log(cust1.product);
cust1.addToCart();

//4. Object.create(); with some prototype object.

const employeeProtoType = {
    printInfo: function() {
        console.log(`hello, employee is ${this.name}`);
    }
};


const e1 = Object.create(employeeProtoType);
e1.name = 'Tom';
e1.printInfo();


//5. Using Factory Functions: returns and Object.

function createDepartment(deptName, hod) {
    return {
        deptName: deptName,
        hod: hod,
        getDepartmentInfo: function() {
            console.log(`hello, dept name is ${this.deptName} and HOD is ${this.hod}`);
        }
    }
}

const dept1 = createDepartment('Physics', 'H C Verma');
const dept2 = createDepartment('Maths', 'R C Sharma');

console.log('Department is '+dept1.deptName+ ' HOD is ' +dept1.hod);
console.log('Department is '+dept2.deptName+ ' HOD is ' +dept2.hod);