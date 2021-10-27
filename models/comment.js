const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = Schema({
  name: String,
  rate: Number,
  comment: String,
  likes: Number,
  dislikes: Number,
  film: String,
});

module.exports = mongoose.model("Comment", CommentSchema);
