const mongoose = require("mongoose");

const avatarSchema = new mongoose.Schema(
  {
    cover: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("avatars", avatarSchema);
