"use strict";

// NOTE: The functions in this module are for educational purposes, not high-performance production use!

const { count, head, tail } = require("../arrayHelpers.js");

const map = (mappingFn, array) =>
  // apply fn to the first element, then call map again, with one less element.
  head(array) === undefined && !tail(array).length
    ? []
    : [mappingFn(head(array)), ...map(mappingFn, tail(array))];

// more cleanly:
// const map = (fn, [head, ...tail]) =>
//   head === undefined && !tail.length ? [] : [fn(head), ...map(fn, tail)];

const filter = (predicateFn, array) =>
  // TODO
  head(array) === undefined && !tail(array).length
    ? []
    : predicateFn(head(array))
    ? [head(array), ...filter(predicateFn, tail(array))]
    : [...filter(predicateFn, tail(array))];

const reduce = (reducerFn, initialValue, array) =>
  // TODO
  // NOTE: many reduce implementations treat the initialValue argument as optional - here we'll require it, for simplicity

  head(array) === undefined && !tail(array).length
    ? initialValue
    : reduce(reducerFn, reducerFn(initialValue, head(array)), tail(array));

module.exports = { filter, map, reduce };
