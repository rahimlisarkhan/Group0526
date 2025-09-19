


// Date.now()

const myDate = new Date();

// myDate.setFullYear(2024);



class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    static citizen(){
        console.log("Only for Azerbaijan");

        return "Azerbaijan";
    }

    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}


const value = Person.citizen();

console.log(value);



const person1 = new Person("Alice", 30);

person1.greet();