// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

//Import assertEqual function from assertEqual.js
const assertEqual = require('./assertEqual');



//Function implementation
const head = function(array) {
  return array[0];
}

// //TEST CODE
// assertEqual(head([5,6,7]),5);
// assertEqual(head(["Hello", "Lighthouse","Labs"]), "Hello");

//export function
module.exports = head;





