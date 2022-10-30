const Users = require("../../models/Users");

const findById = async (req, res) => {
  console.log("hej");
  try {
    const user = await Users.findById(req.params.id);
    res.status(200).json({ user: user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUser = await Users.find();
    res.status(200).json({ users: allUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
};
module.exports = findById;
module.exports = getAllUsers;
