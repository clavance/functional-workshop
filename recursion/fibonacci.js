"use strict";

var test = require("tape");

test("imperativeFibonacci()", (assert) => {
  const msg = "should return the correct Fibonacci value";
  const actual = imperativeFibonacci(10);
  const expected = 55;

  assert.deepEqual(actual, expected, msg);
  assert.end();
});

test("recursiveFibonacci()", (assert) => {
  const msg = "should return the correct Fibonacci value";
  const actual = recursiveFibonacci(10);
  const expected = 55;

  assert.deepEqual(actual, expected, msg);
  assert.end();
});

test("tailRecursiveFibonacci()", (assert) => {
  const msg = "should return the correct Fibonacci value";
  const actual = tailRecursiveFibonacci(10);
  const expected = 55;

  assert.deepEqual(actual, expected, msg);
  assert.end();
});

const imperativeFibonacci = (n) => {
  // TODO
  let temp,
    a = 0,
    b = 1;
  while (n >= 0) {
    temp = a;
    a += b;
    b = temp;
    n--;
  }

  return b;
};

const recursiveFibonacci = (n) => {
  // TODO
  if (n === 0 || n === 1) return n;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

const tailRecursiveFibonacci = (n, a = 0, b = 1) => {
  // TODO
  if (n > 0) return tailRecursiveFibonacci(n - 1, b, a + b);
  return a;
};
