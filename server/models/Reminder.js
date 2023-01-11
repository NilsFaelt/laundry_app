const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReminderSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  from: {
    type: String,
  },
  deleteInfo: {
    type: String,
    default: "reminder",
  },
});

const Reminder = mongoose.model("Reminder", ReminderSchema);
module.exports = Reminder;
