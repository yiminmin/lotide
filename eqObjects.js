// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

//recursive function 
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


// // non-recursive function
// function deepEqualNonRecursive(obj1, obj2) {
//   // If either value is not an object or is null, return false
//   if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) return false;

//   // Create stacks to store the objects to be compared
//   const stack1 = [obj1];
//   const stack2 = [obj2];

//   // Continue as long as there are objects in the stacks
//   while (stack1.length > 0 && stack2.length > 0) {
//     // Remove the top object from each stack
//     const curr1 = stack1.pop();
//     const curr2 = stack2.pop();

//     // If both values are arrays
//     if (Array.isArray(curr1) && Array.isArray(curr2)) {
//       // If the arrays are not the same length, return false
//       if (curr1.length !== curr2.length) return false;
//       // Add each element in the arrays to the stacks
//       for (let i = 0; i < curr1.length; i++) {
//         stack1.push(curr1[i]);
//         stack2.push(curr2[i]);
//       }
//       // Move on to the next iteration of the loop
//       continue;
//     } 
//     // If only one value is an array, return false
//     else if (Array.isArray(curr1) || Array.isArray(curr2)) {
//       return false;
//     }

//     // Get the keys of each object
//     const keys1 = Object.keys(curr1);
//     const keys2 = Object.keys(curr2);

//     // If the objects do not have the same number of keys, return false
//     if (keys1.length !== keys2.length) return false;

//     // Compare the values for each key in object 1 to the corresponding value in object 2
//     for (let key of keys1) {
//       // If the key does not exist in object 2, return false
//       if (!keys2.includes(key)) return false;

//       const val1 = curr1[key];
//       const val2 = curr2[key];

//       // If both values are objects and not null, add them to the stacks to be compared
//       if (typeof val1 === 'object' && val1 !== null && typeof val2 === 'object' && val2 !== null) {
//         stack1.push(val1);
//         stack2.push(val2);
//       }
//       // If the values are not equal, return false
//       else if (val1 !== val2) {
//         return false;
//       }
//     }
//   }

//   // If all objects in the stacks have been compared and found equal, return true
//   return true;
// };



// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// eqObjects(shirtObject , anotherShirtObject); // => true
// console.log(eqObjects(shirtObject , anotherShirtObject));


// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject , longSleeveShirtObject); // => false
// console.log(eqObjects(shirtObject , longSleeveShirtObject));

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
// console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject));
// console.log(deepEqualNonRecursive(multiColorShirtObject, anotherMultiColorShirtObject));


// const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
//eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false

//console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject));


//  function deepEqualNonRecursive(obj1, obj2) {
//   if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
//     return false;
//   }

//   const stack1 = [obj1];
//   const stack2 = [obj2];

//   while (stack1.length > 0 && stack2.length > 0) {
//     const curr1 = stack1.pop();
//     const curr2 = stack2.pop();

//     const keys1 = Object.keys(curr1);
//     const keys2 = Object.keys(curr2);

//     if (keys1.length !== keys2.length) {
//       return false;
//     }

//     for (let key of keys1) {
//       if (!keys2.includes(key)) {
//         return false;
//       }

//       const val1 = curr1[key];
//       const val2 = curr2[key];

//       if (typeof val1 === 'object' && typeof val2 === 'object') {
//         stack1.push(val1);
//         stack2.push(val2);
//       } else if (val1 !== val2) {
//         return false;
//       }
//     }
//   }

//   return true;
// };

// function deepEqual(obj1, obj2) {
//   // Check if both arguments are objects
//   if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
//     return false;
//   }

//   // Get the keys of both objects
//   const keys1 = Object.keys(obj1);
//   const keys2 = Object.keys(obj2);

//   // Check if both objects have the same number of keys
//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   // Iterate through the keys and compare the values
//   for (let key of keys1) {
//     if (!keys2.includes(key)) {
//       return false;
//     }

//     const val1 = obj1[key];
//     const val2 = obj2[key];

//     // Check if both values are objects, if so call the function recursively
//     if (typeof val1 === 'object' && typeof val2 === 'object') {
//       if (!deepEqual(val1, val2)) {
//         return false;
//       }
//     } else if (val1 !== val2) {
//       return false;
//     }
//   }

//   return true;
// };

// module.exports = eqObjects;