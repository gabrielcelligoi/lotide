// FUNCTION to test the outputs
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  //creating an object to be outputed
  let itemsCounted = {};

  //adding keys with value=0 in itemsCounted that are marked as true in itemsToCount
  for (let name in itemsToCount) {
    if (itemsToCount[name] === true) {
      itemsCounted[name] = 0;
    }
  }

  //adding +1 to values when itemsCounted match with allItems
  for (let item in itemsCounted) {
    for (let name of allItems) {
      if (item === name) {
        itemsCounted[item]++;
      }
    }
  }

  //deleting the keys woth a value = 0
  for (let item in itemsCounted) {
    if (itemsCounted[item] === 0) {
      delete itemsCounted[item];
    }
  }
  
  return itemsCounted;
};



//TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);