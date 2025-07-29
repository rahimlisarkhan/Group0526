


// 1. Exercise: Check if a number is even or odd
// var number = prompt("Enter a number:");


// var result = number % 2; // Check if the number is even or odd 0 - even, 1 - odd


// if (result == 0) {
//     console.log("The number is even.");
// }
// else {
//     console.log("The number is odd.");
// }

// 2. Exercise: Check if a string starts with a specific letter
// var str = "a+b+c+d+e+f+g+h+i+j+k+l+m+n+o+p+q+r+s+t+u+v+w+x+y+z"; // input string

// var result = str.toUpperCase()

// var result2 = result.split("+")

// console.log(result);
// console.log(result2);

// 3. Exercise: Check word length

// var str1 = "Hello"
// var str2 = "Hello, World!"
// var str3 ="No results for search term `s`"
// var str4 = " Hello"
// var str5 = "  Hello     Bart  "

// var result1 = str1.split(" ").length; // Length of "Hello"
// var result2 = str2.split(" ").length; // Length of "Hello, World!"
// var result3 = str3.split(" ").length; // Length of "No results for search term `s`"
// var result4 = str4.split(" ").length; // Length of " Hello"
// var result5 = str5.trim().replaceAll(" ", ""); // Length of "  Hello     Bart  "

// console.log(result5);


// console.log("Length of str1:", result1); // Output: 1
// console.log("Length of str2:", result2); // Output: 2
// console.log("Length of str3:", result3); // Output: 6
// console.log("Length of str4:", result4); // Output: 2



var str = "world"

var result = str.split("")

var result2 = result.reverse() // DLROW

var result3 = result2.join("") // WORLD
console.log(result);
console.log(result2);
console.log(result3);
