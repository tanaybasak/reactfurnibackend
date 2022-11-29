const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Product", productSchema);
