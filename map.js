const words = ["ground", "control", "to", "major", "tom"];


// const map = function() {
//   const results = [];
//   return results;
// };

// const map = function(array, callback) {
//   // temporary code:
//   console.log('array: ', array);
//   console.log('callback: ', callback);

//   const results = [];
//   return results;
// };

// const map = function(array, callback) {
//   const results = [];
//   for (let item of array) {
//     console.log('item BEFORE: ', item);
//     console.log('item AFTER: ', callback(item));
//     console.log('---');
//   }
//   return results;
// };

// const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


// assert Equal FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

//eqArrays function to compare the acutal result and expected reuslt
function eqArrays(arr1, arr2) {
  //Check if the lengths of the two arrays are the same
  //If not, they cannot be a perfect match, so return false
  if (arr1.length !== arr2.length) {
    return false;
  }

  //Iterate through the elements of the arrays
  for (let i = 0; i < arr1.length; i++) {
    //If the current element in arr1 is not equal to the corresponding element in arr2
    //They are not a perfect match, so return false
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  //If the function did not return false in the loop, the arrays are a perfect match, so return true
  return true;

};


// //test
// const results1 = map(words, word => word[0]);
// console.log(results1);

//Test case 1: Get the first character of each word in the array
const result1 = map(words, word => word[0]);
console.log("Test case 1:");
assertEqual(eqArrays(result1, ['g', 'c', 't', 'm', 't']), true);

// Test case 2: Get the length of each word in the array
const results2 = map(words, word => word.length);
console.log("Test case 2:");
assertEqual(eqArrays(results2, [6, 7, 2, 5, 3]), true);


//Test case 3:
const results3 = map(words, word => word.toUpperCase());
console.log("Test case 3:");
assertEqual(eqArrays(results3, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]), true);