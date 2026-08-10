const express = require("express");
const router = express.Router();

const {
  getAllOrders,
  createOrder,
  updateOrderStatus,
} = require("../controllers/orderController");

// JWT authentication middleware
const authenticateToken = require("../middleware/authMiddleware");

// Admin authorization middleware
const requireAdmin = require("../middleware/adminMiddleware");

// ======================================
// Get All Orders
// ======================================
// Admin only
router.get(
  "/",
  authenticateToken,
  requireAdmin,
  getAllOrders
);

// ======================================
// Create New Order
// ======================================
// Logged-in users can create orders
router.post(
  "/",
  authenticateToken,
  createOrder
);

// ======================================
// Update Order Status
// ======================================
// Admin only
router.put(
  "/:id/status",
  authenticateToken,
  requireAdmin,
  updateOrderStatus
);

module.exports = router;