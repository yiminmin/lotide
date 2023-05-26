// import dependencies
const chai = require('chai');
const expect = chai.expect;
const countOnly = require('../countOnly.js');

describe('countOnly', function() {
    it('should correctly count the specified items in an array', function() {
        const firstNames = [
            "Karl",
            "Salima",
            "Agouhanna",
            "Fang",
            "Kavith",
            "Jason",
            "Salima",
            "Fang",
            "Joe"
        ];
        const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

        expect(result1["Jason"]).to.equal(1);
        expect(result1["Karima"]).to.equal(undefined);
        expect(result1["Fang"]).to.equal(2);
        expect(result1["Agouhanna"]).to.equal(undefined);
    });
});


//test
//npm run test test/countOnlyTest.js 