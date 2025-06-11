import express from "express";
import { getReminders, createReminder } from "../controllers/reminders.js";

const router = express.Router();

// GET /api/reminders
router.get("/", getReminders);

// POST /api/reminders
router.post("/", createReminder);

export default router;
