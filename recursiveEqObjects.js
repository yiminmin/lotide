const eqObjects = function(obj1, obj2) {
  //base case: if the objects are the same, return true
  if (obj1 === obj2) return true;

  //if either object is not an object or is null, return false
  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) return false;

  //If both objects are arrays, compare their elements
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    //If the arrays have different lengths, they are not equal
    if (obj1.length !== obj2.length) return false;

    //compare array elements recursively
    for (let i = 0; i < obj1.length;  i++) {
      if (!eqObjects(obj1[i], obj2[i])) return false;
    }

    //if all elements are qual, return true
    return true;
  } else if (Array.isArray(obj1) || Array.isArray(obj2)) {
    // if one object is an array and the other is not, they are not equal
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
    //Check if both values are objects and not arrays
    if (typeof obj1[key] ===  'object' && !Array.isArray(obj1[key]) &&
      typeof obj2[key] === 'object' && !Array.isArray(obj2[key])) {
        // call the function recursively with the two values
        if (!eqObjects(obj1[key], obj2[key])) return false;
      } else if (obj1[key] !== obj2[key]) {
        //if the values are not equal, they are not equal
        return false;
      }
  }

  //if all keys and values are equal, return true
  return true;

};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
console.log(eqObjects(shirtObject , anotherShirtObject));//true

// eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => true
console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); //true
eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }));//false