const Mails = require("../../models/Mail");

const deleteMailByID = async (req, res, next) => {
  try {
    await Mails.findByIdAndDelete(req.params.id);
    res.status(200).json({ info: "mail deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = deleteMailByID;
