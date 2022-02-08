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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


//Testing the code
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);