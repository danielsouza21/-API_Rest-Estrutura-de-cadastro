const mongoose = require("mongoose");

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

const User = mongoose.model("User", UserSchema);

module.exports = User;
