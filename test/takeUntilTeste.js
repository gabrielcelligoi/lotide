const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

//testcode
describe('#takeUntil', () => {
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

  it('return an array of numbers', () => {
    assert.deepEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
  });

  it('return an array of strings', () => {
    assert.deepEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });
});