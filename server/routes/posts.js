const express = require("express");
const { postNewBooking } = require("../controllers/bookedTimes/postNewBooking");
const addPost = require("../controllers/bulletinBoard/addPost");
const getAllPosts = require("../controllers/bulletinBoard/getAllposts");
const removeAllPostsyThread = require("../controllers/bulletinBoard/removeAllPostsyThread");
const deletePostById = require("../controllers/bulletinBoard/removePost");
const router = express.Router();

router.get("/:name", getAllPosts);
router.post("/addPost", addPost);
router.delete("/deletePost/:id", deletePostById);
router.delete("/deleteAllPostsByThread/:threadName", removeAllPostsyThread);

module.exports = router;
