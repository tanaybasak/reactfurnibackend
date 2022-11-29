const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
  items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  subtotal: {
    type: Float,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Orders", ordersSchema);
