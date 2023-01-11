const express = require("express");
const router = express.Router();
const getReminder = require("../controllers/reminder/getReminder");
const deleteReminder = require("../controllers/reminder/deleteReminder");
const addReminder = require("../controllers/reminder/addReminder");

router.get("/", getReminder);
router.post("/", addReminder);
router.delete("/", deleteReminder);

module.exports = router;
