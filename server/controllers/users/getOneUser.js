const Users = require("../../models/Users");

const findById = async (req, res, next) => {
  try {
    const user = await Users.findById(req.body.id).exec();
    res.status(200).json({ user: user });
  } catch (err) {
    next(err);
  }
};

module.exports = findById;
