"use strict";

var test = require("tape");

// The refactored pure function should pass these tests
test("setPrice()", (assert) => {
  const msg = "setPrice() should set the price in the given item object.";
  const immutable = "original should not be mutated";

  const item = {
    name: "test",
    price: 30,
  };
  const copy = Object.assign({}, item);

  const actual = setPrice(item, 50);
  const expected = {
    name: "test",
    price: 50,
  };

  assert.deepEqual(actual, expected, msg);
  assert.deepEqual(item, copy, immutable);
  assert.end();
});

test("addToCart()", (assert) => {
  const msg = "should add item to cart";
  const immutable = "original should not be mutated";

  const originalCart = [];
  const item = {
    name: "Violator",
    price: 30,
  };
  const copy = originalCart.slice();

  const actual = addToCart(originalCart, item);
  const expected = [item];

  assert.deepEqual(actual, expected, msg);
  assert.deepEqual(originalCart, copy, immutable);
  assert.end();
});

// TODO Copy the impure version of your function here:

// setPrice(item: Object, price: Number) => item: Object
// const setPrice = (item, price) => Object.assign(item, { price });

// addToCart(cart: Array, item: Object) => cart: Array
// const addToCart = (cart, item) => {
//   cart.push(item);
//   return cart;
// };

// TODO Now write a refactored, pure version of the function:
const setPrice = (item, price) => {
  return { ...item, price };
};

const addToCart = (cart, item) => {
  return [...cart, item];
};
