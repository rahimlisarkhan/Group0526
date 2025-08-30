



const myObj = {
    fullname: "John",
    age: 30,
    city: "New York",


    getInfo: function() {
        // console.log("this ?", this);// WINDOW or Obj ?
        // console.log("Name:", this.name); // John
        // console.log("Age:", this.age); // 30
        // console.log("Position:", this.position); // New York

        var thisData = this;

        function innerFunction(sum, count) {
            console.log("this ?", this); // WINDOW or undefined ?
            console.log("thisData ?", thisData); // WINDOW or undefined ?
            console.log("Name:", thisData.fullname); // John or undefined
            console.log("Age:", thisData.age); // 30 or undefined
            console.log("Position:", thisData.city); // New York or undefined
        }

        innerFunction(40, 60)

    },

    getName: function() {
        console.log("Name:", this.name); // John or undefined

        const innerFunction = (sum,count) => {
            console.log("innerFunction this ?", this); // WINDOW or undefined ?
            console.log("innerFunction sum ?", sum); // 40
            console.log("innerFunction count ?", count); // 60
        }

        innerFunction(40, 60)
    },

    getName: function() {
        console.log("Name:", this.name); // John or undefined

        const innerFunction = (sum,count) => {

            console.log("innerFunction this ?", this); // WINDOW or undefined ?
            console.log("innerFunction sum ?", sum); // 5
            console.log("innerFunction count ?", count); // 10
        }

        innerFunction(5, 10)
    }
}



// myObj.getInfo()
myObj.getName()