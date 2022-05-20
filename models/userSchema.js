const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  contact: {
    type: Number,
    maxlength: 11,
  },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;