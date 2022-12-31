const Posts = require("../../models/Posts");

const removeAllPostsyThread = async (req, res, next) => {
  console.log(req.params.threadName);
  try {
    await Posts.deleteMany({
      thread: req.params.threadName,
    });
    res.status(200).json({ masg: "all posts were succcesfully deleteed" });
  } catch (err) {
    next(err);
  }
};

module.exports = removeAllPostsyThread;
