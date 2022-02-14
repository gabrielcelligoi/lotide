//Require Function assertEqual
const assertEqual = require('./assertEqual')

//Function returning the TAIL of an array
const tail = function(array) {
  let arrayTail = [];
  for (let i = 1; i < array.length; i++) {
    arrayTail.push(array[i]);
  }
  return arrayTail;
};

module.exports = tail;