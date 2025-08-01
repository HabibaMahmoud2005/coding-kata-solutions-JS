/*Write a function that takes in a string of one or more words, and returns the same string,
but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present. */

// problem breakdown
//-- the parameter is a string
//-- the return value is a string
//-- searching about to indicate the end of an string in js --> string.length
"use strict";

let spinWords = function (string) {
  let substring = "";
  let reversedString = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      substring += string[i];
    } else {
      if (reversedString.length > 0) reversedString += " ";

      if (substring.length >= 5) {
        reversedString += reverseWord(substring);
      } else {
        reversedString += substring;
      }
      substring = "";
    }
  }

  // Handle the last word after the loop
  if (reversedString.length > 0) reversedString += " ";
  if (substring.length >= 5) {
    reversedString += reverseWord(substring);
  } else {
    reversedString += substring;
  }

  return reversedString;
};

let reverseWord = function (subString) {
  let reversedWord = "";
  for (let i = subString.length - 1; i >= 0; i--) {
    reversedWord += subString[i];
  }
  return reversedWord;
};

// sample Test
const chai = require("chai");
const assert = chai.assert;

describe("Spinning words", () => {
  it("Sample tests", () => {
    assert.strictEqual(spinWords("Welcome"), "emocleW");
    assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
    assert.strictEqual(spinWords("This is a test"), "This is a test");
    assert.strictEqual(
      spinWords("This is another test"),
      "This is rehtona test"
    );
    assert.strictEqual(
      spinWords("You are almost to the last test"),
      "You are tsomla to the last test"
    );
    assert.strictEqual(
      spinWords("Just kidding there is still one more"),
      "Just gniddik ereht is llits one more"
    );
    assert.strictEqual(
      spinWords("Seriously this is the last one"),
      "ylsuoireS this is the last one"
    );
  });
});
