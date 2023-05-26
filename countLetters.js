const countLetters = function(sentence) {
  const counts = {};
  for (const letter of sentence) {
    if (letter !== " ") {
      if (counts[letter]) {
        counts[letter] += 1;
      } else {
        counts[letter] = 1;
      }
    }
  }
  return counts;
};

const sentence = "hello world";
const result1 = countLetters(sentence);
console.log(result1);

// AssertEqual FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
