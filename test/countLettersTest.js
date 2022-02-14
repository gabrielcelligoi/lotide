//request countLetters.js
const countLetters = require('../countLetters');

//request chai
const assert = require('chai').assert;

//Test for countLetter
describe('#countLetter', () => {
  const test = countLetters("lighthouse in the house");

  it('return 1 when "g" is called', () => {
    assert.strictEqual(test.g, 1);
  });

  it('return 4 when "h" is called', () => {
    assert.strictEqual(test.h, 4);
  });
});