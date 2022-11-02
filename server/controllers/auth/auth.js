const Users = require("../../models/Users");
const bcrypt = require("bcrypt");
const customError = require("../../utils/customError");
const jwt = require("jsonwebtoken");

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
    const token = jwt.sign(
      { id: user.id, isAdmin: user.admin },
      process.env.JWT
    );
    const { password, ...otherDetails } = user._doc;
    res
      .cookie("acesstoken", token, { httpOnly: true })
      .status(200)
      .json({ user: { ...otherDetails }, message: "sucess" });
  } catch (err) {
    next(err);
  }
};

module.exports = authUser;
