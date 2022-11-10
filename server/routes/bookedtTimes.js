const express = require("express");
const BookedTimes = require("../models/BookedTimes");
const postNewBooking = require("../controllers/bookedTimes/postNewBooking");
const getBookingsByUser = require("../controllers/bookedTimes/findByUser");
const getBookingsByDay = require("../controllers/bookedTimes/findByDay");
const router = express.Router();

router.get("/byUser", getBookingsByUser);
router.get("/byDay", getBookingsByDay);
router.post("/", postNewBooking);

module.exports = router;
