// Importing module
// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// } from './shoppingCart.js';
console.log('Importing module');

// addToCart('Pizza 🍕', 2);
// console.log(price);
// console.log(totalQuantity);

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('Pizza 🍕', 2);
// console.log(ShoppingCart.totalPrice);

import add, { cart } from './shoppingCart.js';
add('Pizza 🍕', 2);
add('bread 🥖', 2);
add('apple 🍎', 11);

console.log(cart);

// Import is not copy of export it's just live connection.

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(res => res.json())
//   .then(data => console.log(data));

// Example of top level await
/* console.log('starting fetching');
const res = await fetch('https://jsonplaceholder.typicode.com/todos');
const data = await res.json();
console.log(data);
console.log('done with fetching'); */

/* const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  // at method return last element
  return { title: data.at(-1).title, text: data.at(-1).body };
};

getLastPost(); */
/* 
const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} Ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})(); 

shoppingCart2.addToCart('apple', 30);
shoppingCart2.addToCart('pizza', 30);
console.log(shoppingCart2);
console.log(shoppingCart2.shippingCost);
*/

/* // CommonJs module 
// one file is one mudule
// Export
export.addToCart = function(product , quantity){
  cart.push({product, quantity})
  console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
}

//import 
const {addToCart} = require('./shoppingCart.js') // require need
 */
// Introduction of NPM
import cloneDeep from 'lodash-es';
const state = {
  car: [
    {
      product: 'bread',
      quantity: 5,
    },
    {
      product: 'bread',
      quantity: 10,
    },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}
