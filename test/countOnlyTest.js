//require countOnly
const countOnly = require('../countOnly');

//require chai
const assert = require('chai').assert;

//Test for countOnly.js
describe('#countOnly', () => {
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

  const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  it('return 1 when call Jason', () => {
    assert.strictEqual(result.Jason, 1);
  });

  it('return undefined when call Karima', () => {
    assert.strictEqual(result.Karima, undefined);
  });

  it('return 2 when call Fang', () => {
    assert.strictEqual(result.Fang, 2);
  });

  it('return undefined when call Agouhanna', () => {
    assert.strictEqual(result.Agouhanna, undefined);
  });

});