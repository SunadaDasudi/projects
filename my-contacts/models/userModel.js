const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a user name"]
    },
    email: {
      type: String,
      required: [true, "Please add user email address"],
      unique: [true, "Email already exists"]
    },
    password: {
      type: String,
      required: [true, "Please provide a password"]
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);
