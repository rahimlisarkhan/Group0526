// list[0] = 10; // Change the first element to 10

// console.log("Updated list:", list);

var a = 10

var b = a; // Copy the value of a to b (primitive type, stored in stack)

a = 20; // Change the value of a

console.log("Value of a:", a);
console.log("Value of b:", b);

var list = [15, 20, 25, 30, 35, 40, 45, 50]; // HEAP
var list2 = list; // Reference to the same array in memory (list2 points to the same HEAP location as list)
// var list2 = list.concat(); // Create a shallow copy of the array

list[0] = 10; // Change the first element of list

console.log("Updated list:", list);
console.log("List2 after update:", list2); // list2 remains unchanged