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

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  // at method return last element
  return { title: data.at(-1).title, text: data.at(-1).body };
};

getLastPost();
 
