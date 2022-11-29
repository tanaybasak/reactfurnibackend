const cartModel = require("./cart.model");

const cartResolvers = {
  Query: {
    cartItems: () => {
      return cartModel.getAllCartItems();
    },
  },
  Mutation: {
    addToCart: (_, args) => {
      return cartModel.addToCart(args);
    },
  },
};

module.exports = cartResolvers;
