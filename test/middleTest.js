//require middle.js
const middle = require('../middle');

//require chai
const assert = require('chai').assert;

//TESTS for middle.js
describe('#middle', () => {
  it('returns [] for []', () => {
    assert.deepEqual(middle([]), []);
  });

  it('retuns [] for [1]', () => {
    assert.deepEqual(middle([1]), []);
  });

  it('retuns [] for [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('returns [2] for [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('returns [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it('returns [3] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});