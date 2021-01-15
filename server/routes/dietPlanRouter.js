const express = require("express");
const { DietPlan } = require("../models/dietPlanModel");
const cloudinary = require("../utils/cloudinary");
const router = express.Router();
const upload = require("../utils/multer");

//create Diet Plan
router.post("/create", upload.single("image"),async (req, res) => {
  console.log(req.file.path);
  const result = await cloudinary.uploader.upload(req.file.path);
  const dietPlan = new DietPlan({
    day: req.body.day,
    userType: req.body.userType,
    dietType: req.body.dietType,
    diet: req.body.diet,
    imageURL: result.secure_url,
    cloudinary_id: result.public_id,
    userId: req.user,
    userName: user.name,
  });
  await dietPlan.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

//get Diet Plan
router.get("/get", async (req, res) => {
  await DietPlan.find((err, doc) => {
    if (err) res.status(400).send(err);
    res.status(200).send(doc);
  });
});

//get diet plan by id
router.get("/get/:id", async (req, res) => {
  await DietPlan.findById(req.params.id).exec((err, doc) => {
    if (err) res.status(400).send(err);
    res.status(200).send(doc);
  });
});

//delete Diet Plan
router.delete("/delete/:id", async (req, res) => {
  const dietPlan = await DietPlan.findByIdAndDelete({ _id: req.params.id });
  await cloudinary.uploader.destroy(dietPlan.cloudinary_id);
  return res.send(dietPlan);  
});

//update Diet Plan
router.put("/update/:id", async (req, res) => {
  const dietPlan = await DietPlan.findByIdAndUpdate({ _id: req.params.id });
  if (req.body.cloudinary_id === "") {
    await cloudinary.uploader.destroy(dietPlan.cloudinary_id);
    const result = await cloudinary.uploader.upload(req.file.path);
    (dietPlan.imageURL = result.secure_url),
      (dietPlan.cloudinary_id = result.public_id);
  }
dietPlan.day = req.body.day;
dietPlan.userType = req.body.userType;
dietPlan.dietType = req.body.dietType;
dietPlan.diet = req.body.diet;

  await dietPlan.save();
    return res.send(dietPlan);
});

module.exports = router;
