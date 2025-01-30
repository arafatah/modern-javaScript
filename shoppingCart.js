// Exporting module
console.log('Exporting module');

export const shippingCost = 10;
export const cart = [];

// There is two type of exports: default and named
// export default cart;
// export { shippingCost };

// export always need happen at top level code
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

// export multiple things

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };

// We use default exports when we want to export one thing
// We use named exports when we want to export multiple things

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
