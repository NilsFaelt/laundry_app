const express = require("express");
const { postNewBooking } = require("../controllers/bookedTimes/postNewBooking");
const addPost = require("../controllers/bulletinBoard/addPost");
const getAllPosts = require("../controllers/bulletinBoard/getAllposts");
const deletePostById = require("../controllers/bulletinBoard/removePost");
const router = express.Router();

router.get("/:name", getAllPosts);
router.post("/addPost", addPost);
router.delete("/deletePost/:id", deletePostById);

module.exports = router;
