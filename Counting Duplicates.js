/*Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain
only alphabets (both uppercase and lowercase) and numeric digits.*/

// Problem breakdown
//-- frequency array for alphabets and digits , considering upper and lower case as the same
//-- how to make a frequency array for alphabets ? convert them to ASCII code , How ?? charCodeAt()
//-- to allocate a freequency array of only 36 place , as 26 for alphabets , 10 for the digits
"use strict";
function duplicateCount(text) {
  const frequencyArray = new Array(36).fill(0);
  for (let i = 0; i < text.length; i++) {
    if (text[i].charCodeAt(0) >= 97) {
      // lower case
      frequencyArray[text[i].charCodeAt(0) - 55 - 32]++;
    } else if (text[i].charCodeAt(0) >= 65) {
      // upper case
      frequencyArray[text[i].charCodeAt(0) - 55]++;
      // (-55) to convert the ASCII code to a number between 10:35 to optimize the storage
    } else if (text[i].charCodeAt(0) >= 0 && text[i].charCodeAt(0) <= 9) {
      // digits
      frequencyArray[text[i]]++;
    }
  }
  let count = 0;
  for (let j = 0; j < frequencyArray.length; j++)
    if (frequencyArray[j] > 1) count++;
  return count;
}

// Sample Test
const { assert } = require("chai");

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(duplicateCount(""), 0);
    assert.strictEqual(duplicateCount("abcde"), 0);
    assert.strictEqual(duplicateCount("aabbcde"), 2);
    assert.strictEqual(duplicateCount("aabBcde"), 2, "should ignore case");
    assert.strictEqual(duplicateCount("Indivisibility"), 1);
    assert.strictEqual(
      duplicateCount("Indivisibilities"),
      2,
      "characters may not be adjacent"
    );
  });
});
