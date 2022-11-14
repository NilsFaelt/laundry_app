const express = require("express");
const BookedTimes = require("../models/BookedTimes");
const postNewBooking = require("../controllers/bookedTimes/postNewBooking");
const getBookingsByUser = require("../controllers/bookedTimes/findByUser");
const getBookingsByDay = require("../controllers/bookedTimes/findByDay");
const findByIdAndDelete = require("../controllers/bookedTimes/deleteByID");
const router = express.Router();

router.post("/byUser", getBookingsByUser);
router.post("/byDay", getBookingsByDay);
router.post("/", postNewBooking);
router.delete("/byId/:id", findByIdAndDelete);

module.exports = router;
