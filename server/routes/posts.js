const express = require("express");
const { postNewBooking } = require("../controllers/bookedTimes/postNewBooking");
const addPost = require("../controllers/bulletinBoard/addPost");
const getAllPosts = require("../controllers/bulletinBoard/getAllposts");
const router = express.Router();

router.get("/:name", getAllPosts);
router.post("/addPost", addPost);

module.exports = router;
