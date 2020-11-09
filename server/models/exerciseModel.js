const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  exercise: { type: Array, required: true },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports.Exercise = Exercise;
