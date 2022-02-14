//require assertArraysEqual.js
const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;