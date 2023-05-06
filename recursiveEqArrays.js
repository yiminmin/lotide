// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function eqArrays (with recursion)
function eqArrays(arr1, arr2) {
  //check if the lengths of the two arrays are the same (base case)
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    //check if both items are arrays
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      // call eqArrays recursively to compare the sub-arrays
      // if the sub-arrays are not equal, return false(base case)
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      //if the items at index i are not equal return false (base case)
      return false;
    }
  }
  //if the function did not return false in the loop
  //the arrays are a perfect match, so return true
  return true;
}

/**
 * The base case is actually a combination of different conditions:

The lengths of the two arrays being compared are different, so they cannot be equal.
When comparing items at the same index in both arrays, if both are not arrays and their values are not equal, the arrays are not equal.
When comparing nested arrays, if the recursive call to eqArrays returns false, the arrays are not equal.

 */


//test case
// Test case 1: Two equal arrays with simple numbers
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

// Test case 2: Two unequal arrays with simple numbers
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false);

// Test case 3: Two equal arrays with nested arrays
assertEqual(eqArrays([1, [2, 3], 4], [1, [2, 3], 4]), true);

// Test case 4: Two unequal arrays with nested arrays
assertEqual(eqArrays([1, [2, 3], 4], [1, [2, 4], 4]), false);

// Test case 5: Two equal arrays with multiple levels of nesting
assertEqual(eqArrays([1, [2, [3, 4]], 5], [1, [2, [3, 4]], 5]), true);

// Test case 6: Two unequal arrays with multiple levels of nesting
assertEqual(eqArrays([1, [2, [3, 4]], 5], [1, [2, [3, 5]], 5]), false);

// Test case 7: Two equal empty arrays
assertEqual(eqArrays([], []), true);