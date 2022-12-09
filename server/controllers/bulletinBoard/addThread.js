const Threads = require("../../models/Threads");

const addNewThread = async (req, res, next) => {
  const newThread = new Threads(req.body);
  const checkThread = false;
  if (!checkThread) {
    try {
      const savedThread = await newThread.save();
      res
        .status(200)
        .json({ msg: "thread succefully added", thread: newThread });
    } catch (err) {
      next(err);
    }
  } else {
    res.status(403).json({ msg: "thread name already exsists" });
  }
};

module.exports = addNewThread;
