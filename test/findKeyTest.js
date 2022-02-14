//require findKey
const findKey = require('../findKey');

//require chai
const assert = require('chai').assert;

//test findKey
describe('#findKey', () => {
  const constelations = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };

  it('return "noma" when "x.stars === 2" is called', () => {
    assert.strictEqual(findKey(constelations, x => x.stars === 2), "noma");
  });
});