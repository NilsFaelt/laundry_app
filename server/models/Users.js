const mongoose = require("mongoose");
const { Schema } = mongoose;

const adressSchema = new Schema({
  adress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postal: {
    type: Number,
    required: true,
  },
});

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    brf: {
      type: String,
      required: true,
    },
    apartment: {
      type: Number,
      required: true,
    },
    adress: {
      type: adressSchema,
      required: true,
    },
    bookingNr: {
      type: Number,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    nrOfActiveBookings: {
      type: Number,
      min: 0,
      max: 3,
    },
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;
