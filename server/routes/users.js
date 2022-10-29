const express = require("express");
const postNewUser = require("../controllers/users/postNewUserController");
const Users = require("../models/Users");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await Users.findById(req.body.id).exec();
    res.status(200).json({ uesr: users });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
});

router.post("/", postNewUser);

module.exports = router;
