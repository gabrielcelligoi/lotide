const map = require('../map');
const assert = require('chai').assert;

//TEST code
describe('#map', () => {
  const words = ["ground", "control", "to", "major", "tom"];

  it("return ['g', 'c', 't', 'm', 't'] when 'word => word[0]' is called ", () => {
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });

  it("return [ 6, 7, 2, 5, 3 ] when 'word => word.length' is called ", () => {
    assert.deepEqual(map(words, word => word.length), [ 6, 7, 2, 5, 3 ]);
  });

  it("return [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ] when 'word => word.toUpperCase()' is called ", () => {
    assert.deepEqual(map(words, word => word.toUpperCase()), [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ]);
  });
});



// const results1 = map(words, word => word[0]);
// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

// const results2 = map(words, word => word.length);
// assertArraysEqual(results2, [ 6, 7, 2, 5, 3 ]);

// const results3 = map(words, word => word.toUpperCase());
// assertArraysEqual(results3, [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ]);