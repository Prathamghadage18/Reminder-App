import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Create reusable transporter object
const transporter = nodemailer.createTransport({
  service: "Gmail", // For Gmail (or use SMTP settings)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

/**
 * Send reminder email
 * @param {string} to
 * @param {string} subject
 * @param {string} text
 */
export const sendReminderEmail = async (to, subject, text) => {
  try {
    const mailOptions = {
      from: `"RemindMeLater" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html: `<b>${text}</b>`, // Optional HTML version
    };

    await transporter.sendMail(mailOptions);
    console.log("Reminder email sent to:", to);
  } catch (error) {
    console.error("Email send error:", error);
    throw new Error("Failed to send email");
  }
};
