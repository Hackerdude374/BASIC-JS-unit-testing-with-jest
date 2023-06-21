const maxArea = require("./containerWithMostWater");

describe("maxArea returns area of two largest numbers in an array", () => {
    test("maxArea([1,8,6,2,5,4,8,3,7] = 56", () => {
      expect(maxArea([1,8,6,2,5,4,8,3,7])).toEqual(56);
    })
    test("maxArea([1,2,1] = 2", () => {
        expect(maxArea([1,2,1])).toEqual(2);
      })
})
