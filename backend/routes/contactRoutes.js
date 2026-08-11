const express = require("express");

const router = express.Router();

const {
  createContactMessage,
  getContactMessages,
  updateContactMessageStatus,
} = require("../controllers/contactController");

const authenticateToken = require("../middleware/authMiddleware");
const requireAdmin = require("../middleware/adminMiddleware");

// ======================================
// Customer Contact Form
// Public Route
// ======================================
router.post(
  "/",
  createContactMessage
);

// ======================================
// Get All Messages
// Admin Only
// ======================================
router.get(
  "/",
  authenticateToken,
  requireAdmin,
  getContactMessages
);

// ======================================
// Update Message Status
// Admin Only
// ======================================
router.put(
  "/:id/status",
  authenticateToken,
  requireAdmin,
  updateContactMessageStatus
);

module.exports = router;