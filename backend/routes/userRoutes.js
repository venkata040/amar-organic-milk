const express = require("express");

const router = express.Router();

const {
  getAllCustomers,
} = require("../controllers/userController");

const authenticateToken = require("../middleware/authMiddleware");
const requireAdmin = require("../middleware/adminMiddleware");

// ======================================
// Get All Customers
// ======================================
// Admin only
router.get(
  "/",
  authenticateToken,
  requireAdmin,
  getAllCustomers
);

module.exports = router;