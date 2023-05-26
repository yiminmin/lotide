//eqObjects
const eqObjects = function(obj1, obj2) {
  // Base case: if the objects are the same, return true
  if (obj1 === obj2) return true;

  // If either object is not an object or is null, return false
  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) return false;

  // If both objects are arrays, compare their elements
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    // If the arrays have different lengths, they are not equal
    if (obj1.length !== obj2.length) return false;

    // Compare array elements recursively
    for (let i = 0; i < obj1.length; i++) {
      if (!eqObjects(obj1[i], obj2[i])) return false;
    }

    // If all elements are equal, return true
    return true;
  } else if (Array.isArray(obj1) || Array.isArray(obj2)) {
    // If one object is an array and the other is not, they are not equal
    return false;
  }

  // Get the keys of both objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // If the objects have different numbers of keys, they are not equal
  if (keys1.length !== keys2.length) return false;

  // Compare the keys and their values recursively
  for (let key of keys1) {
    if (!keys2.includes(key)) return false;
    if (!eqObjects(obj1[key], obj2[key])) return false;
  }

  // If all keys and values are equal, return true
  return true;
};

//assertObjectsEqual.js
const assertObjectsEqual = function(actual,expected) {
  // Import the util library and obtain the inspect function
  const inspect = require('util').inspect;

  //use the eqObject function to compare the actual object with the expected object.
  const areObjectsEqual = eqObjects(actual, expected);
  if (areObjectsEqual) {
    console.log(`✅✅✅Assertion Passed:${inspect(actual)} === ${inspect(expected)}`)
  } else {
      console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

//${util.inspect(actual)} === ${util.inspect(expected)}
const obj1 = { a: '1', b: 2 };
const obj2 = { b: 2, a: '1' };
const obj3 = { a: '1', b: 3 };

assertObjectsEqual(obj1, obj2); // ✅✅✅ Assertion Passed: { a: '1', b: 2 } === { b: 2, a: '1' }
assertObjectsEqual(obj1, obj3); // 🛑🛑🛑 Assertion Failed: { a: '1', b: 2 } !== { a: '1', b: 3 }

