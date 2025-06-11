import Reminder from "../models/Reminder.js";

export const getReminders = async (req, res) => {
  try {
    const reminders = await Reminder.find().sort({ scheduledAt: 1 });
    res.status(200).json(reminders);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createReminder = async (req, res) => {
  try {
    const { method, email, phone } = req.body;

    // Validate method-specific fields
    if (method === "Email" && !email) {
      return res
        .status(400)
        .json({ message: "Email is required for email reminders" });
    }
    if (method === "SMS" && !phone) {
      return res
        .status(400)
        .json({ message: "Phone is required for SMS reminders" });
    }

    const reminder = new Reminder(req.body);
    await reminder.save();

    res.status(201).json(reminder);
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ message: "Validation failed", errors });
    }

    // Handle duplicate key or other errors
    res.status(409).json({
      message: "Failed to create reminder",
      error: error.message,
    });
  }
};
