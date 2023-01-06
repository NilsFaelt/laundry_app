const LaundryRooms = require("../../models/LaundryRoom");

const addLaundryRoom = async (req, res, next) => {
  const newLaundryRoom = new LaundryRooms(req.body);
  try {
    const savedlaundryRoom = await newLaundryRoom.save();
    res.status(200).json({ laundryRoom: savedlaundryRoom });
  } catch (err) {
    next(err);
  }
};

module.exports = addLaundryRoom;
