const Mails = require("../../models/Mail");
const updateMail = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const newMail = await Mails.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ msg: "mail updated", mail: newMail });
  } catch (err) {
    next(err);
  }
};

module.exports = updateMail;
