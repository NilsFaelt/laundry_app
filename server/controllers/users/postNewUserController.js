const Users = require("../../models/Users");
const postNewUser = async (req, res) => {
  const newUser = new Users(req.body);
  try {
    const savedUser = newUser.save();
    res.status(200).json({ user: newUser });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = postNewUser;
