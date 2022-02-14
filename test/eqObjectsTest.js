//require eqObjects.js
const eqObjects = require('../eqObjects');

//require chai
const assert = require('chai').assert;

//test code for eqObjects.js
describe('#eqObjects', () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };

  it('return true when the input are objs { a: "1", b: "2" } e { b: "2", a: "1" }', () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it('return false when the input are objs { a: "1", b: "2" } e { a: "1", b: "2", c: "3" }', () => {
    assert.strictEqual(eqObjects(ab, abc), false);
  });

  it('return true when the input are objs { c: "1", d: ["2", 3] } e { d: ["2", 3], c: "1" }', () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  });

  it('return false when the input are objs { c: "1", d: ["2", 3] } e { c: "1", d: ["2", 3, 4] }', () => {
    assert.strictEqual(eqObjects(cd, cd2), false);
  });
});

//TEST code
//**Test1
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// //**text 2
// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

// //**test 3
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// //*8test 4
// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false