const mongoose = require("mongoose");
const { Schema } = mongoose;

const LaundryRoomsSchema = new Schema({
  laundryRoom: {
    type: String,
    required: true,
  },
});

const LaundryRooms = mongoose.model("LaundryRooms", LaundryRoomsSchema);

module.exports = LaundryRooms;
