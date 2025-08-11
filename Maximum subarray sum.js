/*The maximum sum subarray problem consists in finding
the maximum sum of a contiguous subsequence in an array or list of integers*/
"use strict";
//Kadane’s algorithm
var maxSequence = function (arr) {
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(0, currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};
//Sample Tests
const { assert } = require("chai");

describe("maxSequence", function () {
  it("should work on an empty array", function () {
    assert.strictEqual(maxSequence([]), 0);
  });
  it("should work on the example", function () {
    assert.strictEqual(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
  });
});
