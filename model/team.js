const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    teamId: {
      unique: true,
      type: String,
    },
    maxRandom: String,
    minRandom: String,
    class: {
      type: String,
    },
    cardName: String,
  },
  { timestamps: true }
);
const Team = mongoose.model("Team", teamSchema);
module.exports = Team;
