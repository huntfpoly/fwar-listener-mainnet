const mongoose = require('mongoose');
// const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const CharacterStatSchema = new Schema(
  {
    teamId: {
      type: String,
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
      default: '',
    },
    burnRes: {
      type: String,
      default: '',
    },
    poisonRes: {
      type: String,
      default: '',
    },
    slowRes: {
      type: String,
      default: '',
    },
    stunRes: {
      type: String,
      default: '',
    },
    burnEffectDmg: {
      type: String,
      default: '',
    },
    poisonEffectDmg: {
      type: String,
      default: '',
    },
    accuracy: {
      type: String,
      default: '',
    },
    evasion: {
      type: String,
      default: '',
    },
    knockBackDistance: {
      type: String,
      default: '',
    },
    fireEffectRate: {
      type: String,
      default: '',
    },
    waterEffectRate: {
      type: String,
      default: '',
    },
    woodEffectRate: {
      type: String,
      default: '',
    },
    earthEffectRate: {
      type: String,
      default: '',
    },
    metalEffectRate: {
      type: String,
      default: '',
    },
    effectDuration: {
      type: String,
      default: '',
    },
    elementAdvantage: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);
// CharacterStatSchema.plugin(mongoosePaginate);
const CharacterStats = mongoose.model('CharacterStats', CharacterStatSchema);
module.exports = CharacterStats;
