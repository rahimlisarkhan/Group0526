

var str = "Hello, World!"; // String with leading and trailing spaces

// var firstChar = str.charAt(0); // Get the first character of the string
// var firstChar = str.charCodeAt(0); // Get the first character of the string

// var firstChar = str.trim()
// var firstChar = str.trim()
// var firstChar = str.replaceAll("l", "d"); // Remove all spaces from the string
// var firstChar = str.replace("l", "d"); // Remove all spaces from the string

// String normalize() examples
// Example 3: Comparing strings that look the same but have different encodings
var string1 = "résumé"; // Composed characters
var string2 = "re\u0301sume\u0301"; // Using combining diacritical marks

string1.normalize()
string2.normalize()
console.log("Are normalized strings equal?", string1.normalize() === string2.normalize());
console.log();
