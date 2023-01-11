const Reminder = require("../../models/Reminder");

const deleteReminder = async (req, res, next) => {
  try {
    const reminder = await Reminder.deleteMany({ deleteInfo: "reminder" });
    res.status(200).json({ reminder: reminder });
  } catch (err) {
    next(err);
  }
};

module.exports = deleteReminder;
