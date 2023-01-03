const Users = require("../../models/Users");
const bcrypt = require("bcrypt");

const updateUserPassword = async (req, res, next) => {
  try {
    const user = await Users.findById(req.params.id);
    if (!user) {
      res.status(404).json({ msg: "couldnt find user" });
    }

    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (passwordMatch) {
      const salt = 10;
      const hashPassword = bcrypt.hashSync(req.body.newPassword, salt);

      const newUser = await Users.findByIdAndUpdate(
        req.params.id,
        {
          $set: { password: hashPassword },
        },
        { new: true }
      );
      res.status(200).json({ user: newUser });
    }
    console.log("hej");
    res.status(404).json({ msg: "couldnt update user", status: 404 });
  } catch (err) {
    next(err);
  }
};

module.exports = updateUserPassword;
