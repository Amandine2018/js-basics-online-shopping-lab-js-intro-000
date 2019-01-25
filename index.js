var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObject = {itemName : item,
                    price : Math.ceil((Math.random() * 100)
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
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
