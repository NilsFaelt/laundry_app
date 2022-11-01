const express = require("express");
const authUser = require("../controllers/auth/auth");
const router = express.Router();

router.get("/", authUser);

module.exports = router;
