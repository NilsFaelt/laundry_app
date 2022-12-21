const Posts = require("../../models/Posts");

const addPost = async (req, res, next) => {
  const newPost = new Posts(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json({ post: savedPost });
  } catch (err) {
    next(err);
  }
};

module.exports = addPost;
