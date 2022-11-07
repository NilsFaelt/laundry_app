const Users = require("../../models/Users");

const updateUser = async (req, res, next) => {
  console.log("in updaete backend");
  try {
    const newUser = await Users.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ user: newUser });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = updateUser;
