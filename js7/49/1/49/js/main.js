"use strict";

const log = function (a, b, ...rest) {
  console.log(a, b, rest);
};

log("basic", "rest", "operator", "usage");

function calcOrDouble(namber, basis = 2) {
  console.log(namber * basis);
}

calcOrDouble(3);
