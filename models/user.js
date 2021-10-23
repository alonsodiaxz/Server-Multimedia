const mongoose = require("mongoose");
//mongoose.set("useCreateIndex", true); //Código para evitar un warning interno de moongose.
const Schema = mongoose.Schema;

const UserSchema = Schema({
  name: String,
  lastname: String,
  email: {
    unique: true,
    type: String,
  },
  password: String,
});

module.exports = mongoose.model("User", UserSchema);
