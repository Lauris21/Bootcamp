const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CharacterSchema = new Schema(
  {
    clase: { type: String, required: true },
    simbol: { type: String },
    recurso: { type: String, required: true },
    skills: { type: String, required: true },
    posterFemale: { type: String },
    posterMale: { type: String },
  },
  {
    timestamps: true,
  }
);

const Character = mongoose.model("character", CharacterSchema);

module.exports = Character;
