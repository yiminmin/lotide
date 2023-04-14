//get the command line arguments

const args = process.argv.slice(2);

//loop through the arguments in reverse order and output them to the console
function reverseArgs(args) {
  let reversed = '';
  for (let i = args.length - 1; i >= 0; i--) {
    let str = args[i];
    let reversedStr = '';
    for (let j = str.length - 1; j >= 0; j--) {
      reversedStr += str[j];
    }
    reversed += reversedStr + ' ';
  }
  return reversed.trim();

}
// Output the result to the console
console.log(reverseArgs(args));

//assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

//test result
const testReverseWords = function() {
  const result1 = reverseArgs(['1', 'fish', '2', 'fish']);
  const result2 = reverseArgs(['hello', 'world']);
  console.log(result1);
  console.log(result2);
}

// Call the test function
testReverseWords();

