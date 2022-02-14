//require tail.js
const tail = require('../tail');

//require chai
const assert = require('chai').assert;

describe('#tail', () => {
  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });

  it('returns 3 for ["Yo Yo", "Lighthouse", "Labs"].length after tail(words) was runned', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words.length, 3);
  });

  it('returns [2, 3] for [1, 2, 3]', () => {
    const test = [1, 2, 3];
    assert.deepEqual(tail(test), [2, 3]);
  });

  it('returns [] for [1]', () => {
    const test = [1];
    assert.deepEqual(tail(test), []);
  })
});