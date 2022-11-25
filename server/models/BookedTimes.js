const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookedTimesSchema = new Schema(
  {
    laundryRoom: {
      type: String,
    },
    dateForBooking: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    bookedHours: {
      type: Number,
      required: true,
    },
    dateAsMilisecs: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const BookedTimes = mongoose.model("BookedTimes", BookedTimesSchema);
module.exports = BookedTimes;
