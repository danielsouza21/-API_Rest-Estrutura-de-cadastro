const mongoose = require("../database");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, //obrigatoriedade
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true, //forçar conversão lowercase
  },
  password: {
    type: String,
    required: true,
    select: false, //ao buscar, não puxar no array de usuarios
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});
const User = mongoose.model("User", UserSchema);

module.exports = User;
