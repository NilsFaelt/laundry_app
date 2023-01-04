const mongoose = require("mongoose");
const { Schema } = mongoose;

const MailSchema = new Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  text: {
    type: String,
  },
  date: {
    type: String,
  },
  subject: {
    type: String,
  },
  read: {
    type: Boolean,
    default: false,
  },
});

const Mails = mongoose.model("Mails", MailSchema);
module.exports = Mails;
