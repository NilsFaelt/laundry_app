const LaundryRooms = require("../../models/LaundryRoom");

const deleteRoomById = async (req, res, next) => {
  try {
    await LaundryRooms.findByIdAndDelete(req.params.id);
    res.status(200).json({ masg: "room were succcesfully deleteed" });
  } catch (err) {
    next(err);
  }
};

module.exports = deleteRoomById;
