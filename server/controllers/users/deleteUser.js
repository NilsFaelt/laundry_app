const Users = require("../../models/Users");

const deleteUser = async (req, res) => {
  try {
    await Users.findByIdAndDelete(req.params.id);
    res.status(200).json({ info: "user deleted" });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = deleteUser;
