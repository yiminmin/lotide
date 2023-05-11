// const assertEqual = require('../assertEqual');
// npm test test/tailTest.js

const tail = require('../tail');
const assert = require('chai').assert;

// console.log(tail(["Yo Yo", "Lighthouse", "Labs"]));

//attention when using assert.strictEqual() && assert.deepEqual();
//using chai to test
describe("#tail", () => {
  it('returns ["Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
    it("returns [6] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6]), [2, 3, 4, 5, 6]); 
  });
});

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// console.log(tail(words));