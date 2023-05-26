// import dependencies
const chai = require('chai');
const expect = chai.expect;
const findKeyByValue = require('../findKeyByValue.js');

describe('findKeyByValue', function() {
    it('should return the correct key for a given value', function() {
        const bestTVShowsByGenre = { 
            sci_fi: "The Expanse",
            comedy: "Brooklyn Nine-Nine",
            drama:  "The Wire"
        };

        expect(findKeyByValue(bestTVShowsByGenre, "The Wire")).to.equal("drama");
        expect(findKeyByValue(bestTVShowsByGenre, "That '70s Show")).to.be.undefined;
    });

    it('should return undefined for an empty object', function() {
        const emptyObj = {};

        expect(findKeyByValue(emptyObj, "The Wire")).to.be.undefined;
    });
});

//npm test test/findKeyByValueTest.js
