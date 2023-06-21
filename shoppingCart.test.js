const shop = require('./shoppingCart');


describe("addToCart adds item to list based on quantity", () => {
    beforeEach(()=>{
        shop.cart ={};
    
})
    test("addToCart('balls',3) should have cart to have 3 balls", () => {
    shop.addToCart('balls',3);
      expect(shop.cart).toEqual({balls:3});
    })

    test("additional function addToCart('balls',7) should have cart to have 10 balls", () => {
        shop.addToCart('balls',3);
        shop.addToCart('balls',7);
          expect(shop.cart).toEqual({balls:10});
        })
    

  })

  describe("removeFromCart removes item from list based on quantity", () => {
    beforeEach(()=>{
        shop.cart ={hammers:9};
    
})
    test("removeFromCart('hammers',10) should have cart to have 0 hammers (empty)", () => {
    shop.removeFromCart('hammers',10);
      expect(shop.cart).toEqual({});
    })

    test("removeFromCart('hammers',3) should have cart to have 6 hammers", () => {
        shop.removeFromCart('hammers',3);
          expect(shop.cart).toEqual({hammers:6});
        })
   
    

  })
