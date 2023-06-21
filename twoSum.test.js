const twoSum = require("./twoSum");

describe("twoSum returns indices of two numbers that equal a target sum", () => {
    test("twoSum([1,2,3],3) => [0,1]", () => {
      
      expect((twoSum([1,2,3],3))).toEqual([0,1]);

    })
  
    test("twoSum([6,2,3],3) => []", () => {
      
        expect((twoSum([6,2,3],3))).toEqual([]);
  
      })
  

  })
