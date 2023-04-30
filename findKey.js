//finKey Function
// Define a function called findKey that takes an object and a callback function as parameters

function cb (x) {
  x.stars === 2;
};

const findKey = (obj, callback) => {
  //use a for in loop to iterate through all keys in the object
  for (const key in obj) {
    //if the callback function returns true for the current key's value
    if (callback(obj[key])) {
        //return the found key
        return key;
    }
  }
  //if no matching key is found, return undefined
  return undefined;
};





findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"


const object = {
   "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};