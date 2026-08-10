const express = require("express");

const router = express.Router();

const {
  getSettings,
  updateSettings,
} = require("../controllers/settingsController");

const authenticateToken = require("../middleware/authMiddleware");
const requireAdmin = require("../middleware/adminMiddleware");

// ======================================
// Get Settings
// ======================================
router.get(
  "/",
  authenticateToken,
  requireAdmin,
  getSettings
);

// ======================================
// Update Settings
// ======================================
router.put(
  "/",
  authenticateToken,
  requireAdmin,
  updateSettings
);

module.exports = router;