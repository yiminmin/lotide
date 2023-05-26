// import dependencies
const chai = require('chai');
const expect = chai.expect;
const eqObjects = require('../eqObjects.js');

describe('eqObjects', function() {
    it('should return true for two identical objects', function() {
        const obj1 = { color: "red", size: "medium" };
        const obj2 = { size: "medium", color: "red" };
        expect(eqObjects(obj1, obj2)).to.be.true;
    });

    it('should return false for two objects with different lengths', function() {
        const obj1 = { color: "red", size: "medium" };
        const obj2 = { size: "medium", color: "red", sleeveLength: "long" };
        expect(eqObjects(obj1, obj2)).to.be.false;
    });

    it('should return true for two identical complex objects', function() {
        const obj1 = { colors: ["red", "blue"], size: "medium" };
        const obj2 = { size: "medium", colors: ["red", "blue"] };
        expect(eqObjects(obj1, obj2)).to.be.true;
    });

    it('should return false for two complex objects with different lengths', function() {
        const obj1 = { colors: ["red", "blue"], size: "medium" };
        const obj2 = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
        expect(eqObjects(obj1, obj2)).to.be.false;
    });
});
