const stringFunc = require("./stringFunctions");

describe("reverseString(word) returns the word reversed", () => {
    test("reverseString(word) => drow", () => {
      expect(stringFunc.reverseString("word")).toBe("drow");
    })
    test("reverseString('') => null", () => {
        expect(stringFunc.reverseString("")).toBe(null);
      })
  

  })

describe("isPalindrome(word) determines if word is a palindrome (true) or not (false)", () => {
    test("isPalindrome(word) => false", () => {
      expect(stringFunc.isPalindrome("word")).toBe(false);
    })
    test("isPalindrome('') => false", () => {
        expect(stringFunc.isPalindrome("")).toBe(false);
      })

      test("isPalindrome('obbo') => true", () => {
        expect(stringFunc.isPalindrome("obbo")).toBe(true);
      })

 
  })
