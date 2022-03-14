const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StoreSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  sales: { type: String, required: true },
  completion: { type: Number, required: true },
});

module.exports = mongoose.model("Store", StoreSchema);
