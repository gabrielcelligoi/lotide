// function eqArrays to check if 2 arrays are equals
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

// function to give a message if the arrays are equals or different
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

//function to get middle elemen(s) of an array
const middle = function(array) {
  let middleArray = [];
  let arrayLength = array.length; //check the length of the array.
  let lastElementIndex = arrayLength - 1;

  if (arrayLength < 3) { //if it is 1 or 2, return ampty array
    return middleArray;
  } else if (arrayLength % 2 === 0) { //if the length of the array is even, it must return an array w/ 2 elements
    let firstMiddleElementIndex = (lastElementIndex - 1) / 2;
    middleArray.push(array[firstMiddleElementIndex]);
    middleArray.push(array[firstMiddleElementIndex + 1]);
  } else { // if the length is odd, it must return an array with one element
    let middleElementIndex = lastElementIndex / 2;
    middleArray.push(array[middleElementIndex]);
  }
  return middleArray;
};

//Test code
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);