const errorHandler = require("../../middlewares/errorHandler");
const Users = require("../../models/Users");

const getAllUsers = async (req, res, next) => {
  console.log(req.params.id);
  try {
    const allUser = await Users.find();
    res.status(200).json({ users: allUser });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = getAllUsers;
