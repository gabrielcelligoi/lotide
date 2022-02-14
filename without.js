
const without = function(source, itemsToRemove) {
  let arrayWithout = [];

  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      arrayWithout.push(element);
    }
  }
  return arrayWithout;
};

module.exports = without;