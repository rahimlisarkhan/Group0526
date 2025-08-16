


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

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var fruits = ["apple", "banana", "cherry", "date"];
// var students = ["Alice", "Bob", "Charlie", "David"];


// // DRY - Don't Repeat Yourself
// function showElements(arr){

//     console.log("========");
//     for (var i = 0; i < arr.length; i++) {
//         var el = arr[i];

//         console.log("El", el);
//     }
//     console.log("========");
    
// }

// showElements(numbers);
// // showElements(fruits);
// // showElements(students);


// var a = [1,2,4,5]
// var a = false
// var a = [12,3,4,5,[1,2,3]]
// var a = "John Doe"


// function A(arg1,arg2,arg3,arg4){
//     console.log("In function",arg1,arg2,arg3,arg4);
// }

// A(a,20,[30,40],false)





// function sum(num1,num2){

//     var result = num1 + num2
//     // console.log(result);

//     return result
    
// }


// var sumResult = sum(22,35)

// var list = []

// list.push(sumResult)


// console.log(list);



// function calc(num1,num2,operator){
//     var result = 0
    
//     if(operator == "sum"){
//         result = num1 + num2
//     }else if(operator == "minus"){
//         result = num1 - num2
//     }else if(operator == "vurma"){
//         result = num1 * num2
//     }else if(operator == "bolme"){
//         result = num1 / num2
//     }else{
//         console.log("Duzgun operator secmemisiniz");
//     }

//     return result

// }

// function calc(num1,num2,operator){
//     // var result = 0
    
//     var list = []

//     if(operator == "sum"){
//         list.push(100)
//         return num1 + num2
//     }else if(operator == "minus"){
//         list.push(102)
//         return num1 - num2
//     }else if(operator == "vurma"){
//         return num1 * num2
//     }else if(operator == "bolme"){
//         return num1 / num2
//     }else{
//         console.log("Duzgun operator secmemisiniz");
//     }

//     // return result
// }

// var calcResult = calc(20,5,"faizin")

// console.log(calcResult);



// var a = 10

// var list = []


// function work(){
//     a = a + 1

//     var str = `yeni deyer:${a}`

//     list.push(str)
//     // console.log(a);
//     // return a
// }


// work()
// work()
// work()

// console.log(a);
// console.log(list);


// work()
// work()
// work()
// work()

// console.log(a);





// function sum(a = 0, b = 0){

//     // if(a == undefined || b == undefined){
//     //     return 0
//     // }

//     return a + b
// }



// var result  = sum()

// console.log(result);


var list = [12,4,6,18,22,13,6]
var lis2 = [120,40,60,180,220,130,60]

function maxNum(arr){

    var sebetdekiAvakado = 0

    for(var i = 0; i < arr.length; i++){

        var avakado = arr[i] // 22

        if(sebetdekiAvakado < avakado){
            sebetdekiAvakado = avakado

        }
    }


    // console.log("sebetdekiAvakado:",sebetdekiAvakado);
    
    return sebetdekiAvakado

}


// console.log(maxNum([1,3,4,2]));



var result =  maxNum(list)
// var result2 =  maxNum(lis2)

console.log(result);
// console.log(result2);
