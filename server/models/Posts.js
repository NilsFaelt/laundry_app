const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostsSchema = new Schema({
  thread: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  admin: {
    type: Boolean,
  },
});

const Posts = mongoose.model("Posts", PostsSchema);
module.exports = Posts;
