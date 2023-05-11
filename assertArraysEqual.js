
//eqArrays
const eqArrays = require('./eqArrays');

//Test result
// assertEqual(eqArrays([1,2,3],[1,2,3]), true); 

//function assertArraysEqual
const assertArraysEqual  = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log (
      `✅ Assertion Passed: ${JSON.stringify(arr1)} === ${JSON.stringify(arr2)}`);
    } else {
        console.log(`❌ Assertion Failed: ${JSON.stringify(arr1)} !== ${JSON.stringify(arr2)}`);
  }
  
}



module.exports = assertArraysEqual;