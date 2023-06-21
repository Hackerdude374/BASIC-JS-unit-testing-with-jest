const stringFunc = require("./reverseString");

describe("reverseString(word) returns the word reversed", () => {
    test("reverseString(word) => drow", () => {
      expect(reverseString("word")).toBe("drow");
    })
    test("reverseString('') => null", () => {
        expect(reverseString("")).toBe(null);
      })
  
      test("reverseString('OpenAI') => IAnepO", () => {
        expect(reverseString("OpenAI")).toBe("IAnepO");
      })
  })
