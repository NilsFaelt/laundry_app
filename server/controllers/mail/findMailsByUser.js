const Mails = require("../../models/Mail");

const findMailByUser = async (req, res, next) => {
  try {
    const mails = await Mails.find({
      $or: [{ to: "allUsers@laundry.com" }, { to: req.params.email }],
    }).exec();

    res.status(200).send({ mails: mails });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = findMailByUser;
