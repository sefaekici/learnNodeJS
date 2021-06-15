const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CarSchema = Schema({
  age: Number,
  model: String,
});

const Car = mongoose.model("Car", CarSchema);
module.exports = Car;
