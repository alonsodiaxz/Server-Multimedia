const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FilmSchema = Schema({
  name: String,
  gender: String,
  description: String,
  image: String,
  rating: Number,
});

module.exports = mongoose.model("Film", FilmSchema);
