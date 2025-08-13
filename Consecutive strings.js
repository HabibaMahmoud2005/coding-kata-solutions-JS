//You are given an array(list) strarr of strings and an integer k.
// Your task is to return the first longest string consisting of k consecutive strings taken in the array.
"use strict";
function longestConsec(strarr, k) {
  const n = strarr.length;
  if (n === 0 || k > n || k <= 0) return "";

  let longestString = "";
  for (let i = 0; i <= n - k; i++) {
    let concString = "";
    for (let p = 0; p < k; p++) {
      concString += strarr[i + p];
    }
    if (concString.length > longestString.length) longestString = concString;
  }
  return longestString;
}
// Sample Tests
const { assert } = require("chai");

describe("longestConsec", function () {
  it("Basic tests", function () {
    assert.strictEqual(
      longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2),
      "abigailtheta"
    );
    assert.strictEqual(
      longestConsec(
        [
          "ejjjjmmtthh",
          "zxxuueeg",
          "aanlljrrrxx",
          "dqqqaaabbb",
          "oocccffuucccjjjkkkjyyyeehh",
        ],
        1
      ),
      "oocccffuucccjjjkkkjyyyeehh"
    );
    assert.strictEqual(longestConsec([], 3), "");
    assert.strictEqual(
      longestConsec(
        [
          "itvayloxrp",
          "wkppqsztdkmvcuwvereiupccauycnjutlv",
          "vweqilsfytihvrzlaodfixoyxvyuyvgpck",
        ],
        2
      ),
      "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
    );
    assert.strictEqual(
      longestConsec(
        ["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"],
        2
      ),
      "wlwsasphmxxowiaxujylentrklctozmymu"
    );
    assert.strictEqual(
      longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2),
      ""
    );
    assert.strictEqual(
      longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3),
      "ixoyx3452zzzzzzzzzzzz"
    );
    assert.strictEqual(
      longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15),
      ""
    );
    assert.strictEqual(
      longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0),
      ""
    );
  });
});
