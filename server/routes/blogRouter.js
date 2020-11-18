const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const { Blog } = require("../models/blogModel");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".png" && ext !== ".mp4") {
      return cb(res.status(400).end("only jpg, png, mp4 is allowed"), false);
    }
    cb(null, true);
  },
});

const upload = multer({ storage: storage }).single("file");

//Create Blog
router.post("/create", async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    imageName: req.file.originalname,
    imagePath: req.file.path,
  });
  await blog.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

//create Content
router.post("/create/content", (req, res) => {
  let blog = new Blog({ content: req.body.content });
  blog.save((err) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

//upload Files
router.post("/uploadfiles", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      url: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
});

//Get Blog
router.get("/get", async (req, res) => {
  await Blog.find((err, doc) => {
    if (err) res.status(400).send(err);
    res.status(200).send(doc);
  });
});

//Get Blog by id
router.get("/get/:id", async (req, res) => {
  await Blog.findById(req.params.id).exec((err, doc) => {
    if (err) res.status(400).send(err);
    res.status(200).send(doc);
  });
});

//Delete Blog by id
router.delete("/delete/:id", async (req, res) => {
  const blog = await Blog.findByIdAndDelete({ _id: req.params.id });
  fs.unlink(blog.imagePath, (err) => {
    if (err) console.log(err);
    console.log("file deleted from directory");
  });
});

//Update Blog by id
router.put("/update/:id", async (req, res) => {
  const blog = await Blog.findByIdAndUpdate({ _id: req.params.id });
  blog.title = req.body.title;
  blog.content = req.body.content;
  blog.publish = req.body.publish;
  await blog.save();
  return res.send(blog);
});

module.exports = router;
