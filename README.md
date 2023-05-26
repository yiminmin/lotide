# Lotide

A lightweight JavaScript utility library.

## Installation

```bash
npm install --save lotide
```

## API Reference

### `assertEqual(actual, expected)`

This function takes two arguments - the actual value and the expected value - and compares them using strict equality (`===`). If the values are equal, it logs a message indicating that the assertion passed; otherwise, it logs a message indicating that the assertion failed.

#### Usage

```javascript
const { assertEqual } = require('lotide');

assertEqual(1, 1); // logs: ✅✅✅Assertion Passed: 1 === 1
assertEqual('test', 'notest'); // logs: 🛑🛑🛑Assertion Failed: test !== notest
```

### `head(array)`

This function takes an array as an argument and returns the first element of the array.

#### Usage

```javascript
const { head } = require('lotide');

console.log(head([1, 2, 3])); // logs: 1
```

### `tail(array)`

This function takes an array as an argument and returns a new array that includes everything but the first element of the input array.

#### Usage

```javascript
const { tail } = require('lotide');

console.log(tail([1, 2, 3])); // logs: [2, 3]
```

### `eqArrays(arr1, arr2)`

This function takes two arrays and checks if they are deeply equal, i.e., if they have the same length and identical elements at each index, including sub-arrays. If they are deeply equal, the function returns `true`; otherwise, it returns `false`.

#### Usage

```javascript
const { eqArrays } = require('lotide');

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // logs: true
console.log(eqArrays([1, [2, 3]], [1, [2, 4]])); // logs: false
```

### `assertArraysEqual(arr1, arr2)`

This function takes two arrays and checks if they are deeply equal by using `eqArrays`. If they are equal, it logs a message indicating that the assertion passed; otherwise, it logs a message indicating that the assertion failed.

#### Usage

```javascript
const { assertArraysEqual } = require('lotide');

assertArraysEqual([1, 2, 3], [1, 2, 3]); // logs: ✅ Assertion Passed: [1,2,3] === [1,2,3]
assertArraysEqual([1, 2, 3], [1, 2, 4]); // logs: ❌ Assertion Failed: [1,2,3] !== [1,2,4]
```
### `without(source, itemsToRemove)`

This function takes a source array and an array of items to remove. It returns a new array which includes only the items from the source array that are not present in the itemsToRemove array.

#### Usage

```javascript
const { without } = require('lotide');

console.log(without([1, 2, 3], [2])); // logs: [1, 3]
```

### `flatten(arr)`

This function takes a nested array (an array containing other arrays) and returns a new array with all the elements flattened.

#### Usage

```javascript
const { flatten } = require('lotide');

console.log(flatten([1, [2, 3], 4])); // logs: [1, 2, 3, 4]
```

### `middle(array)`

This function takes an array and returns a new array containing the middle element(s) of the given array. If the length of the array is even, it returns two middle elements. If the length is odd, it returns one middle element. If the length of the array is less than 3, it returns an empty array.

#### Usage

```javascript
const { middle } = require('lotide');

console.log(middle([1, 2, 3, 4])); // logs: [2, 3]
console.log(middle([1, 2, 3, 4, 5])); // logs: [3]
```

### `countOnly(allItems, itemsToCount)`

This function takes an array of items and an object specifying which items should be counted. It returns an object containing counts of each item in the array that is present in the itemsToCount object with a truthy value.

#### Usage

```javascript
const { countOnly } = require('lotide');

console.log(countOnly(["apple", "banana", "apple", "orange", "banana"], { "apple": true, "banana": false })); // logs: { "apple": 2 }
```

### `letterPositions(sentence)`

This function takes a sentence (as a string) and returns an object. The keys of the object are the letters in the sentence, and the value for each key is an array of positions at which the letter appears in the sentence. 

#### Usage

```javascript
const { letterPositions } = require('lotide');

console.log(letterPositions("hello")); // logs: { h: [0], e: [1], l: [2, 3], o: [4] }
```

### `countLetters(sentence)`

This function takes a sentence (as a string) and returns an object. The keys of the object are the letters in the sentence, and the value for each key is the number of times the letter appears in the sentence.

#### Usage

```javascript
const { countLetters } = require('lotide');

console.log(countLetters("hello")); // logs: { h: 1, e: 1, l: 2, o: 1 }
```

### `findKeyByValue(obj, value)`

This function takes an object and a value. It returns the first key in the object that corresponds to the given value. If no key corresponds to the given value, it returns undefined.

#### Usage

```javascript
const { findKeyByValue } = require('lotide');

console.log(findKeyByValue({ a: 1, b: 2, c: 3 }, 2)); // logs: b
```
Sure, let's extend the README.md file with descriptions of the new functions:

```markdown
## Functions

### eqObjects

`eqObjects` is a function to deeply compare two objects or arrays. It's useful for checking if two objects have the same keys and values.

```javascript
const eqObjects = require('./eqObjects');
let result = eqObjects({ a: '1', b: 2 }, { b: 2, a: '1' }); // true
```

### assertObjectsEqual

`assertObjectsEqual` function takes in two objects and prints an appropriate message to the console indicating whether the objects are deeply equal.

```javascript
const assertObjectsEqual = require('./assertObjectsEqual');
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' }); // Prints: ✅✅✅ Assertion Passed: { a: '1', b: 2 } === { b: 2, a: '1' }
```

### map

`map` function works just like `Array.prototype.map()`. It takes an array and a callback function as parameters, applies the callback function to each element of the array, and returns a new array with the results.

```javascript
const map = require('./map');
let nums = [1, 2, 3, 4];
let squares = map(nums, num => num * num); // [1, 4, 9, 16]
```

### takeUntil

`takeUntil` function creates a slice of array with elements taken from the beginning. Elements are taken until predicate returns true. The predicate is invoked with two arguments: (value, index).

```javascript
const takeUntil = require('./takeUntil');
let nums = [1, 2, 3, 4];
let lessThanThree = takeUntil(nums, x => x >= 3); // [1, 2]
```

### findKey

`findKey` function returns the first key in the object that passes a truth test. If no key passes the test, it returns `undefined`.

```javascript
const findKey = require('./findKey');
let obj = { a: 1, b: 2, c: 3 };
let key = findKey(obj, x => x > 2); // 'c'
```
```

Make sure to replace the paths in the `require` statements with the actual paths to your files if they're different.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
