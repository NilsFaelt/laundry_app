const Reminder = require("../../models/Reminder");

const addReminder = async (req, res, next) => {
  const newReminder = new Reminder(req.body);
  try {
    await Reminder.deleteMany({ deleteInfo: "reminder" });
    const savedReminder = await newReminder.save();
    res.status(200).json({ reminder: savedReminder });
  } catch (err) {
    next(err);
  }
};

module.exports = addReminder;
