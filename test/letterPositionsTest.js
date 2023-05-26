// import dependencies
const chai = require('chai');
const expect = chai.expect;
const letterPosition = require('../letterPosition.js');

describe('letterPosition', function() {
    it('should return correct letter positions for a sentence', function() {
        const sentence = "lighthouse in the house";
        const result = letterPosition(sentence);
        
        expect(result["l"]).to.deep.equal([0]);
        expect(result["i"]).to.deep.equal([1, 11]);
        expect(result["g"]).to.deep.equal([2]);
        expect(result["h"]).to.deep.equal([3, 5, 15, 18]);
        expect(result["t"]).to.deep.equal([4, 14]);
        expect(result["o"]).to.deep.equal([6, 19]);
        expect(result["u"]).to.deep.equal([7, 20]);
        expect(result["s"]).to.deep.equal([8, 21]);
        expect(result["e"]).to.deep.equal([9, 16, 22]);
        expect(result["n"]).to.deep.equal([12]);
    });

    it('should return an empty object for an empty string', function() {
        const sentence = "";
        const result = letterPosition(sentence);
        
        expect(result).to.deep.equal({});
    });
});
