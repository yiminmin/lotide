const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1,2,4],[1,2,3]); //should fail
assertArraysEqual(["hello", "world"], ["hello", "world"]); // should pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); // should fail
