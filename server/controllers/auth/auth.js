const Users = require("../../models/Users");
const bcrypt = require("bcrypt");
const customError = require("../../utils/customError");

const authUser = async (req, res, next) => {
  const email = req.body.email;
  try {
    const user = await Users.findOne({ email });
    if (!user) return next(customError(404, "no user found"));
    const isPassworCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPassworCorrect) return next(customError(400, "wrong password"));

    res.status(200).json({ user: user, message: "sucess" });
  } catch (err) {
    next(err);
  }
};

module.exports = authUser;
