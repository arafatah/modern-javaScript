// Exporting module
console.log('Exporting module');

const shippingCost = 10;
const cart = [];

// There is two type of exports: default and named
// export default cart;
// export { shippingCost };

// export always need happen at top level code
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

// export mutliple things

 const totalPrice = 237;
 const totalQuantity = 23;

 export { totalPrice, totalQuantity  };