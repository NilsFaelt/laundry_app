const express = require("express");
const deleteUser = require("../controllers/users/deleteUser");
const getAllUsers = require("../controllers/users/getUsers");
const findById = require("../controllers/users/getOneUser");
const postNewUser = require("../controllers/users/postNewUser");
const updateUser = require("../controllers/users/updateUser");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/getOne", findById);
router.put("/:id", updateUser);
router.post("/", postNewUser);
router.delete("/:id", deleteUser);

module.exports = router;
