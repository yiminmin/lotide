const middle  = require('../middle');
const assert = require('chai').assert;

//attention when using assert.strictEqual() && assert.deepEqual();
//using chai to test
describe("#middle", () => {
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
    it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 
  });
});

//previous code test examples
// const array = [1,2,3,4,5];
// console.log(middle(array));
// console.log(middle([1,2,3,4,5,6]));

//test 
//npm test test/middleTest.js