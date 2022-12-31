const express = require("express");
const addNewThread = require("../controllers/bulletinBoard/addThread");
const getAllThreads = require("../controllers/bulletinBoard/getAllThreads");
const deleteThread = require("../controllers/bulletinBoard/removeThread");
const router = express.Router();

router.get("/", getAllThreads);
router.post("/addNew", addNewThread);
router.delete("/deleteThread/:threadName", deleteThread);

module.exports = router;
