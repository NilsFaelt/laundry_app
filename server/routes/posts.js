const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("love you");
});
router.post("/addPost", (req, res, next) => {
  res.send("love you");
});

module.exports = router;
