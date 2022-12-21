const Posts = require("../../models/Posts");

const addPost = (req, res, next) => {
  try {
    const newPost = new Posts(req.body);
    res.status(200).json({ post: newPost });
  } catch (err) {
    next(err);
  }
};
