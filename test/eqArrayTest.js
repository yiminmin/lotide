// Import dependencies
const chai = require('chai');
const expect = chai.expect;
const eqArrays = require('../eqArrays');

// Use Mocha's describe function to group tests
describe('eqArrays', function() {
    // Use Mocha's it function to define each test case
    it('should return true for two identical arrays', function() {
        const arr1 = [1, 2, 3];
        const arr2 = [1, 2, 3];
        expect(eqArrays(arr1, arr2)).to.be.true;
    });

    it('should return false for two different arrays', function() {
        const arr1 = [1, 2, 3];
        const arr2 = [1, 2, 4];
        expect(eqArrays(arr1, arr2)).to.be.false;
    });

    it('should return false for two arrays of different lengths', function() {
        const arr1 = [1, 2, 3];
        const arr2 = [1, 2];
        expect(eqArrays(arr1, arr2)).to.be.false;
    });

    it('should return true for two empty arrays', function() {
        const arr1 = [];
        const arr2 = [];
        expect(eqArrays(arr1, arr2)).to.be.true;
    });
});

//npm test test/eqArrayTest.js