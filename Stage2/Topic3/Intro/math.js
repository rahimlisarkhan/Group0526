

// console.log(Math);



// var result = Math.PI
// var result = Math.random() * 100
// var result = Math.round(5.2)
// var result = Math.ceil(5.1)
// var result = Math.pow(4,2)
// var result = Math.floor(5.9)
// var result = Math.max(12,45,3,2,33)
// var result = Math.min(12,45,3,2,33)

// Function to generate random number between min and max (inclusive)
function randomBetweenNumber(min, max) {

    var result = Math.random() * (max - min + 1)

    console.log("result",result);

    var result2 = Math.floor(result)

    console.log(result2);

    return  result2 + min;
}

// Generate random number between 20 and 50
var result = randomBetweenNumber(20, 50);
console.log("Random number between 20 and 50:", result);



var students = ["Arzu","Ismayil","Javad","Aygun","Seid"]



function showRandomEl(arr){

    var randomNum = Math.random() * arr.length

    var randomIndex = Math.floor(randomNum)

    var randomEl = students[randomIndex]

    console.log(randomEl);

}


showRandomEl(students);



