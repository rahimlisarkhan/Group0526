


class Car {

    speed = 0;
    isNew = true;

    constructor(make, model, year) {

        console.log("constructor working...");

        this.make = make;
        this.model = model;
        this.year = year;

    }

    sayHello() {
        console.log("sayHello working...");

        console.log("Hello from", this.make, this.model, this.year);
    }

    incrementYear() {
        console.log("incrementYear working...");

        this.year += 1;
        console.log(this.year);
    }
}



const myCar = new Car("Toyota", "Corolla", 2020)// return object;
const myCar2 = new Car("Honda", "Civic", 2021)// return object;
const myCar3 = new Car("Ford", "Mustang", 2022)// return object;


console.log(myCar);
console.log(myCar2);
console.log(myCar3);


// myCar.incrementYear();
// console.log(myCar);
