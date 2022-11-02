const Users = require("../../models/Users");
const bcrypt = require("bcrypt");

const postNewUser = async (req, res, next) => {
  const salt = 10;
  const hashPassword = bcrypt.hashSync(req.body.password, salt);
  const user = await Users.findOne({ email: req.body.email });

  const newUser = new Users({
    name: req.body.name,
    lastName: req.body.lastName,
    password: hashPassword,
    email: req.body.email,
    brf: req.body.brf,
    apartment: req.body.apartment,
    adress: {
      adress: req.body.adress,
      city: req.body.city,
      postal: req.body.postal,
    },
    bookingNr: req.body.bookingNr,
    admin: req.body.admin,
    nrOfActiveBookings: req.body.nrOfActiveBookings,
  });
  if (!user) {
    try {
      const savedUser = newUser.save();
      res.status(200).json({ user: newUser });
    } catch (err) {
      next(err);
    }
  } else {
    res.status(403).json({ message: "something went  wrong" });
  }
};

module.exports = postNewUser;
