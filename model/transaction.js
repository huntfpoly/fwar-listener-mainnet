const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TransactionSchema = new Schema(
  {
    from: {
      type: String, // seller
    },
    owner: {
      type: String, // buyer
    },
    price: {
      type: String,
    },
    //array
    nfts: Array,
    tx: {
      unique: true,
      type: String,
    },
  },
  { collection: "transactions", timestamps: true }
);
const Transaction = mongoose.model("Transaction", TransactionSchema);
module.exports = Transaction;
