// FUNCTION to test the outputs
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const results = {};
  
  for (const letter of string) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter]++;
      } else {
        results[letter] = 1;
      }
    }
  }

  return results;
};

const test = countLetters("lighthouse in the house");

assertEqual(test.g, 1);
assertEqual(test.h, 4);
assertEqual(test.e, 3);