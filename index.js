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

function getCart() {
  return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  const price = Math.floor(Math.random() * 100)

  cart.push({ [item]: price })

  console.log(`${item} has been added to your cart.`)

  return cart
}

function viewCart() {
  const l = cart.length

  if (!l) {
    return console.log("Your shopping cart is empty.")
  }

  const itemsAndPrices = []

  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i]
    let item = Object.keys(itemAndPrice)[0]
    let price = itemAndPrice[item]

    itemsAndPrices.push(`${item} at \$${price}`)
  }

  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}

function removeFromCart(item) {
  let itemInCart = false

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }

  if (!itemInCart) {
    console.log("That item is not in your cart.")
  }

  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

  cart = []
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

