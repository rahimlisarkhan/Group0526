



// const myObj = {
//     fullname: "John",
//     age: 30,
//     city: "New York",


//     // getInfo: function() {
//     //     console.log("this ?", this);// WINDOW or Obj ?
//     //     console.log("Name:", this.name); // John
//     //     console.log("Age:", this.age); // 30
//     //     console.log("Position:", this.position); // New York

//     //     var thisData = this;

//     //     function innerFunction(sum, count) {
//     //         console.log("this ?", this); // WINDOW or undefined ?
//     //         console.log("thisData ?", thisData); // WINDOW or undefined ?
//     //         console.log("Name:", thisData.fullname); // John or undefined
//     //         console.log("Age:", thisData.age); // 30 or undefined
//     //         console.log("Position:", thisData.city); // New York or undefined
//     //     }

//     //     innerFunction(40, 60)

//     // },

//     // getName: function() {
//     //     console.log("Name:", this.name); // John or undefined

//     //     const innerFunction = (sum,count) => {
//     //         console.log("innerFunction this ?", this); // WINDOW or undefined ?
//     //         console.log("innerFunction sum ?", sum); // 40
//     //         console.log("innerFunction count ?", count); // 60
//     //     }

//     //     innerFunction(40, 60)
//     // },

//     // getName2: function() {
//     //     console.log("Name:", this.name); // John or undefined

//     //     const innerFunction = (sum,count) => {

//     //         console.log("innerFunction this ?", this); // WINDOW or undefined ?
//     //         console.log("innerFunction sum ?", sum); // 5
//     //         console.log("innerFunction count ?", count); // 10
//     //     }

//     //     innerFunction(5, 10)
//     // }
// }


// const myObj2 = {
//     position: "Developer",
//     company: "Tech Corp",
//     city: "San Francisco",
//     "street-country": "USA"
// }



// console.log(myObj2.company);


// Object.freeze(myObj2);

// myObj2.city = "Los Angeles";
// myObj2["city"] = "Los Angeles";


// console.log("myObj2",myObj2["street-country"]);


// const obj = {
//     ...myObj,
//     ...myObj2
// }

// Object.assign(myObj, myObj2);

// const a = myObj2.hasOwnProperty("position");

// console.log(a);


// console.log("myObj",myObj);
// console.log("myObj2",myObj2);
// console.log("obj",obj);




// const a = [1,2,3]
// const a = new Array(1,2,3)


// const a = Object.values(myObj)
// const a = Object.keys(myObj)
// const a = Object.entries(myObj)

// console.log(a);





// myObj.getInfo()
// myObj.getName()



// Destructuring
// const list = ["John Doe",25,"New York", "USA"]

// const fullName = list[0]
// const age = list[1]
// const city = list[2]
// const country = list[3]

// const [fullName, age, city,country] = list // Destructuring
// const [fullName, age, city,country] = ["John Doe",25,"New York", "USA"] // Destructuring

// console.log(fullName);
// console.log(age);
// console.log(city);
// console.log(country);


// const [x,y] = [1,2]

// console.log(x); // 1
// console.log(y); // 2


// const myObj3 = {
//     fullname: "Jane Doe",
//     age: 28,
//     city: "Los Angeles",
//     country: "USA",
//     // position: "Developer"
// }


// myObj3.sayHello = function() {
//     console.log("Hello, my name is " + this.fullname);
// }

// myObj3.sayHello();

// const list = [2,3,4,5,6]

// console.log("myObj3",myObj3);
// console.log("list",list);



// // const { fullname, age, city, country } = myObj3;
// const { fullname:adi, age, city, country, position = "Employee" } = myObj3;

// console.log("position",position);


// // const adi = myObj3.fullname
// // console.log(myObj3.fullname);
// console.log(adi);
// console.log(age);
// console.log(city);
// console.log(country);

// console.log("position",position);



// function A(num1 = 0){

//     console.log("num1",num1);
    
    
//     const result = num1 * 2
//     console.log("result",result);
//     return result
// }


// A(15)



Array.prototype.myShow = function() {
    console.log("This is my custom method",this.length);
    return this;
}

const list = [1, 2, 3, 4, 5]

list.myShow()


