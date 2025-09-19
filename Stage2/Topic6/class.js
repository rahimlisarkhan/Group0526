


// class Car {

//     speed = 0;
//     isNew = true;

//     constructor(make, model, year) {

//         console.log("constructor working...");

//         this.make = make;
//         this.model = model;
//         this.year = year;

//     }

//     sayHello() {
//         console.log("sayHello working...");

//         console.log("Hello from", this.make, this.model, this.year);
//     }

//     incrementYear() {
//         console.log("incrementYear working...");

//         this.year += 1;
//         console.log(this.year);
//     }
// }



// const myCar = new Car("Toyota", "Corolla", 2020)// return object;
// const myCar2 = new Car("Honda", "Civic", 2021)// return object;
// const myCar3 = new Car("Ford", "Mustang", 2022)// return object;


// console.log(myCar);
// console.log(myCar2);
// console.log(myCar3);


// // myCar.incrementYear();
// // console.log(myCar);


const depositButton = document.getElementById("depositButton");
const withdrawButton = document.getElementById("withdrawButton");
const balanceButton = document.getElementById("balanceButton");
const accountInfoButton = document.getElementById("accountInfoButton");

class BankAccount{
    balance = 0;

    constructor(accountNumber, accountHolder){
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
    }

    deposit(amount){
        this.balance += amount;
        alert(`Deposited ${amount}. New balance is ${this.balance}`);
    }

    withdraw(amount){
        if(this.balance >= amount){
            this.balance -= amount;
            alert(`Withdrew ${amount}. New balance is ${this.balance}`);
        } else {
            alert("Insufficient funds");
        }
    }

    getBalance(){
        alert(`Current balance is ${this.balance}`);


    }

    getAccountInfo(){

        const pin = prompt("Enter your PIN:");
        if (this._checkPin(pin) === false) {
            alert("Invalid PIN");
            return;
        }

        const result = `Account Number: ${this.accountNumber}, Account Holder: ${this.accountHolder}, Balance: ${this.balance}`;
        alert(result);
    }

    _checkPin(pin){
        // Private method (convention)
        return pin === "1234"; // Example PIN check
    }
}

const metanetBankAccount = new BankAccount("123456789", "Metanet");
// const gulayBankAccount = new BankAccount("987654321", "Gulay");


depositButton.addEventListener("click", () => {

    const amount = parseFloat(prompt("Enter amount to deposit:"));

    metanetBankAccount.deposit(amount);
});

withdrawButton.addEventListener("click", () => {
    const amount = parseFloat(prompt("Enter amount to withdraw:"));
    metanetBankAccount.withdraw(amount);
});

balanceButton.addEventListener("click", () => {
    metanetBankAccount.getBalance();
});

accountInfoButton.addEventListener("click", () => {
    metanetBankAccount.getAccountInfo();
});



// metanetBankAccount.deposit(1000);
// metanetBankAccount.withdraw(200);
// console.log(metanetBankAccount);


// console.log(gulayBankAccount);


