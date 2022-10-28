const express = require("express");
const BookedTimes = require("../models/BookedTimes");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("BOOKED");
});

router.post("/", (req, res) => {
  const newBooking = new BookedTimes(req.body);
  try {
    const savedNewBooking = newBooking.save();
    res.status(200).json({ booking: newBooking });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
});

module.exports = router;
