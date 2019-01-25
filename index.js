/* var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.ceil(Math.random() * 100);
  var itemObject = {itemName : item,
                    price :itemPrice
                  };
  cart.push(itemObject);
  return `${itemObject.itemName} has been added to your cart.`
}


function addToCart(item) {
  var itemObject = {itemName : item,
                    price : Math.ceil(Math.random() * 100)
                  }
  cart.push(itemObject);
  return `${itemObject.itemName} has been added to your cart.`
}

function viewCart() {
  var message = "";
  if (cart.length === 0) {
    message = "Your shopping cart is empty."
  } else {
    message = "In your cart, you have "
  }
  for (let i = 0; i < cart.length; i++) {
    message += `${cart[i].itemName} at $${cart[i].price}`;
    if (i < cart.length -2) {
      message += ", ";
    } else if (i == cart.length -2) {
      message += " and ";
    } else {
      message += ".";
    }
  }
  return message;
}

function total() {
  var tot = 0;
  for (let i = 0; i < cart.length; i++) {
    tot += cart[i].price;
  }
  return tot;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].itemName == item) {
      cart.splice(i, 1);
      return viewCart();
    } else {
      return("That item is not in your cart.");
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
*/

var cart = []


 function setCart(newCart) {	function setCart(newCart) {
  cart = newCart;	  cart = newCart;
@@ -15,3 +15,70 @@ function total() {


   return t	  return t
}	}

 function getCart(){
  return cart
}

 function addToCart(item){
var price = Math.floor(Math.random()*99)
cart.push(new Object({[item]:price}))
console.log(`${item} has been added to your cart.`)
return cart

 }

 function viewCart (){
if(cart.length === 0){
  console.log(`Your shopping cart is empty.`)
}
else{
      var myString = "In your cart, you have "

         for(var i = 0, l = cart.length; i < l; i++){
            for(var list in cart[i]){
            myString+=`${list} at $${cart[i][list]}`
                if(i!==cart.length-1){
                  myString+=", "
                }
                else{
                  myString+="."
                }
              }

             }

       console.log(myString)
  }

 }

 function removeFromCart(item){

   for(var i = 0, l = cart.length; i < l; i++){

   for(var list in cart[i]){
      if(item === list){
        cart.splice(i,1)
        return cart
       }
    }
  }

   console.log("That item is not in your cart.")
  return cart
}

 function placeOrder(cardNumber) {

 if (cardNumber === undefined){
  console.log("We don't have a credit card on file for you to place your order.")
}
else{

   console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
  return cart
}

 }
