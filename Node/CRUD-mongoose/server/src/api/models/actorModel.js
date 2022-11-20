const mongoose = require("mongoose");

const actorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    films: [{ type: mongoose.Schema.Types.ObjectId, ref: "film" }],
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

const Actor = mongoose.model("actor", actorSchema);
module.exports = Actor;
