const Users = require("../../models/Users");

const findById = async (req, res, next) => {
  try {
    const user = await Users.findOne({ email: req.params.email });
    console.log(user);
    res.status(200).json({ user: user });
  } catch (err) {
    next(err);
  }
};

module.exports = findById;
