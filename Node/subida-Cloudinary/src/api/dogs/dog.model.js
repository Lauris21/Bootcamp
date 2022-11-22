const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dogSchema = new Schema(
  {
    name: { type: String, require: true },
    age: { type: Number, require: true },
    image: { type: String, require: true },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Dog', dogSchema);
