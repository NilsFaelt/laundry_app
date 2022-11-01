const BookedTimes = require("../../models/BookedTimes");
const postNewBooking = async (req, res) => {
  const newBooking = new BookedTimes(req.body);
  try {
    const savedNewBooking = newBooking.save();
    res.status(200).json({ booking: newBooking });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = postNewBooking;
