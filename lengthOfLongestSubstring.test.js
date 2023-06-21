const lengthOfLongestSubstring = require("./lengthOfLongestSubString");

describe("lengthOfLongestSubstring returns the length of a non repeating longest string.", () => {
    test("lengthOfLongestSubstring(abcabcbb)", () => {
      expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
    })
    test("lengthOfLongestSubstring(bbbbb)", () => {
        expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
      })
      test("lengthOfLongestSubstring(pwwkew)", () => {
        expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
      })
})
