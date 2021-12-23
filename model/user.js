const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    address: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      unique: true,
    },
    country: {
      default: "",
      type: String,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
    imgUrl: {
      type: String,
      default: "",
    },
    ticket: {
      type: Number,
      default: 0,
    },
  },
  // { collection: 'users', timestamps: true }
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
module.exports = User;

// userSchema.pre('save', async function (next) {
//   try {
//     // ma hoa ra 1 chuoi va ket hop voi pass
//     const salt = await bcrypt.genSalt(10);
//     // const salt =  genSaltSync.genSalt(10);

//     // sau do generate a pass hash (chuoi tren + hash)
//     const passwordHashed = await bcrypt.hash(this.password, salt);
//     // const passwordHashed = bcrypt.hashSync(this.password, salt);

//     // re-assign password hashed
//     this.password = passwordHashed;
//   } catch (error) {
//     next(error);
//   }
// });
// userSchema.methods.checkPassword = async function (password) {
//   const passwordHash = this.password;
//   return await bcrypt.compare(password, passwordHash);
// };

// userSchema.index({ username: 1, email: 1 }, { unique: true, dropDups: true });
