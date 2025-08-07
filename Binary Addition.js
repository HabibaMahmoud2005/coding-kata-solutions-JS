/*Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.*/
"use strict";
function addBinary(a, b) {
  let number = a + b;
  return toBinary(number);
}
function toBinary(decimalNumber) {
  if (decimalNumber === 0) return "0";
  let arr = new Array();
  while (decimalNumber !== 0) {
    arr.unshift(decimalNumber % 2);
    decimalNumber = Math.trunc(decimalNumber / 2);
  }
  let binaryNumber = "";
  for (let i = 0; i < arr.length; i++) binaryNumber += arr[i];
  return binaryNumber;
}
// sample tests
const { assert } = require("chai");

describe("Sample tests", function () {
  it('Should return "10" for 1 + 1', function () {
    let actual = addBinary(1, 1);
    assert.isDefined(
      actual,
      "You should return your solution! Did you log it to console instead?"
    );
    assert.strictEqual(actual, "10");
  });
  it('Should return "1" for 0 + 1', function () {
    let actual = addBinary(0, 1);
    assert.strictEqual(actual, "1");
  });
  it('Should return "11" for 1 + 2', function () {
    let actual = addBinary(1, 2);
    assert.strictEqual(actual, "11");
  });
  it('Should return "111111" for 51 + 12', function () {
    let actual = addBinary(51, 12);
    assert.strictEqual(actual, "111111");
  });
  it('Should return "1100100"', function () {
    let actual = addBinary(100, 0);
    assert.strictEqual(actual, "1100100");
  });
});
