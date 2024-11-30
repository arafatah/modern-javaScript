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

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const Arafat = new Person('Arafat');

console.log('Arafat' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// Polifilling async functions
import 'regenerator-runtime/runtime';

/* 
- Modern and Clean Code

**Readable code —** 

1. Write code so that others can understand it. 
2. Write code so that you can understand it in 1 year. 
3. Avoid too “clever” and overcomplicated solutions 
4. Use descriptive variable names: What they contain 
5. Use descriptive function name: what they do. 

**General —-**

1. Use DRY principle (refactor your code) 
2. Don’t pollute the global namespace, encapsulate instead
3. Don’t use var 
4. Use strong type checks (=== and ≠=)

**Functions —-**

1. Generally, functions should do only one thing
2. Don’t use more that 3 function parameters
3. Use default parameters whenever possible 
4. Generally, return the same data type as received 
5. Use arrow functions when they make code more readable 

**Object-oriented programming (OOP)oriented —-**

1. Use Es6 classes 
2. Encapsulate data and don’t mutate it from outside of class 
3. Implement method chaining 
4. Do not use arrow functions as methods (in regular objects)

**Avoid nested code —-**

1. Use early return (guard clauses)
2. Use ternary (conditional) or logical operators instead of “ **if** ”
3. Use multiple if instead of if/else-if 
4. Avoid for loops, use array methods instead 
5. Avoid callback-based asynchronous APIs

**Asynchronous code —-** 

1. Consume promise with async/await for best readability 
2. Whenever possible, run promises in parallel (Promis.all)
3. Handle errors and promise rejections
*/

// There are two fundamentally different ways of writing code(Paradigms): Imperative vs Declarative
/* 
Imperative ---
Programmer explains "HOW to do things" 
We explain the computer every single stem it has to follow to achieve a result. 
Example: Step-by-step recipe of a cake. 

Declarative ---
Programmer explains "WHAT to do"
We simply describe way the computer should achieve the result. 
The HOW (step-by-step instructions) gets abstracted away.
Example: A description of a cake.

----

Functional programming ---
Declarative programming paradigm 
Based on the idea of writing software by combining many pure functions, avoiding side effects and mutating data. 

Side effect: Modification (mutation) of any data outside of the function (mutating external variables, logging to console, writing to DOM, etc). 

Pure function: Function without side effects, Does not depend on external variables. Given the same inputs, always returns the same outputs. 

Immutability: State (data) is never modified! Instead, state is copied and the copy is mutated and returned. 

> Functional Programming Techniques <
Try to avoid data mutation 
Use built-in methods that don't produce side effects 
Do data transformations with methods such as .map() .filter() .reduce()
Try to avoid side effects in functions: this is of course not always possible! 

Declarative Syntax 
Use array and object destructuring 
Use the spread operator (...)
Use the ternary(conditional) operator (?:)
Use template literals (``)
*/
