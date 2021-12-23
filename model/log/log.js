const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LogSchema = new Schema(
	{
		address: String,
		transactionHash: String,
		returnValues: String,
		event: String,
	},
	{ collection: "logs", timestamps: true }
);
const Log = mongoose.model("log", LogSchema);
module.exports = Log;
