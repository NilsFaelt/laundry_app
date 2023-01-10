const Threads = require("../../models/Threads");

const getAllThreads = async (req, res, next) => {
  try {
    const threads = await Threads.find();
    res.status(200).json({ msg: "sucess", threads: threads });
  } catch (err) {
    next(err);
  }
};

module.exports = getAllThreads;
