const Users = require("../../models/Users");

const getAllUsers = async (req, res, next) => {
  try {
    const allUser = await Users.find();
    res.status(200).json({ users: allUser });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = getAllUsers;
