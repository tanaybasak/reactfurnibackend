const productsModel = require("./products.model");

const productsResolvers = {
  Query: {
    products: (_, args) => {
      return productsModel.getAllProducts(args);
    },
    productsByPrice: (_, args) => {
      return productsModel.getProductsByPrice(args.min, args.max);
    },
    productsById: (_, args) => {
      return productsModel.getProductById(args.id);
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
      return productsModel.addNewProduct(
        args.id,
        args.description,
        args.price,
        args.image
      );
    },
    addNewProductReview: (_, args) => {
      return productsModel.addNewProductReview(
        args.id,
        args.rating,
        args.comment
      );
    },
    addNewProductOverview: (_, args) => {
      return productsModel.addNewProductOverview(
        args.sku,
        args.seater,
        args.finish,
        args.material,
        args.color,
        args.features,
        args.brand
      );
    },
  },
};

module.exports = productsResolvers;
