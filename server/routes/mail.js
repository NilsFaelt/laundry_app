const express = require("express");
const findMailByUser = require("../controllers/mail/findMailsByUser");
const postNewMail = require("../controllers/mail/postNewMail");
const router = express.Router();

router.post("/", postNewMail);
router.get("/:email", findMailByUser);

module.exports = router;
