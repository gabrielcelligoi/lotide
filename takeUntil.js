//implement takeUntil
const takeUntil = function(array, callback) {
  const results = [];

  for (let element of array) {
    if (!callback(element)) {
      results.push(element);
    } else {
      break;
    }
  }

  return results;
};

//TEST code ------------------------------------------------------

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
//function to test the code
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

//-------------------------------------------------------------------

//test1
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

//test2
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);