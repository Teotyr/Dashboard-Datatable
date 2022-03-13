const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  author: { type: String, required: true },
  year: { type: Number, required: true },
  language: { type: String, required: true },
});

module.exports = mongoose.model("Book", BookSchema);
