const Posts = require("../../models/Posts");

const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Posts.find({ thread: req.params.name });
    res.status(200).json({ msg: "sucess", posts: posts });
  } catch (err) {
    next(err);
  }
};

module.exports = getAllPosts;
