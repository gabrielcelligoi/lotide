//Function assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function returning the TAIL of an array
const tail = function(array) {
  let arrayTail = [];
  for (let i = 1; i < array.length; i++) {
    arrayTail.push(array[i]);
  }
  return arrayTail;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Code
const test1 = tail([1, 2, 3]);
assertEqual(test1.length, 2);
assertEqual(test1[0], 2);
assertEqual(test1[1], 3);

const test2 = tail([1]);
assertEqual(test2.length, 0);

const test3 = tail([]);
assertEqual(test3.length, 0);
