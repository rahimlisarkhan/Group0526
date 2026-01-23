




// function MyCar(name, model, year) {
//   this.name = name;
//   this.model = model;
//   this.year = year;
// }


// const myCar1 = new MyCar("Ford", "Mustang", 1969);



// Array.prototype.myMap = function(callback) {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i], i, this));
//   }
//   return result;
// }


const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.myMap(function(num) {
  return num * 2;
});