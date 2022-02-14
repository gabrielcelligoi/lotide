//require tail.js
const tail = require('../tail');

//require assertEqual.js
const assertEqual = require('../assertEqual');

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