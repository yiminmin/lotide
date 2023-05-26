// Define the takeUntil function, which takes an array and a callback function as parameters
//The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

/*
The function creates an empty results array, and iterates over the input array using a for...of loop. It checks if the callback function returns a truthy value for the current element. If it does, the function returns the results array. If not, it pushes the current element into the results array and continues to the next element.
*/
//这个函数是返回 callback  true 之前的所有false的值。
const takeUntil = function(array, callback) {
  // Create an empty results array to hold the collected elements
  const results = [];
  // Iterate over each element in the input array
  for (let item of array) {
    // If the callback function returns true for the current item,
    // stop the loop and return the results array
    /**
     *  如果回调函数对当前元素返回 true，停止循环并返回结果数
     */
    if (callback (item)) {
      return results;
    }
    // If the callback function returns a falsey value, add the current item to the results array
    results.push(item);
  }
  // If the loop finishes without the callback function returning true,
  // return the results array with all the items from the input array
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);



console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);                