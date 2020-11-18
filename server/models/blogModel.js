const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: { type: String },
  content: { type: String },
  imageName: { type: String },
  imagePath: { type: String },
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports.Blog = Blog;
