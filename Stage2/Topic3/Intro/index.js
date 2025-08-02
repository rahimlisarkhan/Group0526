


// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (var i = 0; i < numbers.length; i++) {
//     var el = numbers[i];

//     console.log("El", el);
// }



// for (var fruit of fruits) {
//     console.log("Fruit", fruit);
// }



// for (var student of students) {
//     console.log("Student", student);
// }


// function sayHello(arg1, arg2) {

//     var result = arg1 + arg2;
//     console.log("Result:", result);

// }

// // sayHello(5, 10);

// sayHello(5, 10);

// sayHello(15, 20);
// sayHello(25, 30);

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var fruits = ["apple", "banana", "cherry", "date"];
var students = ["Alice", "Bob", "Charlie", "David"];


// DRY - Don't Repeat Yourself
function showElements(arr){
    console.log("========");
    for (var i = 0; i < arr.length; i++) {
        var el = arr[i];

        console.log("El", el);
    }
    console.log("========");
    
}

showElements(numbers);
showElements(fruits);
showElements(students);