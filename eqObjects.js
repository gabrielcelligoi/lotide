// FUNCTION to test the outputs
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function that compares arrays
const eqArrays = function(arr1, arr2) {
  let arrLength = 0;
  if (arr1.length === arr2.length) {
    arrLength = arr1.length;
  } else {
    return false;
  }
  
  for (let i = 0; i < arrLength; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keysOfObject1 = Object.keys(object1);
  let keysOfObject2 = Object.keys(object2);


  if (keysOfObject1.length !== keysOfObject2.length) {
    return false;
  }

  for (let key of keysOfObject1) {
    if (Array.isArray(object1[key]) === true && Array.isArray(object2[key]) === true) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  
  return true;
};


//TEST code
//**Test1
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

//**text 2
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

//**test 3
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

//*8test 4
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false