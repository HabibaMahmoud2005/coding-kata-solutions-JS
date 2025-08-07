//Given an integral number, determine if it's a square number
"use strict";
var isSquare = function (n) {
  if (n < 0) return false;
  if (n === 0 || n === 1) return true;
  for (let i = 1; i < n; i++) if (n / i === i) return true;
  return false; // fix me
};
// Sample tests
const Test = require("@codewars/test-compat");

describe("isSquare", function () {
  it("should work for some examples", function () {
    Test.assertEquals(
      isSquare(-1),
      false,
      "-1: Negative numbers cannot be square numbers"
    );
    Test.assertEquals(isSquare(0), true, "0 is a square number (0 * 0)");
    Test.assertEquals(isSquare(3), false, "3 is not a square number");
    Test.assertEquals(isSquare(4), true, "4 is a square number (2 * 2)");
    Test.assertEquals(isSquare(25), true, "25 is a square number (5 * 5)");
    Test.assertEquals(isSquare(26), false, "26 is not a square number");
  });
});
