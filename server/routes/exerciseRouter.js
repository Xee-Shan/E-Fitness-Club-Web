const express = require("express");
const router = express.Router();
const { Exercise } = require("../models/exerciseModel");

//Create Exercise Details
router.post("/create", async (req, res) => {
  const exercise = new Exercise({
    exercise: req.body,
  });
  await exercise.save((err, doc) => {
    if (err) res.status(400).send(err);
    res.status(200).send(doc);
  });
});

//Get Exercise Details
router.get("/get", async (req, res) => {
  await Exercise.find((err, doc) => {
    if (err) res.status(400).send(err);
    res.status(200).send(doc);
  });
});

//Get Exercise Detials by id
router.get("/get/:id", async (req, res) => {
  await Exercise.findById(req.params.id).exec((err, doc) => {
    if (err) res.status(400).send(err);
    res.status(200).send(doc);
  });
});

//Delete Exercise Details
router.delete("/delete/:id", async (req, res) => {
  await Exercise.findByIdAndDelete(req.params.id).exec((err, doc) => {
    if (err) res.status(400).send(err);
    res.status(200).send(doc);
  });
});

//Update Exercise Details
router.put("/update/:id", async (req, res) => {
  const exercise = await Exercise.findByIdAndUpdate({ _id: req.params.id });
  exercise.day = req.body.day;
  exercise.area = req.body.area;
  await exercise.save();
  return res.send(exercise);
});

module.exports = router;
