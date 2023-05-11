//assertEqual function
const assertEqual = require('./assertEqual');




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



//export
module.exports = eqArrays;