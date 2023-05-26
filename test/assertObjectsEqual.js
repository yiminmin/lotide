// FUNCTION IMPLEMENTATION
const eqObjects = require('./eqObjects');  // Path to your eqObjects function file.

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // For detailed object output.
  
  // Compare the two objects
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Test the function
const obj1 = { a: '1', b: 2 };
const obj2 = { b: 2, a: '1' };

assertObjectsEqual(obj1, obj2); // ✅✅✅ Assertion Passed: { a: '1', b: 2 } === { b: 2, a: '1' }

// export the function
module.exports = assertObjectsEqual;
