# Roman Numerals

This is an app which coverts Arabic numbers (1, 2, 3... 10...) into Roman numerals (I, II, III... X...). It is built in Node with TypeScript.

## Installing

After cloning this repo or unzipping the file, `cd` into the folder and run:

```
$ npm install
```

...to install dependencies. This app's stack consists of:

- TypeScript - for static type checking
- ts-node - to enable running TypeScript files in a Node environment, also required by Mocha
- Mocha - testing library
- Chai - assertion library to enable BDD-style testing in Mocha
- @types for Node, Mocha and Chai

## Usage

Once installed, run the app by passing a number as an argument to `npm start`, e.g.:

```
$ npm start -- 138
```

Example output:

```
138 as a Roman numeral is:
CXXXVIII
```

Only numbers in the range 0 to 3999 are supported.

## Tests

This app is fully tested, and tests can be run with:

```
$ npm test
```

## Approach

This app was built in Node with TypeScript. Node was used because it's my favourite back end environment, simple as that. TypeScript was used because the brief mandated that the function take in an `int` data type and return a `String` (Java). This can of course be done in JavaScript, but since JavaScript is dynamically typed, there is no way of ensuring the data types match at runtime. TypeScript gives the app that type safety.

The first part in solving this problem was to do the easy bit! Acceptance criteria were written to show that the class can be instantiated and the function will return the correct string for all numbers which should return single-character Roman numerals. One by one these criteria were turned into tests, and the function was written to pass those tests.

I used an object to store key-value pairs of numbers and numerals. For cases where the input number exactly equals one of the object's keys, the numeral can simply be returned from the function.

```typescript
numerals: object = {
  1000: "M",
  500: "D",
  100: "C",
  50: "L",
  10: "X",
  5: "V",
  1: "I"
};
```

(Since this is a code test and I'm supposed to show off, the complexity of accessing a value in a hash-like objectx is O(1), but accessing a value in an array in O(n). This is the most efficient solution for simple cases.)

More tests were added, first dealing with cases where `2` or `3` were passed to the function.
