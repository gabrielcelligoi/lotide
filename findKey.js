//require assertEquals.js
const assertEqual = require('./assertEqual');

//IMPLEMENT findKey
//It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;