/*Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S,
 this process should be repeated N times.
 Together with the encryption function, you should also implement a decryption function which reverses the process. If the string S is an empty value or the integer N is not positive, return the first argument without changes.*/
// Problem breakdown
//- How decrypt function works ? we want to have the original text again
//- split the encryptedText into 2 halves , one for the original odd-indexed chracters annd the other one for the original even-indexed ones
//- take char from the even-indexed first to get the original text back in the right order
//- take char from the odd-indexed and repeat
"use strict";
function encrypt(text, n) {
  //If the string S is an empty value or the integer N is not positive, return the first argument without changes.
  if (!text || n <= 0) return text;

  while (n--) {
    let evenIndexed = "";
    let oddIndexed = "";
    for (let j = 0; j < text.length; j++) {
      if (j % 2 === 0) evenIndexed += text[j];
      else oddIndexed += text[j];
    }
    text = oddIndexed + evenIndexed;
  }
  return text;
}

function decrypt(encryptedText, n) {
  //If the string S is an empty value or the integer N is not positive, return the first argument without changes.
  if (!encryptedText || n <= 0) return encryptedText;
  while (n--) {
    let oddIndexed = encryptedText.slice(
      0,
      Math.floor(encryptedText.length / 2)
    );
    let evenIndexed = encryptedText.slice(Math.floor(encryptedText.length / 2));
    let decryptedText = "";
    for (let j = 0; j < encryptedText.length; j++) {
      if (j % 2 === 0) evenIndexed += encryptedText[j];
      else oddIndexed += encryptedText[j];
    }
    for (let i = 0; i < encryptedText.length; i++) {
      if (i % 2 === 0) {
        decryptedText += evenIndexed[0];
        evenIndexed = evenIndexed.substring(1);
      } else {
        decryptedText += oddIndexed[0];
        oddIndexed = oddIndexed.substring(1);
      }
    }
    encryptedText = decryptedText;
  }
  return encryptedText;
}
//Sample Tests
const Test = require("@codewars/test-compat");

describe("Solution", function () {
  it("EncryptExampleTests", function () {
    Test.assertEquals(encrypt("This is a test!", 0), "This is a test!");
    Test.assertEquals(encrypt("This is a test!", 1), "hsi  etTi sats!");
    Test.assertEquals(encrypt("This is a test!", 2), "s eT ashi tist!");
    Test.assertEquals(encrypt("This is a test!", 3), " Tah itse sits!");
    Test.assertEquals(encrypt("This is a test!", 4), "This is a test!");
    Test.assertEquals(encrypt("This is a test!", -1), "This is a test!");
    Test.assertEquals(
      encrypt("This kata is very interesting!", 1),
      "hskt svr neetn!Ti aai eyitrsig"
    );
  });
});

describe("Solution", function () {
  it("DecryptExampleTests", function () {
    Test.assertEquals(decrypt("This is a test!", 0), "This is a test!");
    Test.assertEquals(decrypt("hsi  etTi sats!", 1), "This is a test!");
    Test.assertEquals(decrypt("s eT ashi tist!", 2), "This is a test!");
    Test.assertEquals(decrypt(" Tah itse sits!", 3), "This is a test!");
    Test.assertEquals(decrypt("This is a test!", 4), "This is a test!");
    Test.assertEquals(decrypt("This is a test!", -1), "This is a test!");
    Test.assertEquals(
      decrypt("hskt svr neetn!Ti aai eyitrsig", 1),
      "This kata is very interesting!"
    );
  });
});

describe("Solution", function () {
  it("Null or Empty", function () {
    Test.assertEquals(encrypt("", 0), "");
    Test.assertEquals(decrypt("", 0), "");
    Test.assertEquals(encrypt(null, 0), null);
    Test.assertEquals(decrypt(null, 0), null);
  });
});
