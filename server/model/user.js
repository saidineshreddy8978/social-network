const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    followers: [{ type: mongoose.Schema.Types.ObjectId }],
    following: [{ type: mongoose.Schema.Types.ObjectId }],
    bio: { type: String, default: "add your bio" },
    role: { type: String, default: "add your bio" },
    dateOfBirth:  { type: String, default: "add your date of birth" },
    age: { type: String, default: "add your age" },
  },
  { timestamps: true }
);
const User = mongoose.model("user", userSchema);

module.exports = User;
