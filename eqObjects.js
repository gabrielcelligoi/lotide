//require assertEquals.js
const assertEqual = require('./assertEqual');

//require eqArrays
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keysOfObject1 = Object.keys(object1);
  let keysOfObject2 = Object.keys(object2);


  if (keysOfObject1.length !== keysOfObject2.length) {
    return false;
  }

  for (let key of keysOfObject1) {
    if (Array.isArray(object1[key]) === true && Array.isArray(object2[key]) === true) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  
  return true;
};

module.exports = eqObjects;