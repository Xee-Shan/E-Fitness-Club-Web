const mongoose = require("mongoose");

const trainingSchema = new mongoose.Schema({
  programId: { type: Number },
  title: { type: String },
  targetArea: { type: String },
  equipment: { type: String },
  description: { type: String },
  imageName: { type: String },
  imagePath: { type: String },
});

const Training = mongoose.model("Training", trainingSchema);
module.exports.Training = Training;
