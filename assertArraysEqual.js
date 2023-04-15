// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
//   }
// };



//Function eqArrays
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

}

//Test result
// assertEqual(eqArrays([1,2,3],[1,2,3]), true); 

//function assertArraysEqual
const assertArraysEqUAL  = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log (
      `✅ Assertion Passed: ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`);
    } else {
        console.log(`❌ Assertion Failed: ${JSON.stringify(arr1)} !== ${JSON.stringify(arr2)}`);
  }
  
}

assertArraysEqUAL([1,2,4],[1,2,3]);