const { getProductById } = require("../products/products.model");

const cart = [];

const getAllCartItems = () => {
  return {
    items: cart
  };
};

const addToCart = ({ id }) => {
  const matchedProduct = getProductById(id);
  if (matchedProduct && cart.indexOf(matchedProduct) === -1) {
    matchedProduct.quantity = 1;
    cart.push(matchedProduct);
  } else {
    matchedProduct.quantity = matchedProduct.quantity + 1;
    matchedProduct.price.totalPrice = matchedProduct.price.initialPrice * matchedProduct.quantity;
  }
  return {
    items: cart,
  };
};
module.exports = {
  getAllCartItems,
  addToCart,
};
