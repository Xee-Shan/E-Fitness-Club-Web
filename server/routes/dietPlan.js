const express = require("express");
const { DietPlan } = require("../models/dietPlan");
const router = express.Router();

// const multer = require("multer");
// const fs = require("fs");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploadImages/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
//   fileFilter: function (req, file, cb) {
//     if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//       cb(null, true);
//     } else {
//       cb(null, false);
//     }
//   },
// });

// const upload = multer({ storage: storage });

//create Diet Plan

router.post("/create", async (req, res) => {
  const dietPlan = new DietPlan({
    day: req.body.day,
    userType: req.body.userType,
    dietType: req.body.dietType,
    diet: req.body.diet,
    // description: req.body.description,
    // imageName: req.file.originalname,
    // imagePath: req.file.path,
  });
  console.log(dietPlan);
  await dietPlan.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

//get Diet Plan
router.get("/get", async (req, res) => {
  const dietPlan = await DietPlan.find((err, doc) => {
    if (err) res.status(400).send(err);
    res.status(200).send(doc);
  });
});

//delete Diet Plan
router.delete("/delete/:id", async (req, res) => {
  const dietPlan = await DietPlan.findByIdAndDelete({ _id: req.params.id });
    // console.log("file deleted from directory");
  });

//update Diet Plan
router.put("/update/:id", async (req, res) => {
  const dietPlan = await DietPlan.findByIdAndUpdate({ _id: req.params.id });
  dietPlan.day = req.body.day;
  dietPlan.userType = req.body.userType;
  dietPlan.dietType = req.body.dietType;
  dietPlan.diet = req.body.diet;
//   recipe.description = req.body.description;

  await dietPlan.save();
});

module.exports = router;
