const LaundryRooms = require("../../models/LaundryRoom");

const getAllRooms = async (req, res, next) => {
  try {
    const rooms = await LaundryRooms.find();
    res.status(200).json({ msg: "sucess", rooms });
  } catch (err) {
    next(err);
  }
};

module.exports = getAllRooms;
