//Function assertEqual
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


//Testing the code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);