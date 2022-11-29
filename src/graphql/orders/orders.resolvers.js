const ordersModel = require("./orders.model");

const ordersResolvers = {
  Query: {
    orders: () => {
      return ordersModel.getAllOrders();
    },
  },
};


module.exports = ordersResolvers;