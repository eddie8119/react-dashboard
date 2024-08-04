const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: 2,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: 6,
    maxLength: 100,
  },
  password: {
    type: String,
    minLength: 6,
    required: true,
    minLength: 6,
    maxLength: 1024,
  },
  role: {
    type: String,
    enum: ["owner", "employee"],
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
