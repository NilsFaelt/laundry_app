const Mails = require("../../models/Mail");

const postNewMail = async (req, res, next) => {
  const newMail = new Mails(req.body);
  try {
    const savedMail = newMail.save();
    res.status(200).json({ mail: newMail });
  } catch (err) {
    next(err);
  }
};

module.exports = postNewMail;
