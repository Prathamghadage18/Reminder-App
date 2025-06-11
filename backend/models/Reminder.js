import mongoose from "mongoose";

const reminderSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    scheduledAt: {
      type: Date,
      required: true,
    },
    method: {
      type: String,
      required: true,
      enum: ["Email", "SMS"],
    },
    email: {
      type: String,
      required: function () {
        return this.method === "Email";
      }, // Only required if method is Email
      validate: {
        validator: (v) => /.+@.+\..+/.test(v), // Email format validation
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    phone: {
      type: String,
      required: function () {
        return this.method === "SMS";
      }, // Only required if method is SMS
      validate: {
        validator: (v) =>
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(v),
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },
  },
  { timestamps: true }
);

// Add index for efficient querying of pending reminders
reminderSchema.index({ status: 1, scheduledAt: 1 });

const Reminder = mongoose.model("Reminder", reminderSchema);

export default Reminder;
