const BookedTimes = require("../../models/BookedTimes");

const getBookingsByUser = async (req, res, next) => {
  try {
    const bookedTimes = await BookedTimes.find({
      email: req.body.email,
    }).exec();
    console.log(bookedTimes);
    res.status(200).send({ bookings: bookedTimes });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = getBookingsByUser;
