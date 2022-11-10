const BookedTimes = require("../../models/BookedTimes");

const getBookingsByDay = async (req, res, next) => {
  try {
    const bookedTimes = await BookedTimes.find({
      dateForBooking: req.body.dateForBooking,
    }).exec();
    res.status(200).send({ bookings: bookedTimes });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = getBookingsByDay;
