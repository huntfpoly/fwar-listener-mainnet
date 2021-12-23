const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OpenChestHistorySchema = new Schema(
  {
    nfts: { type: Array },

    amount: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    transactionHash: {
      type: String,
      unique: true,
    },
  },
  { collection: "OpenChestHistory", timestamps: true }
);
const OpenChestHistory = mongoose.model(
  "OpenChestHistory",
  OpenChestHistorySchema
);
module.exports = OpenChestHistory;
