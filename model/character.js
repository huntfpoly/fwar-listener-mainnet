const mongoose = require("mongoose");
// const bcrypt = require('bcrypt');
// const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const ChestSchema = new Schema(
  {
    nftId: {
      type: String,
      unique: true,
      required: true,
    },
    isBurn: {
      type: Boolean,
      default: false,
    },
    isListed: {
      type: Boolean,
      default: false,
    },
    isStake: {
      type: Boolean,
      default: false,
    },
    hash: {
      type: String,
      required: true,
    },
    isActive: Boolean,
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    teamId: {
      type: Schema.Types.ObjectId,
      ref: "Team",
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    rarity: {
      type: String,
      required: true,
    },
    element: {
      type: String,
      required: true,
    },
    cardType: {
      type: String,
      default: "",
    },
    baseAttack: {
      type: String,
      default: "",
    },
    baseDefense: {
      type: String,
      default: "",
    },
    baseHealth: {
      type: String,
      default: "",
    },
    attack: {
      type: String,
      default: "",
    },
    defense: {
      type: String,
      default: "",
    },
    health: {
      type: String,
      default: "",
    },
    movementSpeed: {
      type: String,
    },
    attackRange: {
      type: String,
    },
    attackSpeed: {
      type: String,
    },
    coolDown: {
      type: String,
    },
    critRate: {
      type: String,
    },
    critDamage: {
      type: String,
    },
    knockBackRes: {
      type: String,
      default: "",
    },
    burnRes: {
      type: String,
      default: "",
    },
    poisonRes: {
      type: String,
      default: "",
    },
    slowRes: {
      type: String,
      default: "",
    },
    stunRes: {
      type: String,
      default: "",
    },
    burnEffectDmg: {
      type: String,
      default: "",
    },
    poisonEffectDmg: {
      type: String,
      default: "",
    },
    accuracy: {
      type: String,
      default: "",
    },
    evasion: {
      type: String,
      default: "",
    },
    knockBackDistance: {
      type: String,
      default: "",
    },
    fireEffectRate: {
      type: String,
      default: "",
    },
    waterEffectRate: {
      type: String,
      default: "",
    },
    woodEffectRate: {
      type: String,
      default: "",
    },
    earthEffectRate: {
      type: String,
      default: "",
    },
    metalEffectRate: {
      type: String,
      default: "",
    },
    effectDuration: {
      type: String,
      default: "",
    },
    elementAdvantage: {
      type: String,
      default: "",
    },
  },
  { collection: "characters", timestamps: true }
);
// ChestSchema.plugin(mongoosePaginate);
const Character = mongoose.model("Character", ChestSchema);
module.exports = Character;
