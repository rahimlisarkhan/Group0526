

// let speed = 10
// let make = "Toyota"



// function sayHello(){
//     console.log("Hello World", speed, make);
// }


// const gulayMath = {
//     min: 0,
//     max: 100,
//     speed: 11,
//     name: "Gulay",


//     showName: function(){
//         console.log("Name:", this.name);
//     },

//     increment: function(){
//         this.min += this.speed;
//         console.log(this.min);
//     }
// }



// const javadMath = {
//     min: 0,
//     max: 50,
//     speed: 12,
//     name: "Javad",


//     showName: function(){
//         console.log("Name:", this.name, this.max);
//     },

//     increment: function(){
//         this.min += this.speed;
//         console.log(this.min);
//     }
// }


// console.log(gulayMath);
// console.log(javadMath);






// let myCar= {}

// myCar.make = "Toyota";

// myCar.sayHello = function(){
//     console.log("Hello from", this.make);
// }

// console.log(myCar);

// myCar.model = "Corolla";
// myCar.year = 2020;

// console.log(myCar);



function Car(make, model, year){

    this.make = make;
    this.model = model;
    this.year = year;


    this.sayHello = function(){
        console.log("Hello from", this.make, this.model, this.year);
    }

    this.incrementYear = function(){
        this.year += 1;
        console.log(this.year);
    }
}

 const myCar = new Car("Toyota", "Corolla", 2020);
 const myCar2 = new Car("Honda", "Civic", 2021);

 console.log(myCar);
 console.log(myCar2);

myCar.sayHello();
myCar2.sayHello();

    // myCar.incrementYear();
    // myCar2.incrementYear();
