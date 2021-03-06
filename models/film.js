const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FilmSchema = Schema({
  name: {
    type: String,
    unique: true,
  },
  gender: String,
  description: String,
  image: String,
  rating: Number,
  premiere: Boolean,
  background: String,
  url: String,
});

module.exports = mongoose.model("Film", FilmSchema);
