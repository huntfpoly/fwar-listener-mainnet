const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OpenChestSchema = new Schema(
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
    { collection: "openChest", timestamps: true }
);
const OpenChest = mongoose.model("OpenChest", OpenChestSchema);
module.exports = OpenChest;
