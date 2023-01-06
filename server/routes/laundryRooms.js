const express = require("express");
const addLaundryRoom = require("../controllers/laundryRooms/addLaundryRoom");
const deleteRoomById = require("../controllers/laundryRooms/deleteRoom");
const getAllRooms = require("../controllers/laundryRooms/getAllRooms");
const router = express.Router();

router.get("/", getAllRooms);
router.post("/", addLaundryRoom);
router.delete("/:id", deleteRoomById);

module.exports = router;
