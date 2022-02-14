const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

//Test code
describe('#letterPositions', () => {
  it('returns [1] when hello.e is called', () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
});