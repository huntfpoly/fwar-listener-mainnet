const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    orderId: {
      unique: true,
      type: String, // hex
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      default: "listed",
    },
    //array
    nfts: Array,
    nftContract: {
      type: String,
    },
    token: {
      type: String,
    },
    price: {
      type: Number,
    },
    expiration: {
      type: Number,
    },
  },
  { collection: "orders", timestamps: true }
);
const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
