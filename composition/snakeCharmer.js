"use strict";

const { pipeline, reducePipeline } = require("./pipeline.js");
const { count, head, tail } = require("../arrayHelpers.js");
const { map, reduce, filter } = require("../higher-order/filterMapReduce.js");

// TODO Define reusable, single-argument functions for pipelining here
const desnake = snake => snake.split("_");
const capitalise = word => word[0].toUpperCase() + word.substr(1).toLowerCase();
const capitaliseAll = words => map(capitalise, words);
const camelize = ([head, ...tail]) => [...head, ...capitaliseAll(tail)];
const concatenate = string => reduce((acc, str) => acc + str, "", string);

const hyphenate = ([head, ...tail]) =>
  reduce((acc, str) => [acc, str].join("-"), head, tail);

const snakeToCamel = reducePipeline(desnake, camelize, concatenate);
const snakeToTrain = pipeline(desnake, capitaliseAll, hyphenate, concatenate);

module.exports = { snakeToCamel, snakeToTrain };
