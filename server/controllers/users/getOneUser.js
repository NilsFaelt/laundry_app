const Users = require("../../models/Users");

const findById = async (req, res, next) => {
  console.log(req.body);
  try {
    const user = await Users.findOne({ email: req.body.email });
    res.status(200).json({ user: user._doc });
  } catch (err) {
    next(err);
  }
};

module.exports = findById;
