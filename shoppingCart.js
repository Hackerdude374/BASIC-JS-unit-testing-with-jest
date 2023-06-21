
 cart:{}; //object list

function addToCart(item, quantity){
    //case 1: item already in cart, update the quantity 
    if(item in this.cart)
    this.cart[item] +=quantity;
    else
    this.cart[item] = quantity;
}

function removeFromCart(item, quantity){
    //case 1: item quantity = quantity deleted  or less = delete the whole thing
    if(this.cart[item] <= quantity){
        delete this.cart[item];
    }
    else
    this.cart[item]-=quantity;
}
function calculateTotal(){
let sum = 0;
for(let item in this.cart){
    let quantity = this.cart[item];
    sum = sum + item.price *quantity; //price times quantity
}
return sum;
}

module.exports = {
    calculateTotal : calculateTotal,
    removeFromCart: removeFromCart,
    addToCart: addToCart

}
