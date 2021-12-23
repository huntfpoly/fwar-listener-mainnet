const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TokenBurnSchema = new Schema(
  {
    from: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    blockNumber: {
      unique: true,
      required: true,
      type: String,
    },
    tx: {
      required: true,
      unique: true,
      type: String,
    },
  },
  { collection: "tokenBurns", timestamps: true }
);
const TokenBurn = mongoose.model("tokenBurns", TokenBurnSchema);
module.exports = TokenBurn;
