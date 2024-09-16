


// Object method context

const Person = {
    name: 'John',
    sayHello: function() {
        console.log(this.name);
    }
};

Person.sayHello();

console.log("====================");

// Constructor Function Context

function Men(name) {
    this.name = name;
}

const m = new Men('Robert')
console.log(m.name);