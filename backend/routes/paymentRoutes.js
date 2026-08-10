const express = require("express");

const router = express.Router();

const {
  getAllPayments,
} = require("../controllers/paymentController");

const authenticateToken = require("../middleware/authMiddleware");
const requireAdmin = require("../middleware/adminMiddleware");

// ======================================
// Get All Payments
// ======================================
// Admin only
router.get(
  "/",
  authenticateToken,
  requireAdmin,
  getAllPayments
);

module.exports = router;