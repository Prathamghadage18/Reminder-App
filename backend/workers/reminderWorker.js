import Reminder from "../models/Reminder.js";
import { sendReminderEmail } from "../services/emailService.js";

/**
 * Check and send pending reminders
 */
export const processReminders = async () => {
  try {
    const now = new Date();
    const reminders = await Reminder.find({
      status: "scheduled",
      scheduledAt: { $lte: now },
    });

    for (const reminder of reminders) {
      try {
        // Update status to processing
        reminder.status = "processing";
        await reminder.save();

        // Send based on method
        if (reminder.method === "Email") {
          await sendReminderEmail(
            reminder.email,
            "Your Reminder",
            reminder.message
          );
        }
        // (SMS logic would go here)

        // Mark as sent
        reminder.status = "sent";
        await reminder.save();
      } catch (error) {
        reminder.status = "failed";
        await reminder.save();
        console.error(`Failed to process reminder ${reminder._id}:`, error);
      }
    }
  } catch (error) {
    console.error("Reminder worker error:", error);
  }
};

// Run every minute
setInterval(processReminders, 60 * 1000);
