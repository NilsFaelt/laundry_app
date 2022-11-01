const Users = require("../../models/Users");
const bcrypt = require("bcrypt");

const postNewUser = async (req, res, next) => {
  const salt = 10;
  const hashPassword = bcrypt.hashSync(req.body.password, salt);

  const newUser = new Users({
    name: req.body.name,
    lastName: req.body.lastName,
    password: hashPassword,
    email: req.body.email,
    brf: req.body.brf,
    apartment: req.body.apartment,
    adress: {
      adress: req.body.adress.adress,
      city: req.body.adress.city,
      postal: req.body.adress.postal,
    },
    bookingNr: req.body.bookingNr,
    admin: req.body.admin,
    nrOfActiveBookings: req.body.nrOfActiveBookings,
  });
  try {
    const savedUser = newUser.save();
    res.status(200).json({ user: newUser });
  } catch (err) {
    next(err);
  }
};

module.exports = postNewUser;
