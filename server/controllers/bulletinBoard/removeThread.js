const Threads = require("../../models/Threads");

const deleteThread = async (req, res, next) => {
  try {
    await Threads.findOneAndDelete({
      title: req.params.threadName,
    });
    res.status(200).json({ masg: "posts were succcesfully deleteed" });
  } catch (err) {
    next(err);
  }
};

module.exports = deleteThread;
