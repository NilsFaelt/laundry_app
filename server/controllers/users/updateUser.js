const Users = require("../../models/Users");

const updateUser = async (req, res) => {
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
    res.status(500).json({ error: err });
  }
};

module.exports = updateUser;
