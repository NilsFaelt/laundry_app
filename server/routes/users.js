const express = require("express");
const deleteUser = require("../controllers/users/deleteUser");
const getAllUsers = require("../controllers/users/getUsers");
const findById = require("../controllers/users/getOneUser");
const postNewUser = require("../controllers/users/postNewUser");
const updateUser = require("../controllers/users/updateUser");
const verifyToken = require("../utils/verifyToken");
const updateUserPassword = require("../controllers/users/updateUserPAssword");
const router = express.Router();

router.get("/checkIfauth", verifyToken);
router.get("/", getAllUsers);
router.get("/getOne/:email", findById);
router.put("/:id", updateUser);
router.put("/updateuserpassword/:id", updateUserPassword);
router.post("/", postNewUser);
router.delete("/:id", deleteUser);

module.exports = router;
