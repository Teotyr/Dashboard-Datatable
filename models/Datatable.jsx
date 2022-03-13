const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DatatableSchema = new Schema({
  _id: { type: String, required: true },
  artist: { type: String, required: true },
  country: { type: String, required: true },
  gender: { type: String, required: true },
  sales: { type: Number, required: true },
  // name: { type: String, required: true },
  // position: { type: String, required: true },
  // office: { type: String, required: true },
  // age: { type: Number, required: true },
  // date: { type: Date, required: true },
  // salary: { type: Number, required: true },
});

module.exports= mongoose.model("Datatable", DatatableSchema);
