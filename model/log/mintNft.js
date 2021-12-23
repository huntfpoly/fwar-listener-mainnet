const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MintNftSchema = new Schema(
    {
        receiver: String,
        tokenId: String,
        level: String,
        rarity: String,
        elementType: String,
        teamId: String,
        attack: String,
        defense: String,
        health: String,
    },
    { collection: "mintNftLog", timestamps: true }
);
const MintNftLog = mongoose.model("MintNftLog", MintNftSchema);
module.exports = MintNftLog;
