"use strict";

const test = require("tape");

test("imperativeFactorial()", (assert) => {
  const msg = "should return the correct factorial value";

  const actual = imperativeFactorial(10);
  const expected = 3628800;

  assert.deepEqual(actual, expected, msg);
  assert.end();
});

test("recursiveFactorial()", (assert) => {
  const msg = "should return the correct factorial value";

  const actual = recursiveFactorial(10);
  const expected = 3628800;

  assert.deepEqual(actual, expected, msg);
  assert.end();
});

test("tailRecursiveFactorial()", (assert) => {
  const msg = "should return the correct factorial value";

  const actual = tailRecursiveFactorial(10);
  const expected = 3628800;

  assert.deepEqual(actual, expected, msg);
  assert.end();
});

const imperativeFactorial = (n) => {
  // TODO
  var result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
};

// this is NOT tail-recursive because the value returned by
// recursiveFactorial(n-1) is used in recursiveFactorial(n)

/*
  the call stack:
  recursiveFactorial(5);
  5 * recursiveFactorial(4);
  5 * (4 * recursiveFactorial(3));
  5 * (4 * (3 * recursiveFactorial(2)));
  5 * (4 * (3 * (2 * recursiveFactorial(1))));
  5 * (4 * (3 * (2 * 1)));
  120;

  every call on the stack has to be completed before the sum can be calculated
*/

const recursiveFactorial = (n) => {
  // TODO
  if (n === 1 || n === 2) return n;
  else return n * recursiveFactorial(n - 1);
};

// the call to tailRecursiveFactorial(n-1) should be the last thing done
// by tailRecursiveFactorial(n), i.e. tailRecursiveFactorial(n-1) should
// do no more work after it is evaluated
const tailRecursiveFactorial = (n, m = 1) => {
  // TODO
  if (n === 0) return m;
  return tailRecursiveFactorial(n - 1, n * m);
};

/*
  the call stack:
  tailRecursiveFactorial(5, 1);
  tailRecursiveFactorial(4, 5*1);
  tailRecursiveFactorial(3, 4*5);
  tailRecursiveFactorial(2, 3*20);
  tailRecursiveFactorial(1, 2*60);
  tailRecursiveFactorial(0); return 120;

  every call on the stack has to be completed before the sum can be calculated
  the variable m allows a calculation to be done at every call
*/
