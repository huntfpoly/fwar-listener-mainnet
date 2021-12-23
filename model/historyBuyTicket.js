const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const historyBuyTicketSchema = new Schema(
  {
    transactionHash: {
      type: String,
      unique: true,
    },

    caller: String,
    payToken: String,
    amount: Number,
  },
  { timestamps: true }
);
const HistoryBuyTicket = mongoose.model(
  "HistoryBuyTicket",
  historyBuyTicketSchema
);
module.exports = HistoryBuyTicket;
