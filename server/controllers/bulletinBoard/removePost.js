const Posts = require("../../models/Posts");

const deletePostById = async (req, res, next) => {
  try {
    await Posts.findByIdAndDelete(req.params.id);
    res.status(200).json({ masg: "posts were succcesfully deleteed" });
  } catch (err) {
    next(err);
  }
};

module.exports = deletePostById;
