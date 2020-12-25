const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  title: { type: String, required: true },
  uploaderName: { type: String, required: true },
  description: { type: String, required: true },
  cloudinary_audio_id: { type: String, required: true },
  audioURL: { type: String, required: true },
  cloudinary_image_id: { type: String, required: true },
  imageURL: { type: String, required: true },
  uploaderId:{type:String,required:true}
});

const Meditation = mongoose.model("Meditation", userSchema);
module.exports.Meditation = Meditation;
