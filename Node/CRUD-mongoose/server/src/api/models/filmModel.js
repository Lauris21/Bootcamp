const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    year: { type: Number, required: true },
    duration: { type: Number, required: true },
    actors: [{ type: mongoose.Schema.Types.ObjectId, ref: "actor" }],
    poster: { type: String },
    genre: { type: String },
  },
  {
    timestamps: true,
  }
);

const Film = mongoose.model("film", filmSchema);
module.exports = Film;
