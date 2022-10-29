const express = require("express");
const BookedTimes = require("../models/BookedTimes");
const postNewBooking = require("../controllers/bookedTimes/postNewBookingController");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("BOOKED");
});

router.post("/", postNewBooking);

module.exports = router;
