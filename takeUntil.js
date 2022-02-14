//implement takeUntil
const takeUntil = function(array, callback) {
  const results = [];

  for (let element of array) {
    if (!callback(element)) {
      results.push(element);
    } else {
      break;
    }
  }

  return results;
};

module.exports = takeUntil;