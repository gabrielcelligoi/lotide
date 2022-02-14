const without = require('../without');
const assert = require('chai').assert;



//testing code
describe('#without', () => {
  it('test1', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it('test1', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it('test1', () => {
    assert.deepEqual(without([1, 2, 3], [2, 3]), [1]);
  });

  it('does not modify the original array', () => {
    const words = ["hello", "world", "lighthouse"];
    const arrayReturned = without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
  
});