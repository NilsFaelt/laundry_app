const BookedTimes = require("../../models/BookedTimes");

const deleteBookedTimeByID = async (req, res) => {
  console.log("in here");
  try {
    await BookedTimes.findByIdAndDelete(req.params.id);
    res.status(200).json({ info: "time deleted" });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = deleteBookedTimeByID;
