const mongoose = require("mongoose");

const dietPlanSchema = {
  day: String,
  userType: String,
  dietType: String,
  diet: String,
  imageURL:String,
  cloudinary_id:String
};

const DietPlan = mongoose.model("DietPlan", dietPlanSchema);

module.exports.DietPlan = DietPlan;
