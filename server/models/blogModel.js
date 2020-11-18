const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String },
  author: { type: String },
  content: { type: String },
  publish: { type: Date },
  imageName: { type: String },
  imagePath: { type: String },
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports.Blog = Blog;
