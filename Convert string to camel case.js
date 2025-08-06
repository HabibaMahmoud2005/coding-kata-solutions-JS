/*Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized. */
/*Examples
-----------
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
 */
"use strict";
function toCamelCase(str) {
  // Process the first word
  let firstWord = "";
  let i = 0;
  for (; i < str.length; i++) {
    if (str[i] !== "-" && str[i] !== "_") {
      firstWord += str[i];
    } else {
      break;
    }
  }

  // Remove first word from the string
  str = str.substring(i);

  // Process the rest of the string
  let reststring = "";
  for (i = 0; i < str.length; i++) {
    if (str[i] === "-" || str[i] === "_") {
      if (str[i + 1]) {
        reststring += str[i + 1].toUpperCase();
        i++; // Skip the character just added
      }
    } else {
      reststring += str[i];
    }
  }

  return firstWord + reststring;
}

//Sample Tests
const { assert } = require("chai");

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(
      toCamelCase(""),
      "",
      "An empty string was provided but not returned"
    );
    assert.strictEqual(
      toCamelCase("the_stealth_warrior"),
      "theStealthWarrior",
      "toCamelCase('the_stealth_warrior') did not return correct value"
    );
    assert.strictEqual(
      toCamelCase("The-Stealth-Warrior"),
      "TheStealthWarrior",
      "toCamelCase('The-Stealth-Warrior') did not return correct value"
    );
    assert.strictEqual(
      toCamelCase("A-B-C"),
      "ABC",
      "toCamelCase('A-B-C') did not return correct value"
    );
  });
});
