const express = require("express");
const deleteMailByID = require("../controllers/mail/deleteMail");
const findMailByUser = require("../controllers/mail/findMailsByUser");
const postNewMail = require("../controllers/mail/postNewMail");
const updateMail = require("../controllers/mail/updateMail");
const router = express.Router();

router.post("/", postNewMail);
router.get("/:email", findMailByUser);
router.put("/:id", updateMail);
router.delete("/:id", deleteMailByID);

module.exports = router;
