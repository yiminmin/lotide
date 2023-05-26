// import dependencies
const chai = require('chai');
const expect = chai.expect;
const flatten = require('../flatten');

describe('flatten', function() {
    it('should correctly flatten arrays with sub-arrays', function() {
        const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const result = flatten(array);
        expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should return the same array if no sub-arrays are present', function() {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const result = flatten(array);
        expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should correctly flatten arrays with mixed sub-arrays and normal elements', function() {
        const array = [[1, 2, 3], 4, [5, 6], 7, [8, 9]];
        const result = flatten(array);
        expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should correctly flatten an empty array', function() {
        const array = [];
        const result = flatten(array);
        expect(result).to.deep.equal([]);
    });
});


//test 
//npm test test/flattenTest.js
