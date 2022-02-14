//require head.js
const head = require('../head');

//require assertEqual.js
const assertEqual = require('../assertEqual');

//Test code for head.js
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([0]), 0);
assertEqual(head([]), undefined);