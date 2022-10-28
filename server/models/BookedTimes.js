const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookedTimesSchema = new Schema({
  laundryRoom: {
    type: String,
  },
  dateForBooking: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  bookedHours: {
    type: Number,
    required: true,
  },
});

const BookedTimes = mongoose.model("BookedTimes", BookedTimesSchema);
module.exports = BookedTimes;
