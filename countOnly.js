// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const counts = {};
  for (const item of allItems) {
    if (itemsToCount[item]) { //// Check if the current item is a key in the itemsToCount object and its value is truthy;
      /*
      in this code: 
      { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
      if we call this as an object
      ItemsToCount[item] ---> object[jason] which equals to true;  

      */
       if (counts[item]) { //   If the item exists in the itemsToCount object, increment its count in the counts object.
        counts[item] += 1;
      } else {
        counts[item] = 1;
      }
    }
   
  }
  //  Return the counts object.

  return counts;

};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);

//assertEqual method

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
