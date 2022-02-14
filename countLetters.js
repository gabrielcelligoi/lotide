//require assertEqual.js
const assertEqual = require('./assertEqual');

//implement contLetter to output an object with the amount of times each letter appears in a given sentence
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

module.exports = countLetters;