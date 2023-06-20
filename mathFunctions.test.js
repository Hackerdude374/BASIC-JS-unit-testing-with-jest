let calculator = require("./mathFunctions");

describe("add(a,b) returns the sum of a and b", () => {
    test("add(0,0) => 0", () => {
      expect(calculator.add(0,0)).toEqual(0);
    })

    test("add(5,0) => 5", () => {
        expect(calculator.add(5,0)).toEqual(5);
      })
      test("add(69,200) => 269", () => {
        expect(calculator.add(69,200)).toEqual(269);
      })
  })

describe("multiply(a,b) returns the product of a and b", () => {
    test("multiply(0,0) => 0", () => {
      expect(calculator.multiply(0,0)).toEqual(0);
    })

    test("multiply(5,0) => 0", () => {
        expect(calculator.multiply(5,0)).toEqual(0);
      })
      test("multiply(9999999,1) => ", () => {
        expect(calculator.multiply(9999999,1)).toEqual(9999999);
      })
  })

  describe("divide(a,b) returns the quotient  of a and b", () => {
    test("divide(9,0) => 0", () => {
      expect(calculator.divide(9,0)).toBe(null);
    })

    test("divide(0,1) => 0", () => {
        expect(calculator.divide(0,1)).toBe(0);
      })

      test("divide(999,999) => 1", () => {
        expect(calculator.divide(999,999)).toBe(1);
      })

      test("divide(99,11) => 9", () => {
        expect(calculator.divide(99,11)).toBe(9);
      })
      

  })

  describe("subtract(a,b) returns the difference of a and b", () => {
    test("subtract(0,0) => 0", () => {
      expect(calculator.subtract(0,0)).toEqual(0);
    })

    test("subtract(599,0) => 599", () => {
        expect(calculator.subtract(599,0)).toEqual(599);
      })
      test("subtract(69,-5) => 74", () => {
        expect(calculator.subtract(69,-5)).toEqual(74);
      })
      test("subtract(19,19) => 0", () => {
        expect(calculator.subtract(19,19)).toEqual(0);
      })
  })

  
