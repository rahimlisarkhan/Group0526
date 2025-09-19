// //OOP - Object-Oriented Programming

// // ========================================
// // 1. ABSTRACTION
// // ========================================
// // Hiding complex implementation details and showing only essential features

// // class Car {

// //     isEngineOn = false;

// //     constructor(brand, model) {
// //         this.brand = brand;
// //         this.model = model;
// //     }
    
// //     // Simple interface - user doesn't need to know how engine starts
// //     start() {
// //         this._checkFuel();
// //         this._igniteEngine();
// //         this._warmUp();
// //         this.isEngineOn = true;
// //         console.log(`${this.brand} ${this.model} started!`);
// //     }
    
// //     // Hidden complex implementation
// //     _checkFuel() {
// //         console.log("Checking fuel level...");
// //     }
    
// //     _igniteEngine() {
// //         console.log("Igniting engine...");
// //     }
    
// //     _warmUp() {
// //         console.log("Warming up engine...");
// //     }
// // }

// // console.log("=== ABSTRACTION ===");
// // const myCar = new Car("Toyota", "Camry");

// // console.log(myCar);


// // myCar.start(); // Simple interface hides complexity

// // ========================================
// // 2. ENCAPSULATION
// // ========================================
// // Bundling data and methods together, hiding internal state

// // class BankAccount {
// //     #balance; // Private field (ES2022)
// //     #pin;
// //     #username = "User"

    
// //     constructor(initialBalance, pin) {
// //         this.#balance = initialBalance;
// //         this.#pin = pin;
// //         this.accountNumber = Math.floor(Math.random() * 1000000);
// //     }
    
// //     // Public methods to interact with private data
// //     deposit(amount) {
// //         if (amount > 0) {
// //             this.#balance += amount;
// //             console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
// //         }
// //     }
    
// //     withdraw(amount, pin) {
// //         if (this.#validatePin(pin) && amount <= this.#balance) {
// //             this.#balance -= amount;
// //             console.log(`Withdrawn: $${amount}. Remaining balance: $${this.#balance}`);
// //         } else {
// //             console.log("Invalid PIN or insufficient funds");
// //         }
// //     }
    
// //     getBalance(pin) {
// //         if (this.#validatePin(pin)) {
// //             return this.#balance;
// //         }
// //         return "Access denied";
// //     }


// //    set balance(amount) {
// //         // if (this.#validatePin(pin)) {
// //         //     return this.#balance;
// //         // }

// //         if(this.#balance >= 0){
// //             this.#balance = amount;
// //         }
// //     }


// //     get username() {
// //         return this.#username;
// //     }

// //     set username(newUsername) {
// //         if (newUsername.length >= 3) {
// //             this.#username = newUsername;
// //         } else {
// //             console.log("Username must be at least 3 characters long");
// //         }
// //     }

    
// //     // Private method
// //     #validatePin(pin) {
// //         return pin === this.#pin;
// //     }
// // }

// // const nurlanBankAccount = new BankAccount(1000, 9594);

// // nurlanBankAccount.balance = 5000;

// // console.log("nurlanBankAccount",nurlanBankAccount);


// // console.log("Username:", nurlanBankAccount.username);

// // nurlanBankAccount.username = "Nurlan";






// // nurlanBankAccount.deposit(500);

// // nurlanBankAccount.withdraw(200, 9594);
// // console.log("nurlanBankAccount",nurlanBankAccount);

// // console.log("Balance:", nurlanBankAccount.getBalance(9594));
// // console.log(nurlanBankAccount.#balance); // Error: Private field '#balance' must be declared in an enclosing class

// // console.log("\n=== ENCAPSULATION ===");
// // const account = new BankAccount(1000, 1234);
// // account.deposit(500);
// // account.withdraw(200, 1234);
// // console.log("Balance:", account.getBalance(1234));
// // // console.log(account.#balance); // Error: Private field '#balance' must be declared in an enclosing class

// // // ========================================
// // // 3. INHERITANCE
// // // ========================================
// // // Creating new classes based on existing classes
// class Animal {
//     constructor(name, species) {
//         this.name = name;
//         this.species = species;
//     }
    
//     makeSound() {
//         console.log(`${this.name} makes a sound`);
//     }
    
//     eat() {
//         console.log(`${this.name} is eating`);
//     }
// }

// const animal = new Animal("Mestan", "Cat");


// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name, "Canine"); // Call parent constructor
//         this.breed = breed;
//     }
    
//     // Override parent method
//     makeSound() {
//         console.log(`${this.name} barks: Woof! Woof!`);
//     }
    
//     // // New method specific to Dog
//     fetch() {
//         super.eat()
//         console.log(`${this.name} is fetching the ball`);
//     }
// }


// const dog = new Dog("Rex", "German Shepherd");

// // dog.eat();
// dog.makeSound();
// dog.fetch();




// // class Cat extends Animal {
// //     constructor(name, color) {
// //         super(name, "Feline");
// //         this.color = color;
// //     }
    
// //     makeSound() {
// //         console.log(`${this.name} meows: Meow! Meow!`);
// //     }
    
// //     climb() {
// //         console.log(`${this.name} is climbing a tree`);
// //     }
// // }

// // console.log("\n=== INHERITANCE ===");
// // const dog = new Dog("Buddy", "Golden Retriever");
// // const cat = new Cat("Whiskers", "Orange");

// // dog.makeSound(); // Overridden method
// // dog.eat();       // Inherited method
// // dog.fetch();     // Dog-specific method

// // cat.makeSound(); // Overridden method
// // cat.eat();       // Inherited method
// // cat.climb();     // Cat-specific method

// // // ========================================
// // // 4. POLYMORPHISM
// // // ========================================
// // // Same interface, different implementations

// class Shape {
//     constructor(name) {
//         this.name = name;
//     }
    
//     // Method to be overridden
//     calculateArea() {
//         return 0;
//     }
    
//     // Method to be overridden
//     draw() {
//         console.log(`Drawing a ${this.name}`);
//     }
// }

// class Circle extends Shape {
//     constructor(radius) {
//         super("Circle");
//         this.radius = radius;
//     }
    
//     calculateArea() {
//         return Math.PI * this.radius * this.radius;
//     }
    
//     draw() {
//         console.log(`Drawing a circle with radius ${this.radius}`);
//     }
// }

// class Rectangle extends Shape {
//     constructor(width, height) {
//         super("Rectangle");
//         this.width = width;
//         this.height = height;
//     }
    
//     calculateArea() {
//         return this.width * this.height;
//     }
    
//     draw() {
//         console.log(`Drawing a rectangle ${this.width}x${this.height}`);
//     }
// }

// class Triangle extends Shape {
//     constructor(base, height) {
//         super("Triangle");
//         this.base = base;
//         this.height = height;
//     }
    
//     calculateArea() {
//         return 0.5 * this.base * this.height;
//     }
    
//     draw() {
//         console.log(`Drawing a triangle with base ${this.base} and height ${this.height}`);
//     }
// }

// // console.log("\n=== POLYMORPHISM ===");
// // Array of different shapes - same interface, different behavior
// const shapes = [
//     new Circle(5),
//     new Rectangle(4, 6),
//     new Triangle(3, 8)
// ];

// // Polymorphic behavior - same method call, different implementations
// shapes.forEach(shape => {
//     shape.draw();
//     console.log(`Area: ${shape.calculateArea().toFixed(2)}`);
//     console.log("---");
// });

// // Function that works with any shape (polymorphism)
// function processShape(shape) {
//     console.log(`Processing ${shape.name}:`);
//     shape.draw();
//     console.log(`Area: ${shape.calculateArea().toFixed(2)}`);
// }

// // console.log("Using polymorphic function:");
// // processShape(new Circle(3));
// // processShape(new Rectangle(2, 5));







// // const textCompiler = new TextUtils();


// // class MyTextUtils extends TextUtils{
// //     constructor(){
// //         super();
// //     }

// //     reverseString(str){
// //         return str.split("").reverse().join("");
// //     }
// // }

// // const myTextUtils = new MyTextUtils();

// // console.log(myTextUtils.reverseString("hello")); // olleh


// // textCompiler.capitalize("hello world") // Hello world


// // const textUtils = new TextUtils();




// // function A(text){
// //     const newText = textUtils.removeExtraSpaces(text)
// //     return newText + "100"

// // }
