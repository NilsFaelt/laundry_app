const express = require("express");
const addNewThread = require("../controllers/bulletinBoard/addThread");
const router = express.Router();

router.post("/addNew", addNewThread);

module.exports = router;
