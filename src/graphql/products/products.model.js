const products = [
  {
    id: 1,
    name: "Winster 5 Seater Wooden",
    description: "(Honey Finish, Irish Cream)",
    price: { initialPrice: 35.5, totalPrice: 35.5 },
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    reviews: [
      {
        rating: 5,
        comment: "A comment",
      },
    ],
    overview: [
      {
        sku: "WSWNS017HF8241",
        seater: "3 + 1 + 1",
        finish: "Honey Finish",
        material: "Sheesham wood",
        color: "Irish Cream",
        features:
          "Comfortable cushion seating and functional storage at the sides.",
        brand: "Wooden Street",
      },
    ],
  },
  {
    id: 2,
    name: "Taurus Engineered Wood Bed with Storage",
    description: "Queen, 78 60, With Storage| 1.98m x 1.52m",
    price: { initialPrice: 11484, totalPrice: 11484 },
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    reviews: [
      {
        rating: 5,
        comment: "B comment",
      },
    ],
    overview: [
      {
        sku: "WSWNS017HF8241",
        seater: "3 + 1 + 1",
        finish: "Honey Finish",
        material: "Sheesham wood",
        color: "Irish Cream",
        features:
          "Comfortable cushion seating and functional storage at the sides.",
        brand: "Wooden Street",
      },
    ],
  },
  {
    id: 3,
    name: "Minnelli 2 Fabric Loveseat In Retro Patchwork Colour",
    description: "A Small sofa",
    price: { initialPrice: 24375, totalPrice: 24375 },
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    reviews: [
      {
        rating: 5,
        comment: "B comment",
      },
    ],
    overview: [
      {
        sku: "WSWNS017HF8241",
        seater: "3 + 1 + 1",
        finish: "Honey Finish",
        material: "Sheesham wood",
        color: "Irish Cream",
        features:
          "Comfortable cushion seating and functional storage at the sides.",
        brand: "Wooden Street",
      },
    ],
  },
  {
    id: 4,
    name: "Raymond Wooden Sofa",
    description: "American Walnut Finish (Midnight Indigo Blue)",
    price: { initialPrice: 35554, totalPrice: 35523 },
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    reviews: [
      {
        rating: 5,
        comment: "A comment",
      },
    ],
    overview: [
      {
        sku: "WSWNS017HF8241",
        seater: "3 + 1 + 1",
        finish: "Honey Finish",
        material: "Sheesham wood",
        color: "Irish Cream",
        features:
          "Comfortable cushion seating and functional storage at the sides.",
        brand: "Wooden Street",
      },
    ],
  },
  {
    id: 5,
    name: "Milton Diwan In Grey Colour",
    description: "Teak Finish (Green Olivia)",
    price: { initialPrice: 21375, totalPrice: 21375 },
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    reviews: [
      {
        rating: 5,
        comment: "B comment",
      },
    ],
    overview: [
      {
        sku: "WSWNS017HF8241",
        seater: "3 + 1 + 1",
        finish: "Honey Finish",
        material: "Sheesham wood",
        color: "Irish Cream",
        features:
          "Comfortable cushion seating and functional storage at the sides.",
        brand: "Wooden Street",
      },
    ],
  },
  {
    id: 6,
    name: "Liam Engineered Wood Free",
    description: "standing TV Unit In Classic Walnut Finish",
    price: { initialPrice: 35.5, totalPrice: 35.5 },
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    reviews: [
      {
        rating: 5,
        comment: "B comment",
      },
    ],
    overview: [
      {
        sku: "WSWNS017HF8241",
        seater: "3 + 1 + 1",
        finish: "Honey Finish",
        material: "Sheesham wood",
        color: "Irish Cream",
        features:
          "Comfortable cushion seating and functional storage at the sides.",
        brand: "Wooden Street",
      },
    ],
  },
  {
    id: 7,
    name: "a Medium Sofa",
    description: "A medium sofa",
    price: { initialPrice: 35.5, totalPrice: 35.5 },
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    reviews: [
      {
        rating: 5,
        comment: "B comment",
      },
    ],
    overview: [
      {
        sku: "WSWNS017HF8241",
        seater: "3 + 1 + 1",
        finish: "Honey Finish",
        material: "Sheesham wood",
        color: "Irish Cream",
        features:
          "Comfortable cushion seating and functional storage at the sides.",
        brand: "Wooden Street",
      },
    ],
  },
  {
    id: 8,
    name: "very small Sofa",
    description: "very small Sofa",
    price: { initialPrice: 35.5, totalPrice: 35.5 },
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    reviews: [
      {
        rating: 5,
        comment: "B comment",
      },
    ],
    overview: [
      {
        sku: "WSWNS017HF8241",
        seater: "3 + 1 + 1",
        finish: "Honey Finish",
        material: "Sheesham wood",
        color: "Irish Cream",
        features:
          "Comfortable cushion seating and functional storage at the sides.",
        brand: "Wooden Street",
      },
    ],
  },
];

const getAllProducts = ({ limit, afterCursor }) => {
  let afterIndex = 0;
  let data = products;
  if (afterCursor) {
    let nodeIndex = data.findIndex(
      (datum) => datum.id === parseInt(afterCursor)
    );

    if (nodeIndex >= 0) {
      afterIndex = nodeIndex + 1;
    }
  }

  const sliceData = data.slice(afterIndex, afterIndex + limit);
  const edges = sliceData.map((node) => ({
    node,
    cursor: node.id,
  }));

  let startCursor = null;
  if (edges.length > 0) {
    startCursor = edges[edges.length - 1].cursor;
  }

  let hasNextPage = data.length > afterIndex + limit;

  return {
    totalCount: data.length,
    edges,
    pageInfo: {
      startCursor,
      hasNextPage,
    },
  };
};

const getProductsByPrice = (min, max) => {
  return products.filter((product) => {
    return product.price <= max && product.price >= min;
  });
};

const getProductById = (_id) => {
  return products.find((product) => {
    return product.id == _id;
  });
};

const addNewProduct = (id, description, price, image) => {
  const newProduct = {
    id,
    description,
    price,
    image,
    reviews: [],
    overview: []
  };

  products.push(newProduct);
  return newProduct;
};

const addNewProductReview = (id, rating, comment) => {
  const matchedProduct = getProductById(id);
  if (matchedProduct) {
    const newProductReview = {
      rating,
      comment,
    };
    matchedProduct.reviews.push(newProductReview);
    return newProductReview;
  }
};

const addNewProductOverview = (
  sku,
  seater,
  finish,
  material,
  color,
  features,
  brand
) => {
  const matchedProduct = getProductById(id);
  if (matchedProduct) {
    const newProductOverview = {
      sku,
      seater,
      finish,
      material,
      color,
      features,
      brand
    };
    matchedProduct.reviews.push(newProductOverview);
    return newProductOverview;
  }
};

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
  addNewProductOverview
};
