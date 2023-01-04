const BookedTimes = require("../../models/BookedTimes");
const postNewBooking = async (req, res, next) => {
  const newBooking = new BookedTimes(req.body.bookingInfo);
  try {
    const savedNewBooking = await newBooking.save();
    res.status(200).json({ booking: savedNewBooking });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = postNewBooking;
