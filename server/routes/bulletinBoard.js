const express = require("express");
const addNewThread = require("../controllers/bulletinBoard/addThread");
const getAllThreads = require("../controllers/bulletinBoard/getAllThreads");
const router = express.Router();

router.get("/", getAllThreads);
router.post("/addNew", addNewThread);

module.exports = router;
