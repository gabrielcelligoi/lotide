# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @gabrielcelligoi/lotide`

**Require it:**

`const _ = require('@gabrielcelligoi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters`:  outputs an object with the amount of times each letter appears in a given sentence
* `countOnly`: select specific elements of an object
* `eqOArrays`:  can compare two arrays for a perfect match
* `eqObjects`: filter input data by removing some unwanted items
* `findKey`: search for a key on an object where its value matches a given value.
* `head`: outputs the first element of an array (index[0])
* `letterPositions`: return all the indices (zero-based positions) in the string where each character is found.
* `map`: return a new array based on the results of the callback function.
* `middle`: outputs the middle element of an array
* `tail`: outputs all elements of an array except for the firs element (index[0])
* `takeUntil`: return a "slice of the array with elements taken from the beginning." 
* `without`: return a subset of a given array, removing unwanted elements.