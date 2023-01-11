const Reminder = require("../../models/Reminder");

const getReminder = async (req, res, next) => {
  try {
    const reminder = await Reminder.find();
    res.status(200).json({ reminder: reminder });
  } catch (err) {
    next(err);
  }
};

module.exports = getReminder;
